# Apresentação Seminário

Apresentação acadêmica de **12 slides** sobre o artigo **Aprendendo Lógica de Programação Desenvolvendo Jogos Digitais: Um Relato de Experiência**, de Genesio e colaboradores (2023).

Projeto para Análise e Desenvolvimento de Sistemas, com conteúdo resumido do artigo, notas de fala, diagramas explicativos e um bloco 3D inspirado no Scratch.

## Apresentação online

Endereço do GitHub Pages: https://turlito5.github.io/apresentacao-seminario/

A publicação usa GitHub Actions. Cada atualização enviada à branch `main` instala as dependências, verifica o TypeScript, gera o site e publica a pasta `dist`.

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
| `src/components/Presentation.tsx` | Navegação e transições |
| `src/components/SlideContent.tsx` | Composição dos slides |
| `src/components/LearningDiagrams.tsx` | Pilares e trilha das oficinas |
| `src/components/AcademicDiagrams.tsx` | Jogos, metodologia, resultados e análise |
| `src/components/ScratchBlock3D.tsx` | Modelo 3D, órbita automática e controles |
| `src/styles.css` | Tipografia e layout principal |
| `src/components/learning-diagrams.css` | Estilos dos diagramas interativos |
| `src/components/academic-diagrams.css` | Estilos das composições acadêmicas |
| `vite.config.ts` | Configuração de build e caminho de publicação |
| `.github/workflows/pages.yml` | Publicação automática no GitHub Pages |

O Vite atualiza a apresentação ao salvar os arquivos. A equipe está dividida em Nahan (1–4), Artur (5–8) e Felipe (9–12). Preencha a data real de acesso ao artigo em `slidesData.ts` antes do seminário.

## Controles

- **← / →**, Page Up/Page Down: trocar slides.
- **↑ / ↓** no slide 4: alternar o pilar selecionado, sem clicar antes.
- **Home / End**: primeiro/último slide.
- **F**: tela cheia.
- **O**: visão geral.
- **N**: notas de fala.
- **Esc**: fechar painel.
- Botão Pausar: reduzir animações.
- Slide 2: órbita 360° em loop. Arraste para explorar ou use os botões Girar e Restaurar.

O painel de notas aparece na mesma tela da apresentação. Feche-o antes de projetar.

## Estrutura acadêmica

1. Artigo e equipe.
2. Inclusão digital e problema.
3. Objetivo e relato de experiência.
4. Pensamento computacional.
5. Jogos digitais e aprendizagem.
6. Quatro etapas metodológicas.
7. Participantes e dez oficinas.
8. Avanços e dificuldades.
9. Adaptações e lições aprendidas.
10. Conclusões, leitura crítica e relação com ADS.
11. Debate sobre aprendizagem individual.
12. Referência do artigo.

O estudo ocorreu na educação básica. As conexões com ADS e a leitura crítica são propostas do seminário. Os resultados são observacionais, sem percentuais inventados de aprendizagem. Os diagramas e o modelo 3D são exemplos didáticos, não registros dos jogos dos estudantes. As referências teóricas são indiretas, via artigo-base.

Artigo: https://doi.org/10.5753/wie.2023.234515

## Tecnologias

React, TypeScript, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js, React Three Fiber e drei. Fontes Inter e Space Grotesk instaladas com o projeto.

O layout usa dimensões CSS nativas. O WebGL é carregado apenas no slide 2. A órbita automática respeita a redução de movimento e pausa quando a aba fica oculta. Há alternativa 2D quando WebGL está indisponível.

## GitHub Pages

Em **Settings → Pages → Build and deployment**, selecione **GitHub Actions** como fonte de publicação.

O workflow define `BASE_PATH` conforme o nome do repositório. Localmente, o projeto continua funcionando na raiz. Para publicar alterações:

```powershell
git add .
git commit -m "Atualiza apresentação"
git push origin main
```
