# Auditoria do inglês para a prova do 4º bimestre

Data: 14/11/2026. Revisão do código local após o commit `23b9ee6`, com a correção da capa e os emojis restaurados que já estavam no workspace. O diagnóstico abaixo registra o estado anterior às correções; a execução autorizada posteriormente está resumida a seguir.

## Correções executadas após a auditoria

- Corrigido o gabarito de **too many chips** e o feedback de **DID** que falava de plural em português.
- Reescritas pistas ambíguas nos jogos de hábitos e fim de semana; substituído o jogo de decorar números das unidades por vocabulário em contexto.
- Incluídos textos em inglês junto às questões de leitura, com perguntas respondíveis pelo próprio texto.
- Ampliado o treino de perguntas e respostas completas com passado regular, irregular e **didn’t + verbo base**, incluindo dois novos jogos.
- Respostas digitadas agora exigem a resposta inteira, aceitando diferenças de maiúsculas, pontuação e **didn't / did not**. Frases incorretas que apenas contêm a palavra esperada deixam de passar.
- Banco final: **62 questões distintas, 16 jogos e 118 rodadas/pares**. O simulado usa 15 questões: 3 de listening, 3 de reading e 9 de use of English, incluindo os cinco focos gramaticais. Essa distribuição é uma escolha pedagógica do site, não uma quantidade informada pela escola.
- Tentativas antigas incompatíveis são reiniciadas; novas tentativas do simulado preservam o sorteio ao retomar.

Validação: 69 respostas percorridas no navegador (todas as questões das unidades e uma tentativa de simulado), 118 rodadas dos jogos, rejeição de respostas gramaticalmente incorretas, retomada do simulado e reinício de tentativa antiga. Inspeção visual de leitura e resposta completa em tela de 390 px, sem transbordamento horizontal. Testes automatizados de consistência e 1.000 sorteios equilibrados passaram; build estático passou. O áudio foi verificado pelo texto enviado à síntese de voz, sem avaliação auditiva da pronúncia. Vídeos e publicação remota não foram auditados.

As seções seguintes preservam o diagnóstico e o inventário **anteriores à correção**, para rastreabilidade.

## Conclusão da auditoria inicial

O vocabulário e os principais conteúdos gramaticais do site correspondem às Units 7, 8 e 9. Não há um desvio generalizado para outras matérias. Os problemas mais importantes são um gabarito objetivamente errado, feedback de Língua Portuguesa dentro de um jogo de inglês, algumas escolhas sem resposta única e uma cobertura insuficiente das habilidades de leitura e produção de respostas completas.

Estar no livro não significa que a escola exigirá memorizar cada informação. A lista da prova delimita habilidades, Vocabulary 1 e 2 e gramática; não especifica que as perguntas de leitura cobrarão os mesmos textos de memória.

## Fontes e alcance

- Lista oficial: `Material estudo/4o BIMESTRE/1793703779143_CONTEUDOS_PROVAS_EF3_BIM4_2026.pdf`, página 3. Confere com a lista transcrita pelo usuário.
- Livro: `Material estudo/4o BIMESTRE/INGLES/INGLES.pdf`. Inspeção visual das 27 páginas digitalizadas, incluindo as páginas impressas 114–167. Cada página do PDF reúne duas páginas do livro.
- Site: `content/ing07.json`, `content/ing08.json`, `content/ing09.json`, `content/sim_ingles.json`, `data.js`, `app.js`, `experiences.js`, `pedagogy.js` e construção do banco em `build_data.py`.
- Avaliados: 16 blocos de teoria, 14 jogos com 98 pares/itens e 48 questões distintas. O simulado reúne as 40 questões das unidades e 8 extras, sorteando 15 por tentativa.
- Reprodução no navegador local: gabarito errado de chips e pista de plural no jogo de respostas curtas. Não houve transcrição ou auditoria dos vídeos, nem verificação da implantação remota nesta revisão.

## Correspondência com o material

