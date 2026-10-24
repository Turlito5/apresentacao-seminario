import { useLayoutEffect, useState, type RefObject } from 'react';

/** Calcula medidas nativas para o palco 16:9. Não aplica transform: scale. */
export function useStageScale(container: RefObject<HTMLDivElement | null>) {
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const element = container.current;
    if (!element) return;
    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      if (width > 0 && height > 0) setScale(Math.min(width / 1280, height / 720));
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [container]);
  return scale;
}
