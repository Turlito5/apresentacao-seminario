import { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { slidesData, team } from '../data/slidesData';

export type DialogMode = 'overview' | 'notes' | null;

export default function PresentationDialog({ mode, current, onClose, onSelect }: {
  mode: DialogMode; current: number; onClose: () => void; onSelect: (index: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (mode && !ref.current?.open) ref.current?.showModal();
    if (!mode && ref.current?.open) ref.current.close();
  }, [mode]);
  const slide = slidesData[current];
  return <dialog ref={ref} className="presentation-dialog" onClose={onClose} onCancel={onClose} aria-labelledby="dialog-title">
    <div className="dialog-heading"><div><span className="micro-label">LÓGICA EM JOGO</span><h2 id="dialog-title">{mode === 'notes' ? 'Notas de fala' : 'Todos os slides'}</h2></div><button className="icon-button" onClick={onClose} aria-label="Fechar painel"><X size={20} /></button></div>
    {mode === 'notes' ? <div className="notes-content">
      <p className="notes-owner">{team[Math.floor(current / 4)].name} <span>Slide {current + 1} de 12</span></p>
      <h3>{slide.menuTitle}</h3><p className="notes-script">{slide.notes}</p>
      <p className="notes-source">{slide.source}</p>
      <div className="notes-next"><span>PRÓXIMO</span><p>{slidesData[current + 1]?.menuTitle ?? 'Fim da apresentação'}</p></div>
      <p className="notes-disclosure">Este painel aparece nesta tela. Feche-o antes de projetar os slides.</p>
    </div> : <div className="overview-grid">
      {slidesData.map((item, index) => <button className={`overview-item ${index === current ? 'selected' : ''}`} key={item.id}
        aria-current={index === current ? 'step' : undefined}
        onClick={() => { onSelect(index); onClose(); }}>
        <span className="overview-number">{String(item.id).padStart(2, '0')}</span><strong>{item.menuTitle}</strong><ArrowUpRight size={18} />
      </button>)}
    </div>}
  </dialog>;
}