| Assunto | Local no livro / PDF | Parecer |
| --- | --- | --- |
| Corpo, muscle, bone, stretch, bend | 116–117 / PDF 2 | Faz parte de Vocabulary 1 da Unit 7, apesar de a lista da prova resumir como exercising. Manter. |
| DID e respostas curtas | 120–121 / PDF 4 | Prioridade explícita. Conteúdo presente; corrigir feedback do jogo. |
| Exercício, frutas, vegetais, descanso e junk food | 122 / PDF 5 | Vocabulary 2 da Unit 7. Alinhado. |
| Too much, too many e enough | 123 / PDF 5 | Alinhado; too many também aparece expressamente na página. Corrigir o gabarito. |
| Take Care of Your Brain! e forest bath | 124–125 / PDF 6 | Texto real da unidade. Utilizar como leitura com apoio em inglês, não como curiosidade a decorar. |
| Festas, tradições, objetos e ações de celebração | 132–133 e 138 / PDF 10 e 13 | Vocabulary 1 e 2 da Unit 8. Alinhado. |
| Passado regular e perguntas/respostas completas | 136–137 / PDF 12 | Falta treino específico de respostas completas com verbos regulares. |
| Passado irregular | 139 / PDF 13 | Go, see, eat, sing, drink, wear, have, write, give e take estão no material. |
| Day of the Dead e Yi Peng | 140–141 / PDF 14 | São o texto de leitura da Unit 8 e estão relacionados às tradições culturais previstas. Manter com texto de apoio. |
| Atividades de lazer, win/lose e descrições | 148–149 / PDF 18 | Vocabulary 1 da Unit 9. Alinhado. |
| DIDN’T, respostas completas e wh-questions | 152–153 / PDF 20 | DIDN’T em respostas longas é prioridade explícita. How/What estão no livro como contexto. |
| Swimming, fishing, hiking, horseback riding e ice skating | 154–155 / PDF 21 | Vocabulary 2; go + -ing está na gramática da mesma página. Manter para trabalhar as atividades e as negativas, sem expandir para uma unidade geral de gerúndio. |
| Museu, dinossauros e planetário | 156–157 / PDF 22 | Fazem parte de Wow! Look at That!, leitura da Unit 9. Não são uma invasão de Ciências/Geografia. |
| First, then, next, after that / Hassan | 158 / PDF 23 | Aparecem em Writing. Complemento possível para compreender sequência, mas não prioridade explícita da lista da prova. |
| Paralympics | 162–163 / PDF 25 | Extended Reading. Não cobrado pelo banco atual; não acrescentar como memorização obrigatória apenas porque está no PDF. |
| Recortes da Unit 1 e canção final | 166–167 / PDF 27 | Material extra do arquivo, fora do recorte anunciado. Não incorporar como conteúdo obrigatório. |

## Correções prioritárias

### P0 — Gabarito errado: Unit 7, desafio 8

Em `content/ing07.json`, questão 8 (índice 7), a opção de índice 0 é **too many** e a opção de índice 1 é **too much**, mas `answer` vale 1. A explicação corretamente diz que chips é contável e pede too many. A página 123 do livro também trabalha chips nessa distinção.

Reproduzido no navegador: selecionar too many é marcado como erro; selecionar too much é aceito, seguido da explicação contraditória. A cópia no simulado herda o defeito. Corrigir para `answer: 0`, regenerar `data.js` e conferir ambos os caminhos.

### P1 — Pista de outra matéria no jogo de DID

`experiences.js` configura o segundo jogo da Unit 7 no modo `transform`. Em `app.js`, `renderTransformacaoJogo` mostra, após dois erros, uma orientação sobre substantivo, artigo, característica e plural. Foi reproduzido no navegador.

Esse conteúdo não ajuda a responder DID. A pista deve orientar a observar a pessoa (you → I; he → he etc.) e a indicação de afirmação ou negação. Tornar o feedback específico por perfil, preservando os jogos de Português que também usam a função.

### P1 — Reading Comprehension sem leitura em inglês

Sete questões dependem dos textos longos: Unit 7 Q12–13, Unit 8 Q10–12 e Unit 9 Q10–11. O desafio não fornece os textos. Os resumos da teoria estão em português. `pedagogy.js` não acrescenta contexto às perguntas de inglês; `contextualizarQuestao` tampouco encontra um trecho nessas questões.

Isso pratica lembrança do resumo e de detalhes do livro, e não necessariamente compreensão de um texto inglês. Exemplo: recordar a cidade do museu não comprova que a criança consegue localizar uma informação em uma leitura.

Manter os temas, mas fornecer um trecho curto em inglês junto da questão, com informação suficiente para responder. Pode ser um texto novo, de dificuldade equivalente e com o vocabulário estudado. Separar localizar informação, compreender ação/negação e inferir algo realmente sustentado pelo texto. Não presumir que o texto da prova será idêntico ao do livro.

### P1 — Pouca prática de respostas longas

Na Unit 8, Q5–6 treinam reconhecimento de respostas completas com saw e ate; o extra Q1 usa went. Os regulares ficam principalmente em formas isoladas, classificação e preenchimento. Não há exercício de resposta completa com watched/played/listened/danced equivalente ao objetivo explícito da prova.

