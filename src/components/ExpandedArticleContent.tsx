import { useEffect, useRef, useState } from 'react';
import { BookOpen, Monitor, Settings2 } from 'lucide-react';
import { methodMetrics, type ExperienceStage, type Point, type Slide } from '../data/slidesData';
import { detailedWorkshopTopics } from '../data/articleCoverage';
import ScratchBlock2D from './ScratchBlock2D';

/** O contexto anterior à BNCC fica no próprio slide, na ordem do artigo. */
export function IntroductionContext({ slide }: { slide: Slide }) {
  const project = slide.context?.[0];
  return <div className="expanded-intro">
    <ol className="intro-arguments" aria-label="Contexto da introdução antes do projeto">
      {slide.points.map((point, index) => <li key={point.title}>
        <span className="argument-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div><h3>{point.title}</h3><p>{point.text}</p></div>
      </li>)}
    </ol>
    <div className="intro-project">
      {project && <section className="project-purpose"><h3>{project.title}</h3><p>{project.text}</p></section>}
      <section className="project-objective"><h3>Objetivo do artigo</h3><p>{slide.takeaway}</p></section>
      <p className="project-genre">Gênero: relato de experiência.</p>
      <ScratchBlock2D compact />
    </div>
  </div>;
}

/** As definições dos autores e dos quatro pilares ficam visíveis ao mesmo tempo.
 * A seleção por teclado só destaca o pilar: não esconde conteúdo acadêmico. */
export function ComputationalFoundation({ slide }: { slide: Slide }) {
  const [active, setActive] = useState(0);
  const pillarsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey ||
          (event.target as HTMLElement).closest('input, textarea, select, [contenteditable]') ||
          document.querySelector('dialog[open]')) return;
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      event.preventDefault();
      const direction = event.key === 'ArrowDown' ? 1 : -1;
      const next = (active + direction + slide.points.length) % slide.points.length;
      setActive(next);
      // O foco acompanha o destaque, evitando duas marcações visuais diferentes.
      pillarsRef.current?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus({ preventScroll: true });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, slide.points.length]);
  return <div className="pc-foundation">
    <p className="foundation-scope"><span aria-hidden="true" />{slide.sectionIntro}</p>
    <div className="pc-definitions">
      {slide.context?.map(definition => <section key={definition.title}>
        <h3>{definition.title}</h3><p>{definition.text}</p>
        {definition.detail && <p className="pc-definition-detail">{definition.detail}</p>}
      </section>)}
    </div>
    <div ref={pillarsRef} className="pc-pillars-expanded" role="group" aria-label="Os quatro pilares do pensamento computacional">
      {slide.points.map((point, index) => <button key={point.title} type="button"
        className={`pc-pillar-card ${active === index ? 'is-active' : ''}`}
        aria-pressed={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)}>
        <span className="pc-pillar-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <strong>{point.title}</strong><span className="pc-pillar-definition">{point.text}</span>
      </button>)}
    </div>
    <p className="pc-foundation-note">{slide.takeaway}</p>
    <p className="sr-only" role="status" aria-live="polite">Pilar destacado: {slide.points[active]?.title}</p>
  </div>;
}

/** O espaço do exemplo de coleta é dedicado à argumentação pedagógica da seção 2.2. */
export function GamesLearningContent({ slide }: { slide: Slide }) {
  const icons = [BookOpen, Settings2, Monitor];
  return <div className="expanded-games">
    <div className="game-definitions-expanded">
      {slide.points.map((point, index) => { const Icon = icons[index] ?? Monitor;
        return <section key={point.title}><div className="definition-heading"><h3>{point.title}</h3><Icon aria-hidden="true" /></div><p>{point.text}</p></section>;
      })}
    </div>
    <div className="games-pedagogy">
      {slide.context?.map(point => <section key={point.title}><h3>{point.title}</h3><p>{point.text}</p></section>)}
    </div>
    <p className="game-genres-expanded">{slide.takeaway}</p>
  </div>;
}

/** Quadro 3: dez encontros com conteúdo específico, em ordem 1–10. */
export function WorkshopCoverage({ slide }: { slide: Slide }) {
  return <div className="expanded-workshops">
    <div className="workshop-metrics-expanded">
      {methodMetrics.map(metric => <div key={metric.label}><span className="expanded-metric-value">{metric.value}</span><div><strong>{metric.label}</strong><span>{metric.detail}</span></div></div>)}
    </div>
    <div className="workshop-coverage-grid">
      <aside className="workshop-profile" aria-label="Participantes, equipe, materiais e ambiente">
        <p className="workshop-preparation">{slide.takeaway}</p>
        {slide.points.map(point => <section key={point.title}><h3>{point.title}</h3><p>{point.text}</p></section>)}
      </aside>
      <section className="workshop-program" aria-label="Dez oficinas e conteúdos do Quadro 3">
        <h3>Conteúdos das 10 oficinas · Quadro 3</h3>
        <ol>{detailedWorkshopTopics.map((topic, index) => <li key={topic.title}>
          <span className="workshop-program-number" aria-hidden="true">{index + 1}.</span>
          <div><h4>{topic.title}</h4><p>{topic.detail}</p></div>
        </li>)}</ol>
      </section>
      {slide.context?.map(point => <section className="workshop-resources-strip" key={point.title}><h3>{point.title}</h3><p>{point.text}</p></section>)}
    </div>
  </div>;
}

/** Ordem explícita do relato: teoria → prática → criação → absorção.
 * Ações e observações são separadas, preservando a natureza observacional do estudo. */
export function ExperienceSequence({ stages }: { stages: ExperienceStage[] }) {
  return <table className="experience-sequence" aria-label="Atividades e resultados na ordem das seções 4.3.1 a 4.5">
    <caption className="sr-only">Sequência do relato de experiência, com atividades e observações dos autores.</caption>
    <colgroup><col className="experience-stage-column" /><col className="experience-activity-column" /><col className="experience-observation-column" /></colgroup>
    <thead><tr><th scope="col">Seção / etapa</th><th scope="col">O que foi desenvolvido</th><th scope="col">Observações dos autores</th></tr></thead>
    <tbody>{stages.map(stage => <tr key={stage.section}>
      <th scope="row"><span className="experience-section">{stage.section}</span><h3>{stage.title}</h3></th>
      <td>{stage.activity}</td><td>{stage.observation}</td>
    </tr>)}</tbody>
  </table>;
}

/** Seção 5: a numeração segue os argumentos dos dois parágrafos do artigo. */
export function LessonsLearned({ points }: { points: Point[] }) {
  return <ol className="article-lessons-list" aria-label="Lições aprendidas na ordem da seção 5">
    {points.map((point, index) => <li key={point.title}>
      <span className="article-lesson-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div><h3>{point.title}</h3><p>{point.text}</p></div>
    </li>)}
  </ol>;
}
