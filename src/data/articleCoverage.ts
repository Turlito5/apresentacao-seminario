// Sínteses da seção 2.3, consultada no artigo-base. Não indicam consulta
// direta aos três trabalhos nem equiparam objetivos a resultados medidos.
export const relatedStudies = [
  {
    author: 'Rodriguez et al.', year: 2015,
    activity: 'Scratch com 7 estudantes e 1 professora do ensino médio.',
    contribution: 'Conceitos de PC, colaboração e competências de pesquisa.',
  },
  {
    author: 'Silva Neto et al.', year: 2013,
    activity: 'Curso e competição de jogos educacionais em Lajedo–PE.',
    contribution: 'Motivação de alunos e professores e interesse pelas disciplinas.',
  },
  {
    author: 'Jesus Gomes et al.', year: 2022,
    activity: 'Programação e robótica: Scratch, Python e C; metodologias ativas.',
    contribution: 'Foco em inclusão digital, resolução de problemas e interesse em Computação.',
  },
] as const;

export const discussionTasks = [
  { title: 'Explicar', text: 'Cada aluno explica uma regra do jogo.' },
  { title: 'Modificar', text: 'Cada aluno altera uma condição.' },
  { title: 'Testar', text: 'Verificar o efeito sem ajuda do colega.' },
] as const;

// Detalhes do Quadro 3, mantidos na ordem das dez oficinas.
export const detailedWorkshopTopics = [
  { title: 'Computador', detail: 'Componentes, comandos básicos e Internet.' },
  { title: 'Sobre o projeto', detail: 'Questionário prévio e exemplos no Scratch.' },
  { title: 'Roteiro de jogos', detail: 'Enredo, plano cartesiano e criação do roteiro.' },
  { title: 'Escrita do roteiro', detail: 'Personagens, interações, início e desfecho.' },
  { title: 'Lógica de programação', detail: 'Conceitos básicos para programar no Scratch.' },
  { title: 'Ferramenta Scratch', detail: 'Blocos, sprites e upload de cenários.' },
  { title: 'Programação no Scratch', detail: 'Sequências, condições, variáveis, eventos e AND/OR/NOT.' },
  { title: 'Loops e conectivos', detail: 'Sempre e repita; ações e obstáculos.' },
  { title: 'Sons — oficina adaptada', detail: 'Sons, voz e interação; adaptação por falta de caixas.' },
  { title: 'Prática acompanhada', detail: 'Suporte e verificação das dificuldades.' },
] as const;
