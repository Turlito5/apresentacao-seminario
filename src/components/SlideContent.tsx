import { lazy, Suspense } from 'react';
import { ArrowDownRight, ArrowRight, BookOpen, Code2, ExternalLink, Layers3 } from 'lucide-react';
import { article, conceptMappings, methodMetrics, team, type Point, type Slide } from '../data/slidesData';
import TextReveal from './TextReveal';
import { ThinkingDiagram, WorkshopTimeline } from './LearningDiagrams';
import { AdaptationTable, GameAnatomy, MethodFlow, ResultsComparison, SynthesisColumns } from './AcademicDiagrams';

// O WebGL só é baixado e instanciado no slide 2. Ao sair, Canvas e
// OrbitControls são desmontados e deixam de consumir frames da GPU.
const ScratchBlock3D = lazy(() => import('./ScratchBlock3D'));

function Points({ points, compact = false }: { points: Point[]; compact?: boolean }) {
  return <ul className={`point-list ${compact ? 'compact' : ''}`}>
    {points.map((point, index) => <li key={point.title}>
      <span className="point-number">{String(index + 1).padStart(2, '0')}</span>
      <div><h3>{point.title}</h3><p>{point.text}</p></div>
    </li>)}
  </ul>;
}

function CoverSculpture() {
  return <svg className="cover-sculpture" viewBox="0 0 440 245" fill="none" aria-hidden="true">
    <path d="M65 174 220 89 375 174 220 259Z" stroke="#52647a" strokeOpacity=".16" />
    <path d="M88 137 219 65 350 137 219 209Z" fill="#111e30" stroke="#6f849c" strokeOpacity=".6" />
    <path d="m88 137 0 24 131 73 131-73v-24M219 209v25" stroke="#52647a" strokeOpacity=".5" />
    <path d="M105 86 220 23 335 86 220 150Z" fill="#1e3048" stroke="#8397b1" strokeOpacity=".8" />
    <path d="M105 86v31l115 64 115-64V86M220 150v31" stroke="#8397b1" strokeOpacity=".6" />
    <path d="m158 85 29-16m-9 28 29-16m-8 28 56-31m-35 43 55-31" stroke="#b5c5d9" strokeWidth="2" strokeLinecap="round" />
    <path d="m285 146 28-16v16l-28 16Z" fill="#d59b67" />
    <path d="M40 110h34m-17-17v34M367 57h23m-11.5-11.5v23" stroke="#73869e" strokeOpacity=".5" />
  </svg>;
}

