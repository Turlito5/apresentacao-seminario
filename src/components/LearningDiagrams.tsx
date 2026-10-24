import { useEffect, useRef, useState } from 'react';
import { motion, useIsPresent } from 'framer-motion';
import { ArrowRight, Flag, Play, RotateCcw } from 'lucide-react';
import type { Point } from '../data/slidesData';
import './learning-diagrams.css';

interface DiagramProps { points: Point[]; reducedMotion: boolean }

/** Vetores no tamanho nativo do slide. Estes exemplos são didáticos,
 * não reproduções dos jogos dos participantes nem dados de desempenho. */
function Player({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return <g transform={`translate(${x} ${y})`}>
    <rect x="-12" y="-30" width="24" height="21" rx="7" fill="#d9e3f0" />
    <rect x="-9" y="-7" width="18" height="18" rx="4" fill="#8da8c9" />
    <path d="M-5 11v7m10-7v7" stroke="#d9e3f0" strokeWidth="4" strokeLinecap="round" />
    <circle cx="-4" cy="-19" r="2" fill="#26364c" /><circle cx="4" cy="-19" r="2" fill="#26364c" />
  </g>;
}

function Goal({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><path d="M0 0v-56" stroke="#b9c9dd" strokeWidth="3" strokeLinecap="round" /><path d="M2-55h33l-9 13 9 13H2Z" fill="#d4a175" /><path d="M-10 2h20" stroke="#788da8" strokeWidth="3" strokeLinecap="round" /></g>;
}

const pillarHints = [
  'Separar personagem, cenário e regras.',
  'Reconhecer o movimento que se repete.',
  'Manter o caminho e o objetivo em foco.',
  'Definir a ordem das ações.',
];

export function ThinkingDiagram({ points, reducedMotion }: DiagramProps) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const diagram = useRef<HTMLDivElement>(null);
  const isPresent = useIsPresent();

  useEffect(() => {
    if (!isPresent) return;
    // Atalho do slide inteiro, inclusive quando o foco está na navegação.
    // Painéis abertos e campos de edição mantêm seu comportamento normal.
    const changePillar = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey ||
          document.querySelector('dialog[open]') ||
          target?.closest('input, textarea, select, [contenteditable], [data-no-slide-nav]') ||
          diagram.current?.closest('.stage')?.getAttribute('data-animating') === 'true') return;
      event.preventDefault();
      const next = (active + (event.key === 'ArrowDown' ? 1 : -1) + points.length) % points.length;
      setActive(next);
      // Só acompanha o foco se o usuário já estiver nos botões dos pilares.
      if (target?.closest('.edu-pillars')) buttons.current[next]?.focus({ preventScroll: true });
    };
    window.addEventListener('keydown', changePillar);
    return () => window.removeEventListener('keydown', changePillar);
  }, [active, points.length, isPresent]);

  return <div className="edu-theory" ref={diagram}>
    <div className="edu-pillars" role="group" aria-label="Explorar os quatro pilares" aria-keyshortcuts="ArrowDown ArrowUp">
      {points.map((point, index) => <button key={point.title} ref={element => { buttons.current[index] = element; }}
        className={`edu-pillar ${index === active ? 'is-active' : ''}`} aria-pressed={index === active}
        onClick={() => setActive(index)}>
        <span className="edu-step-number">0{index + 1}</span>
        <span><span className="edu-pillar-title">{point.title}</span><span className="edu-pillar-description">{point.text}</span></span>
      </button>)}
      <p className="edu-keyboard-hint">↑ / ↓ para alternar o tópico</p>
    </div>
    <p className="sr-only" role="status" aria-live="polite">Tópico {active + 1} de {points.length}: {points[active].title}</p>
    <figure className="edu-game-diagram">
      <div className="edu-figure-heading"><span>UM JOGO, DIFERENTES FORMAS DE PENSAR</span><span className="edu-mode-number">0{active + 1}</span></div>
      <svg viewBox="0 0 590 228" role="img" aria-label={`Exemplo de ${points[active].title.toLowerCase()}: ${pillarHints[active]}`}>
        <defs><pattern id="thinking-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#91a8c4" strokeOpacity=".08" /></pattern></defs>
        <rect x="18" y="18" width="554" height="190" rx="14" fill="#152238" stroke="#526986" strokeOpacity=".38" />
        <rect x="19" y="19" width="552" height="188" rx="13" fill="url(#thinking-grid)" opacity={active === 2 ? 0.12 : 1} />
        <g opacity={active === 2 ? 0.12 : 0.7} fill="#25364e"><path d="m42 171 42-40 30 20 40-34 58 54Z" /><path d="m355 171 53-63 39 41 34-25 71 47Z" /></g>
        <path d="M60 172H531" stroke="#5b7393" strokeWidth="2" />
        <path d="M102 151H464" stroke={active > 0 ? '#d4a175' : '#6b86a8'} strokeWidth={active === 3 ? 3 : 2} strokeDasharray={active === 3 ? undefined : '5 8'} />
        <g opacity={active === 0 ? 1 : .25}><rect x="57" y="95" width="66" height="89" rx="10" fill="none" stroke="#d4a175" strokeDasharray="4 5" /><rect x="454" y="85" width="76" height="101" rx="10" fill="none" stroke="#d4a175" strokeDasharray="4 5" /></g>
        <g opacity={active === 1 ? 1 : .3} stroke="#a3bad6" strokeWidth="2" fill="none"><path d="m200 143 8 8-8 8m73-16 8 8-8 8m73-16 8 8-8 8" /></g>
        {active === 3 && [1, 2, 3].map((number, i) => <g key={number} transform={`translate(${168 + i * 128} 111)`}><circle r="13" fill="#273d59" stroke="#7391b5" /><text textAnchor="middle" dominantBaseline="central" fill="#e2eaf5" fontSize="13" fontFamily="Inter, sans-serif">{number}</text></g>)}
        <Player x={90} y={151} /><Goal x={485} y={170} />
        <g fill="#a6b8ce" fontSize="13" fontFamily="Inter, sans-serif"><text x="57" y="68">personagem</text><text x="242" y="193">trajeto</text><text x="456" y="68">objetivo</text></g>
      </svg>
      <motion.div className="edu-pillar-hint" key={active} initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : .24 }}>
        <span className="edu-hint-line" /><p>{pillarHints[active]}</p>
      </motion.div>
      <figcaption>Exemplo didático: um personagem precisa alcançar uma bandeira.</figcaption>
    </figure>
  </div>;
}

