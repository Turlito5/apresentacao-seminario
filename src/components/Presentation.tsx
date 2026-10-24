import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion, type MotionProps, type Variants } from 'framer-motion';
import { ArrowLeft, ArrowRight, Braces, Expand, Grid2X2, Minimize, NotebookPen, Pause, Play } from 'lucide-react';
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
  const [paused, setPaused] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [status, setStatus] = useState('');
  const systemReducedMotion = useReducedMotion();
  const reducedMotion = Boolean(systemReducedMotion || paused);
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

  // A perspectiva pertence ao palco. O slide sai com zoom-out, profundidade
  // negativa, rotação Y e fade. mode="wait" evita dois Canvas simultâneos.
  const cinematic: Variants = {
    enter: (dir: number) => ({ opacity: 0, x: reducedMotion ? 0 : dir * 74, z: reducedMotion ? 0 : -160, scale: reducedMotion ? 1 : 0.94, rotateY: reducedMotion ? 0 : dir * 9 }),
    center: { opacity: 1, x: 0, z: 0, scale: 1, rotateY: 0, transition: { duration: reducedMotion ? 0.08 : 0.62, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir: number) => ({ opacity: 0, x: reducedMotion ? 0 : -dir * 85, z: reducedMotion ? 0 : -260, scale: reducedMotion ? 1 : 0.88, rotateY: reducedMotion ? 0 : -dir * 14, transition: { duration: reducedMotion ? 0.06 : 0.36, ease: [0.55, 0, 1, 0.45] } }),
  };

  return <div className="presentation-shell" ref={shell}>
    <ParallaxBackground index={index} reducedMotion={reducedMotion} />
    <header className="app-header">
      <a className="brand" href="#slide-1" onClick={event => { event.preventDefault(); goTo(0); }} aria-label="Ir para a capa"><span className="brand-icon"><Braces size={20} /></span><span>LÓGICA EM JOGO<span className="brand-course">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</span></span></a>
      <div className="header-right"><span className="header-edition">SEMINÁRIO ACADÊMICO <span>/</span> 2026</span><button className="icon-button" onClick={() => void toggleFullscreen()} aria-label={fullscreen ? 'Sair da tela cheia' : 'Tela cheia'} title="Tela cheia (F)">{fullscreen ? <Minimize size={18} /> : <Expand size={18} />}</button></div>
    </header>

    <main ref={viewport} className="stage-viewport" aria-label="Apresentação acadêmica">
      <div className="stage-measure" style={{ width: 1280 * scale, height: 720 * scale }}>
        <div className="stage" data-animating={animating} style={{ '--slide-scale': scale } as CSSProperties}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.section key={slide.id} className={`slide slide-${slide.kind}`} custom={direction} variants={cinematic}
              initial="enter" animate="center" exit="exit" transformTemplate={crispTransform}
              aria-label={`Slide ${slide.id} de 12: ${slide.menuTitle}`}
              onAnimationComplete={definition => {
                if (definition === 'center') { transitioning.current = false; setAnimating(false); }
              }}>
              {/* <div className="slide-heading"><span className="slide-eyebrow"><span />{slide.chapter}</span><span className="slide-index">{String(slide.id).padStart(2, '0')}<span>/ 12</span></span></div> */}
              {/* O conteúdo avança mais e chega antes do fundo (1,25 s).
                  As palavras têm um terceiro tempo de entrada em TextReveal. */}
              <motion.div className="slide-content"
                transformTemplate={crispTransform}
                initial={{ x: reducedMotion ? 0 : direction * 32, y: reducedMotion ? 0 : 12, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: reducedMotion ? 0.08 : 0.58, delay: reducedMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}>
                <SlideContent slide={slide} reducedMotion={reducedMotion} sceneReady={!animating} />
              </motion.div>
              <footer className="slide-source">{slide.source}</footer>
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </main>

    <footer className="app-footer">
      <div className="footer-tools">
        <button className="tool-button" onClick={() => setDialog('overview')} title="Todos os slides (O)"><Grid2X2 size={17} /><span>Slides</span></button>
        <button className="tool-button" onClick={() => setDialog('notes')} title="Notas de fala (N)"><NotebookPen size={17} /><span>Notas</span></button>
        <button className="tool-button motion-toggle" onClick={() => setPaused(value => !value)} aria-pressed={reducedMotion} aria-label={reducedMotion ? 'Animações reduzidas' : 'Reduzir animações'} title={systemReducedMotion ? 'Movimento reduzido conforme preferência do sistema' : paused ? 'Retomar animações' : 'Reduzir animações'}>{reducedMotion ? <Play size={16} /> : <Pause size={16} />}</button>
      </div>
      <nav className="slide-progress" aria-label="Escolher slide">
        {slidesData.map((item, i) => <button key={item.id} className={`progress-step ${i === index ? 'active' : ''} ${i < index ? 'passed' : ''}`} onClick={() => goTo(i)} aria-label={`Ir para slide ${item.id}: ${item.menuTitle}`} aria-current={i === index ? 'step' : undefined} title={`${String(item.id).padStart(2, '0')} / ${item.menuTitle}`}><span /></button>)}
      </nav>
      <div className="footer-navigation"><span className="navigation-count">{String(index + 1).padStart(2, '0')} <span>/ 12</span></span><button className="nav-button" disabled={index === 0} onClick={() => goTo(index - 1)} aria-label="Slide anterior"><ArrowLeft size={20} /></button><button className="nav-button nav-next" disabled={index === TOTAL - 1} onClick={() => goTo(index + 1)} aria-label="Próximo slide"><ArrowRight size={20} /></button></div>
    </footer>
    <p className="sr-only" role="status" aria-live="polite">Slide {index + 1} de 12: {slide.menuTitle}</p>
    {status && <div className="status-toast" role="status">{status}</div>}
    <PresentationDialog mode={dialog} current={index} onClose={() => setDialog(null)} onSelect={goTo} />
  </div>;
}
