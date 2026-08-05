/* =====================================================================
   data.js — Base de conteúdo dos estudos do 3º ano
   Gerado a partir do material didático em PDF do 3º ano (build_data.py).
   Estrutura: DISCIPLINAS[] > capitulos[] > { theory, games, quiz }.
   ===================================================================== */

const DISCIPLINAS = [
  {
    "id": "portugues",
    "nome": "Língua Portuguesa",
    "cor": "--rosa",
    "capitulos": [
      {
        "id": "lp17",
        "module": 17,
        "title": "Lava uma mão, lava a outra",
        "subtitle": "Texto instrucional · Aumentativo e diminutivo",
        "video": "assets/videos/mod17-ferramentas-da-lingua.mp4",
        "theory": [
          {
            "h": "O texto instrucional",
            "p": [
              "Os <strong>textos instrucionais</strong> têm a finalidade de mostrar <strong>como algo deve ser feito</strong>. Receitas, manuais de videogame, cartazes de higiene e regras de jogo são exemplos que encontramos todos os dias.",
              "Eles apresentam <strong>linguagem clara e objetiva</strong>, com frases curtas e comandos diretos, para que o leitor entenda e coloque em prática as instruções.",
              "Características que ajudam a reconhecer o gênero: costumam trazer uma lista de materiais ou ingredientes; apresentam uma <strong>sequência numerada de ações</strong> que precisa ser seguida na ordem; e muitas vezes usam <strong>imagens ou setas</strong> que ilustram cada etapa.",
              "Atenção ao que o texto instrucional <strong>não</strong> faz: ele não tem rimas, não se divide em versos e estrofes, não narra a história de um personagem e não apresenta diálogos."
            ]
          },
          {
            "h": "Exemplo: as cinco etapas para lavar as mãos",
            "p": [
              "Um cartaz do Unicef Brasil ensina a lavar as mãos em cinco etapas. Primeiro, molhe as mãos e aplique sabão.",
              "Depois, esfregue todas as partes das mãos, inclusive entre os dedos e sob as unhas, por pelo menos <strong>20 segundos</strong>. Por fim, enxágue e seque com pano limpo ou papel descartável.",
              "Quando não for possível lavar as mãos na pia, pode-se limpar com álcool em gel a pelo menos 70%. Mas lembre-se: a lavagem com água e sabão é a mais adequada. E não se esqueça de fechar a torneira enquanto ensaboa as mãos — devemos consumir água com responsabilidade.",
              "Desde 2008, o dia <strong>15 de outubro</strong> é o Dia Mundial da Lavagem das Mãos, com eventos organizados pelo Unicef em diversos países."
            ]
          },
          {
            "h": "Substantivo: os graus diminutivo e aumentativo",
            "p": [
              "Quanto ao <strong>grau</strong>, o substantivo pode ser <strong>diminutivo</strong> (indica tamanho menor que o original: <em>festinha</em>, <em>chapeuzinho</em>) ou <strong>aumentativo</strong> (indica tamanho maior: <em>festança</em>, <em>chapelão</em>).",
              "Mas os graus nem sempre indicam tamanho! Eles também podem expressar <strong>sentimentos</strong>: carinho, desprezo ou admiração. Exemplos: <em>Você é um paizão!</em> (admiração); <em>Esse timinho não vale nada</em> (desprezo); <em>Filhinha, você quer ajuda na lição?</em> (carinho).",
              "Compare: em <em>'Ontem as meninas jogaram o maior bolão!'</em>, o aumentativo expressa elogio, não tamanho. Em <em>'Que grupinho mais egoísta'</em>, o diminutivo expressa desprezo. Em <em>'não vou representar esse papelzinho'</em>, o diminutivo também expressa desprezo — não carinho."
            ]
          },
          {
            "h": "Ortografia: -sinho(a), -zinho(a) e -inho(a)",
            "p": [
              "Muitos diminutivos são formados com o acréscimo dos sufixos <strong>-sinho(a)</strong>, <strong>-zinho(a)</strong> e <strong>-inho(a)</strong>. Existe uma regra simples para escolher qual usar:",
              "Quando a sílaba final da palavra <strong>tem s</strong>, forma-se o diminutivo com <strong>-sinho(a)</strong>. Exemplo: <em>vaso → vasinho</em>.",
              "Quando a sílaba final <strong>não tem s</strong>, forma-se o diminutivo com <strong>-zinho(a)</strong> ou <strong>-inho(a)</strong>. Exemplos: <em>pai → paizinho</em>; <em>cama → caminha</em>; <em>anel → anelzinho</em>; <em>sapato → sapatinho</em>."
            ]
          },
          {
            "h": "O plural dos diminutivos",
            "p": [
              "Para formar o plural de um substantivo diminutivo terminado em -zinho(a) ou -zito(a), há um passo a passo: primeiro passe o substantivo para o <strong>plural</strong>, depois <strong>retire o -s</strong>, acrescente o sufixo e coloque o <strong>-s no final</strong> da palavra.",
              "Exemplo com <em>animal</em>: plural = <em>animais</em> → sem o -s = <em>animai</em> → + <em>-zinho</em> + <em>-s</em> = <strong>animaizinhos</strong>.",
              "Outro exemplo com <em>farol</em>: plural = <em>faróis</em> → sem o -s = <em>farói</em> → <strong>faroizinhos</strong>. O mesmo vale para <em>pão → pães → paezinhos</em> e <em>botão → botões → botõezinhos</em>."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "mode": "cartaz",
            "short": "O cartaz",
            "title": "Monte o cartaz de lavar as mãos",
            "instructions": "Só entra no cartaz o que ensina alguém a fazer. O resto, joga fora.",
            "term": "texto instrucional",
            "categories": [
              "Vai para o cartaz",
              "Não é de cartaz"
            ],
            "artifact": {
              "title": "Cartaz: como lavar as mãos",
              "kind": "cartaz",
              "empty": "O cartaz ainda está em branco.",
              "done": "Cartaz pronto! Ele ensina, passo a passo, uma coisa de verdade.",
              "termLine": "Um cartaz assim tem nome na prova: <strong>texto instrucional</strong>."
            },
            "items": [
              {
                "text": "Molhe as mãos com água limpa.",
                "cat": 0,
                "piece": "Molhe as mãos com água limpa",
                "name": "comando direto",
                "say": "Frase curta, mandando fazer. É a <strong>linguagem clara e objetiva</strong> do texto instrucional."
              },
              {
                "text": "A mãozinha do menino tremia de medo naquela noite escura.",
                "cat": 1,
                "name": "narrativa",
                "say": "Isso conta a história de um personagem. Narrativa não é <strong>texto instrucional</strong>."
              },
              {
                "text": "Aplique sabão suficiente para cobrir as mãos molhadas.",
                "cat": 0,
                "piece": "Aplique sabão nas mãos molhadas",
                "name": "material a usar",
                "say": "Apareceu o material: o sabão. O <strong>texto instrucional</strong> costuma dizer o que você vai precisar."
              },
              {
                "text": "Lava, lavinha, água que vem da fontinha.",
                "cat": 1,
                "name": "rima",
                "say": "Isso rima. Rima é coisa de poema — o <strong>texto instrucional</strong> não rima."
              },
              {
                "text": "Esfregue todas as partes das mãos por pelo menos 20 segundos.",
                "cat": 0,
                "piece": "Esfregue tudo por 20 segundos",
                "name": "instrução exata",
                "say": "Comando direto com uma informação exata: 20 segundos. Instrução não deixa dúvida."
              },
              {
                "text": "— Você lavou as mãos? — Ainda não, mãe!",
                "cat": 1,
                "name": "diálogo",
                "say": "São duas pessoas conversando. <strong>Texto instrucional</strong> não tem diálogo."
              },
              {
                "text": "Enxágue as mãos com água.",
                "cat": 0,
                "piece": "Enxágue as mãos com água",
                "name": "sequência de ações",
                "say": "Repare na ordem: molhar, ensaboar, esfregar, enxaguar. O <strong>texto instrucional</strong> tem uma <strong>sequência de ações</strong>."
              },
              {
                "text": "Seque as mãos com um pano limpo ou toalha de papel.",
                "cat": 0,
                "piece": "Seque com um pano limpo",
                "name": "último passo",
                "say": "Cinco passos, na ordem certa. Seu cartaz virou um <strong>texto instrucional</strong> completo."
              }
            ]
          },
          {
            "type": "maquina",
            "mode": "maquina",
            "short": "A máquina",
            "title": "A máquina de encolher e crescer palavras",
            "instructions": "A palavra entra inteira. Qual delas sai da máquina?",
            "term": "diminutivo e aumentativo",
            "artifact": {
              "title": "Palavras conquistadas",
              "kind": "prateleira",
              "empty": "Sua coleção começa no primeiro acerto.",
              "done": "Prateleira cheia! Você encolheu e cresceu palavras escrevendo cada uma do jeito certo.",
              "termLine": "Toda palavra que encolheu está no <strong>grau diminutivo</strong>. Toda palavra que cresceu está no <strong>grau aumentativo</strong>."
            },
            "items": [
              {
                "base": "vaso",
                "result": "vasinho",
                "wrong": [
                  "vazinho",
                  "vasozinho"
                ],
                "dir": "menor",
                "name": "diminutivo",
                "say": "A palavra encolheu: isso é o <strong>diminutivo</strong>. E a última sílaba de <em>vaso</em> tem <strong>s</strong> — por isso <em>vasinho</em>, com S, e não <em>vazinho</em>."
              },
              {
                "base": "pai",
                "result": "paizinho",
                "wrong": [
                  "paisinho",
                  "painho"
                ],
                "dir": "menor",
                "name": "diminutivo",
                "say": "<em>Pai</em> não tem <strong>s</strong> na última sílaba, então escrevemos com <strong>Z</strong>: <em>paizinho</em>. Outro <strong>diminutivo</strong>."
              },
              {
                "base": "cama",
                "result": "caminha",
                "wrong": [
                  "camazinha",
                  "camainha"
                ],
                "dir": "menor",
                "name": "diminutivo",
                "say": "Aqui a palavra perde o <strong>-a</strong> do fim e ganha <strong>-inha</strong>: <em>caminha</em>. Também é <strong>diminutivo</strong>."
              },
              {
                "base": "sapato",
                "result": "sapatinho",
                "wrong": [
                  "sapatozinho",
                  "sapatinha"
                ],
                "dir": "menor",
                "name": "diminutivo",
                "say": "O <strong>-o</strong> do fim sai antes de entrar o <strong>-inho</strong>: <em>sapatinho</em>, e não <em>sapatozinho</em>. Já são quatro <strong>diminutivos</strong> na prateleira."
              },
              {
                "base": "bola",
                "result": "bolão",
                "wrong": [
                  "bolaão",
                  "bolzão"
                ],
                "dir": "maior",
                "name": "aumentativo",
                "say": "Agora a palavra cresceu: isso é o <strong>aumentativo</strong>. Cuidado — em <em>“que bolão!”</em> ele vira elogio, e não tamanho."
              },
              {
                "base": "pai",
                "result": "paizão",
                "wrong": [
                  "paião",
                  "paisão"
                ],
                "dir": "maior",
                "name": "aumentativo",
                "say": "<em>Paizão</em> não fala do tamanho do pai — fala de <strong>admiração</strong>. O <strong>aumentativo</strong> também mostra sentimento."
              },
              {
                "base": "animal",
                "result": "animaizinhos",
                "wrong": [
                  "animalzinhos",
                  "animaiszinhos"
                ],
                "dir": "menor",
                "plural": true,
                "name": "diminutivo plural",
                "say": "O caminho é <em>animal → animais → animai → <strong>animaizinhos</strong></em>. Primeiro o plural, depois tira o <strong>-s</strong>, e só então encolhe."
              },
              {
                "base": "pão",
                "result": "pãezinhos",
                "wrong": [
                  "pãozinhos",
                  "pãesinhos"
                ],
                "dir": "menor",
                "plural": true,
                "name": "diminutivo plural",
                "say": "<em>pão → pães → pãe → <strong>pãezinhos</strong></em>. Sempre o plural primeiro. Essa palavra cai na prova!"
              }
            ]
          },
          {
            "type": "memoria",
            "mode": "memoria",
            "short": "Jogo da memória",
            "title": "Jogo da memória dos graus",
            "instructions": "Vire duas cartas e ache a palavra que combina com a outra.",
            "term": "diminutivo e aumentativo",
            "artifact": {
              "title": "Pares que você achou",
              "kind": "prateleira",
              "empty": "Nenhum par ainda. Vire duas cartas!",
              "done": "Todos os pares achados! Repare que nem um deles falava só de tamanho.",
              "termLine": "Os graus <strong>diminutivo</strong> e <strong>aumentativo</strong> mudam o tamanho — mas também mostram <strong>carinho, desprezo e admiração</strong>."
            },
            "items": [
              {
                "base": "festa",
                "result": "festinha",
                "name": "diminutivo",
                "say": "<em>Festinha</em> pode ser uma festa pequena — ou uma festa de que a pessoa gostou muito. O <strong>diminutivo</strong> também é carinho."
              },
              {
                "base": "chapéu",
                "result": "chapelão",
                "name": "aumentativo",
                "say": "<em>Chapelão</em> é um chapéu grande. Aqui o <strong>aumentativo</strong> fala mesmo de tamanho."
              },
              {
                "base": "time",
                "result": "timinho",
                "name": "diminutivo de desprezo",
                "say": "Em <em>“esse timinho não vale nada”</em>, o <strong>diminutivo</strong> não fala do tamanho do time: mostra <strong>desprezo</strong>."
              },
              {
                "base": "filha",
                "result": "filhinha",
                "name": "diminutivo de carinho",
                "say": "Em <em>“filhinha, quer ajuda na lição?”</em>, o <strong>diminutivo</strong> mostra <strong>carinho</strong> — a filha não é pequena."
              },
              {
                "base": "papel",
                "result": "papelzinho",
                "name": "diminutivo de desprezo",
                "say": "Em <em>“não vou representar esse papelzinho”</em>, o <strong>diminutivo</strong> mostra <strong>desprezo</strong>, e não carinho. Cuidado com essa!"
              },
              {
                "base": "gato",
                "result": "gatão",
                "name": "aumentativo",
                "say": "<em>Gatão</em> pode ser um gato enorme — ou um elogio. O <strong>aumentativo</strong> também expressa <strong>admiração</strong>."
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Assinale a opção que apresenta uma característica de textos instrucionais.",
            "options": [
              "Costumam ter rimas",
              "Podem apresentar imagens que ilustram uma sequência de ações",
              "Dividem-se em versos e estrofes",
              "Apresentam personagens que dialogam no texto"
            ],
            "answer": 1,
            "explain": "Textos instrucionais mostram como algo deve ser feito, e as imagens ajudam o leitor a entender cada etapa. Rimas, versos e estrofes são de poemas; diálogos entre personagens são de narrativas."
          },
          {
            "type": "mc",
            "q": "Qual grupo apresenta as três palavras no diminutivo?",
            "options": [
              "vasinho – sapatinho – anelzinho",
              "vasão – sapatão – anelão",
              "vaso – sapato – anel",
              "vasos – sapatos – anéis"
            ],
            "answer": 0,
            "explain": "Os diminutivos são vasinho, sapatinho e anelzinho. Aqui você observa diretamente como cada palavra foi formada."
          },
          {
            "type": "mc",
            "q": "Na frase 'Venha cá, filhinha', o diminutivo expressa qual sentimento?",
            "options": [
              "Carinho",
              "Raiva",
              "Medo",
              "Desprezo"
            ],
            "answer": 0,
            "explain": "Nesse contexto, 'filhinha' expressa carinho. O diminutivo pode indicar um sentimento, e não apenas tamanho."
          },
          {
            "type": "text",
            "q": "Escreva o diminutivo da palavra 'rosa':",
            "answers": [
              "rosinha",
              "rosinha."
            ],
            "explain": "Rosa tem s na sílaba final, então usamos o sufixo -sinha: rosinha. Compare com bola (sem s), que vira bolinha."
          },
          {
            "type": "text",
            "q": "Escreva o diminutivo PLURAL da palavra 'pão' (dica: pão → pães → ...):",
            "answers": [
              "paezinhos",
              "pãezinhos",
              "paozinhos"
            ],
            "explain": "O passo a passo é: pão → plural pães → tira o -s: pãe → acrescenta -zinho + -s = pãezinhos. Primeiro o plural, depois o sufixo!"
          },
          {
            "type": "text",
            "q": "Na frase 'Você é um paizão!', o aumentativo expressa tamanho ou um sentimento de admiração?",
            "answers": [
              "admiracao",
              "sentimento",
              "sentimento de admiracao",
              "admiracao.",
              "um sentimento"
            ],
            "explain": "Expressa admiração. Além do tamanho, os graus do substantivo podem indicar sentimentos como carinho, desprezo e admiração."
          },
          {
            "type": "mc",
            "q": "Na frase 'Que grupinho mais egoísta', o diminutivo expressa:",
            "options": [
              "O tamanho pequeno do grupo",
              "Carinho pelo grupo",
              "Desprezo pelo grupo",
              "Admiração pelo grupo"
            ],
            "answer": 2,
            "explain": "O contexto — 'mais egoísta' — mostra que quem fala está criticando. O diminutivo aqui carrega desprezo, não informação sobre quantas pessoas há no grupo."
          },
          {
            "type": "text",
            "q": "Segundo o cartaz do Unicef, por quantos segundos, no mínimo, devemos esfregar todas as superfícies das mãos? (escreva o número)",
            "answers": [
              "20",
              "20 segundos",
              "vinte"
            ],
            "explain": "Pelo menos 20 segundos, esfregando o dorso, entre os dedos e sob as unhas. Uma dica do próprio cartaz: cante uma música para ajudar a contar o tempo."
          },
          {
            "type": "mc",
            "q": "Um trecho de manual de videogame ensina: '1. Faça 2 ou 3 rotações, depois toque em OK. Se a mensagem aparecer, volte ao primeiro passo.' Esse texto é instrucional porque:",
            "options": [
              "Tem rimas e ritmo",
              "Apresenta uma sequência de passos que ensina como fazer algo",
              "Conta uma história com personagens",
              "Expressa a opinião do autor"
            ],
            "answer": 1,
            "explain": "Ele traz comandos diretos e numerados que orientam o leitor a executar um procedimento — calibrar o botão. É exatamente a função do texto instrucional."
          }
        ]
      },
      {
        "id": "lp18",
        "module": 18,
        "title": "Lembranças de uma vida",
        "subtitle": "Conto de memórias · Adjetivo · Sufixo -oso/-osa",
        "video": "assets/videos/mod18-explorando-memorias.mp4",
        "theory": [
          {
            "h": "O conto de memórias",
            "p": [
              "Os <strong>contos de memórias</strong> narram recordações de acontecimentos da vida da <strong>pessoa que conta a história</strong>. Ou seja, quem narra viveu aquilo — está relatando fatos do <strong>passado</strong>, e não inventando uma história ou planejando o futuro.",
              "Esses contos podem abordar vários temas: infância, família, lugares significativos ou momentos importantes que deixaram uma impressão marcante na mente do narrador.",
              "Uma característica importante: eles <strong>não precisam estar em ordem cronológica</strong>, ou seja, na ordem exata em que os fatos aconteceram. O narrador pode ir e voltar no tempo conforme as lembranças surgem."
            ]
          },
          {
            "h": "\"Uma aula de música do meu avô\", de Arthur Nestrovski",
            "p": [
              "O narrador tinha uns <strong>sete ou oito anos</strong> e todo domingo almoçava na casa dos avós, o vô Maurício e a vó Luísa. Para ele, a casa era \"linda, enorme\" — e ele mesmo reconhece: <em>\"talvez nem fosse tão grande assim; mas para mim, naquela época, era. E a gente sempre vê as coisas de acordo com o nosso tamanho.\"</em>",
              "Quem comandava a música era o avô: escolhia um disco ou deixava o <strong>rádio</strong> ligado na estação de música clássica. Num desses domingos, o menino reconheceu a música que tocava: <em>\"As quatro estações\"</em>, de <strong>Vivaldi</strong>. O avô discordou: <em>\"É Bach\"</em>. E insistiu: <em>\"Não seja bobo, menino.\"</em>",
              "O menino estava <strong>orgulhoso</strong> de saber, mas também decepcionado por sentir que o avô não confiava na opinião dele. Quando a música acabou, o locutor anunciou: Vivaldi, \"As quatro estações\". O menino ficou com os olhos cheios de lágrimas — <em>\"estava contente por ter acertado, mas estava mais triste do que contente\"</em>.",
              "Então o avô fez algo que ele nunca esqueceu: atravessou a sala, olhou-o nos olhos e disse com a maior simplicidade: <strong>\"Desculpe. Você tinha razão. Eu quero lhe pedir desculpas.\"</strong> Para os outros, o vô Maurício era um homem muito importante e respeitado. Anos depois, o narrador conclui que o mais importante daquele domingo não foi Vivaldi, e sim <strong>descobrir que podia confiar na própria opinião</strong>."
            ]
          },
          {
            "h": "O adjetivo",
            "p": [
              "Os <strong>adjetivos</strong> são palavras que <strong>caracterizam o substantivo</strong>, indicando qualidade, defeito, origem ou estado.",
              "No trecho <em>\"moravam numa casa linda, enorme\"</em>, as palavras <strong>linda</strong> e <strong>enorme</strong> são adjetivos: caracterizam o substantivo <em>casa</em>.",
              "O adjetivo <strong>concorda</strong> com o substantivo que caracteriza em <strong>gênero</strong> (masculino e feminino) e em <strong>número</strong> (singular e plural). Por isso dizemos <em>o menino orgulhoso</em>, mas <em>a mãe orgulhosa</em>; <em>o jardim florido</em>, mas <em>as flores floridas</em>."
            ]
          },
          {
            "h": "Ortografia: o sufixo -oso / -osa",
            "p": [
              "Quando juntamos o sufixo <strong>-oso</strong> a um substantivo, formamos um <strong>adjetivo derivado</strong>. A forma feminina terá o sufixo <strong>-osa</strong>.",
              "Exemplo: com <em>esperança</em> → <strong>esperançoso / esperançosa</strong>. Com <em>orgulho</em> → <strong>orgulhoso / orgulhosa</strong>.",
              "Outros exemplos: criança com manha → criança <strong>manhosa</strong>; comida com sabor → comida <strong>saborosa</strong>; estampa com brilho → estampa <strong>brilhosa</strong>; animal com fúria → animal <strong>furioso</strong>; livro com fama → livro <strong>famoso</strong>."
            ]
          },
          {
            "h": "A linha do tempo",
            "p": [
              "A <strong>linha do tempo</strong> é uma representação simplificada de eventos em <strong>ordem cronológica</strong>, ou seja, na ordem em que os fatos aconteceram. Ela pode ser sobre uma pessoa, um grupo de pessoas, um lugar e outros temas.",
              "Repare na diferença: o conto de memórias <strong>não precisa</strong> seguir a ordem cronológica, mas a linha do tempo <strong>é organizada exatamente por ela</strong>."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Fábrica de adjetivos com -oso/-osa",
            "instructions": "Ligue cada expressão ao adjetivo derivado correspondente.",
            "pairs": [
              [
                "criança com manha",
                "criança manhosa"
              ],
              [
                "comida com sabor",
                "comida saborosa"
              ],
              [
                "estampa com brilho",
                "estampa brilhosa"
              ],
              [
                "animal com fúria",
                "animal furioso"
              ],
              [
                "livro com fama",
                "livro famoso"
              ],
              [
                "menino com orgulho",
                "menino orgulhoso"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Substantivo ou adjetivo?",
            "instructions": "Arraste cada palavra para a classe gramatical a que ela pertence.",
            "categories": [
              "Substantivo",
              "Adjetivo"
            ],
            "items": [
              {
                "text": "casa",
                "cat": 0
              },
              {
                "text": "enorme",
                "cat": 1
              },
              {
                "text": "avô",
                "cat": 0
              },
              {
                "text": "orgulhoso",
                "cat": 1
              },
              {
                "text": "música",
                "cat": 0
              },
              {
                "text": "amarelo",
                "cat": 1
              },
              {
                "text": "jardim",
                "cat": 0
              },
              {
                "text": "florido",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Na tirinha, o Menino Maluquinho diz: 'Vou escrever minhas memórias!'. Para escrever suas memórias, ele deverá:",
            "options": [
              "Inventar uma história sobre a família dele",
              "Planejar alguns eventos futuros com a família",
              "Relatar fatos do passado",
              "Contar diversos fatos em ordem cronológica"
            ],
            "answer": 2,
            "explain": "Contos de memórias relatam fatos do passado realmente vividos por quem narra — não são inventados nem planejam o futuro. E atenção: eles NÃO precisam seguir a ordem cronológica."
          },
          {
            "type": "mc",
            "q": "Na frase 'O guarda-chuva do Menino Maluquinho é amarelo', a classe gramatical da palavra destacada é:",
            "options": [
              "Artigo",
              "Adjetivo",
              "Substantivo",
              "Verbo"
            ],
            "answer": 1,
            "explain": "'Amarelo' caracteriza o substantivo guarda-chuva, indicando uma qualidade dele — sua cor. Palavras que caracterizam substantivos são adjetivos."
          },
          {
            "type": "mc",
            "q": "Qual adjetivo podemos usar para indicar que os personagens criados por Ziraldo têm fama?",
            "options": [
              "Familiares",
              "Famintos",
              "Famosos",
              "Famulentos"
            ],
            "answer": 2,
            "explain": "Fama + sufixo -oso = famosos. 'Famintos' vem de fome, 'familiares' vem de família — e 'famulentos' nem existe como adjetivo de fama."
          },
          {
            "type": "mc",
            "q": "O narrador lembra que, quando era pequeno, a sala parecia enorme. O que essa lembrança mostra?",
            "options": [
              "A maneira de perceber os lugares pode mudar com a idade",
              "A sala aumentava de tamanho todos os anos",
              "As crianças sempre enxergam tudo menor",
              "A casa do avô mudava de lugar"
            ],
            "answer": 0,
            "explain": "O narrador mostra que nossa maneira de perceber os lugares pode mudar conforme crescemos."
          },
          {
            "type": "text",
            "q": "Na expressão 'rádio antigo', qual palavra mostra uma característica do rádio?",
            "answers": [
              "antigo",
              "a palavra antigo"
            ],
            "explain": "A palavra 'antigo' caracteriza o rádio. Por isso, ela é um adjetivo."
          },
          {
            "type": "text",
            "q": "A frase 'Eu devia ter sete ou oito anos' apresenta uma lembrança do passado, do presente ou do futuro?",
            "answers": [
              "passado",
              "do passado",
              "uma lembranca do passado"
            ],
            "explain": "A frase conta algo que já aconteceu. Relatar fatos do passado é uma característica do conto de memórias."
          },
          {
            "type": "text",
            "q": "Forme o adjetivo derivado no FEMININO a partir do substantivo 'esperança':",
            "answers": [
              "esperancosa",
              "esperancosa."
            ],
            "explain": "Esperança + sufixo -osa = esperançosa. No masculino ficaria esperançoso. Lembre-se: o sufixo -oso/-osa transforma substantivos em adjetivos."
          },
          {
            "type": "text",
            "q": "Reescreva o final da frase substituindo o substantivo: 'O menino estava orgulhoso' → 'A mãe estava ______'.",
            "answers": [
              "orgulhosa",
              "orgulhosa.",
              "a mae estava orgulhosa"
            ],
            "explain": "O adjetivo concorda em gênero e número com o substantivo. Como 'mãe' é feminino, o adjetivo passa de orgulhoso para orgulhosa."
          },
          {
            "type": "mc",
            "q": "O avô percebeu que o menino tinha razão e pediu desculpas. Que atitude isso demonstra?",
            "options": [
              "Reconhecer o próprio erro",
              "Ignorar a opinião da criança",
              "Mudar de assunto",
              "Esconder o que aconteceu"
            ],
            "answer": 0,
            "explain": "Pedir desculpas mostra que o avô reconheceu o próprio erro e respeitou a opinião do menino."
          },
          {
            "type": "mc",
            "q": "O que diferencia uma linha do tempo de um conto de memórias?",
            "options": [
              "A linha do tempo é sempre sobre pessoas famosas",
              "A linha do tempo organiza os fatos por data",
              "O conto de memórias usa apenas imagens",
              "Os dois textos são iguais"
            ],
            "answer": 1,
            "explain": "A linha do tempo é definida pela ordem cronológica — a ordem exata em que os fatos aconteceram. Já o conto de memórias segue o fluxo das lembranças, podendo ir e voltar no tempo."
          }
        ]
      },
      {
        "id": "lp19",
        "module": 19,
        "title": "Voando alto",
        "subtitle": "Biografia · Adjetivo pátrio · Sufixos -ês/-esa",
        "video": "assets/videos/mod19-voando-alto.mp4",
        "theory": [
          {
            "h": "O gênero biografia",
            "p": [
              "A <strong>biografia</strong> é composta dos fatos mais marcantes que ocorreram na vida de uma pessoa, a começar pelo nascimento. Geralmente os fatos são apresentados na sequência em que ocorreram, ou seja, em <strong>ordem cronológica</strong>.",
              "O texto da biografia é escrito em <strong>3ª pessoa</strong> — quem escreve fala sobre outra pessoa (<em>\"ele nasceu\", \"ela mudou-se\"</em>). Quando alguém escreve sobre a <strong>própria vida</strong>, em 1ª pessoa (<em>\"eu nasci\", \"tenho boas lembranças\"</em>), chamamos esse texto de <strong>autobiografia</strong>.",
              "As informações de uma biografia são <strong>verdadeiras e reais</strong>, sobre fatos que já aconteceram — não são inventadas nem fictícias. Quem escreve biografias é o <strong>biógrafo</strong>."
            ]
          },
          {
            "h": "Quem foi Alberto Santos Dumont",
            "p": [
              "O inventor nasceu na fazenda de seus pais, onde hoje é a cidade de Santos Dumont, em <strong>Minas Gerais</strong>, em <strong>20 de julho de 1873</strong>. Desde a infância gostava de Matemática e de aprender sobre as máquinas da propriedade da família. Percebendo o gosto do filho, o pai o incentivou a estudar Física, Química, Mecânica e Eletricidade.",
              "Em <strong>1892</strong> mudou-se para a França para concluir os estudos. Seis anos depois fez seu primeiro voo em um balão alugado. Em <strong>20 de setembro de 1898</strong> construiu um balão que voava mais rápido e podia ser controlado: o invento ganhou o nome de <strong>dirigível</strong>.",
              "Com o passar dos anos criou mais balões e aeroplanos (tipo de avião) e venceu competições de voos, faturando vários prêmios. O <strong>feito</strong> (proeza, ação heroica) com o <strong>14-Bis</strong> rendeu-lhe a <strong>Taça Archdeacon</strong>, na França.",
              "Realizou o último voo em <strong>18 de setembro de 1909</strong>. Em <strong>1910</strong> fechou sua oficina por problemas de saúde e, em <strong>1915</strong>, retornou ao Brasil. No mesmo ano participou de um <strong>congresso</strong> (reunião em que cientistas e estudiosos apresentam suas descobertas) defendendo o uso do avião como forma de facilitar o relacionamento entre os países.",
              "Quando descobriu que sua invenção estava sendo usada na <strong>guerra</strong>, Santos Dumont ficou triste. Em janeiro de <strong>1926</strong> procurou a <strong>Liga das Nações</strong> (organização internacional que existiu entre 1919 e 1946) para impedir esse tipo de uso, mas o apelo não funcionou. Foi quando sua saúde piorou. Ele morreu aos <strong>59 anos, em 1932</strong>."
            ]
          },
          {
            "h": "O adjetivo pátrio",
            "p": [
              "Os <strong>adjetivos pátrios</strong> indicam o <strong>local de origem</strong> de alguém ou algo. Eles não indicam quantidade nem posição — apenas de onde a pessoa ou coisa vem. Podem se referir ao país, ao estado ou ao município.",
              "Exemplos: quem nasce na Grécia é <strong>grego</strong> (país); quem nasce em Goiás é <strong>goiano</strong> (estado); quem nasce em Salvador é <strong>soteropolitano</strong> ou <strong>salvadorense</strong> (município).",
              "Adjetivos pátrios dos estados brasileiros: Amazonas → <strong>amazonense</strong>; Minas Gerais → <strong>mineiro</strong>; São Paulo → <strong>paulista</strong>; Santa Catarina → <strong>catarinense</strong> ou <em>barriga-verde</em>; Pernambuco → <strong>pernambucano</strong>; Mato Grosso → <strong>mato-grossense</strong>; Amapá → <strong>amapaense</strong>; Ceará → <strong>cearense</strong>; Bahia → <strong>baiano</strong>; Pará → <strong>paraense</strong>; Rio Grande do Sul → <strong>gaúcho</strong>."
            ]
          },
          {
            "h": "Ortografia: os sufixos -ês e -esa",
            "p": [
              "Alguns adjetivos pátrios são formados com o acréscimo dos sufixos <strong>-ês</strong> ou <strong>-esa</strong>, que indicam \"originário de determinado lugar ou referente a ele\". Observe: referente a Portugal → menino <strong>português</strong> / língua <strong>portuguesa</strong>.",
              "Outros exemplos: Holanda → <strong>holandês / holandesa</strong>; Japão → <strong>japonês / japonesa</strong>; China → <strong>chinês / chinesa</strong>; Escócia → <strong>escocês / escocesa</strong>; Noruega → <strong>norueguês / norueguesa</strong>; Dinamarca → <strong>dinamarquês / dinamarquesa</strong>; França → <strong>francês / francesa</strong>; Inglaterra → <strong>inglês / inglesa</strong>.",
              "O par -ês/-esa também aparece em palavras que não são adjetivos pátrios: <em>marquês/marquesa</em>, <em>freguês/freguesa</em>, <em>camponês/camponesa</em>, <em>burguês/burguesa</em>.",
              "<strong>Atenção!</strong> Alguns títulos de nobreza também são escritos com <strong>-esa</strong>, como <em>princesa</em>, <em>duquesa</em> e <em>baronesa</em>."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "De onde vem?",
            "instructions": "Ligue cada lugar ao seu adjetivo pátrio.",
            "pairs": [
              [
                "Minas Gerais",
                "mineiro"
              ],
              [
                "Amazonas",
                "amazonense"
              ],
              [
                "São Paulo",
                "paulista"
              ],
              [
                "Rio Grande do Sul",
                "gaúcho"
              ],
              [
                "Portugal",
                "português"
              ],
              [
                "Japão",
                "japonês"
              ],
              [
                "Grécia",
                "grego"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Biografia ou autobiografia?",
            "instructions": "Arraste cada trecho para o gênero correspondente.",
            "categories": [
              "Biografia (3ª pessoa)",
              "Autobiografia (1ª pessoa)"
            ],
            "items": [
              {
                "text": "\"Eva Furnari nasceu em Roma, na Itália, em 1948.\"",
                "cat": 0
              },
              {
                "text": "\"Tenho boas lembranças da minha mãe nessa época.\"",
                "cat": 1
              },
              {
                "text": "\"O inventor nasceu na fazenda de seus pais.\"",
                "cat": 0
              },
              {
                "text": "\"Eu devia ter uns sete ou oito anos.\"",
                "cat": 1
              },
              {
                "text": "\"Ele morreu aos 59 anos, em 1932.\"",
                "cat": 0
              },
              {
                "text": "\"Desde criança eu gostava de desenhar.\"",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Leia a piada: '— O idioma francês é o mais interessante e útil. — Qual nada! Acho que é o idioma inglês. (...)'. Marque a alternativa correta.",
            "options": [
              "No texto não há nenhum adjetivo pátrio",
              "Há somente um adjetivo pátrio no texto",
              "Aparecem dois adjetivos pátrios no texto",
              "No texto há três adjetivos pátrios"
            ],
            "answer": 2,
            "explain": "São dois: 'francês' (referente à França) e 'inglês' (referente à Inglaterra). Ambos indicam origem, por isso são adjetivos pátrios."
          },
          {
            "type": "mc",
            "q": "Quem nasce no estado do Amazonas é:",
            "options": [
              "Amaziano",
              "Amazinense",
              "Amazionense",
              "Amazonense"
            ],
            "answer": 3,
            "explain": "O adjetivo pátrio é amazonense: Amazonas + o sufixo -ense. As outras três formas não existem na língua portuguesa."
          },
          {
            "type": "mc",
            "q": "Uma biografia é um gênero textual que:",
            "options": [
              "Conta histórias em forma de quadrinhos com humor",
              "Mostra como algo deve ser feito por meio de instruções precisas",
              "Conta os fatos mais marcantes que ocorrem na vida de uma pessoa",
              "Divulga a venda de produtos ou serviços"
            ],
            "answer": 2,
            "explain": "A alternativa B descreve o texto instrucional e a D, o anúncio publicitário. A biografia narra os fatos marcantes da vida de alguém, geralmente em ordem cronológica."
          },
          {
            "type": "mc",
            "q": "Leia: 1898 — dirigível; 1906 — voo do 14-Bis; 1926 — campanha pela paz. Qual fato aconteceu primeiro?",
            "options": [
              "A construção do dirigível",
              "O voo do 14-Bis",
              "A campanha pela paz",
              "Os três aconteceram juntos"
            ],
            "answer": 0,
            "explain": "A construção do dirigível aconteceu em 1898, antes dos fatos de 1906 e 1926. A linha do tempo ajuda a comparar a ordem dos acontecimentos."
          },
          {
            "type": "text",
            "q": "Como se chama a biografia quando a pessoa escreve sobre a própria vida, em 1ª pessoa?",
            "answers": [
              "autobiografia",
              "a autobiografia",
              "autobiografia."
            ],
            "explain": "É a autobiografia. A diferença está em quem narra: na biografia, alguém escreve sobre outra pessoa (3ª pessoa); na autobiografia, sobre si mesmo (1ª pessoa)."
          },
          {
            "type": "text",
            "q": "Complete: 'A pintora Frida Kahlo nasceu no México. Ela era ______.'",
            "answers": [
              "mexicana",
              "mexicana."
            ],
            "explain": "O adjetivo pátrio de México é mexicano/mexicana. Como Frida Kahlo é uma mulher, usamos a forma feminina: mexicana."
          },
          {
            "type": "text",
            "q": "Escreva o adjetivo pátrio FEMININO referente à China:",
            "answers": [
              "chinesa",
              "chinesa."
            ],
            "explain": "China + sufixo -esa = chinesa. No masculino seria chinês, com o sufixo -ês."
          },
          {
            "type": "text",
            "q": "Leia: '1898 — construiu um dirigível; 1906 — voou com o 14-Bis.' O que Santos Dumont construiu primeiro?",
            "answers": [
              "dirigivel",
              "um dirigivel",
              "o dirigivel",
              "balao dirigivel",
              "um balao dirigivel"
            ],
            "explain": "Ele construiu um dirigível. A informação está na primeira data da linha do tempo."
          },
          {
            "type": "mc",
            "q": "Santos Dumont desejava que suas invenções fossem usadas em guerras?",
            "options": [
              "Sim, ele criou o avião para as guerras",
              "Não, ele tentou impedir esse uso",
              "Ele nunca soube das guerras",
              "Sim, esse era seu principal objetivo"
            ],
            "answer": 1,
            "explain": "Ele defendia o avião como forma de aproximar os países. Ao descobrir o uso militar, ficou triste e em 1926 apelou à Liga das Nações — sem sucesso, o que agravou sua saúde."
          },
          {
            "type": "mc",
            "q": "Na frase 'A comida japonesa é apreciada no mundo todo', a que substantivo o adjetivo pátrio se refere?",
            "options": [
              "mundo",
              "comida",
              "todo",
              "Japão"
            ],
            "answer": 1,
            "explain": "'Japonesa' caracteriza o substantivo 'comida', indicando sua origem. Repare na concordância: comida é feminino, por isso o adjetivo também vai para o feminino."
          }
        ]
      },
      {
        "id": "lp20",
        "module": 20,
        "title": "Uma doce dança",
        "subtitle": "Anúncio classificado · Adjetivo no plural · Letras S e Z no fim da palavra",
        "video": "assets/videos/mod20-anuncios-e-plural.mp4",
        "theory": [
          {
            "h": "O anúncio classificado",
            "p": [
              "O <strong>anúncio classificado</strong> é um gênero textual <strong>curto</strong> em que é divulgada a venda, a troca ou o aluguel de produtos ou, ainda, o oferecimento e a contratação de serviços. Pode ser encontrado em jornais, revistas, <em>sites</em> e outros meios de comunicação.",
              "O anúncio classificado costuma expor seu objetivo de modo <strong>mais direto</strong> do que o anúncio publicitário. Algumas informações que não podem faltar: <strong>o que é negociado</strong> e <strong>como os interessados podem entrar em contato</strong> com o anunciante.",
              "Um anúncio classificado é composto de: título, descrição do produto ou serviço, preço e contato. A <strong>imagem</strong> torna o anúncio mais atrativo e completo, pois permite ver o estado real do produto."
            ]
          },
          {
            "h": "Exemplo: aulas de tango argentino",
            "p": [
              "Um classificado anuncia: <em>\"AULAS DE TANGO ARGENTINO — Com professores experientes para adultos e crianças. Escola Internacional de Tango Argentino. Contato pelo e-mail aulas@escoladetangoargentino.com.br\"</em>.",
              "Analisando esse anúncio: o <strong>serviço anunciado</strong> são aulas de tango; o <strong>anunciante</strong> é a Escola Internacional de Tango Argentino; e o <strong>objetivo</strong> é conseguir alunos, ou seja, divulgar a contratação de um serviço.",
              "Dizer que os professores são <strong>experientes para adultos e crianças</strong> produz um efeito de <strong>confiança</strong>: convence o leitor de que a escola sabe ensinar pessoas de todas as idades. O tango, aliás, nasceu na Argentina — a Praça de Maio, em Buenos Aires, fica no país de origem dessa dança."
            ]
          },
          {
            "h": "Adjetivo: singular e plural",
            "p": [
              "Quando o substantivo está no <strong>singular</strong>, o adjetivo também fica no singular. Quando o substantivo está no <strong>plural</strong>, o adjetivo também fica no plural. Isso se chama <strong>concordância</strong>.",
              "Exemplos: <em>A <strong>dança</strong> é <strong>envolvente</strong></em> / <em>As <strong>danças</strong> são <strong>envolventes</strong></em>. <em>Comprarei um vaso para a <strong>flor colorida</strong></em> / <em>...para as <strong>flores coloridas</strong></em>.",
              "Cuidado ao escolher o adjetivo em uma frase: em <em>\"Encontrei no site anúncios ______ para aluguel de casas\"</em>, o substantivo <em>anúncios</em> é masculino e plural — então só cabe um adjetivo masculino plural, como <strong>maravilhosos</strong>. Não caberiam <em>sensacional</em> nem <em>incrível</em> (singular), nem <em>boas</em> (feminino)."
            ]
          },
          {
            "h": "Ortografia: as letras S e Z no fim da palavra",
            "p": [
              "O <strong>plural</strong> pode ser representado, entre outras formas, com a letra <strong>s</strong> no final das palavras, mas <strong>nunca com o acréscimo da letra z</strong>. Exemplos: <em>lobo → lobos</em>; <em>chapéu → chapéus</em>.",
              "Quando uma palavra no singular <strong>termina com z</strong>, o plural é feito com o acréscimo da terminação <strong>-es</strong>. Exemplos: <em>cartaz → cartazes</em>; <em>perdiz → perdizes</em>; <em>arroz → arrozes</em>; <em>capaz → capazes</em>.",
              "Palavras que terminam em <strong>z</strong>: feliz, giz, xadrez, lápis? Não! Preste atenção: <em>feli<strong>z</strong></em>, <em>rapa<strong>z</strong></em>, <em>xadre<strong>z</strong></em>, <em>cicatri<strong>z</strong></em>, <em>capa<strong>z</strong></em>, <em>arro<strong>z</strong></em>. Já com <strong>s</strong>: <em>burguê<strong>s</strong></em>, <em>siamê<strong>s</strong></em>, <em>ônibu<strong>s</strong></em>, <em>lápi<strong>s</strong></em>, <em>pire<strong>s</strong></em>, <em>avó<strong>s</strong></em>.",
              "<strong>Dica do dicionário:</strong> nos dicionários, os verbetes (as palavras que procuramos) aparecem sempre no <strong>singular</strong>. Para ter certeza de que uma palavra termina com s ou com z, procure sempre no dicionário. Se ela estiver lá com z, é com z que se escreve!"
            ]
          },
          {
            "h": "Cantinho de leitura: \"Procura-se Lobo\"",
            "p": [
              "No livro <strong>\"Procura-se Lobo\"</strong>, de Ana Maria Machado, Manuel estava procurando emprego. Abriu o jornal e viu um anúncio classificado pedindo um \"Lobo, adulto, de boa aparência, com experiência comprovada, para trabalho de responsabilidade\".",
              "A empresa queria um lobo <strong>bicho</strong> mesmo — daqueles peludos, de quatro patas — para um documentário. Mas Manuel era <strong>Lobo</strong> de sobrenome, como quem tem Coelho, Raposo ou Leitão. Achou que valia a pena arriscar e respondeu.",
              "Deu certo por outro lado: como muitos lobos responderam ao anúncio, a empresa criou um emprego novo — <strong>respondedor de cartas de lobos</strong> — e contratou Manuel, porque ele escrevia muito bem e adorava ler. O mal-entendido aconteceu porque o texto do anúncio <strong>não estava claro</strong>. É por isso que um bom classificado precisa dizer exatamente o que está sendo procurado!"
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Termina com S ou com Z?",
            "instructions": "Arraste cada palavra para a letra com que ela termina.",
            "categories": [
              "Termina com S",
              "Termina com Z"
            ],
            "items": [
              {
                "text": "feli__",
                "cat": 1
              },
              {
                "text": "burguê__",
                "cat": 0
              },
              {
                "text": "rapa__",
                "cat": 1
              },
              {
                "text": "ônibu__",
                "cat": 0
              },
              {
                "text": "xadre__",
                "cat": 1
              },
              {
                "text": "lápi__",
                "cat": 0
              },
              {
                "text": "cicatri__",
                "cat": 1
              },
              {
                "text": "pire__",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Do singular ao plural",
            "instructions": "Ligue cada palavra ao seu plural correto.",
            "pairs": [
              [
                "cartaz",
                "cartazes"
              ],
              [
                "perdiz",
                "perdizes"
              ],
              [
                "o bocão capaz",
                "os bocões capazes"
              ],
              [
                "chapéu",
                "chapéus"
              ],
              [
                "a dança envolvente",
                "as danças envolventes"
              ],
              [
                "a flor colorida",
                "as flores coloridas"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Sobre os anúncios classificados é correto afirmar que são textos:",
            "options": [
              "Longos e sem imagens, que servem para informar o leitor sobre determinado assunto",
              "Explicativos sobre o funcionamento de aparelhos eletrônicos",
              "Curtos, encontrados em meios de comunicação nas seções de aluguel, venda, troca ou busca",
              "Curtos, em que o anunciante escreve a própria opinião sobre o produto"
            ],
            "answer": 2,
            "explain": "O classificado é curto e direto, sempre ligado a uma negociação: venda, troca, aluguel ou busca. Ele não traz a opinião do anunciante nem explica funcionamento de aparelhos — isso seria um manual."
          },
          {
            "type": "mc",
            "q": "Leia: 'Encontrei no site anúncios ★ para aluguel de casas no centro da cidade.' Que adjetivo pode substituir o símbolo ★ mantendo a concordância?",
            "options": [
              "Maravilhosos",
              "Sensacional",
              "Incrível",
              "Boas"
            ],
            "answer": 0,
            "explain": "O substantivo 'anúncios' é masculino e plural, então o adjetivo precisa ser masculino e plural: maravilhosos. 'Sensacional' e 'incrível' estão no singular, e 'boas' é feminino."
          },
          {
            "type": "mc",
            "q": "Assinale a alternativa em que há um exemplo de anúncio classificado.",
            "options": [
              "Uma página de jornal com a manchete 'Cidade recebe campeonato de dança'",
              "Um cartaz com 'VENDEM-SE Sapatilhas de balé — Falar com Liza (00) 00000-0000'",
              "Uma folha de calendário marcando 14 de fevereiro de 2023",
              "Uma tirinha em quadrinhos com um personagem refletindo"
            ],
            "answer": 1,
            "explain": "O anúncio informa o produto, a finalidade da negociação e uma forma de contato. Esses elementos ajudam o interessado a compreender e responder."
          },
          {
            "type": "mc",
            "q": "O anúncio dizia apenas 'Procura-se Lobo'. Por que Manuel Lobo pensou que poderia se candidatar?",
            "options": [
              "Porque ele era um lobo de verdade",
              "Porque Lobo era seu sobrenome",
              "Porque queria participar de um filme",
              "Porque o anúncio pedia um leitor"
            ],
            "answer": 1,
            "explain": "Como o anúncio não explicou que procurava o animal, Manuel pensou que 'Lobo' poderia ser o sobrenome do candidato."
          },
          {
            "type": "text",
            "q": "Escreva o plural da palavra 'cartaz':",
            "answers": [
              "cartazes",
              "cartazes."
            ],
            "explain": "Quando a palavra no singular termina com z, o plural é feito com o acréscimo de -es: cartaz → cartazes. Nunca acrescentamos a letra z para formar plural!"
          },
          {
            "type": "text",
            "q": "Complete com S ou Z: 'burguê__'",
            "answers": [
              "s",
              "burgues",
              "burgues.",
              "com s"
            ],
            "explain": "Burguês termina com S — vem do mesmo grupo de português, siamês e freguês. Na dúvida, procure no dicionário: os verbetes aparecem sempre no singular."
          },
          {
            "type": "text",
            "q": "Reescreva no plural: 'A dança é envolvente' → 'As danças são ______.'",
            "answers": [
              "envolventes",
              "envolventes.",
              "as dancas sao envolventes"
            ],
            "explain": "O adjetivo concorda com o substantivo. Como 'danças' está no plural, o adjetivo 'envolvente' também vai para o plural: envolventes."
          },
          {
            "type": "text",
            "q": "Que informação NÃO pode faltar em um anúncio classificado, além de dizer o que está sendo negociado?",
            "answers": [
              "contato",
              "o contato",
              "forma de contato",
              "como entrar em contato",
              "telefone",
              "o contato do anunciante"
            ],
            "explain": "É o contato do anunciante. Sem ele, o leitor interessado não tem como fechar o negócio — e o anúncio perde totalmente a função."
          },
          {
            "type": "mc",
            "q": "Por que colocar uma imagem em um anúncio classificado?",
            "options": [
              "Para deixar o texto mais longo",
              "Porque a lei exige imagem em todo anúncio",
              "Porque torna o anúncio mais atrativo e permite ver o estado real do produto",
              "Para substituir o preço"
            ],
            "answer": 2,
            "explain": "A imagem chama a atenção e mostra o produto como ele realmente é. Mesmo assim, ela não substitui as informações escritas: descrição, preço e contato continuam necessários."
          }
        ]
      },
      {
        "id": "lp21",
        "module": 21,
        "title": "Vencer o medo",
        "subtitle": "História em quadrinhos · Pronomes pessoais (caso reto e oblíquo)",
        "video": "assets/videos/mod21-quadrinhos-e-pronomes.mp4",
        "theory": [
          {
            "h": "A história em quadrinhos (HQ)",
            "p": [
              "As <strong>histórias em quadrinhos</strong> são narrativas organizadas em <strong>quadros sequenciais</strong> que utilizam a linguagem <strong>verbal</strong> (os textos) e a <strong>não verbal</strong> (as imagens).",
              "É comum o uso <strong>informal</strong> da língua para aproximar os diálogos da realidade — por isso os personagens falam como as pessoas falam de verdade. As falas são representadas dentro de <strong>balões</strong>.",
              "As pessoas leem HQs principalmente para se <strong>divertir e entreter</strong>. Toda HQ precisa ter título, começo, meio e fim.",
              "Curiosidade: a primeira história em quadrinhos moderna foi criada pelo artista americano <strong>Richard Outcault, em 1895</strong>, nos jornais de Nova York, com o personagem <em>Yellow Kid</em> (\"Menino Amarelo\"). Mas se buscarmos as primeiras raízes das HQs, podemos chegar até as <strong>pinturas rupestres</strong> feitas pelos homens pré-históricos, que contavam, por exemplo, como eram suas caçadas."
            ]
          },
          {
            "h": "Os tipos de balão",
            "p": [
              "Os balões deixam o texto mais interessante e detalhado, e ajudam a compreender o que está acontecendo na história. Cada formato tem um significado:",
              "<strong>Balão de fala:</strong> contorno normal, arredondado — o personagem está falando.",
              "<strong>Balão de pensamento:</strong> formato de nuvem, com bolinhas em vez de rabicho — o personagem está pensando.",
              "<strong>Balão de grito:</strong> contorno em formato de estrela ou explosão — o personagem está gritando.",
              "<strong>Balão de cochicho:</strong> contorno pontilhado ou tracejado — o personagem está falando baixinho, contando um segredo.",
              "<strong>Balão de voz eletrônica:</strong> contorno em ziguezague ou serrilhado — a voz vem de um aparelho.",
              "<strong>Balão de fala de muitas pessoas:</strong> um balão com vários rabichos — várias pessoas falam ao mesmo tempo.",
              "O <strong>balão tremido</strong> (com linhas onduladas) mostra que o personagem está com medo ou nervoso: é como se a voz dele estivesse tremendo."
            ]
          },
          {
            "h": "\"Enfrentando o medinho\", com Mônica e Marina",
            "p": [
              "Na HQ, Mônica conta a Marina que <strong>morria de medo de altura</strong> e explica como venceu esse medo: <em>\"Fui me acostumando a perder o medo devagarzinho!\"</em>.",
              "O caminho dela foi por etapas: primeiro subia em <strong>pedras</strong>; depois em <strong>banquinhos</strong>; em seguida uns <strong>degrauzinhos na escada do papai</strong>; e, na casa da avó, foi treinando <strong>olhar pela janela</strong>. <em>\"É só ir treinando! Se acostumando! E enfrentando o medinho!\"</em> — tudo aos pouquinhos, sem pressa.",
              "Quando Mônica pergunta do que Marina tem medo, ela hesita (\"Eu? Bem... er...\") e revela: <strong>cachorros</strong>. E confessa: <em>\"Quando vejo um, fico com as pernas bambas e não paro de tremer!\"</em> — o balão dessa fala aparece <strong>tremido</strong>, mostrando o nervosismo dela.",
              "Mônica sugere o mesmo método: <em>\"Vai se acostumando aos pouquinhos!\"</em>. No último quadrinho, Marina está rodeada de <strong>vários cachorros de uma vez</strong> e diz: <em>\"Pensando bem, Mônica... acho que não vai funcionar!\"</em> — porque começar com muitos cães ao mesmo tempo é o oposto de ir aos pouquinhos!"
            ]
          },
          {
            "h": "Pronomes pessoais do caso reto",
            "p": [
              "Os <strong>pronomes pessoais</strong> podem ser usados para <strong>substituir os substantivos</strong>, evitando repetições nos textos.",
              "Eles também indicam a <strong>pessoa que fala</strong> (1ª pessoa), a <strong>pessoa com quem se fala</strong> (2ª pessoa) e a <strong>pessoa de quem se fala</strong> (3ª pessoa).",
              "Os pronomes pessoais do <strong>caso reto</strong> são: <strong>eu, tu, ele, ela, nós, vós, eles, elas</strong>.",
              "Exemplos de substituição: <em>\"Eu e meu irmão temos medo do escuro\"</em> → <em>\"<strong>Nós</strong> temos medo do escuro\"</em>. <em>\"O menino e sua amiga enfrentaram a situação com coragem\"</em> → <em>\"<strong>Eles</strong> enfrentaram a situação com coragem\"</em>. <em>\"Cascão e a mãe conversaram\"</em> → <em>\"<strong>Eles</strong> conversaram\"</em>."
            ]
          },
          {
            "h": "Pronomes pessoais do caso oblíquo",
            "p": [
              "Os pronomes pessoais do <strong>caso oblíquo</strong> são: <strong>me, mim, comigo, te, ti, contigo, lhe(s), o(s), a(s), se, si, consigo, nos e conosco</strong>.",
              "Exemplos de uso: <em>\"Vou <strong>contigo</strong> para tua proteção\"</em>; <em>\"Não <strong>me</strong> sinto confortável quando estou com medo\"</em>; <em>\"Para <strong>mim</strong>, insetos são assustadores\"</em>; <em>\"Venha <strong>conosco</strong> ouvir histórias de arrepiar!\"</em>.",
              "Como diferenciar? Compare: <em>\"<strong>Eu</strong> entendi a explicação\"</em> e <em>\"<strong>Ele</strong> completou o percurso\"</em> usam pronomes do caso reto (praticam a ação). Já <em>\"Vou <strong>te</strong> esperar aqui\"</em> e <em>\"Conto <strong>contigo</strong> para realizar a tarefa\"</em> usam pronomes do caso oblíquo.",
              "<strong>Atenção!</strong> Na fala, é comum usar a expressão <strong>a gente</strong> no lugar do pronome <strong>nós</strong>. Nesses casos, a concordância é feita no <strong>singular</strong>: dizemos <em>\"<strong>Nós gostamos</strong> de ouvir histórias\"</em>, mas <em>\"<strong>A gente gosta</strong> de ouvir histórias\"</em>."
            ]
          },
          {
            "h": "Formas saudáveis de lidar com o medo",
            "p": [
              "Todos nós somos cheios de emoções: medo, alegria, tristeza, tédio... Os sentimentos nos ajudam a entender o que há ao nosso redor, <strong>nos protegem de situações de perigo</strong> ou nos preparam para novas situações.",
              "Formas saudáveis de lidar com o medo: buscar uma <strong>técnica de relaxamento</strong>; <strong>conversar com um adulto</strong> sobre o medo; e <strong>ler histórias</strong> com personagens em situações parecidas com as que nos dão medo. O que <strong>não</strong> ajuda é fingir que não se tem medo nenhum.",
              "O humor também é uma forma de enfrentar medos. O quadro <strong>\"O grito\"</strong>, de Edvard Munch (1863-1944), retrata uma figura em desespero. Mauricio de Sousa fez uma <strong>releitura</strong> bem-humorada dele em <strong>\"O berro\"</strong> (2008), transformando a cena assustadora em algo engraçado."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Que balão usar?",
            "instructions": "Ligue cada situação ao tipo de balão adequado.",
            "pairs": [
              [
                "\"Oi, Carolina!\" acenando de longe",
                "Balão de fala"
              ],
              [
                "\"O plural de cartaz é...\" estudando sozinho",
                "Balão de pensamento"
              ],
              [
                "\"Fernandooooo!\" chamando de longe",
                "Balão de grito"
              ],
              [
                "\"Vou contar um segredo\" no ouvido",
                "Balão de cochicho"
              ],
              [
                "\"Você passou de fase!\" saindo do celular",
                "Balão de voz eletrônica"
              ],
              [
                "\"Quatro.\" a turma responde junto",
                "Balão de fala de muitas pessoas"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Caso reto ou caso oblíquo?",
            "instructions": "Arraste cada pronome pessoal para o grupo a que pertence.",
            "categories": [
              "Caso reto",
              "Caso oblíquo"
            ],
            "items": [
              {
                "text": "eu",
                "cat": 0
              },
              {
                "text": "mim",
                "cat": 1
              },
              {
                "text": "nós",
                "cat": 0
              },
              {
                "text": "conosco",
                "cat": 1
              },
              {
                "text": "ela",
                "cat": 0
              },
              {
                "text": "te",
                "cat": 1
              },
              {
                "text": "eles",
                "cat": 0
              },
              {
                "text": "contigo",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Cascão evita água. Para entrar em casa, teria de lavar os pés. Por que ele decide dormir do lado de fora?",
            "options": [
              "Não queria incomodar a mãe",
              "Não gostaria de lavar os pés",
              "Gosta de dormir do lado de fora",
              "Estava uma noite quente"
            ],
            "answer": 1,
            "explain": "A piada depende de conhecer o personagem: Cascão foge de água. Entrar em casa significaria lavar os pés, então ele preferiu passar a noite na calçada."
          },
          {
            "type": "mc",
            "q": "Na tira, Cascão dorme e no balão aparece apenas a letra 'Z'. Esse balão indica:",
            "options": [
              "Um pensamento",
              "Uma dúvida",
              "Uma ideia",
              "Um som"
            ],
            "answer": 3,
            "explain": "O 'Z' representa o som do ronco de quem está dormindo. Nas HQs, os balões também servem para registrar sons, não só falas e pensamentos."
          },
          {
            "type": "mc",
            "q": "Na frase 'Cascão e a mãe conversaram', as palavras sublinhadas podem ser substituídas por qual pronome?",
            "options": [
              "Eles",
              "Elas",
              "Nós",
              "Vós"
            ],
            "answer": 0,
            "explain": "São duas pessoas de quem se fala (3ª pessoa do plural). Como um deles é do gênero masculino, usamos 'eles' — a forma masculina prevalece em português."
          },
          {
            "type": "mc",
            "q": "Na frase 'Eu adoro ler as histórias em quadrinhos porque são cheias de aventura', o pronome 'eu' indica:",
            "options": [
              "A pessoa com quem se fala",
              "A pessoa de quem se fala",
              "A pessoa que fala",
              "Depende da frase"
            ],
            "answer": 2,
            "explain": "'Eu' é a 1ª pessoa: quem está falando. A 2ª pessoa (tu, vós) é a pessoa com quem se fala, e a 3ª (ele, ela, eles, elas) é a pessoa de quem se fala."
          },
          {
            "type": "text",
            "q": "Mônica começou por pedras baixas, depois subiu em bancos e degraus. Ela enfrentou o medo de uma vez ou aos poucos?",
            "answers": [
              "pouquinhos",
              "poucos",
              "aos pouquinhos",
              "pouquinhos.",
              "devagarzinho",
              "aos poucos"
            ],
            "explain": "Ela foi aos pouquinhos: primeiro pedras, depois banquinhos, depois degraus da escada e, por fim, olhar pela janela da casa da avó. Treinando e se acostumando, sem pressa."
          },
          {
            "type": "text",
            "q": "Marina fica com as pernas bambas e o balão de fala aparece tremido. Que sentimento esses sinais mostram?",
            "answers": [
              "medo",
              "o medo",
              "nervosismo",
              "nervosa",
              "que ela esta com medo"
            ],
            "explain": "As pernas bambas e o balão tremido mostram medo ou nervosismo. Nos quadrinhos, palavras e desenhos trabalham juntos."
          },
          {
            "type": "text",
            "q": "Substitua pelo pronome do caso reto: 'Eu e meu irmão temos medo do escuro' → '______ temos medo do escuro.'",
            "answers": [
              "nos",
              "nós",
              "nos.",
              "nos temos medo do escuro"
            ],
            "explain": "'Eu e meu irmão' equivale à 1ª pessoa do plural: nós. Note que o verbo 'temos' já está concordando com nós."
          },
          {
            "type": "text",
            "q": "Complete com o pronome oblíquo adequado: 'Venha ______ ouvir histórias de arrepiar!' (dica: significa 'com a gente')",
            "answers": [
              "conosco",
              "conosco!",
              "conosco."
            ],
            "explain": "É 'conosco', que significa 'com nós'. Ele faz parte dos pronomes pessoais do caso oblíquo, junto com me, mim, comigo, te, ti, contigo e outros."
          },
          {
            "type": "mc",
            "q": "Qual atitude pode ajudar uma criança a lidar com o medo?",
            "options": [
              "Conversar com um adulto de confiança",
              "Esconder o medo de todas as pessoas",
              "Enfrentar uma situação perigosa sem ajuda",
              "Zombar de quem sente medo"
            ],
            "answer": 0,
            "explain": "Conversar com um adulto de confiança ajuda a compreender o medo e encontrar uma maneira segura de enfrentá-lo."
          },
          {
            "type": "mc",
            "q": "Quando usamos a expressão 'a gente' no lugar de 'nós', como fica a concordância do verbo?",
            "options": [
              "No plural: 'a gente gostamos'",
              "No singular: 'a gente gosta'",
              "Tanto faz",
              "O verbo desaparece"
            ],
            "answer": 1,
            "explain": "Com 'a gente', a concordância é no singular: 'a gente gosta'. Com 'nós', vai para o plural: 'nós gostamos'. Trocar o pronome exige ajustar o verbo!"
          }
        ]
      },
      {
        "id": "lp22",
        "module": 22,
        "title": "Contando e recontando",
        "subtitle": "Conto popular · Pronomes de tratamento · Pessoas do discurso",
        "video": "assets/videos/mod22-contando-e-recontando.mp4",
        "theory": [
          {
            "h": "O conto popular",
            "p": [
              "Os <strong>contos populares</strong> são transmitidos <strong>oralmente, de geração em geração</strong>, mesmo que tenham recebido um registro escrito. Junto com as adivinhas, fazem parte da <strong>tradição oral</strong>.",
              "Em geral, são <strong>textos curtos</strong>, com <strong>poucos acontecimentos</strong>, <strong>tempo e espaço indeterminados</strong> e <strong>poucos personagens</strong>, que podem ser animais com comportamento de seres humanos.",
              "O <strong>narrador</strong> da história <strong>não participa dela</strong>: apenas observa o que acontece.",
              "Como são recontados de boca em boca, esses contos mudam um pouquinho a cada vez — daí o ditado \"quem conta um conto aumenta um ponto\"."
            ]
          },
          {
            "h": "\"O homem mais rico do mundo\" (conto popular da Índia)",
            "p": [
              "Havia um <strong>rei muito rico</strong> que gostava de ajudar todas as pessoas que tinham menos do que ele. Como era muito bom, acabavam abusando de sua generosidade: muitos <strong>fingiam ser pobres</strong> só para receber ajuda facilmente. Um dia o rei decidiu que só ajudaria quem fosse <strong>realmente necessitado</strong>.",
              "Um <strong>súdito</strong> (aquele que está submetido à vontade de alguém a quem deve obediência) lhe contou sobre o homem mais pobre do mundo: de idade avançada, não possuía nada, vivia com alguns farrapos sobre o corpo, dormia no topo de uma colina alta e se alimentava apenas de frutos. O rei quis conhecê-lo de perto para poder ajudá-lo.",
              "Chegando à colina, o rei se apresentou e ofereceu ajuda para que ele não vivesse em condições tão <strong>miseráveis</strong>. A resposta surpreendeu: <em>\"Mas eu não sou pobre, senhor. Sei transformar a terra em ouro.\"</em> E convidou o rei a subir a colina de manhãzinha, antes de o sol nascer.",
              "Assim fizeram. Sentados em silêncio no topo, os olhos do rei não podiam crer na beleza do espetáculo: com o nascer do sol, <strong>tudo se transformava num dourado</strong> que ficava cada segundo mais radiante. Então o rei entendeu: <em>\"Sua riqueza é essa liberdade, esse contato direto com a natureza. Eu, que sou o rei e que vivo todos os dias dentro do meu castelo com empregados, políticos e <strong>aduladores</strong> (quem faz elogios em excesso), não tenho isso.\"</em>",
              "A partir de então, o rei passou a acompanhar o homem todos os dias na colina. A lição: <strong>a verdadeira riqueza não é só o dinheiro</strong> — pode ser a liberdade e o contato com a natureza."
            ]
          },
          {
            "h": "\"Por que a zebra é toda listrada?\" (conto popular africano)",
            "p": [
              "Os mais velhos contam que a <strong>zebra e o burro</strong> eram companheiros e tinham a pelagem da mesma cor. Naquela época todos os animais eram amigos e viviam em paz, sem nenhum rei ou líder.",
              "Um dia os bichos decidiram escolher um chefe, mas cada um tinha uma opinião: o elefante <strong>bramiu</strong> (deu gritos, rugiu) que devia ser o mais pesado; o leão exigiu que fosse o melhor caçador; o leopardo argumentou que fosse o mais veloz. A lebre teve a ideia genial de fazer uma <strong>festa</strong> para escolher o rei da floresta.",
              "A zebra e o burro combinaram <strong>ajudar um ao outro</strong> para ficarem mais bonitos. Como os dois queriam se embelezar primeiro, pediram conselho à lebre, que decidiu: a zebra, por ser mais velha, seria enfeitada primeiro. O burro pintou a zebra com listras brancas e negras <strong>bem devagar e com cuidado</strong>, até a ponta dos cascos — foi tão caprichoso que só terminou pouco antes do concurso começar.",
              "Assim que se viu pintada, a zebra <strong>correu para se juntar aos outros animais, esquecendo de ajudar seu irmão</strong>. O burro tentou pintar-se sozinho, mas acabou se borrando todo — é por isso que hoje em dia ele tem essa cor sem graça, toda amarelada. A zebra não ganhou o concurso (o vencedor foi o leão), mas passou a ser admirada pela beleza de suas cores. Já o burro, magoado, deixou a floresta e foi trabalhar num vilarejo.",
              "<strong>Curiosidade:</strong> cada zebra tem um padrão de listras com formatos, espessuras e tamanhos diferentes — assim como as nossas impressões digitais, que não se repetem nem mesmo em gêmeos idênticos."
            ]
          },
          {
            "h": "Pronomes de tratamento",
            "p": [
              "Há muitas formas de nos referirmos às pessoas com quem falamos. As palavras usadas para isso são os <strong>pronomes de tratamento</strong>. Conheça os principais:",
              "<strong>você</strong>: familiares e pessoas próximas.",
              "<strong>senhor (sr.)</strong> ou <strong>senhora (sr.ª)</strong>: pessoas em geral, para manter certo distanciamento respeitoso.",
              "<strong>Vossa Senhoria (V. S.ª)</strong>: pessoas que ocupam cargos de destaque em órgãos públicos ou privados, autoridades em geral.",
              "<strong>Vossa Excelência (V. Ex.ª)</strong>: autoridades civis e militares, como presidente da República, embaixadores, juízes de direito, generais.",
              "<strong>Vossa Majestade (V. M.)</strong>: reis e rainhas.",
              "<strong>Vossa Alteza (V. A.)</strong>: príncipes e princesas.",
              "<strong>Vossa Santidade (V. S.)</strong>: papa.",
              "<strong>Vossa Eminência (V. Em.ª)</strong>: cardeais."
            ]
          },
          {
            "h": "As pessoas do discurso",
            "p": [
              "Palavras como <em>eu</em> e <em>ele</em> são chamadas de <strong>pronomes pessoais</strong>. Esses pronomes designam as <strong>pessoas do discurso</strong>, indicando os papéis dos seres envolvidos em uma comunicação:",
              "<strong>1ª pessoa (quem fala):</strong> pronomes <strong>eu</strong> e <strong>nós</strong>.",
              "<strong>2ª pessoa (com quem se fala):</strong> pronomes <strong>tu</strong> e <strong>vós</strong>. Hoje em dia, esses pronomes costumam ser substituídos por <strong>você</strong> e <strong>vocês</strong>.",
              "<strong>3ª pessoa (de quem se fala ou o assunto da conversa):</strong> pronomes <strong>ele/ela</strong> e <strong>eles/elas</strong>.",
              "Exemplo do conto: em <em>\"Meu senhor, eu vi o homem mais pobre do mundo\"</em>, quem fala é o súdito (1ª pessoa, <em>eu</em>), com quem ele fala é o rei (2ª pessoa, <em>meu senhor</em>) e de quem ele fala é o homem pobre (3ª pessoa)."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "A quem me dirijo assim?",
            "instructions": "Ligue cada pronome de tratamento a quem ele se destina.",
            "pairs": [
              [
                "Vossa Majestade",
                "Reis e rainhas"
              ],
              [
                "Vossa Alteza",
                "Príncipes e princesas"
              ],
              [
                "Vossa Santidade",
                "O papa"
              ],
              [
                "Vossa Excelência",
                "Juízes e presidente da República"
              ],
              [
                "Vossa Eminência",
                "Cardeais"
              ],
              [
                "você",
                "Familiares e pessoas próximas"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Qual é a pessoa do discurso?",
            "instructions": "Arraste cada pronome para a pessoa do discurso a que pertence.",
            "categories": [
              "1ª pessoa (quem fala)",
              "2ª pessoa (com quem se fala)",
              "3ª pessoa (de quem se fala)"
            ],
            "items": [
              {
                "text": "eu",
                "cat": 0
              },
              {
                "text": "tu",
                "cat": 1
              },
              {
                "text": "ele",
                "cat": 2
              },
              {
                "text": "nós",
                "cat": 0
              },
              {
                "text": "vós",
                "cat": 1
              },
              {
                "text": "elas",
                "cat": 2
              },
              {
                "text": "você",
                "cat": 1
              },
              {
                "text": "eles",
                "cat": 2
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "O conto apresenta um rei muito rico que gostava de ajudar seu povo. Qual descrição combina com ele?",
            "options": [
              "Era maldoso e nunca ajudava o povo",
              "Era uma pessoa que nunca se enganava",
              "Era um homem muito rico e que fazia questão de ajudar",
              "Era pobre e vivia numa colina"
            ],
            "answer": 2,
            "explain": "O rei era muito rico e gostava de ajudar quem tinha menos. Essas informações aparecem no início do conto."
          },
          {
            "type": "mc",
            "q": "O rei disse: 'Preciso conhecê-lo para poder ajudá-lo'. Por que ele procurou o homem da colina?",
            "options": [
              "Porque ele desejava ajudá-lo",
              "Porque pretendia expulsar os pobres de seu reino",
              "Porque estava certo de que o homem pobre o ajudaria",
              "Porque queria aprender a transformar terra em ouro"
            ],
            "answer": 0,
            "explain": "O rei diz no texto: 'Preciso conhecê-lo de perto para poder ajudá-lo'. Como muitos fingiam ser pobres, ele decidiu conferir pessoalmente quem realmente precisava."
          },
          {
            "type": "mc",
            "q": "Qual é uma característica dos contos populares?",
            "options": [
              "Podem ser transmitidos de geração em geração",
              "Sempre apresentam fatos científicos",
              "São escritos somente como notícias",
              "Precisam ter instruções numeradas"
            ],
            "answer": 0,
            "explain": "Os contos populares podem ser transmitidos de geração em geração e apresentar diferentes versões."
          },
          {
            "type": "mc",
            "q": "O súdito pergunta: '— Vossa Majestade gostaria de descansar um pouco?'. A quem ele está se dirigindo?",
            "options": [
              "A um governador",
              "A um rei",
              "A um juiz",
              "Ao papa"
            ],
            "answer": 1,
            "explain": "Vossa Majestade é o pronome de tratamento usado para reis e rainhas. Para príncipes e princesas usamos Vossa Alteza; para o papa, Vossa Santidade."
          },
          {
            "type": "text",
            "q": "A zebra prometeu ajudar o burro, mas correu para o concurso. O burro tentou se pintar sozinho. Por que ele ficou todo borrado?",
            "answers": [
              "porque a zebra nao o ajudou",
              "a zebra nao o ajudou",
              "porque tentou se pintar sozinho",
              "porque se pintou sozinho e se borrou",
              "porque se borrou todo",
              "porque a zebra esqueceu de ajudar",
              "porque a zebra o abandonou"
            ],
            "explain": "Assim que ficou pronta, a zebra correu para o concurso e esqueceu de ajudar o irmão. O burro tentou pintar-se sozinho e acabou se borrando todo."
          },
          {
            "type": "text",
            "q": "Que pronome de tratamento um advogado deve usar ao se dirigir a um juiz de direito?",
            "answers": [
              "vossa excelencia",
              "v. ex.a",
              "v ex a",
              "vossa excelencia."
            ],
            "explain": "Vossa Excelência (V. Ex.ª) é usado para autoridades civis e militares, como juízes de direito, presidente da República, embaixadores e generais."
          },
          {
            "type": "text",
            "q": "Na fala '— Mas eu não sou pobre, senhor', qual é o pronome pessoal do caso reto presente?",
            "answers": [
              "eu",
              "eu.",
              "o eu"
            ],
            "explain": "É 'eu', pronome de 1ª pessoa — quem fala. Nessa fala, o homem é a 1ª pessoa do discurso; 'senhor' é um pronome de tratamento dirigido ao rei (2ª pessoa)."
          },
          {
            "type": "text",
            "q": "O rei disse ao homem da colina: 'Sua riqueza é essa liberdade e esse contato com a natureza'. Qual era a riqueza dele?",
            "answers": [
              "a liberdade",
              "liberdade",
              "a liberdade e o contato com a natureza",
              "liberdade e contato com a natureza",
              "o contato com a natureza"
            ],
            "explain": "O rei conclui: 'Sua riqueza é essa liberdade, esse contato direto com a natureza'. Ele, cercado de empregados, políticos e aduladores no castelo, não tinha isso."
          },
          {
            "type": "mc",
            "q": "Larissa diz: 'Preciso entregar um livro à Renata'. Qual pronome pode substituir 'Renata'?",
            "options": [
              "Ela",
              "Eu",
              "Nós",
              "Você"
            ],
            "answer": 0,
            "explain": "O pronome 'ela' pode substituir Renata, a pessoa de quem Larissa está falando."
          },
          {
            "type": "mc",
            "q": "A zebra prometeu ajudar o burro, mas foi embora depois de receber ajuda. Que atitude faltou a ela?",
            "options": [
              "Cumprir o combinado e ajudar o outro",
              "Correr mais rápido para o concurso",
              "Escolher novas cores para as listras",
              "Pedir ao leão para decidir tudo"
            ],
            "answer": 0,
            "explain": "Faltou cumprir o combinado e retribuir a ajuda. A história permite conversar sobre cooperação e responsabilidade."
          }
        ]
      }
    ]
  },
  {
    "id": "matematica",
    "nome": "Matemática",
    "cor": "--ciano",
    "capitulos": [
      {
        "id": "mat09",
        "module": 9,
        "title": "Contagem de possibilidades e outras multiplicações",
        "video": "assets/videos/mat09-matematica-no-dia-a-dia.mp4",
        "theory": [
          {
            "h": "Fazendo combinações",
            "p": [
              "Imagine que você vai decorar uma festa e precisa escolher balões. Há 3 tamanhos (pequeno, médio e grande) e 3 cores (roxo, verde e rosa). Quantas combinações diferentes de 1 tamanho e 1 cor você consegue montar?",
              "Para não se perder, podemos desenhar um esquema ligando cada tamanho às cores possíveis. Esse esquema é chamado de <strong>árvore de possibilidades</strong>: cada balão (pequeno, médio, grande) pode ser roxo, verde ou rosa — 3 opções para cada um. Como são 3 tamanhos com 3 opções de cor cada, temos 3 + 3 + 3 = 9, ou seja, <strong>3 × 3 = 9 combinações</strong>.",
              "Outro exemplo: uma sorveteria tem 2 tipos de sorvete (casquinha e picolé) e 3 sabores (morango, limão e uva). Um cliente pode combinar 1 tipo e 1 sabor de <strong>2 × 3 = 6 maneiras diferentes</strong>."
            ]
          },
          {
            "h": "A multiplicação resolve a contagem",
            "p": [
              "Sempre que precisamos combinar 1 item de um grupo com 1 item de outro grupo, o total de combinações é a <strong>multiplicação</strong> da quantidade de opções de cada grupo.",
              "João tem 2 cores de mochila e 4 cores de relógio: 2 × 4 = <strong>8 combinações</strong>. Alice pode escolher 1 sanduíche entre 4 opções e 1 suco entre 3 opções: 4 × 3 = <strong>12 lanches diferentes</strong>. Um restaurante com 4 tipos de salada e 5 molhos oferece 4 × 5 = <strong>20 combinações</strong>.",
              "Também dá para organizar as combinações em uma tabela (quadro): as linhas mostram as opções de um grupo e as colunas, as do outro. Cada casinha da tabela é uma combinação."
            ]
          },
          {
            "h": "Multiplicação por 10, 100 e 1000",
            "p": [
              "Observe o padrão: 6 × 10 = 60, 6 × 100 = 600, 6 × 1000 = 6000. Ao multiplicar por 10, acrescentamos <strong>um zero</strong> ao número; por 100, <strong>dois zeros</strong>; por 1000, <strong>três zeros</strong>.",
              "Isso vale em qualquer ordem: 10 × 15 = 150, 100 × 15 = 1500, 1000 × 15 = 15000. Esse truque deixa o cálculo mental muito mais rápido."
            ]
          },
          {
            "h": "Mais multiplicações: decompondo fatores",
            "p": [
              "E quando um fator é 20, 200 ou 2000? Podemos <strong>decompor</strong>: 12 × 20 é o mesmo que 12 × 2 × 10. Primeiro calculamos 12 × 2 = 24 e depois 24 × 10 = <strong>240</strong>.",
              "Outros exemplos: 8 × 30 = 8 × 3 × 10 = 24 × 10 = 240; 4 × 600 = 4 × 6 × 100 = 24 × 100 = 2400; 3 × 9000 = 3 × 9 × 1000 = 27 × 1000 = 27000."
            ]
          },
          {
            "h": "As três ideias da multiplicação",
            "p": [
              "A multiplicação ajuda a resolver diferentes problemas: somar parcelas iguais, organizar objetos em fileiras e contar combinações possíveis.",
              "Por exemplo, 7 fileiras com 10 maçãs formam 70 maçãs. Já 2 cachorros e 3 coleiras permitem 6 combinações.",
              "Repare que a ordem dos fatores não muda o resultado: 2 × 5 = 10 e 5 × 2 = 10. Isso ajuda a conferir cálculos e a escolher o caminho mais fácil."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Ligue a multiplicação ao resultado",
            "instructions": "Toque em uma carta de cada coluna para formar o par correto.",
            "pairs": [
              [
                "100 × 1",
                "100"
              ],
              [
                "13 × 10",
                "130"
              ],
              [
                "10 × 100",
                "1000"
              ],
              [
                "14 × 1000",
                "14000"
              ],
              [
                "12 × 20",
                "240"
              ],
              [
                "4 × 600",
                "2400"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Qual ideia da multiplicação?",
            "instructions": "Arraste cada situação para a ideia de multiplicação que ela usa.",
            "categories": [
              "Combinação de possibilidades",
              "Adição de parcelas iguais"
            ],
            "items": [
              {
                "text": "2 mochilas e 4 relógios: quantos conjuntos?",
                "cat": 0
              },
              {
                "text": "5 caixas com 8 lápis em cada uma",
                "cat": 1
              },
              {
                "text": "3 sanduíches e 3 sucos: quantos lanches?",
                "cat": 0
              },
              {
                "text": "7 fileiras com 10 maçãs em cada",
                "cat": 1
              },
              {
                "text": "2 tênis e 4 bonés: quantas combinações?",
                "cat": 0
              },
              {
                "text": "4 pacotes com 500 folhas em cada",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Gustavo tem 25 cédulas de R$ 100. Quanto dinheiro ele tem?",
            "options": [
              "R$ 250",
              "R$ 2.000",
              "R$ 2.500",
              "R$ 25.000"
            ],
            "answer": 2,
            "explain": "25 × 100 = 2.500. Multiplicar por 100 acrescenta dois zeros ao número 25."
          },
          {
            "type": "mc",
            "q": "Uma empresa tinha 900 funcionários quando foi inaugurada. Após 10 anos, ela tem 50 vezes essa quantidade. Quantos funcionários ela tem agora?",
            "options": [
              "450",
              "4500",
              "9000",
              "45000"
            ],
            "answer": 3,
            "explain": "900 × 50 = 900 × 5 × 10 = 4500 × 10 = 45.000 funcionários. Decompor o 50 em 5 × 10 facilita o cálculo mental."
          },
          {
            "type": "mc",
            "q": "Isabela comprou 4 frutas (maçã, morango, banana e kiwi) e 2 tipos de leite (arroz e amêndoa). De quantas maneiras diferentes ela pode combinar 1 fruta e 1 tipo de leite para fazer a vitamina?",
            "options": [
              "2 maneiras",
              "4 maneiras",
              "6 maneiras",
              "8 maneiras"
            ],
            "answer": 3,
            "explain": "É um problema de combinação: 4 frutas × 2 leites = 8 vitaminas diferentes. Cada fruta pode ser batida com cada um dos 2 leites."
          },
          {
            "type": "mc",
            "q": "Júlia quer colar as fotos dos 3 animais de estimação dela (cachorro, gato e coelho) em uma cartolina, uma ao lado da outra. De quantas maneiras diferentes ela pode ordenar as fotos?",
            "options": [
              "3 maneiras",
              "6 maneiras",
              "9 maneiras",
              "12 maneiras"
            ],
            "answer": 1,
            "explain": "Para a 1ª posição há 3 opções, para a 2ª sobram 2 e para a 3ª sobra 1: 3 × 2 × 1 = 6 ordens diferentes (ex.: cão-gato-coelho, cão-coelho-gato, gato-cão-coelho...)."
          },
          {
            "type": "text",
            "q": "Um restaurante oferece 4 tipos de salada e 5 molhos. Quantas combinações diferentes um cliente pode fazer escolhendo 1 salada e 1 molho? (escreva o número)",
            "answers": [
              "20",
              "vinte"
            ],
            "explain": "Multiplicamos as opções de cada grupo: 4 × 5 = 20 combinações diferentes."
          },
          {
            "type": "text",
            "q": "Complete com o resultado: 8 × 3000 = ?",
            "answers": [
              "24000",
              "24.000",
              "24 000"
            ],
            "explain": "Decompondo: 8 × 3 × 1000 = 24 × 1000 = 24.000. Multiplicar por 1000 acrescenta três zeros."
          },
          {
            "type": "text",
            "q": "No sábado, 1000 crianças foram vacinadas. No domingo, foi o triplo dessa quantidade. Quantas crianças foram vacinadas no fim de semana todo? (escreva o número)",
            "answers": [
              "4000",
              "4.000",
              "quatro mil"
            ],
            "explain": "Domingo: 3 × 1000 = 3000 crianças. Total do fim de semana: 1000 + 3000 = 4.000 crianças. Atenção: a pergunta pede o total, não só o domingo!"
          },
          {
            "type": "text",
            "q": "Luísa tem 3 cédulas de R$ 20 e 4 cédulas de R$ 50. Quantos reais ela tem ao todo?",
            "answers": [
              "260",
              "260 reais",
              "r$ 260",
              "r$ 260,00",
              "260,00"
            ],
            "explain": "3 × 20 = 60 e 4 × 50 = 200. Somando os dois valores: 60 + 200 = R$ 260."
          },
          {
            "type": "mc",
            "q": "Uma escola de dança funciona de segunda a sexta. Cada dia tem uma turma de manhã (20 alunos) e uma à noite (30 alunos). Quantos alunos a escola tem ao todo?",
            "options": [
              "50 alunos",
              "100 alunos",
              "150 alunos",
              "250 alunos"
            ],
            "answer": 3,
            "explain": "Cada dia tem 20 + 30 = 50 alunos. Em 5 dias: 5 × 50 = 250 alunos, pois cada aluno faz apenas uma aula por semana."
          }
        ]
      },
      {
        "id": "mat10",
        "module": 10,
        "title": "Medidas de tempo, localização e deslocamento",
        "video": "assets/videos/mat10-tempo-e-mapas.mp4",
        "theory": [
          {
            "h": "Instrumentos para medir o tempo",
            "p": [
              "Antes dos relógios atuais, a humanidade inventou outros instrumentos para medir o tempo: o <strong>relógio de água</strong> (ou clepsidra), o <strong>relógio de areia</strong> (ampulheta) e o <strong>relógio de sol</strong>.",
              "Hoje usamos o <strong>relógio analógico</strong> (de ponteiros), o <strong>relógio digital</strong> e o <strong>cronômetro</strong>. Existem até relógios inteligentes, que se conectam ao celular e têm várias funções."
            ]
          },
          {
            "h": "As 24 horas do dia",
            "p": [
              "O dia tem 24 horas. Depois do meio-dia (12 h), o relógio digital continua contando: 13 h, 14 h, 15 h... Por isso, <strong>1 hora da tarde é o mesmo que 13 horas</strong>, 3 horas da tarde é 15 horas e 9 horas da noite é 21 horas.",
              "Alguns relógios digitais dividem o dia em <strong>AM</strong> (antes do meio-dia) e <strong>PM</strong> (depois do meio-dia). Assim, 1:00 AM é de madrugada e 1:00 PM é 13 horas.",
              "No relógio analógico, o mesmo horário aparece duas vezes por dia. Se o ponteiro marca 3 horas e já passou do meio-dia, sabemos que são 15 horas."
            ]
          },
          {
            "h": "Hora, minuto e segundo",
            "p": [
              "A hora, o minuto e o segundo são <strong>unidades padronizadas de medida de tempo</strong>: <strong>1 hora = 60 minutos</strong> e <strong>1 minuto = 60 segundos</strong>. Abreviamos: 1 h, 1 min e 1 s.",
              "No relógio analógico, o ponteiro menor indica as horas, o maior indica os minutos e o mais fino, os segundos. Os números do mostrador formam 12 intervalos iguais, e cada intervalo vale 5 minutos, pois 5 × 12 = 60.",
              "Exemplos de conversão: 2 horas = 120 minutos; 5 minutos = 300 segundos; 240 minutos = 4 horas; 180 segundos = 3 minutos."
            ]
          },
          {
            "h": "Localização",
            "p": [
              "Para localizar pessoas e objetos, usamos palavras como <strong>na frente, atrás, à direita, à esquerda, ao lado, perto e longe</strong>. Em uma sala de aula, por exemplo, podemos dizer quem senta na frente ou atrás de um colega, e quem está à direita ou à esquerda.",
              "Atenção: a direita e a esquerda dependem de quem observa! O que está à sua direita pode estar à esquerda de quem está de frente para você.",
              "Curiosidade: o <strong>CEP</strong> (Código de Endereçamento Postal) foi criado pelos Correios para orientar a entrega de correspondências no Brasil. Ele tem 8 algarismos que indicam região, sub-região, setor e outros detalhes do endereço."
            ]
          },
          {
            "h": "Trajetos e deslocamentos",
            "p": [
              "Um <strong>trajeto</strong> é o caminho percorrido de um ponto a outro. Podemos descrevê-lo com instruções como: siga em frente 3 quadras, vire à esquerda, ande mais 2 quadras.",
              "Em uma malha quadriculada, podemos comparar trajetos contando os quadradinhos percorridos: o trajeto mais curto é o que passa por menos quadradinhos.",
              "Também podemos localizar figuras na malha usando dois números: quanto andar <strong>para o lado</strong> e quanto <strong>subir</strong>. Sempre começamos a contar do zero."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Horários equivalentes",
            "instructions": "Ligue cada horário da tarde/noite ao número de horas do relógio digital.",
            "pairs": [
              [
                "1 hora da tarde",
                "13 h"
              ],
              [
                "3 horas da tarde",
                "15 h"
              ],
              [
                "7 horas da noite",
                "19 h"
              ],
              [
                "9 horas da noite",
                "21 h"
              ],
              [
                "Meia-noite",
                "24 h"
              ],
              [
                "Meio-dia",
                "12 h"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Conversões de tempo",
            "instructions": "Arraste cada conversão para o grupo certo: verdadeira ou falsa.",
            "categories": [
              "Verdadeira",
              "Falsa"
            ],
            "items": [
              {
                "text": "1 hora = 60 minutos",
                "cat": 0
              },
              {
                "text": "2 horas = 120 minutos",
                "cat": 0
              },
              {
                "text": "1 minuto = 100 segundos",
                "cat": 1
              },
              {
                "text": "240 minutos = 4 horas",
                "cat": 0
              },
              {
                "text": "180 segundos = 2 minutos",
                "cat": 1
              },
              {
                "text": "5 minutos = 300 segundos",
                "cat": 0
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Um menino acorda com o sol nascendo e o galo cantando. O relógio dele mostra o ponteiro pequeno entre o 5 e o 6 e o ponteiro grande no 2. Que horas são?",
            "options": [
              "2 horas e 25 minutos",
              "5 horas e 2 minutos",
              "5 horas e 10 minutos",
              "6 horas e 10 minutos"
            ],
            "answer": 2,
            "explain": "O ponteiro pequeno passou do 5. O grande aponta para o 2, que vale 10 minutos. Portanto, são 5 h 10 min."
          },
          {
            "type": "mc",
            "q": "Os ônibus saem da rodoviária de 2 em 2 horas, a partir das 8 da manhã. Caio vai embarcar ao meio-dia. Qual é o horário de saída do próximo ônibus depois do que Caio pegou?",
            "options": [
              "2 horas",
              "10 horas",
              "13 horas",
              "14 horas"
            ],
            "answer": 3,
            "explain": "Os horários são 8 h, 10 h, 12 h, 14 h... Caio embarca no das 12 h (meio-dia). O próximo sai 2 horas depois: às 14 horas."
          },
          {
            "type": "text",
            "q": "Complete: 2 horas equivalem a quantos minutos? (escreva o número)",
            "answers": [
              "120",
              "cento e vinte"
            ],
            "explain": "1 hora tem 60 minutos. Então 2 horas = 2 × 60 = 120 minutos."
          },
          {
            "type": "text",
            "q": "Complete: 5 minutos equivalem a quantos segundos? (escreva o número)",
            "answers": [
              "300",
              "trezentos"
            ],
            "explain": "1 minuto tem 60 segundos. Então 5 minutos = 5 × 60 = 300 segundos."
          },
          {
            "type": "mc",
            "q": "Quatorze horas (14 h) é o mesmo que:",
            "options": [
              "2 horas da tarde",
              "4 horas da tarde",
              "2 horas da madrugada",
              "4 horas da manhã"
            ],
            "answer": 0,
            "explain": "Depois do meio-dia (12 h), continuamos contando: 13 h = 1 da tarde, 14 h = 2 da tarde. Basta subtrair 12: 14 − 12 = 2."
          },
          {
            "type": "text",
            "q": "Meia-noite é o mesmo que quantas horas no relógio de 24 horas? (escreva o número)",
            "answers": [
              "24",
              "24 horas",
              "vinte e quatro",
              "0",
              "24h"
            ],
            "explain": "A meia-noite marca o fim do dia (24 h) e também o começo do dia seguinte (0 h). As duas respostas estão certas!"
          },
          {
            "type": "mc",
            "q": "No relógio analógico, cada intervalo entre dois números vale 5 minutos. Por quê?",
            "options": [
              "Porque o relógio tem 5 ponteiros",
              "Porque 5 × 12 = 60, o total de minutos de uma volta",
              "Porque a hora tem 5 minutos",
              "Porque o ponteiro anda de 10 em 10"
            ],
            "answer": 1,
            "explain": "O mostrador tem 12 números formando 12 intervalos iguais. Como uma volta completa do ponteiro dos minutos dura 60 minutos, cada intervalo vale 60 ÷ 12 = 5 minutos (5 × 12 = 60)."
          },
          {
            "type": "mc",
            "q": "Vivian saiu de um ponto, seguiu em frente por 3 quadras, virou à esquerda e percorreu mais 2 quadras. Para descrever esse caminho usamos palavras de:",
            "options": [
              "Medidas de tempo",
              "Localização e deslocamento",
              "Multiplicação",
              "Medidas de massa"
            ],
            "answer": 1,
            "explain": "Instruções como 'siga em frente', 'vire à esquerda' e 'ande 2 quadras' descrevem um trajeto — isso é localização e deslocamento no espaço."
          },
          {
            "type": "text",
            "q": "O ponteiro menor do relógio analógico indica os minutos ou as horas?",
            "answers": [
              "horas",
              "as horas",
              "hora",
              "a hora"
            ],
            "explain": "O ponteiro menor (mais curto) indica as horas; o maior indica os minutos; e o mais fininho e rápido indica os segundos."
          }
        ]
      },
      {
        "id": "mat11",
        "module": 11,
        "title": "Divisão",
        "video": "assets/videos/mat11-desvendando-a-divisao.mp4",
        "theory": [
          {
            "h": "Repartir em partes iguais",
            "p": [
              "Dividir é <strong>repartir uma quantidade em partes iguais</strong>. Giovana tinha 12 figurinhas para colar igualmente em 3 cadernos: distribuindo de 1 em 1, cada caderno recebeu 4 figurinhas. Escrevemos: <strong>12 ÷ 3 = 4</strong>.",
              "Se ela tivesse 4 cadernos, cada um receberia 3 figurinhas: 12 ÷ 4 = 3. Também podemos distribuir mais de 1 por vez — o resultado é o mesmo."
            ]
          },
          {
            "h": "Quantas vezes cabe?",
            "p": [
              "A divisão também responde à pergunta <strong>\"quantas vezes um número cabe em outro?\"</strong>. Marcos tem 30 caquis e quer formar caixas com meia dúzia (6) em cada: 30 ÷ 6 = 5, pois 5 × 6 = 30. Ele vai precisar de 5 caixas.",
              "Repare que a divisão e a multiplicação são operações irmãs: para conferir uma divisão, basta multiplicar o resultado pelo divisor."
            ]
          },
          {
            "h": "Os termos da divisão",
            "p": [
              "Toda divisão tem quatro termos: o <strong>dividendo</strong> (quantidade que está sendo dividida), o <strong>divisor</strong> (em quantas partes dividimos), o <strong>quociente</strong> (o resultado) e o <strong>resto</strong> (o que sobra).",
              "Em 72 ÷ 8 = 9: o 72 é o dividendo, o 8 é o divisor, o 9 é o quociente e o resto é 0."
            ]
          },
          {
            "h": "Divisão exata e não exata",
            "p": [
              "Uma divisão é <strong>exata</strong> quando não há sobra (resto zero). Aline dividiu 45 maços de espinafre em caixas de 9: 45 ÷ 9 = 5, resto 0 — exata!",
              "Uma divisão <strong>não é exata</strong> quando há resto. Fernanda usa 2 cenouras por copo de suco e tem 17 cenouras: ela faz 8 copos e <strong>sobra 1 cenoura</strong>, pois 17 = 8 × 2 + 1. O quociente é 8 e o resto é 1."
            ]
          },
          {
            "h": "Estratégias para dividir",
            "p": [
              "<strong>Cálculo mental com a multiplicação:</strong> para 25 ÷ 3, pense: 3 × 8 = 24 (menor que 25) e 3 × 9 = 27 (passa). Então 25 ÷ 3 dá quociente 8 e resto 1.",
              "<strong>Método da decomposição:</strong> para 72 ÷ 6, decompomos 72 = 60 + 12. Então 72 ÷ 6 = 60 ÷ 6 + 12 ÷ 6 = 10 + 2 = <strong>12</strong>.",
              "<strong>Algoritmo (conta armada):</strong> para 56 ÷ 2, dividimos primeiro as dezenas (5 ÷ 2 = 2, resta 1 dezena), trocamos a dezena por 10 unidades (10 + 6 = 16) e dividimos: 16 ÷ 2 = 8. Resultado: 28."
            ]
          },
          {
            "h": "Metade, terça parte, quarta parte...",
            "p": [
              "Calculamos a <strong>metade</strong> dividindo por 2, a <strong>terça parte</strong> dividindo por 3, a <strong>quarta parte</strong> por 4, a <strong>quinta parte</strong> por 5 e a <strong>décima parte</strong> por 10.",
              "Exemplos: metade de 84 = 42; terça parte de 69 = 23; quarta parte de 76 = 19; quinta parte de 95 = 19; décima parte de 50 = 5."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Divisões e resultados",
            "instructions": "Ligue cada expressão ao seu valor.",
            "pairs": [
              [
                "Terça parte de 21",
                "7"
              ],
              [
                "Metade de 50",
                "25"
              ],
              [
                "Quinta parte de 25",
                "5"
              ],
              [
                "Quarta parte de 16",
                "4"
              ],
              [
                "Décima parte de 100",
                "10"
              ],
              [
                "72 ÷ 6",
                "12"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Exata ou não exata?",
            "instructions": "Arraste cada divisão para o grupo correto.",
            "categories": [
              "Divisão exata (resto 0)",
              "Divisão não exata (tem resto)"
            ],
            "items": [
              {
                "text": "45 ÷ 9",
                "cat": 0
              },
              {
                "text": "17 ÷ 2",
                "cat": 1
              },
              {
                "text": "30 ÷ 6",
                "cat": 0
              },
              {
                "text": "25 ÷ 3",
                "cat": 1
              },
              {
                "text": "56 ÷ 2",
                "cat": 0
              },
              {
                "text": "49 ÷ 4",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Calculando a terça parte de 84 lápis, obtemos:",
            "options": [
              "42 lápis",
              "32 lápis",
              "28 lápis",
              "18 lápis"
            ],
            "answer": 2,
            "explain": "Terça parte = dividir por 3. Decompondo: 84 = 60 + 24; 60 ÷ 3 = 20 e 24 ÷ 3 = 8; 20 + 8 = 28 lápis."
          },
          {
            "type": "mc",
            "q": "A professora organizou os 26 alunos do 3º ano em duplas. Quantas duplas ela formou?",
            "options": [
              "7 duplas",
              "8 duplas",
              "13 duplas",
              "14 duplas"
            ],
            "answer": 2,
            "explain": "Dupla = grupo de 2. Então 26 ÷ 2 = 13 duplas, pois 13 × 2 = 26. Divisão exata, ninguém fica de fora!"
          },
          {
            "type": "mc",
            "q": "Na divisão 72 ÷ 8 = 9, qual número é o divisor?",
            "options": [
              "72",
              "8",
              "9",
              "0"
            ],
            "answer": 1,
            "explain": "O divisor é 8. Ele indica em quantas partes iguais o número 72 será dividido."
          },
          {
            "type": "mc",
            "q": "Rafael quer cortar 14 metros de barbante em pedaços de 2 metros cada. Quantos pedaços ele vai obter?",
            "options": [
              "12 pedaços",
              "13 pedaços",
              "10 pedaços",
              "7 pedaços"
            ],
            "answer": 3,
            "explain": "É a ideia de 'quantas vezes cabe': 14 ÷ 2 = 7, pois 7 × 2 = 14. Rafael obtém 7 pedaços de 2 metros."
          },
          {
            "type": "text",
            "q": "Fernanda usa 2 cenouras para cada copo de suco e tem 17 cenouras. Quantos copos de suco ela consegue fazer? (escreva o número)",
            "answers": [
              "8",
              "oito"
            ],
            "explain": "17 ÷ 2 dá quociente 8 e resto 1: ela faz 8 copos e sobra 1 cenoura. A divisão não é exata."
          },
          {
            "type": "text",
            "q": "Artur vai ler um livro de 112 páginas, lendo 8 páginas por dia. Em quantos dias ele termina o livro? (escreva o número)",
            "answers": [
              "14",
              "quatorze",
              "catorze"
            ],
            "explain": "112 ÷ 8 = 14, pois 14 × 8 = 112. Trocamos a centena por dezenas: 11 dezenas ÷ 8 = 1 dezena e restam 3; 32 unidades ÷ 8 = 4. Resultado: 14 dias."
          },
          {
            "type": "text",
            "q": "Qual é a metade de 56? (escreva o número)",
            "answers": [
              "28",
              "vinte e oito"
            ],
            "explain": "Metade = dividir por 2. 56 ÷ 2 = 28: 5 dezenas ÷ 2 = 2 dezenas (sobra 1); a dezena vira 10 unidades: 16 ÷ 2 = 8. Logo, 28."
          },
          {
            "type": "text",
            "q": "Maria levou R$ 80,00 à doceria e gastou a quinta parte desse valor. Quantos reais ela gastou? (escreva só o número)",
            "answers": [
              "16",
              "16 reais",
              "r$ 16",
              "r$ 16,00",
              "16,00",
              "dezesseis"
            ],
            "explain": "Quinta parte = dividir por 5. 80 ÷ 5 = 16, pois 16 × 5 = 80. Maria gastou R$ 16,00."
          },
          {
            "type": "mc",
            "q": "Quatro irmãos vão dividir igualmente o preço de uma camiseta de R$ 56. Quanto cada pessoa pagará?",
            "options": [
              "R$ 28,00",
              "R$ 14,00",
              "R$ 12,00",
              "R$ 26,00"
            ],
            "answer": 1,
            "explain": "Com 4 pessoas: 56 ÷ 4 = 14. Conferindo: 14 × 4 = 56. Cada um pagaria R$ 14,00 (metade da metade de 56)."
          },
          {
            "type": "mc",
            "q": "A turma do 3º ano usa 2 botões para os olhos de cada boneco. Quantos bonecos é possível fazer com 256 botões?",
            "options": [
              "512 bonecos",
              "254 bonecos",
              "128 bonecos",
              "64 bonecos"
            ],
            "answer": 2,
            "explain": "256 ÷ 2 = 128. Decompondo: 200 ÷ 2 = 100; 56 ÷ 2 = 28; 100 + 28 = 128 bonecos."
          }
        ]
      }
    ]
  },
  {
    "id": "ciencias",
    "nome": "Ciências",
    "cor": "--verde",
    "capitulos": [
      {
        "id": "cie09",
        "module": 9,
        "title": "Características da Terra",
        "theory": [
          {
            "h": "Representações da Terra",
            "p": [
              "Todos os planetas, incluindo a Terra, têm formato aproximadamente <strong>esférico</strong>. Para facilitar o estudo do nosso planeta, usamos representações gráficas em tamanho reduzido: mapas, globos e fotografias.",
              "O mapa que apresenta toda a superfície terrestre de forma plana e reduzida é chamado de <strong>planisfério</strong> ou <strong>mapa-múndi</strong>. Mapas assim são úteis para determinar fronteiras e locais com exatidão.",
              "O <strong>globo terrestre</strong> é outra maneira de representar a Terra. Por causa do seu formato esférico, ele representa a superfície de modo <strong>mais fiel</strong> do que o planisfério. Já as <strong>fotografias</strong> e ilustrações mostram como o planeta é visto do espaço — são tiradas por telescópios e satélites."
            ]
          },
          {
            "h": "Terra, planeta azul",
            "p": [
              "A Terra é um planeta sólido e pequeno se comparado com outros do Sistema Solar, e gira em torno do Sol. Vista do espaço, ela apresenta principalmente a cor <strong>azul</strong>, porque grande parte da superfície é coberta por água.",
              "<strong>Hidrosfera:</strong> toda a água do planeta — oceanos, geleiras, mares, rios, lagos, e também a água presente no ar e abaixo do solo.",
              "<strong>Litosfera:</strong> a parte sólida da Terra, que compõe os continentes e o fundo dos oceanos.",
              "<strong>Atmosfera:</strong> a camada gasosa que envolve a Terra, composta de vários gases, entre eles o oxigênio, usado na respiração de plantas e animais.",
              "<strong>Biosfera:</strong> o conjunto formado por todas as partes do planeta onde existe (ou pode existir) vida, incluindo hidrosfera, litosfera e atmosfera. A presença de água líquida e de oxigênio é fundamental para a existência da vida terrestre."
            ]
          },
          {
            "h": "O interior da Terra",
            "p": [
              "O ser humano ainda não conseguiu chegar ao centro da Terra, mas os cientistas já sabem muito sobre o interior do planeta pelo estudo das rochas, dos meteoros, dos vulcões e dos terremotos.",
              "<strong>Crosta:</strong> a camada mais externa e também a mais fina, composta de material rochoso e sólido. Grande parte dela está recoberta pelos oceanos.",
              "<strong>Manto:</strong> a camada mais espessa da Terra. Sua temperatura é bem mais elevada que a da crosta e é formado por um material pastoso chamado <strong>magma</strong>, que dá origem à lava dos vulcões.",
              "<strong>Núcleo:</strong> a parte mais interna, dividida em núcleo externo (líquido, composto de metais e rochas derretidas) e núcleo interno (sólido, a região mais quente do planeta).",
              "Mesmo as perfurações mais profundas feitas pelo ser humano alcançaram apenas a crosta. Para conhecer as camadas mais internas, os cientistas estudam, entre outras pistas, as ondas produzidas pelos terremotos."
            ]
          },
          {
            "h": "Placas tectônicas e terremotos",
            "p": [
              "Apesar de parecer fixa, a litosfera se movimenta continuamente. A crosta terrestre é dividida em partes chamadas <strong>placas tectônicas</strong>, que deslizam sobre o manto alguns centímetros por ano. Elas podem se chocar, se afastar ou deslizar uma ao lado da outra.",
              "<strong>Terremotos</strong> são tremores causados por movimentos bruscos entre placas tectônicas. O <strong>hipocentro</strong> é a região no interior da crosta onde o terremoto se origina; o <strong>epicentro</strong> é o local na superfície mais próximo do hipocentro, onde o terremoto é mais forte. As <strong>ondas sísmicas</strong> se propagam causando os abalos."
            ]
          },
          {
            "h": "Tsunamis e vulcões",
            "p": [
              "<strong>Tsunamis</strong> são ondas gigantescas provocadas por movimentos bruscos das placas tectônicas, quedas de meteoros, erupções de vulcões no fundo dos oceanos ou grandes deslizamentos de terra ou gelo. Em oceano aberto a altura da onda é baixa, mas ela aumenta enormemente ao se aproximar da praia.",
              "<strong>Vulcões</strong> são estruturas por onde ocorre a expulsão de magma e gases do interior da Terra. Têm aparência de montanhas e são mais comuns no encontro entre duas placas tectônicas. O magma se acumula na <strong>câmara de magma</strong>; quando não há mais capacidade de armazená-lo, ele sai pela <strong>cratera</strong> e passa a ser chamado de <strong>lava</strong>. O <strong>cone vulcânico</strong> é a estrutura que se forma em torno da cratera com o acúmulo dos produtos lançados.",
              "O vulcão <strong>Kilauea</strong>, no Havaí, é considerado por muitos especialistas o mais ativo do mundo, em atividade desde janeiro de 1983."
            ]
          },
          {
            "h": "Transformações no relevo",
            "p": [
              "<strong>Formação de cadeias montanhosas:</strong> ocorre quando duas placas tectônicas se chocam, empurrando o terreno para cima. Em alguns casos uma placa sobe em cima da outra, como na cordilheira dos Andes, a maior cadeia de montanhas do mundo, na América do Sul.",
              "<strong>Intemperismo:</strong> processo de desgaste ou decomposição das rochas. As modificações são lentas e contínuas, provocadas por agentes como a água, o vento, a variação de temperatura e os seres vivos. As montanhas são estruturas recentes, ainda pouco desgastadas pelo intemperismo.",
              "Os agentes transformadores <strong>internos</strong> agem sob a superfície (o movimento das placas tectônicas). Os <strong>externos</strong> agem na superfície, esculpindo o relevo — como a ação da água e do vento, que criam formações como a Pedra Furada (PI), o Vale da Lua (GO) e as formações rochosas de Torres (RS).",
              "Os movimentos das placas também formam montanhas, criam novos hábitats, alteram cursos de rios e enriquecem o solo com nutrientes."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "As esferas e as camadas",
            "instructions": "Ligue cada nome à sua definição.",
            "pairs": [
              [
                "Hidrosfera",
                "Toda a água do planeta"
              ],
              [
                "Litosfera",
                "A parte sólida da Terra"
              ],
              [
                "Atmosfera",
                "Camada gasosa que envolve a Terra"
              ],
              [
                "Biosfera",
                "Onde existe ou pode existir vida"
              ],
              [
                "Crosta",
                "Camada mais externa e mais fina"
              ],
              [
                "Manto",
                "Camada mais espessa, com magma"
              ],
              [
                "Núcleo interno",
                "Região sólida mais quente do planeta"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Agente interno ou externo?",
            "instructions": "Arraste cada agente transformador do relevo para o grupo certo.",
            "categories": [
              "Agente interno",
              "Agente externo"
            ],
            "items": [
              {
                "text": "Movimento das placas tectônicas",
                "cat": 0
              },
              {
                "text": "Ação do vento sobre as rochas",
                "cat": 1
              },
              {
                "text": "Erupção vulcânica",
                "cat": 0
              },
              {
                "text": "Ação da água da chuva",
                "cat": 1
              },
              {
                "text": "Terremoto",
                "cat": 0
              },
              {
                "text": "Variação de temperatura",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual alternativa explica corretamente uma parte do planeta Terra?",
            "options": [
              "A litosfera corresponde à parte sólida da Terra",
              "O manto fica acima da crosta terrestre",
              "O núcleo interno é formado apenas por água",
              "A crosta se estende até o centro da Terra"
            ],
            "answer": 0,
            "explain": "A litosfera é a parte sólida mais externa da Terra. Ela inclui a crosta e uma parte superior do manto."
          },
          {
            "type": "mc",
            "q": "Marque a alternativa correta sobre os fenômenos da litosfera:",
            "options": [
              "O atrito entre placas pode causar terremotos",
              "Montanhas se formam apenas quando as placas se afastam",
              "Tsunamis afetam somente os pescadores",
              "A água e o vento nunca modificam o relevo"
            ],
            "answer": 0,
            "explain": "Cadeias montanhosas se formam quando as placas se CHOCAM (não se afastam); tsunamis atingem as cidades do litoral, pois a onda cresce ao se aproximar da praia; e o relevo se modifica constantemente pelo intemperismo."
          },
          {
            "type": "text",
            "q": "Como se chama o mapa que apresenta toda a superfície terrestre de forma plana e reduzida?",
            "answers": [
              "planisferio",
              "mapa mundi",
              "mapa-mundi",
              "o planisferio",
              "planisferio ou mapa mundi"
            ],
            "explain": "É o planisfério, também chamado de mapa-múndi. Ele é útil para ver fronteiras com exatidão, mas o globo terrestre representa a superfície de modo mais fiel, por ser esférico."
          },
          {
            "type": "text",
            "q": "Complete: a crosta terrestre é dividida em partes chamadas de ______ ______.",
            "answers": [
              "placas tectonicas",
              "placas tectonica",
              "placa tectonica",
              "as placas tectonicas"
            ],
            "explain": "São as placas tectônicas. Elas deslizam sobre o manto alguns centímetros por ano e podem se chocar, se afastar ou deslizar uma ao lado da outra."
          },
          {
            "type": "text",
            "q": "Como se chama o material pastoso do interior da Terra que, ao sair pela cratera de um vulcão, passa a ser chamado de lava?",
            "answers": [
              "magma",
              "o magma"
            ],
            "explain": "É o magma, que forma o manto. Enquanto está dentro do vulcão chama-se magma; quando é expelido pela cratera e flui pelo exterior, passa a se chamar lava."
          },
          {
            "type": "mc",
            "q": "Como se chama o ponto da superfície mais próximo da origem de um terremoto?",
            "options": [
              "Epicentro",
              "Hipocentro",
              "Cratera",
              "Manto"
            ],
            "answer": 0,
            "explain": "Esse ponto é o epicentro. O hipocentro é a origem do terremoto no interior da crosta."
          },
          {
            "type": "text",
            "q": "Como se chama o processo lento e contínuo de desgaste das rochas, provocado pela água, pelo vento e pela variação de temperatura?",
            "answers": [
              "intemperismo",
              "o intemperismo"
            ],
            "explain": "É o intemperismo. Ele fragmenta as rochas em partículas cada vez menores, dando origem ao solo e esculpindo formações como a Pedra Furada (PI) e o Vale da Lua (GO)."
          },
          {
            "type": "mc",
            "q": "Por que a Terra é chamada de 'planeta azul'?",
            "options": [
              "Porque a atmosfera é feita de gás azul",
              "Porque grande parte da superfície é coberta por água",
              "Porque o núcleo interno é azul",
              "Porque a litosfera reflete a luz do Sol"
            ],
            "answer": 1,
            "explain": "Vista do espaço, a Terra aparece principalmente azul porque grande parte da superfície é coberta por água — os oceanos, que fazem parte da hidrosfera."
          },
          {
            "type": "mc",
            "q": "A cordilheira dos Andes, na América do Sul, é a maior cadeia de montanhas do mundo. Como ela se formou?",
            "options": [
              "Pelo acúmulo de lava de vulcões submarinos",
              "Pelo choque de duas placas tectônicas, com uma subindo sobre a outra",
              "Pelo desgaste causado pelo vento ao longo de milhões de anos",
              "Pela queda de um grande meteoro"
            ],
            "answer": 1,
            "explain": "Quando duas placas se chocam, elas empurram a superfície do terreno para cima. No caso dos Andes, uma placa chegou a subir em cima da outra."
          }
        ]
      },
      {
        "id": "cie10",
        "module": 10,
        "title": "Observando o céu diurno",
        "theory": [
          {
            "h": "Os corpos celestes",
            "p": [
              "A <strong>Astronomia</strong> é a área da ciência que estuda os astros. Chamamos de astros todos os corpos celestes que estão no espaço.",
              "<strong>Estrelas:</strong> astros que têm <strong>luz própria</strong>. Existem muitos tipos, de diferentes cores e tamanhos. O Sol é a estrela mais próxima da Terra.",
              "<strong>Planetas:</strong> corpos celestes que giram em torno de uma estrela e <strong>não têm luz própria</strong>. Saturno e a Terra são planetas.",
              "<strong>Satélites:</strong> corpos celestes que gravitam em torno de outro, geralmente um planeta. A Lua é o satélite natural da Terra.",
              "<strong>Cometas:</strong> esferas de poeira e gelo, que podem apresentar rochas em sua composição. Viajam ao redor do Sol.",
              "<strong>Asteroides:</strong> corpos celestes que viajam pelo espaço girando ao redor do Sol.",
              "<strong>Estrelas cadentes:</strong> são meteoros, corpos celestes originados de asteroides. O rastro brilhante de luz se forma quando o meteoro se aproxima da Terra e se incendeia."
            ]
          },
          {
            "h": "O Sol e sua influência na Terra",
            "p": [
              "O Sol é a estrela mais próxima da Terra e o centro do Sistema Solar. Ao penetrar na atmosfera, a luz solar <strong>aquece o planeta</strong>, permitindo uma temperatura adequada à vida. Se não fosse pelo calor do Sol, não teríamos água no estado líquido, essencial para a manutenção da vida.",
              "A luz solar também é usada na <strong>fotossíntese</strong>, processo pelo qual as plantas produzem alimento. As plantas servem de alimento para muitos animais, que podem servir de alimento para outros. Assim, a luz solar sustenta a maior parte das cadeias alimentares."
            ]
          },
          {
            "h": "Os astros se movimentam",
            "p": [
              "Ao observar o Sol durante o dia, temos a impressão de que ele se movimenta no céu — o mesmo ocorre com a Lua e as estrelas à noite. Esse é o <strong>movimento aparente</strong> dos astros: eles não se movem no horizonte; a impressão vem do movimento de <strong>rotação</strong> realizado pela Terra, que gira ao redor de si mesma como um pião.",
              "Por causa da rotação, ao longo de um dia uma parte da Terra é iluminada pelo Sol enquanto a outra fica no escuro: temos o dia na parte iluminada e a noite na parte escura. Esse giro leva cerca de <strong>24 horas</strong> e ocorre de oeste para leste.",
              "Além da rotação, a Terra realiza o movimento de <strong>translação</strong>, em que se move em torno do Sol. Uma volta completa demora aproximadamente <strong>um ano, ou 365 dias</strong>. O caminho percorrido é chamado de <strong>órbita da Terra</strong>."
            ]
          },
          {
            "h": "Os pontos cardeais",
            "p": [
              "O movimento aparente dá a impressão de que os astros surgem do lado direito e se põem do lado esquerdo — aproximadamente de <strong>leste para oeste</strong>.",
              "Sabendo onde o Sol nasce, é possível encontrar os <strong>pontos cardeais</strong>. Posicione-se com os braços abertos em forma de cruz: o braço <strong>direito</strong> aponta para o <strong>leste</strong> (onde o Sol nasce), o braço <strong>esquerdo</strong> para o <strong>oeste</strong> (onde o Sol se põe), à sua <strong>frente</strong> estará o <strong>norte</strong> e às suas <strong>costas</strong>, o <strong>sul</strong>."
            ]
          },
          {
            "h": "O céu diurno",
            "p": [
              "Por que o céu é azul durante o dia? Isso acontece por causa da luz do Sol, que é composta das cores do arco-íris. Ao entrar na atmosfera, a luz solar se <strong>espalha em todas as direções</strong> por causa das partículas de ar e poeira. A <strong>luz azul se espalha mais</strong> do que as outras, por isso o céu parece azul para nós.",
              "Durante o dia não conseguimos ver todos os astros, nem aqueles que refletem a luz solar (chamados de <strong>iluminados</strong>), porque a luz do Sol é tão forte que ofusca a luz refletida por eles.",
              "As <strong>nuvens</strong> são formadas por pequenas gotas de água ou cristais de gelo suspensos no ar. Podem ter diferentes formas e tamanhos: algumas são brancas e fofas como algodão; outras são escuras e costumam sinalizar a chegada de chuva."
            ]
          },
          {
            "h": "O céu e a poluição do ar",
            "p": [
              "A poluição do ar é causada por substâncias prejudiciais liberadas na atmosfera, como a queima de vegetação e a fumaça de carros e fábricas.",
              "Quando está poluído, o ar muda a aparência do céu diurno, tornando-o mais escuro, com tons de cinza ou marrom, e escondendo o Sol. Também dificulta a observação de elementos distantes, como montanhas e edifícios altos. A convivência frequente com o ar poluído pode afetar o humor e a saúde, causando ou agravando <strong>problemas respiratórios</strong>."
            ]
          },
          {
            "h": "Instrumentos para observar o céu",
            "p": [
              "Só com os olhos é muito difícil diferenciar as estrelas dos demais astros. Para uma observação mais detalhada usamos <strong>binóculos, lunetas e telescópios</strong>. Atenção: nunca devemos olhar diretamente para o Sol — isso pode causar danos à retina!",
              "O <strong>telescópio</strong> aumenta a imagem dos objetos, facilitando a identificação dos astros. Os equipamentos potentes usados por astrônomos permitem estimar a idade de uma estrela, por quanto tempo ela ainda vai existir, sua fase do ciclo de vida (nascimento, evolução e morte), do que ela é feita e a que distância se encontra.",
              "<strong>Telescópios ópticos</strong> utilizam lentes ou espelhos para focar a luz visível. São os mais comuns, encontrados em observatórios e até em versões menores para uso amador.",
              "<strong>Telescópios espaciais:</strong> como a atmosfera dificulta a observação, os astrônomos passaram a colocar telescópios em órbita ao redor da Terra. O <strong>Kepler</strong> ficou quase dez anos em operação e permitiu a descoberta de mais de 2.600 planetas fora do Sistema Solar. Outros exemplos são o <strong>Hubble</strong> e o <strong>James Webb</strong>."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Quem é quem no espaço",
            "instructions": "Ligue cada corpo celeste à sua característica.",
            "pairs": [
              [
                "Estrela",
                "Tem luz própria — como o Sol"
              ],
              [
                "Planeta",
                "Gira em torno de uma estrela, sem luz própria"
              ],
              [
                "Satélite",
                "Gravita em torno de um planeta — como a Lua"
              ],
              [
                "Cometa",
                "Esfera de poeira e gelo que viaja ao redor do Sol"
              ],
              [
                "Estrela cadente",
                "Meteoro que se incendeia perto da Terra"
              ],
              [
                "Asteroide",
                "Corpo rochoso que gira ao redor do Sol"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Rotação ou translação?",
            "instructions": "Arraste cada característica para o movimento correspondente.",
            "categories": [
              "Rotação",
              "Translação"
            ],
            "items": [
              {
                "text": "A Terra gira em torno de si mesma",
                "cat": 0
              },
              {
                "text": "A Terra se move ao redor do Sol",
                "cat": 1
              },
              {
                "text": "Dura cerca de 24 horas",
                "cat": 0
              },
              {
                "text": "Dura cerca de 365 dias",
                "cat": 1
              },
              {
                "text": "Determina a duração do dia",
                "cat": 0
              },
              {
                "text": "Determina a duração do ano",
                "cat": 1
              },
              {
                "text": "Causa o movimento aparente do Sol",
                "cat": 0
              },
              {
                "text": "O caminho é chamado de órbita",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Por que o Sol, a Lua e as estrelas parecem atravessar o céu?",
            "options": [
              "Porque a Terra gira em torno de si mesma",
              "Porque todos giram ao redor da Terra a cada dia",
              "Porque o vento empurra os astros",
              "Porque as nuvens movimentam o céu"
            ],
            "answer": 0,
            "explain": "A rotação da Terra cria o movimento aparente dos astros. Enquanto a Terra gira, temos a impressão de que eles atravessam o céu."
          },
          {
            "type": "mc",
            "q": "A respeito do céu diurno e da observação do céu, marque a alternativa correta.",
            "options": [
              "Sempre vemos o Sol e a Lua juntos",
              "A poluição facilita a observação do céu",
              "Óculos escuros servem para observar o Sol",
              "Nunca devemos olhar diretamente para o Sol"
            ],
            "answer": 3,
            "explain": "Olhar direto para o Sol pode danificar a retina. A poluição DIFICULTA a observação, e óculos escuros não ampliam imagem nenhuma — só binóculos, lunetas e telescópios fazem isso."
          },
          {
            "type": "mc",
            "q": "Quais são os quatro pontos cardeais?",
            "options": [
              "Norte, sul, leste e oeste",
              "Norte, sul, alto e baixo",
              "Leste, oeste, perto e longe",
              "Direita, esquerda, norte e sul"
            ],
            "answer": 0,
            "explain": "Os quatro pontos cardeais são norte, sul, leste e oeste. Eles ajudam a indicar direções."
          },
          {
            "type": "text",
            "q": "Como se chama o movimento que a Terra faz ao redor de si mesma, girando como um pião?",
            "answers": [
              "rotacao",
              "a rotacao",
              "movimento de rotacao"
            ],
            "explain": "É a rotação. Ela dura cerca de 24 horas, determina a duração do dia e é a responsável pelo movimento aparente dos astros no céu."
          },
          {
            "type": "text",
            "q": "Como se chama o movimento que a Terra faz ao redor do Sol, que dura aproximadamente 365 dias?",
            "answers": [
              "translacao",
              "a translacao",
              "movimento de translacao"
            ],
            "explain": "É a translação, que determina a duração do ano. O caminho percorrido pela Terra nesse movimento é chamado de órbita."
          },
          {
            "type": "text",
            "q": "Se você abrir os braços em cruz com o braço direito apontando para o leste, para que ponto cardeal estará apontando o braço esquerdo?",
            "answers": [
              "oeste",
              "o oeste",
              "para o oeste"
            ],
            "explain": "O braço esquerdo aponta para o oeste, onde o Sol se põe. À sua frente estará o norte e às suas costas, o sul."
          },
          {
            "type": "mc",
            "q": "Por que o céu é azul durante o dia?",
            "options": [
              "Porque a atmosfera é feita de gás azul",
              "Porque a luz azul se espalha mais na atmosfera",
              "Porque o céu reflete a cor dos oceanos",
              "Porque as nuvens escondem as outras cores"
            ],
            "answer": 1,
            "explain": "A luz do Sol tem várias cores. Na atmosfera, a luz azul se espalha mais e predomina no céu que enxergamos."
          },
          {
            "type": "text",
            "q": "Como se chama o processo pelo qual as plantas usam a luz solar para produzir seu alimento?",
            "answers": [
              "fotossintese",
              "a fotossintese"
            ],
            "explain": "É a fotossíntese. Ela é a base da alimentação de quase todos os seres vivos: as plantas viram alimento dos animais, que viram alimento de outros animais."
          },
          {
            "type": "mc",
            "q": "Por que os astrônomos enviam telescópios para o espaço, como o Kepler, o Hubble e o James Webb?",
            "options": [
              "Porque no espaço eles ficam mais próximos das estrelas",
              "Porque a atmosfera muitas vezes dificulta a observação dos astros a partir da Terra",
              "Porque telescópios não funcionam com gravidade",
              "Porque na Terra não existem observatórios"
            ],
            "answer": 1,
            "explain": "A atmosfera atrapalha a observação. Em órbita, livre dela, o Kepler permitiu descobrir mais de 2.600 planetas fora do Sistema Solar em quase dez anos de operação."
          }
        ]
      },
      {
        "id": "cie11",
        "module": 11,
        "title": "Observando o céu noturno",
        "theory": [
          {
            "h": "Astros visíveis durante a noite",
            "p": [
              "No céu noturno, além de estrelas e da Lua, podemos observar nuvens e outros astros: <strong>planetas</strong> (corpos celestes que orbitam o Sol) e <strong>cometas</strong> (que, ao se aproximarem do Sol, podem apresentar uma cauda brilhante visível da Terra). Numa mesma noite é possível ver a Lua ao lado de Júpiter e Vênus.",
              "Ao observar as estrelas e a Lua com atenção, notamos que elas parecem se movimentar no céu. Do Brasil, esse movimento é percebido no sentido <strong>leste-oeste</strong>. É o <strong>movimento aparente</strong>: na verdade quem se movimenta é a Terra, em seu movimento de rotação.",
              "Alguns fatores atrapalham a observação do céu noturno: a presença de nuvens, a chuva e outros fenômenos atmosféricos, como a neblina e os raios."
            ]
          },
          {
            "h": "Por que as estrelas só aparecem à noite?",
            "p": [
              "As estrelas <strong>não brilham apenas à noite</strong> — elas brilham o tempo inteiro. Só conseguimos enxergá-las depois que o Sol se põe porque, durante o dia, a luz solar se espalha pela atmosfera e impede que vejamos o que acontece no espaço.",
              "O Sol é a única estrela que vemos no céu durante o dia. Lembre-se: <strong>nunca olhe diretamente para o Sol</strong>, isso pode causar sérios danos aos seus olhos!",
              "E por que as estrelas brilham? Elas são <strong>esferas de gás quente</strong>. Próximo ao centro delas a temperatura é altíssima, o que faz o gás que as compõe se transformar em outro. Esse processo gera energia em forma de <strong>calor e luz</strong> — e é essa a razão do brilho das estrelas."
            ]
          },
          {
            "h": "A Lua e suas fases",
            "p": [
              "A Lua é o único <strong>satélite natural</strong> da Terra. Satélites naturais são corpos celestes que orbitam um planeta ou outro astro e não têm luz própria. Na Lua não há seres vivos conhecidos. Existem pequenas quantidades de água, inclusive gelo em regiões muito frias, e sua atmosfera é muito fina.",
              "A aparência da Lua varia ao longo de um mês. Essas diferentes aparências são as <strong>fases da Lua</strong>, e cada uma dura cerca de <strong>sete dias</strong>. A Lua é iluminada pelo Sol e sua posição não é fixa — ela se movimenta. Assim, a região iluminada visível da Terra muda conforme a posição dela em relação ao Sol e à Terra.",
              "<strong>Lua cheia:</strong> a face da Lua está totalmente iluminada.",
              "<strong>Lua minguante:</strong> apenas uma parte da face está iluminada, com aparência da letra <strong>D</strong> (vista do hemisfério sul).",
              "<strong>Lua nova:</strong> não é visível no céu, pois a face voltada para nós não está iluminada pelo Sol.",
              "<strong>Lua crescente:</strong> somente parte da face está iluminada, com aparência da letra <strong>C</strong>. A região iluminada é oposta à da fase minguante."
            ]
          },
          {
            "h": "Poluição atmosférica e luminosa",
            "p": [
              "Nos grandes centros urbanos, observar os astros não é tão fácil quanto em um local afastado, como uma fazenda. Isso acontece por causa da <strong>poluição atmosférica</strong>, causada pelo modo de vida nas grandes cidades: a liberação de fumaça por muitos automóveis e diversas indústrias.",
              "Nas cidades também há <strong>poluição luminosa</strong>, que é o excesso de luzes artificiais. Principalmente nas vias públicas, ela atrapalha a visualização dos astros. Por isso, em regiões sem muita iluminação artificial é possível ver muito mais estrelas e corpos celestes do que nas cidades.",
              "Uma solução equilibrada não é eliminar toda a luz artificial — que é necessária para a segurança —, mas <strong>reduzir as fontes de luz</strong> desnecessárias e direcioná-las melhor."
            ]
          },
          {
            "h": "As luzes do planeta vistas do espaço",
            "p": [
              "As regiões mais artificialmente iluminadas do planeta são, em geral, as mais <strong>urbanizadas</strong>. As cidades tendem a se desenvolver ao longo das costas (regiões próximas aos oceanos) e de redes de transporte. Por isso, na imagem noturna da Terra, o contorno de muitos continentes é visível.",
              "Apesar de mais de um século desde a invenção da luz elétrica, algumas áreas permanecem pouco povoadas e, consequentemente, menos iluminadas: a <strong>Antártica</strong> é completamente escura; as selvas no interior da África e as florestas da América do Sul também são pouco iluminadas.",
              "A diferença na distribuição das populações tem relação com a geografia de cada lugar, envolvendo fatores como o <strong>clima</strong> e o <strong>relevo</strong>. As populações procuram ocupar regiões de fácil acesso e clima favorável; onde essas condições não existem, a permanência das pessoas é mais difícil.",
              "A observação dos astros sempre <strong>fascinou</strong> (encantou, atraiu) a humanidade — muitas histórias sobre o surgimento das estrelas foram criadas por povos antigos. Há cerca de cem anos, poderíamos olhar para o céu à noite e ver um espetáculo luminoso; hoje, muitas pessoas não conseguem observar os astros da cidade onde moram por causa da poluição luminosa."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "As fases da Lua",
            "instructions": "Ligue cada fase à sua descrição.",
            "pairs": [
              [
                "Lua cheia",
                "Face totalmente iluminada"
              ],
              [
                "Lua nova",
                "Não é visível no céu"
              ],
              [
                "Lua crescente",
                "Parte iluminada com formato de C"
              ],
              [
                "Lua minguante",
                "Parte iluminada com formato de D"
              ],
              [
                "Duração de cada fase",
                "Cerca de sete dias"
              ],
              [
                "Satélite natural",
                "Orbita um planeta e não tem luz própria"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Onde vejo mais estrelas?",
            "instructions": "Arraste cada local ou situação para o grupo certo.",
            "categories": [
              "Boa observação do céu",
              "Observação prejudicada"
            ],
            "items": [
              {
                "text": "Fazenda sem iluminação artificial",
                "cat": 0
              },
              {
                "text": "Centro de uma cidade grande",
                "cat": 1
              },
              {
                "text": "Noite de céu limpo no campo",
                "cat": 0
              },
              {
                "text": "Avenida cheia de postes e letreiros",
                "cat": 1
              },
              {
                "text": "Região da Antártica, sem cidades",
                "cat": 0
              },
              {
                "text": "Cidade com muita fumaça de indústrias",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Por que enxergamos melhor as estrelas depois que o Sol se põe?",
            "options": [
              "Porque o céu fica menos iluminado pela luz do Sol",
              "Porque as estrelas só produzem luz à noite",
              "Porque a Lua acende as estrelas",
              "Porque as estrelas se aproximam da Terra"
            ],
            "answer": 0,
            "explain": "O que impede de ver as estrelas durante o dia é a luz do Sol se espalhando pela atmosfera, não a poluição. Por isso, depois que o Sol se põe, elas se tornam visíveis."
          },
          {
            "type": "mc",
            "q": "Qual das seguintes afirmações sobre a poluição luminosa é verdadeira?",
            "options": [
              "A poluição luminosa não afeta os animais",
              "A poluição luminosa só ocorre em grandes cidades",
              "A poluição luminosa pode dificultar a observação de estrelas e planetas",
              "A poluição luminosa é causada apenas por lâmpadas incandescentes"
            ],
            "answer": 2,
            "explain": "A poluição luminosa é o excesso de luzes artificiais e atrapalha a visualização dos astros. Ela também afeta os animais, ocorre em qualquer local iluminado artificialmente e vem de todo tipo de lâmpada."
          },
          {
            "type": "mc",
            "q": "Em qual dos locais a seguir você teria a melhor chance de observar as estrelas no céu?",
            "options": [
              "Um parque de diversões em ambiente urbano",
              "Uma praia durante o dia",
              "Um local sem iluminação artificial",
              "O centro de uma cidade grande"
            ],
            "answer": 2,
            "explain": "Sem iluminação artificial não há poluição luminosa competindo com a luz das estrelas. Parques de diversões e centros urbanos são cheios de luzes, e de dia a luz do Sol ofusca tudo."
          },
          {
            "type": "mc",
            "q": "Como reduzir a poluição luminosa sem deixar as ruas escuras?",
            "options": [
              "Apagar todas as luzes da cidade",
              "Usar somente velas durante a noite",
              "Reduzir e direcionar melhor as luzes desnecessárias",
              "Manter todas as luzes acesas durante o dia"
            ],
            "answer": 2,
            "explain": "A iluminação pública é necessária para a segurança das pessoas. A solução equilibrada é reduzir e direcionar melhor as luzes desnecessárias — não apagar a cidade inteira."
          },
          {
            "type": "text",
            "q": "Em qual fase a Lua não é visível no céu, porque a face voltada para nós não está iluminada pelo Sol?",
            "answers": [
              "lua nova",
              "nova",
              "a lua nova",
              "fase nova"
            ],
            "explain": "É a lua nova. Nessa fase a Lua fica entre o Sol e a Terra, e a face iluminada é a que está voltada para o lado oposto ao nosso."
          },
          {
            "type": "text",
            "q": "Quantos dias dura aproximadamente cada fase da Lua? (escreva o número)",
            "answers": [
              "7",
              "sete",
              "7 dias",
              "sete dias"
            ],
            "explain": "Cada fase dura cerca de sete dias. As quatro fases juntas — nova, crescente, cheia e minguante — completam aproximadamente um mês."
          },
          {
            "type": "text",
            "q": "Por que as estrelas brilham? Complete: elas são esferas de ______ quente, e o processo que ocorre no centro delas gera energia em forma de calor e luz.",
            "answers": [
              "gas",
              "gases",
              "gas quente"
            ],
            "explain": "As estrelas são esferas de gás quente. Perto do centro a temperatura é altíssima, o que transforma o gás em outro e libera energia como calor e luz."
          },
          {
            "type": "text",
            "q": "Como se chama o único satélite natural da Terra?",
            "answers": [
              "lua",
              "a lua"
            ],
            "explain": "É a Lua. Ela orbita a Terra e não tem luz própria. Não há seres vivos conhecidos na Lua, mas existem pequenas quantidades de água, inclusive gelo."
          },
          {
            "type": "mc",
            "q": "Na imagem noturna da Terra vista do espaço, por que a Antártica aparece completamente escura?",
            "image": "assets/quiz-terra-noturna.webp",
            "imageAlt": "Planeta Terra à noite visto do espaço, com luzes nas regiões habitadas e a Antártica escura na parte inferior.",
            "imageCaption": "Compare as regiões iluminadas da Terra com a Antártica.",
            "options": [
              "Porque lá é sempre noite",
              "Porque é uma região muito fria e pouco povoada",
              "Porque não existe energia elétrica no continente",
              "Porque a poluição esconde todas as luzes"
            ],
            "answer": 1,
            "explain": "As regiões mais iluminadas são as mais urbanizadas. As populações ocupam lugares de fácil acesso e clima favorável — condições que a Antártica não oferece, por isso permanece quase sem ocupação."
          }
        ]
      }
    ]
  },
  {
    "id": "geografia",
    "nome": "Geografia",
    "cor": "--laranja",
    "capitulos": [
      {
        "id": "geo09",
        "module": 9,
        "title": "Conhecendo o município",
        "video": "assets/videos/geo09-descobrindo-o-municipio.mp4",
        "theory": [
          {
            "h": "O que é município?",
            "p": [
              "O Brasil é dividido em <strong>26 estados e o Distrito Federal</strong>. Cada estado é composto de diversos municípios. Isso significa que o município é uma das <strong>menores porções do território brasileiro</strong> e faz parte da divisão político-administrativa do país.",
              "O município é composto de <strong>áreas urbanas e rurais</strong>. Essas áreas contêm bairros ou comunidades, que são os locais onde as pessoas moram e realizam as atividades do dia a dia.",
              "Os municípios são administrados por <strong>prefeito e vereadores</strong>, eleitos a cada quatro anos pela população. Eles cuidam dos serviços de saúde, educação, lazer e transporte, oferecidos tanto aos moradores da área urbana quanto aos da área rural."
            ]
          },
          {
            "h": "Município e cidade não são a mesma coisa",
            "p": [
              "Município e cidade muitas vezes são tratados como sinônimos, mas não são. A <strong>cidade é a área urbana do município</strong> e, em geral, abriga a maior parte da população que vive nele.",
              "Alguns municípios têm áreas urbanas muito extensas, com pouca (ou quase nenhuma) área rural. É o caso de São Paulo: como a área urbana ocupa grande parte do município, ele é muitas vezes chamado de 'cidade de São Paulo'."
            ]
          },
          {
            "h": "A área urbana",
            "p": [
              "A área urbana corresponde à porção do município ocupada pela cidade. É caracterizada pela ocupação humana <strong>contínua</strong> (aquilo que não se divide, que não é interrompido), com casas grandes e pequenas, edifícios altos e baixos e galpões. Há também espaços públicos — ruas, avenidas, praças e parques — e espaços de cultura, esporte e lazer, como cinemas, teatros e estádios.",
              "As áreas urbanas costumam abrigar muitos moradores, o que faz com que sejam <strong>adensadas</strong> (cheias, aglomeradas): há grande quantidade de pessoas vivendo em um mesmo espaço. O bairro de Copacabana, no Rio de Janeiro, é um dos mais adensados do Brasil.",
              "Além das construções, as áreas urbanas apresentam grande variedade de atividades econômicas. Essas atividades geram impactos: as indústrias e a circulação de carros e ônibus são as principais responsáveis pela <strong>poluição do ar</strong> nas áreas urbanas. Outro problema comum é a poluição dos rios pelo lixo descartado incorretamente."
            ]
          },
          {
            "h": "A área rural",
            "p": [
              "A área rural corresponde à parte do município destinada às atividades econômicas típicas do <strong>campo</strong>: agricultura, pecuária e extrativismo. Essas atividades são chamadas <strong>primárias</strong>, pois exploram os recursos da natureza para produzir alimentos e matérias-primas.",
              "Ao contrário das áreas urbanas, as rurais têm baixa concentração de pessoas, construções, indústrias, comércio e serviços — por isso são consideradas <strong>pouco adensadas</strong>. As construções são <strong>esparsas</strong>, ou seja, longe umas das outras. Há vários tipos de propriedades: ranchos, sítios, chácaras e fazendas, com plantações, pastagens, moradias, curral, chiqueiro e galinheiro.",
              "Os elementos naturais (rios, córregos, lagos, lagoas, florestas e montanhas) são mais fáceis de observar nas áreas rurais, pois foram menos modificados pelas atividades humanas. Mesmo assim, elas geram impactos: o principal é o <strong>desmatamento</strong>, quando florestas são retiradas para abrir espaço a plantações e pastagens."
            ]
          },
          {
            "h": "Atividades econômicas do campo",
            "p": [
              "<strong>Agricultura:</strong> produz alimentos e matérias-primas — frutas, grãos, cereais, legumes e verduras. Alguns produtos servem de matéria-prima para as indústrias, como a cana-de-açúcar, transformada em álcool combustível. Pode ser feita com trabalho manual (enxada) ou com máquinas, como o trator.",
              "<strong>Pecuária:</strong> criação de animais para produção de alimentos e matérias-primas. Bois, vacas, cabras, porcos, galinhas e ovelhas são os principais animais criados; os produtos são carne, leite, queijo, ovos, lã e couro.",
              "<strong>Extrativismo:</strong> exploração dos recursos da natureza. Divide-se em <strong>mineral</strong> (minérios das rochas, como ferro e sal), <strong>vegetal</strong> (partes de plantas e árvores, como óleo e madeira) e <strong>animal</strong> (exploração de animais, como a pesca)."
            ]
          },
          {
            "h": "Atividades econômicas da cidade",
            "p": [
              "<strong>Indústria:</strong> utiliza as matérias-primas extraídas da natureza e as transforma em diferentes produtos, com a ajuda de máquinas e ferramentas.",
              "<strong>Comércio:</strong> corresponde à troca, compra e venda de produtos diversos — alimentos, roupas, calçados, brinquedos, móveis — em lojas, supermercados, galerias, <em>shopping centers</em> e, cada vez mais, pela internet.",
              "<strong>Serviços:</strong> atendem às necessidades de saúde, educação, transporte, lazer, cultura e tecnologia das pessoas. O dentista, o professor e o motorista de ônibus são exemplos de profissionais que prestam serviços."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Onde acontece essa atividade?",
            "instructions": "Arraste cada atividade econômica para a área onde é típica.",
            "categories": [
              "Típica da área rural",
              "Típica da área urbana"
            ],
            "items": [
              {
                "text": "Agricultura",
                "cat": 0
              },
              {
                "text": "Indústria",
                "cat": 1
              },
              {
                "text": "Pecuária",
                "cat": 0
              },
              {
                "text": "Comércio",
                "cat": 1
              },
              {
                "text": "Extrativismo",
                "cat": 0
              },
              {
                "text": "Serviços de saúde e educação",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Palavras da Geografia",
            "instructions": "Ligue cada termo ao seu significado.",
            "pairs": [
              [
                "Adensado",
                "Cheio, com muita gente no mesmo espaço"
              ],
              [
                "Esparso",
                "Longe um do outro, espalhado"
              ],
              [
                "Contínuo",
                "Que não se divide nem é interrompido"
              ],
              [
                "Extrativismo mineral",
                "Retira minérios como ferro e sal"
              ],
              [
                "Extrativismo vegetal",
                "Retira óleo e madeira das plantas"
              ],
              [
                "Atividade primária",
                "Explora recursos direto da natureza"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Marque a alternativa correta sobre o município:",
            "options": [
              "O município é uma divisão político-administrativa do Brasil",
              "O Brasil possui somente 26 municípios",
              "Cada município contém vários estados",
              "O município possui apenas área urbana"
            ],
            "answer": 0,
            "explain": "O Brasil tem 26 estados e o Distrito Federal — e cada estado contém vários municípios, não o contrário. O município é composto de áreas urbanas E rurais."
          },
          {
            "type": "mc",
            "q": "Essa atividade é bastante comum em áreas urbanas e corresponde à compra, venda e troca de produtos. Que atividade econômica é essa?",
            "options": [
              "Agricultura",
              "Comércio",
              "Indústria",
              "Pecuária"
            ],
            "answer": 1,
            "explain": "O comércio é a troca, compra e venda de produtos em lojas, supermercados e shoppings. A indústria transforma matérias-primas; agricultura e pecuária são atividades rurais."
          },
          {
            "type": "mc",
            "q": "Uma ilustração mostra uma máquina derrubando árvores, deixando o terreno cheio de tocos. Que produto está sendo extraído e qual impacto ambiental essa extração provoca?",
            "image": "assets/quiz-desmatamento.webp",
            "imageAlt": "Máquina florestal carregando um tronco em área com árvores cortadas, vários tocos e toras empilhadas.",
            "imageCaption": "Observe o que está sendo retirado da floresta e como o terreno ficou.",
            "options": [
              "Sal e poluição do ar",
              "Madeira e desmatamento",
              "Peixes e poluição da água",
              "Alimentos e contaminação do solo"
            ],
            "answer": 1,
            "explain": "É extrativismo vegetal: a madeira é retirada das árvores. Quando grandes áreas de floresta são derrubadas, ocorre o desmatamento, principal impacto ambiental das áreas rurais."
          },
          {
            "type": "mc",
            "q": "Um bairro tem muitos moradores e construções próximas. Como podemos descrever essa área?",
            "options": [
              "Densamente povoada",
              "Desabitada",
              "Rural e dispersa",
              "Sem ocupação"
            ],
            "answer": 0,
            "explain": "Adensada significa cheia, aglomerada. As áreas rurais, ao contrário, são pouco adensadas: as construções ficam esparsas, longe umas das outras."
          },
          {
            "type": "text",
            "q": "Como se chama a atividade rural de criação de bois, vacas, porcos e galinhas para produzir carne, leite, ovos e couro?",
            "answers": [
              "pecuaria",
              "a pecuaria"
            ],
            "explain": "É a pecuária. Junto com a agricultura e o extrativismo, é uma das três atividades primárias típicas da área rural."
          },
          {
            "type": "mc",
            "q": "Quais são os três tipos de extrativismo?",
            "options": [
              "Urbano, rural e industrial",
              "Mineral, vegetal e animal",
              "Primário, secundário e terciário",
              "Manual, mecânico e digital"
            ],
            "answer": 1,
            "explain": "O extrativismo mineral retira minérios das rochas (ferro, sal); o vegetal, partes das plantas (óleo, madeira); o animal explora animais, como na pesca."
          },
          {
            "type": "text",
            "q": "Qual é a diferença entre município e cidade? Complete: a cidade é a área ______ do município.",
            "answers": [
              "urbana",
              "urbano",
              "a area urbana"
            ],
            "explain": "A cidade é a área urbana do município. O município é maior: inclui a cidade (área urbana) e também a área rural."
          },
          {
            "type": "mc",
            "q": "Nas áreas rurais é mais fácil observar rios, florestas e montanhas. Por quê?",
            "options": [
              "Porque só existem elementos naturais no campo",
              "Porque foram menos modificados pelas atividades humanas",
              "Porque as cidades não têm rios",
              "Porque a área rural é sempre maior"
            ],
            "answer": 1,
            "explain": "Nas áreas rurais há menos construções e menos concentração de pessoas, então a paisagem natural foi menos alterada. Nas cidades os rios muitas vezes foram canalizados ou poluídos."
          },
          {
            "type": "mc",
            "q": "Quem administra o município e de quanto em quanto tempo é eleito?",
            "options": [
              "Prefeito e vereadores, eleitos a cada quatro anos",
              "Governador e deputados, eleitos a cada dois anos",
              "Presidente e senadores, eleitos a cada cinco anos",
              "Apenas o prefeito, eleito a cada oito anos"
            ],
            "answer": 0,
            "explain": "Prefeito e vereadores são eleitos pela população a cada quatro anos e cuidam dos serviços de saúde, educação, lazer e transporte para toda a população do município."
          }
        ]
      },
      {
        "id": "geo10",
        "module": 10,
        "title": "A população do município",
        "video": "assets/videos/geo10-o-nosso-municipio.mp4",
        "theory": [
          {
            "h": "O que é população?",
            "p": [
              "<strong>População</strong> é o conjunto de pessoas que vivem em um mesmo local, como um município, um estado ou um país.",
              "A população pode ser dividida de várias maneiras. Por <strong>idade</strong>, temos população infantil, jovem, adulta e idosa. Por <strong>local de moradia</strong>, temos população urbana (a que vive na cidade) e população rural (a que vive no campo).",
              "Atualmente, no Brasil, a maior parte da população é <strong>urbana</strong>, e esse número tem crescido rapidamente. Já a população rural vem diminuindo no país."
            ]
          },
          {
            "h": "O censo demográfico",
            "p": [
              "Para conhecer a população total de um local, é preciso realizar uma pesquisa. No Brasil, ela se chama <strong>censo demográfico</strong> e é realizada pelo <strong>IBGE</strong> (Instituto Brasileiro de Geografia e Estatística) a cada <strong>10 anos</strong>.",
              "Quantas pessoas vivem no Brasil? Como vivem? Onde vivem? Para descobrir, os <strong>recenseadores</strong> (pessoas que trabalham coletando dados por meio de entrevistas) visitam os <strong>domicílios</strong> (residências) de todos os municípios e fazem perguntas sobre idade, trabalho, cor, raça e outras.",
              "As informações do censo ajudam o governo a compreender as características da população e a tomar as melhores decisões. Por exemplo: se um bairro tem muitas crianças, é ali que se devem construir escolas; se outro tem muitos idosos, é ali que fazem falta espaços de lazer para essa faixa etária."
            ]
          },
          {
            "h": "O jeito de viver no campo",
            "p": [
              "O dia a dia no campo costuma ser menos agitado do que na cidade. As atividades de trabalho da população rural estão mais ligadas aos <strong>ritmos da natureza</strong> (tempo, intervalo entre os acontecimentos): o dia e a noite, as estações do ano e o período de chuva.",
              "O agricultor precisa da luz do dia para irrigar as plantas e colher os alimentos — tarefas difíceis de fazer à noite. Por isso, muitas famílias rurais acordam bem cedo para aproveitar todo o período de luz natural do Sol.",
              "O descanso e o lazer nas áreas rurais geralmente acontecem junto à natureza: tomar banho em rios, lagos e cachoeiras, pescar, andar a cavalo, caminhar e participar de festas locais."
            ]
          },
          {
            "h": "O jeito de viver na cidade",
            "p": [
              "Nas cidades, as atividades não dependem tanto do ritmo da natureza. Muitas pessoas trabalham em locais fechados — escritórios, lojas, supermercados, hospitais e escolas —, por isso é possível trabalhar, estudar e realizar tarefas tanto de dia como à noite.",
              "A circulação também é mais intensa: há muitos pedestres, automóveis, ônibus, motocicletas e bicicletas se deslocando pelas ruas e avenidas. A população costuma dizer que a vida nas cidades é <strong>muito agitada</strong>.",
              "Para o lazer da população urbana existem parques e praças, além de cinemas, teatros, <em>shopping centers</em>, museus e estádios."
            ]
          },
          {
            "h": "As migrações",
            "p": [
              "<strong>Migração</strong> é o movimento de pessoas que deixam o local onde nasceram (<strong>lugar de origem</strong>) e buscam um novo local para viver (<strong>lugar de destino</strong>). Esse movimento pode ser <strong>temporário</strong> (alguns meses ou anos) ou <strong>permanente</strong> (que dura para sempre).",
              "Vários fatores levam à decisão de migrar. O <strong>clima</strong> é um deles: a seca ou o excesso de chuva prejudicam as atividades do campo, e as famílias buscam outro lugar para cultivar e criar animais. A <strong>falta de emprego</strong> é outro fator importante: muitas pessoas migram para onde existem mais oportunidades de trabalho.",
              "As migrações entre o campo e a cidade já foram muito comuns no Brasil. Muitas famílias saíram das áreas rurais por causa da seca ou da dificuldade de encontrar trabalho, migrando para as cidades em busca de emprego nas indústrias, no comércio e nos serviços. Assim, muitas cidades brasileiras cresceram bastante. Isso ainda acontece hoje, mas não de forma tão intensa como antigamente."
            ]
          },
          {
            "h": "Migrações e mistura de culturas",
            "p": [
              "Quando as pessoas migram, além da bagagem, elas levam consigo as <strong>características culturais</strong> do lugar de origem. Assim, o lugar de destino se transforma com a mistura de diferentes culturas.",
              "<strong>Nas construções:</strong> a prefeitura de Blumenau (SC) tem estilo enxaimel, trazido pelos imigrantes alemães que chegaram nos séculos 19 e 20. Em Registro (SP) há um templo budista japonês, herança dos imigrantes do Japão.",
              "<strong>Nas festas:</strong> São Paulo e Rio de Janeiro receberam muitos migrantes nordestinos e hoje abrigam festas e feiras típicas dessas tradições, como a Feira de São Cristóvão.",
              "<strong>Na culinária:</strong> o acarajé, prato muito comum na Bahia, teve origem na África e foi trazido pelos africanos que foram forçados a vir ao Brasil como escravizados."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Campo ou cidade?",
            "instructions": "Arraste cada característica para o modo de vida correspondente.",
            "categories": [
              "Modo de vida rural",
              "Modo de vida urbano"
            ],
            "items": [
              {
                "text": "Trabalho segue o ritmo da natureza",
                "cat": 0
              },
              {
                "text": "Circulação intensa de veículos",
                "cat": 1
              },
              {
                "text": "Acorda cedo para usar a luz do Sol",
                "cat": 0
              },
              {
                "text": "É possível trabalhar de dia e à noite",
                "cat": 1
              },
              {
                "text": "Lazer em rios e cachoeiras",
                "cat": 0
              },
              {
                "text": "Lazer em cinemas e shoppings",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Heranças das migrações",
            "instructions": "Ligue cada elemento cultural à sua origem.",
            "pairs": [
              [
                "Prefeitura de Blumenau (SC)",
                "Imigrantes alemães"
              ],
              [
                "Templo budista de Registro (SP)",
                "Imigrantes japoneses"
              ],
              [
                "Acarajé da Bahia",
                "Povos africanos"
              ],
              [
                "Feira de São Cristóvão (RJ)",
                "Migrantes nordestinos"
              ],
              [
                "Censo demográfico",
                "Pesquisa do IBGE a cada 10 anos"
              ],
              [
                "Recenseador",
                "Coleta dados por entrevistas"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Assinale a alternativa que apresenta características do jeito de viver da população URBANA.",
            "options": [
              "O trabalho está mais ligado ao ritmo da natureza",
              "A circulação de veículos em ruas e avenidas é intensa",
              "Geralmente é preciso da luz do dia para realizar as atividades de trabalho",
              "O descanso e o lazer são atividades geralmente feitas junto à natureza"
            ],
            "answer": 1,
            "explain": "As outras três descrevem a vida rural, onde o trabalho depende do Sol e das estações. Na cidade, muita gente trabalha em locais fechados e o trânsito é intenso o dia todo."
          },
          {
            "type": "mc",
            "q": "Assinale a alternativa correta sobre as migrações:",
            "options": [
              "Poucas pessoas já migraram no Brasil",
              "O clima nunca influencia uma migração",
              "A falta de trabalho pode levar pessoas a deixar o campo",
              "Não existem migrações entre campo e cidade"
            ],
            "answer": 2,
            "explain": "A migração campo-cidade foi muito comum no Brasil e ainda ocorre. O clima (seca ou excesso de chuva) e a falta de emprego são os dois principais fatores que levam as famílias a migrar."
          },
          {
            "type": "mc",
            "q": "Em que aspectos os imigrantes podem influenciar a cultura do lugar de destino?",
            "options": [
              "Na culinária, nas festas e nas construções",
              "Na duração dos dias e das noites",
              "No movimento dos planetas",
              "Na direção em que os rios correm"
            ],
            "answer": 0,
            "explain": "Quem migra leva conhecimentos e costumes. Essa influência pode aparecer na culinária, nas festas, nas construções e em outras práticas culturais."
          },
          {
            "type": "text",
            "q": "Como se chama a pesquisa feita pelo IBGE a cada 10 anos para conhecer a população brasileira?",
            "answers": [
              "censo demografico",
              "censo",
              "o censo demografico"
            ],
            "explain": "É o censo demográfico. Os recenseadores visitam os domicílios de todos os municípios e perguntam sobre idade, trabalho, cor e raça — dados que ajudam o governo a decidir onde investir."
          },
          {
            "type": "text",
            "q": "Como se chama o movimento de pessoas que deixam seu lugar de origem para viver em um novo lugar de destino?",
            "answers": [
              "migracao",
              "a migracao",
              "migracoes",
              "as migracoes"
            ],
            "explain": "É a migração. Ela pode ser temporária (dura alguns meses ou anos) ou permanente (dura para sempre)."
          },
          {
            "type": "mc",
            "q": "No censo do bairro Lapa (área urbana) há 100 crianças, 60 jovens, 120 adultos e nenhum idoso. No bairro Jardim (área rural) há 0 crianças, 10 jovens, 30 adultos e 30 idosos. Se você fosse prefeito por um dia, onde criaria espaços de lazer para idosos?",
            "options": [
              "Só no bairro Lapa",
              "Só no bairro Jardim",
              "Nos dois bairros",
              "Em nenhum dos dois"
            ],
            "answer": 1,
            "explain": "Os 30 idosos do município vivem todos no bairro Jardim; no bairro Lapa não há nenhum. É assim que o censo ajuda o prefeito a decidir onde investir o dinheiro público."
          },
          {
            "type": "text",
            "q": "Atualmente, no Brasil, a maior parte da população vive na cidade ou no campo? (responda: urbana ou rural)",
            "answers": [
              "urbana",
              "cidade",
              "na cidade",
              "populacao urbana"
            ],
            "explain": "A maior parte da população brasileira é urbana, e esse número continua crescendo rapidamente. A população rural vem diminuindo no país."
          },
          {
            "type": "text",
            "q": "Como se chama a pessoa que trabalha coletando os dados da população por meio de entrevistas nos domicílios?",
            "answers": [
              "recenseador",
              "recenseadora",
              "o recenseador",
              "recenseadores"
            ],
            "explain": "É o recenseador (ou recenseadora). Domicílio, por sua vez, é o nome técnico para residência — a casa onde as pessoas moram."
          },
          {
            "type": "mc",
            "q": "Por que as famílias que vivem no campo costumam acordar muito cedo?",
            "options": [
              "Porque não existe energia elétrica no campo",
              "Para aproveitar todo o período de luz natural do Sol no trabalho",
              "Porque as escolas rurais abrem de madrugada",
              "Porque no campo não é possível dormir tarde"
            ],
            "answer": 1,
            "explain": "O agricultor precisa da luz do dia para irrigar as plantas e colher os alimentos — tarefas difíceis de realizar à noite. O trabalho rural segue os ritmos da natureza."
          }
        ]
      },
      {
        "id": "geo11",
        "module": 11,
        "title": "Serviços e problemas do município",
        "theory": [
          {
            "h": "Serviços públicos e privados",
            "p": [
              "O <strong>serviço</strong> é um tipo de atividade que tem como principal objetivo atender às necessidades das pessoas. Nas áreas urbanas e rurais há serviços que mantêm os espaços públicos limpos e organizados e outros que atendem às necessidades cotidianas: transporte, saúde, educação, segurança, lazer e cultura.",
              "Os <strong>serviços públicos</strong> são prestados pelo poder público — a prefeitura ou os governos estadual e federal — e pagos com o dinheiro dos <strong>impostos</strong> (valor cobrado da população pelo poder público para bancar os custos desses serviços). O transporte público de Salvador e a iluminação pública de Pelotas são exemplos.",
              "Os <strong>serviços privados</strong> são prestados pela iniciativa privada: empresas particulares, grupos de pessoas ou indivíduos. Cabeleireiros e manicures oferecem serviços em salões; encanadores, eletricistas e pintores oferecem serviços de construção e manutenção.",
              "Alguns serviços podem ser prestados pelos dois lados: os médicos, por exemplo, trabalham tanto em clínicas particulares quanto em hospitais públicos."
            ]
          },
          {
            "h": "O caminho correto do lixo",
            "p": [
              "A coleta de lixo é um serviço público importante. O caminho adequado começa em casa, com a separação do lixo seco e do orgânico.",
              "Depois, a coleta recolhe o lixo e o leva para tratamento. Na <strong>triagem</strong>, os materiais recicláveis são separados. O que não pode ser reaproveitado segue para o aterro sanitário.",
              "Muitos municípios não conseguem prestar a coleta em todos os bairros. Sem esse serviço, a população acaba queimando o lixo ou descartando em terrenos baldios, ruas, córregos e rios.",
              "Ao se decompor, o lixo gera um resíduo líquido chamado <strong>chorume</strong>. No descarte incorreto, o chorume infiltra e contamina o solo e as águas dos rios, córregos e lagos. Queimar o lixo também é incorreto: libera poluentes no ar e pode causar incêndios.",
              "No <strong>aterro sanitário</strong>, o solo recebe um revestimento que impede a infiltração do chorume, que é coletado por tubos e tratado antes de voltar à natureza. Uma tubulação queima o gás metano gerado pela decomposição, e o lixo é coberto diariamente com terra para evitar mau cheiro e doenças. Quando o aterro é preenchido, pode-se fazer uma cobertura vegetal."
            ]
          },
          {
            "h": "Tratamento de água",
            "p": [
              "A água usada para beber e cuidar da higiene deve ser <strong>potável</strong>, isto é, própria para o consumo. Antes de chegar às casas, ela passa por várias etapas de tratamento.",
              "Primeiro vêm a <strong>captação</strong>, a <strong>floculação</strong> e a <strong>decantação</strong>, que ajudam a juntar e retirar a sujeira. Depois ocorrem a <strong>filtragem</strong>, a <strong>desinfecção</strong> e a <strong>distribuição</strong> pelos reservatórios e encanamentos.",
              "Tratar a água é fundamental para evitar a transmissão de doenças como diarreia e leptospirose. Também é preciso usá-la de forma consciente, evitando o desperdício."
            ]
          },
          {
            "h": "Tratamento de esgoto",
            "p": [
              "O tratamento de esgoto separa as partes líquida e sólida dos resíduos, diminuindo a poluição e devolvendo a água à natureza em boas condições.",
              "Nas <strong>áreas rurais</strong> é comum o uso de <strong>fossas sépticas</strong>: um tanque que recebe e armazena o esgoto, separa a parte líquida da sólida e purifica a água antes de lançá-la no ambiente.",
              "Nas <strong>áreas urbanas</strong>, o esgoto é coletado por tubulações e levado às <strong>estações de tratamento de esgoto (ETE)</strong>, onde passa por grades, caixa de areia, decantador primário, tanque de aeração e decantador secundário antes de voltar ao rio. Ainda há lugares no Brasil em que o esgoto é lançado na natureza sem tratamento, poluindo os recursos hídricos."
            ]
          },
          {
            "h": "Os quatro tipos de poluição",
            "p": [
              "<strong>Poluição atmosférica</strong> (atmosfera = camada de ar que envolve o planeta): provocada pelos poluentes das indústrias e da circulação de automóveis e ônibus, principalmente nas áreas urbanas.",
              "<strong>Poluição hídrica</strong> (hídrico = relativo à água): causada pelo lançamento de resíduos industriais nos rios sem tratamento e pelos <strong>defensivos agrícolas</strong> (produtos químicos usados nas plantações contra pragas e doenças).",
              "<strong>Poluição sonora</strong>: gerada pelo forte ruído de motores e buzinas, máquinas e equipamentos de construção e carros de som.",
              "<strong>Poluição visual</strong>: gerada pelo excesso de anúncios, cartazes, letreiros, placas, fiação e fachadas de lojas."
            ]
          },
          {
            "h": "Como cuidar do município",
            "p": [
              "<strong>Lixo:</strong> evitar o consumo excessivo de produtos, separar o material para a <strong>coleta seletiva</strong> e fazer o descarte correto nas lixeiras.",
              "<strong>Água:</strong> diminuir o tempo do banho, fechar a torneira ao escovar os dentes e não jogar óleo ou medicamentos no ralo da pia. Também é importante exigir do poder público a prestação de serviços adequados.",
              "<strong>Ar:</strong> usar meios de transporte não poluentes, como a bicicleta, ou fazer deslocamentos a pé. O transporte coletivo (ônibus, metrô, trem) também ajuda, pois leva muitas pessoas ao mesmo tempo.",
              "<strong>Ruído:</strong> buzinar apenas quando realmente necessário e usar fones de ouvido nos espaços públicos.",
              "<strong>Visual:</strong> comerciantes devem respeitar os espaços públicos e não colocar placas em locais proibidos; os moradores devem cobrar a fiscalização do poder público. Ruas arborizadas e sem excesso de placas e fios tornam os espaços mais agradáveis."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Que tipo de poluição é essa?",
            "instructions": "Arraste cada situação para o tipo de poluição que ela provoca.",
            "categories": [
              "Atmosférica",
              "Hídrica",
              "Sonora",
              "Visual"
            ],
            "items": [
              {
                "text": "Fumaça saindo de uma indústria",
                "cat": 0
              },
              {
                "text": "Esgoto lançado no rio sem tratamento",
                "cat": 1
              },
              {
                "text": "Buzinas e carros de som",
                "cat": 2
              },
              {
                "text": "Excesso de cartazes e letreiros",
                "cat": 3
              },
              {
                "text": "Defensivos agrícolas nas plantações",
                "cat": 1
              },
              {
                "text": "Escapamento de ônibus e carros",
                "cat": 0
              },
              {
                "text": "Britadeira em obra na rua",
                "cat": 2
              },
              {
                "text": "Fiação elétrica emaranhada",
                "cat": 3
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Etapas do tratamento de água",
            "instructions": "Ligue cada etapa ao que acontece nela.",
            "pairs": [
              [
                "Captação",
                "Retira a água do rio ou represa"
              ],
              [
                "Floculação",
                "Aglomera as partículas de sujeira"
              ],
              [
                "Decantação",
                "Partículas se depositam no fundo"
              ],
              [
                "Filtragem",
                "Passa por areia, cascalho e carvão"
              ],
              [
                "Desinfecção",
                "Adiciona cloro e flúor"
              ],
              [
                "Distribuição",
                "Leva a água até as casas"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual é uma característica dos serviços públicos?",
            "options": [
              "São mantidos com recursos dos impostos",
              "Pertencem sempre a uma única família",
              "Atendem somente aos donos de empresas",
              "São organizados apenas por lojas particulares"
            ],
            "answer": 0,
            "explain": "Os serviços públicos são organizados pelo poder público e mantidos com recursos dos impostos para atender às necessidades da população."
          },
          {
            "type": "mc",
            "q": "Qual é o destino adequado para o lixo gerado nos municípios?",
            "options": [
              "Queimar",
              "Jogar no rio",
              "Levar para os aterros sanitários",
              "Jogar na rua"
            ],
            "answer": 2,
            "explain": "O aterro sanitário tem proteção contra o chorume e cobertura de terra. Queimar ou abandonar o lixo pode poluir o ar, a água e o solo."
          },
          {
            "type": "mc",
            "q": "Uma ilustração mostra uma avenida engarrafada, com carros buzinando, um avião passando, alto-falantes e uma britadeira quebrando o asfalto — todos com marcas de ruído. Que tipo de poluição é mostrada?",
            "image": "assets/quiz-poluicao-sonora.webp",
            "imageAlt": "Avenida congestionada com carros, avião, alto-falante e trabalhador usando britadeira, todos representados como fontes de ruído.",
            "imageCaption": "Observe as diferentes fontes de som presentes na avenida.",
            "options": [
              "Poluição atmosférica",
              "Poluição sonora",
              "Poluição hídrica",
              "Poluição visual"
            ],
            "answer": 1,
            "explain": "As marcas de som saindo das buzinas, do avião, dos alto-falantes e da britadeira indicam poluição sonora: o excesso de ruído nas áreas urbanas."
          },
          {
            "type": "text",
            "q": "Como se chama o resíduo líquido, altamente poluente, gerado quando o lixo se decompõe na natureza?",
            "answers": [
              "chorume",
              "o chorume"
            ],
            "explain": "É o chorume. No descarte incorreto ele infiltra no solo e contamina rios, córregos e lagos. Por isso o aterro sanitário tem revestimento e tubos para coletá-lo e tratá-lo."
          },
          {
            "type": "text",
            "q": "Como se chama o valor cobrado da população pelo poder público para bancar os custos dos serviços públicos?",
            "answers": [
              "imposto",
              "impostos",
              "os impostos",
              "o imposto"
            ],
            "explain": "São os impostos. É com esse dinheiro que a prefeitura mantém o transporte, a iluminação pública, a coleta de lixo, as escolas e os postos de saúde."
          },
          {
            "type": "mc",
            "q": "Na área rural, o tratamento de esgoto é feito comumente por meio de:",
            "options": [
              "Estações de tratamento de esgoto (ETE)",
              "Fossas sépticas",
              "Aterros sanitários",
              "Usinas de triagem"
            ],
            "answer": 1,
            "explain": "A fossa séptica é um tanque que recebe o esgoto, separa a parte líquida da sólida e purifica a água. As ETEs, com grades e decantadores, são típicas das áreas urbanas."
          },
          {
            "type": "text",
            "q": "Qual é a primeira coisa que devemos fazer em casa para que o lixo siga o caminho correto?",
            "answers": [
              "separar o lixo",
              "separar o lixo seco do organico",
              "separar",
              "fazer a separacao do lixo",
              "separar o lixo seco do lixo organico",
              "coleta seletiva"
            ],
            "explain": "A etapa 1 é separar o lixo seco do orgânico em casa. Isso facilita a triagem na usina de tratamento e aumenta a quantidade de material que consegue ser reciclado."
          },
          {
            "type": "text",
            "q": "Como se chama a água própria para o consumo humano, obtida após todas as etapas de tratamento?",
            "answers": [
              "potavel",
              "agua potavel",
              "e potavel"
            ],
            "explain": "É a água potável. Ela passa por captação, floculação, decantação, filtragem, desinfecção e distribuição — processo que evita doenças como diarreia e leptospirose."
          },
          {
            "type": "mc",
            "q": "Qual atitude ajuda a diminuir a poluição atmosférica no município?",
            "options": [
              "Usar bicicleta ou transporte coletivo nos deslocamentos",
              "Queimar o lixo do quintal",
              "Buzinar sempre que houver trânsito",
              "Colocar mais cartazes nas fachadas"
            ],
            "answer": 0,
            "explain": "A bicicleta não emite poluentes, e o transporte coletivo leva muitas pessoas de uma vez, reduzindo o número de carros. Queimar lixo piora a poluição do ar; buzina é sonora e cartaz é visual."
          }
        ]
      }
    ]
  },
  {
    "id": "historia",
    "nome": "História",
    "cor": "--roxo",
    "capitulos": [
      {
        "id": "hist09",
        "module": 9,
        "title": "Dividindo espaços em comunidade",
        "video": "assets/videos/hist09-espacos-publicos-e-privados.mp4",
        "theory": [
          {
            "h": "A cidade é feita de espaços compartilhados",
            "p": [
              "As cidades são formadas por diferentes espaços: ruas, casas, prédios, praças e parques. Nesses lugares convivemos com pessoas que não fazem parte da nossa família e que, em geral, nem conhecemos.",
              "Para uma cidade existir, é preciso garantir que as necessidades dos habitantes sejam atendidas: moradia, água potável e saneamento básico, entre outras. Algumas cidades são <strong>planejadas</strong>, ou seja, pensadas com antecedência: onde ficará o governo? Onde as pessoas vão se encontrar para cerimônias religiosas? Onde vão se reunir para o lazer?"
            ]
          },
          {
            "h": "Da praça grega à democracia",
            "p": [
              "Na Antiguidade, os gregos se reuniam em <strong>praças públicas</strong> para discutir política. Mais tarde, essa prática deu origem à <strong>democracia</strong>: um governo em que os cidadãos se reúnem para tomar decisões e propor melhorias para a vida coletiva.",
              "Foi o uso dessas praças que fez surgir as ideias de <strong>público</strong> e <strong>privado</strong>."
            ]
          },
          {
            "h": "Espaço público",
            "p": [
              "<strong>Público</strong> é aquilo que pertence à comunidade. Escolas e faculdades públicas, hospitais, parques, praias, teatros, ruas e o transporte público (ônibus, trens e metrôs) são espaços pensados para uso coletivo — toda a população pode utilizá-los.",
              "O espaço público é de cuidado do governo <strong>e de todos os cidadãos</strong>. Hoje, a população também se reúne nas ruas para pedir mudanças e melhorias ao governo: as ruas servem para o trânsito e também para exercer nossos direitos políticos."
            ]
          },
          {
            "h": "Espaço privado",
            "p": [
              "O que é <strong>privado</strong> não pertence a todas as pessoas. Em geral, há acordos ou condições financeiras necessárias para usar esses lugares: sua casa, algumas escolas, faculdades, hospitais e clubes.",
              "Esses espaços têm <strong>proprietários</strong>, e para acessá-los é preciso seguir as normas e regras estabelecidas por eles. Em casa, é comum que a família crie regras para preservar os espaços e manter a harmonia — e essas regras valem também para as visitas."
            ]
          },
          {
            "h": "Museus e bibliotecas: conhecimento aberto",
            "p": [
              "Além do lazer, há espaços públicos importantes para a educação e para a divulgação de conhecimentos históricos e culturais. <strong>Museus e bibliotecas</strong> contam parte da história das comunidades e garantem acesso ao conhecimento.",
              "Dois exemplos: o <strong>Real Gabinete Português de Leitura</strong>, no Rio de Janeiro (RJ), fundado em 1837, e o <strong>Museu da Inconfidência</strong>, em Ouro Preto (MG), que ajuda a preservar a memória do passado brasileiro."
            ]
          },
          {
            "h": "A cidade é nossa — e tem regras",
            "p": [
              "Dizer que um espaço é público não significa que podemos fazer o que quisermos nele. Os espaços públicos têm <strong>regras</strong> criadas para assegurar a boa convivência entre pessoas diferentes, além de garantir a preservação do local e a segurança de todos. Ao seguir essas regras, exercemos a <strong>cidadania</strong>.",
              "Algumas atitudes para cuidar do bairro: não jogar lixo nas ruas; participar da coleta seletiva separando o lixo em casa; regar as plantas dos jardins e cuidar das árvores; recolher o cocô do cachorro no passeio; cobrar e acompanhar as ações dos políticos.",
              "Danificar o patrimônio público é proibido. O dinheiro usado para consertar o que foi destruído poderia ser investido em melhorias para a população. Por isso, cuidar do que pertence a todos é uma forma de respeitar a comunidade."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Público ou privado?",
            "instructions": "Arraste cada lugar para a coluna certa.",
            "categories": [
              "Espaço público",
              "Espaço privado"
            ],
            "items": [
              {
                "text": "Praça da cidade",
                "cat": 0
              },
              {
                "text": "Sua casa",
                "cat": 1
              },
              {
                "text": "Hospital municipal",
                "cat": 0
              },
              {
                "text": "Clube com mensalidade",
                "cat": 1
              },
              {
                "text": "Praia",
                "cat": 0
              },
              {
                "text": "Rua e transporte público",
                "cat": 0
              },
              {
                "text": "Escola particular",
                "cat": 1
              },
              {
                "text": "Biblioteca pública",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Cada espaço e sua função",
            "instructions": "Ligue o lugar à função que ele cumpre na cidade.",
            "pairs": [
              [
                "Museu",
                "Preserva a memória e a história"
              ],
              [
                "Biblioteca",
                "Garante acesso ao conhecimento"
              ],
              [
                "Praça",
                "Lazer e encontro da comunidade"
              ],
              [
                "Prefeitura",
                "Sede do governo do município"
              ],
              [
                "Hospital",
                "Cuida da saúde da população"
              ],
              [
                "Ônibus e metrô",
                "Transporte público coletivo"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Observando a ilustração de uma cidade com hospital municipal, escola municipal, banco, mercado, praça e casas, é possível afirmar que:",
            "image": "assets/quiz-cidade-espacos.webp",
            "imageAlt": "Cidade vista de cima com hospital, escola, banco, mercado, praça e casas distribuídos ao redor das ruas.",
            "imageCaption": "Observe os diferentes espaços da cidade antes de responder.",
            "options": [
              "há apenas um espaço público, o hospital municipal",
              "há apenas um espaço privado, o banco",
              "há espaços públicos, como o hospital, a escola e a praça",
              "há espaços privados, como as casas e a praça"
            ],
            "answer": 2,
            "explain": "Hospital municipal, escola municipal e praça são espaços públicos. Banco, mercado e casas são espaços privados."
          },
          {
            "type": "mc",
            "q": "Por que uma praia como a de São Conrado, no Rio de Janeiro, é um espaço público?",
            "options": [
              "Porque poucas pessoas a frequentam",
              "Porque pertence a todos os brasileiros",
              "Porque não pode ser frequentada por estrangeiros",
              "Porque pode ser frequentada por quem pagar pelo acesso"
            ],
            "answer": 1,
            "explain": "No Brasil, todas as praias são bens públicos: pertencem à coletividade e ninguém pode cobrar pelo acesso nem impedir a entrada de qualquer pessoa, brasileira ou estrangeira."
          },
          {
            "type": "mc",
            "q": "Entre as imagens de um hospital municipal, uma rua, um museu e uma casa, qual representa um espaço PRIVADO?",
            "options": [
              "O hospital municipal",
              "A rua",
              "O museu",
              "A casa"
            ],
            "answer": 3,
            "explain": "A casa tem proprietários e o acesso depende da autorização deles. Hospital municipal, rua e museu são espaços de uso coletivo, mantidos com dinheiro público."
          },
          {
            "type": "text",
            "q": "Como se chama o governo em que os cidadãos se reúnem para tomar decisões e propor melhorias para a vida coletiva — prática que nasceu nas praças da Grécia Antiga?",
            "answers": [
              "democracia",
              "a democracia"
            ],
            "explain": "É a democracia. Nas praças públicas da Grécia Antiga os cidadãos debatiam política, e essa prática deu origem à forma de governo que usamos até hoje."
          },
          {
            "type": "mc",
            "q": "Por que danificar um patrimônio público prejudica toda a comunidade?",
            "options": [
              "Porque o conserto usa recursos que poderiam melhorar outros serviços",
              "Porque somente os turistas podem usar esse patrimônio",
              "Porque o patrimônio passa a pertencer a uma empresa",
              "Porque ninguém precisa cuidar do que é público"
            ],
            "answer": 0,
            "explain": "O patrimônio público pertence à coletividade. Seu conserto usa recursos que poderiam melhorar outros serviços para a população."
          },
          {
            "type": "mc",
            "q": "Qual atitude ajuda a cuidar de uma praça pública?",
            "options": [
              "Levar o lixo até uma lixeira",
              "Riscar os bancos",
              "Arrancar as plantas",
              "Deixar embalagens no chão"
            ],
            "answer": 0,
            "explain": "Levar o lixo até a lixeira ajuda a manter a praça limpa e agradável para todas as pessoas."
          },
          {
            "type": "mc",
            "q": "O Real Gabinete Português de Leitura (RJ, 1837) e o Museu da Inconfidência (Ouro Preto, MG) são exemplos de espaços públicos ligados principalmente a:",
            "options": [
              "Esporte e competição",
              "Educação, cultura e memória",
              "Comércio e serviços bancários",
              "Moradia da população"
            ],
            "answer": 1,
            "explain": "Bibliotecas e museus contam parte da história das comunidades, preservam a memória do passado e garantem acesso ao conhecimento."
          },
          {
            "type": "text",
            "q": "Ao seguir as regras de convivência dos espaços públicos, estamos exercendo o quê?",
            "answers": [
              "cidadania",
              "a cidadania",
              "cidadania.",
              "exercendo a cidadania"
            ],
            "explain": "Estamos exercendo a cidadania: convivendo em harmonia com a sociedade, respeitando as regras que garantem a segurança e a preservação dos lugares que são de todos."
          }
        ]
      },
      {
        "id": "hist10",
        "module": 10,
        "title": "Espaços públicos e privados",
        "video": "assets/videos/hist10-espacos-e-regras-da-cidade.mp4",
        "theory": [
          {
            "h": "Quando a fronteira não é tão clara",
            "p": [
              "Já sabemos que espaços <strong>privados</strong> têm dono (como uma loja) e espaços <strong>públicos</strong> são administrados pelo governo e todos têm direito de frequentar. Mas em alguns casos é difícil diferenciar um do outro — e isso acontece por causa dos <strong>usos</strong> que fazemos desses espaços.",
              "Um bar ou restaurante é privado, pois tem dono, mas é frequentado por muita gente. As ruas e calçadas são públicas, onde todos podem circular livremente. Às vezes esses limites entram em conflito: mesas de bar, lixeiras, postes e patinetes espalhados podem impedir a livre circulação dos pedestres pelas calçadas."
            ]
          },
          {
            "h": "Espaços públicos de acesso restrito",
            "p": [
              "Existem espaços públicos com <strong>regras para serem frequentados</strong>. Uma praça pode ser frequentada por todas as pessoas, sem restrição. Já uma <strong>creche</strong> só pode ser frequentada por funcionários, pelas crianças matriculadas e por seus responsáveis.",
              "O mesmo vale para quase todos os prédios públicos: a Câmara dos Vereadores, a Prefeitura, os Correios e as escolas são espaços públicos, mas têm horário de funcionamento e regras de acesso. Dentro da escola há ainda restrições a certos espaços, como a sala dos professores."
            ]
          },
          {
            "h": "Espaços privados de uso público",
            "p": [
              "Em compensação, existem espaços <strong>privados que podem ser frequentados por qualquer pessoa</strong> em seu horário de funcionamento, porque qualquer um pode ser cliente: mercados, lojas, bares e <em>shopping centers</em>.",
              "Nem sempre, porém, as pessoas conseguem circular livremente. Um motivo é a <strong>discriminação</strong>: o Brasil tem grande desigualdade econômica, e em locais frequentados por classes sociais altas, pessoas de classes mais baixas podem não se sentir bem-vindas. Outro é a <strong>falta de acesso a meios de locomoção</strong> e a falta de acessibilidade (calçadas esburacadas, ausência de rampas)."
            ]
          },
          {
            "h": "Serviços públicos e privados",
            "p": [
              "Os serviços também podem ser públicos ou privados. Os governos são responsáveis por serviços fundamentais — como <strong>saúde e educação</strong> —, que não têm dono e podem ser usados por todos sem pagar. É por isso que existem escolas e hospitais públicos, além do <strong>SUS</strong>, responsável pelas campanhas de vacinação em todo o território brasileiro.",
              "Ônibus, trens e metrôs são <strong>transportes públicos coletivos</strong>. Em muitos lugares é preciso pagar passagem. Algumas pessoas têm gratuidade garantida por lei, e outras regras dependem do município. O táxi é um transporte privado de uso público."
            ]
          },
          {
            "h": "A Constituição garante direitos",
            "p": [
              "A <strong>Constituição</strong> é o conjunto das principais leis de um país. A brasileira foi publicada em <strong>1988</strong> e precisa ser respeitada por todos: governo e população.",
              "O <strong>Artigo 205</strong> garante que a educação é direito de todos e dever do Estado e da família. O <strong>Artigo 196</strong> garante que a saúde é direito de todos e dever do Estado."
            ]
          },
          {
            "h": "Quem administra o município",
            "p": [
              "A administração pública da cidade é responsabilidade do <strong>prefeito</strong> e dos <strong>vereadores</strong>, eleitos a cada quatro anos por voto direto. São os políticos mais próximos da população, e é dever dos cidadãos fiscalizar o trabalho deles.",
              "O <strong>prefeito</strong> cuida do patrimônio histórico e cultural, da limpeza da cidade e do saneamento básico. É responsabilidade da Prefeitura a educação básica (das creches ao Ensino Fundamental) e o primeiro atendimento de saúde, feito nos postos da rede municipal. O prefeito deve usar o dinheiro público, arrecadado pelos impostos, em benefício da população.",
              "A <strong>Câmara Municipal</strong> é o espaço público onde as leis da cidade são elaboradas, propostas e votadas pelos vereadores, que também fiscalizam o prefeito. A quantidade de vereadores depende do tamanho da cidade: Borá, a menor do Brasil, tem 9; São Paulo, a maior, tem 55. As sessões são públicas e todo cidadão pode participar."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Classifique o espaço",
            "instructions": "Nem tudo é só público ou privado. Arraste cada exemplo para a categoria certa.",
            "categories": [
              "Público de acesso livre",
              "Público de acesso restrito",
              "Privado de uso público"
            ],
            "items": [
              {
                "text": "Praça da cidade",
                "cat": 0
              },
              {
                "text": "Creche municipal",
                "cat": 1
              },
              {
                "text": "Shopping center",
                "cat": 2
              },
              {
                "text": "Rua e calçada",
                "cat": 0
              },
              {
                "text": "Câmara dos Vereadores",
                "cat": 1
              },
              {
                "text": "Supermercado",
                "cat": 2
              },
              {
                "text": "Praia",
                "cat": 0
              },
              {
                "text": "Sala dos professores",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Quem faz o quê no município",
            "instructions": "Ligue cada responsabilidade a quem cumpre.",
            "pairs": [
              [
                "Artigo 205 da Constituição",
                "Garante educação para todos"
              ],
              [
                "Artigo 196 da Constituição",
                "Garante saúde para todos"
              ],
              [
                "Vereadores",
                "Fazem as leis e fiscalizam o prefeito"
              ],
              [
                "Prefeito",
                "Administra a cidade e o dinheiro público"
              ],
              [
                "SUS",
                "Campanhas de vacinação no país todo"
              ],
              [
                "Câmara Municipal",
                "Onde as leis da cidade são votadas"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "O que significa dizer que uma escola é pública?",
            "options": [
              "Ela é mantida pelo poder público",
              "Ela pertence aos alunos matriculados",
              "Ela é administrada por uma loja",
              "Ela só pode receber visitantes"
            ],
            "answer": 0,
            "explain": "Uma escola pública é mantida pelo poder público para oferecer educação à população."
          },
          {
            "type": "mc",
            "q": "Ônibus, trens e metrôs são exemplos de transportes:",
            "options": [
              "públicos e coletivos, usados no deslocamento das pessoas",
              "privados e usados somente por seus proprietários",
              "públicos, mas iguais aos táxis",
              "privados e administrados apenas por famílias"
            ],
            "answer": 0,
            "explain": "Ônibus, trens e metrôs são transportes públicos coletivos. A cobrança de passagem e as regras de gratuidade variam conforme o lugar e a legislação."
          },
          {
            "type": "mc",
            "q": "São exemplos de espaços públicos:",
            "options": [
              "praças e parques",
              "mercados e lojas",
              "clubes e praias",
              "praias e shopping centers"
            ],
            "answer": 0,
            "explain": "Praças e parques pertencem à população e são administrados pelo governo. Mercados, lojas, clubes e shoppings têm donos — são privados, ainda que alguns sejam de uso público."
          },
          {
            "type": "mc",
            "q": "Um homem surdo foi impedido de entrar em um supermercado porque usava máscara transparente, necessária para a leitura labial. Sobre essa situação, é correto afirmar:",
            "options": [
              "O mercado pode criar qualquer regra",
              "A regra excluiu uma pessoa com deficiência",
              "Ninguém pode ser cliente de um espaço privado",
              "Espaços privados não precisam respeitar direitos"
            ],
            "answer": 1,
            "explain": "Mercados são espaços privados de uso público: qualquer pessoa pode ser cliente. A regra aplicada sem considerar a deficiência gerou exclusão — ele mesmo disse que se sentiu excluído."
          },
          {
            "type": "text",
            "q": "Como se chama o documento que reúne as principais leis e direitos do país?",
            "answers": [
              "constituicao",
              "a constituicao",
              "constituicao brasileira",
              "a constituicao brasileira"
            ],
            "explain": "É a Constituição brasileira. Ela reúne direitos, deveres e regras que devem ser respeitados pelo governo e pela população."
          },
          {
            "type": "text",
            "q": "Quem são os políticos responsáveis por elaborar e votar as leis da cidade na Câmara Municipal?",
            "answers": [
              "vereadores",
              "os vereadores",
              "vereador"
            ],
            "explain": "Os vereadores fazem as leis do município e fiscalizam o trabalho do prefeito. São eleitos por voto direto a cada quatro anos."
          },
          {
            "type": "mc",
            "q": "Qual serviço local pode ser oferecido pela Prefeitura?",
            "options": [
              "Atendimento básico de saúde",
              "Administração de universidades federais",
              "Criação das leis de outros países",
              "Comando das forças armadas nacionais"
            ],
            "answer": 0,
            "explain": "A Prefeitura cuida de serviços locais, como o atendimento básico de saúde. Universidades federais e forças armadas são responsabilidades do governo federal."
          },
          {
            "type": "text",
            "q": "Uma creche municipal é um espaço público, mas só pode ser frequentada por funcionários, crianças matriculadas e responsáveis. Como chamamos esse tipo de espaço público, que tem regras de entrada?",
            "answers": [
              "publico de acesso restrito",
              "espaco publico de acesso restrito",
              "acesso restrito",
              "de acesso restrito",
              "restrito"
            ],
            "explain": "É um espaço público de acesso restrito: pertence à população e é mantido pelo governo, mas existem regras de segurança que limitam quem pode circular ali."
          },
          {
            "type": "mc",
            "q": "Por que as ruas de centros históricos, com escadarias e calçadas irregulares, nem sempre são espaços 'para todos'?",
            "options": [
              "Porque são espaços privados",
              "Porque falta acessibilidade, impedindo a circulação de parte das pessoas",
              "Porque só moradores podem entrar",
              "Porque é preciso pagar para circular"
            ],
            "answer": 1,
            "explain": "São espaços públicos, mas buracos, escadarias e ausência de rampas impedem que idosos, pessoas com deficiência e famílias com carrinhos circulem. Sem acessibilidade, o espaço não é efetivamente de todos."
          }
        ]
      },
      {
        "id": "hist11",
        "module": 11,
        "title": "Problemas das grandes cidades",
        "video": "assets/videos/hist11-as-grandes-cidades.mp4",
        "theory": [
          {
            "h": "8 bilhões de pessoas, 8 bilhões de resíduos",
            "p": [
              "O planeta Terra é compartilhado por mais de <strong>8 bilhões de pessoas</strong>. Todas moram em algum lugar, consomem comida, água e outros recursos.",
              "Agora imagine que cada uma dessas 8 bilhões de pessoas gerasse apenas <strong>um resíduo por dia</strong> — uma embalagem de picolé, uma garrafinha de água. Seriam 8 bilhões de resíduos por dia. É por aí que começam vários dos problemas das grandes cidades."
            ]
          },
          {
            "h": "Problemas de moradia",
            "p": [
              "Existem casas de muitos tipos, feitas de materiais como barro, madeira, tijolo ou pedra. Elas também podem ter diferentes formatos.",
              "Há <strong>palafitas</strong> apoiadas em estacas perto de rios, <strong>ocas</strong> de povos indígenas e prédios de apartamentos nas cidades. Cada moradia se relaciona com o lugar e o modo de vida de seus moradores.",
              "Algumas pessoas vivem em situação de rua por uma combinação de dificuldades, como pobreza, desemprego, problemas de saúde ou rompimento de vínculos familiares. Elas continuam tendo direitos e precisam ser tratadas com respeito e atendidas por políticas públicas.",
              "Quem não tem condições financeiras acaba construindo casas em áreas inadequadas, sem registro de endereço, saneamento básico, água ou energia elétrica."
            ]
          },
          {
            "h": "Saneamento básico",
            "p": [
              "O <strong>saneamento</strong> consiste no acesso à água tratada, à rede de esgoto e à limpeza urbana. Essas medidas garantem a saúde e a segurança das pessoas: evitam a transmissão de doenças e controlam pragas urbanas.",
              "Quando o encanamento de uma casa não é ligado à rede de esgoto, toda a sujeira vai para a rua, riachos ou terrenos a céu aberto. O saneamento é garantido por lei: a <strong>Lei n. 11.445, de 5 de janeiro de 2007</strong>, estabelece as diretrizes nacionais do saneamento básico."
            ]
          },
          {
            "h": "Transporte e horário de pico",
            "p": [
              "Nas grandes cidades, as casas costumam ficar longe do centro, e as pessoas precisam se deslocar de carro, ônibus, trem ou metrô. Como os horários de escolas e trabalhos são parecidos, milhares de pessoas se movem <strong>no mesmo sentido e ao mesmo tempo</strong>, gerando lentidão, transportes lotados e <strong>engarrafamentos</strong>.",
              "O <strong>horário de pico</strong> costuma ocupar o período das 7 h às 10 h da manhã e das 17 h às 20 h — a hora de ir e a hora de voltar. Nele, aumentam também os acidentes de trânsito.",
              "Uma solução que algumas cidades adotam são as <strong>ciclovias</strong>, que estimulam o uso de bicicletas em trechos curtos. Além de promover um estilo de vida saudável, a bicicleta não emite gases tóxicos na atmosfera, melhorando a qualidade do ar.",
              "Barulho, poluição e cansaço tornam o trânsito um espaço difícil. Por isso é importante a <strong>gentileza</strong>: evitar buzinar sem necessidade, dar carona, ter cuidado com ciclistas, respeitar os limites de velocidade e ceder lugar nos transportes públicos a gestantes, idosos e pessoas com dificuldade de mobilidade."
            ]
          },
          {
            "h": "Para onde vai o lixo",
            "p": [
              "Antigamente, a maior parte do lixo era composta de <strong>resíduos orgânicos</strong> (restos de comida), que se decompunham naturalmente e viravam nutrientes. Com o crescimento das cidades e a tecnologia, surgiram sacolas plásticas, garrafas, latinhas, pilhas e eletrônicos — materiais que demoram <strong>muito mais tempo</strong> para se decompor.",
              "<strong>Lixões:</strong> grandes terrenos a céu aberto que recebem resíduos. São perigosos: contaminam o solo, atingem os <strong>lençóis freáticos</strong> (camada subterrânea onde os poros do solo estão cheios de água), poluem o ar, trazem pragas e espalham doenças.",
              "<strong>Incineradores:</strong> grandes fornos que queimam o lixo. Sobram cinzas, e os gases da queima prejudicam o ar — por isso precisam de filtros, o que torna o processo muito caro. Geralmente são usados para lixo hospitalar.",
              "<strong>Aterros sanitários:</strong> locais preparados para receber rejeitos de forma controlada. O solo é protegido, e os resíduos são cobertos para diminuir os danos à água, ao ar, ao solo e à saúde."
            ]
          },
          {
            "h": "Coleta seletiva e Unidades de Conservação",
            "p": [
              "No Brasil existe uma lei que torna os municípios responsáveis por criar e executar sistemas de <strong>coleta seletiva</strong>, o que facilita recolher materiais para reciclagem. As lixeiras têm cores diferentes justamente para separar cada tipo de material.",
              "As <strong>Unidades de Conservação (UC)</strong> são espaços com características naturais importantes, protegidos por lei. Dividem-se em <strong>Proteção Integral</strong> (a extração de recursos é proibida; permitem-se apenas pesquisa científica e visitas turísticas, como no Parque Nacional da Serra da Bocaina) e <strong>Uso Sustentável</strong> (permitem uso controlado dos recursos: turismo ecológico, educação ambiental, agricultura e pesca ecológica).",
              "Nas grandes cidades há poucas áreas verdes e muitas áreas <strong>pavimentadas</strong> (cobertas de asfalto e concreto), o que gera temperaturas mais altas e baixa qualidade do ar. Por isso as UCs próximas às cidades — como o Parque Nacional da Tijuca (RJ) e o Parque Estadual da Cantareira (SP) — são essenciais: bairros vizinhos a grandes áreas verdes registram <strong>temperaturas mais amenas</strong>."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Desafio ou solução?",
            "instructions": "Arraste cada item para o grupo certo.",
            "categories": [
              "Grande desafio da cidade",
              "Solução inteligente"
            ],
            "items": [
              {
                "text": "Engarrafamento no horário de pico",
                "cat": 0
              },
              {
                "text": "Ciclovias para trechos curtos",
                "cat": 1
              },
              {
                "text": "Lixão a céu aberto",
                "cat": 0
              },
              {
                "text": "Coleta seletiva e reciclagem",
                "cat": 1
              },
              {
                "text": "Falta de saneamento básico",
                "cat": 0
              },
              {
                "text": "Unidades de Conservação",
                "cat": 1
              },
              {
                "text": "Pessoas em situação de rua",
                "cat": 0
              },
              {
                "text": "Aterro sanitário controlado",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Conceitos do módulo",
            "instructions": "Ligue cada palavra à sua definição.",
            "pairs": [
              [
                "Lençol freático",
                "Camada subterrânea com água no solo"
              ],
              [
                "Palafita",
                "Casa apoiada em estacas sobre a água"
              ],
              [
                "Pavimentada",
                "Superfície coberta de asfalto ou concreto"
              ],
              [
                "Horário de pico",
                "7h-10h e 17h-20h, trânsito intenso"
              ],
              [
                "Saneamento básico",
                "Água tratada, esgoto e limpeza urbana"
              ],
              [
                "Proteção Integral",
                "UC onde extrair recursos é proibido"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Muitas pessoas se deslocam dentro das cidades utilizando o transporte público. Sobre isso, podemos dizer que:",
            "options": [
              "na maior parte das vezes, ele é muito eficiente, com poucos engarrafamentos",
              "não existem trens ou metrôs, apenas ônibus e carros de aplicativos",
              "todas as cidades brasileiras têm ciclovias para aliviar a poluição dos carros",
              "o transporte público ajuda nos deslocamentos das pessoas, mas nem sempre funciona perfeitamente"
            ],
            "answer": 3,
            "explain": "As ciclovias separam as bicicletas dos veículos motorizados e ajudam a tornar o trajeto mais seguro."
          },
          {
            "type": "mc",
            "q": "Qual situação representa um problema que uma cidade precisa enfrentar?",
            "options": [
              "Esgoto sem tratamento chegando aos rios",
              "Criação de ciclovias seguras",
              "Coleta seletiva funcionando",
              "Parques bem cuidados"
            ],
            "answer": 0,
            "explain": "O esgoto sem tratamento polui a água e pode transmitir doenças. Ciclovias, coleta seletiva e parques cuidados são melhorias para a cidade."
          },
          {
            "type": "mc",
            "q": "Um depoimento sobre o trânsito de Porto Alegre relata que o fluxo começa às 17 h e segue até 19 h, com muitos acidentes na esquina. O depoimento informa que, no horário de pico:",
            "options": [
              "o número de carros nas ruas diminui",
              "acidentes de carro, como batidas, podem acontecer",
              "aumenta o número de carros circulando a partir das 19 h",
              "não ocorrem engarrafamentos"
            ],
            "answer": 1,
            "explain": "O texto diz que já presenciou bastante acidente na esquina, a maioria por motoristas colidindo ao tentar entrar e sair das vagas. O fluxo termina às 19 h, e não aumenta a partir dessa hora."
          },
          {
            "type": "mc",
            "q": "Numa charge, uma placa diz 'Bem-vindo a São Paulo — População: 8.000.000 de veículos', com a cidade tomada por carros e ônibus parados. Que característica o artista quis criticar?",
            "options": [
              "A poluição do ar causada por fábricas",
              "O excesso de prédios e a pouca quantidade de áreas verdes",
              "O excesso de veículos e o trânsito caótico",
              "A sinalização de trânsito confusa"
            ],
            "answer": 2,
            "explain": "Ao trocar a população de pessoas pela de veículos, o artista ironiza uma cidade dominada por carros. O que preenche toda a cena são veículos parados, não prédios nem fábricas."
          },
          {
            "type": "text",
            "q": "Como se chama o terreno preparado, com solo protegido e camadas de resíduos cobertas por areia e argila, considerado a forma mais segura de descarte de lixo?",
            "answers": [
              "aterro sanitario",
              "aterro",
              "aterros sanitarios",
              "o aterro sanitario"
            ],
            "explain": "É o aterro sanitário. Ele recebe rejeitos de forma controlada e ajuda a proteger o solo, a água e a saúde das pessoas."
          },
          {
            "type": "text",
            "q": "Como se chama o conjunto de serviços que inclui água tratada, rede de esgoto e limpeza urbana?",
            "answers": [
              "saneamento basico",
              "saneamento",
              "o saneamento basico"
            ],
            "explain": "É o saneamento básico. Ele inclui água potável, tratamento de esgoto, manejo de resíduos e drenagem da chuva, ajudando a proteger a saúde."
          },
          {
            "type": "mc",
            "q": "Segundo a reportagem estudada, os bairros mais frescos do Rio de Janeiro (como o Alto da Boa Vista e o Jardim Botânico) têm em comum o fato de:",
            "options": [
              "estarem no Rio de Janeiro, cidade de clima frio",
              "estarem próximos a uma grande área verde, a Floresta da Tijuca",
              "terem um sistema de pavimentação que alivia o calor",
              "terem menos moradores que os outros bairros"
            ],
            "answer": 1,
            "explain": "As áreas verdes reduzem a temperatura: as árvores dão sombra e liberam umidade. Já o asfalto e o concreto (pavimentação) fazem o oposto — absorvem e devolvem calor."
          },
          {
            "type": "text",
            "q": "Como se chama a camada subterrânea, onde os poros do solo estão preenchidos com água, que pode ser contaminada pelos lixões?",
            "answers": [
              "lencol freatico",
              "lencois freaticos",
              "o lencol freatico"
            ],
            "explain": "É o lençol freático. Quando o lixo é despejado a céu aberto, líquidos tóxicos escorrem pelo solo até essa camada e contaminam a água que abastece a região."
          },
          {
            "type": "mc",
            "q": "O que é permitido em uma Unidade de Conservação de Proteção Integral?",
            "options": [
              "Pesquisa e visitação seguindo as regras do local",
              "Retirada de madeira por qualquer pessoa",
              "Agricultura em toda a área protegida",
              "Caça de animais silvestres"
            ],
            "answer": 0,
            "explain": "Nessas unidades, a natureza recebe proteção especial. Pesquisa e visitação podem acontecer quando seguem as regras do local."
          }
        ]
      }
    ]
  }
];