const workshopContents = [
  'Computador', 'Sobre o projeto', 'Roteiro de jogos', 'Escrita do roteiro',
  'Lógica de programação', 'Ferramenta Scratch', 'Programação no Scratch',
  'Loops e conectivos', 'Sons (oficina adaptada)', 'Prática acompanhada',
];
const workshopGroups = [
  { name: 'Introdução e roteiro', range: '01–04', start: 0, end: 3, detail: 'Computador, enredo, cenário e personagens.' },
  { name: 'Lógica e Scratch', range: '05–09', start: 4, end: 8, detail: 'Blocos, condições, loops e lógica booleana.' },
  { name: 'Prática orientada', range: '10', start: 9, end: 9, detail: 'Criar os jogos e revisar dificuldades.' },
];

export function WorkshopTimeline({ points, metrics, reducedMotion }: DiagramProps & { metrics: { value: string; label: string; detail: string }[] }) {
  const [active, setActive] = useState<number | null>(null);
  return <div className="edu-method">
    <div className="edu-metrics">
      {metrics.map(metric => <div key={metric.label}><span className="edu-metric-value">{metric.value}</span><div><strong>{metric.label}</strong><span>{metric.detail}</span></div></div>)}
    </div>
    <figure className="edu-timeline">
      <div className="edu-timeline-heading"><span>CONTEÚDOS DAS 10 OFICINAS</span><span>29 MAR — 07 JUN 2023</span></div>
      <ol className="edu-timeline-nodes" aria-label="Conteúdos das oficinas em ordem">
        {workshopContents.map((content, i) => {
          const highlighted = active === null || (i >= workshopGroups[active].start && i <= workshopGroups[active].end);
          return <motion.li title={`${i + 1}. ${content}`} aria-label={`${i + 1}. ${content}`} className={highlighted ? 'is-highlighted' : ''} key={content}
            initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : .3, delay: reducedMotion ? 0 : i * .045 }}><span>{String(i + 1).padStart(2, '0')}</span><i /></motion.li>;
        })}
      </ol>
      <div className="edu-workshop-groups" role="group" aria-label="Destacar uma etapa das oficinas">
        {workshopGroups.map((group, i) => <button key={group.name} className={`edu-workshop-group ${active === i ? 'is-active' : ''}`} aria-pressed={active === i} onClick={() => setActive(value => value === i ? null : i)}>
          <span className="edu-group-range">{group.range}</span><strong>{group.name}</strong><span className="edu-group-detail">{group.detail}</span>
        </button>)}
      </div>
      <figcaption>Conteúdos do Quadro 3 agrupados para o seminário. A oficina de sons precisou de adaptação.</figcaption>
    </figure>
    <div className="edu-method-foundation">
      {points.map(point => <span key={point.title}><strong>{point.title}</strong>{point.text}</span>)}
    </div>
  </div>;
}

