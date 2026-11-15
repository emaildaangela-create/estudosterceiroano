# Handover: preparatório das provas do 4º bimestre

Atualizado em 14/11/2026, no commit `17d5159`, já publicado em `main`.

## Objetivo

O site virou um preparatório para as provas do 4º bimestre do 3º ano. Só entra o conteúdo da lista oficial (`Material estudo/4o BIMESTRE/1793703779143_CONTEUDOS_PROVAS_EF3_BIM4_2026.pdf`). O material dos bimestres anteriores foi arquivado em `content/arquivo/` e não é publicado.

| Prova | Data | Situação no site |
|---|---|---|
| Inglês (Units 7–9) | qui 19/11 | ✅ pronto, com vídeos |
| Língua Portuguesa (Mód. 23–27 + poema e conto de mistério) | seg 23/11 | ✅ pronto, com vídeos |
| História (Mód. 12–14) | ter 24/11 | ✅ pronto, com vídeos |
| Matemática (Mód. 13 e 14) | qua 25/11 | ✅ pronto, sem vídeos (opcional) |
| Geografia (Mód. 13) | qui 26/11 | ⏳ não iniciado |
| Ciências (Mód. 13) | sex 27/11 | ⏳ não iniciado |

A 2ª chamada (1 a 4/12) usa o mesmo conteúdo.

## Regras definidas pela usuária (obrigatórias)

1. **Só o que está na lista da prova.** Não basta estar no livro. Cruzar cada seção da apostila com a lista oficial e cortar o resto. Em Português, por exemplo, os gêneros cobrados são só poema e conto de mistério. Por isso saíram texto informativo, depoimento, reportagem e texto teatral.
2. **Toda atividade traz o seu contexto.** Pergunta ou jogo que cite um texto, uma tirinha ou uma imagem precisa mostrar esse material: campo `context` na questão ou no jogo. Nada pode depender de material que não esteja no site.
3. Alternativas de múltipla escolha aparecem em ordem sorteada, e o próprio app faz isso. Evitar que a alternativa certa se destaque. O `build_data.py` valida tamanho, "todas/nenhuma das anteriores" e pegadinhas.
4. Visual atraente, com ilustrações explicativas ligadas ao conteúdo.
5. O material antigo **some** do site (não fica nem link).
6. Vídeos: usar a ferramenta não oficial `notebooklm-py` (autorizado).
7. Ilustrações em aquarela: autorizado usar a `OPENAI_API_KEY` da usuária, que tem custo. Até agora só se usaram SVG gerados por script, sem custo.
8. Publicar cada matéria assim que ficar pronta (`git push` em `main`).

## Como o site funciona

- `content/<id>.json`: um arquivo por módulo, com `theory`, `games` e `quiz`. `content/sim_<disciplina>.json` traz o resumo e as questões extras do **Simulado** da disciplina.
- `build_data.py`: define as disciplinas, as datas e a ordem dos módulos, valida o quiz e os jogos, monta o simulado (banco de todos os módulos, 15 questões sorteadas) e gera `data.js`. Também atualiza a lista offline do `sw.js` e as versões `?v=` no `index.html`. **Rodar sempre:** `python build_data.py`.
- `experiences.js`: um perfil por jogo, **na mesma ordem** de `games` (`mode`: `choice`, `explore`, `transform`, `memoria`, `sequence`, `writing`). Ao remover ou reordenar jogos, atualizar aqui.
- `pedagogy.js`: objetivos de cada módulo ("Você vai aprender a…").
- Campos úteis do conteúdo:
  - `theory[].figure`: ilustração do bloco.
  - `theory[].cards`: cartões de vocabulário (`t`/`d`, ou `en`/`pt` em Inglês; em Inglês o cartão fala a palavra).
  - `quiz[].context`: texto de apoio da questão.
  - `quiz[].listen`: áudio em inglês.
  - `games[].context`: texto "Leia para jogar".
  - `items[].fill`: palavra que preenche o `__` no jogo.
  - `type: "writing"`: oficina de produção textual.
- Inglês tem regras próprias, feitas em outra sessão: `skill`, `assessmentVersion`, distribuição do simulado. Ver `docs/revisao-ingles-prova-4b.md` e `scripts/check-english-content.mjs`. **Não mexer sem ler esse documento.**
- Ilustrações: `scripts/svg_ingles.py`, `svg_portugues.py` e `svg_historia.py` geram `assets/4b/*.svg` (900×600). Os auxiliares de desenho ficam em `svg_ingles.py`. Para Matemática, Geografia e Ciências, criar `svg_<materia>.py` no mesmo padrão.

## Pendências