Na Unit 9, há reconhecimento de frases negativas e preenchimento de didn't go/didn't win, mas falta montar ou produzir a estrutura completa em diferentes sujeitos e atividades. As únicas três questões abertas do banco pedem knee, played e go swimming. Nenhuma pede uma resposta longa.

Adicionar atividades de ordenar palavras e/ou escrever respostas controladas, por exemplo transformar uma informação explícita em uma resposta com DIDN’T + verbo na forma base + complemento. Para Unit 8, combinar perguntas com DID e respostas afirmativas completas regulares e irregulares. A lista não informa o formato real da prova; praticar a estrutura completa é uma forma de cobrir o objetivo, não uma afirmação de que haverá redação.

### P1 — Ambiguidade na Unit 9

- Jogo 2, item 4: o fato de a frase mencionar o domingo passado não permite escolher entre went fishing e didn't go fishing. Ambas são gramaticais e falta um acontecimento que determine qual ocorreu.
- Jogo 3: gostar de um jogo não prova que o time venceu; jogar videogame não exclui assistir TV no mesmo dia; não comer fora não prova que houve piquenique. Há mais de uma continuação possível entre as alternativas sorteadas.
- Parte dessas frases vem do exercício da página 152. Não são invenções do site. O problema é convertê-las em afirmações isoladas e escolher uma única continuação sem a moldura do exercício original. O livro fornece lacunas e um banco de verbos; o site transforma isso em escolha entre histórias completas.
- Jogo 4: ficar em casa, sair, visitar um museu ou passar um dia sozinho não determina objetivamente exciting/boring. A resposta deve se apoiar em como a pessoa descreveu a experiência, não no julgamento do programa.
- Chuva e mau tempo são pistas convencionais copiadas/adaptadas do material. Para tornar o jogo inequívoco, informar também que o passeio foi cancelado, em vez de ensinar que chuva implica necessariamente não sair.

Reescrever as pistas para explicitar o resultado: placar do jogo, atividades feitas/não feitas, passeio cancelado, sentimentos do personagem. Manter o vocabulário e a gramática da unidade.

### P2 — Simulado sem garantia das três habilidades

O banco tem 48 questões, sendo 9 com áudio (`listen`). Não há diálogos ou pequenos relatos auditivos com perguntas de compreensão; predominam palavras e frases curtas. Isso é útil, mas cobre apenas parte de Listening.

O sorteio em `iniciarQuiz` escolhe 15 índices do banco inteiro sem cotas de habilidade ou conteúdo. Logo, uma tentativa não garante Listening, leitura e todos os pontos gramaticais. Pelo tamanho atual do banco, a chance de sair uma tentativa sem nenhuma das 9 questões de áudio é aproximadamente 2,3%, assumindo sorteio uniforme.

Proposta editorial, não distribuição informada pela escola: organizar o simulado em 3 itens de Listening, 3 de Reading e 9 de vocabulário/gramática, com pelo menos um item para cada alvo gramatical anunciado. Primeiro criar boas questões de leitura e marcar habilidades; depois estratificar o sorteio.

### P2 — Aceitação excessiva das respostas abertas

`validarResposta` aceita qualquer entrada que contenha uma resposta esperada com mais de quatro caracteres. Assim, uma frase sem sentido que inclua played pode passar na questão que pede apenas o passado de play. Na Unit 9 Q13, as respostas aceitas incluem swimming e went swimming, apesar de a instrução pedir go + -ing.

Definir critérios por tipo de tarefa: palavra, expressão ou frase completa. Normalizar caixa, espaços e pontuação sem considerar qualquer substring como resposta correta. Aceitar variantes de contração quando a atividade exigir frase; manter variantes deliberadas no conteúdo, não por coincidência de substring.

### P2 — Foco de revisão

- O jogo Which unit? usa palavras corretas, mas cobra em qual capítulo apareceram. Isso não é uma habilidade anunciada para a prova. Substituir por significado, compreensão auditiva ou uso contextual.
- Unit 9 Q12 cobra first no texto de Hassan, material de Writing. Deixar como complemento ou converter em compreensão de sequência com trecho fornecido. A questão não deve substituir treino de DIDN’T.
- Números de horas/copos nas pistas de enough são exemplos criados pelo site. Para ensinar língua, é mais claro dizer que o personagem descansou/bebeu o suficiente e perguntar pela expressão, sem transformar uma quantidade fixa em regra universal.
- As palavras dos cartões estão amplamente presentes no PDF. Parte delas aparece só na teoria ou como distrator. A revisão deve aumentar o uso em contexto de termos menos exercitados, como chest, muscle, stretch/bend, costume/feast/lantern/decorations, take/took, text my friends, busy e interesting.

