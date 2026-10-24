import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ParallaxBackground({ index, reducedMotion }: { index: number; reducedMotion: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || reducedMotion) return;
    const layers = [...root.current.querySelectorAll<HTMLElement>('[data-depth]')];
    // quickTo reaproveita os tweens. O ponteiro não causa renders de React.
    const setters = layers.map(layer => ({
      depth: Number(layer.dataset.depth),
      x: gsap.quickTo(layer, 'x', { duration: 1.3, ease: 'power3.out' }),
      y: gsap.quickTo(layer, 'y', { duration: 1.3, ease: 'power3.out' }),
    }));
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      setters.forEach(layer => { layer.x(x * layer.depth * 42); layer.y(y * layer.depth * 32); });
    };
    const reset = () => setters.forEach(layer => { layer.x(0); layer.y(0); });
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', reset);
      setters.forEach(layer => { layer.x.tween.kill(); layer.y.tween.kill(); });
      gsap.set(layers, { clearProps: 'transform' });
    };
  }, [reducedMotion]);

  return (
    <div ref={root} className="parallax-background" aria-hidden="true">
      {/* Framer move os pais durante a troca de slide. GSAP move os filhos
          pelo mouse. Nenhuma biblioteca sobrescreve o transform da outra. */}
      <motion.div className="background-layer" animate={{ x: reducedMotion ? 0 : -index * 8 }} transition={{ duration: 1.25, ease: 'easeOut' }}>
        <div className="grid-layer" data-depth="0.35" />
      </motion.div>
      <motion.div className="background-layer" animate={{ x: reducedMotion ? 0 : index * 13, y: reducedMotion ? 0 : (index % 3) * 8 }} transition={{ duration: 1.4, ease: 'easeOut' }}>
        <div className="atmosphere-layer" data-depth="0.75" />
      </motion.div>
      <div className="geometry-layer" data-depth="1">
        <span className="geometry-square square-one" />
        <span className="geometry-square square-two" />
        <span className="geometry-line" />
      </div>
      <div className="background-vignette" />
    </div>
  );
}
