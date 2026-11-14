# Direção de arte — inglês, terceiro ano

## Linguagem visual

Aquarela narrativa sobre papel marfim, contorno leve, pigmento transparente e paleta de azul, sálvia, coral e ocre. Crianças com proporções escolares, expressões naturais e ações reconhecíveis. As cenas de fim de semana são a referência de estilo para novas peças. Personagens recorrentes: menina de cabelos cacheados e camiseta coral, menino de camiseta azul e menino de camiseta verde.

O desenho precisa mostrar o significado: restaurante e garçom para **eat out**, grupo em movimento para **parade**, mesa compartilhada para **feast**. Não substituir ações por objetos associados. Evitar emojis, texto pintado, anatomia simplificada em excesso, imagens fotográficas e fundos que disputem atenção com o assunto.

## Arquivos e composição

Todas as sete pranchas finais têm proporção 3:2. Os PNGs são originais gerados pela ferramenta integrada `image_gen`; `prompts.json` registra as instruções e a revisão com referência visual. As primeiras variantes fotográficas foram rejeitadas e não fazem parte do projeto.

| Arquivo | Organização |
| --- | --- |
| body.png | Corpo de frente e de costas; marcações externas em HTML |
| celebrations.png | 1 coluna × 3 linhas: desfile, banquete, aniversário |
| weekend.png | 2 colunas × 3 linhas: restaurante, cinema, museu, piquenique, casa, praia |
| habits.png | 2 colunas × 3 linhas: exercício, frutas, legumes, descanso, água, higiene |
| hobbies.png | 2 colunas × 3 linhas: natação, pesca, trilha, equitação, patinação, conversa |
| cultures.png | 2 colunas × 1 linha: Dia dos Mortos e Yi Peng |
| quantities.png | 3 colunas × 1 linha: TV demais, biscoitos demais, água suficiente |

As regiões são exibidas por CSS, sem modificar os originais. O navegador reutiliza a mesma imagem entre cartões. Cada cena recebe descrição alternativa e legenda em HTML; as legendas em inglês acionam a pronúncia existente. Regras gramaticais também são texto HTML, sem redução proporcional à imagem. As marcações do corpo são controladas por botões acessíveis por teclado e indicam a seleção com `aria-pressed` e legenda anunciada.

## Conteúdo e manutenção

O campo `art` em `content/ing07.json`, `ing08.json`, `ing09.json` e `sim_ingles.json` é a fonte das apresentações. `scenes` define `src`, grade, posição, inglês, tradução e texto alternativo; `grammar` define pares de exemplo e explicação; `body.points` define as posições percentuais das partes do corpo. Executar `python build_data.py` após alterações para atualizar `data.js`, versões e cache offline. O gerador antigo `scripts/svg_ingles.py` continua disponível para os SVGs legados, que não são mais usados nas lições de inglês atuais.

Referências culturais consultadas para a direção visual e o ajuste do texto: [UNESCO — festividade dedicada aos mortos](https://ich.unesco.org/en/RL/day-of-the-dead-heritage-00054) e [Thailand Foundation — Yi Peng](https://thailandfoundation.or.th/518234-v2/). A cena de museu é imaginada, não uma reconstrução documental do museu citado na leitura.

## Critérios de revisão

- Confirmar que a ação pode ser reconhecida antes de ler a legenda.
- Verificar mãos, pés, articulações, utensílios e relações entre personagens.
- Conferir os recortes em celular e desktop; manter a cena inteira na região.
- Manter legendas legíveis, foco de teclado e ausência de rolagem horizontal.
- Verificar todos os caminhos de imagem, o cache offline e as regras gramaticais.
- Antes de uma nova edição pedagógica, observar crianças respondendo “O que está acontecendo?” e revisar cenas com interpretações divergentes. Essa validação com crianças ainda não foi realizada.

## Verificação desta implementação

Em 14/11/2026, as 16 etapas de leitura (Units 7–9 e simulado) foram verificadas no Edge headless em larguras de 360, 768 e 1280 px: 48 combinações sem erro de JavaScript, imagem quebrada ou rolagem horizontal. Os oito botões do corpo mantiveram seleção exclusiva e as legendas acionaram o texto correto da API de voz (chamada simulada no teste; não valida a qualidade da voz instalada). Foram inspecionadas capturas de corpo, atividades, gramática, quantidades e celebrações culturais. `python build_data.py`, `node --check app.js`, `npm run build` e `git diff --check` passaram. O build deixou de copiar `reviews.js`, arquivo legado ausente da raiz e não referenciado pelo HTML atual.
