export type SlideKind =
  | 'cover' | 'problem' | 'objective' | 'theory' | 'method'
  | 'production' | 'engagement' | 'conclusion' | 'critique'
  | 'impact' | 'discussion' | 'reference' | 'games' | 'application' | 'results' | 'lessons' | 'synthesis';

export interface Point { title: string; text: string }
export interface Slide {
  id: number;
  kind: SlideKind;
  // A identificação de seção é opcional quando não aparece no layout.
  chapter?: string;
  title: string;
  menuTitle: string;
  subtitle?: string;
  points: Point[];
  columns?: { title: string; points: Point[] }[];
  takeaway?: string;
  source: string;
  notes: string;
}

// Edite aqui os dados acadêmicos e os placeholders. Nenhum conteúdo
// do artigo é buscado em tempo de execução ou gerado aleatoriamente.
export const article = {
  title: 'Aprendendo Lógica de Programação Desenvolvendo Jogos Digitais: Um Relato de Experiência',
  authors: [
    'Nikolas Oliver Sales Genesio', 'Maria Clara Ribeiro de Menezes',
    'João Victor Corrêa de Almeida', 'Ana Paula Freitas Vilela Boaventura',
    'Pedro Henrique Dias Valle',
  ],
  venue: 'Anais do XXIX Workshop de Informática na Escola (WIE)',
  year: 2023,
  doi: 'https://doi.org/10.5753/wie.2023.234515',
  accessDate: '[DIA MÊS ABREVIADO ANO]',
  reference: 'GENESIO, Nikolas Oliver Sales; MENEZES, Maria Clara Ribeiro de; ALMEIDA, João Victor Corrêa de; BOAVENTURA, Ana Paula Freitas Vilela; VALLE, Pedro Henrique Dias. Aprendendo lógica de programação desenvolvendo jogos digitais: um relato de experiência. In: WORKSHOP DE INFORMÁTICA NA ESCOLA (WIE), 29., 2023, Passo Fundo. Anais [...]. Porto Alegre: Sociedade Brasileira de Computação, 2023. p. 375–386. DOI: 10.5753/wie.2023.234515.',
};

export const team = [
  { name: 'Nahan', part: 'Contexto e fundamentos', range: '01–04' },
  { name: 'Artur', part: 'Jogos, método e resultados', range: '05–08' },
  { name: 'Felipe', part: 'Lições, análise e debate', range: '09–12' },
];

export const methodMetrics = [
  { value: '24', label: 'estudantes', detail: '8º e 9º ano' },
  { value: '10', label: 'oficinas', detail: 'encontros semanais' },
  { value: '90', label: 'minutos', detail: 'máximo por encontro' },
];

export const conceptMappings = [
  ['Regras do jogo', 'Modelagem do problema'],
  ['Comandos e condições', 'Construção de algoritmos'],
  ['Comportamentos dos personagens', 'Decomposição de responsabilidades'],
  ['Verificar e ajustar ações', 'Testes e depuração'],
];

