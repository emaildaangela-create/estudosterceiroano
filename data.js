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
              "title": "Prateleira de palavras",
              "kind": "prateleira",
              "empty": "A prateleira ainda está vazia.",
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
            "q": "Segundo o cartaz do Unicef, por quantos segundos, no …50252 tokens truncated…            "type": "mc",
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