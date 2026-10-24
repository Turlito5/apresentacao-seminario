import './scratch-block-2d.css';

/** Ilustração vetorial plana: texto nítido em qualquer escala, sem Canvas. */
export default function ScratchBlock2D() {
  return <figure className="scratch-block-illustration">
    <div className="scratch-block-label">UM COMANDO. UMA AÇÃO.</div>
    <div className="scratch-block-stage">
      <svg className="scratch-block-graphic" viewBox="0 0 560 280" role="img"
        aria-label="Bloco de programação 2D inspirado no Scratch: mover 10 passos">
        <path d="M40 80H110L124 94H162L176 80H508Q520 80 520 92V178Q520 190 508 190H176L162 204H124L110 190H40Q28 190 28 178V92Q28 80 40 80Z"
          fill="#bc7b3e" stroke="#dcaa77" strokeWidth="1.5" />
        <g fontFamily="Inter, sans-serif" fontSize="36" fontWeight="600" fill="#fffaf4">
          <text x="68" y="147">mover</text>
          <rect x="223" y="108" width="82" height="55" rx="27.5" fill="#f5e8d8" />
          <text x="264" y="146" textAnchor="middle" fontSize="33" fill="#75461f">10</text>
          <text x="338" y="147">passos</text>
        </g>
      </svg>
    </div>
    <figcaption className="scratch-block-caption">
      Uma instrução para movimentar um personagem.
      <span>Exemplo didático inspirado no Scratch</span>
    </figcaption>
  </figure>;
}