// Conteúdo baseado no artigo e no roteiro do grupo, com afirmações
// proporcionais à avaliação observacional. Exatamente 12 slides.
export const slidesData: readonly Slide[] = [
  {
    id: 1, kind: 'cover', chapter: 'Seminário acadêmico', menuTitle: 'Identificação e equipe',
    title: 'Aprendendo lógica\nde programação',
    subtitle: 'Desenvolvendo jogos digitais: um relato de experiência',
    points: [], source: 'Genesio et al. (2023) · WIE · Seminário de ADS',
    notes: 'Nahan: apresente o título completo e os cinco autores, vinculados à UFJF e à UFJ. O artigo foi publicado nos anais do XXIX Workshop de Informática na Escola, em 2023. Apresente a equipe: Nahan, contexto e fundamentos nos slides 1 a 4; Artur, jogos, método e resultados nos slides 5 a 8; Felipe, lições, análise e debate nos slides 9 a 12. O estudo ocorreu na educação básica. Sua relação com ADS está na lógica, nos algoritmos e no desenvolvimento de jogos. Fonte: título, resumo e introdução do artigo.',
  },
  {
    id: 2, kind: 'problem', chapter: 'Contexto e problema', menuTitle: 'Inclusão digital e programação',
    title: 'Programação na\nescola pública',
    subtitle: 'O desafio que motivou o Escola de Games UFJF.',
    points: [
      { title: 'Inclusão digital', text: 'A pandemia intensificou o uso educacional das tecnologias.' },
      { title: 'Barreiras de acesso', text: 'Escassez de recursos e necessidade de formação docente.' },
      { title: 'Ensino de Computação', text: 'Resolver problemas e criar algoritmos, além de usar aplicativos.' },
    ],
    source: 'Genesio et al. (2023), introdução e seção 4.2. Ilustração 2D didática.',
    notes: 'Nahan: os autores situam o projeto na integração de tecnologias à educação, intensificada pelo ensino remoto em 2020. Apontam recursos insuficientes e preparação docente como barreiras à inclusão digital. Diferencie o uso de programas do ensino dos fundamentos da Computação. O artigo relaciona essa discussão à BNCC de 2018 e cita a habilidade EF06MA04, sobre algoritmos em linguagem natural e fluxogramas. Apresente isso como contextualização feita pelos autores. O projeto oferece oficinas de criação de jogos para introduzir lógica a estudantes da rede pública. O programa em blocos é um exemplo didático de evento, posição inicial, repetição, movimento e mensagem, sem representar um jogo dos participantes.',
  },
  {
    id: 3, kind: 'objective', chapter: 'Objetivo e gênero textual', menuTitle: 'Objetivo e relato de experiência',
    title: 'Objetivo e relato de experiência',
    subtitle: 'Ensinar lógica criando jogos e compartilhar a intervenção realizada.',
    points: [
      { title: 'Descrever a ação', text: 'Planejamento, materiais e aplicação das oficinas.' },
      { title: 'Relatar os resultados', text: 'Aprendizagens e dificuldades observadas na prática.' },
      { title: 'Compartilhar lições', text: 'Limitações e adaptações que orientam novas iniciativas.' },
    ],
    takeaway: 'Relato de experiência: intervenção situada, fundamentação teórica e reflexão sobre a prática.',
    source: 'Genesio et al. (2023), resumo e seções 1, 3, 4, 5 e 6.',
    notes: 'Nahan: o objetivo é relatar a experiência do Escola de Games UFJF, destacando resultados, dificuldades e limitações do ensino de lógica por meio de jogos digitais. Explique o gênero relato de experiência: descreve uma prática situada e reflete sobre ela com apoio teórico. A organização do artigo passa por Introdução, Fundamentação Teórica, Metodologia, Relato de Experiência, Lições Aprendidas e Considerações Finais. A avaliação observacional caracteriza este trabalho específico; não é uma regra para todos os relatos de experiência. Diferencie o objetivo do projeto, ensinar lógica, do objetivo do artigo, compartilhar e analisar a experiência.',
  },
  {
    id: 4, kind: 'theory', chapter: 'Fundamentação teórica', menuTitle: 'Pensamento computacional',
    title: 'Pensamento computacional',
    subtitle: 'Quatro pilares aplicados à construção de um jogo.',
    points: [
      { title: 'Decomposição', text: 'Separar personagem, cenário e regras.' },
      { title: 'Padrões', text: 'Reconhecer soluções que se repetem.' },
      { title: 'Abstração', text: 'Selecionar os elementos essenciais.' },
      { title: 'Algoritmos', text: 'Organizar passos para executar as regras.' },
    ],
    source: 'Genesio et al. (2023), seção 2.1. Wing e Brackmann citados por meio do artigo.',
    notes: 'Nahan: segundo a fundamentação apresentada pelos autores, o pensamento computacional é uma habilidade de resolução de problemas relevante para todos. Wing e Brackmann são discutidos por intermédio do artigo-base. Use o exemplo do personagem e da bandeira para explicar cada pilar. Decomposição separa partes do problema; padrões permitem reconhecer soluções semelhantes; abstração mantém o que importa; algoritmos organizam as instruções. Os elementos do diagrama são exemplos didáticos do seminário, não registros dos jogos dos alunos. Ao terminar, passe a palavra a Artur.',
  },
  {
    id: 5, kind: 'games', chapter: 'Fundamentação teórica', menuTitle: 'Jogos digitais e aprendizagem',
    title: 'Jogos digitais e aprendizagem',
    subtitle: 'Enredo, motor e interface dão contexto à lógica de programação.',
    points: [
      { title: 'Enredo', text: 'Define a temática, a trama e o objetivo.' },
      { title: 'Motor', text: 'Controla regras e reage às ações do jogador.' },
      { title: 'Interface', text: 'Apresenta o estado do jogo ao jogador.' },
    ],
    takeaway: 'Na criação do jogo, os estudantes experimentam regras e observam seus efeitos.',
    source: 'Genesio et al. (2023), seções 2.2 e 2.3. Exemplo gráfico didático.',
    notes: 'Artur: explique os três componentes de um jogo conforme a fundamentação do artigo. No exemplo ilustrativo, o enredo propõe coletar uma moeda; o motor verifica o contato e atualiza a pontuação; a interface exibe personagem, moeda e contador. O interesse pedagógico está em criar e programar o jogo, vinculando conceitos a ações observáveis. O artigo também discute jogos epistêmicos como ambientes para desenvolver competências em situações com restrições realistas. Mencione brevemente os trabalhos relacionados de Rodriguez et al. (2015), Silva Neto et al. (2013) e Jesus Gomes et al. (2022). Eles apresentam iniciativas relacionadas, não uma comprovação uniforme da eficácia do Scratch. As referências teóricas são indiretas, via artigo-base.',
  },
  {
    id: 6, kind: 'method', chapter: 'Metodologia', menuTitle: 'As quatro etapas metodológicas',
    title: 'Metodologia da intervenção',
    subtitle: 'Quatro etapas na Escola Municipal Professor Oscar Schmidt, em Juiz de Fora.',
    points: [
      { title: 'Planejamento', text: 'Workshop da equipe e escolha da programação em blocos.' },
      { title: 'Materiais', text: 'Slides, impressos e videoaulas ligados ao cotidiano dos alunos.' },
      { title: 'Aplicação', text: 'Oficinas no laboratório, uma vez por semana, no contraturno.' },
      { title: 'Avaliação', text: 'Observação das atividades e dos jogos desenvolvidos.' },
    ],
    takeaway: 'Avaliação observacional: acompanhamento da prática e das dificuldades dos estudantes.',
    source: 'Genesio et al. (2023), seção 3 e seção 4.1.',
    notes: 'Artur: apresente as quatro etapas declaradas na metodologia. Primeiro, a equipe planejou a ação e pesquisou ferramentas de programação em blocos para iniciantes. Depois, produziu materiais contextualizados sobre roteiros, personagens, cenários e lógica. A aplicação ocorreu no laboratório da escola no contraturno. Por fim, os instrutores observaram atividades e jogos para acompanhar a aprendizagem. As videoaulas e os materiais foram reunidos em um site para consulta, inclusive por quem faltasse. O artigo descreve uma abordagem expositiva dialogada. Não se trata de um experimento comparativo com medidas antes e depois.',
  },
  {
    id: 7, kind: 'application', chapter: 'Aplicação das oficinas', menuTitle: 'Participantes e dez oficinas',
    title: 'Participantes e oficinas',
    subtitle: 'De 29 de março a 7 de junho de 2023, com participação voluntária.',
    points: [
      { title: 'Público', text: '13 a 15 anos, sem experiência prévia em programação.' },
      { title: 'Equipe', text: 'Três graduandos da UFJF como instrutores.' },
      { title: 'Preparação', text: 'Seis meses para organizar a intervenção.' },
    ],
    source: 'Genesio et al. (2023), Quadros 1 a 4 e seções 4.1 e 4.2.',
    notes: 'Artur: participaram 24 estudantes do 8º e 9º ano, entre 13 e 15 anos, incluindo um aluno com dificuldade motora. A equipe de instrutores era composta por três graduandos de 19 a 21 anos. O Quadro 4 informa seis meses de preparação, dez oficinas e duração máxima de noventa minutos por encontro. O público também precisou de uma introdução ao uso do computador. Percorra a trilha: computador e projeto, roteiro, lógica, Scratch, comandos, loops e conectivos, sons e prática. O agrupamento em três trechos é uma síntese visual do seminário; os dez conteúdos vêm do Quadro 3. A oficina de sons foi adaptada.',
  },
  {
    id: 8, kind: 'results', chapter: 'Resultados observados', menuTitle: 'Avanços e dificuldades',
    title: 'Avanços e dificuldades',
    subtitle: 'Resultados descritos pelos autores a partir da observação das oficinas.',
    points: [],
    columns: [
      { title: 'Avanços observados', points: [
        { title: 'Roteiros criativos', text: 'Diversidade de cenários, personagens e temas.' },
        { title: 'Compreensão dos conceitos', text: 'Sequências, repetições, condições e lógica booleana.' },
        { title: 'Interesse nas práticas', text: 'Satisfação ao programar as ações dos personagens.' },
      ] },
      { title: 'Dificuldades relatadas', points: [
        { title: 'Combinação de blocos', text: 'Articular comandos e variáveis para ações complexas.' },
        { title: 'Coordenadas', text: 'Revisar os eixos x e y para movimentar os personagens.' },
        { title: 'Atenção nas exposições', text: 'Manter o foco em trechos mais teóricos das oficinas.' },
      ] },
    ],
    source: 'Genesio et al. (2023), seções 4.3 a 4.5. Resultados qualitativos, sem percentuais.',
    notes: 'Artur: os autores relatam criatividade nos roteiros e diversidade de jogos, além de maior atenção na parte prática. Segundo sua observação, a maioria dos estudantes absorveu os conceitos ensinados, incluindo sequências, iterações, condicionais e operadores AND, OR e NOT. Em contrapartida, combinar blocos e variáveis exigiu apoio, sobretudo nas primeiras oficinas práticas. A falta de familiaridade com o plano cartesiano demandou revisão. Houve também dificuldade em manter a atenção nas partes teóricas. Não há taxa de conclusão dos jogos nem percentual de ganho de aprendizagem. Estes são resultados qualitativos relatados pelos autores. Passe a palavra a Felipe.',
  },
  {
    id: 9, kind: 'lessons', chapter: 'Lições aprendidas', menuTitle: 'Adaptações e infraestrutura',
    title: 'Adaptações e lições aprendidas',
    subtitle: 'A infraestrutura condicionou a aplicação das oficinas.',
    points: [
      { title: 'Scratch online indisponível', text: 'Instalação do Scratch 1.4 nos computadores.' },
      { title: 'Computadores insuficientes', text: 'Parte dos estudantes desenvolveu os jogos em duplas.' },
      { title: 'Ausência de caixas de som', text: 'Adaptação da oficina dedicada ao áudio.' },
    ],
    takeaway: 'Materiais contextualizados, temas livres e apoio dos instrutores favoreceram a participação.',
    source: 'Genesio et al. (2023), seções 4.1, 4.2 e 5.',
    notes: 'Felipe: o Scratch online não abriu nos dois navegadores testados no laboratório, o que levou à instalação da versão 1.4. A falta de computadores fez com que alguns jogos fossem desenvolvidos em duplas. A ausência de caixas de som exigiu alterar a oficina de áudio. Como lições pedagógicas, os autores destacam exemplos próximos da realidade dos estudantes, liberdade de temas com orientação e um ambiente que favoreça perguntas. Site e videoaulas permitiram consultar materiais fora dos encontros. Isso descreve apoio ao acompanhamento, não demonstra que toda defasagem foi eliminada. Destaque como o relato registra adaptações reais, úteis a quem planeja ações semelhantes.',
  },
  {
    id: 10, kind: 'synthesis', chapter: 'Conclusão e leitura crítica', menuTitle: 'Conclusões, limites e ADS',
    title: 'Conclusões e conexão com ADS',
    subtitle: 'As contribuições do relato e o alcance das evidências.',
    points: [],
    columns: [
      { title: 'Conclusões dos autores', points: [
        { title: 'Abordagem promissora', text: 'Jogos aproximaram conceitos de lógica e prática.' },
        { title: 'Experiência compartilhada', text: 'Materiais e estratégias orientam novas oficinas.' },
      ] },
      { title: 'Leitura crítica do grupo', points: [
        { title: 'Alcance situado', text: 'Uma escola e avaliação observacional.' },
        { title: 'Questão em aberto', text: 'Como verificar retenção e aprendizagem individual?' },
      ] },
      { title: 'Relação com ADS', points: [
        { title: 'Fundamentos de algoritmos', text: 'Sequências, condições, laços e lógica booleana.' },
        { title: 'Desenvolvimento de sistemas', text: 'Decompor regras, implementar e verificar comportamentos.' },
      ] },
    ],
    source: 'Genesio et al. (2023), seções 5 e 6. Leitura crítica e relações com ADS propostas pelo grupo.',
    notes: 'Felipe: os autores concluem que a experiência apresentou resultados promissores e pode orientar iniciativas em outras escolas. Separe essa conclusão da avaliação crítica do grupo. O relato se concentra em uma escola, usa observações e não apresenta comparação antes e depois, grupo de controle nem acompanhamento da retenção. Isso limita a força de generalizações e de afirmações causais. Como interpretação do grupo, relacione a experiência a ADS: condições de vitória, laços, operadores booleanos, decomposição e verificação dos comportamentos programados. O estudo não avaliou estudantes de ADS nem a transferência para linguagens textuais; essa conexão é pedagógica.',
  },
  {
    id: 11, kind: 'discussion', chapter: 'Discussão com a turma', menuTitle: 'Debate: aprendizagem individual',
    title: 'Dois alunos.\nUm computador.\nComo avaliar cada um?',
    subtitle: 'Que atividade mostraria que os dois compreenderam a lógica do jogo?',
    points: [],
    takeaway: 'Uma possibilidade: cada aluno explicar e adaptar uma regra sem apoio do colega.',
    source: 'Pergunta do grupo baseada no trabalho em duplas e na avaliação observacional do relato.',
    notes: 'Felipe: conecte o debate a duas condições do relato, o compartilhamento de computadores e a avaliação observacional. Pergunte que instrumento permitiria acompanhar o aprendizado individual. Aguarde as respostas antes de sugerir alternativas: explicação do algoritmo por cada aluno, alteração individual de uma condição ou tarefa curta de transferência. Essas possibilidades são propostas para o debate, não atividades avaliadas no artigo. Acolha duas ou três contribuições e discuta o que cada instrumento permitiria observar. A existência de duplas por si só não implica ausência de aprendizagem individual.',
  },
  {
    id: 12, kind: 'reference', menuTitle: 'Referência ABNT',
    title: 'Referência',
    subtitle: 'Artigo-base do seminário',
    points: [],
    source: 'As referências teóricas foram discutidas por intermédio do artigo-base.',
    notes: 'Felipe: indique a referência completa e o DOI para consulta. Não leia a referência inteira. A publicação é de 2023, nos anais do XXIX WIE, páginas 375 a 386. Wing, Brackmann e outros trabalhos foram discutidos por meio do artigo-base, sem sugerir consulta direta a todos eles. Preencha a data real de acesso antes da apresentação. Agradeça à turma e encerre.',
  },
];
