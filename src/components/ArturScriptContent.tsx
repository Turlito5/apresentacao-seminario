import { arturScripts, type ArturSlideScript } from '../data/arturScript';
import './artur-script.css';

export default function ArturScriptContent({ script, onSelect }: {
  script: ArturSlideScript;
  onSelect: (index: number) => void;
}) {
  const guidance = script.blocks.filter(block => block.kind === 'guidance');

  return <div className="artur-script-content">
    <div className="artur-script-toolbar">
      <nav className="artur-script-nav" aria-label="Escolher roteiro do Artur">
        {arturScripts.map(item => <button key={item.slideId} type="button"
          className="artur-script-slide" aria-pressed={item.slideId === script.slideId}
          aria-label={`Roteiro do slide ${item.slideId}: ${item.title}`}
          onClick={() => onSelect(item.slideId - 1)}>Slide {item.slideId}</button>)}
      </nav>
      <p><kbd>R</kbd> ou <kbd>Esc</kbd> para fechar · ↑/↓ para rolar</p>
    </div>
    {/* O texto rola dentro da janela; a fonte permanece legível em telas menores. */}
    <div className="artur-script-reader" tabIndex={0} data-script-scroll
      aria-label={`Texto do roteiro do slide ${script.slideId}`}>
      <article className="artur-script-prose">
        <p className="artur-script-owner">Artur · Slide {script.slideId} de 12</p>
        <h3>{script.title}</h3>
        {script.blocks.map((block, index) => {
          if (block.kind === 'guidance') return null;
          if (block.kind === 'heading') return <h4 key={index}>{block.title}</h4>;
          if (block.kind === 'transition') return <section className="artur-script-transition" key={index}>
            <h4>{block.title}</h4><p>{block.text}</p>
          </section>;
          return <p key={index}>{block.text}</p>;
        })}
        {guidance.length > 0 && <details className="artur-script-guidance">
          <summary>Lembretes e orientações de ensaio</summary>
          {guidance.map((block, index) => <section key={index}><h4>{block.title}</h4><p>{block.text}</p></section>)}
        </details>}
      </article>
    </div>
  </div>;
}
