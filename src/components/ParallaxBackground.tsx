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
      setters.forEach(layer => { layer.x(x * layer.depth * 28); layer.y(y * layer.depth * 22); });
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
      <div className="background-base" />
      {/* Framer move os pais durante a troca de slide. GSAP move os filhos
          pelo mouse. Nenhuma biblioteca sobrescreve o transform da outra. */}
      <motion.div className="background-layer" animate={{ x: reducedMotion ? 0 : (index % 4) * -10, y: reducedMotion ? 0 : (index % 3) * 7 }} transition={{ duration: 1.1, ease: 'easeOut' }}>
        <div className="atmosphere-layer" data-depth="0.45" />
      </motion.div>
      <motion.div className="background-layer" animate={{ x: reducedMotion ? 0 : (index % 3) * 14, y: reducedMotion ? 0 : (index % 4) * -8 }} transition={{ duration: 1.3, ease: 'easeOut' }}>
        <div className="contour-layer" data-depth="0.8">
          <svg className="contour-field" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" fill="none">
            <defs><linearGradient id="contour-stroke" x1="1510" y1="-80" x2="1010" y2="980" gradientUnits="userSpaceOnUse"><stop stopColor="#a0b9b8" stopOpacity=".22" /><stop offset=".6" stopColor="#6c929d" stopOpacity=".1" /><stop offset="1" stopColor="#8e9dba" stopOpacity="0" /></linearGradient></defs>
            <path d="M1770-180C1110-110 1000 250 1190 530S1470 960 1100 1150" fill="#7d9d9b" fillOpacity=".025" />
            {[0, 1, 2, 3, 4].map(line => <path key={line} transform={`translate(${line * 33} ${line * 16})`} d="M1770-180C1110-110 1000 250 1190 530S1470 960 1100 1150" stroke="url(#contour-stroke)" strokeWidth={line === 0 ? 1.2 : .7} />)}
            <path d="M-200 970C100 690 310 1080 690 1120" stroke="#a58e72" strokeOpacity=".09" />
          </svg>
        </div>
      </motion.div>
      <div className="background-grain" />
      <div className="background-vignette" />
    </div>
  );
}
