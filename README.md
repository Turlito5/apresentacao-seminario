# Apresentação Seminário

Apresentação acadêmica de **12 slides** sobre o artigo **Aprendendo Lógica de Programação Desenvolvendo Jogos Digitais: Um Relato de Experiência**, de Genesio e colaboradores (2023).

Projeto para Análise e Desenvolvimento de Sistemas, com conteúdo resumido do artigo, notas de fala, diagramas explicativos e um programa 2D em blocos no estilo do Scratch.

## Apresentação online

Endereço desta versão sem controles: https://turlito5.github.io/apresentacao-seminario/sem-controles/

A publicação conjunta usa o workflow da branch `main`, que gera a versão principal e as branches com e sem controles. Depois de enviar esta branch, execute esse workflow para atualizar `/sem-controles/` preservando as outras versões.

## Rodar localmente

Requer Node.js 22.12 ou superior.

```powershell
git clone https://github.com/Turlito5/apresentacao-seminario.git
cd apresentacao-seminario
npm.cmd ci
npm.cmd run dev
```

Abra http://127.0.0.1:5173 e mantenha o terminal aberto. Encerre com `Ctrl+C`. Em Linux/macOS, use `npm` no lugar de `npm.cmd`.

```powershell
npm.cmd run build
npm.cmd run preview
```

O build fica em `dist/`. O preview abre em http://127.0.0.1:4173. O projeto deve ser servido por HTTP, não aberto diretamente como arquivo.

## Edição manual

| Arquivo | Conteúdo |
| --- | --- |
| `src/data/slidesData.ts` | Textos, notas, referências, equipe e dados do artigo |
| `src/data/roteiro-artur.md` | Roteiro completo e revisado do Artur, fonte do painel R nos slides 5–8 |
| `src/data/arturScript.ts` | Separação do roteiro por slide, falas, transições e orientações |
| `src/components/ArturScriptContent.tsx` | Leitor com navegação entre os roteiros e rolagem independente |
| `src/components/artur-script.css` | Tamanho do painel e legibilidade do roteiro |
| `src/components/Presentation.tsx` | Navegação e transições |
| `src/components/SlideContent.tsx` | Composição dos slides |
| `src/components/ExpandedArticleContent.tsx` | Contexto da introdução, definições de PC, jogos, oficinas detalhadas, sequência das atividades e lições da seção 5 |
| `src/components/LearningDiagrams.tsx` | Exemplo interativo do personagem e da bandeira, aplicado aos quatro pilares no slide 3 |
| `src/components/AcademicDiagrams.tsx` | Jogos, metodologia, resultados e análise |
| `src/data/articleCoverage.ts` | Comparativo da seção 2.3, dez conteúdos detalhados das oficinas e atividade sugerida ao grupo |
| `src/components/ArticleDetails.tsx` | Trabalhos relacionados, exemplos e materiais de apoio |
| `src/components/article-content.css` | Composições do conteúdo completo, tabela da seção 2.3, espaçamento e divisórias |
| `src/components/expanded-article-content.css` | Distribuição e legibilidade dos slides 2, 3, 4, 7, 8 e 9 |
| `src/components/ScratchBlock2D.tsx` | Programa em blocos e renderização SVG com scratchblocks |
| `src/components/scratch-block-2d.css` | Dimensões e legenda da ilustração 2D |
| `src/styles.css` | Tipografia e layout principal |
| `src/components/learning-diagrams.css` | Estilos dos diagramas interativos |
| `src/components/academic-diagrams.css` | Estilos das composições acadêmicas |
| `vite.config.ts` | Configuração de build e caminho de publicação |
| `.github/workflows/pages.yml` | Publicação automática no GitHub Pages |

O Vite atualiza a apresentação ao salvar os arquivos. A equipe está dividida em Nahan (1–4), Artur (5–8) e Felipe (9–12). Preencha a data real de acesso ao artigo em `slidesData.ts` antes do seminário.

## Controles

