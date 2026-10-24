import { ArrowRight, BookOpen, Code2, Layers3, Monitor, Settings2 } from 'lucide-react';
import type { Point, Slide } from '../data/slidesData';
import './academic-diagrams.css';

// Diagramas vetoriais/HTML em escala nativa: não acrescentam Canvas ou
// transformações permanentes ao texto. Os exemplos são identificados como didáticos.
export function GameAnatomy({ points }: { points: Point[] }) {
  const icons = [BookOpen, Settings2, Monitor];
  const examples = ['Objetivo: coletar uma moeda.', 'Ao tocar na moeda, somar um ponto.', 'Exibir personagem, moeda e placar.'];
  return <figure className="academic game-anatomy">
    <div className="game-anatomy-parts">
      {points.map((point, i) => { const Icon = icons[i]; return <div className="game-part" key={point.title}>
        <div className="process-mark"><Icon aria-hidden="true" /></div>
        <h3>{point.title}</h3><p>{point.text}</p>
        <div className="game-example"><span className="micro-label">NO EXEMPLO</span><p>{examples[i]}</p></div>
      </div>; })}
    </div>
    <figcaption>Exemplo didático: um jogo de coleta. Os três componentes atuam em conjunto.</figcaption>
  </figure>;
}

export function MethodFlow({ points }: { points: Point[] }) {
  return <ol className="academic academic-method" aria-label="Quatro etapas da metodologia">
    {points.map((point, i) => <li key={point.title}>
      <div className="method-node"><span>{String(i + 1).padStart(2, '0')}</span>{i < points.length - 1 && <ArrowRight aria-hidden="true" />}</div>
      <h3>{point.title}</h3><p>{point.text}</p>
    </li>)}
  </ol>;
}

export function ResultsComparison({ columns }: { columns: NonNullable<Slide['columns']> }) {
  const icons = [BookOpen, Code2, Layers3];
  return <div className="academic academic-results">
    <div className="result-process" aria-label="Síntese da criação dos jogos">
      {['Roteiro', 'Programação', 'Criação'].map((label, i) => { const Icon = icons[i]; return <div key={label}><Icon aria-hidden="true" /><span>{label}</span>{i < 2 && <ArrowRight className="result-process-arrow" aria-hidden="true" />}</div>; })}
    </div>
    <div className="result-columns">
      {columns.map((column, i) => <section key={column.title} className={`result-column result-column-${i}`} aria-label={column.title}>
        <h3 className="academic-column-title">{column.title}</h3>
        <ul>{column.points.map(point => <li key={point.title}><h4>{point.title}</h4><p>{point.text}</p></li>)}</ul>
      </section>)}
    </div>
  </div>;
}

export function AdaptationTable({ points }: { points: Point[] }) {
  return <table className="academic adaptation-table">
    <thead><tr><th scope="col">CONDIÇÃO ENCONTRADA</th><th aria-label="adaptação" /><th scope="col">RESPOSTA NA PRÁTICA</th></tr></thead>
    <tbody>{points.map(point => <tr key={point.title}><th scope="row">{point.title}</th><td><ArrowRight aria-hidden="true" /></td><td>{point.text}</td></tr>)}</tbody>
  </table>;
}

export function SynthesisColumns({ columns }: { columns: NonNullable<Slide['columns']> }) {
  return <div className="academic synthesis-columns">
    {columns.map((column, i) => <section key={column.title} aria-label={column.title}>
      <span className="micro-label">{i === 0 ? 'O ARTIGO' : i === 1 ? 'NOSSA ANÁLISE' : 'NOSSO CURSO'}</span>
      <h3 className="academic-column-title">{column.title}</h3>
      <ul>{column.points.map(point => <li key={point.title}><h4>{point.title}</h4><p>{point.text}</p></li>)}</ul>
    </section>)}
  </div>;
}