function StorySketch() {
  return <div className="edu-story-sketch" role="img" aria-label="Roteiro ilustrativo: levar o personagem até a bandeira">
    <span className="edu-paper-label">OBJETIVO DO JOGO</span><p>Alcançar a bandeira.</p>
    <svg viewBox="0 0 300 87" aria-hidden="true"><path d="M25 69H276" stroke="#526b8c" strokeWidth="2" /><path d="M62 48H225" stroke="#8ba3c1" strokeDasharray="4 6" /><path d="m215 43 10 5-10 5" stroke="#8ba3c1" fill="none" strokeWidth="2" /><Player x={42} y={48} /><Goal x={247} y={68} /></svg>
  </div>;
}

function CodeSketch({ running }: { running: boolean }) {
  return <div className={`edu-code-sketch ${running ? 'is-running' : ''}`} role="img" aria-label="Exemplo de algoritmo: ao iniciar, repetir o movimento até alcançar o objetivo">
    <span className="edu-code-event"><Flag /> quando iniciar</span>
    <span className="edu-code-condition">repetir até o objetivo</span>
    <span className="edu-code-motion">mover <b>10</b> passos</span>
  </div>;
}

export function CreationSequence({ points, reducedMotion }: DiagramProps) {
  const [run, setRun] = useState(0);
  const [running, setRunning] = useState(false);
  const play = () => { setRunning(true); setRun(value => value + 1); };
  const complete = run > 0 && !running;
  return <div className="edu-creation">
    <div className="edu-creation-sequence">
      <div className="edu-creation-step">
        <StorySketch />
        <div className="edu-creation-caption"><span className="edu-step-number">01</span><h3>{points[0].title}</h3></div><p>{points[0].text}</p>
        <ArrowRight className="edu-process-arrow" aria-hidden="true" />
      </div>
      <div className="edu-creation-step">
        <CodeSketch running={running} />
        <div className="edu-creation-caption"><span className="edu-step-number">02</span><h3>{points[1].title}</h3></div><p>{points[1].text}</p>
        <ArrowRight className="edu-process-arrow" aria-hidden="true" />
      </div>
      <div className="edu-creation-step">
        <div className={`edu-game-preview ${complete ? 'is-complete' : ''}`} role="img" aria-label={complete ? 'Exemplo ilustrativo: personagem chegou ao objetivo' : 'Exemplo ilustrativo: personagem no cenário do jogo'}>
          <span className="edu-preview-title">{complete ? 'OBJETIVO ALCANÇADO' : 'PERSONAGEM EM AÇÃO'}</span>
          <svg viewBox="0 0 300 100" aria-hidden="true"><path d="M15 77H286" stroke="#607b9d" strokeWidth="2" /><path d="m95 77 31-22 21 12 26-19 29 29Z" fill="#283d56" /><Goal x={254} y={76} />
            <motion.g key={run} initial={{ x: 0 }} animate={{ x: run > 0 ? 202 : 0 }} transition={{ duration: reducedMotion ? 0 : 1.1, ease: [.45, 0, .25, 1] }} onAnimationComplete={() => setRunning(false)}><Player x={43} y={55} /></motion.g>
          </svg>
        </div>
        <div className="edu-creation-caption"><span className="edu-step-number">03</span><h3>{points[2].title}</h3></div><p>{points[2].text}</p>
      </div>
    </div>
    <div className="edu-demo-controls">
      <p>Exemplo didático para conectar roteiro, instrução e resultado.</p>
      <div><button className="edu-demo-button" onClick={play} disabled={running}><Play aria-hidden="true" /><span>{running ? 'Executando…' : run > 0 ? 'Executar novamente' : 'Executar exemplo'}</span></button><button className="edu-reset-button" aria-label="Reiniciar exemplo didático" title="Reiniciar exemplo" disabled={running || run === 0} onClick={() => setRun(0)}><RotateCcw /></button></div>
    </div>
    <p className="sr-only" role="status" aria-live="polite">{running ? 'O personagem está executando o movimento.' : complete ? 'O personagem chegou à bandeira.' : 'Exemplo pronto para executar.'}</p>
    <div className="edu-creation-challenge"><span>DESAFIOS RELATADOS</span><p>Combinar comandos, trabalhar com coordenadas e lembrar variáveis.</p></div>
  </div>;
}