- **← / →**, Page Up/Page Down: trocar slides.
- **↑ / ↓** no slide 3: alternar o pilar e o exemplo do personagem/bandeira, sem clicar antes. As quatro definições continuam visíveis.
- **Home / End**: primeiro/último slide.
- **F**: tela cheia.
- **O**: visão geral.
- **N**: notas de fala.
- **R**, somente nos slides **5 a 8**: abrir ou fechar o roteiro completo do Artur correspondente ao slide. Dentro do leitor, os botões Slide 5–8 trocam o slide e o roteiro; ↑/↓, Page Up/Page Down ou o mouse rolam o texto. O conteúdo cabe na janela com rolagem, sem reduzir a fonte para tentar exibir tudo de uma vez.
- **Esc**: fechar painel.
- O rótulo de edição no cabeçalho, os controles inferiores e a barra de progresso foram removidos. Os atalhos continuam ativos.
- A preferência de movimento reduzido do sistema operacional continua respeitada.
- Slide 2: programa em Scratch com bandeira verde, repetição, movimento e mensagem; exemplo compacto para manter os comandos legíveis.

Os painéis N e R aparecem na janela em que foram abertos. Não são um modo de apresentador em segunda tela; feche-os na janela projetada. R e Esc fecham o roteiro, e o botão X também continua disponível.

## Estrutura acadêmica

1. Artigo e equipe.
2. Introdução: obstáculos à inclusão digital, Computação na escola, PC para todos, programação e pensamento, BNCC, projeto e objetivo do artigo.
3. Abertura da seção 2, definições de Wing e Brackmann e os quatro pilares — seção 2.1.
4. Componentes dos jogos, interesse, criatividade, jogos epistêmicos e experimentação — seção 2.2.
5. Três trabalhos relacionados — seção 2.3.
6. Metodologia e materiais — seções 3 e 4.1.
7. Participantes, instrutores, ambiente, materiais de apoio e conteúdos das dez oficinas.
8. Conteúdo teórico → conteúdo prático → criação dos jogos → absorção dos conceitos, separando atividades e observações dos autores — seções 4.3.1 a 4.5.
9. Lições aprendidas, na ordem da seção 5: contexto, perguntas, liberdade orientada, infraestrutura, Scratch para iniciantes e conexão teoria/prática.
10. Considerações finais dos autores — seção 6.
11. Leitura crítica: importância das oficinas, relação com ADS e limites da avaliação observacional pelos próprios aplicadores.
12. Referência do artigo.

O estudo ocorreu na educação básica. As conexões com ADS e a leitura crítica são propostas do seminário. Os resultados são observacionais, sem percentuais inventados de aprendizagem. A ilustração Scratch 2D é um exemplo didático, não um registro dos jogos dos estudantes. As referências teóricas são indiretas, via artigo-base.

Os textos visíveis usam frases curtas e palavras-chave, com densidade moderada. As definições, os três trabalhos relacionados, os dez conteúdos das oficinas, as quatro etapas do relato e as seis lições aprendidas permanecem na tela. As notas de fala preservam as explicações completas. Ícones e agrupamentos visuais ajudam a distinguir conceitos e etapas sem reduzir as fontes para acomodar texto.

O mapa dos recortes está em [COBERTURA-DO-ARTIGO.md](COBERTURA-DO-ARTIGO.md). A base visual é a versão do GitHub, com as fontes ampliadas de forma discreta: 8% nos slides e 4% no slide 7. O fator `--slide-text-boost` em `src/styles.css` controla esse aumento. A revisão amplia os trechos visíveis dos slides 2, 3, 4, 7, 8 e 9; os demais mantêm o conteúdo anterior, incluindo os trabalhos relacionados e as seis considerações finais. Os exemplos detalhados de coleta e condição deram lugar aos argumentos e às etapas do artigo. O slide 9 acompanha as lições pedagógicas e estruturais da seção 5. A apresentação mantém o formato 16:9 e adapta todas as medidas ao espaço disponível. Use **F** para apresentar em tela cheia.

Artigo: https://doi.org/10.5753/wie.2023.234515

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP e [scratchblocks](https://github.com/scratchblocks/scratchblocks) (licença MIT). Fontes Inter e Space Grotesk instaladas com o projeto.

O layout usa dimensões CSS nativas, transições curtas de fade com deslocamento horizontal e um fundo grafite com curvas de contorno e luz difusa. O programa Scratch é um SVG estático, sem WebGL, órbita ou controles de rotação. Edite `SCRATCH_PROGRAM` em `ScratchBlock2D.tsx` para mudar os comandos. O renderizador e a tradução brasileira são carregados apenas no slide 2.

## GitHub Pages

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como fonte de publicação.

O workflow define `BASE_PATH` conforme o nome do repositório. Localmente, o projeto continua funcionando na raiz. Para publicar alterações:

```powershell
git add .
git commit -m "Atualiza apresentação"
git push origin main
```
