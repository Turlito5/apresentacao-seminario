import { ArrowRight } from 'lucide-react';
import { discussionTasks, relatedStudies } from '../data/articleCoverage';

/** Conteúdo da seção 2.3: abordagem e contribuição são apresentados
 * separadamente para não transformar objetivos em resultados medidos. */
export function RelatedStudiesTable() {
  return <table className="related-studies" aria-label="Comparação dos três trabalhos relacionados da seção 2.3">
    <colgroup><col className="study-column" /><col className="activity-column" /><col className="contribution-column" /></colgroup>
    <thead><tr><th scope="col">Estudo</th><th scope="col">Atividade / abordagem</th><th scope="col">O que o artigo destaca</th></tr></thead>
    <tbody>{relatedStudies.map(study => <tr key={study.author}>
      <th scope="row">{study.author}<span className="study-year">({study.year})</span></th><td>{study.activity}</td><td>{study.contribution}</td>
    </tr>)}</tbody>
  </table>;
}

export function GamesContext() {
  return <div className="games-context">
    <section><h3>Gêneros de jogos</h3><p>Ação/aventura, estratégia, simulação, quebra-cabeça e educacionais.</p></section>
    <section><h3>Jogos epistêmicos</h3><p>Desenvolver competências em situações com regras e restrições realistas.</p></section>
  </div>;
}

export function MaterialsSupport() {
  return <div className="materials-support">
    <section><h3>Materiais e acompanhamento</h3><p>Slides, impressos, videoaulas e site para consultar e retomar conteúdos.</p></section>
    <section><h3>Conteúdos de programação</h3><p>Sequências de instruções, condições e laços de repetição.</p></section>
  </div>;
}

export function LogicExample() {
  return <div className="logic-example">
    <strong>Exemplo didático de condição: </strong>
    <p>Se tocar no obstáculo <ArrowRight aria-hidden="true" /> voltar ao início.</p>
  </div>;
}

/** Proposta para o debate, identificada como elaboração do grupo:
 * não é um instrumento de avaliação aplicado pelos autores do artigo. */
export function DiscussionActivity() {
  return <section className="discussion-activity" aria-label="Atividade sugerida pelo grupo para debate">
    <h3>Uma proposta para discutir com a turma</h3>
    <ol>{discussionTasks.map((task, index) => <li key={task.title}>
      <span aria-hidden="true">{index + 1}.</span><div><h4>{task.title}</h4><p>{task.text}</p></div>
    </li>)}</ol>
  </section>;
}