### 1. Vídeos do NotebookLM
Feito em 14/11: `lp24`–`lp27`, `hist13` e `hist14` ganharam vídeo novo. Se o login expirar (`Authentication expired`), a usuária roda `notebooklm login --browser chrome`. Passo a passo para um módulo novo:
1. Para cada módulo: `scripts/video_notebooklm.sh <id> "<título do caderno>" "<pedido>" kawaii` (cerca de 10 a 20 min cada; pode rodar vários em paralelo com `nohup … &`). O script gera a fonte com `scripts/fonte_notebooklm.py`, cria o caderno, gera o vídeo em `pt_BR` e baixa para `assets/videos/<id>.mp4`.
2. Conferir um frame do vídeo e acrescentar `"video": "assets/videos/<id>.mp4"` logo depois de `subtitle` no JSON. Rodar o build, fazer commit e push.

No pedido, dizer que é para crianças de 8 anos, com narração em português falada devagar e **"cubra apenas o que está na fonte, sem acrescentar outros assuntos"**.

### 2. Matemática (prova em 25/11) — feito
Publicado em `content/mat13.json`, `mat14.json` e `sim_matematica.json`; ilustrações em `scripts/svg_matematica.py`. "As quatro operações" foram tratadas como no livro: problemas de medidas e de frações (somar, subtrair, multiplicar, dividir, comparar preços). Referência do que entrou:
- Lista: Módulo 13 completo (massa, comprimento, capacidade). Módulo 14, Frações, **sem o gráfico de setores**. A usuária mandou seguir o livro na parte "as quatro operações".
- O livro, já lido, cobre:
  - **Mód. 13:** instrumentos de medida; kg e g (1 kg = 1 000 g); g e mg (1 g = 1 000 mg); kg e tonelada (1 t = 1 000 kg); L e mL (1 L = 1 000 mL); cm e mm (1 cm = 10 mm); cm e m (1 m = 100 cm); m e km (1 km = 1 000 m); medidas em feiras livres; problemas.
  - **Mód. 14:** metade, terço, quarto; quinto a décimo (frações unitárias, numerador e denominador); frações de quantidade (½ de 8 = 8 ÷ 2); problemas com frações unitárias; jogo da memória de frações.
  - As páginas 69–70 do livro são o **gráfico de setores: excluir**.
- O módulo 14 pede ilustrações de pizza e barra de fração em SVG, que se desenham bem por script.

### 3. Geografia (Mód. 13: A indústria e o comércio)
Tópicos: o que é indústria; do artesanato à indústria; bens duráveis e não duráveis; consumo consciente; profissionais da indústria; impactos ambientais da indústria. Os módulos 12 e 14 da apostila **não** entram.

### 4. Ciências (Mód. 13: O uso do solo)
Tópicos:
- composição do solo e seus usos;
- agricultura, pecuária, silvicultura, mineração e urbanização;
- cuidados com o solo;
- poluição do solo: causas, consequências, prevenção e controle;
- utilizando o solo.

Os módulos 12 e 14 da apostila **não** entram.

### 5. Ao terminar cada matéria
Adicionar perfis em `experiences.js` e objetivos em `pedagogy.js`. Criar `content/sim_<disciplina>.json` com o resumo da prova e algumas questões extras. Rodar o build, testar no tamanho de celular (390 px) passando por todos os jogos e desafios, e procurar no `data.js` termos de assuntos que não estão na lista. Depois fazer commit e push.

## Onde está o material

- Apostilas (fora do git, pasta `Material estudo/` no `.gitignore`):
  - `Material estudo/4o BIMESTRE/MATEMÁTICA/Gravando…165222.pdf` (25 páginas): Mód. 13 nas páginas 1–12 do PDF, Mód. 14 nas 13–25.
  - `…/HITS GEO ING/Gravando…163933.pdf` (80 páginas): História 1–24, Geografia Mód. 13 nas 34–41, Ciências Mód. 13 nas 58–65.
  - Cada página do PDF mostra duas páginas do livro.
  - Esses PDFs vieram de gravação de tela; as páginas duplicadas já foram removidas.
- Para ver as páginas, renderizar como JPG com PyMuPDF: `fitz.open(pdf)`, depois `page.get_pixmap(dpi=60).save(...)`. As imagens da sessão anterior ficaram numa pasta temporária, que pode ter sido apagada.
- Calendário oficial: `Material estudo/4o BIMESTRE/1793703690749_Calendario_de_Provas_EF3_4BIM.pdf`.

## Cuidados

- **Sempre rodar `git fetch` antes de começar.** Outras sessões publicam neste repositório: as de Inglês e as de modo offline vieram assim. Houve um rebase com conflitos em `app.js`, `style.css`, `sw.js` e `index.html`.
- O Windows usa cp1252 no terminal. Rodar scripts Python que imprimem acentos ou setas com `PYTHONIOENCODING=utf-8`.
- O validador rejeita a alternativa certa quando ela é muito mais longa que as outras. Equilibrar o tamanho das opções.
- `scripts/video_frames_to_pdfs.py` é um arquivo da usuária, ainda fora do git. Não mexer.
