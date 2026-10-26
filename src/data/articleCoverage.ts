// Sínteses da seção 2.3, consultada no artigo-base. Não indicam consulta
// direta aos três trabalhos nem equiparam objetivos a resultados medidos.
export const relatedStudies = [
  {
    author: 'Rodriguez et al.', year: 2015,
    activity: '7 alunos + 1 professora do ensino médio; Scratch.',
    contribution: 'PC, colaboração e competências de pesquisa.',
  },
  {
    author: 'Silva Neto et al.', year: 2013,
    activity: 'Curso e competição de jogos educacionais · Lajedo–PE.',
    contribution: 'Motivação de alunos e professores; interesse nas disciplinas.',
  },
  {
    author: 'Jesus Gomes et al.', year: 2022,
    activity: 'Programação e robótica · Scratch/Python/C · metodologias ativas.',
    contribution: 'Objetivo: inclusão digital, resolução de problemas e interesse em Computação.',
  },
] as const;

export const discussionTasks = [
  { title: 'Explicar', text: 'Cada aluno explica uma regra do jogo.' },
  { title: 'Modificar', text: 'Cada aluno altera uma condição.' },
  { title: 'Testar', text: 'Verificar o efeito sem ajuda do colega.' },
] as const;

// Detalhes do Quadro 3, mantidos na ordem das dez oficinas.
export const detailedWorkshopTopics = [
  { title: 'Computador', detail: 'Componentes · comandos · Internet' },
  { title: 'Projeto', detail: 'Questionário prévio · Scratch' },
  { title: 'Roteiro de jogos', detail: 'Enredo · plano cartesiano' },
  { title: 'Escrita do roteiro', detail: 'Personagens · interações · início/desfecho' },
  { title: 'Lógica', detail: 'Fundamentos de programação' },
  { title: 'Scratch', detail: 'Blocos · sprites · cenários' },
  { title: 'Programação', detail: 'Sequências · condições · variáveis · eventos · AND/OR/NOT' },
  { title: 'Loops e conectivos', detail: 'Sempre/repita · obstáculos' },
  { title: 'Sons (adaptada)', detail: 'Voz · interação; sem caixas' },
  { title: 'Prática', detail: 'Suporte · dificuldades' },
] as const;
