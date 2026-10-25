export type SlideKind =
  | 'cover' | 'problem' | 'objective' | 'theory' | 'method'
  | 'production' | 'engagement' | 'conclusion' | 'critique'
  | 'impact' | 'discussion' | 'reference' | 'games' | 'application' | 'results' | 'lessons' | 'synthesis' | 'related';

export interface Point { title: string; text: string; detail?: string }
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
    id: 2, kind: 'problem', chapter: 'Contexto e objetivo', articleSection: '1 · Introdução e objetivo', menuTitle: 'Contexto e objetivo do artigo',
    title: 'Programação na escola pública',
    subtitle: 'Escola de Games UFJF: aprender lógica criando jogos.',
    points: [
      { title: 'Inclusão digital', text: 'Mais tecnologias na educação após 2020.' },
      { title: 'Barreiras nas escolas', text: 'Recursos e formação docente insuficientes.' },
      { title: 'Ensino de Computação', text: 'BNCC (2018): algoritmos e fluxogramas.' },
    ],
    takeaway: 'Relatar resultados, dificuldades e limitações do ensino de lógica com jogos digitais.',
    source: 'Genesio et al. (2023), resumo e seção 1. Programa Scratch: exemplo didático.',
    notes: 'Nahan: situe o projeto na integração das tecnologias à educação, intensificada pelo ensino remoto em 2020. Os autores apontam recursos insuficientes e preparação docente como barreiras. Diferencie usar aplicativos de aprender os fundamentos da Computação. O artigo contextualiza a BNCC de 2018 e a habilidade EF06MA04, sobre algoritmos em linguagem natural e fluxogramas. O projeto ensina lógica criando jogos; o objetivo do artigo é relatar resultados, dificuldades e limitações dessa experiência. Explique o gênero relato de experiência como descrição e reflexão sobre uma prática situada. O programa Scratch ilustra evento, repetição, movimento e mensagem; é um exemplo didático, não um código dos participantes. Fonte: resumo e seção 1.',
  },
  {
    id: 3, kind: 'theory', chapter: 'Fundamentação teórica', articleSection: '2.1 · Pensamento computacional', menuTitle: 'Pensamento computacional',
    title: 'Pensamento computacional',
    subtitle: 'Resolver problemas com passos que uma pessoa ou máquina possa executar.',
    points: [
      { title: 'Decomposição', text: 'Dividir o jogo em partes menores.' },
      { title: 'Padrões', text: 'Reaproveitar soluções semelhantes.' },
      { title: 'Abstração', text: 'Selecionar os detalhes essenciais.' },
      { title: 'Algoritmos', text: 'Ordenar os comandos do jogo.' },
    ],
    source: 'Genesio et al. (2023), seção 2.1. Wing e Brackmann citados por meio do artigo.',
    notes: 'Nahan: explique o pensamento computacional como uma habilidade de resolução de problemas, conforme Wing e Brackmann são discutidos no artigo-base. Sua definição envolve criatividade e raciocínio, além de saber usar aplicativos. Percorra os quatro pilares: decomposição separa o problema; padrões permitem reaproveitar soluções; abstração filtra o essencial; algoritmos organizam passos executáveis. Use as setas para cima e para baixo para destacar os pilares. O personagem e a bandeira são um exemplo didático do seminário, não registros dos jogos dos estudantes. Fonte: seção 2.1.',
  },
  {
    id: 4, kind: 'games', chapter: 'Fundamentação teórica', articleSection: '2.2 · Jogos digitais', menuTitle: 'Jogos digitais e aprendizagem',
    title: 'Jogos digitais e aprendizagem',
    subtitle: 'Enredo, motor e interface conectam a ideia às regras programadas.',
    points: [
      { title: 'Enredo', text: 'Tema, história e objetivo.' },
      { title: 'Motor', text: 'Regras e reações às ações do jogador.' },
      { title: 'Interface', text: 'Elementos visuais e estado do jogo.' },
    ],
    source: 'Genesio et al. (2023), seção 2.2. Jogo de coleta: exemplo didático.',
    notes: 'Nahan: explique os três componentes descritos na seção 2.2. O enredo estabelece história e objetivo; o motor controla regras e respostas; a interface apresenta o estado do jogo. Use o exemplo didático de coletar uma moeda: objetivo, regra de pontuação e placar. O artigo também apresenta gêneros variados e jogos epistêmicos, que permitem desenvolver competências em situações com restrições realistas. O interesse pedagógico é experimentar e aplicar conceitos em um ambiente de jogos. A figura é uma explicação do seminário, não um jogo registrado no estudo. Ao terminar, passe a palavra a Artur, que apresenta a seção 2.3.',
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
    id: 7, kind: 'application', chapter: 'Aplicação das oficinas', articleSection: '4–4.2 · Participantes, conteúdos e ambiente', menuTitle: 'Participantes e dez oficinas',
    title: 'Participantes e oficinas',
    subtitle: 'Participação voluntária · 29 de março a 7 de junho de 2023',
    points: [
      { title: 'Turma', text: 'Sem experiência com computadores', detail: '1 aluno com dificuldade motora.' },
      { title: 'Instrutores', text: '3 graduandos', detail: 'UFJF · 1 conduz · 2 auxiliam' },
      { title: 'Preparação', text: '6 meses', detail: 'Oficinas no contraturno' },
    ],
    source: 'Genesio et al. (2023), seções 4 a 4.2 e Quadros 1 a 4. Sons: oficina adaptada.',
    notes: 'Artur: participaram 24 estudantes do 8º e 9º ano, entre 13 e 15 anos, incluindo um aluno com dificuldade motora. A equipe de instrutores era composta por três graduandos de 19 a 21 anos. O Quadro 4 informa seis meses de preparação, dez oficinas e duração máxima de noventa minutos por encontro. A seção 4.2 registra que o público não possuía experiência prévia com o uso de computadores. Por isso, a primeira oficina apresentou componentes, comandos básicos e recursos do computador, preparando a turma para as atividades no Scratch. Apresente os dez tópicos na ordem do Quadro 3: computador; apresentação do projeto; roteiro de jogos; escrita do roteiro; lógica de programação; ferramenta Scratch; programação no Scratch; loops e conectivos; sons; prática acompanhada. A oficina de sons foi adaptada. Relacione os primeiros conteúdos à preparação para criar os jogos e os seguintes à programação e ao acompanhamento das dificuldades.',
  },
  {
    id: 8, kind: 'results', chapter: 'Atividades e resultados', articleSection: '4.3–4.5 · Atividades, jogos e aprendizagem', menuTitle: 'Atividades e resultados',
    title: 'Avanços e dificuldades',
    subtitle: 'Aprendizagem e criação dos jogos, segundo a observação dos autores.',
    points: [],
    columns: [
      { title: 'Avanços observados', points: [
        { title: 'Aprendizagem observada', text: 'Maioria compreendeu sequências, laços, condições e AND/OR/NOT.' },
        { title: 'Aplicação nos jogos', text: 'Programaram ações dos personagens a partir de roteiros criativos.' },
        { title: 'Interesse na prática', text: 'Mais atenção ao programar ações.' },
      ] },
      { title: 'Dificuldades relatadas', points: [
        { title: 'Blocos e variáveis', text: 'Alguns ainda tinham dificuldade para recordar e combinar comandos.' },
        { title: 'Plano cartesiano', text: 'Coordenadas x e y exigiram revisão e acompanhamento.' },
        { title: 'Exposição teórica', text: 'Manter o foco nas explicações.' },
      ] },
    ],
    source: 'Genesio et al. (2023), seções 4.3 a 4.5. Observações dos instrutores, sem medida comparativa de aprendizagem.',
    notes: 'Artur: apresente os resultados como observações dos autores, não como um teste experimental de aprendizagem. Na seção 4.3.1, os estudantes concluíram os roteiros com cenários, personagens, início e desfecho. Na parte prática, demonstraram mais atenção e satisfação ao programar movimentos e outras ações dos personagens. A seção 4.4 relata a aplicação da teoria nos jogos e a criatividade dos estudantes. A seção 4.5 informa que, segundo os instrutores, a maioria absorveu os conceitos ensinados, especialmente sequências, iterações, condicionais e lógica booleana. Os autores também relatam respostas corretas nas situações propostas com AND, OR e NOT. Diferencie dois momentos: as dificuldades iniciais de uso e combinação dos blocos diminuíram com a familiarização (seção 4.3.2), mas uma pequena parcela ainda teve dificuldade para recordar comandos e combiná-los com variáveis durante a criação dos jogos (seção 4.4). A revisão do plano cartesiano e o acompanhamento dos instrutores ajudaram a trabalhar as coordenadas x e y. Houve dificuldade de atenção nas partes teóricas. A atividade propunha criação individual com suporte; por falta de computadores, parte da turma trabalhou em duplas, conforme a seção 5. Não há taxa de conclusão dos jogos nem percentual medido de ganho de aprendizagem. Passe a palavra a Felipe.',
  },
  {
    id: 9, kind: 'lessons', chapter: 'Lições aprendidas', articleSection: '5 · Lições aprendidas / apoio de 4.2–4.3', menuTitle: 'Adaptações e lições aprendidas',
    title: 'Lições para aplicar as oficinas',
    subtitle: 'Problemas e necessidades identificados no relato.',
    points: [
      { title: 'Scratch online indisponível', text: 'Instalar a versão 1.4 nos computadores.' },
      { title: 'Poucos computadores', text: 'Organizar parte da turma em duplas.' },
      { title: 'Sem caixas de som', text: 'Adaptar a oficina de áudio.' },
      { title: 'Dúvidas nos comandos', text: 'Oferecer acompanhamento dos instrutores.' },
      { title: 'Contexto dos estudantes', text: 'Usar exemplos de jogos conhecidos pela turma.' },
      { title: 'Interesses diferentes', text: 'Permitir temas livres com orientação.' },
    ],
    takeaway: 'Investir em infraestrutura e contextualizar os materiais fazem parte do planejamento.',
    source: 'Genesio et al. (2023), seção 5; situações relatadas nas seções 4.2 e 4.3.',
    notes: 'Felipe: o Scratch online não abriu nos dois navegadores testados no laboratório, o que levou à instalação da versão 1.4. A falta de computadores fez com que alguns jogos fossem desenvolvidos em duplas. A ausência de caixas de som exigiu alterar a oficina de áudio. Como lições pedagógicas, os autores destacam exemplos próximos da realidade dos estudantes, liberdade de temas com orientação e um ambiente que favoreça perguntas. Site e videoaulas permitiram consultar materiais fora dos encontros. Isso descreve apoio ao acompanhamento, não demonstra que toda defasagem foi eliminada. Destaque como o relato registra adaptações reais, úteis a quem planeja ações semelhantes.',
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
