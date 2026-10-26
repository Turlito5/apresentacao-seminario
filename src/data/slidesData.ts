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
  tags?: string[];
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
    subtitle: "Contexto e objetivo do relato.",
    points: [
      { title: "Inclusão digital", text: "Pandemia: mais TDIC, poucos recursos e preparo docente." },
      { title: "Computação na escola", text: "Além dos aplicativos: disciplinas próprias; integração multi, inter e transdisciplinar." },
      { title: "PC para todos · Wing (2006)", text: "Resolver problemas com fundamentos da Computação." },
      { title: "Programar é pensar", text: "Raciocínio, criatividade e criação tecnológica." },
      { title: "BNCC (2018)", text: "Cultura e mundo digital; PC; EF06MA04: algoritmo em linguagem natural + fluxograma. Poucas iniciativas; políticas necessárias." },
    ],
    context: [
      { title: "Escola de Games UFJF", text: "Jogos, PC, lógica, criatividade e inclusão digital.", detail: "Crianças e jovens da rede pública." },
    ],
    takeaway: "Ensino de lógica com jogos: resultados, dificuldades e limites.",
    source: "Genesio et al. (2023), resumo e seção 1.",
    notes: "Nahan: siga a ordem da introdução. A pandemia intensificou o uso das TDIC, mas escolas enfrentam limitações de recursos e formação docente. Conforme Brackmann é discutido no artigo, ensinar Computação vai além de aulas de informática e do uso de aplicativos: pode ocorrer em disciplinas próprias ou de modo multi, inter ou transdisciplinar. Wing apresenta o pensamento computacional como habilidade para todos e relaciona programação à aprendizagem do pensar. Apresente então a contextualização da BNCC de 2018, com a habilidade EF06MA04, sobre algoritmos em linguagem natural e fluxogramas. Os autores apontam poucas iniciativas concretas e a necessidade de políticas de integração. O Escola de Games UFJF propõe oficinas para crianças e jovens da rede pública, trabalhando PC, lógica, criatividade e inclusão digital. Diferencie esse objetivo do projeto do objetivo do artigo: relatar resultados, dificuldades e limitações. O gênero é relato de experiência. O pequeno programa Scratch é didático e não reproduz um jogo dos participantes.",
  },
  {
    id: 3, kind: "theory", chapter: "Fundamentação teórica", articleSection: "2 · Fundamentação / 2.1 · Pensamento computacional", menuTitle: "Fundamentação e pensamento computacional",
    title: "Pensamento computacional",
    subtitle: "PC para todos, além do uso de aplicativos.",
    points: [
      { title: "Decomposição", text: "Dividir problemas em partes menores." },
      { title: "Padrões", text: "Reconhecer semelhanças e reutilizar soluções." },
      { title: "Abstração", text: "Filtrar detalhes; manter o essencial." },
      { title: "Algoritmos", text: "Ordenar passos e regras da solução." },
    ],
    sectionIntro: "Seção 2: PC, jogos digitais e trabalhos relacionados.",
    context: [
      { title: "Wing (2006)", text: "Resolver problemas, conceber sistemas e compreender comportamentos humanos.", detail: "Formação analítica: leitura, escrita e aritmética." },
      { title: "Brackmann (2017)", text: "Solução criativa, crítica e estratégica; individual ou coletiva.", detail: "Passos para pessoas ou máquinas; além de tarefas mecânicas." },
    ],
    takeaway: "Pilares independentes; algoritmos articulam os demais.",
    source: "Genesio et al. (2023), seções 2–2.1. Wing e Brackmann via artigo-base.",
    notes: "Nahan: comece pelo único tópico da abertura da seção 2: a fundamentação apresenta PC, jogos digitais e trabalhos relacionados para sustentar a compreensão do estudo. Em seguida, apresente a definição de Wing: habilidade fundamental para todos, relacionada à resolução de problemas, concepção de sistemas e compreensão do comportamento humano, que integra a formação analítica junto à leitura, escrita e aritmética. Para Brackmann, PC não se resume a usar aplicativos nem a pensar mecanicamente; é uma capacidade humana criativa, crítica e estratégica para resolver problemas, individual ou colaborativamente, com passos executáveis por pessoas ou máquinas. Só depois explique os quatro pilares, todos definidos na tela: decomposição, reconhecimento de padrões, abstração e algoritmos. No artigo, eles são apresentados como independentes na solução de problemas, e o algoritmo articula os demais. Use as setas para cima e para baixo para alternar o exemplo do personagem e da bandeira. Na decomposição, separe movimento, colisão e pontuação. Em padrões, reutilize movimentos. Em abstração, destaque apenas trajeto e objetivo. Em algoritmos, mostre iniciar, repetir o movimento e verificar a chegada. As quatro definições permanecem visíveis. O jogo é um exemplo didático do seminário, não um jogo dos participantes.",
  },
  {
    id: 4, kind: "games", chapter: "Fundamentação teórica", articleSection: "2.2 · Jogos digitais", menuTitle: "Jogos digitais e aprendizagem",
    title: "Jogos digitais e aprendizagem",
    subtitle: "Componentes dos jogos e seu papel no ensino de programação.",
    points: [
      { title: "Enredo", text: "Temática, trama e objetivo." },
      { title: "Motor", text: "Regras e respostas às ações do jogador." },
      { title: "Interface", text: "Representação visual e ligação entre enredo e motor." },
    ],
    context: [
      { title: "Interesse e envolvimento", text: "Diferentes formas de aprender; jogos atraem jovens e tornam a programação lúdica e envolvente." },
      { title: "Criatividade e competências", text: "Escola: criatividade e PC. Jogos epistêmicos: competências sob regras e restrições realistas." },
      { title: "Prática segura", text: "Desafios e interações conectam conceitos, habilidades práticas e experimentação segura." },
    ],
    tags: ["Ação/aventura", "Estratégia", "Simulação", "Quebra-cabeça", "Educacionais"],
    source: "Genesio et al. (2023), seção 2.2. Conceitos e função pedagógica dos jogos.",
    notes: "Nahan: apresente primeiro a definição de jogo digital como sistema composto por enredo, motor e interface interativa. O enredo estabelece temática, trama e objetivo; o motor define regras e respostas às ações; a interface liga enredo e motor e apresenta graficamente o estado do jogo. O artigo enumera diferentes gêneros para mostrar a diversidade de objetivos e preferências. Depois, siga o argumento pedagógico: embora os jovens tenham modos variados de aprender, tendem a se interessar por jogos. Para usá-los como ferramentas de aprendizagem, a escola deve incentivar criatividade e pensamento computacional. Jogos epistêmicos são ambientes de aprendizagem para desenvolver competências sob restrições realistas, com construção de conhecimento e criatividade. Por fim, destaque que desafios e interações tornam o ensino de programação mais envolvente e oferecem um ambiente seguro para praticar e aplicar conhecimentos e habilidades. O exemplo detalhado de coleta foi condensado para dar espaço a esses argumentos do artigo. Passe a palavra a Artur para os trabalhos relacionados.",
  },
  {
    id: 5, kind: 'related', chapter: 'Trabalhos relacionados', articleSection: '2.3 · Trabalhos relacionados', menuTitle: 'Trabalhos relacionados',
    title: 'Trabalhos relacionados',
    subtitle: 'Três iniciativas anteriores de Computação na educação básica.',
    points: [],
    takeaway: 'Criar, colaborar e ampliar o acesso à Computação.',
    source: 'Genesio et al. (2023), seção 2.3. Estudos apresentados por intermédio do artigo-base.',
    notes: 'Artur: apresente os três trabalhos conforme a síntese feita por Genesio e colaboradores na seção 2.3. Rodriguez et al. (2015) utilizaram Scratch com sete estudantes e uma professora do ensino médio, relatando desenvolvimento de conceitos de pensamento computacional e competências interpessoais e de pesquisa. Silva Neto et al. (2013) ofereceram um curso de jogos educacionais em Lajedo, Pernambuco, incluindo uma competição; relataram motivação de professores e estudantes e interesse pelas disciplinas. Jesus Gomes et al. (2022) propuseram uma iniciativa de programação e robótica para inclusão digital em escolas públicas de Belo Horizonte. Foram ofertados cursos de jogos em Python e Scratch e programação em C. As metodologias ativas incluíam aprendizagem por pares, resolução de problemas, projetos e sala de aula invertida. Para esse último estudo, a síntese apresenta objetivos, não um resultado experimental de eficácia. Não confunda os sete participantes do primeiro estudo com os 24 da intervenção principal. As três referências são indiretas, via artigo-base.',
  },
  {
    id: 6, kind: 'method', chapter: 'Metodologia', articleSection: '3 · Metodologia / 4.1–4.2 · Materiais e aplicação', menuTitle: 'Metodologia e materiais',
    title: 'Metodologia da intervenção',
    subtitle: 'Escola Municipal Professor Oscar Schmidt · Juiz de Fora–MG',
    points: [
      { title: 'Planejar', text: 'Organizar a ação e escolher a programação em blocos.' },
      { title: 'Produzir materiais', text: 'Roteiros, personagens, cenários e lógica.' },
      { title: 'Aplicar oficinas', text: 'Explicação dialogada + prática no contraturno.' },
      { title: 'Avaliar', text: 'Observar atividades e jogos criados.' },
    ],
    takeaway: 'Slides + impressos + videoaulas + site para consultar e retomar conteúdos.',
    source: 'Genesio et al. (2023), seções 3 e 4.1 e Quadro 4 (seção 4.2). Avaliação observacional.',
    notes: 'Artur: apresente as quatro etapas declaradas na metodologia. Primeiro, a equipe planejou a ação e pesquisou ferramentas de programação em blocos para iniciantes. Depois, produziu materiais contextualizados sobre roteiros, personagens, cenários e lógica. A aplicação ocorreu no laboratório da escola no contraturno. Por fim, os instrutores observaram atividades e jogos para acompanhar a aprendizagem. As videoaulas e os materiais foram reunidos em um site para consulta, inclusive por quem faltasse. O artigo descreve uma abordagem expositiva dialogada. Não se trata de um experimento comparativo com medidas antes e depois.',
  },
  {
    id: 7, kind: "application", chapter: "Aplicação das oficinas", articleSection: "4–4.2 · Participantes, materiais e ambiente", menuTitle: "Participantes e dez oficinas",
    title: "Participantes, oficinas e ambiente",
    subtitle: "Adesão voluntária · contraturno · 29/03–07/06/2023",
    points: [
      { title: "Turma", text: "Computadores: primeiro contato; 1 aluno com dificuldade motora." },
      { title: "Instrutores", text: "3 graduandos UFJF: 1 explica, 2 auxiliam." },
      { title: "Laboratório", text: "Scratch 1.4 offline · áudio adaptado." },
    ],
    context: [
      { title: "Apoio", text: "Vídeos CEAD/UFJF e slides no site; retorno positivo." },
    ],
    takeaway: "Preparo: 6 meses · parceria: dez. 2022",
    source: "Genesio et al. (2023), seções 4–4.2 e Quadros 1–4.",
    notes: "Artur: apresente 24 estudantes do 8º e 9º ano, entre 13 e 15 anos, da Escola Municipal Professor Oscar Schmidt, incluindo um participante com dificuldade motora. A turma não tinha experiência prévia com computadores, motivo da oficina inicial de componentes, comandos básicos e Internet. Três graduandos da UFJF, de 19 a 21 anos, ministraram os encontros: um explicava e dois auxiliavam. A parceria foi consolidada em dezembro de 2022, com seis meses de preparação. Foram dez oficinas semanais, de até noventa minutos, no contraturno e com participação voluntária. Percorra os dez conteúdos e seus detalhes na ordem do Quadro 3. Os materiais foram contextualizados no cotidiano; videoaulas e site apoiavam ausências e receberam retorno positivo dos estudantes. No laboratório, o Scratch online não abriu em Chrome e Firefox; foi instalada a versão 1.4 offline, mantendo o interesse e a exploração de cenários, personagens e comandos. A oficina de sons precisou ser adaptada por falta de caixas de som. A organização em duplas por insuficiência de computadores será retomada nas lições aprendidas.",
  },
  {
    id: 8, kind: "results", chapter: "Atividades e resultados", articleSection: "4.3–4.5 · Sequência das atividades e resultados", menuTitle: "Da teoria à aprendizagem",
    title: "Da teoria à aprendizagem",
    subtitle: "Quatro etapas, com atividades e observações dos autores.",
    points: [],
    stages: [
      { section: "4.3.1", title: "Conteúdo teórico", activity: "Jogos familiares: enredo, cenários, categorias e personagens; roteiro com início e desfecho.", observation: "Roteiros concluídos; atenção mais difícil na teoria." },
      { section: "4.3.2", title: "Conteúdo prático", activity: "Scratch: sprites, cenários e blocos; teclado e revisão de x/y.", observation: "Maior atenção e satisfação; apoio e familiarização reduziram dificuldades iniciais." },
      { section: "4.4", title: "Criação dos jogos", activity: "Comandos por personagem: movimento, pulo, interações e variáveis de controle.", observation: "Muitos avançaram com criatividade; alguns ainda esqueciam pulo e interações." },
      { section: "4.5", title: "Absorção dos conceitos", activity: "Criação individual com suporte; sequências, repetições, condições e AND/OR/NOT.", observation: "Maioria assimilou os conceitos; respostas booleanas corretas, segundo os autores." },
    ],
    source: "Genesio et al. (2023), seções 4.3 a 4.5. Observações dos instrutores, sem medida comparativa de aprendizagem.",
    notes: "Artur: siga rigorosamente a ordem das quatro linhas, que acompanha o artigo. Em 4.3.1, jogos do cotidiano introduzem enredo, cenários, categorias e personagens, apoiando roteiros com características, início e desfecho; a escrita foi concluída, embora a atenção na teoria tenha sido desafiadora. Em 4.3.2, a prática começa após os roteiros, com sprites, cenários e blocos no Scratch. A turma demonstrou mais atenção, curiosidade para desenhar cenários e alterar personagens e satisfação ao executar movimentos pelo teclado. Combinar blocos e usar coordenadas x/y exigiu revisão e apoio; as dificuldades iniciais diminuíram com a familiarização. Em 4.4, a teoria foi aplicada nos comandos de cada personagem; muitos evoluíram rapidamente e expressaram criatividade, mas uma pequena parcela ainda tinha dificuldade para recordar comandos de pulo, interação e variáveis de controle. Em 4.5, os autores descrevem a criação individual com suporte e observam que a maioria assimilou os conceitos ensinados; também relatam compreensão de sequências, iterações e condicionais e respostas corretas em situações com AND, OR e NOT. Explique que a proposta individual coexistiu com algumas duplas por insuficiência de computadores, conforme a seção 5. Os resultados são observacionais: não há percentual medido de ganho de aprendizagem. Passe a palavra a Felipe.",
  },
  {
    id: 9, kind: 'lessons', chapter: 'Lições aprendidas', articleSection: '5 · Lições aprendidas', menuTitle: 'Lições aprendidas nas oficinas',
    title: 'Lições aprendidas nas oficinas',
    subtitle: 'Contexto, participação, recursos e ensino de lógica com Scratch.',
    points: [
      { title: 'Contexto da turma', text: 'Materiais ligados ao cotidiano aproximam os estudantes e tornam as oficinas mais adequadas.' },
      { title: 'Espaço para perguntas', text: 'Ambiente propício incentiva perguntas e ajuda a compreender os conceitos.' },
      { title: 'Liberdade orientada', text: 'Temas livres: criatividade, diversidade de jogos e maior interesse.' },
      { title: 'Infraestrutura', text: 'Falha online e poucos computadores: algumas duplas e necessidade de investimento.' },
      { title: 'Scratch para iniciantes', text: 'Histórias e jogos estimulam iniciantes no aprendizado dos conceitos básicos de programação.' },
      { title: 'Teoria + prática', text: 'Materiais adequados conectam conceitos de jogos à lógica aplicada na criação.' },
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
    id: 11, kind: 'critique', chapter: 'Análise do grupo e discussão', articleSection: 'Análise do grupo · Contribuições e limites', menuTitle: 'Leitura crítica do grupo',
    title: 'Leitura crítica do grupo',
    subtitle: 'Importância das oficinas e limites da avaliação.',
    points: [],
    columns: [
      { title: 'Importância do projeto', points: [
        { title: 'Inclusão digital', text: 'Primeiro contato com computadores e programação na escola pública.' },
        { title: 'Prática criativa', text: 'Jogos articulam lógica, criatividade e resolução de problemas.' },
        { title: 'Relação com ADS', text: 'Modelagem de regras, algoritmos e testes de comportamento.' },
      ] },
      { title: 'Limites da avaliação', points: [
        { title: 'Método observacional', text: 'Atividades e jogos avaliados pelos próprios instrutores.' },
        { title: 'Risco de viés', text: 'Percepções e expectativas dos aplicadores podem influenciar a avaliação.' },
        { title: 'Ganho não quantificado', text: 'Faltam medidas comparáveis para estimar a aprendizagem com precisão.' },
      ] },
    ],
    takeaway: 'Como medir a aprendizagem além da percepção dos aplicadores?',
    source: 'Leitura crítica do grupo a partir de Genesio et al. (2023), seções 3–6.',
    notes: 'Felipe: comece reconhecendo a importância social e pedagógica do projeto. As oficinas levaram computadores e programação a estudantes da escola pública sem experiência prévia, usando jogos para aproximar lógica, criatividade e prática. Para o grupo de ADS, isso permite relacionar regras, algoritmos e verificação de comportamentos; essa conexão é uma interpretação do seminário, pois o estudo foi realizado na educação básica. Apresente então o contraponto: os próprios aplicadores observaram os estudantes, as atividades e os jogos produzidos. Esses registros oferecem indícios qualitativos de aprendizagem. Porém, a percepção e as expectativas de quem conduz a experiência podem influenciar o julgamento de seus resultados. O relato não apresenta uma comparação padronizada antes/depois, avaliação independente ou medida de retenção que permita quantificar com precisão o ganho de aprendizagem e atribuí-lo às oficinas. Assim, o projeto é relevante e promissor, mas a avaliação descrita não permite medir seu sucesso com a mesma precisão de indicadores comparáveis. Encerre com a pergunta à turma. Como complemento, o grupo pode sugerir tarefas antes e depois com critérios explícitos e avaliação independente; são propostas do grupo, não procedimentos aplicados no artigo.',
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