export default function SlideContent({ slide, reducedMotion, sceneReady }: { slide: Slide; reducedMotion: boolean; sceneReady: boolean }) {
  const heading = <TextReveal text={slide.title} className="slide-title" reducedMotion={reducedMotion} />;
  const subheading = slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>;

  if (slide.kind === 'cover') return <div className="cover-layout">
    <div className="cover-copy">
      <TextReveal as="h1" text={slide.title} className="cover-title" reducedMotion={reducedMotion} />
      <p className="cover-subtitle">{slide.subtitle}</p>
      <div className="cover-publication">
        <span className="micro-label">AUTORES</span>
        <p>{article.authors.join('; ')}.</p>
        <div className="venue"><span className="venue-year">{article.year}</span><p>{article.venue}</p></div>
      </div>
    </div>
    <div className="cover-side">
      <CoverSculpture />
      <div className="team-panel glass-panel">
        <div className="team-heading"><span className="micro-label">EQUIPE E DIVISÃO DE FALA</span><span>SLIDES</span></div>
        <table aria-label="Integrantes e divisão das falas"><tbody>
          {team.map(member => <tr key={member.name}>
            <th scope="row"><span className="placeholder">{member.name}</span><span className="member-part">{member.part}</span></th>
            <td>{member.range}</td>
          </tr>)}
        </tbody></table>
      </div>
    </div>
  </div>;

  if (slide.kind === 'problem') return <div className="problem-layout">
    <div>{heading}{subheading}<Points points={slide.points} compact /></div>
    <Suspense fallback={<div className="scene-loading"><div className="loading-block">mover <span>10</span> passos</div><p>Preparando a cena interativa…</p></div>}>
      <ScratchBlock3D reducedMotion={reducedMotion} active={sceneReady} />
    </Suspense>
  </div>;

  if (slide.kind === 'objective') return <div>
    {heading}{subheading}
    <div className="objective-row">
      {slide.points.map((point, index) => <div className="objective-step" key={point.title}>
        <span className="objective-number">0{index + 1}</span><h3>{point.title}</h3><p>{point.text}</p>
      </div>)}
    </div>
    <p className="academic-takeaway">{slide.takeaway}</p>
    <p className="article-sections">Introdução · Fundamentação · Metodologia · Relato · Lições aprendidas · Considerações finais</p>
  </div>;

  if (slide.kind === 'theory') return <div>
    {heading}{subheading}
    <ThinkingDiagram points={slide.points} reducedMotion={reducedMotion} />
  </div>;

  if (slide.kind === 'method') return <div>
    {heading}{subheading}
    <MethodFlow points={slide.points} />
    <p className="academic-takeaway">{slide.takeaway}</p>
  </div>;

  if (slide.kind === 'games') return <div>
    {heading}{subheading}
    <GameAnatomy points={slide.points} />
    <p className="academic-takeaway">{slide.takeaway}</p>
  </div>;

  if (slide.kind === 'application') return <div>
    {heading}{subheading}
    <WorkshopTimeline points={slide.points} metrics={methodMetrics} reducedMotion={reducedMotion} />
  </div>;

  if (slide.kind === 'results') return <div>
    {heading}{subheading}
    <ResultsComparison columns={slide.columns ?? []} />
  </div>;

  if (slide.kind === 'lessons') return <div>
    {heading}{subheading}
    <AdaptationTable points={slide.points} />
    <p className="academic-takeaway">{slide.takeaway}</p>
  </div>;

  if (slide.kind === 'synthesis') return <div>
    {heading}{subheading}
    <SynthesisColumns columns={slide.columns ?? []} />
  </div>;

  if (slide.kind === 'production') return <div>
    {heading}{subheading}
    <div className="process-row">
      {slide.points.map((point, index) => <div className="process-step" key={point.title}>
        <div className={`process-mark mark-${index}`} aria-hidden="true">{index === 0 ? <BookOpen size={34} /> : index === 1 ? <Code2 size={34} /> : <Layers3 size={34} />}</div>
        <span className="micro-label">0{index + 1}</span><h3>{point.title}</h3><p>{point.text}</p>
        {index < 2 && <ArrowRight className="process-arrow" size={28} aria-hidden="true" />}
      </div>)}
    </div>
    <div className="quiet-callout"><span>DESAFIOS</span><p>Combinar comandos, trabalhar com coordenadas e lembrar variáveis.</p></div>
  </div>;

  if (slide.kind === 'engagement') return <div>
    {heading}
    <div className="evidence-layout">
      <Points points={slide.points} />
      <div className="evidence-panel glass-panel">
        <span className="micro-label">TIPO DE EVIDÊNCIA</span><h3>Observações<br />qualitativas.</h3>
        <div className="evidence-rule" />
        <p>Sem medida comparativa<br />do ganho de aprendizagem.</p>
        <span className="diagram-caption">Ausência de teste antes/depois e de grupo de controle.</span>
      </div>
    </div>
  </div>;

  if (slide.kind === 'conclusion') return <div>
    {heading}
    <div className="conclusion-grid">
      {slide.points.map((point, index) => <div key={point.title}><span className="conclusion-index">0{index + 1}</span><div><h3>{point.title}</h3><p>{point.text}</p></div></div>)}
    </div>
    <p className="bottom-insight"><ArrowDownRight size={25} /> Materiais contextualizados e orientação sustentam a experiência.</p>
  </div>;

  if (slide.kind === 'critique') return <div>
    {heading}{subheading}
    <div className="critique-grid">
      {slide.points.map(point => <div key={point.title}><h3>{point.title}</h3><p>{point.text}</p></div>)}
    </div>
    <div className="group-reflection"><span className="micro-label">NOSSA REFLEXÃO</span><p className="placeholder">[REFLEXÃO OU EXEMPLO DO GRUPO]</p></div>
  </div>;

  if (slide.kind === 'impact') return <div>
    {heading}{subheading}
    <table className="impact-table">
      <thead><tr><th scope="col">NA CRIAÇÃO DE JOGOS</th><th aria-label="relação" /><th scope="col">NA FORMAÇÃO EM ADS</th></tr></thead>
      <tbody>{conceptMappings.map(([game, ads]) => <tr key={game}><td>{game}</td><td><ArrowRight size={22} aria-hidden="true" /></td><td>{ads}</td></tr>)}</tbody>
    </table>
    <p className="impact-caption">Aplicação possível: miniprojetos de jogos em disciplinas introdutórias.</p>
  </div>;

  if (slide.kind === 'discussion') return <div className="discussion-layout">
    <div className="discussion-line" aria-hidden="true" />
    <TextReveal text={slide.title} className="discussion-title" reducedMotion={reducedMotion} />
    <p className="discussion-question">{slide.subtitle}</p>
    <p className="discussion-example">{slide.takeaway}</p>
  </div>;

  return <div className="reference-layout">
    {heading}{subheading}
    <div className="reference-text"><p>{article.reference}</p><p>Disponível em: <a href={article.doi} target="_blank" rel="noreferrer">{article.doi}</a>. Acesso em: <span className="placeholder">{article.accessDate}</span>.</p></div>
    <a className="article-link" href={article.doi} target="_blank" rel="noreferrer"><BookOpen size={20} /> Consultar o artigo <ExternalLink size={17} /></a>
  </div>;
}