## Inventário dos 14 jogos

| Unidade e jogo | Parecer / ação |
| --- | --- |
| U7 1 — Memória do corpo | Alinhado ao Vocabulary 1; manter. |
| U7 2 — Respostas curtas | Alinhado; corrigir a pista de plural. |
| U7 3 — Too / Enough | Alinhado; tornar explícito o sentido de excesso/suficiência. |
| U7 4 — Bons hábitos | Alinhado; manter foco nas expressões. |
| U8 1 — Festival words | Alinhado aos dois vocabulários; manter. |
| U8 2 — Memória do passado | Alinhado; complementar com uso em respostas completas e take/took. |
| U8 3 — Regular or irregular? | Alinhado; classificação não substitui construir pergunta/resposta. |
| U8 4 — Duas festas | Alinhado ao Reading; fornecer texto inglês para consulta. |
| U9 1 — Memória do lazer | Alinhado; manter. |
| U9 2 — Went ou didn't go | Alinhado no tema; reescrever pistas ambíguas, especialmente item 4. |
| U9 3 — Win or lose? | Alinhado no tema, mas requer reescrita das inferências/continuações. |
| U9 4 — Exciting ou boring | Vocabulário pertinente; exigir evidência do sentimento na frase. |
| Simulado 1 — Which unit? | Baixa relevância para as habilidades da prova; substituir. |
| Simulado 2 — Memória do passado | Alinhado; manter como aquecimento, sem substituir uso contextual. |

## Inventário dos 48 desafios

Números abaixo são posições no JSON, começando em 1; as alternativas mudam de ordem na tela.

| Unidade | Questões | Parecer |
| --- | --- | --- |
| U7 | 1–6 | Vocabulário, Listening e DID: alinhadas. |
| U7 | 7 | Tema alinhado; pode explicitar que a pessoa considera uma hora uma quantidade moderada, para evitar ambiguidade de sentido com enough. |
| U7 | 8 | Gabarito errado: corrigir imediatamente. |
| U7 | 9–11 | Enough, hábitos e comando stretch: alinhadas. |
| U7 | 12–13 | Leitura real do livro; falta trecho inglês na questão. |
| U7 | 14 | Vocabulário alinhado; revisar critério de singular/plural aceito. |
| U8 | 1–9 | Vocabulário e passado alinhados; falta complementar respostas completas regulares. |
| U8 | 10–12 | Texto cultural real; falta trecho inglês. Explicações devem ser apresentadas como informações do texto, não generalizações sobre todas as famílias/comunidades. |
| U8 | 13 | Forma regular alinhada; restringir validação à resposta pretendida. |
| U9 | 1–2 | Atividades e Listening alinhados. |
| U9 | 3 | Baseada na página 152; tornar cancelamento do piquenique explícito. |
| U9 | 4–9 | Negativas, perguntas, Listening e vocabulário pertinentes. How/What são apoio do livro; garantir prioridade de DIDN’T em respostas longas. |
| U9 | 10–11 | Leitura real do museu; falta trecho inglês. |
| U9 | 12 | Sequência de Writing: complemento, não núcleo explícito. |
| U9 | 13 | Hobbies pertinentes; alinhar variantes aceitas à instrução. |
| Extras do simulado | 1–8 | Temas alinhados. Q1 é resposta longa irregular; Q2/Q8 Listening; Q4 negativa longa. Manter e equilibrar a seleção por habilidade. |

## Ordem recomendada de execução

1. Corrigir o gabarito de chips e o feedback de plural; regenerar banco e cache.
2. Reescrever as pistas ambíguas de Unit 9 e ajustar respostas abertas.
3. Acrescentar trechos de leitura em inglês, perguntas com evidência textual e áudio contextualizado.
4. Acrescentar perguntas e respostas longas regulares na Unit 8 e negativas completas na Unit 9.
5. Substituir Which unit?, relegar Writing a complemento e garantir cobertura de habilidades no simulado.

Critério de aceite: cada atividade deve ter um alvo previsto, uma fonte ou contexto suficiente, uma resposta justificável e feedback que ensine o ponto de inglês praticado. Não remover tópicos reais do livro apenas porque parecem diferentes do resumo da lista escolar.
