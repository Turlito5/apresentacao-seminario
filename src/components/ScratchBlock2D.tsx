import { useEffect, useRef, useState } from 'react';
import './scratch-block-2d.css';

// Edite este texto para alterar o programa. "end" fecha o laço no parser;
// não aparece como palavra no diagrama, apenas como o encaixe do bloco.
export const SCRATCH_PROGRAM = `quando @greenFlag for clicado
repita (10) vezes
  mova (10) passos
end
diga [Cheguei!] por (2) segundos`;

/** Scratchblocks mantém os encaixes, ícones e cores das categorias.
 * O resultado é SVG estático; a biblioteca só é carregada neste slide. */
export default function ScratchBlock2D() {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const host = container.current;
    let cancelled = false;
    const draw = async () => {
      const [{ default: scratchblocks }, { default: portuguese }] = await Promise.all([
        import('scratchblocks'), import('scratchblocks/locales/pt-br.json'),
      ]);
      await document.fonts.ready;
      if (cancelled || !host) return;
      scratchblocks.loadLanguages({ 'pt-br': portuguese });
      const program = scratchblocks.parse(SCRATCH_PROGRAM, { languages: ['pt-br', 'en'] });
      const svg = scratchblocks.render(program, { style: 'scratch3', scale: 1 });
      svg.classList.add('scratch-block-graphic');
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', 'Programa Scratch: ao clicar na bandeira verde, repetir dez vezes o movimento; depois dizer Cheguei por dois segundos.');
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      host.replaceChildren(svg);
    };
    void draw().catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; host?.replaceChildren(); };
  }, []);

  return <figure className="scratch-block-illustration">
    {/* <div className="scratch-block-label">UM PEQUENO PROGRAMA EM BLOCOS</div> */}
    <div className="scratch-block-stage">
      <div className="scratch-program-render" ref={container} />
      {failed && <pre className="scratch-program-fallback">{SCRATCH_PROGRAM.replace('@greenFlag', 'bandeira verde').replace('\nend', '\nfim')}</pre>}
    </div>
    <figcaption className="scratch-block-caption">
      <p>Iniciar, repetir movimentos e exibir uma mensagem.</p>
      <span>Exemplo didático criado para o seminário</span>
    </figcaption>
  </figure>;
}
