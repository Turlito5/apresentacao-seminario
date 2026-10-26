export type SlideKind =
  | 'cover' | 'problem' | 'objective' | 'theory' | 'method'
  | 'production' | 'engagement' | 'conclusion' | 'critique'
  | 'impact' | 'discussion' | 'reference' | 'games' | 'application' | 'results' | 'lessons' | 'synthesis' | 'related';

export interface Point { title: string; text: string; detail?: string }
export interface ExperienceStage { section: string; title: string; activity: string; observation: string }
export interface Slide {
  id: number;
  kind: SlideKind;
  // A identificação de seção é opcional quando não aparece no layout.
  chapter?: string;
  articleSection?: string;
  title: string;
  menuTitle: string;
  subtitle?: string;
  points: Point[];
  sectionIntro?: string;
  context?: Point[];
  stages?: ExperienceStage[];
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
  accessDate: '20 out. 2026',
  reference: 'GENESIO, Nikolas Oliver Sales; MENEZES, Maria Clara Ribeiro de; ALMEIDA, João Victor Corrêa de; BOAVENTURA, Ana Paula Freitas Vilela; VALLE, Pedro Henrique Dias. Aprendendo lógica de programação desenvolvendo jogos digitais: um relato de experiência. In: WORKSHOP DE INFORMÁTICA NA ESCOLA (WIE), 29., 2023, Passo Fundo. Anais [...]. Porto Alegre: Sociedade Brasileira de Computação, 2023. p. 375–386. DOI: 10.5753/wie.2023.234515.',
};

export const team = [
  { name: 'Nahan', part: 'Contexto e fundamentos', range: '01–04' },
  { name: 'Artur', part: 'Estudos, método e resultados', range: '05–08' },
  { name: 'Felipe', part: 'Lições, análise e debate', range: '09–12' },
];

