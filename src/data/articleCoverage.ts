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
  { title: 'Sobre o projeto', detail: 'Questionário prévio · exemplos no Scratch' },
  { title: 'Roteiro de jogos', detail: 'Enredo · roteiro · plano cartesiano' },
  { title: 'Escrita do roteiro', detail: 'Personagens · interações · início/desfecho' },
  { title: 'Lógica de programação', detail: 'Conceitos básicos no Scratch' },
  { title: 'Ferramenta Scratch', detail: 'Blocos · sprites · cenários' },
  { title: 'Programação no Scratch', detail: 'Sequências · condições · variáveis · eventos · AND/OR/NOT' },
  { title: 'Loops e conectivos', detail: 'Sempre/repita · ações · obstáculos' },
  { title: 'Sons — adaptada', detail: 'Sons · voz · interação; sem caixas' },
  { title: 'Prática acompanhada', detail: 'Suporte · dificuldades' },
] as const;
