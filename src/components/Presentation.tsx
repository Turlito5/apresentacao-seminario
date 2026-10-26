import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion, type MotionProps, type Variants } from 'framer-motion';
import { Braces, Expand, Minimize } from 'lucide-react';
import { slidesData } from '../data/slidesData';
import { useStageScale } from '../hooks/useStageScale';
import ParallaxBackground from './ParallaxBackground';
import SlideContent from './SlideContent';
import PresentationDialog, { type DialogMode } from './PresentationDialog';

const TOTAL = slidesData.length;

// Ao terminar uma animação, remove inclusive matrix3d/translateZ(0).
// Assim o navegador volta a rasterizar texto na resolução nativa da tela.
const crispTransform: NonNullable<MotionProps['transformTemplate']> = (values, generated) => {
  const neutral = Object.entries(values).every(([key, value]) => {
    const number = Number.parseFloat(String(value));
    return key.startsWith('scale') ? number === 1 : number === 0;
  });
  return neutral ? 'none' : generated;
};
function initialIndex() {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  const value = match ? Number(match[1]) - 1 : 0;
  return Math.max(0, Math.min(TOTAL - 1, value));
}

export default function Presentation() {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [dialog, setDialog] = useState<DialogMode>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [status, setStatus] = useState('');
  const reducedMotion = Boolean(useReducedMotion());
  const viewport = useRef<HTMLDivElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  const transitioning = useRef(false);
  const scale = useStageScale(viewport);
  const slide = slidesData[index];

  const goTo = useCallback((target: number) => {
    const next = Math.max(0, Math.min(TOTAL - 1, target));
    if (next === index || transitioning.current) return;
    transitioning.current = true;
    setAnimating(true);
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }, [index]);

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (shell.current?.requestFullscreen) await shell.current.requestFullscreen();
      else setStatus('Use o botão de tela cheia do navegador.');
    } catch { setStatus('A tela cheia não está disponível nesta janela. Abra em uma aba do navegador.'); }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, '', `#slide-${index + 1}`);
  }, [index]);

  useEffect(() => {
    const change = () => goTo(initialIndex());
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, [goTo]);

  useEffect(() => {
    const update = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', update);
    return () => document.removeEventListener('fullscreenchange', update);
  }, []);

  useEffect(() => {
    if (!status) return;
    const timer = window.setTimeout(() => setStatus(''), 5000);
    return () => window.clearTimeout(timer);
  }, [status]);

  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || dialog ||
          target.closest('input, textarea, select, [contenteditable], [data-no-slide-nav]')) return;
      switch (event.key) {
        case 'ArrowRight': case 'PageDown': event.preventDefault(); goTo(index + 1); break;
        case ' ': if (!target.closest('button, a')) { event.preventDefault(); goTo(index + 1); } break;
        case 'ArrowLeft': case 'PageUp': event.preventDefault(); goTo(index - 1); break;
        case 'Home': event.preventDefault(); goTo(0); break;
        case 'End': event.preventDefault(); goTo(TOTAL - 1); break;
        case 'n': case 'N': setDialog('notes'); break;
        case 'o': case 'O': setDialog('overview'); break;
        case 'f': case 'F': void toggleFullscreen(); break;
      }
    };
    window.addEventListener('keydown', keydown);
    return () => window.removeEventListener('keydown', keydown);
  }, [index, goTo, dialog, toggleFullscreen]);

  // Fade direcional curto: preserva o tamanho do texto durante a troca.
  // mode="wait" deixa o slide anterior sair antes de revelar o próximo.
  const slideTransition: Variants = {
    enter: (dir: number) => ({ opacity: 0, x: reducedMotion ? 0 : dir * 28 }),
    center: { opacity: 1, x: 0, transition: { duration: reducedMotion ? 0.08 : 0.44, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({ opacity: 0, x: reducedMotion ? 0 : -dir * 14, transition: { duration: reducedMotion ? 0.06 : 0.18, ease: [0.4, 0, 1, 1] } }),
  };

  return <div className="presentation-shell" ref={shell}>
    <ParallaxBackground index={index} reducedMotion={reducedMotion} />
    <header className="app-header">
      <a className="brand" href="#slide-1" onClick={event => { event.preventDefault(); goTo(0); }} aria-label="Ir para a capa"><span className="brand-icon"><Braces size={20} /></span><span>LÓGICA EM JOGO<span className="brand-course">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</span></span></a>
      <div className="header-right"><button className="icon-button" onClick={() => void toggleFullscreen()} aria-label={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'} title="Tela cheia (F)">{fullscreen ? <Minimize size={18} /> : <Expand size={18} />}</button></div>
    </header>

    <main ref={viewport} className="stage-viewport" aria-label="Apresentação acadêmica">
      <div className="stage-measure" style={{ width: 1280 * scale, height: 720 * scale }}>
        <div className="stage" data-animating={animating} style={{ '--slide-scale': scale } as CSSProperties}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.section key={slide.id} className={`slide slide-${slide.kind}`} custom={direction} variants={slideTransition}
              initial="enter" animate="center" exit="exit" transformTemplate={crispTransform}
              aria-label={`Slide ${slide.id} de 12: ${slide.menuTitle}`}
              onAnimationComplete={definition => {
                if (definition === 'center') { transitioning.current = false; setAnimating(false); }
              }}>
              {/* <div className="slide-heading"><span className="slide-eyebrow"><span />{slide.chapter}</span><span className="slide-index">{String(slide.id).padStart(2, '0')}<span>/ 12</span></span></div> */}
              {/* O fundo chega mais devagar; TextReveal revela só os títulos. */}
              <div className="slide-content">
                <SlideContent slide={slide} reducedMotion={reducedMotion} />
              </div>
              <footer className="slide-source">{slide.source}</footer>
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </main>

    <p className="sr-only" role="status" aria-live="polite">Slide {index + 1} de 12: {slide.menuTitle}</p>
    {status && <div className="status-toast" role="status">{status}</div>}
    <PresentationDialog mode={dialog} current={index} onClose={() => setDialog(null)} onSelect={goTo} />
  </div>;
}