export const methodMetrics = [
  { value: '24', label: 'estudantes', detail: '8º/9º · 13–15 anos' },
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
    notes: 'Nahan: apresente o título completo e os cinco autores, vinculados à UFJF e à UFJ. A publicação ocorreu no XXIX Workshop de Informática na Escola, em 2023. Apresente a equipe: Nahan, contexto e fundamentos nos slides 1 a 4; Artur, estudos relacionados, método e resultados nos slides 5 a 8; Felipe, lições, conclusão, análise e debate nos slides 9 a 12. O estudo ocorreu na educação básica; sua relação pedagógica com ADS está na lógica, nos algoritmos e no desenvolvimento de jogos. Fonte: cabeçalho, resumo e introdução do artigo.',
  },
  {
    id: 2, kind: "problem", chapter: "Contexto e objetivo", articleSection: "1 · Introdução e objetivo", menuTitle: "Contexto e objetivo do artigo",
    title: "Por que ensinar programação na escola?",
    subtitle: "Contexto educacional, pensamento computacional e inclusão digital.",
    points: [
      { title: "Inclusão digital e obstáculos", text: "A pandemia intensificou as TDIC na Educação; escolas enfrentam falta de recursos e de preparo docente." },
      { title: "Computação na Educação Básica", text: "Vai além de usar aplicativos: disciplinas próprias ou integração multi, inter e transdisciplinar." },
      { title: "PC para todos · Wing (2006)", text: "Resolver problemas com fundamentos da Computação; habilidade para todos, não só para profissionais." },
      { title: "Programar é aprender a pensar", text: "Raciocínio e criatividade ajudam a resolver problemas e a criar tecnologia, além de consumi-la." },
      { title: "BNCC (2018) e políticas de integração", text: "Cultura e mundo digital, PC; EF06MA04: algoritmo em linguagem natural e fluxograma. Poucas iniciativas exigem políticas de integração." },
    ],
    context: [
      { title: "Escola de Games UFJF", text: "Oficinas de PC, lógica, criatividade e inclusão digital com jogos para crianças e jovens da rede pública." },
    ],
    takeaway: "Relatar resultados, dificuldades e limitações do ensino de lógica por meio da criação de jogos.",
    source: "Genesio et al. (2023), resumo e seção 1. Scratch: exemplo didático do seminário.",
    notes: "Nahan: siga a ordem da introdução. A pandemia intensificou o uso das TDIC, mas escolas enfrentam limitações de recursos e formação docente. Conforme Brackmann é discutido no artigo, ensinar Computação vai além de aulas de informática e do uso de aplicativos: pode ocorrer em disciplinas próprias ou de modo multi, inter ou transdisciplinar. Wing apresenta o pensamento computacional como habilidade para todos e relaciona programação à aprendizagem do pensar. Apresente então a contextualização da BNCC de 2018, com a habilidade EF06MA04, sobre algoritmos em linguagem natural e fluxogramas. Os autores apontam poucas iniciativas concretas e a necessidade de políticas de integração. O Escola de Games UFJF propõe oficinas para crianças e jovens da rede pública, trabalhando PC, lógica, criatividade e inclusão digital. Diferencie esse objetivo do projeto do objetivo do artigo: relatar resultados, dificuldades e limitações. O gênero é relato de experiência. O pequeno programa Scratch é didático e não reproduz um jogo dos participantes.",
  },
  {
    id: 3, kind: "theory", chapter: "Fundamentação teórica", articleSection: "2 · Fundamentação / 2.1 · Pensamento computacional", menuTitle: "Fundamentação e pensamento computacional",
    title: "Pensamento computacional",
    subtitle: "Definições, contexto e quatro pilares para resolver problemas.",
    points: [
      { title: "Decomposição", text: "Dividir um problema maior em subproblemas que possam ser tratados separadamente." },
      { title: "Padrões", text: "Reconhecer semelhanças e conexões para reutilizar soluções anteriores." },
      { title: "Abstração", text: "Filtrar detalhes e preservar as informações essenciais à solução." },
      { title: "Algoritmos", text: "Organizar passos e regras para solucionar e articular os subproblemas." },
    ],
    sectionIntro: "Seção 2 — Fundamentação teórica: PC, jogos digitais e trabalhos relacionados sustentam o estudo.",
    context: [
      { title: "Wing (2006) · habilidade para todos", text: "Resolver problemas, conceber sistemas e compreender o comportamento humano.", detail: "Formação analítica junto à leitura, escrita e aritmética." },
      { title: "Brackmann (2017) · capacidade humana", text: "Criativa, crítica e estratégica: resolver problemas, individual ou coletivamente, por passos claros que pessoas ou máquinas executam.", detail: "Vai além de usar aplicativos e de um pensamento mecânico." },
    ],
    takeaway: "Os pilares são independentes na solução de problemas; o algoritmo articula os demais.",
    source: "Genesio et al. (2023), seções 2 e 2.1. Wing e Brackmann discutidos por meio do artigo-base.",
    notes: "Nahan: comece pelo único tópico da abertura da seção 2: a fundamentação apresenta PC, jogos digitais e trabalhos relacionados para sustentar a compreensão do estudo. Em seguida, apresente a definição de Wing: habilidade fundamental para todos, relacionada à resolução de problemas, concepção de sistemas e compreensão do comportamento humano, que integra a formação analítica junto à leitura, escrita e aritmética. Para Brackmann, PC não se resume a usar aplicativos nem a pensar mecanicamente; é uma capacidade humana criativa, crítica e estratégica para resolver problemas, individual ou colaborativamente, com passos executáveis por pessoas ou máquinas. Só depois explique os quatro pilares, todos definidos na tela: decomposição, reconhecimento de padrões, abstração e algoritmos. No artigo, eles são apresentados como independentes na solução de problemas, e o algoritmo articula os demais. As setas para cima e para baixo destacam um pilar por vez, mas suas quatro definições permanecem visíveis.",
  },
  {
    id: 4, kind: "games", chapter: "Fundamentação teórica", articleSection: "2.2 · Jogos digitais", menuTitle: "Jogos digitais e aprendizagem",
    title: "Jogos digitais e aprendizagem",
    subtitle: "Componentes dos jogos e seu papel no ensino de programação.",
    points: [
      { title: "Enredo", text: "Temática, trama e objetivo do jogo." },
      { title: "Motor", text: "Define regras e controla as reações às ações do jogador." },
      { title: "Interface", text: "Liga enredo e motor e apresenta graficamente o estado do jogo." },
    ],
    context: [
      { title: "Interesse e envolvimento", text: "Jovens aprendem de modos variados e tendem a se interessar por jogos; a programação torna-se mais divertida e envolvente." },
      { title: "Criatividade e competências", text: "A escola deve incentivar criatividade e PC. Jogos epistêmicos desenvolvem competências em situações com restrições realistas." },
      { title: "Prática e experimentação", text: "Desafios e interações apoiam conceitos básicos, habilidades práticas e a aplicação de conhecimentos em um ambiente seguro." },
    ],
    takeaway: "Gêneros: ação/aventura · estratégia · simulação · quebra-cabeça · educacionais.",
    source: "Genesio et al. (2023), seção 2.2. Conceitos e função pedagógica dos jogos.",
    notes: "Nahan: apresente primeiro a definição de jogo digital como sistema composto por enredo, motor e interface interativa. O enredo estabelece temática, trama e objetivo; o motor define regras e respostas às ações; a interface liga enredo e motor e apresenta graficamente o estado do jogo. O artigo enumera diferentes gêneros para mostrar a diversidade de objetivos e preferências. Depois, siga o argumento pedagógico: embora os jovens tenham modos variados de aprender, tendem a se interessar por jogos. Para usá-los como ferramentas de aprendizagem, a escola deve incentivar criatividade e pensamento computacional. Jogos epistêmicos são ambientes de aprendizagem para desenvolver competências sob restrições realistas, com construção de conhecimento e criatividade. Por fim, destaque que desafios e interações tornam o ensino de programação mais envolvente e oferecem um ambiente seguro para praticar e aplicar conhecimentos e habilidades. O exemplo detalhado de coleta foi condensado para dar espaço a esses argumentos do artigo. Passe a palavra a Artur para os trabalhos relacionados.",
  },
  {
    id: 5, kind: 'related', chapter: 'Trabalhos relacionados', articleSection: '2.3 · Trabalhos relacionados', menuTitle: 'Trabalhos relacionados',
    title: 'Trabalhos relacionados',
    subtitle: 'Três iniciativas anteriores de Computação na educação básica.',
    points: [],
    takeaway: 'Em comum: aprender criando, colaborar e ampliar o acesso à Computação.',
    source: 'Genesio et al. (2023), seção 2.3. Estudos apresentados por intermédio do artigo-base.',
    notes: 'Artur: apresente os três trabalhos conforme a síntese feita por Genesio e colaboradores na seção 2.3. Rodriguez et al. (2015) utilizaram Scratch com sete estudantes e uma professora do ensino médio, relatando desenvolvimento de conceitos de pensamento computacional e competências interpessoais e de pesquisa. Silva Neto et al. (2013) ofereceram um curso de jogos educacionais em Lajedo, Pernambuco, incluindo uma competição; relataram motivação de professores e estudantes e interesse pelas disciplinas. Jesus Gomes et al. (2022) propuseram uma iniciativa de programação e robótica para inclusão digital em escolas públicas de Belo Horizonte. Foram ofertados cursos de jogos em Python e Scratch e programação em C. As metodologias ativas incluíam aprendizagem por pares, resolução de problemas, projetos e sala de aula invertida. Para esse último estudo, a síntese apresenta objetivos, não um resultado experimental de eficácia. Não confunda os sete participantes do primeiro estudo com os 24 da intervenção principal. As três referências são indiretas, via artigo-base.',
  },
  {
    id: 6, kind: 'method', chapter: 'Metodologia', articleSection: '3 · Metodologia / 4.1–4.2 · Materiais e aplicação', menuTitle: 'Metodologia e materiais',
    title: 'Metodologia da intervenção',
    subtitle: 'Escola Municipal Professor Oscar Schmidt · Juiz de Fora–MG',
    points: [
      { title: 'Planejar', text: 'Organizar a ação e escolher a programação em blocos.' },
      { title: 'Produzir materiais', text: 'Preparar roteiros, personagens, cenários e lógica.' },
      { title: 'Aplicar oficinas', text: 'Abordagem expositiva dialogada: explicação e prática no contraturno.' },
      { title: 'Avaliar', text: 'Observar as atividades e os jogos criados.' },
    ],
    takeaway: 'Slides + impressos + videoaulas + site para consultar e retomar conteúdos.',
    source: 'Genesio et al. (2023), seções 3 e 4.1 e Quadro 4 (seção 4.2). Avaliação observacional.',
    notes: 'Artur: apresente as quatro etapas declaradas na metodologia. Primeiro, a equipe planejou a ação e pesquisou ferramentas de programação em blocos para iniciantes. Depois, produziu materiais contextualizados sobre roteiros, personagens, cenários e lógica. A aplicação ocorreu no laboratório da escola no contraturno. Por fim, os instrutores observaram atividades e jogos para acompanhar a aprendizagem. As videoaulas e os materiais foram reunidos em um site para consulta, inclusive por quem faltasse. O artigo descreve uma abordagem expositiva dialogada. Não se trata de um experimento comparativo com medidas antes e depois.',
  },
  {
    id: 7, kind: "application", chapter: "Aplicação das oficinas", articleSection: "4–4.2 · Participantes, materiais e ambiente", menuTitle: "Participantes e dez oficinas",
    title: "Participantes, oficinas e ambiente",
    subtitle: "Participação voluntária no contraturno · 29 de março a 7 de junho de 2023",
    points: [
      { title: "Turma", text: "Rede pública; sem experiência em computadores; 1 aluno com dificuldade motora." },
      { title: "Instrutores", text: "3 graduandos UFJF (19–21 anos): 1 explica e 2 auxiliam no laboratório." },
      { title: "Ambiente do laboratório", text: "Acesso online falhou; uso offline do Scratch 1.4; oficina de sons adaptada." },
    ],
    context: [
      { title: "Materiais de apoio", text: "Slides contextualizados, vídeos com CEAD/UFJF e site para consulta após faltas; retorno positivo dos estudantes." },
    ],
    takeaway: "6 meses de preparo · parceria em dez. 2022",
    source: "Genesio et al. (2023), seções 4 a 4.2 e Quadros 1 a 4. A oficina de sons foi adaptada.",
    notes: "Artur: apresente 24 estudantes do 8º e 9º ano, entre 13 e 15 anos, da Escola Municipal Professor Oscar Schmidt, incluindo um participante com dificuldade motora. A turma não tinha experiência prévia com computadores, motivo da oficina inicial de componentes, comandos básicos e Internet. Três graduandos da UFJF, de 19 a 21 anos, ministraram os encontros: um explicava e dois auxiliavam. A parceria foi consolidada em dezembro de 2022, com seis meses de preparação. Foram dez oficinas semanais, de até noventa minutos, no contraturno e com participação voluntária. Percorra os dez conteúdos e seus detalhes na ordem do Quadro 3. Os materiais foram contextualizados no cotidiano; videoaulas e site apoiavam ausências e receberam retorno positivo dos estudantes. No laboratório, o Scratch online não abriu em Chrome e Firefox; foi instalada a versão 1.4 offline, mantendo o interesse e a exploração de cenários, personagens e comandos. A oficina de sons precisou ser adaptada por falta de caixas de som. A organização em duplas por insuficiência de computadores será retomada nas lições aprendidas.",
  },
  {
    id: 8, kind: "results", chapter: "Atividades e resultados", articleSection: "4.3–4.5 · Sequência das atividades e resultados", menuTitle: "Da teoria à aprendizagem",
    title: "Da teoria à aprendizagem",
    subtitle: "Conteúdo teórico → prática no Scratch → criação dos jogos → absorção dos conceitos",
    points: [],
    stages: [
      { section: "4.3.1", title: "Conteúdo teórico", activity: "Jogos do cotidiano: enredo, cenários, categorias e personagens; roteiro com início e game over.", observation: "Roteiros concluídos com êxito; manter a atenção na teoria foi desafiador." },
      { section: "4.3.2", title: "Conteúdo prático", activity: "Scratch: sprites, cenários, blocos e teclado; revisão de x/y para programar movimentos.", observation: "Mais atenção e satisfação; dificuldades iniciais diminuíram com apoio e familiarização." },
      { section: "4.4", title: "Criação dos jogos", activity: "Teoria aplicada a comandos por personagem: movimentos, pulo, interações e variáveis de controle.", observation: "Muitos evoluíram rápido e com criatividade; alguns ainda esqueciam comandos de pulo e interação." },
      { section: "4.5", title: "Absorção dos conceitos", activity: "Desafio de criação individual com suporte; sequências, repetições, condições e AND/OR/NOT.", observation: "Segundo os autores, a maioria assimilou os conceitos e houve respostas corretas às situações booleanas." },
    ],
    source: "Genesio et al. (2023), seções 4.3 a 4.5. Observações dos instrutores, sem medida comparativa de aprendizagem.",
    notes: "Artur: siga rigorosamente a ordem das quatro linhas, que acompanha o artigo. Em 4.3.1, jogos do cotidiano introduzem enredo, cenários, categorias e personagens, apoiando roteiros com características, início e desfecho; a escrita foi concluída, embora a atenção na teoria tenha sido desafiadora. Em 4.3.2, a prática começa após os roteiros, com sprites, cenários e blocos no Scratch. A turma demonstrou mais atenção, curiosidade para desenhar cenários e alterar personagens e satisfação ao executar movimentos pelo teclado. Combinar blocos e usar coordenadas x/y exigiu revisão e apoio; as dificuldades iniciais diminuíram com a familiarização. Em 4.4, a teoria foi aplicada nos comandos de cada personagem; muitos evoluíram rapidamente e expressaram criatividade, mas uma pequena parcela ainda tinha dificuldade para recordar comandos de pulo, interação e variáveis de controle. Em 4.5, os autores descrevem a criação individual com suporte e observam que a maioria assimilou os conceitos ensinados; também relatam compreensão de sequências, iterações e condicionais e respostas corretas em situações com AND, OR e NOT. Explique que a proposta individual coexistiu com algumas duplas por insuficiência de computadores, conforme a seção 5. Os resultados são observacionais: não há percentual medido de ganho de aprendizagem. Passe a palavra a Felipe.",
  },
  {
    id: 9, kind: 'lessons', chapter: 'Lições aprendidas', articleSection: '5 · Lições aprendidas', menuTitle: 'Lições aprendidas nas oficinas',
    title: 'Lições aprendidas nas oficinas',
    subtitle: 'Aprendizados pedagógicos e de infraestrutura, na ordem da seção 5.',
    points: [
      { title: 'Materiais no contexto da turma', text: 'Materiais ligados ao cotidiano aproximaram os estudantes e tornaram o ambiente das oficinas mais adequado.' },
      { title: 'Ambiente para perguntas', text: 'Um espaço propício deixa os estudantes à vontade para perguntar e favorece o entendimento dos conceitos.' },
      { title: 'Liberdade com orientação', text: 'Temas livres estimularam a criatividade; a diversidade de jogos ampliou o interesse pelas oficinas.' },
      { title: 'Infraestrutura e investimento', text: 'Acesso online inviável e poucos computadores limitaram as oficinas; alguns criaram em duplas. Investir em recursos tecnológicos é essencial.' },
      { title: 'Scratch para iniciantes', text: 'Criar histórias e jogos facilita a familiarização com conceitos básicos; os autores destacam seu potencial de estimular e capacitar os alunos.' },
      { title: 'Conexão entre teoria e prática', text: 'Com materiais adequados, criar jogos une os conceitos de jogos da teoria à lógica de programação aplicada na prática.' },
    ],
    source: 'Genesio et al. (2023), seção 5 — Lições Aprendidas.',
    notes: 'Felipe: acompanhe a ordem dos dois parágrafos da seção 5, seguindo os números da esquerda para a direita em cada linha. Primeiro, os autores destacam materiais didáticos que considerem o contexto dos estudantes, aproximando-os das oficinas e favorecendo um ambiente adequado. Segundo, um ambiente propício deixa a turma à vontade para perguntar e compreender os conceitos. Terceiro, os estudantes mostraram criatividade nos roteiros; a liberdade de temas, com orientação, gerou diversidade de jogos e ampliou o interesse. Quarto, as limitações de infraestrutura afetaram as oficinas: o Scratch online não pôde ser usado e a falta de computadores levou alguns estudantes a criar em duplas. A lição expressa pelos autores é a necessidade de investir em recursos tecnológicos, com oportunidades para estudantes e aplicadores. No segundo parágrafo, destaque o potencial do Scratch para iniciantes: simplificar o ensino, permitir histórias e jogos e familiarizar os alunos com conceitos básicos de programação. Por fim, os autores associam materiais adequados ao desenvolvimento de jogos pelos próprios estudantes e à conexão entre conceitos de jogos, na teoria, e lógica de programação, na prática. Essas são lições dos autores no contexto observado. A versão 1.4, os problemas de áudio e o site pertencem aos detalhes de execução apresentados antes; não substituem o conteúdo desta seção.',
  },
  {
    id: 10, kind: 'conclusion', chapter: 'Considerações finais', articleSection: '6 · Considerações finais', menuTitle: 'Considerações finais dos autores',
    title: 'Considerações finais',
    subtitle: 'Conclusões dos autores sobre o ensino de lógica com jogos.',
    points: [
      { title: 'Aprendizagem de lógica', text: 'Compreensão dos conceitos de programação.' },
      { title: 'Aplicação prática', text: 'Uso dos conceitos nos jogos criados.' },
      { title: 'Raciocínio e criatividade', text: 'Exercício de habilidades cognitivas e criativas.' },
      { title: 'Scratch acessível', text: 'Interface amigável para iniciantes.' },
      { title: 'Replicação das oficinas', text: 'Base para adaptar oficinas a outras escolas.' },
      { title: 'Orientação a professores', text: 'Desafios e estratégias para novos professores.' },
    ],
    takeaway: 'Viável no contexto relatado; avaliação por observação das oficinas.',
    source: 'Genesio et al. (2023), seção 6. Método de avaliação descrito na seção 3.',
    notes: 'Felipe: apresente as seis ideias centrais da seção 6 do artigo. Os autores relatam resultados promissores no aprendizado de programação, aplicação dos conceitos nos jogos, exercício de habilidades cognitivas e criativas e boa acessibilidade do Scratch. Eles também defendem a replicabilidade da experiência e o compartilhamento dos desafios, estratégias e resultados como orientação para novos professores. O texto conclui pela viabilidade e eficácia da abordagem no contexto observado. Apresente isso como conclusão dos autores, sem transformar as observações em comprovação experimental ou afirmar que a experiência já foi replicada e validada em outras escolas. O relato envolveu 24 estudantes de uma escola pública. Na próxima tela, diferencie a leitura crítica do grupo e a relação pedagógica com ADS.',
  },
  {
    id: 11, kind: 'discussion', chapter: 'Análise do grupo e discussão', articleSection: 'Análise do grupo · ADS e debate', menuTitle: 'Leitura crítica, ADS e debate',
    title: 'Aprendizagem individual em debate',
    subtitle: 'Como saber se os dois alunos compreenderam a lógica ao compartilhar um computador?',
    points: [
      { title: 'Alcance das evidências', text: 'Uma escola; sem comparação antes/depois ou avaliação de retenção.' },
      { title: 'Conexão com ADS', text: 'Modelar regras, construir algoritmos e testar comportamentos.' },
    ],
    takeaway: 'Uma possibilidade: cada aluno explicar e adaptar uma regra sem apoio do colega.',
    source: 'Análise e atividade propostas para o grupo a partir de Genesio et al. (2023), seções 3 a 5.',
    notes: 'Felipe: separe estas interpretações do grupo das conclusões dos autores apresentadas antes. O estudo se concentra em uma escola e usa observações; não apresenta comparação antes e depois, grupo de controle nem acompanhamento da retenção. Isso limita generalizações e afirmações causais. Como relação pedagógica com ADS, destaque decomposição das regras, implementação de condições e laços e verificação dos comportamentos. O artigo não avaliou estudantes de ADS nem a transferência para linguagens textuais. Conecte a pergunta ao compartilhamento dos computadores e à avaliação observacional. Aguarde as respostas antes de sugerir uma explicação individual do algoritmo, a alteração de uma regra ou uma tarefa curta de transferência. São propostas do grupo, não instrumentos avaliados no artigo. A existência de duplas por si só não implica ausência de aprendizagem individual.',
  },
  {
    id: 12, kind: 'reference', menuTitle: 'Referência ABNT',
    title: 'Referência',
    subtitle: 'Artigo-base do seminário',
    points: [],
    source: 'Fonte principal do seminário. Demais estudos discutidos por meio deste artigo.',
    notes: 'Felipe: indique a referência completa e o DOI para consulta. Não leia a referência inteira. A publicação é de 2023, nos anais do XXIX WIE, páginas 375 a 386. Wing, Brackmann e outros trabalhos foram discutidos por meio do artigo-base, sem sugerir consulta direta a todos eles. Preencha a data real de acesso antes da apresentação. Agradeça à turma e encerre.',
  },
];
