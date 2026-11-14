/* =====================================================================
   data.js — Base de conteúdo do 4º bimestre do 3º ano
   Gerado por build_data.py a partir de content/*.json.
   Estrutura: DISCIPLINAS[] > capitulos[] > { theory, games, quiz }.
   ===================================================================== */

const DISCIPLINAS = [
  {
    "id": "ingles",
    "nome": "Inglês",
    "cor": "--azul",
    "prova": "2026-11-19",
    "horario": "3A 10h · 3B 12h55 · 3C 14h55",
    "capitulos": [
      {
        "id": "ing07",
        "module": "7",
        "title": "Feeling Fit",
        "subtitle": "Body parts · Did…? Yes, I did / No, I didn't · Too / Enough",
        "video": "assets/videos/ing07.mp4",
        "theory": [
          {
            "h": "Parts of the body",
            "figure": {
              "src": "assets/4b/ing07-corpo.svg",
              "alt": "Criança com setas indicando shoulder, elbow, chest, stomach, back, knee, fingers e toes.",
              "tipo": "diagrama"
            },
            "p": [
              "Na Unit 7 aprendemos o nome das <strong>partes do corpo</strong> em inglês. Toque em cada cartão para ouvir a palavra.",
              "Repare no <strong>a</strong> e no <strong>an</strong>: usamos <strong>an</strong> antes de som de vogal (<strong>an elbow</strong>) e <strong>a</strong> antes de som de consoante (<strong>a knee</strong>, <strong>a back</strong>).",
              "<strong>Fingers</strong> são os dedos das mãos e <strong>toes</strong> são os dedos dos pés. As duas palavras estão no plural porque temos vários dedos.",
              "Dois verbos de movimento também apareceram: <strong>stretch</strong> (esticar) e <strong>bend</strong> (dobrar). Exemplo: <em>Stretch your arms! Bend your knees!</em>"
            ],
            "cards": [
              {
                "icon": "🤷",
                "en": "a shoulder",
                "pt": "ombro"
              },
              {
                "icon": "💪",
                "en": "an elbow",
                "pt": "cotovelo"
              },
              {
                "icon": "🫁",
                "en": "a chest",
                "pt": "peito"
              },
              {
                "icon": "🍽️",
                "en": "a stomach",
                "pt": "barriga / estômago"
              },
              {
                "icon": "🎒",
                "en": "a back",
                "pt": "costas"
              },
              {
                "icon": "🦵",
                "en": "a knee",
                "pt": "joelho"
              },
              {
                "icon": "🖐️",
                "en": "fingers",
                "pt": "dedos das mãos"
              },
              {
                "icon": "🦶",
                "en": "toes",
                "pt": "dedos dos pés"
              },
              {
                "icon": "🏋️",
                "en": "a muscle",
                "pt": "músculo"
              },
              {
                "icon": "🦴",
                "en": "a bone",
                "pt": "osso"
              },
              {
                "icon": "🙆",
                "en": "stretch",
                "pt": "esticar"
              },
              {
                "icon": "🙇",
                "en": "bend",
                "pt": "dobrar"
              }
            ]
          },
          {
            "h": "Did you…? Yes, I did. No, I didn't.",
            "figure": {
              "src": "assets/4b/ing07-did.svg",
              "alt": "Esquema: Did + pessoa + verbo? Respostas curtas Yes, I did ou No, I didn't.",
              "tipo": "diagrama"
            },
            "p": [
              "Para perguntar sobre algo que <strong>já aconteceu</strong> (no passado), começamos com <strong>Did</strong>: <strong>Did</strong> + pessoa + verbo + resto? Exemplo: <em>Did you wash your hands?</em>",
              "Depois de <strong>Did</strong>, o verbo fica na forma normal, sem mudar: <em>Did you <strong>brush</strong> your teeth?</em> (e não <em>brushed</em>).",
              "A <strong>resposta curta</strong> repete a pessoa e usa <strong>did</strong> ou <strong>didn't</strong>: <em>Yes, I did.</em> / <em>No, I didn't.</em> — <em>Did he take a shower?</em> → <em>Yes, he did.</em> ou <em>No, he didn't.</em>",
              "<strong>Didn't</strong> é a forma curta de <strong>did not</strong>. Pense assim: <strong>did</strong> = sim, fiz; <strong>didn't</strong> = não fiz.",
              "Na música <em>Let's Move</em>: <em>Did you move your legs? Yes, I did! Did you eat a healthy snack? Oops, I forgot!</em>"
            ]
          },
          {
            "h": "Healthy habits",
            "figure": {
              "src": "assets/4b/ing07-habitos.svg",
              "alt": "Hábitos bons (get exercise, eat fruit, eat vegetables, get rest) e hábito ruim (eat junk food).",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Habits</strong> são hábitos: coisas que fazemos sempre. Alguns são <strong>good for you</strong> (bons para você) e outros são <strong>bad for you</strong> (ruins para você).",
              "Bons hábitos: <strong>get exercise</strong> (fazer exercício), <strong>eat fruit</strong> (comer frutas), <strong>eat vegetables</strong> (comer verduras e legumes), <strong>get rest</strong> (descansar), <strong>drink water</strong> (beber água), <strong>sleep eight hours</strong>.",
              "Hábito ruim quando é demais: <strong>eat junk food</strong> (comer porcarias, como batata frita de pacote e refrigerante).",
              "No pôster <em>Good Habits</em> do livro aparecem quatro grupos: <strong>Keep fit</strong> (manter a forma), <strong>Stay clean</strong> (ficar limpo), <strong>Eat good food</strong> (comer bem) e <strong>Keep safe</strong> (ficar seguro)."
            ],
            "cards": [
              {
                "icon": "🏃",
                "en": "get exercise",
                "pt": "fazer exercício"
              },
              {
                "icon": "🍎",
                "en": "eat fruit",
                "pt": "comer frutas"
              },
              {
                "icon": "🥦",
                "en": "eat vegetables",
                "pt": "comer verduras e legumes"
              },
              {
                "icon": "😴",
                "en": "get rest",
                "pt": "descansar"
              },
              {
                "icon": "🍟",
                "en": "eat junk food",
                "pt": "comer porcarias"
              },
              {
                "icon": "💧",
                "en": "drink water",
                "pt": "beber água"
              }
            ]
          },
          {
            "h": "Too much, too many, enough",
            "figure": {
              "src": "assets/4b/ing07-too-enough.svg",
              "alt": "Três copos: um transbordando (too much), um no ponto certo (enough) e muitos doces empilhados (too many).",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Too much</strong> e <strong>too many</strong> querem dizer <strong>demais</strong> (mais do que faz bem). <strong>Enough</strong> quer dizer <strong>o suficiente</strong> (a quantidade certa).",
              "<strong>Too much</strong> + coisas que <strong>não contamos</strong> uma por uma: <em>too much TV, too much junk food, too much soda, too much sugar</em>.",
              "<strong>Too many</strong> + coisas que <strong>contamos</strong>: <em>too many chips, too many candies, too many cookies</em>.",
              "<strong>Enough</strong> mostra que está bom: <em>I get <strong>enough</strong> sleep. I drink <strong>enough</strong> water. I get <strong>enough</strong> exercise.</em>",
              "Exemplos do livro: <em>I don't watch too much TV. I think I get enough exercise. I drink enough water. I don't eat too much junk food.</em>"
            ]
          },
          {
            "h": "Reading: Take Care of Your Brain!",
            "p": [
              "O texto <em>Take Care of Your Brain!</em> diz que exercício é bom para o <strong>corpo</strong> e para o <strong>cérebro</strong> (brain). Só <strong>10 minutos</strong> por dia já ajudam o cérebro a pensar mais rápido.",
              "Ficar ao ar livre (<strong>outdoors</strong>), num lugar natural como a floresta, também faz bem: é o <strong>forest bath</strong> (banho de floresta).",
              "Rir também é bom! Quando você ri alto (<strong>laugh out loud</strong>), o cérebro recebe mais sangue e o corpo pode se sentir melhor por até <strong>45 minutos</strong>.",
              "Curiosidade: <strong>gelotologist</strong> é a pessoa que estuda os efeitos do riso no corpo humano."
            ]
          }
        ],
        "games": [
          {
            "type": "memory",
            "title": "Memória do corpo",
            "short": "Memória do corpo",
            "instructions": "Ache o par: a palavra em inglês e o seu significado.",
            "items": [
              {
                "base": "elbow",
                "result": "cotovelo 💪"
              },
              {
                "base": "knee",
                "result": "joelho 🦵"
              },
              {
                "base": "shoulder",
                "result": "ombro 🤷"
              },
              {
                "base": "toes",
                "result": "dedos dos pés 🦶"
              },
              {
                "base": "fingers",
                "result": "dedos das mãos 🖐️"
              },
              {
                "base": "stomach",
                "result": "barriga 🍽️"
              },
              {
                "base": "bone",
                "result": "osso 🦴"
              },
              {
                "base": "back",
                "result": "costas 🎒"
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Yes, I did! No, I didn't!",
            "short": "Respostas curtas",
            "instructions": "✅ quer dizer que fez; ❌ quer dizer que não fez. Escolha a resposta curta certa.",
            "pairs": [
              [
                "Did you wash your hands? ✅",
                "Yes, I did."
              ],
              [
                "Did he take a shower? ❌",
                "No, he didn't."
              ],
              [
                "Did she brush her teeth? ✅",
                "Yes, she did."
              ],
              [
                "Did they play soccer? ❌",
                "No, they didn't."
              ],
              [
                "Did you ride your bike? ❌",
                "No, I didn't."
              ],
              [
                "Did he eat fruit? ✅",
                "Yes, he did."
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Too much, too many or enough?",
            "short": "Too / Enough",
            "instructions": "Complete cada frase com a expressão certa.",
            "categories": [
              "too much",
              "too many",
              "enough"
            ],
            "items": [
              {
                "text": "I watch __ TV. Five hours every day! 📺",
                "cat": 0
              },
              {
                "text": "He eats __ candies. Twenty candies! 🍬",
                "cat": 1
              },
              {
                "text": "I sleep nine hours. I get __ sleep. 😴",
                "cat": 2
              },
              {
                "text": "She drinks __ soda. Four cans a day! 🥤",
                "cat": 0
              },
              {
                "text": "We eat __ cookies after school. Ten each! 🍪",
                "cat": 1
              },
              {
                "text": "I drink eight glasses of water. That's __ water. 💧",
                "cat": 2
              },
              {
                "text": "They eat __ junk food. Every meal! 🍟",
                "cat": 0
              },
              {
                "text": "I play outside every day. I get __ exercise. ⚽",
                "cat": 2
              }
            ]
          },
          {
            "type": "sort",
            "title": "Good habit or bad habit?",
            "short": "Bons hábitos",
            "instructions": "Este hábito é bom ou ruim para você?",
            "categories": [
              "Good for you 👍",
              "Bad for you 👎"
            ],
            "items": [
              {
                "text": "I get enough sleep. 😴",
                "cat": 0
              },
              {
                "text": "I watch too much TV. 📺",
                "cat": 1
              },
              {
                "text": "I eat vegetables every day. 🥦",
                "cat": 0
              },
              {
                "text": "I eat too much junk food. 🍟",
                "cat": 1
              },
              {
                "text": "I get exercise every day. 🏃",
                "cat": 0
              },
              {
                "text": "I don't drink enough water. 💧",
                "cat": 1
              },
              {
                "text": "I wash my hands before meals. 🧼",
                "cat": 0
              },
              {
                "text": "I drink too much soda. 🥤",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Ouça a palavra e escolha a parte do corpo certa.",
            "listen": "elbow",
            "options": [
              "cotovelo",
              "joelho",
              "ombro",
              "costas"
            ],
            "answer": 0,
            "explain": "Elbow é o cotovelo. Knee é joelho, shoulder é ombro e back são as costas."
          },
          {
            "type": "mc",
            "q": "Como se diz “dedos dos pés” em inglês?",
            "options": [
              "toes",
              "fingers",
              "knees",
              "bones"
            ],
            "answer": 0,
            "explain": "Toes são os dedos dos pés. Fingers são os dedos das mãos."
          },
          {
            "type": "mc",
            "q": "Did you brush your teeth yesterday? ✅ (você escovou)",
            "options": [
              "Yes, I did.",
              "No, I didn't.",
              "Yes, I do.",
              "Yes, I brush."
            ],
            "answer": 0,
            "explain": "Pergunta com Did pede resposta curta com did: Yes, I did. Didn't seria se você NÃO tivesse escovado."
          },
          {
            "type": "mc",
            "q": "Did he take a shower? ❌ (ele não tomou banho)",
            "options": [
              "No, he didn't.",
              "Yes, he did.",
              "No, I didn't.",
              "No, she didn't."
            ],
            "answer": 0,
            "explain": "A pergunta fala de he (ele) e a resposta é não: No, he didn't. A resposta repete a mesma pessoa da pergunta."
          },
          {
            "type": "mc",
            "q": "Complete a pergunta: “____ you ride your bike yesterday?”",
            "options": [
              "Did",
              "Do",
              "Does",
              "Are"
            ],
            "answer": 0,
            "explain": "Yesterday (ontem) mostra que é passado. Para perguntar no passado usamos Did."
          },
          {
            "type": "mc",
            "q": "Qual pergunta está escrita corretamente?",
            "options": [
              "Did she eat fruit?",
              "Did she ate fruit?",
              "Did she eats fruit?",
              "She did eat fruit?"
            ],
            "answer": 0,
            "explain": "Depois de Did, o verbo fica na forma normal: Did she eat fruit? (e não ate nem eats)."
          },
          {
            "type": "mc",
            "q": "Complete: “I don't watch ________ TV. Only one hour a day.”",
            "options": [
              "too much",
              "too many",
              "enough",
              "a"
            ],
            "answer": 0,
            "explain": "TV não se conta uma por uma, então usamos too much. A frase diz que a pessoa NÃO vê TV demais."
          },
          {
            "type": "mc",
            "q": "Complete: “He eats ________ chips. A big bag every day!”",
            "options": [
              "too many",
              "too much",
              "enough",
              "an"
            ],
            "answer": 1,
            "explain": "Chips são coisas que podemos contar (um, dois, três salgadinhos), então usamos too many."
          },
          {
            "type": "mc",
            "q": "“I sleep nine hours every night. I get ________ sleep.” Qual palavra mostra que está na medida certa?",
            "options": [
              "too much",
              "too many",
              "enough",
              "junk"
            ],
            "answer": 2,
            "explain": "Enough quer dizer o suficiente, a quantidade certa."
          },
          {
            "type": "mc",
            "q": "Qual destes hábitos é BAD for you (ruim para você)?",
            "options": [
              "eat junk food every day",
              "get exercise",
              "eat vegetables",
              "get enough rest"
            ],
            "answer": 0,
            "explain": "Comer junk food (porcarias) todo dia não faz bem. Os outros são bons hábitos."
          },
          {
            "type": "mc",
            "q": "Ouça a frase e escolha o que ela significa.",
            "listen": "Stretch your arms!",
            "options": [
              "Estique os braços!",
              "Dobre os joelhos!",
              "Lave as mãos!",
              "Mexa os dedos!"
            ],
            "answer": 0,
            "explain": "Stretch é esticar, e arms são os braços. Dobrar seria bend."
          },
          {
            "type": "mc",
            "q": "Segundo o texto “Take Care of Your Brain!”, quantos minutos de exercício por dia já ajudam o cérebro?",
            "options": [
              "10 minutos",
              "45 minutos",
              "2 horas",
              "10 horas"
            ],
            "answer": 0,
            "explain": "O texto diz que só ten minutes (10 minutos) por dia já fazem o corpo e o cérebro se sentirem melhor. Os 45 minutos são o tempo que o corpo fica bem depois de uma boa risada."
          },
          {
            "type": "mc",
            "q": "No texto, o que é um “forest bath”?",
            "options": [
              "Passar um tempo na natureza",
              "Tomar banho de chuveiro",
              "Nadar na piscina",
              "Lavar as mãos"
            ],
            "answer": 0,
            "explain": "Forest bath (banho de floresta) é passar um tempo ao ar livre, em um lugar natural como a floresta. Isso relaxa o cérebro."
          },
          {
            "type": "text",
            "q": "Escreva em inglês a parte do corpo que fica no meio da perna: o joelho.",
            "answers": [
              "knee",
              "a knee",
              "the knee",
              "knees"
            ],
            "explain": "Joelho em inglês é knee (o k não é pronunciado: /ni:/)."
          }
        ]
      },
      {
        "id": "ing08",
        "module": "8",
        "title": "Let's Celebrate",
        "subtitle": "Celebrations · Simple past: regular and irregular verbs",
        "video": "assets/videos/ing08.mp4",
        "theory": [
          {
            "h": "Celebrations and festivals",
            "figure": {
              "src": "assets/4b/ing08-festa.svg",
              "alt": "Cena de festa com máscara, fantasia, lanternas, fogos de artifício, desfile e decorações.",
              "tipo": "diagrama"
            },
            "p": [
              "Pessoas do mundo todo têm <strong>celebrations</strong> (celebrações) e <strong>festivals</strong> (festivais). Elas lembram o passado, encontram a família e os amigos, comem e se divertem.",
              "Palavras de festa: <strong>a costume</strong> (fantasia), <strong>a mask</strong> (máscara), <strong>a party</strong> (festa), <strong>a feast</strong> (banquete), <strong>a lantern</strong> (lanterna), <strong>fireworks</strong> (fogos de artifício), <strong>decorations</strong> (enfeites) e <strong>a parade</strong> (desfile).",
              "Ações: <strong>celebrate</strong> (comemorar), <strong>remember</strong> (lembrar), <strong>dance</strong> (dançar) e <strong>dress up</strong> (fantasiar-se, vestir-se especialmente)."
            ],
            "cards": [
              {
                "icon": "🦸",
                "en": "a costume",
                "pt": "fantasia"
              },
              {
                "icon": "🎭",
                "en": "a mask",
                "pt": "máscara"
              },
              {
                "icon": "🥳",
                "en": "a party",
                "pt": "festa"
              },
              {
                "icon": "🍗",
                "en": "a feast",
                "pt": "banquete"
              },
              {
                "icon": "🏮",
                "en": "a lantern",
                "pt": "lanterna"
              },
              {
                "icon": "🎆",
                "en": "fireworks",
                "pt": "fogos de artifício"
              },
              {
                "icon": "🎊",
                "en": "decorations",
                "pt": "enfeites"
              },
              {
                "icon": "🎺",
                "en": "a parade",
                "pt": "desfile"
              },
              {
                "icon": "🎉",
                "en": "celebrate",
                "pt": "comemorar"
              },
              {
                "icon": "💭",
                "en": "remember",
                "pt": "lembrar"
              },
              {
                "icon": "💃",
                "en": "dance",
                "pt": "dançar"
              },
              {
                "icon": "👗",
                "en": "dress up",
                "pt": "fantasiar-se"
              }
            ]
          },
          {
            "h": "Birthday party words",
            "p": [
              "Numa festa de aniversário aparecem: <strong>a present</strong> (presente), <strong>a birthday cake</strong> (bolo de aniversário), <strong>candles</strong> (velas), <strong>an invitation</strong> (convite) e <strong>balloons</strong> (balões).",
              "Pistas do livro: <em>You write this on paper. You give it to your friends.</em> → <strong>an invitation</strong>. <em>They are usually round. They have air inside.</em> → <strong>balloons</strong>. <em>They are long and thin. You put them on a birthday cake.</em> → <strong>candles</strong>."
            ],
            "cards": [
              {
                "icon": "🎁",
                "en": "a present",
                "pt": "presente"
              },
              {
                "icon": "🎂",
                "en": "a birthday cake",
                "pt": "bolo de aniversário"
              },
              {
                "icon": "🕯️",
                "en": "candles",
                "pt": "velas"
              },
              {
                "icon": "💌",
                "en": "an invitation",
                "pt": "convite"
              },
              {
                "icon": "🎈",
                "en": "balloons",
                "pt": "balões"
              }
            ]
          },
          {
            "h": "Simple past: regular verbs (-ed)",
            "figure": {
              "src": "assets/4b/ing08-regular.svg",
              "alt": "Verbos regulares ganham -ed no passado: watch vira watched, play vira played, dance vira danced.",
              "tipo": "diagrama"
            },
            "p": [
              "Para contar o que <strong>aconteceu</strong>, usamos o <strong>simple past</strong>. Nos <strong>verbos regulares</strong>, acrescentamos <strong>-ed</strong> no final: <em>watch → watched, play → played, listen → listened, celebrate → celebrated</em>.",
              "Se o verbo já termina em <strong>e</strong>, colocamos só <strong>-d</strong>: <em>dance → danced, like → liked</em>.",
              "Pergunta e resposta longa: <em>Did you watch the parade?</em> → <em>Yes, we <strong>watched</strong> the parade.</em> / <em>Did you like the music?</em> → <em>Yes, we <strong>liked</strong> it a lot!</em>",
              "Atenção: na pergunta com <strong>Did</strong> o verbo fica normal (<em>Did you <strong>watch</strong>…?</em>); na resposta longa ele vai para o passado (<em>We <strong>watched</strong>…</em>)."
            ]
          },
          {
            "h": "Simple past: irregular verbs",
            "figure": {
              "src": "assets/4b/ing08-irregular.svg",
              "alt": "Pares de verbos irregulares: go/went, see/saw, eat/ate, sing/sang, drink/drank, wear/wore, have/had, write/wrote, give/gave, take/took.",
              "tipo": "diagrama"
            },
            "p": [
              "Alguns verbos <strong>não ganham -ed</strong>: eles mudam de forma no passado. São os <strong>verbos irregulares</strong>, e precisamos memorizá-los.",
              "<em>go → <strong>went</strong>, see → <strong>saw</strong>, eat → <strong>ate</strong>, sing → <strong>sang</strong>, drink → <strong>drank</strong>, wear → <strong>wore</strong>, have → <strong>had</strong>, write → <strong>wrote</strong>, give → <strong>gave</strong>, take → <strong>took</strong></em>.",
              "Exemplos do livro: <em>Did you go to the parade?</em> → <em>Yes, I <strong>went</strong> to the parade.</em> / <em>Did you see the fireworks?</em> → <em>Yes, I <strong>saw</strong> the fireworks.</em> / <em>Did you eat cake at the party?</em> → <em>Yes, I <strong>ate</strong> a piece of cake.</em>"
            ],
            "cards": [
              {
                "icon": "🚶",
                "en": "go → went",
                "pt": "ir → foi"
              },
              {
                "icon": "👀",
                "en": "see → saw",
                "pt": "ver → viu"
              },
              {
                "icon": "🍰",
                "en": "eat → ate",
                "pt": "comer → comeu"
              },
              {
                "icon": "🎤",
                "en": "sing → sang",
                "pt": "cantar → cantou"
              },
              {
                "icon": "🥤",
                "en": "drink → drank",
                "pt": "beber → bebeu"
              },
              {
                "icon": "👕",
                "en": "wear → wore",
                "pt": "vestir → vestiu"
              },
              {
                "icon": "🤲",
                "en": "have → had",
                "pt": "ter → teve"
              },
              {
                "icon": "✍️",
                "en": "write → wrote",
                "pt": "escrever → escreveu"
              },
              {
                "icon": "🎁",
                "en": "give → gave",
                "pt": "dar → deu"
              },
              {
                "icon": "📸",
                "en": "take → took",
                "pt": "pegar/levar → pegou"
              }
            ]
          },
          {
            "h": "Reading: November Celebrations",
            "figure": {
              "src": "assets/4b/ing08-novembro.svg",
              "alt": "Comparação: Day of the Dead no México, com caveiras coloridas e velas; Yi Peng na Tailândia, com lanternas subindo ao céu.",
              "tipo": "diagrama"
            },
            "p": [
              "O texto compara duas festas de novembro. O <strong>Day of the Dead</strong> (Dia dos Mortos), no <strong>México</strong>, é no primeiro dia de novembro: as famílias lembram e celebram as pessoas da família que morreram.",
              "No Day of the Dead, as famílias levam um banquete (<strong>a big feast</strong>) ao cemitério, acendem velas e tocam música. Caveiras e esqueletos <strong>não são assustadores</strong>: a festa é alegre, não triste.",
              "O <strong>Yi Peng</strong>, na <strong>Tailândia</strong>, também acontece em novembro. Tem desfile, fantasias bonitas e milhares de <strong>lanternas de papel de arroz</strong> que sobem ao céu. As pessoas acreditam que as lanternas levam embora as coisas ruins. No último dia há fogos de artifício.",
              "Na escrita do Hiro, <em>The Sapporo Snow Festival</em>, ele usa o passado: <em>I <strong>went</strong>… I <strong>wore</strong> a snowsuit… We <strong>saw</strong> snow sculptures… We <strong>played</strong>… We <strong>listened</strong>, <strong>ate</strong> and <strong>drank</strong>…</em>"
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Festival words",
            "short": "Palavras de festa",
            "instructions": "Ligue a pista ao objeto de festa.",
            "pairs": [
              [
                "You write this on paper and give it to your friends. 💌",
                "an invitation"
              ],
              [
                "They are round and have air inside. 🎈",
                "balloons"
              ],
              [
                "Long and thin. You put them on a birthday cake. 🕯️",
                "candles"
              ],
              [
                "You wear it on your face. 🎭",
                "a mask"
              ],
              [
                "Bright lights that explode in the sky at night. 🎆",
                "fireworks"
              ],
              [
                "Many people walk, dance and play music on the street. 🎺",
                "a parade"
              ]
            ]
          },
          {
            "type": "memory",
            "title": "Memória do passado",
            "short": "Verbos irregulares",
            "instructions": "Ache cada verbo e a sua forma no passado.",
            "items": [
              {
                "base": "go",
                "result": "went"
              },
              {
                "base": "see",
                "result": "saw"
              },
              {
                "base": "eat",
                "result": "ate"
              },
              {
                "base": "sing",
                "result": "sang"
              },
              {
                "base": "drink",
                "result": "drank"
              },
              {
                "base": "wear",
                "result": "wore"
              },
              {
                "base": "write",
                "result": "wrote"
              },
              {
                "base": "give",
                "result": "gave"
              }
            ]
          },
          {
            "type": "sort",
            "title": "Regular or irregular?",
            "short": "Regular ou irregular",
            "instructions": "O verbo ganha -ed ou muda de forma no passado?",
            "categories": [
              "Regular (-ed)",
              "Irregular (muda)"
            ],
            "items": [
              {
                "text": "watch → watched",
                "cat": 0
              },
              {
                "text": "go → went",
                "cat": 1
              },
              {
                "text": "dance → danced",
                "cat": 0
              },
              {
                "text": "see → saw",
                "cat": 1
              },
              {
                "text": "play → played",
                "cat": 0
              },
              {
                "text": "eat → ate",
                "cat": 1
              },
              {
                "text": "listen → listened",
                "cat": 0
              },
              {
                "text": "have → had",
                "cat": 1
              }
            ]
          },
          {
            "type": "sort",
            "title": "Day of the Dead or Yi Peng?",
            "short": "Duas festas",
            "instructions": "De qual festa o texto está falando?",
            "categories": [
              "Day of the Dead 💀",
              "Yi Peng 🏮"
            ],
            "items": [
              {
                "text": "It is a big festival in Mexico.",
                "cat": 0
              },
              {
                "text": "It happens in Thailand.",
                "cat": 1
              },
              {
                "text": "Families take a big feast to the cemetery.",
                "cat": 0
              },
              {
                "text": "Thousands of lanterns go up into the sky.",
                "cat": 1
              },
              {
                "text": "People give candy and chocolate skulls.",
                "cat": 0
              },
              {
                "text": "Lanterns take away the bad things.",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Ouça a palavra e escolha o significado.",
            "listen": "a parade",
            "options": [
              "um desfile",
              "um convite",
              "uma fantasia",
              "um banquete"
            ],
            "answer": 0,
            "explain": "Parade é desfile. Convite é invitation, fantasia é costume e banquete é feast."
          },
          {
            "type": "mc",
            "q": "“They are long and thin. You put them on a birthday cake.” What are they?",
            "options": [
              "candles",
              "balloons",
              "presents",
              "masks"
            ],
            "answer": 0,
            "explain": "Candles (velas) são compridas e finas e vão em cima do bolo de aniversário."
          },
          {
            "type": "mc",
            "q": "Qual é o passado do verbo watch?",
            "options": [
              "watched",
              "watch",
              "wached",
              "watchs"
            ],
            "answer": 0,
            "explain": "Watch é regular: ganha -ed e vira watched."
          },
          {
            "type": "mc",
            "q": "Qual é o passado do verbo go?",
            "options": [
              "went",
              "goed",
              "gone",
              "goes"
            ],
            "answer": 0,
            "explain": "Go é irregular: no passado vira went. Exemplo: I went to the parade."
          },
          {
            "type": "mc",
            "q": "Did you see the fireworks? Escolha a resposta longa correta.",
            "options": [
              "Yes, I saw the fireworks.",
              "Yes, I seed the fireworks.",
              "Yes, I see the fireworks.",
              "Yes, I seeing the fireworks."
            ],
            "answer": 0,
            "explain": "See é irregular. No passado vira saw: Yes, I saw the fireworks."
          },
          {
            "type": "mc",
            "q": "Did you eat cake at the party? Escolha a resposta correta.",
            "options": [
              "Yes, I ate a piece of cake.",
              "Yes, I eated a piece of cake.",
              "Yes, I eat a piece of cake.",
              "Yes, I eaten a piece of cake."
            ],
            "answer": 0,
            "explain": "Eat é irregular: o passado é ate."
          },
          {
            "type": "mc",
            "q": "Complete: “Yesterday I ______ in my favorite costume. I was a superhero!”",
            "options": [
              "dressed up",
              "dress up",
              "dressing up",
              "dresses up"
            ],
            "answer": 0,
            "explain": "Yesterday mostra que é passado. Dress é regular: dress up vira dressed up."
          },
          {
            "type": "mc",
            "q": "Qual destes verbos é IRREGULAR?",
            "options": [
              "sing",
              "play",
              "dance",
              "listen"
            ],
            "answer": 0,
            "explain": "Sing vira sang no passado (muda de forma). Os outros ganham -ed: played, danced, listened."
          },
          {
            "type": "mc",
            "q": "Ouça e escolha o passado do verbo que você ouviu.",
            "listen": "drink",
            "options": [
              "drank",
              "drinked",
              "drunk",
              "drinks"
            ],
            "answer": 0,
            "explain": "Você ouviu drink (beber). No passado ele vira drank."
          },
          {
            "type": "mc",
            "q": "Segundo o texto “November Celebrations”, onde acontece o Day of the Dead?",
            "options": [
              "In Mexico",
              "In Thailand",
              "In Brazil",
              "In Japan"
            ],
            "answer": 0,
            "explain": "O Day of the Dead é um grande festival no México, no primeiro dia de novembro."
          },
          {
            "type": "mc",
            "q": "No texto, o Day of the Dead é uma festa triste?",
            "options": [
              "Não, é uma festa alegre",
              "Sim, é muito triste",
              "Sim, porque é assustadora",
              "Não, porque ninguém vai"
            ],
            "answer": 0,
            "explain": "O texto diz que para os mexicanos caveiras e esqueletos não são assustadores e que a festa é a time for fun and happy celebrations."
          },
          {
            "type": "mc",
            "q": "No festival Yi Peng, na Tailândia, o que milhares de pessoas soltam no céu?",
            "options": [
              "lanterns",
              "balloons",
              "masks",
              "presents"
            ],
            "answer": 0,
            "explain": "Thousands of bright lanterns go up into the sky. As pessoas acreditam que elas levam embora as coisas ruins."
          },
          {
            "type": "text",
            "q": "Escreva o passado do verbo play.",
            "answers": [
              "played"
            ],
            "explain": "Play é regular: play + ed = played. Exemplo: After dinner all the children played games."
          }
        ]
      },
      {
        "id": "ing09",
        "module": "9",
        "title": "My Weekend",
        "subtitle": "Free-time activities · Simple past with didn't · go + -ing",
        "video": "assets/videos/ing09.mp4",
        "theory": [
          {
            "h": "Weekend activities",
            "figure": {
              "src": "assets/4b/ing09-fimdesemana.svg",
              "alt": "Calendário de fim de semana com atividades: go to the movies, go to the beach, go on a picnic, visit a museum, eat out e stay home.",
              "tipo": "diagrama"
            },
            "p": [
              "O <strong>weekend</strong> (fim de semana) é um tempo para relaxar e fazer coisas divertidas. Às vezes ficamos em casa; outras vezes saímos, visitamos lugares e encontramos amigos.",
              "Atividades: <strong>eat out</strong> (comer fora), <strong>go to the movies</strong> (ir ao cinema), <strong>visit a museum</strong> (visitar um museu), <strong>go on a picnic</strong> (fazer piquenique), <strong>stay home</strong> (ficar em casa), <strong>go to the beach</strong> (ir à praia), <strong>text my friends</strong> (mandar mensagem para os amigos).",
              "Palavras para descrever: <strong>win</strong> (ganhar) e <strong>lose</strong> (perder) um jogo; <strong>exciting</strong> (emocionante), <strong>interesting</strong> (interessante), <strong>busy</strong> (ocupado) e <strong>boring</strong> (chato)."
            ],
            "cards": [
              {
                "icon": "🍕",
                "en": "eat out",
                "pt": "comer fora"
              },
              {
                "icon": "🎬",
                "en": "go to the movies",
                "pt": "ir ao cinema"
              },
              {
                "icon": "🦖",
                "en": "visit a museum",
                "pt": "visitar um museu"
              },
              {
                "icon": "🧺",
                "en": "go on a picnic",
                "pt": "fazer piquenique"
              },
              {
                "icon": "🏠",
                "en": "stay home",
                "pt": "ficar em casa"
              },
              {
                "icon": "🏖️",
                "en": "go to the beach",
                "pt": "ir à praia"
              },
              {
                "icon": "📱",
                "en": "text my friends",
                "pt": "mandar mensagem aos amigos"
              },
              {
                "icon": "🏆",
                "en": "win",
                "pt": "ganhar"
              },
              {
                "icon": "😞",
                "en": "lose",
                "pt": "perder"
              },
              {
                "icon": "🤩",
                "en": "exciting",
                "pt": "emocionante"
              },
              {
                "icon": "🔎",
                "en": "interesting",
                "pt": "interessante"
              },
              {
                "icon": "📚",
                "en": "busy",
                "pt": "ocupado"
              }
            ]
          },
          {
            "h": "Hobbies: go + -ing",
            "figure": {
              "src": "assets/4b/ing09-go-ing.svg",
              "alt": "Fórmula go + verbo com -ing: go swimming, go fishing, go hiking, go horseback riding, go ice skating.",
              "tipo": "diagrama"
            },
            "p": [
              "Muitas atividades de lazer em inglês usam <strong>go + verbo com -ing</strong>: <em>go swimming</em> (nadar), <em>go fishing</em> (pescar), <em>go hiking</em> (fazer trilha), <em>go horseback riding</em> (andar a cavalo), <em>go ice skating</em> (patinar no gelo).",
              "No presente: <em>We usually <strong>go hiking</strong>.</em> No passado, go vira <strong>went</strong>: <em>We <strong>went swimming</strong>.</em> Na negativa: <em>We <strong>didn't go</strong> hiking.</em>",
              "Perguntas do livro: <em>What <strong>do</strong> you do on weekends?</em> (o que você costuma fazer) e <em>What <strong>did</strong> you do last weekend?</em> (o que você fez no fim de semana passado)."
            ],
            "cards": [
              {
                "icon": "🏊",
                "en": "go swimming",
                "pt": "nadar"
              },
              {
                "icon": "🎣",
                "en": "go fishing",
                "pt": "pescar"
              },
              {
                "icon": "🥾",
                "en": "go hiking",
                "pt": "fazer trilha"
              },
              {
                "icon": "🏇",
                "en": "go horseback riding",
                "pt": "andar a cavalo"
              },
              {
                "icon": "⛸️",
                "en": "go ice skating",
                "pt": "patinar no gelo"
              }
            ]
          },
          {
            "h": "Didn't: what you did NOT do",
            "figure": {
              "src": "assets/4b/ing09-didnt.svg",
              "alt": "Duas colunas: Things I did (went, won, watched) e Things I didn't do (didn't go, didn't win, didn't watch).",
              "tipo": "diagrama"
            },
            "p": [
              "Para dizer que algo <strong>não aconteceu</strong> no passado, usamos <strong>didn't</strong> + verbo na forma normal: <em>I <strong>didn't go</strong> to the movies. I <strong>didn't eat</strong> out. I stayed home.</em>",
              "Compare: <em>We <strong>went</strong> to the beach.</em> (fomos) × <em>We <strong>didn't go</strong> to the beach.</em> (não fomos). <em>We <strong>won</strong>!</em> (ganhamos) × <em>We <strong>didn't win</strong>. We lost.</em> (não ganhamos, perdemos).",
              "Cuidado: depois de <strong>didn't</strong> o verbo NÃO vai para o passado. Certo: <em>I didn't <strong>watch</strong> TV.</em> Errado: <em>I didn't watched TV.</em>",
              "Perguntas com <strong>wh-</strong>: <em><strong>How</strong> was your weekend?</em> → <em>It was boring. I didn't do anything special.</em> / <em><strong>What</strong> did you do?</em> → <em>I went to a soccer game.</em> / <em>Did your team win?</em> → <em>No, they didn't win. They lost.</em>"
            ]
          },
          {
            "h": "Reading: Wow! Look at That!",
            "p": [
              "O texto fala do <strong>Children's Museum</strong> (Museu das Crianças) em <strong>Indianapolis, USA</strong>. Do lado de fora há <strong>modelos gigantes de dinossauros</strong>: alguns parecem fugir e outros olham pela janela.",
              "Dentro do museu há fósseis de dinossauros de verdade e salas de ciência, arte, cultura e história. Na exposição <em>Treasures of the Earth</em> aprende-se sobre a história do <strong>Egito</strong>.",
              "Você pode aprender sobre as estrelas no <strong>planetarium</strong> (planetário), ir ao <strong>theater</strong> (teatro) e até fazer <strong>rock climbing</strong> (escalada)!",
              "Na escrita <em>My Perfect Weekend</em>, Hassan usa palavras de sequência: <strong>first</strong> (primeiro), <strong>then</strong> (então), <strong>next</strong> (em seguida) e <strong>after that</strong> (depois disso)."
            ]
          }
        ],
        "games": [
          {
            "type": "memory",
            "title": "Memória do fim de semana",
            "short": "Memória do lazer",
            "instructions": "Ache cada atividade e o seu significado.",
            "items": [
              {
                "base": "go fishing",
                "result": "pescar 🎣"
              },
              {
                "base": "go hiking",
                "result": "fazer trilha 🥾"
              },
              {
                "base": "go to the movies",
                "result": "ir ao cinema 🎬"
              },
              {
                "base": "eat out",
                "result": "comer fora 🍕"
              },
              {
                "base": "stay home",
                "result": "ficar em casa 🏠"
              },
              {
                "base": "go horseback riding",
                "result": "andar a cavalo 🏇"
              },
              {
                "base": "visit a museum",
                "result": "visitar um museu 🦖"
              },
              {
                "base": "go ice skating",
                "result": "patinar no gelo ⛸️"
              }
            ]
          },
          {
            "type": "sort",
            "title": "Did or didn't?",
            "short": "Did ou didn't",
            "instructions": "Leia a pista e complete a frase com a forma certa.",
            "categories": [
              "went",
              "didn't go"
            ],
            "items": [
              {
                "text": "It was raining. We __ on a picnic. 🌧️",
                "cat": 1
              },
              {
                "text": "We __ to the movies. We saw a great movie! 🎬",
                "cat": 0
              },
              {
                "text": "The weather was bad. We __ to the beach. ⛈️",
                "cat": 1
              },
              {
                "text": "Last Sunday I __ fishing with my dad. 🎣",
                "cat": 0
              },
              {
                "text": "I was sick. I __ to the party. 🤒",
                "cat": 1
              },
              {
                "text": "We __ swimming. The water was great! 🏊",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Win or lose?",
            "short": "Ganhar ou perder",
            "instructions": "Escolha a frase que completa a história.",
            "pairs": [
              [
                "We played basketball on Saturday. We lost!",
                "We didn't win."
              ],
              [
                "I went to the game. It was great!",
                "We won!"
              ],
              [
                "On Sunday we had lunch at home.",
                "We didn't eat out."
              ],
              [
                "Yesterday I played video games.",
                "I didn't watch TV."
              ],
              [
                "Monday we didn't eat out.",
                "We went on a picnic."
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Free time or not?",
            "short": "Descrever o fim de semana",
            "instructions": "A frase descreve um fim de semana divertido ou chato?",
            "categories": [
              "Exciting 🤩",
              "Boring 🥱"
            ],
            "items": [
              {
                "text": "We won the game! We sang and shouted a lot!",
                "cat": 0
              },
              {
                "text": "I didn't do anything special.",
                "cat": 1
              },
              {
                "text": "We saw giant dinosaurs at the museum!",
                "cat": 0
              },
              {
                "text": "It rained. I didn't go out.",
                "cat": 1
              },
              {
                "text": "I went rock climbing for the first time!",
                "cat": 0
              },
              {
                "text": "I stayed home alone all day.",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Ouça e escolha o significado da atividade.",
            "listen": "go hiking",
            "options": [
              "fazer trilha",
              "pescar",
              "nadar",
              "patinar no gelo"
            ],
            "answer": 0,
            "explain": "Go hiking é fazer trilha (caminhar na natureza). Pescar é go fishing, nadar é go swimming e patinar no gelo é go ice skating."
          },
          {
            "type": "mc",
            "q": "Como se diz “ir ao cinema” em inglês?",
            "options": [
              "go to the movies",
              "go to the beach",
              "visit a museum",
              "eat out"
            ],
            "answer": 0,
            "explain": "Go to the movies = ir ao cinema."
          },
          {
            "type": "mc",
            "q": "Complete: “We ________ on a picnic because it was raining!”",
            "options": [
              "didn't go",
              "went",
              "won",
              "didn't went"
            ],
            "answer": 0,
            "explain": "Com chuva o piquenique não aconteceu, então usamos didn't go. Didn't went está errado: depois de didn't o verbo fica normal."
          },
          {
            "type": "mc",
            "q": "Complete: “We played basketball on Saturday. We ________. We lost!”",
            "options": [
              "didn't win",
              "won",
              "went",
              "didn't lose"
            ],
            "answer": 0,
            "explain": "Se perderam (lost), então não ganharam: didn't win."
          },
          {
            "type": "mc",
            "q": "Qual frase está escrita corretamente?",
            "options": [
              "I didn't watch TV.",
              "I didn't watched TV.",
              "I don't watched TV.",
              "I not watch TV."
            ],
            "answer": 0,
            "explain": "Depois de didn't o verbo fica na forma normal: I didn't watch TV."
          },
          {
            "type": "mc",
            "q": "“How was your weekend?” Qual resposta faz sentido?",
            "options": [
              "It was boring. I didn't do anything special.",
              "Yes, I did. I liked it a lot.",
              "I go to school every Monday.",
              "It is Monday and it is sunny."
            ],
            "answer": 0,
            "explain": "How was…? pergunta como foi. A resposta descreve o fim de semana: It was boring (foi chato)."
          },
          {
            "type": "mc",
            "q": "“What did you do last weekend?” Escolha a melhor resposta.",
            "options": [
              "I went swimming.",
              "I go swimming.",
              "I am swimming.",
              "Yes, I did."
            ],
            "answer": 0,
            "explain": "Last weekend é passado, então a resposta usa went: I went swimming."
          },
          {
            "type": "mc",
            "q": "Ouça a frase e escolha o que ela quer dizer.",
            "listen": "I didn't eat out. I stayed home.",
            "options": [
              "Não comi fora. Fiquei em casa.",
              "Comi fora. Não fiquei em casa.",
              "Fui ao cinema e comi pipoca.",
              "Fiquei em casa e cozinhei."
            ],
            "answer": 0,
            "explain": "Didn't eat out = não comi fora. Stayed home = fiquei em casa."
          },
          {
            "type": "mc",
            "q": "Qual palavra quer dizer “emocionante”?",
            "options": [
              "exciting",
              "boring",
              "busy",
              "interesting"
            ],
            "answer": 0,
            "explain": "Exciting = emocionante. Boring = chato, busy = ocupado, interesting = interessante."
          },
          {
            "type": "mc",
            "q": "Segundo o texto “Wow! Look at That!”, onde fica o Children's Museum?",
            "options": [
              "In Indianapolis, USA",
              "In Mexico City",
              "In Thailand",
              "In Rio de Janeiro"
            ],
            "answer": 0,
            "explain": "The Children's Museum fica em Indianapolis, nos Estados Unidos (USA)."
          },
          {
            "type": "mc",
            "q": "No Children's Museum, onde você aprende sobre as estrelas?",
            "options": [
              "in the planetarium",
              "in the theater",
              "outside the museum",
              "at the beach"
            ],
            "answer": 0,
            "explain": "You can learn about the stars in the planetarium (planetário)."
          },
          {
            "type": "mc",
            "q": "Qual palavra Hassan usa para dizer a ordem das coisas no texto “My Perfect Weekend”?",
            "options": [
              "first",
              "busy",
              "lose",
              "boring"
            ],
            "answer": 0,
            "explain": "First, then, next e after that mostram quando as coisas aconteceram: First I ate my favorite breakfast. After that I went fishing."
          },
          {
            "type": "text",
            "q": "Escreva em inglês: “nadar”, usando go + -ing.",
            "answers": [
              "go swimming",
              "swimming",
              "went swimming"
            ],
            "explain": "Go swimming. No passado: I went swimming."
          }
        ]
      },
      {
        "id": "sim_ingles",
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + 15 questões sorteadas de todos os módulos",
        "exam": {
          "size": 15
        },
        "theory": [
          {
            "h": "Resumo da prova: vocabulary",
            "p": [
              "A prova cobra <strong>Listening</strong> (ouvir), <strong>Reading Comprehension</strong> (ler e entender) e <strong>Use of English</strong> (usar as palavras e a gramática). Revise as três Units com os cartões abaixo.",
              "<strong>Unit 7 – Feeling Fit:</strong> partes do corpo (shoulder, elbow, chest, stomach, back, knee, fingers, toes, muscle, bone) e hábitos (get exercise, eat fruit, eat vegetables, get rest, eat junk food).",
              "<strong>Unit 8 – Let's Celebrate:</strong> costume, mask, party, feast, lantern, fireworks, decorations, parade, celebrate, remember, dance, dress up; present, birthday cake, candles, invitation, balloons.",
              "<strong>Unit 9 – My Weekend:</strong> eat out, go to the movies, visit a museum, go on a picnic, stay home, go to the beach, text my friends, win, lose, exciting, interesting, busy; go swimming, go fishing, go hiking, go horseback riding, go ice skating."
            ],
            "cards": [
              {
                "icon": "💪",
                "en": "elbow",
                "pt": "cotovelo"
              },
              {
                "icon": "🦵",
                "en": "knee",
                "pt": "joelho"
              },
              {
                "icon": "🦶",
                "en": "toes",
                "pt": "dedos dos pés"
              },
              {
                "icon": "🎭",
                "en": "mask",
                "pt": "máscara"
              },
              {
                "icon": "🎺",
                "en": "parade",
                "pt": "desfile"
              },
              {
                "icon": "🏮",
                "en": "lantern",
                "pt": "lanterna"
              },
              {
                "icon": "🎬",
                "en": "go to the movies",
                "pt": "ir ao cinema"
              },
              {
                "icon": "🎣",
                "en": "go fishing",
                "pt": "pescar"
              },
              {
                "icon": "🏠",
                "en": "stay home",
                "pt": "ficar em casa"
              }
            ]
          },
          {
            "h": "Resumo da prova: grammar",
            "figure": {
              "src": "assets/4b/ing09-didnt.svg",
              "alt": "Duas colunas: coisas que eu fiz (went, won, watched) e coisas que eu não fiz (didn't go, didn't win, didn't watch).",
              "tipo": "diagrama"
            },
            "p": [
              "Tudo gira em torno do <strong>simple past</strong> (passado). Pergunta: <strong>Did</strong> + pessoa + verbo normal? → <em>Did you watch the parade?</em>",
              "<strong>Resposta curta (Unit 7):</strong> <em>Yes, I did.</em> / <em>No, I didn't.</em> — repita a pessoa: <em>Did she…? → Yes, she did.</em>",
              "<strong>Resposta longa (Unit 8):</strong> verbo no passado. Regulares ganham <strong>-ed</strong> (watched, played, danced). Irregulares mudam: <strong>went, saw, ate, sang, drank, wore, had, wrote, gave, took</strong>.",
              "<strong>Negativa (Unit 9):</strong> <strong>didn't</strong> + verbo normal: <em>I didn't go. We didn't win.</em> Nunca: <em>didn't went</em>.",
              "<strong>Too / Enough (Unit 7):</strong> too much (TV, soda, junk food), too many (cookies, candies, chips), enough (sleep, water, exercise)."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Which unit?",
            "short": "De qual Unit?",
            "instructions": "Em qual Unit esta palavra apareceu?",
            "categories": [
              "Unit 7 · Feeling Fit 💪",
              "Unit 8 · Let's Celebrate 🎉",
              "Unit 9 · My Weekend 🏖️"
            ],
            "items": [
              {
                "text": "elbow",
                "cat": 0
              },
              {
                "text": "lantern",
                "cat": 1
              },
              {
                "text": "go hiking",
                "cat": 2
              },
              {
                "text": "get rest",
                "cat": 0
              },
              {
                "text": "fireworks",
                "cat": 1
              },
              {
                "text": "eat out",
                "cat": 2
              },
              {
                "text": "stomach",
                "cat": 0
              },
              {
                "text": "costume",
                "cat": 1
              },
              {
                "text": "visit a museum",
                "cat": 2
              }
            ]
          },
          {
            "type": "memory",
            "title": "Memória do passado",
            "short": "Memória final",
            "instructions": "Ache o verbo e o seu passado.",
            "items": [
              {
                "base": "go",
                "result": "went"
              },
              {
                "base": "watch",
                "result": "watched"
              },
              {
                "base": "see",
                "result": "saw"
              },
              {
                "base": "win",
                "result": "won"
              },
              {
                "base": "eat",
                "result": "ate"
              },
              {
                "base": "dance",
                "result": "danced"
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Ouça a palavra e escolha a parte do corpo certa.",
            "listen": "elbow",
            "options": [
              "cotovelo",
              "joelho",
              "ombro",
              "costas"
            ],
            "answer": 0,
            "explain": "Elbow é o cotovelo. Knee é joelho, shoulder é ombro e back são as costas.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Como se diz “dedos dos pés” em inglês?",
            "options": [
              "toes",
              "fingers",
              "knees",
              "bones"
            ],
            "answer": 0,
            "explain": "Toes são os dedos dos pés. Fingers são os dedos das mãos.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Did you brush your teeth yesterday? ✅ (você escovou)",
            "options": [
              "Yes, I did.",
              "No, I didn't.",
              "Yes, I do.",
              "Yes, I brush."
            ],
            "answer": 0,
            "explain": "Pergunta com Did pede resposta curta com did: Yes, I did. Didn't seria se você NÃO tivesse escovado.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Did he take a shower? ❌ (ele não tomou banho)",
            "options": [
              "No, he didn't.",
              "Yes, he did.",
              "No, I didn't.",
              "No, she didn't."
            ],
            "answer": 0,
            "explain": "A pergunta fala de he (ele) e a resposta é não: No, he didn't. A resposta repete a mesma pessoa da pergunta.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Complete a pergunta: “____ you ride your bike yesterday?”",
            "options": [
              "Did",
              "Do",
              "Does",
              "Are"
            ],
            "answer": 0,
            "explain": "Yesterday (ontem) mostra que é passado. Para perguntar no passado usamos Did.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Qual pergunta está escrita corretamente?",
            "options": [
              "Did she eat fruit?",
              "Did she ate fruit?",
              "Did she eats fruit?",
              "She did eat fruit?"
            ],
            "answer": 0,
            "explain": "Depois de Did, o verbo fica na forma normal: Did she eat fruit? (e não ate nem eats).",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Complete: “I don't watch ________ TV. Only one hour a day.”",
            "options": [
              "too much",
              "too many",
              "enough",
              "a"
            ],
            "answer": 0,
            "explain": "TV não se conta uma por uma, então usamos too much. A frase diz que a pessoa NÃO vê TV demais.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Complete: “He eats ________ chips. A big bag every day!”",
            "options": [
              "too many",
              "too much",
              "enough",
              "an"
            ],
            "answer": 1,
            "explain": "Chips são coisas que podemos contar (um, dois, três salgadinhos), então usamos too many.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "“I sleep nine hours every night. I get ________ sleep.” Qual palavra mostra que está na medida certa?",
            "options": [
              "too much",
              "too many",
              "enough",
              "junk"
            ],
            "answer": 2,
            "explain": "Enough quer dizer o suficiente, a quantidade certa.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Qual destes hábitos é BAD for you (ruim para você)?",
            "options": [
              "eat junk food every day",
              "get exercise",
              "eat vegetables",
              "get enough rest"
            ],
            "answer": 0,
            "explain": "Comer junk food (porcarias) todo dia não faz bem. Os outros são bons hábitos.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Ouça a frase e escolha o que ela significa.",
            "listen": "Stretch your arms!",
            "options": [
              "Estique os braços!",
              "Dobre os joelhos!",
              "Lave as mãos!",
              "Mexa os dedos!"
            ],
            "answer": 0,
            "explain": "Stretch é esticar, e arms são os braços. Dobrar seria bend.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Segundo o texto “Take Care of Your Brain!”, quantos minutos de exercício por dia já ajudam o cérebro?",
            "options": [
              "10 minutos",
              "45 minutos",
              "2 horas",
              "10 horas"
            ],
            "answer": 0,
            "explain": "O texto diz que só ten minutes (10 minutos) por dia já fazem o corpo e o cérebro se sentirem melhor. Os 45 minutos são o tempo que o corpo fica bem depois de uma boa risada.",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "No texto, o que é um “forest bath”?",
            "options": [
              "Passar um tempo na natureza",
              "Tomar banho de chuveiro",
              "Nadar na piscina",
              "Lavar as mãos"
            ],
            "answer": 0,
            "explain": "Forest bath (banho de floresta) é passar um tempo ao ar livre, em um lugar natural como a floresta. Isso relaxa o cérebro.",
            "from": "Feeling Fit"
          },
          {
            "type": "text",
            "q": "Escreva em inglês a parte do corpo que fica no meio da perna: o joelho.",
            "answers": [
              "knee",
              "a knee",
              "the knee",
              "knees"
            ],
            "explain": "Joelho em inglês é knee (o k não é pronunciado: /ni:/).",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Ouça a palavra e escolha o significado.",
            "listen": "a parade",
            "options": [
              "um desfile",
              "um convite",
              "uma fantasia",
              "um banquete"
            ],
            "answer": 0,
            "explain": "Parade é desfile. Convite é invitation, fantasia é costume e banquete é feast.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "“They are long and thin. You put them on a birthday cake.” What are they?",
            "options": [
              "candles",
              "balloons",
              "presents",
              "masks"
            ],
            "answer": 0,
            "explain": "Candles (velas) são compridas e finas e vão em cima do bolo de aniversário.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Qual é o passado do verbo watch?",
            "options": [
              "watched",
              "watch",
              "wached",
              "watchs"
            ],
            "answer": 0,
            "explain": "Watch é regular: ganha -ed e vira watched.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Qual é o passado do verbo go?",
            "options": [
              "went",
              "goed",
              "gone",
              "goes"
            ],
            "answer": 0,
            "explain": "Go é irregular: no passado vira went. Exemplo: I went to the parade.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Did you see the fireworks? Escolha a resposta longa correta.",
            "options": [
              "Yes, I saw the fireworks.",
              "Yes, I seed the fireworks.",
              "Yes, I see the fireworks.",
              "Yes, I seeing the fireworks."
            ],
            "answer": 0,
            "explain": "See é irregular. No passado vira saw: Yes, I saw the fireworks.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Did you eat cake at the party? Escolha a resposta correta.",
            "options": [
              "Yes, I ate a piece of cake.",
              "Yes, I eated a piece of cake.",
              "Yes, I eat a piece of cake.",
              "Yes, I eaten a piece of cake."
            ],
            "answer": 0,
            "explain": "Eat é irregular: o passado é ate.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Complete: “Yesterday I ______ in my favorite costume. I was a superhero!”",
            "options": [
              "dressed up",
              "dress up",
              "dressing up",
              "dresses up"
            ],
            "answer": 0,
            "explain": "Yesterday mostra que é passado. Dress é regular: dress up vira dressed up.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Qual destes verbos é IRREGULAR?",
            "options": [
              "sing",
              "play",
              "dance",
              "listen"
            ],
            "answer": 0,
            "explain": "Sing vira sang no passado (muda de forma). Os outros ganham -ed: played, danced, listened.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Ouça e escolha o passado do verbo que você ouviu.",
            "listen": "drink",
            "options": [
              "drank",
              "drinked",
              "drunk",
              "drinks"
            ],
            "answer": 0,
            "explain": "Você ouviu drink (beber). No passado ele vira drank.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Segundo o texto “November Celebrations”, onde acontece o Day of the Dead?",
            "options": [
              "In Mexico",
              "In Thailand",
              "In Brazil",
              "In Japan"
            ],
            "answer": 0,
            "explain": "O Day of the Dead é um grande festival no México, no primeiro dia de novembro.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "No texto, o Day of the Dead é uma festa triste?",
            "options": [
              "Não, é uma festa alegre",
              "Sim, é muito triste",
              "Sim, porque é assustadora",
              "Não, porque ninguém vai"
            ],
            "answer": 0,
            "explain": "O texto diz que para os mexicanos caveiras e esqueletos não são assustadores e que a festa é a time for fun and happy celebrations.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "No festival Yi Peng, na Tailândia, o que milhares de pessoas soltam no céu?",
            "options": [
              "lanterns",
              "balloons",
              "masks",
              "presents"
            ],
            "answer": 0,
            "explain": "Thousands of bright lanterns go up into the sky. As pessoas acreditam que elas levam embora as coisas ruins.",
            "from": "Let's Celebrate"
          },
          {
            "type": "text",
            "q": "Escreva o passado do verbo play.",
            "answers": [
              "played"
            ],
            "explain": "Play é regular: play + ed = played. Exemplo: After dinner all the children played games.",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Ouça e escolha o significado da atividade.",
            "listen": "go hiking",
            "options": [
              "fazer trilha",
              "pescar",
              "nadar",
              "patinar no gelo"
            ],
            "answer": 0,
            "explain": "Go hiking é fazer trilha (caminhar na natureza). Pescar é go fishing, nadar é go swimming e patinar no gelo é go ice skating.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Como se diz “ir ao cinema” em inglês?",
            "options": [
              "go to the movies",
              "go to the beach",
              "visit a museum",
              "eat out"
            ],
            "answer": 0,
            "explain": "Go to the movies = ir ao cinema.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Complete: “We ________ on a picnic because it was raining!”",
            "options": [
              "didn't go",
              "went",
              "won",
              "didn't went"
            ],
            "answer": 0,
            "explain": "Com chuva o piquenique não aconteceu, então usamos didn't go. Didn't went está errado: depois de didn't o verbo fica normal.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Complete: “We played basketball on Saturday. We ________. We lost!”",
            "options": [
              "didn't win",
              "won",
              "went",
              "didn't lose"
            ],
            "answer": 0,
            "explain": "Se perderam (lost), então não ganharam: didn't win.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Qual frase está escrita corretamente?",
            "options": [
              "I didn't watch TV.",
              "I didn't watched TV.",
              "I don't watched TV.",
              "I not watch TV."
            ],
            "answer": 0,
            "explain": "Depois de didn't o verbo fica na forma normal: I didn't watch TV.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "“How was your weekend?” Qual resposta faz sentido?",
            "options": [
              "It was boring. I didn't do anything special.",
              "Yes, I did. I liked it a lot.",
              "I go to school every Monday.",
              "It is Monday and it is sunny."
            ],
            "answer": 0,
            "explain": "How was…? pergunta como foi. A resposta descreve o fim de semana: It was boring (foi chato).",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "“What did you do last weekend?” Escolha a melhor resposta.",
            "options": [
              "I went swimming.",
              "I go swimming.",
              "I am swimming.",
              "Yes, I did."
            ],
            "answer": 0,
            "explain": "Last weekend é passado, então a resposta usa went: I went swimming.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Ouça a frase e escolha o que ela quer dizer.",
            "listen": "I didn't eat out. I stayed home.",
            "options": [
              "Não comi fora. Fiquei em casa.",
              "Comi fora. Não fiquei em casa.",
              "Fui ao cinema e comi pipoca.",
              "Fiquei em casa e cozinhei."
            ],
            "answer": 0,
            "explain": "Didn't eat out = não comi fora. Stayed home = fiquei em casa.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Qual palavra quer dizer “emocionante”?",
            "options": [
              "exciting",
              "boring",
              "busy",
              "interesting"
            ],
            "answer": 0,
            "explain": "Exciting = emocionante. Boring = chato, busy = ocupado, interesting = interessante.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Segundo o texto “Wow! Look at That!”, onde fica o Children's Museum?",
            "options": [
              "In Indianapolis, USA",
              "In Mexico City",
              "In Thailand",
              "In Rio de Janeiro"
            ],
            "answer": 0,
            "explain": "The Children's Museum fica em Indianapolis, nos Estados Unidos (USA).",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "No Children's Museum, onde você aprende sobre as estrelas?",
            "options": [
              "in the planetarium",
              "in the theater",
              "outside the museum",
              "at the beach"
            ],
            "answer": 0,
            "explain": "You can learn about the stars in the planetarium (planetário).",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Qual palavra Hassan usa para dizer a ordem das coisas no texto “My Perfect Weekend”?",
            "options": [
              "first",
              "busy",
              "lose",
              "boring"
            ],
            "answer": 0,
            "explain": "First, then, next e after that mostram quando as coisas aconteceram: First I ate my favorite breakfast. After that I went fishing.",
            "from": "My Weekend"
          },
          {
            "type": "text",
            "q": "Escreva em inglês: “nadar”, usando go + -ing.",
            "answers": [
              "go swimming",
              "swimming",
              "went swimming"
            ],
            "explain": "Go swimming. No passado: I went swimming.",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Ouça a pergunta e escolha a resposta que combina.",
            "listen": "Did you go to the parade?",
            "options": [
              "Yes, I went to the parade.",
              "Yes, I go to the parade.",
              "Yes, I goed to the parade.",
              "Yes, you did go."
            ],
            "answer": 0,
            "explain": "A pergunta é no passado (Did). Go é irregular: a resposta longa usa went.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Ouça e escolha a palavra que você ouviu.",
            "listen": "fireworks",
            "options": [
              "fireworks",
              "feast",
              "fingers",
              "fishing"
            ],
            "answer": 0,
            "explain": "Você ouviu fireworks (fogos de artifício). Todas começam com f, por isso preste atenção no som do final.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Você tem fingers nas mãos e ________ nos pés.",
            "options": [
              "toes",
              "knees",
              "elbows",
              "bones"
            ],
            "answer": 0,
            "explain": "Fingers são os dedos das mãos; toes são os dedos dos pés.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Did your team win? ❌ (o time perdeu)",
            "options": [
              "No, they didn't win. They lost.",
              "Yes, they won.",
              "No, they didn't won.",
              "Yes, they did win a lot."
            ],
            "answer": 0,
            "explain": "O time perdeu (lost), então não ganhou: No, they didn't win. Depois de didn't o verbo fica normal (win, não won).",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual é o passado de write?",
            "options": [
              "wrote",
              "writed",
              "written",
              "writes"
            ],
            "answer": 0,
            "explain": "Write é irregular: write → wrote.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Complete: “Do you get ________ exercise? Yes, I go running and I love swimming.”",
            "options": [
              "enough",
              "too many",
              "a",
              "didn't"
            ],
            "answer": 0,
            "explain": "A pessoa faz exercício na medida certa: enough exercise.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual destas coisas você vê em uma birthday party?",
            "options": [
              "candles",
              "toes",
              "a muscle",
              "a museum"
            ],
            "answer": 0,
            "explain": "Candles (velas) vão no bolo de aniversário (birthday cake).",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Ouça e escolha o significado.",
            "listen": "We went swimming.",
            "options": [
              "Nós fomos nadar.",
              "Nós vamos nadar.",
              "Nós não fomos nadar.",
              "Nós gostamos de nadar."
            ],
            "answer": 0,
            "explain": "Went é o passado de go: we went swimming = nós fomos nadar.",
            "from": "Simulado"
          }
        ]
      }
    ]
  },
  {
    "id": "portugues",
    "nome": "Língua Portuguesa",
    "cor": "--rosa",
    "prova": "2026-11-23",
    "horario": "12h55 às 14h25",
    "capitulos": [
      {
        "id": "lp23",
        "module": "23",
        "title": "Tic-tac!",
        "subtitle": "Poema e poema visual · Pronomes possessivos",
        "theory": [
          {
            "h": "O poema: versos, estrofes, rima e ritmo",
            "figure": {
              "src": "assets/4b/lp23-poema.svg",
              "alt": "Esquema de um poema mostrando o título, os versos (cada linha) e as estrofes (grupos de versos), com rimas destacadas.",
              "tipo": "diagrama"
            },
            "p": [
              "O <strong>poema</strong> é um texto organizado em <strong>versos</strong> (cada linha do poema) e em <strong>estrofes</strong> (cada grupo de versos). É comum ter <strong>rimas</strong>, <strong>ritmo</strong> e <strong>repetição de sons</strong> parecidos.",
              "No poema <em>O relógio</em>, de Vinicius de Moraes, a expressão <strong>tic-tac</strong> se repete muitas vezes. Ela imita o som do relógio e mostra <strong>o passar do tempo</strong>: <em>Passa, tempo, tic-tac / Tic-tac, passa, hora</em>.",
              "O <strong>ritmo</strong> é como uma batida que se repete, igual ao som do relógio. Ao ler o poema batendo palmas nas sílabas fortes, sentimos esse ritmo.",
              "O poema serve para <strong>entreter</strong> e emocionar o leitor, brincando com as palavras. Ele não serve para dar notícias nem para ensinar a usar um objeto."
            ],
            "cards": [
              {
                "icon": "📏",
                "t": "verso",
                "d": "cada linha do poema"
              },
              {
                "icon": "🧱",
                "t": "estrofe",
                "d": "grupo de versos"
              },
              {
                "icon": "🎵",
                "t": "rima",
                "d": "sons parecidos no fim das palavras"
              },
              {
                "icon": "🥁",
                "t": "ritmo",
                "d": "batida que se repete"
              }
            ]
          },
          {
            "h": "O poema visual",
            "figure": {
              "src": "assets/4b/lp23-visual.svg",
              "alt": "Poema visual: a palavra pêndulo escrita letra por letra balançando como o pêndulo de um relógio.",
              "tipo": "diagrama"
            },
            "p": [
              "No <strong>poema visual</strong>, as letras e as palavras são organizadas de um jeito diferente e <strong>formam figuras</strong>. O jeito como ele é escrito tem relação com o conteúdo.",
              "No poema <em>Pêndulo</em>, de E. M. de Melo e Castro, as letras da palavra <strong>pêndulo</strong> vão para um lado e para o outro, como o pêndulo de um relógio antigo que balança.",
              "No poema <em>Canção para ninar gato com insônia</em>, de Sérgio Capparelli, as palavras <em>ron ron</em> formam o desenho de um gato.",
              "O poema visual <strong>não precisa</strong> ter rima nem ser dividido em versos e estrofes. O mais importante é que <strong>a forma combine com o conteúdo</strong>."
            ]
          },
          {
            "h": "Pronomes possessivos",
            "figure": {
              "src": "assets/4b/lp23-possessivos.svg",
              "alt": "Quadro dos pronomes possessivos por pessoa: meu, minha, teu, tua, seu, sua, nosso, nossa, vosso, vossa, seu, sua, no singular e no plural.",
              "tipo": "diagrama"
            },
            "p": [
              "Os <strong>pronomes possessivos</strong> acompanham o substantivo e dão <strong>ideia de posse</strong>: mostram que algo pertence a alguém. Exemplo: <em><strong>Meu</strong> tic-tac</em>, <em><strong>Seu</strong> relógio está adiantado?</em>, <em><strong>nosso</strong> tempo passa rápido</em>.",
              "Eles variam em <strong>pessoa</strong> (1ª, 2ª, 3ª), em <strong>gênero</strong> (masculino, feminino) e em <strong>número</strong> (singular, plural).",
              "1ª pessoa (eu): <strong>meu, minha, meus, minhas</strong>. 2ª pessoa (tu): <strong>teu, tua, teus, tuas</strong>. 3ª pessoa (ele/ela): <strong>seu, sua, seus, suas</strong>.",
              "1ª pessoa do plural (nós): <strong>nosso, nossa, nossos, nossas</strong>. 2ª pessoa do plural (vós): <strong>vosso, vossa, vossos, vossas</strong>. 3ª do plural (eles/elas): <strong>seu, sua, seus, suas</strong>.",
              "Na tirinha do Armandinho, ele diz ao pai: <em>A <strong>sua</strong> cabeça está na frente do relógio!</em> O pronome <strong>sua</strong> mostra que a cabeça é do pai."
            ],
            "cards": [
              {
                "icon": "🙋",
                "t": "eu",
                "d": "meu · minha · meus · minhas"
              },
              {
                "icon": "👉",
                "t": "tu",
                "d": "teu · tua · teus · tuas"
              },
              {
                "icon": "🧍",
                "t": "ele / ela",
                "d": "seu · sua · seus · suas"
              },
              {
                "icon": "👨‍👩‍👧",
                "t": "nós",
                "d": "nosso · nossa · nossos · nossas"
              },
              {
                "icon": "👥",
                "t": "vós",
                "d": "vosso · vossa · vossos · vossas"
              },
              {
                "icon": "🧑‍🤝‍🧑",
                "t": "eles / elas",
                "d": "seu · sua · seus · suas"
              }
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "De quem é?",
            "short": "Pessoa do possessivo",
            "instructions": "A palavra em destaque indica qual pessoa do discurso?",
            "categories": [
              "1ª pessoa (eu, nós)",
              "2ª pessoa (tu, vós)",
              "3ª pessoa (ele, eles)"
            ],
            "items": [
              {
                "text": "MEUS ouvidos adoram música clássica.",
                "cat": 0
              },
              {
                "text": "TEUS biscoitos são deliciosos!",
                "cat": 1
              },
              {
                "text": "A NOSSA mala já está arrumada.",
                "cat": 0
              },
              {
                "text": "Ela trouxe SUA mochila nova.",
                "cat": 2
              },
              {
                "text": "Tu arrumaste o TEU material?",
                "cat": 1
              },
              {
                "text": "Eles acabaram SUAS pesquisas.",
                "cat": 2
              },
              {
                "text": "MINHA lição está pronta.",
                "cat": 0
              },
              {
                "text": "VOSSA casa é muito bonita.",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Complete com o possessivo",
            "short": "Complete a frase",
            "instructions": "Escolha o pronome possessivo que completa a frase.",
            "pairs": [
              [
                "O que eu ganho é…",
                "meu"
              ],
              [
                "O que tu ganhaste é…",
                "teu"
              ],
              [
                "O que nós ganhamos é…",
                "nosso"
              ],
              [
                "As camisas que eu ganhei são…",
                "minhas"
              ],
              [
                "O que vos deram é…",
                "vosso"
              ],
              [
                "Os presentes que lhe dei são…",
                "seus"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Poema ou poema visual?",
            "short": "Tipos de poema",
            "instructions": "A pista descreve um poema em versos ou um poema visual?",
            "categories": [
              "Poema em versos e estrofes",
              "Poema visual"
            ],
            "items": [
              {
                "text": "As letras formam o desenho de um gato.",
                "cat": 1
              },
              {
                "text": "“Passa, tempo, tic-tac / Tic-tac, passa, hora”",
                "cat": 0
              },
              {
                "text": "A palavra pêndulo balança como um relógio.",
                "cat": 1
              },
              {
                "text": "Tem 18 linhas e rimas no fim.",
                "cat": 0
              },
              {
                "text": "Palavras com tamanhos diferentes formam uma árvore.",
                "cat": 1
              },
              {
                "text": "Está organizado em estrofes com ritmo.",
                "cat": 0
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "O poema “O relógio”, de Vinicius de Moraes, serve principalmente para:",
            "options": [
              "entreter e divertir o leitor",
              "informar um acontecimento real",
              "ensinar a consertar um relógio",
              "vender um relógio novo"
            ],
            "answer": 0,
            "explain": "Poemas brincam com as palavras, o ritmo e os sons para entreter e emocionar o leitor."
          },
          {
            "type": "mc",
            "q": "No poema “O relógio”, a repetição da expressão tic-tac indica:",
            "options": [
              "o passar do tempo",
              "que o relógio está quebrado",
              "que o relógio é barulhento demais",
              "que está chovendo"
            ],
            "answer": 0,
            "explain": "Tic-tac imita o som do relógio e, repetido, mostra o tempo passando sem parar."
          },
          {
            "type": "mc",
            "q": "Cada linha de um poema recebe o nome de:",
            "options": [
              "verso",
              "estrofe",
              "parágrafo",
              "título"
            ],
            "answer": 0,
            "explain": "Cada linha é um verso. Um grupo de versos forma uma estrofe."
          },
          {
            "type": "mc",
            "q": "Um grupo de versos de um poema é chamado de:",
            "options": [
              "estrofe",
              "verso",
              "rima",
              "frase"
            ],
            "answer": 0,
            "explain": "Estrofe é o conjunto de versos, como um bloco do poema."
          },
          {
            "type": "mc",
            "q": "Sobre os poemas visuais, o que é verdade?",
            "options": [
              "A forma do poema tem relação com o conteúdo.",
              "Precisam sempre ter rima.",
              "Sempre têm versos e estrofes.",
              "São lidos enquanto se desenha."
            ],
            "answer": 0,
            "explain": "No poema visual as letras formam figuras ligadas ao assunto, como em “Pêndulo”. Ele não precisa ter rima nem estrofes."
          },
          {
            "type": "mc",
            "q": "Qual destes NÃO é um poema visual?",
            "options": [
              "Um poema acompanhado de uma xilogravura",
              "Um poema em forma de estrela",
              "Um poema que forma a imagem de uma árvore",
              "Um poema com letras de tamanhos diferentes formando uma imagem"
            ],
            "answer": 0,
            "explain": "No poema visual são as próprias letras e palavras que formam a figura. Um desenho ao lado do poema não o torna visual."
          },
          {
            "type": "mc",
            "q": "Em qual frase há um pronome possessivo?",
            "options": [
              "A camisa amarela é sua?",
              "Aqueles meninos brincam sem parar.",
              "Nós estamos prontos!",
              "Você não está entendendo."
            ],
            "answer": 0,
            "explain": "Sua indica a quem a camisa pertence: é um pronome possessivo."
          },
          {
            "type": "mc",
            "q": "Complete: “João e eu temos um videogame. O videogame é ______.”",
            "options": [
              "nosso",
              "meu",
              "deles",
              "seu"
            ],
            "answer": 0,
            "explain": "João e eu = nós. O pronome possessivo de nós é nosso."
          },
          {
            "type": "mc",
            "q": "Nos versos “Toda a alegria / De fazer / Meu tic-tac”, que ideia a palavra meu transmite?",
            "options": [
              "Posse",
              "Tempo",
              "Lugar",
              "Quantidade"
            ],
            "answer": 0,
            "explain": "Meu é pronome possessivo: mostra que o tic-tac pertence a quem fala."
          },
          {
            "type": "mc",
            "q": "Na frase “Teus biscoitos são deliciosos!”, o pronome teus é da:",
            "options": [
              "2ª pessoa do discurso",
              "1ª pessoa do discurso",
              "3ª pessoa do discurso",
              "nenhuma pessoa"
            ],
            "answer": 0,
            "explain": "Teu, tua, teus, tuas são da 2ª pessoa (tu), com quem se fala."
          },
          {
            "type": "mc",
            "q": "Qual é o feminino plural do pronome meu?",
            "options": [
              "minhas",
              "meus",
              "minha",
              "nossas"
            ],
            "answer": 0,
            "explain": "Meu (masc. sing.), meus (masc. pl.), minha (fem. sing.), minhas (fem. pl.)."
          },
          {
            "type": "mc",
            "q": "Na tirinha, Armandinho diz ao pai: “A sua cabeça está na frente do relógio!”. De quem é a cabeça?",
            "options": [
              "Do pai",
              "Do Armandinho",
              "Do sapo",
              "Do relógio"
            ],
            "answer": 0,
            "explain": "Armandinho fala com o pai, então sua se refere ao pai. Por isso o pai não via a hora."
          },
          {
            "type": "text",
            "q": "Que palavra do poema “O relógio” imita o som produzido por um relógio?",
            "answers": [
              "tic-tac",
              "tic tac",
              "tictac"
            ],
            "explain": "Tic-tac é a palavra que imita o som do relógio."
          }
        ]
      },
      {
        "id": "lp24",
        "module": "24",
        "title": "Aventura e diversão",
        "subtitle": "Texto informativo · Pronomes demonstrativos",
        "theory": [
          {
            "h": "O texto informativo",
            "figure": {
              "src": "assets/4b/lp24-montanha.svg",
              "alt": "Linha do tempo da montanha-russa: século 15 na Rússia com rampas de neve, 1784 em São Petersburgo, 1827 nos Estados Unidos, 1884 a montanha-russa como conhecemos, 1959 tubos de aço.",
              "tipo": "diagrama"
            },
            "p": [
              "O <strong>texto informativo</strong> apresenta <strong>acontecimentos reais</strong> e informações, em geral com <strong>datas e locais precisos</strong>. Ele não conta uma história inventada nem tem magia.",
              "O texto <em>Como surgiu a montanha-russa?</em>, da revista <em>Superinteressante</em>, explica que a diversão começou na <strong>Rússia</strong>, no século 15: as pessoas deslizavam em <strong>blocos de gelo</strong> por rampas cobertas de neve. Por isso o brinquedo se chama montanha-<strong>russa</strong>.",
              "Em 1784, em São Petersburgo, foi construído o primeiro trenzinho. Em 1827, os Estados Unidos fizeram a sua primeira montanha-russa nos trilhos de uma mina de carvão. A montanha-russa como conhecemos hoje surgiu em <strong>1884</strong>, nos Estados Unidos; em 1959 surgiu o modelo de tubos de aço.",
              "Outro exemplo: a montanha-russa mais comprida do mundo é a <strong>Steel Dragon</strong>, no <strong>Japão</strong>, com <strong>2 479 metros</strong> e velocidade de <strong>153 km/h</strong>.",
              "Na apresentação oral de uma pesquisa, devemos indicar a fonte, preparar um roteiro, usar um cartaz e falar com tom de voz claro."
            ]
          },
          {
            "h": "Pronomes demonstrativos",
            "figure": {
              "src": "assets/4b/lp24-demonstrativos.svg",
              "alt": "Esquema de distância: este perto de quem fala, esse perto de quem ouve, aquele longe dos dois.",
              "tipo": "diagrama"
            },
            "p": [
              "Os <strong>pronomes demonstrativos</strong> indicam a <strong>posição das coisas</strong> no espaço e no tempo em relação às pessoas do discurso. Na cena do parque: <em>Olhe <strong>este</strong> brinquedo!</em> (perto de quem fala) — <em>Prefiro <strong>aquele</strong>.</em> (longe dos dois).",
              "<strong>1ª pessoa</strong> – perto de quem fala: <strong>este, esta, estes, estas, isto</strong>.",
              "<strong>2ª pessoa</strong> – perto de quem ouve: <strong>esse, essa, esses, essas, isso</strong>.",
              "<strong>3ª pessoa</strong> – longe dos dois: <strong>aquele, aquela, aqueles, aquelas, aquilo</strong>.",
              "<strong>Isto, isso e aquilo</strong> são <strong>invariáveis</strong>: não mudam para feminino nem para plural. Na fala do dia a dia, muitas pessoas usam esse/essa/isso em qualquer situação, mas na escrita cuidadosa seguimos o quadro."
            ],
            "cards": [
              {
                "icon": "🤲",
                "t": "este · esta · isto",
                "d": "perto de quem fala"
              },
              {
                "icon": "👉",
                "t": "esse · essa · isso",
                "d": "perto de quem ouve"
              },
              {
                "icon": "🔭",
                "t": "aquele · aquela · aquilo",
                "d": "longe dos dois"
              }
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Perto ou longe?",
            "short": "Este, esse ou aquele",
            "instructions": "Leia a pista e escolha o demonstrativo certo.",
            "categories": [
              "este / esta / isto",
              "esse / essa / isso",
              "aquele / aquela / aquilo"
            ],
            "items": [
              {
                "text": "O brinquedo está na mão de quem fala: “Olhe __ brinquedo!”",
                "cat": 0,
                "fill": "este"
              },
              {
                "text": "A roda-gigante está perto de quem ouve: “Qual a altura __ roda-gigante?”",
                "cat": 1,
                "fill": "dessa"
              },
              {
                "text": "O parque está longe dos dois: “Não lembro de ter visto __ parque.”",
                "cat": 2,
                "fill": "aquele"
              },
              {
                "text": "Os dois estão dentro do parque: “__ parque é o mais divertido!”",
                "cat": 0,
                "fill": "Este"
              },
              {
                "text": "A montanha-russa fica do outro lado do parque: “Prefiro __.”",
                "cat": 2,
                "fill": "aquela"
              },
              {
                "text": "O amigo segura um prato: “Como __ prato se chama?”",
                "cat": 1,
                "fill": "esse"
              },
              {
                "text": "Eu aponto o meu lanche: “__ aqui é delicioso.”",
                "cat": 0,
                "fill": "Isto"
              },
              {
                "text": "Algo lá no alto do céu: “O que é __ lá em cima?”",
                "cat": 2,
                "fill": "aquilo"
              }
            ]
          },
          {
            "type": "sort",
            "title": "É texto informativo?",
            "short": "Texto informativo",
            "instructions": "A afirmação combina com o texto informativo?",
            "categories": [
              "Sim, é do texto informativo",
              "Não, é de outro tipo de texto"
            ],
            "items": [
              {
                "text": "Apresenta datas e locais precisos.",
                "cat": 0
              },
              {
                "text": "Tem fadas, magia e encantamento.",
                "cat": 1
              },
              {
                "text": "Revela curiosidades reais.",
                "cat": 0
              },
              {
                "text": "Começa com “Era uma vez…”.",
                "cat": 1
              },
              {
                "text": "Traz informações históricas.",
                "cat": 0
              },
              {
                "text": "É escrito em versos e estrofes com rima.",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Linha do tempo da montanha-russa",
            "short": "Montanha-russa",
            "instructions": "Ligue cada data ao que aconteceu.",
            "pairs": [
              [
                "Século 15, Rússia",
                "Blocos de gelo em rampas de neve"
              ],
              [
                "1784, São Petersburgo",
                "Primeiro trenzinho para esse fim"
              ],
              [
                "1827, Estados Unidos",
                "Trilhos de uma mina de carvão"
              ],
              [
                "1884, Estados Unidos",
                "A montanha-russa como conhecemos"
              ],
              [
                "1959",
                "Modelo de tubos de aço"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Por que a montanha-russa recebeu esse nome?",
            "options": [
              "Porque a diversão começou na Rússia",
              "Porque foi inventada por uma russa",
              "Porque é vermelha como a Rússia",
              "Porque fica numa montanha"
            ],
            "answer": 0,
            "explain": "O texto diz que foi mesmo na Rússia, no século 15, que as pessoas deslizavam por rampas de neve."
          },
          {
            "type": "mc",
            "q": "Como funcionava a primeira montanha-russa?",
            "options": [
              "Pessoas deslizavam em blocos de gelo por rampas de neve",
              "Um trem elétrico subia uma torre",
              "Carrinhos corriam em trilhos de aço",
              "Barcos desciam por um rio"
            ],
            "answer": 0,
            "explain": "Subia-se ao alto e deslizava-se sentado em blocos de gelo cobertos de palha; jogava-se areia para frear."
          },
          {
            "type": "mc",
            "q": "O texto informativo se caracteriza por apresentar:",
            "options": [
              "acontecimentos reais com datas e locais",
              "uma história inventada com magia",
              "versos com rima e ritmo",
              "instruções para montar um objeto"
            ],
            "answer": 0,
            "explain": "Texto informativo traz informações reais e precisas sobre um tema."
          },
          {
            "type": "mc",
            "q": "A Steel Dragon tem 2 479 metros e atinge 153 km/h. Onde ela fica?",
            "options": [
              "No Japão",
              "Nos Estados Unidos",
              "No Brasil",
              "Na Rússia"
            ],
            "answer": 0,
            "explain": "O texto diz que ela fica no parque Nagashima Spaland, no Japão."
          },
          {
            "type": "mc",
            "q": "A velocidade e o comprimento da Steel Dragon são:",
            "options": [
              "153 km/h e 2 479 metros",
              "2 479 km/h e 153 metros",
              "79 km/h e 24 metros",
              "2 153 km/h e 179 metros"
            ],
            "answer": 0,
            "explain": "153 quilômetros por hora de velocidade e 2 479 metros de comprimento."
          },
          {
            "type": "mc",
            "q": "Na fala “Olhe este brinquedo. É muito radical!”, o pronome este indica que o brinquedo está:",
            "options": [
              "perto de quem fala",
              "perto de quem ouve",
              "longe dos dois",
              "em outro dia"
            ],
            "answer": 0,
            "explain": "Este, esta e isto são da 1ª pessoa: perto de quem fala."
          },
          {
            "type": "mc",
            "q": "O menino diz “Prefiro aquele.” apontando um brinquedo distante. Aquele indica:",
            "options": [
              "algo longe de quem fala e de quem ouve",
              "algo na mão de quem fala",
              "algo perto de quem ouve",
              "algo que pertence a alguém"
            ],
            "answer": 0,
            "explain": "Aquele, aquela e aquilo indicam o que está longe das duas pessoas da conversa."
          },
          {
            "type": "mc",
            "q": "Complete: “Qual é a altura ______ roda-gigante em que você andou?” (a roda-gigante está perto de quem ouve)",
            "options": [
              "dessa",
              "desta",
              "daquela",
              "deste"
            ],
            "answer": 0,
            "explain": "Perto de quem ouve usamos esse/essa: de + essa = dessa."
          },
          {
            "type": "mc",
            "q": "Qual pronome demonstrativo é invariável (não muda para feminino nem plural)?",
            "options": [
              "aquilo",
              "aquela",
              "estes",
              "essa"
            ],
            "answer": 0,
            "explain": "Isto, isso e aquilo são invariáveis."
          },
          {
            "type": "mc",
            "q": "“— Este cão — pensou o lobo — goza de boa saúde.” Pelo uso de este, o lobo está:",
            "options": [
              "próximo ao cão",
              "muito distante do cão",
              "sem ver o cão",
              "dentro de casa"
            ],
            "answer": 0,
            "explain": "Este indica proximidade de quem fala. O lobo está perto do cão."
          },
          {
            "type": "mc",
            "q": "Os pronomes demonstrativos indicam:",
            "options": [
              "a posição das coisas no espaço e no tempo",
              "a quem uma coisa pertence",
              "uma ação ou estado",
              "o contrário de uma palavra"
            ],
            "answer": 0,
            "explain": "Demonstrativos mostram onde está algo em relação às pessoas do discurso. Quem indica posse são os possessivos."
          },
          {
            "type": "text",
            "q": "De qual revista foi retirado o texto “Como surgiu a montanha-russa?”",
            "answers": [
              "superinteressante",
              "super interessante",
              "revista superinteressante",
              "mundo estranho"
            ],
            "explain": "O texto saiu da seção Mundo Estranho, da revista Superinteressante."
          }
        ]
      },
      {
        "id": "lp25",
        "module": "25",
        "title": "Ai, que susto!",
        "subtitle": "Conto de mistério · Verbo · Sinônimo e antônimo",
        "theory": [
          {
            "h": "Conto de mistério: O fantasma da sorte",
            "figure": {
              "src": "assets/4b/lp25-conto.svg",
              "alt": "Sequência do conto em quatro quadros: o capitão perdido na floresta, chegada ao castelo, aparição da criança iluminada à noite e o final feliz com casamento.",
              "tipo": "diagrama"
            },
            "p": [
              "Os <strong>contos de mistério</strong> apresentam uma <strong>história misteriosa</strong>, cheia de <strong>suspense</strong> e de <strong>acontecimentos inesperados</strong>.",
              "Em <em>O fantasma da sorte</em>, de Heloisa Prieto, um <strong>capitão dos mares</strong> se perde na floresta porque <strong>não estava acostumado a andar em terra</strong>. Com frio, ele avista um castelo, bate à porta e é convidado a jantar e dormir.",
              "De madrugada, ele sonha que está no mar, numa tormenta. Ao abrir os olhos, vê <strong>uma linda criança cercada de luz</strong>, que sorri e desaparece. No dia seguinte, reclama: <em>não gostei nem um pouco!</em>",
              "O mistério: o castelo estava lotado, e o mordomo colocou o capitão no <strong>quarto do menino</strong>. Ali vive o <strong>fantasma de um menino, um fantasma da sorte</strong>: todos que o veem ficam ricos e felizes.",
              "E foi o que aconteceu: o capitão se casou com uma jovem rica, ficou milionário e seus filhos tiveram sorte a vida toda. <strong>Ver o fantasma foi bom para ele!</strong>"
            ]
          },
          {
            "h": "Verbo: ação, estado ou fenômeno da natureza",
            "figure": {
              "src": "assets/4b/lp25-verbo.svg",
              "alt": "Três colunas de verbos: ação (correr, gritar, pular), estado (ser, estar, ficar, permanecer) e fenômeno da natureza (chover, ventar, nevar, amanhecer).",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Verbos</strong> são palavras que indicam <strong>ações</strong>, <strong>estados</strong> ou <strong>fenômenos da natureza</strong>. No conto: <em>o capitão <strong>conheceu</strong> uma jovem, <strong>casou</strong>; ela <strong>era</strong> rica; ele <strong>acabou</strong> milionário</em>.",
              "<strong>Ação</strong> – o que alguém faz: <em>Ele <strong>corria</strong> pela floresta.</em> Exemplos: correr, chorar, gritar, pular, latir, ler, comer, nadar.",
              "<strong>Estado</strong> – como alguém está ou é: <em>Todos <strong>estavam</strong> ansiosos.</em> Exemplos: ser, estar, ficar, permanecer, parecer.",
              "<strong>Fenômeno da natureza</strong>: <em><strong>Trovejava</strong> forte lá fora.</em> Exemplos: chover, ventar, nevar, amanhecer, trovejar."
            ]
          },
          {
            "h": "Sinônimos e antônimos",
            "figure": {
              "src": "assets/4b/lp25-sinonimo.svg",
              "alt": "Sinônimos com sinal de igual (formosa = bonita, lotado = cheio) e antônimos com setas opostas (dormir × acordar, sorte × azar).",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Sinônimo</strong> é a palavra de significado <strong>parecido ou igual</strong> ao de outra e que pode substituí-la. No conto: <em>formosa</em> = <strong>bonita</strong>; <em>lotado</em> = <strong>cheio</strong>; <em>habituado</em> = <strong>acostumado</strong>; <em>proprietário</em> = <strong>dono</strong>; <em>aflita</em> = <strong>preocupada</strong>; <em>suntuoso</em> = <strong>luxuoso</strong>.",
              "No dicionário, a palavra <strong>sorte</strong> aparece com sinônimos como <strong>destino, fortuna, êxito</strong>.",
              "<strong>Antônimo</strong> é a palavra de significado <strong>contrário</strong>: <em>dormir × acordar</em>, <em>sorte × azar</em>, <em>preso × solto</em>, <em>bonito × feio</em>, <em>feliz × triste</em>, <em>silêncio × barulho</em>, <em>coragem × medo</em>, <em>aparecer × sumir</em>."
            ],
            "cards": [
              {
                "icon": "=",
                "t": "formosa",
                "d": "bonita (sinônimo)"
              },
              {
                "icon": "=",
                "t": "lotado",
                "d": "cheio (sinônimo)"
              },
              {
                "icon": "=",
                "t": "habituado",
                "d": "acostumado (sinônimo)"
              },
              {
                "icon": "↔",
                "t": "dormir",
                "d": "acordar (antônimo)"
              },
              {
                "icon": "↔",
                "t": "sorte",
                "d": "azar (antônimo)"
              },
              {
                "icon": "↔",
                "t": "coragem",
                "d": "medo (antônimo)"
              }
            ]
          },
          {
            "h": "Texto teatral e rubrica",
            "p": [
              "O <strong>texto teatral</strong> é feito para ser <strong>representado</strong>. Nem sempre há narrador: a história acontece pelos <strong>diálogos</strong> dos personagens, como em <em>Príncipe Lagartão</em>.",
              "A <strong>rubrica</strong> são as informações entre parênteses, geralmente em letras maiúsculas, que indicam <strong>gestos, movimentos dos atores e o cenário</strong>: <em>(CLOTILDE SAI DE CENA ACOMPANHADA PELA RAINHA)</em>.",
              "O teatro surgiu na <strong>Grécia antiga</strong>, em festas para o deus Dioniso."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Que tipo de verbo?",
            "short": "Ação, estado, natureza",
            "instructions": "O verbo indica ação, estado ou fenômeno da natureza?",
            "categories": [
              "Ação 🏃",
              "Estado 😊",
              "Fenômeno da natureza 🌧️"
            ],
            "items": [
              {
                "text": "correr",
                "cat": 0
              },
              {
                "text": "estar",
                "cat": 1
              },
              {
                "text": "chover",
                "cat": 2
              },
              {
                "text": "gritar",
                "cat": 0
              },
              {
                "text": "ser",
                "cat": 1
              },
              {
                "text": "ventar",
                "cat": 2
              },
              {
                "text": "pular",
                "cat": 0
              },
              {
                "text": "permanecer",
                "cat": 1
              },
              {
                "text": "nevar",
                "cat": 2
              },
              {
                "text": "chorar",
                "cat": 0
              },
              {
                "text": "ficar",
                "cat": 1
              },
              {
                "text": "amanhecer",
                "cat": 2
              }
            ]
          },
          {
            "type": "memory",
            "title": "Memória dos sinônimos",
            "short": "Sinônimos",
            "instructions": "Ache cada palavra e o seu sinônimo.",
            "items": [
              {
                "base": "formosa",
                "result": "bonita"
              },
              {
                "base": "lotado",
                "result": "cheio"
              },
              {
                "base": "habituado",
                "result": "acostumado"
              },
              {
                "base": "proprietário",
                "result": "dono"
              },
              {
                "base": "aflita",
                "result": "preocupada"
              },
              {
                "base": "assombrar",
                "result": "assustar"
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Contrários",
            "short": "Antônimos",
            "instructions": "Escolha o antônimo (o contrário) de cada palavra.",
            "pairs": [
              [
                "dormir",
                "acordar"
              ],
              [
                "sorte",
                "azar"
              ],
              [
                "preso",
                "solto"
              ],
              [
                "feliz",
                "triste"
              ],
              [
                "silêncio",
                "barulho"
              ],
              [
                "coragem",
                "medo"
              ],
              [
                "aparecer",
                "sumir"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Por que o capitão dos mares se perdeu na floresta?",
            "options": [
              "Não estava acostumado a andar em terra",
              "Estava fugindo de um fantasma",
              "Queria encontrar um tesouro",
              "O navio dele afundou na floresta"
            ],
            "answer": 0,
            "explain": "O conto diz que ele não estava habituado a andar em terra e acabou se perdendo na densa floresta."
          },
          {
            "type": "mc",
            "q": "O que o capitão sonhou durante a noite?",
            "options": [
              "Que estava no mar, numa terrível tormenta",
              "Que estava num castelo cheio de hóspedes",
              "Que ganhava muito dinheiro",
              "Que era perseguido por um lobo"
            ],
            "answer": 0,
            "explain": "Ele sonhou que estava de volta ao mar, no meio de uma terrível tormenta. Ao acordar, viu a criança iluminada."
          },
          {
            "type": "mc",
            "q": "Qual era o mistério daquele quarto?",
            "options": [
              "Lá vivia o fantasma de um menino que traz sorte",
              "Era o quarto de um ladrão",
              "A lareira nunca apagava",
              "Era onde guardavam o tesouro"
            ],
            "answer": 0,
            "explain": "O nobre explica que ali vive o fantasma alegre de um menino, um fantasma da sorte."
          },
          {
            "type": "mc",
            "q": "No final, foi ruim para o capitão ter visto o fantasma?",
            "options": [
              "Não: ele ficou rico e feliz",
              "Sim: ele ficou doente",
              "Sim: ele perdeu o navio",
              "Não: mas ele nunca mais dormiu"
            ],
            "answer": 0,
            "explain": "Todos que viam o fantasma da sorte ganhavam dinheiro e eram felizes, e foi o que aconteceu com ele."
          },
          {
            "type": "mc",
            "q": "Um conto de mistério se caracteriza por:",
            "options": [
              "suspense e acontecimentos inesperados",
              "datas e informações precisas",
              "versos e rimas",
              "passo a passo de uma receita"
            ],
            "answer": 0,
            "explain": "Contos de mistério têm história misteriosa, suspense e surpresas."
          },
          {
            "type": "mc",
            "q": "No trecho “o capitão conheceu uma formosa jovem, com quem se casou”, as palavras conheceu e casou indicam:",
            "options": [
              "ações dos personagens",
              "nomes dos personagens",
              "características físicas",
              "lugares da história"
            ],
            "answer": 0,
            "explain": "Conheceu e casou são verbos: indicam ações."
          },
          {
            "type": "mc",
            "q": "Qual verbo indica um fenômeno da natureza?",
            "options": [
              "trovejar",
              "correr",
              "estar",
              "escrever"
            ],
            "answer": 0,
            "explain": "Trovejar é fenômeno da natureza. Correr e escrever são ações; estar é estado."
          },
          {
            "type": "mc",
            "q": "Na frase “Todos estavam ansiosos para a festa”, o verbo estavam indica:",
            "options": [
              "estado",
              "ação",
              "fenômeno da natureza",
              "posse"
            ],
            "answer": 0,
            "explain": "Estar é verbo de estado: mostra como as pessoas se sentiam."
          },
          {
            "type": "mc",
            "q": "Qual é um sinônimo de formosa?",
            "options": [
              "bonita",
              "feia",
              "cansada",
              "triste"
            ],
            "answer": 0,
            "explain": "Formosa e bonita têm o mesmo significado: são sinônimos."
          },
          {
            "type": "mc",
            "q": "No dicionário, quais palavras aparecem na definição de sorte?",
            "options": [
              "destino, fortuna, êxito",
              "amor, carinho, azar",
              "bondade, carinho, maneira",
              "brincadeira, cansaço, modo"
            ],
            "answer": 0,
            "explain": "Sorte pode significar destino, fortuna ou êxito. Azar é o contrário (antônimo)."
          },
          {
            "type": "mc",
            "q": "Qual é o antônimo de dormir?",
            "options": [
              "acordar",
              "sonhar",
              "deitar",
              "descansar"
            ],
            "answer": 0,
            "explain": "Antônimo é a palavra de sentido contrário: dormir × acordar."
          },
          {
            "type": "mc",
            "q": "No texto teatral, as informações entre parênteses, em letras maiúsculas, servem para:",
            "options": [
              "indicar gestos, movimentos e o cenário",
              "mostrar a fala do narrador",
              "dar o título da peça",
              "indicar o nome do autor"
            ],
            "answer": 0,
            "explain": "Essas informações se chamam rubricas e orientam os atores."
          },
          {
            "type": "text",
            "q": "Escreva um antônimo de sorte.",
            "answers": [
              "azar",
              "falta de sorte",
              "infortunio",
              "infortúnio",
              "desgraca",
              "desgraça"
            ],
            "explain": "O contrário de sorte é azar."
          }
        ]
      },
      {
        "id": "lp26",
        "module": "26",
        "title": "Todo mundo tem medo!",
        "subtitle": "Depoimento · Tempos verbais · Ortografia: -am e -ão",
        "theory": [
          {
            "h": "Depoimento: Medo? Todo mundo tem!",
            "p": [
              "O <strong>depoimento</strong> é um texto em que uma pessoa conta <strong>acontecimentos ou experiências que viveu de verdade</strong>. Quem narra é chamado de <strong>narrador</strong> ou <strong>depoente</strong>, e fala das próprias experiências.",
              "No texto <em>Medo? Todo mundo tem!</em>, Silvinha Meirelles mostra que <strong>todo mundo sente algum medo</strong>: de aranha, de avião, de ficar sozinho, de trovão… Ela conversou com várias pessoas e registrou o medo e o <strong>antídoto</strong> de cada uma.",
              "<strong>Antídoto</strong>, no texto, é <strong>o jeito de afastar o medo</strong>. Nina, de 9 anos, tem medo do escuro e muda de assunto na cabeça; Júlia gruda no cachorro; Marcelo, de 6 anos, tem medo de raio e de fantasma e diz: <em>Eu me deito e me cubro.</em>",
              "Para afastar o medo, o texto sugere: cantar, correr, pensar em outra coisa, assobiar, chamar alguém ou olhar o medo de frente."
            ]
          },
          {
            "h": "Tempos verbais: passado, presente e futuro",
            "figure": {
              "src": "assets/4b/lp26-tempos.svg",
              "alt": "Linha do tempo com três partes: passado (ontem, eu tive medo), presente (hoje, eu tenho medo) e futuro (amanhã, eu terei coragem).",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Presente</strong>: algo que acontece agora, com frequência ou sempre. <em>Eu <strong>aprendo</strong> com meus medos. Meu primo <strong>gosta</strong> de filmes de monstros.</em>",
              "<strong>Passado</strong> (ou pretérito): algo que <strong>já aconteceu</strong>. <em>Quando eu <strong>era</strong> pequena, <strong>tinha</strong> medo de bicho-papão. Ele <strong>falou</strong> dos próprios medos.</em>",
              "<strong>Futuro</strong>: algo que <strong>ainda vai acontecer</strong>. <em>Ela <strong>crescerá</strong> e <strong>perderá</strong> o medo do escuro.</em>",
              "Exemplo com o antídoto do Marcelo: presente – <em>Eu me <strong>deito</strong> e me <strong>cubro</strong>.</em> Futuro – <em>Eu me <strong>deitarei</strong> e me <strong>cobrirei</strong>.</em>",
              "Nas tirinhas aparecem formas reduzidas, como <strong>tá</strong> (está). Isso acontece porque a tirinha mostra uma situação de <strong>linguagem coloquial</strong>, a fala do dia a dia."
            ],
            "cards": [
              {
                "icon": "⏪",
                "t": "passado",
                "d": "estudei · estudou · estudaram"
              },
              {
                "icon": "⏺️",
                "t": "presente",
                "d": "estudo · estuda · estudam"
              },
              {
                "icon": "⏩",
                "t": "futuro",
                "d": "estudarei · estudará · estudarão"
              }
            ]
          },
          {
            "h": "Ortografia: -am ou -ão?",
            "figure": {
              "src": "assets/4b/lp26-am-ao.svg",
              "alt": "Comparação: elas sentiram (passado, termina em -am) e elas sentirão (futuro, termina em -ão), com setas para trás e para a frente.",
              "tipo": "diagrama"
            },
            "p": [
              "Nos <strong>verbos</strong>, o final <strong>-am</strong> ou <strong>-ão</strong> mostra se a ação <strong>já aconteceu</strong> ou se <strong>ainda vai acontecer</strong>.",
              "<strong>-am</strong> = passado: <em>Elas sentir<strong>am</strong> medo da tempestade.</em> / acordaram, fugiram, dançaram, ajudaram, ofereceram.",
              "<strong>-ão</strong> = futuro: <em>Elas sentir<strong>ão</strong> medo da tempestade.</em> / acordarão, fugirão, dançarão, ajudarão, oferecerão.",
              "Atenção: muitos <strong>substantivos</strong> também terminam em -ão e não são verbos: <em>caminhão, coração, botão, questão, guardião, ladrão</em>.",
              "Ditados: <em>Os cães <strong>ladram</strong> e a caravana passa.</em> (verbo, -am) / <em>A ocasião faz o <strong>ladrão</strong>.</em> (substantivo, -ão)"
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Máquina do tempo dos verbos",
            "short": "Passado, presente ou futuro",
            "instructions": "Em que tempo está o verbo em destaque?",
            "categories": [
              "Passado ⏪",
              "Presente ⏺️",
              "Futuro ⏩"
            ],
            "items": [
              {
                "text": "Eu QUERO viajar para Manaus.",
                "cat": 1
              },
              {
                "text": "Eu FUI ao médico.",
                "cat": 0
              },
              {
                "text": "Eles VOLTARÃO bronzeados da praia.",
                "cat": 2
              },
              {
                "text": "Amanhã você ACORDARÁ mais cedo.",
                "cat": 2
              },
              {
                "text": "Eles BRINCARAM até cansar.",
                "cat": 0
              },
              {
                "text": "Eu SOU muito alegre.",
                "cat": 1
              },
              {
                "text": "As pessoas TINHAM medo de andar no escuro.",
                "cat": 0
              },
              {
                "text": "Eu CONHEÇO muitas histórias.",
                "cat": 1
              },
              {
                "text": "Elas CONVERSARÃO sobre o filme.",
                "cat": 2
              }
            ]
          },
          {
            "type": "sort",
            "title": "-am ou -ão?",
            "short": "-am ou -ão",
            "instructions": "Complete a palavra com -am (passado) ou -ão (futuro).",
            "categories": [
              "-am (já aconteceu)",
              "-ão (ainda vai acontecer)"
            ],
            "items": [
              {
                "text": "Ontem, elas dançar__ na festa.",
                "cat": 0
              },
              {
                "text": "Amanhã, eles acordar__ cedo.",
                "cat": 1
              },
              {
                "text": "Na semana passada, os gatos fugir__.",
                "cat": 0
              },
              {
                "text": "No próximo ano, eles ajudar__ a escola.",
                "cat": 1
              },
              {
                "text": "Ontem à noite, os cães ladr__ muito.",
                "cat": 0
              },
              {
                "text": "Depois do jantar, eles oferecer__ sobremesa.",
                "cat": 1
              }
            ]
          },
          {
            "type": "sort",
            "title": "Verbo ou substantivo?",
            "short": "Palavras com -ão",
            "instructions": "A palavra terminada em -ão é um substantivo ou um verbo no futuro?",
            "categories": [
              "Substantivo (nome)",
              "Verbo no futuro"
            ],
            "items": [
              {
                "text": "caminhão",
                "cat": 0
              },
              {
                "text": "caminharão",
                "cat": 1
              },
              {
                "text": "coração",
                "cat": 0
              },
              {
                "text": "obedecerão",
                "cat": 1
              },
              {
                "text": "botão",
                "cat": 0
              },
              {
                "text": "conquistarão",
                "cat": 1
              },
              {
                "text": "questão",
                "cat": 0
              },
              {
                "text": "guardarão",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual é o principal assunto do texto “Medo? Todo mundo tem!”?",
            "options": [
              "Os medos das pessoas e jeitos de afastá-los",
              "Como fazer uma lanterna",
              "A vida de uma escritora famosa",
              "Uma história de fantasma inventada"
            ],
            "answer": 0,
            "explain": "O texto reúne depoimentos sobre medos e antídotos para eles."
          },
          {
            "type": "mc",
            "q": "No texto, o que significa a palavra antídoto?",
            "options": [
              "O jeito de afastar o medo",
              "Um tipo de monstro",
              "Um remédio para dor de cabeça",
              "O nome de quem conta"
            ],
            "answer": 0,
            "explain": "Cada pessoa conta o seu medo e o seu antídoto, isto é, o que faz para o medo passar."
          },
          {
            "type": "mc",
            "q": "O depoimento é um texto em que uma pessoa:",
            "options": [
              "conta experiências que viveu de verdade",
              "inventa uma história com fadas",
              "escreve versos com rimas",
              "dá instruções de um jogo"
            ],
            "answer": 0,
            "explain": "No depoimento, o narrador (depoente) fala das próprias experiências reais."
          },
          {
            "type": "mc",
            "q": "Em “Tenho medo de raio. Também não gosto de história com bruxa”, os verbos tenho e gosto indicam algo que:",
            "options": [
              "está acontecendo (presente)",
              "já aconteceu (passado)",
              "ainda vai acontecer (futuro)",
              "nunca acontece"
            ],
            "answer": 0,
            "explain": "Tenho e gosto estão no presente: é o que Marcelo sente agora."
          },
          {
            "type": "mc",
            "q": "Como fica “Eu me deito e me cubro” com os verbos no futuro?",
            "options": [
              "Eu me deitarei e me cobrirei.",
              "Eu me deitei e me cobri.",
              "Eu me deitava e me cobria.",
              "Eu me deito e me cobri."
            ],
            "answer": 0,
            "explain": "Futuro indica o que ainda vai acontecer: deitarei, cobrirei."
          },
          {
            "type": "mc",
            "q": "Em “Eles brincaram até cansar”, o verbo está no:",
            "options": [
              "passado",
              "presente",
              "futuro",
              "infinitivo"
            ],
            "answer": 0,
            "explain": "Brincaram termina em -am: a ação já aconteceu."
          },
          {
            "type": "mc",
            "q": "Em “Eles voltarão bronzeados da praia”, o verbo está no:",
            "options": [
              "futuro",
              "passado",
              "presente",
              "plural do substantivo"
            ],
            "answer": 0,
            "explain": "Voltarão termina em -ão: a ação ainda vai acontecer."
          },
          {
            "type": "mc",
            "q": "Qual frase está no passado?",
            "options": [
              "Elas sentiram medo da tempestade.",
              "Elas sentirão medo da tempestade.",
              "Elas sentem medo da tempestade.",
              "Elas vão sentir medo amanhã."
            ],
            "answer": 0,
            "explain": "Sentiram (-am) é passado. Sentirão (-ão) é futuro."
          },
          {
            "type": "mc",
            "q": "Complete o ditado: “Os cães ______ e a caravana passa.”",
            "options": [
              "ladram",
              "ladrão",
              "ladrarão",
              "ladrões"
            ],
            "answer": 0,
            "explain": "Ladram é o verbo latir no presente. Ladrão é um substantivo."
          },
          {
            "type": "mc",
            "q": "Qual destas palavras terminadas em -ão é um SUBSTANTIVO?",
            "options": [
              "coração",
              "obedecerão",
              "caminharão",
              "guardarão"
            ],
            "answer": 0,
            "explain": "Coração é nome (substantivo). As outras são verbos no futuro."
          },
          {
            "type": "mc",
            "q": "Na tirinha, a bruxa diz “Tá pronta!”. A palavra tá corresponde ao verbo:",
            "options": [
              "estar",
              "tomar",
              "tocar",
              "ter"
            ],
            "answer": 0,
            "explain": "Tá é a forma reduzida de está, do verbo estar."
          },
          {
            "type": "mc",
            "q": "A forma reduzida tá pode ser usada na tirinha porque:",
            "options": [
              "mostra uma situação de linguagem coloquial",
              "em todo tipo de texto se usa essa forma",
              "é uma linguagem cerimoniosa",
              "é um erro de digitação"
            ],
            "answer": 0,
            "explain": "Nas HQs a linguagem costuma ser informal, parecida com a fala do dia a dia."
          },
          {
            "type": "text",
            "q": "Reescreva o verbo no futuro: “Eles perderam o medo do escuro.” → Eles ______ o medo do escuro.",
            "answers": [
              "perderao",
              "perderão"
            ],
            "explain": "Perderam (passado, -am) → perderão (futuro, -ão)."
          }
        ]
      },
      {
        "id": "lp27",
        "module": "27",
        "title": "Comer bem para melhor crescer!",
        "subtitle": "Reportagem · Sujeito e predicado",
        "theory": [
          {
            "h": "Reportagem: lancheira saudável",
            "figure": {
              "src": "assets/4b/lp27-reportagem.svg",
              "alt": "Partes de uma reportagem: título, linha fina, lide, entretítulo e matéria com fala de especialista.",
              "tipo": "diagrama"
            },
            "p": [
              "A <strong>reportagem</strong> apresenta <strong>informações aprofundadas</strong> sobre um tema. É publicada em <strong>jornais, revistas e sites</strong>.",
              "Partes: <strong>título</strong> (nome da reportagem); <strong>linha fina</strong> (texto abaixo do título que desperta o interesse); <strong>lide</strong> (primeiro parágrafo, que resume a matéria); <strong>matéria</strong> (texto longo, às vezes com falas de <strong>especialistas</strong>); <strong>entretítulos</strong> (pequenos títulos que separam blocos).",
              "A reportagem <em>Como fazer lancheira saudável na volta às aulas das crianças</em> tem a finalidade de <strong>informar sobre alimentação saudável</strong>. Os entretítulos são <em>Lancheira saudável</em>, <em>Lancheira prática</em> e <em>Lancheira colorida</em>.",
              "Ela explica a <strong>neofobia</strong>: a dificuldade das crianças em aceitar alimentos novos. Por isso, a apresentação bonita e variada ajuda as crianças a aceitar os alimentos.",
              "Uma lancheira equilibrada tem <strong>frutas, vegetais, proteínas, grãos integrais e líquidos</strong>. Quanto <strong>mais colorida</strong>, mais nutrientes! Achocolatado, salgadinho, salsicha e refrigerante são <strong>ultraprocessados</strong> e não são boas opções."
            ]
          },
          {
            "h": "Sujeito e predicado",
            "figure": {
              "src": "assets/4b/lp27-sujeito.svg",
              "alt": "Frase As frutas fazem bem à saúde dividida em sujeito (As frutas) e predicado (fazem bem à saúde), com a pergunta Quem faz bem? ligando o verbo ao sujeito.",
              "tipo": "diagrama"
            },
            "p": [
              "Uma <strong>oração</strong> é uma frase com <strong>verbo</strong>. Exemplo: <em>Vegetais <strong>oferecem</strong> vitaminas.</em>",
              "O <strong>sujeito</strong> é o termo <strong>sobre o qual se diz algo</strong>. Para achá-lo, perguntamos: <strong>Quem + verbo?</strong> → <em>Quem oferece vitaminas?</em> → <strong>Vegetais</strong>.",
              "O <strong>predicado</strong> é <strong>o que se diz sobre o sujeito</strong>. O verbo faz parte do predicado. Em <em>As frutas | fazem bem à saúde</em>, o sujeito é <strong>As frutas</strong> e o predicado é <strong>fazem bem à saúde</strong>.",
              "O verbo sempre <strong>concorda</strong> com o sujeito: <em>A fruta <strong>faz</strong> bem</em> / <em>As frutas <strong>fazem</strong> bem</em>.",
              "<strong>Complemento verbal</strong>: alguns verbos precisam de uma palavra que complete o sentido. <em>Ela come <strong>salada</strong>.</em> / <em>Mamãe preparou <strong>um bolo delicioso</strong>.</em> Outros não precisam: <em>Ele dorme.</em>"
            ]
          },
          {
            "h": "Letra h no início das palavras",
            "p": [
              "No início das palavras, a letra <strong>h não tem som</strong>: lemos <em>hora</em> como “ora”. Por isso precisamos memorizar como se escreve.",
              "Exemplos: <strong>hora</strong>, <strong>hospital</strong>, <strong>homem</strong>, <strong>hidrante</strong>, <strong>harpa</strong>, <strong>helicóptero</strong>, <strong>hipopótamo</strong>, <strong>horta</strong>.",
              "Substantivos próprios também: <em>Helena, Hugo, Henrique, Holanda</em>."
            ]
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Ache o sujeito",
            "short": "Ache o sujeito",
            "instructions": "Pergunte “Quem + verbo?” e escolha o sujeito da frase.",
            "pairs": [
              [
                "Vegetais oferecem vitaminas.",
                "Vegetais"
              ],
              [
                "No recreio, os alunos comem lanches saudáveis.",
                "os alunos"
              ],
              [
                "Minha família mantém uma dieta equilibrada.",
                "Minha família"
              ],
              [
                "A minha turma fez um piquenique no pátio.",
                "A minha turma"
              ],
              [
                "Eu faço refeições equilibradas.",
                "Eu"
              ],
              [
                "Boa alimentação e exercícios são fundamentais.",
                "Boa alimentação e exercícios"
              ]
            ]
          },
          {
            "type": "pairs",
            "title": "Ache o predicado",
            "short": "Ache o predicado",
            "instructions": "O que se diz sobre o sujeito? Escolha o predicado.",
            "pairs": [
              [
                "As frutas…",
                "fazem bem à saúde."
              ],
              [
                "Ela…",
                "come salada."
              ],
              [
                "Cereais e frutas…",
                "substituem o salgadinho."
              ],
              [
                "Papai…",
                "comprou tomates na feira."
              ],
              [
                "A cozinheira…",
                "deu frutas às crianças."
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Partes da reportagem",
            "short": "Partes da reportagem",
            "instructions": "Que parte da reportagem é essa?",
            "categories": [
              "Título",
              "Linha fina",
              "Entretítulo"
            ],
            "items": [
              {
                "text": "Como fazer lancheira saudável na volta às aulas das crianças",
                "cat": 0
              },
              {
                "text": "Nutricionistas ensinam a montar uma alimentação saborosa e colorida",
                "cat": 1
              },
              {
                "text": "Lancheira prática",
                "cat": 2
              },
              {
                "text": "Lancheira colorida",
                "cat": 2
              },
              {
                "text": "Texto logo abaixo do título que chama a atenção do leitor",
                "cat": 1
              },
              {
                "text": "O nome da reportagem, com letra maior",
                "cat": 0
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual é a finalidade da reportagem sobre a lancheira saudável?",
            "options": [
              "Informar sobre alimentação saudável",
              "Provocar o riso",
              "Ensinar a preparar um bolo",
              "Contar uma história de mistério"
            ],
            "answer": 0,
            "explain": "A reportagem traz informações aprofundadas sobre como montar uma lancheira saudável."
          },
          {
            "type": "mc",
            "q": "Segundo a reportagem, o que é neofobia?",
            "options": [
              "Dificuldade de aceitar alimentos novos",
              "Medo de ir à escola",
              "Vontade de comer doces",
              "Alergia a frutas"
            ],
            "answer": 0,
            "explain": "Neofobia é a dificuldade das crianças em aceitar ou experimentar alimentos novos ou desconhecidos."
          },
          {
            "type": "mc",
            "q": "Para a nutricionista, uma lancheira bem colorida:",
            "options": [
              "tem mais nutrientes",
              "é menos saudável",
              "deve ter só doces",
              "não faz diferença"
            ],
            "answer": 0,
            "explain": "Cada cor de fruta e vegetal representa nutrientes diferentes: quanto mais colorida, mais nutritiva."
          },
          {
            "type": "mc",
            "q": "Qual destes é um ULTRAPROCESSADO, que não é boa opção para a lancheira?",
            "options": [
              "achocolatado",
              "banana",
              "tomate-cereja",
              "água de coco"
            ],
            "answer": 0,
            "explain": "Achocolatado, salgadinhos, salsicha e refrigerante são ultraprocessados."
          },
          {
            "type": "mc",
            "q": "O primeiro parágrafo da reportagem, que resume o conteúdo da matéria, chama-se:",
            "options": [
              "lide",
              "título",
              "entretítulo",
              "assinatura"
            ],
            "answer": 0,
            "explain": "O lide é o primeiro parágrafo e resume a matéria."
          },
          {
            "type": "mc",
            "q": "Onde você encontraria outras reportagens como essa?",
            "options": [
              "Em jornais e revistas",
              "Em manuais de instrução",
              "Em atlas",
              "Em livros de poemas"
            ],
            "answer": 0,
            "explain": "Reportagens são publicadas em jornais, revistas e sites de notícias."
          },
          {
            "type": "mc",
            "q": "Na frase “Vegetais oferecem vitaminas”, qual é o sujeito?",
            "options": [
              "Vegetais",
              "oferecem",
              "vitaminas",
              "oferecem vitaminas"
            ],
            "answer": 0,
            "explain": "Quem oferece vitaminas? Vegetais. Esse é o sujeito."
          },
          {
            "type": "mc",
            "q": "Na frase “No recreio, os alunos comem lanches saudáveis”, o sujeito é:",
            "options": [
              "os alunos",
              "No recreio",
              "lanches saudáveis",
              "comem"
            ],
            "answer": 0,
            "explain": "Quem come lanches saudáveis? Os alunos."
          },
          {
            "type": "mc",
            "q": "Em “Minha família mantém uma dieta equilibrada”, o predicado é:",
            "options": [
              "mantém uma dieta equilibrada",
              "Minha família",
              "Minha família mantém",
              "uma dieta equilibrada"
            ],
            "answer": 0,
            "explain": "Predicado é o que se diz sobre o sujeito, e o verbo faz parte dele: mantém uma dieta equilibrada."
          },
          {
            "type": "mc",
            "q": "Para encontrar o sujeito de uma oração, perguntamos:",
            "options": [
              "Quem + verbo?",
              "Onde?",
              "Quando?",
              "Quantos?"
            ],
            "answer": 0,
            "explain": "Perguntamos Quem (ou o que) + verbo. A resposta é o sujeito."
          },
          {
            "type": "mc",
            "q": "Em “Ela come salada”, qual palavra completa o sentido do verbo?",
            "options": [
              "salada",
              "Ela",
              "come",
              "nenhuma"
            ],
            "answer": 0,
            "explain": "Salada é o complemento verbal: completa o sentido de comer (come o quê?)."
          },
          {
            "type": "mc",
            "q": "Qual frase tem o verbo concordando corretamente com o sujeito?",
            "options": [
              "As frutas fazem bem à saúde.",
              "As frutas faz bem à saúde.",
              "A fruta fazem bem à saúde.",
              "As fruta fazem bem à saúde."
            ],
            "answer": 0,
            "explain": "O verbo concorda com o sujeito: as frutas (plural) fazem (plural)."
          },
          {
            "type": "text",
            "q": "Escreva o nome do lugar onde as pessoas são atendidas por médicos. A palavra começa com h.",
            "answers": [
              "hospital",
              "o hospital"
            ],
            "explain": "Hospital começa com h, que não tem som no início da palavra."
          }
        ]
      },
      {
        "id": "lp_generos",
        "module": "✍️",
        "title": "Ler e escrever: poema e conto de mistério",
        "subtitle": "Leitura, interpretação e produção de texto",
        "theory": [
          {
            "h": "Ler um poema com atenção",
            "figure": {
              "src": "assets/4b/lpg-poema.svg",
              "alt": "O poema A chuva na janela, com os versos numerados, as estrofes marcadas e as rimas destacadas em cores.",
              "tipo": "diagrama"
            },
            "p": [
              "Leia o poema e repare nos versos, nas estrofes e nas rimas:",
              "<em>A chuva na janela</em><br>Pinga, pinga, na janela,<br>a chuva vem conversar.<br>Bate leve na panela,<br>quer um jeito de entrar.<br><br>Pinga, pinga, devagar,<br>molha a rua e o jardim.<br>Quando o sol voltar a brilhar,<br>vou brincar até o fim.",
              "O poema tem <strong>2 estrofes</strong> com <strong>4 versos</strong> cada, isto é, <strong>8 versos</strong>. Rimam: <strong>janela / panela</strong>, <strong>conversar / entrar</strong>, <strong>devagar / brilhar</strong>, <strong>jardim / fim</strong>.",
              "A repetição de <strong>pinga, pinga</strong> imita o <strong>som da chuva</strong>, como o tic-tac imita o relógio. A chuva “vem conversar” e “quer um jeito de entrar”: o poeta dá a ela atitudes de gente.",
              "Ao ler um poema, pergunte: <em>Qual é o assunto? Quantos versos e estrofes? Quais palavras rimam? Que sons se repetem? Que sentimento o poema desperta?</em>"
            ]
          },
          {
            "h": "Ler um conto de mistério",
            "figure": {
              "src": "assets/4b/lpg-misterio.svg",
              "alt": "Os elementos do conto de mistério: personagens, lugar, mistério, pistas, suspense e solução, ligados como um caminho.",
              "tipo": "diagrama"
            },
            "p": [
              "Leia o conto:",
              "<em>O barulho no sótão</em> — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: <em>toc… toc… toc…</em> Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma?",
              "Numa noite de lua cheia, os dois subiram a escada com uma lanterna. O coração batia forte. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! Bia segurou o braço de Pedro.",
              "De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite! Desde então, o <em>toc-toc</em> virou cantiga de ninar.",
              "Elementos: <strong>personagens</strong> (Pedro, Bia, vovó Lúcia), <strong>lugar</strong> (o sótão), <strong>mistério</strong> (o barulho toda noite), <strong>suspense</strong> (subir a escada no escuro, a caixa se mexendo), <strong>solução</strong> (era uma coruja). O conto de mistério prende o leitor até a revelação final."
            ]
          },
          {
            "h": "Como escrever bem: poema e conto de mistério",
            "p": [
              "<strong>Para escrever um poema:</strong> escolha um assunto; organize em <strong>versos</strong> e <strong>estrofes</strong>; tente usar <strong>rimas</strong> e repetir sons (como tic-tac ou pinga, pinga); dê um <strong>título</strong>. No <strong>poema visual</strong>, faça as palavras formarem uma figura ligada ao assunto.",
              "<strong>Para escrever um conto de mistério:</strong> apresente os <strong>personagens</strong> e o <strong>lugar</strong>; crie um <strong>mistério</strong> (um barulho, um sumiço, uma aparição); aumente o <strong>suspense</strong> com pistas; no final, revele a <strong>solução</strong> de um jeito surpreendente.",
              "Use <strong>verbos no passado</strong> para contar (<em>ouviu, subiram, descobriram</em>), <strong>sinônimos</strong> para não repetir palavras e <strong>parágrafos</strong> para organizar o começo, o meio e o fim.",
              "Revise: título? começo, meio e fim? letra maiúscula e pontuação? palavras com -am/-ão corretas?"
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Detetive dos gêneros",
            "short": "Poema ou conto?",
            "instructions": "A pista pertence a um poema ou a um conto de mistério?",
            "categories": [
              "Poema 🎵",
              "Conto de mistério 🔦"
            ],
            "items": [
              {
                "text": "É organizado em versos e estrofes.",
                "cat": 0
              },
              {
                "text": "Tem suspense até a revelação final.",
                "cat": 1
              },
              {
                "text": "Usa rimas e ritmo.",
                "cat": 0
              },
              {
                "text": "Os personagens tentam resolver um enigma.",
                "cat": 1
              },
              {
                "text": "Repete sons, como pinga, pinga.",
                "cat": 0
              },
              {
                "text": "Tem acontecimentos inesperados e assustadores.",
                "cat": 1
              },
              {
                "text": "As palavras podem formar uma figura.",
                "cat": 0
              },
              {
                "text": "Conta a história com começo, meio e fim em parágrafos.",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Elementos do conto",
            "short": "O barulho no sótão",
            "instructions": "Ligue cada elemento ao que aparece no conto “O barulho no sótão”.",
            "pairs": [
              [
                "Personagens",
                "Pedro, Bia e vovó Lúcia"
              ],
              [
                "Lugar do mistério",
                "o sótão da casa da vovó"
              ],
              [
                "Mistério",
                "um toc-toc toda noite"
              ],
              [
                "Suspense",
                "a caixa velha se mexendo"
              ],
              [
                "Solução",
                "era uma coruja chamando os filhotes"
              ]
            ]
          },
          {
            "type": "writing",
            "title": "Oficina do conto de mistério",
            "short": "Escrever um conto",
            "instructions": "Escreva um conto de mistério curto. Comece assim: “Todas as noites, o relógio da sala parava às três horas…”",
            "orientation": "Crie personagens, um lugar, um mistério, momentos de suspense e uma solução surpreendente no final.",
            "doneTitle": "Conto de mistério concluído!",
            "doneText": "Releia o seu conto: ele tem mistério, suspense e uma solução no final?",
            "placeholder": "Escreva aqui o título e o seu conto de mistério…",
            "checklist": [
              "Dei um título ao conto.",
              "Apresentei os personagens e o lugar.",
              "Criei um mistério e momentos de suspense.",
              "Revelei a solução no final.",
              "Usei verbos no passado e parágrafos."
            ],
            "minLength": 200
          },
          {
            "type": "writing",
            "title": "Oficina do poema",
            "short": "Escrever um poema",
            "instructions": "Escreva um poema sobre um medo que você já venceu ou sobre o tempo passando.",
            "orientation": "Organize em versos e estrofes, use pelo menos duas rimas e repita um som, como tic-tac.",
            "doneTitle": "Poema concluído!",
            "doneText": "Leia o poema em voz alta e sinta o ritmo. As rimas estão no final dos versos?",
            "placeholder": "Escreva aqui o título e os versos do seu poema…",
            "checklist": [
              "Dei um título.",
              "Escrevi em versos (linhas) e estrofes.",
              "Usei pelo menos duas rimas.",
              "Repeti algum som ou palavra para criar ritmo."
            ],
            "minLength": 80
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Quantas estrofes tem o poema “A chuva na janela”?",
            "options": [
              "2 estrofes",
              "4 estrofes",
              "8 estrofes",
              "1 estrofe"
            ],
            "answer": 0,
            "explain": "São 2 estrofes (grupos de versos), cada uma com 4 versos."
          },
          {
            "type": "mc",
            "q": "No poema “A chuva na janela”, qual palavra rima com janela?",
            "options": [
              "panela",
              "chuva",
              "jardim",
              "entrar"
            ],
            "answer": 0,
            "explain": "Janela e panela terminam com o mesmo som: -ela."
          },
          {
            "type": "mc",
            "q": "A repetição de “pinga, pinga” no poema imita:",
            "options": [
              "o som da chuva",
              "o som do relógio",
              "uma pessoa chorando",
              "um sino tocando"
            ],
            "answer": 0,
            "explain": "Pinga, pinga lembra o som das gotas de chuva caindo, assim como tic-tac imita o relógio."
          },
          {
            "type": "mc",
            "q": "No poema, a chuva “vem conversar” e “quer um jeito de entrar”. Isso mostra que o poeta:",
            "options": [
              "deu à chuva atitudes de gente",
              "explicou como a chuva se forma",
              "deu uma notícia sobre o tempo",
              "ensinou a fechar a janela"
            ],
            "answer": 0,
            "explain": "Nos poemas é comum dar sentimentos e ações humanas a objetos e à natureza."
          },
          {
            "type": "mc",
            "q": "No conto “O barulho no sótão”, qual era o mistério?",
            "options": [
              "Um toc-toc no sótão toda noite",
              "A vovó tinha sumido",
              "A lanterna não acendia",
              "A casa estava vazia"
            ],
            "answer": 0,
            "explain": "Todas as noites, às nove horas, ouvia-se toc-toc no sótão."
          },
          {
            "type": "mc",
            "q": "Qual trecho do conto cria mais suspense?",
            "options": [
              "A porta rangeu e a caixa se mexia sozinha",
              "Na casa da vovó Lúcia moravam todos",
              "Vovó riu e explicou",
              "O toc-toc virou cantiga de ninar"
            ],
            "answer": 0,
            "explain": "Suspense é o momento de tensão, quando o leitor ainda não sabe o que vai acontecer."
          },
          {
            "type": "mc",
            "q": "Qual foi a solução do mistério?",
            "options": [
              "Uma coruja batia o bico na madeira",
              "Era um fantasma de verdade",
              "O vento batia a janela",
              "A vovó fazia o barulho"
            ],
            "answer": 0,
            "explain": "A coruja morava numa caixa velha e batia o bico para chamar os filhotes."
          },
          {
            "type": "mc",
            "q": "Em que lugar acontece o mistério do conto?",
            "options": [
              "No sótão da casa da vovó",
              "Em um castelo antigo",
              "Na escola",
              "Em um navio"
            ],
            "answer": 0,
            "explain": "O barulho vinha do sótão da casa da vovó Lúcia."
          },
          {
            "type": "mc",
            "q": "Ao escrever um conto de mistério, o que NÃO pode faltar?",
            "options": [
              "Um mistério e a sua solução",
              "Versos com rimas",
              "Uma lista de ingredientes",
              "Datas e locais precisos"
            ],
            "answer": 0,
            "explain": "O conto de mistério precisa de um enigma, suspense e uma revelação final."
          },
          {
            "type": "mc",
            "q": "Que tempo verbal usamos normalmente para contar uma história?",
            "options": [
              "Passado: ouviu, subiram, descobriram",
              "Futuro: ouvirá, subirão",
              "Presente: ouço, subo",
              "Nenhum, não há verbos"
            ],
            "answer": 0,
            "explain": "Contos costumam ser narrados no passado, contando fatos que já aconteceram."
          },
          {
            "type": "mc",
            "q": "Pedro e Bia “tremiam embaixo do cobertor”. Que sentimento esse trecho mostra?",
            "options": [
              "medo",
              "alegria",
              "fome",
              "sono"
            ],
            "answer": 0,
            "explain": "Tremer embaixo do cobertor mostra que eles estavam com medo do barulho."
          },
          {
            "type": "text",
            "q": "No conto, que animal fazia o barulho no sótão?",
            "answers": [
              "coruja",
              "uma coruja",
              "a coruja"
            ],
            "explain": "Era uma coruja chamando os filhotes."
          }
        ]
      },
      {
        "id": "sim_portugues",
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + 15 questões sorteadas de todos os módulos",
        "exam": {
          "size": 15
        },
        "theory": [
          {
            "h": "Resumo da prova: gramática",
            "p": [
              "Revise os cartões abaixo. Cada um resume um tópico da prova de Língua Portuguesa.",
              "<strong>Pronomes possessivos (Mód. 23):</strong> dão ideia de posse — meu, teu, seu, nosso, vosso (e femininos e plurais).",
              "<strong>Pronomes demonstrativos (Mód. 24):</strong> indicam posição — este (perto de quem fala), esse (perto de quem ouve), aquele (longe dos dois); isto, isso, aquilo são invariáveis.",
              "<strong>Verbo (Mód. 25):</strong> ação (correr), estado (estar) ou fenômeno da natureza (chover). <strong>Sinônimo</strong> = sentido parecido; <strong>antônimo</strong> = sentido contrário.",
              "<strong>Tempos verbais e -am/-ão (Mód. 26):</strong> passado (fugiram), presente (fogem), futuro (fugirão).",
              "<strong>Sujeito e predicado (Mód. 27):</strong> Quem + verbo? → sujeito. O resto, com o verbo, é o predicado."
            ],
            "cards": [
              {
                "icon": "🔑",
                "t": "possessivo",
                "d": "meu · teu · seu · nosso"
              },
              {
                "icon": "📍",
                "t": "demonstrativo",
                "d": "este · esse · aquele"
              },
              {
                "icon": "🏃",
                "t": "verbo",
                "d": "ação · estado · natureza"
              },
              {
                "icon": "=",
                "t": "sinônimo",
                "d": "formosa = bonita"
              },
              {
                "icon": "↔",
                "t": "antônimo",
                "d": "sorte × azar"
              },
              {
                "icon": "⏳",
                "t": "-am / -ão",
                "d": "fugiram (passado) · fugirão (futuro)"
              },
              {
                "icon": "🧩",
                "t": "sujeito",
                "d": "Quem + verbo?"
              },
              {
                "icon": "💬",
                "t": "predicado",
                "d": "o que se diz do sujeito"
              }
            ]
          },
          {
            "h": "Resumo da prova: gêneros textuais",
            "p": [
              "<strong>Poema:</strong> versos (linhas), estrofes (grupos de versos), rima, ritmo e repetição de sons. Serve para entreter e emocionar.",
              "<strong>Poema visual:</strong> as letras formam figuras; a forma combina com o conteúdo (ex.: Pêndulo).",
              "<strong>Texto informativo:</strong> fatos reais com datas e locais precisos (ex.: a história da montanha-russa).",
              "<strong>Conto de mistério:</strong> história misteriosa, com suspense e acontecimentos inesperados (ex.: O fantasma da sorte).",
              "<strong>Depoimento:</strong> a pessoa conta experiências reais que viveu (ex.: Medo? Todo mundo tem!).",
              "<strong>Reportagem:</strong> informações aprofundadas, com título, linha fina, lide, entretítulos e falas de especialistas (ex.: lancheira saudável)."
            ]
          }
        ],
        "games": [],
        "quiz": [
          {
            "type": "mc",
            "q": "O poema “O relógio”, de Vinicius de Moraes, serve principalmente para:",
            "options": [
              "entreter e divertir o leitor",
              "informar um acontecimento real",
              "ensinar a consertar um relógio",
              "vender um relógio novo"
            ],
            "answer": 0,
            "explain": "Poemas brincam com as palavras, o ritmo e os sons para entreter e emocionar o leitor.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "No poema “O relógio”, a repetição da expressão tic-tac indica:",
            "options": [
              "o passar do tempo",
              "que o relógio está quebrado",
              "que o relógio é barulhento demais",
              "que está chovendo"
            ],
            "answer": 0,
            "explain": "Tic-tac imita o som do relógio e, repetido, mostra o tempo passando sem parar.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Cada linha de um poema recebe o nome de:",
            "options": [
              "verso",
              "estrofe",
              "parágrafo",
              "título"
            ],
            "answer": 0,
            "explain": "Cada linha é um verso. Um grupo de versos forma uma estrofe.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Um grupo de versos de um poema é chamado de:",
            "options": [
              "estrofe",
              "verso",
              "rima",
              "frase"
            ],
            "answer": 0,
            "explain": "Estrofe é o conjunto de versos, como um bloco do poema.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Sobre os poemas visuais, o que é verdade?",
            "options": [
              "A forma do poema tem relação com o conteúdo.",
              "Precisam sempre ter rima.",
              "Sempre têm versos e estrofes.",
              "São lidos enquanto se desenha."
            ],
            "answer": 0,
            "explain": "No poema visual as letras formam figuras ligadas ao assunto, como em “Pêndulo”. Ele não precisa ter rima nem estrofes.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Qual destes NÃO é um poema visual?",
            "options": [
              "Um poema acompanhado de uma xilogravura",
              "Um poema em forma de estrela",
              "Um poema que forma a imagem de uma árvore",
              "Um poema com letras de tamanhos diferentes formando uma imagem"
            ],
            "answer": 0,
            "explain": "No poema visual são as próprias letras e palavras que formam a figura. Um desenho ao lado do poema não o torna visual.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Em qual frase há um pronome possessivo?",
            "options": [
              "A camisa amarela é sua?",
              "Aqueles meninos brincam sem parar.",
              "Nós estamos prontos!",
              "Você não está entendendo."
            ],
            "answer": 0,
            "explain": "Sua indica a quem a camisa pertence: é um pronome possessivo.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Complete: “João e eu temos um videogame. O videogame é ______.”",
            "options": [
              "nosso",
              "meu",
              "deles",
              "seu"
            ],
            "answer": 0,
            "explain": "João e eu = nós. O pronome possessivo de nós é nosso.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Nos versos “Toda a alegria / De fazer / Meu tic-tac”, que ideia a palavra meu transmite?",
            "options": [
              "Posse",
              "Tempo",
              "Lugar",
              "Quantidade"
            ],
            "answer": 0,
            "explain": "Meu é pronome possessivo: mostra que o tic-tac pertence a quem fala.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Na frase “Teus biscoitos são deliciosos!”, o pronome teus é da:",
            "options": [
              "2ª pessoa do discurso",
              "1ª pessoa do discurso",
              "3ª pessoa do discurso",
              "nenhuma pessoa"
            ],
            "answer": 0,
            "explain": "Teu, tua, teus, tuas são da 2ª pessoa (tu), com quem se fala.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Qual é o feminino plural do pronome meu?",
            "options": [
              "minhas",
              "meus",
              "minha",
              "nossas"
            ],
            "answer": 0,
            "explain": "Meu (masc. sing.), meus (masc. pl.), minha (fem. sing.), minhas (fem. pl.).",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Na tirinha, Armandinho diz ao pai: “A sua cabeça está na frente do relógio!”. De quem é a cabeça?",
            "options": [
              "Do pai",
              "Do Armandinho",
              "Do sapo",
              "Do relógio"
            ],
            "answer": 0,
            "explain": "Armandinho fala com o pai, então sua se refere ao pai. Por isso o pai não via a hora.",
            "from": "Tic-tac!"
          },
          {
            "type": "text",
            "q": "Que palavra do poema “O relógio” imita o som produzido por um relógio?",
            "answers": [
              "tic-tac",
              "tic tac",
              "tictac"
            ],
            "explain": "Tic-tac é a palavra que imita o som do relógio.",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "Por que a montanha-russa recebeu esse nome?",
            "options": [
              "Porque a diversão começou na Rússia",
              "Porque foi inventada por uma russa",
              "Porque é vermelha como a Rússia",
              "Porque fica numa montanha"
            ],
            "answer": 0,
            "explain": "O texto diz que foi mesmo na Rússia, no século 15, que as pessoas deslizavam por rampas de neve.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Como funcionava a primeira montanha-russa?",
            "options": [
              "Pessoas deslizavam em blocos de gelo por rampas de neve",
              "Um trem elétrico subia uma torre",
              "Carrinhos corriam em trilhos de aço",
              "Barcos desciam por um rio"
            ],
            "answer": 0,
            "explain": "Subia-se ao alto e deslizava-se sentado em blocos de gelo cobertos de palha; jogava-se areia para frear.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "O texto informativo se caracteriza por apresentar:",
            "options": [
              "acontecimentos reais com datas e locais",
              "uma história inventada com magia",
              "versos com rima e ritmo",
              "instruções para montar um objeto"
            ],
            "answer": 0,
            "explain": "Texto informativo traz informações reais e precisas sobre um tema.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "A Steel Dragon tem 2 479 metros e atinge 153 km/h. Onde ela fica?",
            "options": [
              "No Japão",
              "Nos Estados Unidos",
              "No Brasil",
              "Na Rússia"
            ],
            "answer": 0,
            "explain": "O texto diz que ela fica no parque Nagashima Spaland, no Japão.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "A velocidade e o comprimento da Steel Dragon são:",
            "options": [
              "153 km/h e 2 479 metros",
              "2 479 km/h e 153 metros",
              "79 km/h e 24 metros",
              "2 153 km/h e 179 metros"
            ],
            "answer": 0,
            "explain": "153 quilômetros por hora de velocidade e 2 479 metros de comprimento.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Na fala “Olhe este brinquedo. É muito radical!”, o pronome este indica que o brinquedo está:",
            "options": [
              "perto de quem fala",
              "perto de quem ouve",
              "longe dos dois",
              "em outro dia"
            ],
            "answer": 0,
            "explain": "Este, esta e isto são da 1ª pessoa: perto de quem fala.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "O menino diz “Prefiro aquele.” apontando um brinquedo distante. Aquele indica:",
            "options": [
              "algo longe de quem fala e de quem ouve",
              "algo na mão de quem fala",
              "algo perto de quem ouve",
              "algo que pertence a alguém"
            ],
            "answer": 0,
            "explain": "Aquele, aquela e aquilo indicam o que está longe das duas pessoas da conversa.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Complete: “Qual é a altura ______ roda-gigante em que você andou?” (a roda-gigante está perto de quem ouve)",
            "options": [
              "dessa",
              "desta",
              "daquela",
              "deste"
            ],
            "answer": 0,
            "explain": "Perto de quem ouve usamos esse/essa: de + essa = dessa.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Qual pronome demonstrativo é invariável (não muda para feminino nem plural)?",
            "options": [
              "aquilo",
              "aquela",
              "estes",
              "essa"
            ],
            "answer": 0,
            "explain": "Isto, isso e aquilo são invariáveis.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "“— Este cão — pensou o lobo — goza de boa saúde.” Pelo uso de este, o lobo está:",
            "options": [
              "próximo ao cão",
              "muito distante do cão",
              "sem ver o cão",
              "dentro de casa"
            ],
            "answer": 0,
            "explain": "Este indica proximidade de quem fala. O lobo está perto do cão.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Os pronomes demonstrativos indicam:",
            "options": [
              "a posição das coisas no espaço e no tempo",
              "a quem uma coisa pertence",
              "uma ação ou estado",
              "o contrário de uma palavra"
            ],
            "answer": 0,
            "explain": "Demonstrativos mostram onde está algo em relação às pessoas do discurso. Quem indica posse são os possessivos.",
            "from": "Aventura e diversão"
          },
          {
            "type": "text",
            "q": "De qual revista foi retirado o texto “Como surgiu a montanha-russa?”",
            "answers": [
              "superinteressante",
              "super interessante",
              "revista superinteressante",
              "mundo estranho"
            ],
            "explain": "O texto saiu da seção Mundo Estranho, da revista Superinteressante.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Por que o capitão dos mares se perdeu na floresta?",
            "options": [
              "Não estava acostumado a andar em terra",
              "Estava fugindo de um fantasma",
              "Queria encontrar um tesouro",
              "O navio dele afundou na floresta"
            ],
            "answer": 0,
            "explain": "O conto diz que ele não estava habituado a andar em terra e acabou se perdendo na densa floresta.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "O que o capitão sonhou durante a noite?",
            "options": [
              "Que estava no mar, numa terrível tormenta",
              "Que estava num castelo cheio de hóspedes",
              "Que ganhava muito dinheiro",
              "Que era perseguido por um lobo"
            ],
            "answer": 0,
            "explain": "Ele sonhou que estava de volta ao mar, no meio de uma terrível tormenta. Ao acordar, viu a criança iluminada.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Qual era o mistério daquele quarto?",
            "options": [
              "Lá vivia o fantasma de um menino que traz sorte",
              "Era o quarto de um ladrão",
              "A lareira nunca apagava",
              "Era onde guardavam o tesouro"
            ],
            "answer": 0,
            "explain": "O nobre explica que ali vive o fantasma alegre de um menino, um fantasma da sorte.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "No final, foi ruim para o capitão ter visto o fantasma?",
            "options": [
              "Não: ele ficou rico e feliz",
              "Sim: ele ficou doente",
              "Sim: ele perdeu o navio",
              "Não: mas ele nunca mais dormiu"
            ],
            "answer": 0,
            "explain": "Todos que viam o fantasma da sorte ganhavam dinheiro e eram felizes, e foi o que aconteceu com ele.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Um conto de mistério se caracteriza por:",
            "options": [
              "suspense e acontecimentos inesperados",
              "datas e informações precisas",
              "versos e rimas",
              "passo a passo de uma receita"
            ],
            "answer": 0,
            "explain": "Contos de mistério têm história misteriosa, suspense e surpresas.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "No trecho “o capitão conheceu uma formosa jovem, com quem se casou”, as palavras conheceu e casou indicam:",
            "options": [
              "ações dos personagens",
              "nomes dos personagens",
              "características físicas",
              "lugares da história"
            ],
            "answer": 0,
            "explain": "Conheceu e casou são verbos: indicam ações.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Qual verbo indica um fenômeno da natureza?",
            "options": [
              "trovejar",
              "correr",
              "estar",
              "escrever"
            ],
            "answer": 0,
            "explain": "Trovejar é fenômeno da natureza. Correr e escrever são ações; estar é estado.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Na frase “Todos estavam ansiosos para a festa”, o verbo estavam indica:",
            "options": [
              "estado",
              "ação",
              "fenômeno da natureza",
              "posse"
            ],
            "answer": 0,
            "explain": "Estar é verbo de estado: mostra como as pessoas se sentiam.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Qual é um sinônimo de formosa?",
            "options": [
              "bonita",
              "feia",
              "cansada",
              "triste"
            ],
            "answer": 0,
            "explain": "Formosa e bonita têm o mesmo significado: são sinônimos.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "No dicionário, quais palavras aparecem na definição de sorte?",
            "options": [
              "destino, fortuna, êxito",
              "amor, carinho, azar",
              "bondade, carinho, maneira",
              "brincadeira, cansaço, modo"
            ],
            "answer": 0,
            "explain": "Sorte pode significar destino, fortuna ou êxito. Azar é o contrário (antônimo).",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Qual é o antônimo de dormir?",
            "options": [
              "acordar",
              "sonhar",
              "deitar",
              "descansar"
            ],
            "answer": 0,
            "explain": "Antônimo é a palavra de sentido contrário: dormir × acordar.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "No texto teatral, as informações entre parênteses, em letras maiúsculas, servem para:",
            "options": [
              "indicar gestos, movimentos e o cenário",
              "mostrar a fala do narrador",
              "dar o título da peça",
              "indicar o nome do autor"
            ],
            "answer": 0,
            "explain": "Essas informações se chamam rubricas e orientam os atores.",
            "from": "Ai, que susto!"
          },
          {
            "type": "text",
            "q": "Escreva um antônimo de sorte.",
            "answers": [
              "azar",
              "falta de sorte",
              "infortunio",
              "infortúnio",
              "desgraca",
              "desgraça"
            ],
            "explain": "O contrário de sorte é azar.",
            "from": "Ai, que susto!"
          },
          {
            "type": "mc",
            "q": "Qual é o principal assunto do texto “Medo? Todo mundo tem!”?",
            "options": [
              "Os medos das pessoas e jeitos de afastá-los",
              "Como fazer uma lanterna",
              "A vida de uma escritora famosa",
              "Uma história de fantasma inventada"
            ],
            "answer": 0,
            "explain": "O texto reúne depoimentos sobre medos e antídotos para eles.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "No texto, o que significa a palavra antídoto?",
            "options": [
              "O jeito de afastar o medo",
              "Um tipo de monstro",
              "Um remédio para dor de cabeça",
              "O nome de quem conta"
            ],
            "answer": 0,
            "explain": "Cada pessoa conta o seu medo e o seu antídoto, isto é, o que faz para o medo passar.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "O depoimento é um texto em que uma pessoa:",
            "options": [
              "conta experiências que viveu de verdade",
              "inventa uma história com fadas",
              "escreve versos com rimas",
              "dá instruções de um jogo"
            ],
            "answer": 0,
            "explain": "No depoimento, o narrador (depoente) fala das próprias experiências reais.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Em “Tenho medo de raio. Também não gosto de história com bruxa”, os verbos tenho e gosto indicam algo que:",
            "options": [
              "está acontecendo (presente)",
              "já aconteceu (passado)",
              "ainda vai acontecer (futuro)",
              "nunca acontece"
            ],
            "answer": 0,
            "explain": "Tenho e gosto estão no presente: é o que Marcelo sente agora.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Como fica “Eu me deito e me cubro” com os verbos no futuro?",
            "options": [
              "Eu me deitarei e me cobrirei.",
              "Eu me deitei e me cobri.",
              "Eu me deitava e me cobria.",
              "Eu me deito e me cobri."
            ],
            "answer": 0,
            "explain": "Futuro indica o que ainda vai acontecer: deitarei, cobrirei.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Em “Eles brincaram até cansar”, o verbo está no:",
            "options": [
              "passado",
              "presente",
              "futuro",
              "infinitivo"
            ],
            "answer": 0,
            "explain": "Brincaram termina em -am: a ação já aconteceu.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Em “Eles voltarão bronzeados da praia”, o verbo está no:",
            "options": [
              "futuro",
              "passado",
              "presente",
              "plural do substantivo"
            ],
            "answer": 0,
            "explain": "Voltarão termina em -ão: a ação ainda vai acontecer.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Qual frase está no passado?",
            "options": [
              "Elas sentiram medo da tempestade.",
              "Elas sentirão medo da tempestade.",
              "Elas sentem medo da tempestade.",
              "Elas vão sentir medo amanhã."
            ],
            "answer": 0,
            "explain": "Sentiram (-am) é passado. Sentirão (-ão) é futuro.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Complete o ditado: “Os cães ______ e a caravana passa.”",
            "options": [
              "ladram",
              "ladrão",
              "ladrarão",
              "ladrões"
            ],
            "answer": 0,
            "explain": "Ladram é o verbo latir no presente. Ladrão é um substantivo.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Qual destas palavras terminadas em -ão é um SUBSTANTIVO?",
            "options": [
              "coração",
              "obedecerão",
              "caminharão",
              "guardarão"
            ],
            "answer": 0,
            "explain": "Coração é nome (substantivo). As outras são verbos no futuro.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Na tirinha, a bruxa diz “Tá pronta!”. A palavra tá corresponde ao verbo:",
            "options": [
              "estar",
              "tomar",
              "tocar",
              "ter"
            ],
            "answer": 0,
            "explain": "Tá é a forma reduzida de está, do verbo estar.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "A forma reduzida tá pode ser usada na tirinha porque:",
            "options": [
              "mostra uma situação de linguagem coloquial",
              "em todo tipo de texto se usa essa forma",
              "é uma linguagem cerimoniosa",
              "é um erro de digitação"
            ],
            "answer": 0,
            "explain": "Nas HQs a linguagem costuma ser informal, parecida com a fala do dia a dia.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "text",
            "q": "Reescreva o verbo no futuro: “Eles perderam o medo do escuro.” → Eles ______ o medo do escuro.",
            "answers": [
              "perderao",
              "perderão"
            ],
            "explain": "Perderam (passado, -am) → perderão (futuro, -ão).",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Qual é a finalidade da reportagem sobre a lancheira saudável?",
            "options": [
              "Informar sobre alimentação saudável",
              "Provocar o riso",
              "Ensinar a preparar um bolo",
              "Contar uma história de mistério"
            ],
            "answer": 0,
            "explain": "A reportagem traz informações aprofundadas sobre como montar uma lancheira saudável.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Segundo a reportagem, o que é neofobia?",
            "options": [
              "Dificuldade de aceitar alimentos novos",
              "Medo de ir à escola",
              "Vontade de comer doces",
              "Alergia a frutas"
            ],
            "answer": 0,
            "explain": "Neofobia é a dificuldade das crianças em aceitar ou experimentar alimentos novos ou desconhecidos.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Para a nutricionista, uma lancheira bem colorida:",
            "options": [
              "tem mais nutrientes",
              "é menos saudável",
              "deve ter só doces",
              "não faz diferença"
            ],
            "answer": 0,
            "explain": "Cada cor de fruta e vegetal representa nutrientes diferentes: quanto mais colorida, mais nutritiva.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Qual destes é um ULTRAPROCESSADO, que não é boa opção para a lancheira?",
            "options": [
              "achocolatado",
              "banana",
              "tomate-cereja",
              "água de coco"
            ],
            "answer": 0,
            "explain": "Achocolatado, salgadinhos, salsicha e refrigerante são ultraprocessados.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "O primeiro parágrafo da reportagem, que resume o conteúdo da matéria, chama-se:",
            "options": [
              "lide",
              "título",
              "entretítulo",
              "assinatura"
            ],
            "answer": 0,
            "explain": "O lide é o primeiro parágrafo e resume a matéria.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Onde você encontraria outras reportagens como essa?",
            "options": [
              "Em jornais e revistas",
              "Em manuais de instrução",
              "Em atlas",
              "Em livros de poemas"
            ],
            "answer": 0,
            "explain": "Reportagens são publicadas em jornais, revistas e sites de notícias.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Na frase “Vegetais oferecem vitaminas”, qual é o sujeito?",
            "options": [
              "Vegetais",
              "oferecem",
              "vitaminas",
              "oferecem vitaminas"
            ],
            "answer": 0,
            "explain": "Quem oferece vitaminas? Vegetais. Esse é o sujeito.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Na frase “No recreio, os alunos comem lanches saudáveis”, o sujeito é:",
            "options": [
              "os alunos",
              "No recreio",
              "lanches saudáveis",
              "comem"
            ],
            "answer": 0,
            "explain": "Quem come lanches saudáveis? Os alunos.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Em “Minha família mantém uma dieta equilibrada”, o predicado é:",
            "options": [
              "mantém uma dieta equilibrada",
              "Minha família",
              "Minha família mantém",
              "uma dieta equilibrada"
            ],
            "answer": 0,
            "explain": "Predicado é o que se diz sobre o sujeito, e o verbo faz parte dele: mantém uma dieta equilibrada.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Para encontrar o sujeito de uma oração, perguntamos:",
            "options": [
              "Quem + verbo?",
              "Onde?",
              "Quando?",
              "Quantos?"
            ],
            "answer": 0,
            "explain": "Perguntamos Quem (ou o que) + verbo. A resposta é o sujeito.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Em “Ela come salada”, qual palavra completa o sentido do verbo?",
            "options": [
              "salada",
              "Ela",
              "come",
              "nenhuma"
            ],
            "answer": 0,
            "explain": "Salada é o complemento verbal: completa o sentido de comer (come o quê?).",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Qual frase tem o verbo concordando corretamente com o sujeito?",
            "options": [
              "As frutas fazem bem à saúde.",
              "As frutas faz bem à saúde.",
              "A fruta fazem bem à saúde.",
              "As fruta fazem bem à saúde."
            ],
            "answer": 0,
            "explain": "O verbo concorda com o sujeito: as frutas (plural) fazem (plural).",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "text",
            "q": "Escreva o nome do lugar onde as pessoas são atendidas por médicos. A palavra começa com h.",
            "answers": [
              "hospital",
              "o hospital"
            ],
            "explain": "Hospital começa com h, que não tem som no início da palavra.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Quantas estrofes tem o poema “A chuva na janela”?",
            "options": [
              "2 estrofes",
              "4 estrofes",
              "8 estrofes",
              "1 estrofe"
            ],
            "answer": 0,
            "explain": "São 2 estrofes (grupos de versos), cada uma com 4 versos.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "No poema “A chuva na janela”, qual palavra rima com janela?",
            "options": [
              "panela",
              "chuva",
              "jardim",
              "entrar"
            ],
            "answer": 0,
            "explain": "Janela e panela terminam com o mesmo som: -ela.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "A repetição de “pinga, pinga” no poema imita:",
            "options": [
              "o som da chuva",
              "o som do relógio",
              "uma pessoa chorando",
              "um sino tocando"
            ],
            "answer": 0,
            "explain": "Pinga, pinga lembra o som das gotas de chuva caindo, assim como tic-tac imita o relógio.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "No poema, a chuva “vem conversar” e “quer um jeito de entrar”. Isso mostra que o poeta:",
            "options": [
              "deu à chuva atitudes de gente",
              "explicou como a chuva se forma",
              "deu uma notícia sobre o tempo",
              "ensinou a fechar a janela"
            ],
            "answer": 0,
            "explain": "Nos poemas é comum dar sentimentos e ações humanas a objetos e à natureza.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "No conto “O barulho no sótão”, qual era o mistério?",
            "options": [
              "Um toc-toc no sótão toda noite",
              "A vovó tinha sumido",
              "A lanterna não acendia",
              "A casa estava vazia"
            ],
            "answer": 0,
            "explain": "Todas as noites, às nove horas, ouvia-se toc-toc no sótão.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Qual trecho do conto cria mais suspense?",
            "options": [
              "A porta rangeu e a caixa se mexia sozinha",
              "Na casa da vovó Lúcia moravam todos",
              "Vovó riu e explicou",
              "O toc-toc virou cantiga de ninar"
            ],
            "answer": 0,
            "explain": "Suspense é o momento de tensão, quando o leitor ainda não sabe o que vai acontecer.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Qual foi a solução do mistério?",
            "options": [
              "Uma coruja batia o bico na madeira",
              "Era um fantasma de verdade",
              "O vento batia a janela",
              "A vovó fazia o barulho"
            ],
            "answer": 0,
            "explain": "A coruja morava numa caixa velha e batia o bico para chamar os filhotes.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Em que lugar acontece o mistério do conto?",
            "options": [
              "No sótão da casa da vovó",
              "Em um castelo antigo",
              "Na escola",
              "Em um navio"
            ],
            "answer": 0,
            "explain": "O barulho vinha do sótão da casa da vovó Lúcia.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Ao escrever um conto de mistério, o que NÃO pode faltar?",
            "options": [
              "Um mistério e a sua solução",
              "Versos com rimas",
              "Uma lista de ingredientes",
              "Datas e locais precisos"
            ],
            "answer": 0,
            "explain": "O conto de mistério precisa de um enigma, suspense e uma revelação final.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Que tempo verbal usamos normalmente para contar uma história?",
            "options": [
              "Passado: ouviu, subiram, descobriram",
              "Futuro: ouvirá, subirão",
              "Presente: ouço, subo",
              "Nenhum, não há verbos"
            ],
            "answer": 0,
            "explain": "Contos costumam ser narrados no passado, contando fatos que já aconteceram.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Pedro e Bia “tremiam embaixo do cobertor”. Que sentimento esse trecho mostra?",
            "options": [
              "medo",
              "alegria",
              "fome",
              "sono"
            ],
            "answer": 0,
            "explain": "Tremer embaixo do cobertor mostra que eles estavam com medo do barulho.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "text",
            "q": "No conto, que animal fazia o barulho no sótão?",
            "answers": [
              "coruja",
              "uma coruja",
              "a coruja"
            ],
            "explain": "Era uma coruja chamando os filhotes.",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "q": "Leia: “Esta é a minha mochila.” As palavras esta e minha são, nessa ordem, pronomes:",
            "options": [
              "demonstrativo e possessivo",
              "possessivo e demonstrativo",
              "os dois possessivos",
              "os dois demonstrativos"
            ],
            "answer": 0,
            "explain": "Esta indica posição (demonstrativo); minha indica posse (possessivo).",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual texto apresenta fatos reais com datas e locais precisos?",
            "options": [
              "Texto informativo",
              "Conto de mistério",
              "Poema visual",
              "Texto teatral"
            ],
            "answer": 0,
            "explain": "O texto informativo traz informações reais e precisas.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Na frase “Amanhã os alunos apresentarão a pesquisa”, o sujeito e o tempo verbal são:",
            "options": [
              "os alunos; futuro",
              "a pesquisa; passado",
              "Amanhã; presente",
              "os alunos; passado"
            ],
            "answer": 0,
            "explain": "Quem apresentará? Os alunos. Apresentarão (-ão) está no futuro.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual par é formado por antônimos?",
            "options": [
              "aparecer e sumir",
              "formosa e bonita",
              "lotado e cheio",
              "dono e proprietário"
            ],
            "answer": 0,
            "explain": "Aparecer e sumir têm sentidos contrários. Os outros pares são sinônimos.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual gênero textual é organizado em versos e estrofes?",
            "options": [
              "poema",
              "reportagem",
              "depoimento",
              "texto informativo"
            ],
            "answer": 0,
            "explain": "Versos e estrofes são marcas do poema.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Em “Ontem choveu muito e as crianças ficaram em casa”, o verbo choveu indica:",
            "options": [
              "fenômeno da natureza",
              "ação de uma pessoa",
              "estado",
              "posse"
            ],
            "answer": 0,
            "explain": "Chover é fenômeno da natureza; está no passado.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Uma pessoa conta, em primeira pessoa, uma experiência real que viveu. Esse texto é um:",
            "options": [
              "depoimento",
              "poema visual",
              "conto de mistério",
              "texto teatral"
            ],
            "answer": 0,
            "explain": "No depoimento o narrador fala das próprias experiências reais.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Complete corretamente: “Na semana passada, eles ______ para a praia.”",
            "options": [
              "viajaram",
              "viajarão",
              "viajam",
              "viajão"
            ],
            "answer": 0,
            "explain": "Semana passada pede verbo no passado, com -am: viajaram.",
            "from": "Simulado"
          }
        ]
      }
    ]
  },
  {
    "id": "historia",
    "nome": "História",
    "cor": "--roxo",
    "prova": "2026-11-24",
    "horario": "12h55 às 14h25",
    "capitulos": [
      {
        "id": "hist12",
        "module": "12",
        "title": "O campo e a cidade",
        "subtitle": "Vida, alimentação, trabalho e migração",
        "theory": [
          {
            "h": "O campo e a cidade",
            "figure": {
              "src": "assets/4b/hist12-campo-cidade.svg",
              "alt": "Paisagem dividida: à esquerda a cidade com prédios, trânsito e lojas próximas; à direita o campo com sítio, horta, animais, rio e estrada de terra.",
              "tipo": "diagrama"
            },
            "p": [
              "O campo é a <strong>zona rural</strong> e a cidade é a <strong>zona urbana</strong>. Nem sempre o campo é só mata e animais, e a cidade também tem parques e praças com árvores.",
              "Na <strong>cidade</strong> vivem e trabalham muitas pessoas. Há <strong>prédios altos</strong> (arranha-céus), e as construções — moradias, lojas, bancos, escolas — ficam <strong>bem próximas</strong> umas das outras.",
              "No <strong>campo</strong> ficam os <strong>sítios e fazendas</strong>, áreas de vegetação com rios e lagos, construções <strong>mais distantes</strong> umas das outras e <strong>ruas de terra</strong>. As pessoas cultivam hortas e pomares e criam animais (galinhas, porcos) para consumo próprio.",
              "Algumas áreas rurais são <strong>isoladas</strong>: os moradores fazem longos deslocamentos até a cidade em busca de escola, hospital e banco. Mas muitas zonas urbanas e rurais estão <strong>interligadas</strong> (conectadas) e usam os mesmos serviços."
            ]
          },
          {
            "h": "A vida no campo e na cidade",
            "p": [
              "No campo, o <strong>ritmo de vida é menos acelerado</strong>. As pessoas têm mais contato com a natureza e conhecem a origem dos alimentos.",
              "As <strong>crianças do campo</strong> costumam brincar <strong>ao ar livre</strong>: nadam em rios, brincam com animais, sobem em árvores, cultivam plantas.",
              "Nas <strong>cidades</strong>, as brincadeiras acontecem mais <strong>dentro de casa</strong>, na casa de amigos ou em áreas de lazer de prédios e condomínios. Existem parques e praças, mas nem sempre as crianças os frequentam.",
              "No poema <em>Fazenda da vovó</em>, Suellen mora numa cidade grande com barulho, trânsito e poluição, e passa as férias na fazenda da avó, onde fica “com o pé na terra” e descansa da agitação."
            ]
          },
          {
            "h": "A alimentação no campo e na cidade",
            "figure": {
              "src": "assets/4b/hist12-alimentos.svg",
              "alt": "Três exemplos com milho: espiga in natura, milho em conserva (processado) e salgadinho de milho (ultraprocessado).",
              "tipo": "diagrama"
            },
            "p": [
              "No <strong>campo</strong>, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras, carnes e peixes. Por isso, os <strong>alimentos in natura</strong> (em seu estado natural) tendem a ser <strong>mais baratos e frescos</strong>.",
              "Nas <strong>cidades</strong>, os alimentos in natura vêm de longe e nem sempre são tão baratos e frescos. Há muita oferta de <strong>produtos industrializados</strong>, com conservantes, sal ou açúcar. Como as pessoas gastam muito tempo em deslocamentos, têm menos tempo para cozinhar.",
              "Exemplo com milho: a <strong>espiga</strong> é in natura; o <strong>milho em conserva</strong> é processado; o <strong>salgadinho de milho</strong> é ultraprocessado.",
              "Desde <strong>2023</strong>, uma lei obriga os alimentos industrializados com muito sal, açúcar ou gordura a trazer um aviso no <strong>rótulo</strong> (ALTO EM…).",
              "A indígena guarani Márcia Poty Vidal conta que seu povo prefere alimentos in natura: fubá, canjica, feijão, milho. “A gente luta para não comer coisa empacotada.”"
            ]
          },
          {
            "h": "Trabalho e migração",
            "figure": {
              "src": "assets/4b/hist12-migracao.svg",
              "alt": "Linha do tempo: até 1950 a maioria vivia no campo; a partir de 1950 muitos migram para as cidades com as máquinas e as indústrias; em 1970 mais da metade vive nas cidades; hoje há neo-rurais voltando ao campo.",
              "tipo": "diagrama"
            },
            "p": [
              "Até meados do século passado, <strong>a maioria dos brasileiros vivia e trabalhava no campo</strong>.",
              "A partir dos <strong>anos 1950</strong>, com a chegada de <strong>máquinas</strong> (como o trator) ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, o <strong>crescimento das indústrias</strong>, do comércio e dos serviços nas cidades atraía os camponeses. Muitos <strong>migraram para as cidades</strong> em busca de <strong>novas oportunidades de trabalho</strong> e de melhores condições de vida.",
              "Já nos <strong>anos 1970</strong>, mais da metade da população brasileira vivia em cidades.",
              "Hoje há o caminho inverso: os <strong>neo-rurais</strong> trocam a cidade pelo campo. Eder e Edna saíram de Curitiba para produzir morangos em Mandirituba (PR).",
              "No início do século 20, <strong>imigrantes</strong> de outros países (como os japoneses) vieram trabalhar nas lavouras de café e nas fábricas do Brasil."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Campo ou cidade?",
            "short": "Campo ou cidade",
            "instructions": "Esta característica é mais comum no campo ou na cidade?",
            "categories": [
              "Campo (zona rural) 🌾",
              "Cidade (zona urbana) 🏙️"
            ],
            "items": [
              {
                "text": "Prédios altos, os arranha-céus",
                "cat": 1
              },
              {
                "text": "Sítios, fazendas, hortas e pomares",
                "cat": 0
              },
              {
                "text": "Construções muito próximas umas das outras",
                "cat": 1
              },
              {
                "text": "Ruas de terra, sem asfalto",
                "cat": 0
              },
              {
                "text": "Ritmo de vida mais acelerado",
                "cat": 1
              },
              {
                "text": "Crianças nadam em rios e sobem em árvores",
                "cat": 0
              },
              {
                "text": "Muita oferta de produtos industrializados",
                "cat": 1
              },
              {
                "text": "Alimentos in natura mais baratos e frescos",
                "cat": 0
              }
            ]
          },
          {
            "type": "sort",
            "title": "In natura, processado ou ultraprocessado?",
            "short": "Tipos de alimento",
            "instructions": "Classifique o alimento.",
            "categories": [
              "In natura 🌽",
              "Processado 🥫",
              "Ultraprocessado 🍬"
            ],
            "items": [
              {
                "text": "Espiga de milho",
                "cat": 0
              },
              {
                "text": "Milho em conserva",
                "cat": 1
              },
              {
                "text": "Salgadinho de milho",
                "cat": 2
              },
              {
                "text": "Ovo",
                "cat": 0
              },
              {
                "text": "Pão de padaria e queijo",
                "cat": 1
              },
              {
                "text": "Refrigerante e salsicha",
                "cat": 2
              },
              {
                "text": "Banana",
                "cat": 0
              },
              {
                "text": "Biscoito recheado",
                "cat": 2
              }
            ]
          },
          {
            "type": "sort",
            "title": "Por que migraram?",
            "short": "Motivos da migração",
            "instructions": "Isto foi um motivo da migração do campo para a cidade a partir de 1950?",
            "categories": [
              "Sim, foi um motivo ✅",
              "Não foi um motivo ❌"
            ],
            "items": [
              {
                "text": "Crescimento das indústrias nas cidades",
                "cat": 0
              },
              {
                "text": "Gosto pessoal por férias",
                "cat": 1
              },
              {
                "text": "Busca por novas oportunidades de trabalho",
                "cat": 0
              },
              {
                "text": "Crescimento da população no campo",
                "cat": 1
              },
              {
                "text": "Máquinas no campo diminuíram o trabalho",
                "cat": 0
              },
              {
                "text": "Lazer",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual característica é típica da zona urbana?",
            "options": [
              "Prédios altos e construções próximas",
              "Sítios e fazendas distantes",
              "Ruas de terra sem asfalto",
              "Hortas para consumo próprio"
            ],
            "answer": 0,
            "explain": "Nas cidades vivem muitas pessoas, por isso há prédios altos (arranha-céus) e construções bem próximas."
          },
          {
            "type": "mc",
            "q": "Em comparação com a cidade, o ritmo de vida no campo costuma ser:",
            "options": [
              "menos acelerado",
              "mais acelerado",
              "igual em todo lugar",
              "sem nenhuma atividade"
            ],
            "answer": 0,
            "explain": "No campo o ritmo é mais calmo, com mais contato com a natureza."
          },
          {
            "type": "mc",
            "q": "Onde as crianças costumam brincar mais ao ar livre, em contato com a natureza?",
            "options": [
              "No campo",
              "Em apartamentos",
              "Em shopping centers",
              "Em escritórios"
            ],
            "answer": 0,
            "explain": "No campo as crianças nadam em rios, sobem em árvores e brincam com animais."
          },
          {
            "type": "mc",
            "q": "O que são alimentos in natura?",
            "options": [
              "Alimentos em seu estado natural",
              "Alimentos em lata",
              "Salgadinhos de pacote",
              "Comidas congeladas"
            ],
            "answer": 0,
            "explain": "In natura = como vêm da natureza: frutas, verduras, ovos, leite."
          },
          {
            "type": "mc",
            "q": "Por que no campo os alimentos in natura tendem a ser mais baratos e frescos?",
            "options": [
              "São produzidos perto das moradias",
              "Vêm de outros países",
              "São feitos em fábricas",
              "Têm muitos conservantes"
            ],
            "answer": 0,
            "explain": "Os produtores estão próximos, então não há transporte longo."
          },
          {
            "type": "mc",
            "q": "O salgadinho de milho é um alimento:",
            "options": [
              "ultraprocessado",
              "in natura",
              "processado simples",
              "orgânico"
            ],
            "answer": 0,
            "explain": "Espiga = in natura; milho em conserva = processado; salgadinho = ultraprocessado."
          },
          {
            "type": "mc",
            "q": "Desde 2023, o que os alimentos com muito sal, açúcar ou gordura devem trazer?",
            "options": [
              "Um aviso no rótulo",
              "Um brinquedo dentro",
              "Um preço mais baixo",
              "Uma receita no verso"
            ],
            "answer": 0,
            "explain": "A lei obriga o aviso ALTO EM sódio, açúcar ou gordura no rótulo."
          },
          {
            "type": "mc",
            "q": "A partir dos anos 1950, muitos brasileiros migraram:",
            "options": [
              "do campo para as cidades",
              "das cidades para o campo",
              "do Brasil para o Japão",
              "do litoral para as florestas"
            ],
            "answer": 0,
            "explain": "Com a industrialização das cidades, muitos deixaram o campo em busca de trabalho."
          },
          {
            "type": "mc",
            "q": "Qual foi um dos principais motivos dessa migração?",
            "options": [
              "A busca por novas oportunidades de trabalho",
              "O gosto pessoal por férias",
              "O crescimento da população no campo",
              "A vontade de ter mais lazer"
            ],
            "answer": 0,
            "explain": "As indústrias e o comércio nas cidades ofereciam trabalho, e as máquinas no campo diminuíam as vagas."
          },
          {
            "type": "mc",
            "q": "Como se chamam as pessoas que trocam a cidade pelo campo hoje em dia?",
            "options": [
              "neo-rurais",
              "imigrantes",
              "camponeses antigos",
              "turistas"
            ],
            "answer": 0,
            "explain": "Neo-rurais fazem o caminho inverso: deixam a cidade para viver e trabalhar no campo."
          },
          {
            "type": "mc",
            "q": "No texto, Eder e Edna deixaram a cidade para:",
            "options": [
              "produzir morangos no campo",
              "abrir uma loja no shopping",
              "trabalhar em uma fábrica",
              "morar em outro país"
            ],
            "answer": 0,
            "explain": "O casal foi para Mandirituba (PR) e produz morangos."
          },
          {
            "type": "mc",
            "q": "As fotos de colheita de café de 1930 (manual) e de 2022 (com máquina) mostram que:",
            "options": [
              "as máquinas mudaram o trabalho no campo",
              "o café não é mais plantado",
              "o trabalho no campo nunca mudou",
              "só crianças trabalham no campo"
            ],
            "answer": 0,
            "explain": "A colheita mecanizada exige menos pessoas: é a modernização do campo."
          },
          {
            "type": "text",
            "q": "Em que década, mais da metade da população brasileira passou a viver em cidades? (Escreva o número, ex.: 1950)",
            "answers": [
              "1970",
              "anos 1970",
              "decada de 1970"
            ],
            "explain": "Nos anos 1970, mais da metade dos brasileiros já vivia em cidades."
          }
        ]
      },
      {
        "id": "hist13",
        "module": "13",
        "title": "Trabalho e lazer",
        "subtitle": "O que é lazer · Adultos também brincam · Cinema e circo",
        "theory": [
          {
            "h": "O que é lazer?",
            "p": [
              "<strong>Lazer</strong> é toda atividade que envolve <strong>descanso e diversão</strong>. As crianças, que não devem trabalhar, têm mais tempo de lazer, mas o lazer é importante para <strong>pessoas de todas as idades</strong>.",
              "A maioria dos adultos trabalha cerca de <strong>8 horas por dia</strong> e <strong>44 horas por semana</strong>. Por isso, as pausas — como a hora do almoço — e os momentos de descanso são fundamentais para a saúde.",
              "Exemplos do livro: um advogado que gosta de cantar no tempo livre; um casal de professores que fotografa paisagens nas férias; uma engenheira que adora cozinhar nos fins de semana."
            ]
          },
          {
            "h": "Adultos também brincam",
            "p": [
              "Brincar é importante para <strong>todos</strong>: crianças, jovens, adultos e idosos.",
              "Os adultos costumam ter <strong>hobbies</strong>. <em>Hobby</em> é uma palavra inglesa para atividades feitas só como lazer ou passatempo: colecionar coisas, pintar, desenhar, tocar um instrumento.",
              "Fotos do livro: indígenas guarani jogando <strong>peteca</strong> (brincadeira de <strong>origem indígena</strong>), homens jogando <strong>capoeira</strong>, mulher praticando <em>slackline</em>, pessoas jogando basquete.",
              "Especialistas dizem que brincar ajuda os adultos a <strong>fortalecer laços sociais, melhorar a memória, estimular a imaginação e o raciocínio</strong>.",
              "No Brasil, o lazer ainda pode ser um <strong>privilégio</strong>: muitos trabalham demais, gastam horas no trânsito ou moram em lugares sem parques, praias e praças."
            ]
          },
          {
            "h": "O direito ao lazer e ao descanso",
            "figure": {
              "src": "assets/4b/hist13-direitos.svg",
              "alt": "Linha do tempo dos direitos: 1925 férias de 15 dias, 1943 CLT, 1948 Declaração Universal dos Direitos Humanos, 1977 férias de 30 dias, 1988 Constituição Federal com descanso semanal remunerado.",
              "tipo": "diagrama"
            },
            "p": [
              "Depois da Segunda Guerra Mundial (1945), foi criada a <strong>ONU</strong>. Em <strong>1948</strong>, os países assinaram a <strong>Declaração Universal dos Direitos Humanos</strong>, que garante o <strong>direito ao repouso e ao lazer</strong> (Artigo 24). <strong>Eleanor Roosevelt</strong>, a “primeira-dama do mundo”, presidiu a comissão que a elaborou.",
              "No Brasil, a <strong>Constituição Federal de 1988</strong> garante o <strong>descanso semanal remunerado</strong>: quem trabalha tem direito a descansar sem desconto no salário (normalmente no domingo).",
              "As férias também foram conquistadas aos poucos: <strong>1925</strong> – 15 dias de férias para trabalhadores urbanos; <strong>1943</strong> – a <strong>CLT</strong> (Consolidação das Leis do Trabalho); <strong>1977</strong> – férias de <strong>30 dias</strong>.",
              "As leis trabalhistas existem porque <strong>os trabalhadores lutaram por elas</strong> durante décadas, e não só pela boa vontade dos governos."
            ]
          },
          {
            "h": "O lazer gera trabalho",
            "p": [
              "Lazer e trabalho estão interligados: <strong>enquanto alguns se divertem, outros trabalham</strong>. O lazer gera empregos e riquezas para o país.",
              "Profissionais do lazer e do entretenimento: cantores, cineastas, fotógrafos, músicos, atores, técnicos de som, pipoqueiros, guias de turismo…"
            ]
          },
          {
            "h": "A história do lazer: o cinema e o circo",
            "figure": {
              "src": "assets/4b/hist13-cinema-circo.svg",
              "alt": "Comparação do cinema antigo (fim do século 19, filmes sem som e sem cor, cinemas de rua, roupas formais) com o atual (shopping, ingresso pela internet) e do circo antigo (animais) com o atual (sem animais, itinerante, palhaços e mágicos).",
              "tipo": "diagrama"
            },
            "p": [
              "O <strong>cinema</strong> foi inventado no <strong>final do século 19</strong>. Os filmes <strong>não tinham som nem cores</strong> e eram exibidos em salas na rua, os <strong>“cinemas de rua”</strong>. As pessoas se vestiam de maneira <strong>formal</strong> para ir ao cinema.",
              "Quando surgiu a <strong>televisão</strong>, muitos acharam que ela substituiria o cinema, mas o hábito continua, com mudanças: roupas informais, salas em <strong>shopping centers</strong> e ingressos pela <strong>internet</strong>. Alguns cinemas de rua resistem, como o Cine Theatro Brasil, em Belo Horizonte.",
              "Hoje o Brasil tem muitas salas, mas só <strong>7% dos municípios</strong> têm cinema: cerca de <strong>90 milhões</strong> de brasileiros vivem em cidades sem cinema.",
              "O <strong>circo</strong> é um entretenimento antigo. No passado, atrações com <strong>animais</strong> eram comuns; hoje são raras, pois as pessoas estão mais conscientes dos <strong>maus-tratos aos animais</strong>.",
              "O que não mudou é a <strong>tradição itinerante</strong>: o circo viaja de cidade em cidade, monta a tenda e se apresenta no <strong>picadeiro</strong> (área central do circo). Trabalhadores do circo: palhaço, mágico, trapezista, malabarista, pipoqueiro."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Lazer ou trabalho?",
            "short": "Lazer ou trabalho",
            "instructions": "A pessoa está em momento de lazer ou trabalhando?",
            "categories": [
              "Lazer 🎉",
              "Trabalho 🛠️"
            ],
            "items": [
              {
                "text": "Pessoas comendo pipoca e vendo um filme",
                "cat": 0
              },
              {
                "text": "Equipe filmando um filme no estúdio",
                "cat": 1
              },
              {
                "text": "Amigos jogando peteca no fim de semana",
                "cat": 0
              },
              {
                "text": "Trapezista se apresentando no circo",
                "cat": 1
              },
              {
                "text": "Família fazendo piquenique no parque",
                "cat": 0
              },
              {
                "text": "Pipoqueiro vendendo pipoca no circo",
                "cat": 1
              },
              {
                "text": "Engenheira cozinhando por diversão no domingo",
                "cat": 0
              },
              {
                "text": "Técnico preparando turistas para o arvorismo",
                "cat": 1
              }
            ]
          },
          {
            "type": "sort",
            "title": "Antes ou hoje?",
            "short": "Cinema e circo",
            "instructions": "Isto era comum antigamente ou é comum hoje?",
            "categories": [
              "Antigamente 🎞️",
              "Hoje 📱"
            ],
            "items": [
              {
                "text": "Filmes sem som e sem cores",
                "cat": 0
              },
              {
                "text": "Comprar ingresso pela internet",
                "cat": 1
              },
              {
                "text": "Vestir-se de maneira formal para ir ao cinema",
                "cat": 0
              },
              {
                "text": "Salas de cinema dentro de shopping centers",
                "cat": 1
              },
              {
                "text": "Muitas atrações com animais no circo",
                "cat": 0
              },
              {
                "text": "Circo sem animais, com palhaços e mágicos",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Linha do tempo dos direitos",
            "short": "Direitos conquistados",
            "instructions": "Ligue cada data à conquista.",
            "pairs": [
              [
                "1925",
                "15 dias de férias para trabalhadores urbanos"
              ],
              [
                "1943",
                "CLT – Consolidação das Leis do Trabalho"
              ],
              [
                "1948",
                "Declaração Universal dos Direitos Humanos"
              ],
              [
                "1977",
                "Férias de 30 dias"
              ],
              [
                "1988",
                "Constituição Federal: descanso semanal remunerado"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "O que é lazer?",
            "options": [
              "Toda atividade de descanso e diversão",
              "Só o trabalho feito em casa",
              "Uma profissão do circo",
              "A hora de ir para a escola"
            ],
            "answer": 0,
            "explain": "Lazer é toda atividade que envolve descanso e diversão."
          },
          {
            "type": "mc",
            "q": "O lazer é importante para:",
            "options": [
              "pessoas de todas as idades",
              "somente crianças",
              "somente idosos",
              "ninguém"
            ],
            "answer": 0,
            "explain": "Crianças, jovens, adultos e idosos precisam de descanso e diversão."
          },
          {
            "type": "mc",
            "q": "O que é um hobby?",
            "options": [
              "Uma atividade feita como passatempo",
              "Um tipo de trabalho pago",
              "Um documento de direitos",
              "Um prédio de cinema"
            ],
            "answer": 0,
            "explain": "Hobby é uma atividade feita só como lazer: colecionar, pintar, tocar um instrumento."
          },
          {
            "type": "mc",
            "q": "A peteca é uma brincadeira de origem:",
            "options": [
              "indígena",
              "japonesa",
              "alemã",
              "portuguesa"
            ],
            "answer": 0,
            "explain": "O livro mostra indígenas guarani jogando peteca feita de folha de palmeira."
          },
          {
            "type": "mc",
            "q": "Qual documento de 1948 garante o direito ao repouso e ao lazer?",
            "options": [
              "Declaração Universal dos Direitos Humanos",
              "Constituição de 1988",
              "Lei dos rótulos de 2023",
              "Certidão de nascimento"
            ],
            "answer": 0,
            "explain": "O Artigo 24 da Declaração diz que todo ser humano tem direito a repouso e lazer."
          },
          {
            "type": "mc",
            "q": "A Constituição Federal de 1988 garante aos trabalhadores:",
            "options": [
              "o descanso semanal remunerado",
              "trabalhar sem nenhum descanso",
              "férias de 15 dias apenas",
              "salário só para quem não descansa"
            ],
            "answer": 0,
            "explain": "Quem trabalha tem direito a um dia de descanso por semana sem desconto no salário."
          },
          {
            "type": "mc",
            "q": "As leis trabalhistas, como as férias de 30 dias, existem hoje porque:",
            "options": [
              "os trabalhadores lutaram por elas",
              "o governo teve boa vontade",
              "sempre existiram",
              "foram criadas em 1925 e nunca mudaram"
            ],
            "answer": 0,
            "explain": "A historiadora explica que houve décadas de luta dos trabalhadores."
          },
          {
            "type": "mc",
            "q": "O que significa a frase “Enquanto alguns se divertem, outros trabalham”?",
            "options": [
              "O lazer de uns depende do trabalho de outros",
              "Ninguém trabalha nas festas",
              "Só crianças trabalham",
              "Lazer e trabalho nunca se misturam"
            ],
            "answer": 0,
            "explain": "Cantores, técnicos, pipoqueiros e muitos outros trabalham para garantir a diversão das pessoas."
          },
          {
            "type": "mc",
            "q": "Como eram os primeiros filmes de cinema, no final do século 19?",
            "options": [
              "Sem som e sem cores",
              "Coloridos e em 3D",
              "Vistos pela internet",
              "Exibidos só na televisão"
            ],
            "answer": 0,
            "explain": "Os primeiros filmes não tinham som nem cores e eram exibidos nos cinemas de rua."
          },
          {
            "type": "mc",
            "q": "Segundo o texto, no Brasil:",
            "options": [
              "milhões de pessoas vivem em cidades sem cinema",
              "toda cidade tem cinema",
              "não existem mais cinemas",
              "o cinema é um lazer para todos"
            ],
            "answer": 0,
            "explain": "Só 7% dos municípios têm sala de cinema; cerca de 90 milhões vivem em cidades sem cinema."
          },
          {
            "type": "mc",
            "q": "Por que hoje os circos quase não usam animais?",
            "options": [
              "Por causa dos maus-tratos aos animais",
              "Porque os animais ficaram caros",
              "Porque os circos acabaram",
              "Porque os animais não viajam"
            ],
            "answer": 0,
            "explain": "As pessoas estão mais conscientes dos maus-tratos aos animais."
          },
          {
            "type": "mc",
            "q": "O circo é itinerante. Isso quer dizer que ele:",
            "options": [
              "viaja de cidade em cidade",
              "fica sempre no mesmo lugar",
              "só funciona no inverno",
              "tem só um artista"
            ],
            "answer": 0,
            "explain": "Itinerante = que viaja, se desloca constantemente."
          },
          {
            "type": "text",
            "q": "Como se chama a área central do circo, onde acontecem as apresentações?",
            "answers": [
              "picadeiro",
              "o picadeiro"
            ],
            "explain": "Picadeiro é a área central do circo, reservada às atrações."
          }
        ]
      },
      {
        "id": "hist14",
        "module": "14",
        "title": "Muitos jeitos de festejar",
        "subtitle": "Motivos e jeitos de festejar · Brasil, um país festeiro",
        "theory": [
          {
            "h": "Muitos motivos e jeitos de festejar",
            "p": [
              "<strong>Festejar</strong> é reunir-se para <strong>celebrar uma tradição ou um acontecimento</strong>: um ano novo, uma colheita, o nascimento de uma criança, a posse de um líder… É um costume muito antigo.",
              "Algumas festas acontecem em quase todo o país, como o <strong>Ano-Novo</strong> (31 de dezembro para 1º de janeiro). Outras são de uma região, como o <strong>Festival Folclórico de Parintins</strong> (AM), no fim de junho, com os bois Garantido e Caprichoso.",
              "Muitas festas antigas de <strong>origem religiosa</strong> foram trazidas pelos <strong>portugueses</strong>. Um exemplo é a <strong>Folia do Divino</strong>, uma das celebrações mais antigas do catolicismo popular brasileiro.",
              "Os povos indígenas também têm suas festas. O <strong>Kuarup</strong>, dos povos do <strong>Xingu</strong> (MT), é um ritual de <strong>homenagem às pessoas que já morreram</strong>: eles acreditam que os mortos não querem ver os vivos tristes. Há pinturas corporais, flautas uruá e a luta huka-huka."
            ]
          },
          {
            "h": "Brasil, um país festeiro",
            "figure": {
              "src": "assets/4b/hist14-festas.svg",
              "alt": "Calendário de festas brasileiras: Carnaval em fevereiro e março, festas juninas em junho com Santo Antônio, São João e São Pedro, Parintins em junho, Círio de Nazaré em outubro, Oktoberfest em outubro e Congada.",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Festas juninas</strong>: trazidas pelos <strong>portugueses</strong>, de origem religiosa. Celebram os santos juninos: <strong>Santo Antônio (13)</strong>, <strong>São João (24)</strong> e <strong>São Pedro (29 de junho)</strong>.",
              "<strong>Círio de Nazaré</strong>: festa religiosa em <strong>Belém (PA)</strong>, todo mês de <strong>outubro</strong>, há mais de duzentos anos. Milhares de romeiros caminham em homenagem a Nossa Senhora de Nazaré. A devoção também veio de Portugal.",
              "<strong>Congada</strong>: trazida pelos <strong>africanos</strong>. Lembra a coroação do rei e da rainha do antigo Reino do Congo, na África.",
              "<strong>Carnaval</strong>: herança dos portugueses, acontece entre <strong>fevereiro e março</strong>. O Carnaval do <strong>Rio de Janeiro</strong> é o maior do mundo (Livro dos Recordes). Também é famoso em Recife e Olinda (bonecos gigantes), Salvador, São Paulo e Belo Horizonte."
            ]
          },
          {
            "h": "Cada cidade, uma festa",
            "p": [
              "Quase toda cidade tem sua festa. Muitas celebram o <strong>aniversário de fundação</strong>: Salvador (29 de março de 1549) e São Paulo (25 de janeiro de 1554).",
              "Os imigrantes também trouxeram festas: o <strong>Bon Odori</strong>, dos descendentes de <strong>japoneses</strong> em São Paulo, e a <strong>Oktoberfest</strong>, que celebra as tradições <strong>alemãs</strong> em Blumenau (SC), em outubro.",
              "O <strong>bumba meu boi</strong>, festejado principalmente no Nordeste, tem mais de duzentos anos. Conta a história de <strong>Pai Francisco e Mãe Catirina</strong>, um casal de negros escravizados: Catirina, grávida, queria comer língua de boi; Francisco matou o boi mais bonito da fazenda; os curandeiros ressuscitaram o boi e todos festejaram.",
              "<strong>Feriados</strong> são dias em que a maioria não trabalha nem vai à escola: 1º de janeiro, 21 de abril (Tiradentes), 1º de maio (Trabalho), 7 de setembro (Independência), 12 de outubro, 15 de novembro, 20 de novembro (Consciência Negra) e 25 de dezembro (Natal)."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Quem trouxe a festa?",
            "short": "Origem das festas",
            "instructions": "Qual povo trouxe ou criou esta festa?",
            "categories": [
              "Portugueses ⛪",
              "Africanos 👑",
              "Indígenas 🪶",
              "Imigrantes europeus e asiáticos 🌍"
            ],
            "items": [
              {
                "text": "Festas juninas",
                "cat": 0
              },
              {
                "text": "Congada",
                "cat": 1
              },
              {
                "text": "Kuarup",
                "cat": 2
              },
              {
                "text": "Oktoberfest",
                "cat": 3
              },
              {
                "text": "Folia do Divino",
                "cat": 0
              },
              {
                "text": "Bon Odori",
                "cat": 3
              },
              {
                "text": "Círio de Nazaré (a devoção)",
                "cat": 0
              },
              {
                "text": "Carnaval",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Onde e quando é a festa?",
            "short": "Festa e lugar",
            "instructions": "Ligue cada festa ao lugar ou à data.",
            "pairs": [
              [
                "Círio de Nazaré",
                "Belém (PA), em outubro"
              ],
              [
                "Festival de Parintins",
                "Amazonas, no fim de junho"
              ],
              [
                "Kuarup",
                "Parque Indígena do Xingu (MT)"
              ],
              [
                "Oktoberfest",
                "Blumenau (SC)"
              ],
              [
                "Maior Carnaval do mundo",
                "Rio de Janeiro (RJ)"
              ],
              [
                "Bonecos gigantes no Carnaval",
                "Olinda (PE)"
              ]
            ]
          },
          {
            "type": "pairs",
            "title": "Santos juninos",
            "short": "Festas juninas",
            "instructions": "Ligue o santo ao dia de junho.",
            "pairs": [
              [
                "Santo Antônio",
                "13 de junho"
              ],
              [
                "São João",
                "24 de junho"
              ],
              [
                "São Pedro",
                "29 de junho"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Festejar é:",
            "options": [
              "reunir-se para celebrar uma tradição ou acontecimento",
              "trabalhar mais horas para ganhar dinheiro",
              "viajar sozinho para outro país",
              "ficar em casa estudando para a prova"
            ],
            "answer": 0,
            "explain": "Festejar é se reunir para celebrar algo: um ano novo, uma colheita, um nascimento."
          },
          {
            "type": "mc",
            "q": "As festas juninas foram trazidas ao Brasil pelos:",
            "options": [
              "portugueses",
              "japoneses",
              "alemães",
              "indígenas"
            ],
            "answer": 0,
            "explain": "São festas de origem religiosa trazidas pelos portugueses."
          },
          {
            "type": "mc",
            "q": "Qual santo é celebrado em 24 de junho?",
            "options": [
              "São João",
              "Santo Antônio",
              "São Pedro",
              "São Benedito"
            ],
            "answer": 0,
            "explain": "Santo Antônio dia 13, São João dia 24 e São Pedro dia 29."
          },
          {
            "type": "mc",
            "q": "O Círio de Nazaré acontece:",
            "options": [
              "em Belém (PA), em outubro",
              "em Olinda, no Carnaval",
              "em Blumenau, em junho",
              "no Xingu, em dezembro"
            ],
            "answer": 0,
            "explain": "Todo mês de outubro, milhares de romeiros caminham em Belém em homenagem a Nossa Senhora de Nazaré."
          },
          {
            "type": "mc",
            "q": "A Congada foi trazida ao Brasil pelos:",
            "options": [
              "africanos",
              "portugueses",
              "alemães",
              "japoneses"
            ],
            "answer": 0,
            "explain": "A Congada lembra a coroação do rei e da rainha do antigo Reino do Congo, na África."
          },
          {
            "type": "mc",
            "q": "O Kuarup é um ritual indígena do Xingu que:",
            "options": [
              "homenageia as pessoas que já morreram",
              "comemora o Ano-Novo",
              "celebra o aniversário da cidade",
              "é uma festa de origem alemã"
            ],
            "answer": 0,
            "explain": "Os povos do Xingu acreditam que os mortos não querem ver os vivos tristes."
          },
          {
            "type": "mc",
            "q": "Segundo o Livro dos Recordes, o maior Carnaval do mundo é o de:",
            "options": [
              "Rio de Janeiro",
              "Salvador",
              "Recife",
              "São Paulo"
            ],
            "answer": 0,
            "explain": "São mais de 2 milhões de pessoas por dia nas ruas do Rio de Janeiro."
          },
          {
            "type": "mc",
            "q": "A Oktoberfest, em Blumenau (SC), celebra as tradições dos imigrantes:",
            "options": [
              "alemães",
              "japoneses",
              "africanos",
              "portugueses"
            ],
            "answer": 0,
            "explain": "É um festival parecido com o de Munique, na Alemanha."
          },
          {
            "type": "mc",
            "q": "O Bon Odori é um festival dos descendentes de:",
            "options": [
              "japoneses",
              "alemães",
              "italianos",
              "indígenas"
            ],
            "answer": 0,
            "explain": "No estado de São Paulo, descendentes de japoneses celebram o Bon Odori."
          },
          {
            "type": "mc",
            "q": "O bumba meu boi conta a história de:",
            "options": [
              "Pai Francisco e Mãe Catirina",
              "Santo Antônio e São Pedro",
              "dom Pedro I",
              "um rei do Congo"
            ],
            "answer": 0,
            "explain": "Catirina queria comer língua de boi; o boi foi morto e depois ressuscitado pelos curandeiros."
          },
          {
            "type": "mc",
            "q": "Muitas cidades fazem festa para celebrar:",
            "options": [
              "o aniversário de fundação",
              "o fim das aulas",
              "o primeiro dia de chuva",
              "a troca de prefeito"
            ],
            "answer": 0,
            "explain": "Salvador (29/3/1549) e São Paulo (25/1/1554) comemoram sua fundação."
          },
          {
            "type": "mc",
            "q": "Qual destes feriados é religioso?",
            "options": [
              "25 de dezembro (Natal)",
              "7 de setembro (Independência)",
              "1º de maio (Dia do Trabalho)",
              "21 de abril (Tiradentes)"
            ],
            "answer": 0,
            "explain": "O Natal é um feriado religioso, comemorado pelos cristãos."
          },
          {
            "type": "text",
            "q": "Em que estado brasileiro fica Parintins, onde acontece o Festival Folclórico?",
            "answers": [
              "amazonas",
              "am",
              "o amazonas"
            ],
            "explain": "Parintins fica no Amazonas (AM)."
          }
        ]
      },
      {
        "id": "sim_historia",
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + 15 questões sorteadas de todos os módulos",
        "exam": {
          "size": 15
        },
        "theory": [
          {
            "h": "Resumo da prova de História",
            "p": [
              "<strong>Módulo 12 – O campo e a cidade:</strong> cidade (zona urbana) tem prédios altos e construções próximas; campo (zona rural) tem sítios, fazendas, ruas de terra e ritmo mais calmo. No campo há mais alimentos in natura; na cidade, mais industrializados. A partir de 1950, muitos migraram do campo para as cidades em busca de trabalho; em 1970, mais da metade já vivia nas cidades. Hoje há neo-rurais.",
              "<strong>Módulo 13 – Trabalho e lazer:</strong> lazer é descanso e diversão, importante para todas as idades. Adultos têm hobbies. Direitos: Declaração Universal dos Direitos Humanos (1948), CLT (1943), férias de 30 dias (1977), Constituição de 1988 (descanso semanal remunerado), conquistados pela luta dos trabalhadores. O lazer gera trabalho. Cinema: no início sem som e sem cor, nos cinemas de rua; hoje em shoppings. Circo: itinerante, hoje quase sem animais.",
              "<strong>Módulo 14 – Muitos jeitos de festejar:</strong> festas juninas (portugueses; 13, 24 e 29 de junho), Folia do Divino e Círio de Nazaré (religiosas, Belém, outubro), Congada (africanos), Kuarup (indígenas do Xingu), Carnaval (Rio é o maior do mundo), Oktoberfest (alemães), Bon Odori (japoneses), bumba meu boi (Pai Francisco e Mãe Catirina)."
            ],
            "cards": [
              {
                "icon": "🏙️",
                "t": "zona urbana",
                "d": "cidade"
              },
              {
                "icon": "🌾",
                "t": "zona rural",
                "d": "campo"
              },
              {
                "icon": "🌽",
                "t": "in natura",
                "d": "alimento natural"
              },
              {
                "icon": "🚚",
                "t": "migração",
                "d": "campo → cidade (1950)"
              },
              {
                "icon": "🎨",
                "t": "hobby",
                "d": "passatempo"
              },
              {
                "icon": "📜",
                "t": "1948",
                "d": "Direitos Humanos"
              },
              {
                "icon": "🎪",
                "t": "itinerante",
                "d": "que viaja"
              },
              {
                "icon": "🔥",
                "t": "festas juninas",
                "d": "portugueses"
              },
              {
                "icon": "👑",
                "t": "Congada",
                "d": "africanos"
              },
              {
                "icon": "🪶",
                "t": "Kuarup",
                "d": "indígenas do Xingu"
              }
            ]
          }
        ],
        "games": [],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual característica é típica da zona urbana?",
            "options": [
              "Prédios altos e construções próximas",
              "Sítios e fazendas distantes",
              "Ruas de terra sem asfalto",
              "Hortas para consumo próprio"
            ],
            "answer": 0,
            "explain": "Nas cidades vivem muitas pessoas, por isso há prédios altos (arranha-céus) e construções bem próximas.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Em comparação com a cidade, o ritmo de vida no campo costuma ser:",
            "options": [
              "menos acelerado",
              "mais acelerado",
              "igual em todo lugar",
              "sem nenhuma atividade"
            ],
            "answer": 0,
            "explain": "No campo o ritmo é mais calmo, com mais contato com a natureza.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Onde as crianças costumam brincar mais ao ar livre, em contato com a natureza?",
            "options": [
              "No campo",
              "Em apartamentos",
              "Em shopping centers",
              "Em escritórios"
            ],
            "answer": 0,
            "explain": "No campo as crianças nadam em rios, sobem em árvores e brincam com animais.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "O que são alimentos in natura?",
            "options": [
              "Alimentos em seu estado natural",
              "Alimentos em lata",
              "Salgadinhos de pacote",
              "Comidas congeladas"
            ],
            "answer": 0,
            "explain": "In natura = como vêm da natureza: frutas, verduras, ovos, leite.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Por que no campo os alimentos in natura tendem a ser mais baratos e frescos?",
            "options": [
              "São produzidos perto das moradias",
              "Vêm de outros países",
              "São feitos em fábricas",
              "Têm muitos conservantes"
            ],
            "answer": 0,
            "explain": "Os produtores estão próximos, então não há transporte longo.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "O salgadinho de milho é um alimento:",
            "options": [
              "ultraprocessado",
              "in natura",
              "processado simples",
              "orgânico"
            ],
            "answer": 0,
            "explain": "Espiga = in natura; milho em conserva = processado; salgadinho = ultraprocessado.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Desde 2023, o que os alimentos com muito sal, açúcar ou gordura devem trazer?",
            "options": [
              "Um aviso no rótulo",
              "Um brinquedo dentro",
              "Um preço mais baixo",
              "Uma receita no verso"
            ],
            "answer": 0,
            "explain": "A lei obriga o aviso ALTO EM sódio, açúcar ou gordura no rótulo.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "A partir dos anos 1950, muitos brasileiros migraram:",
            "options": [
              "do campo para as cidades",
              "das cidades para o campo",
              "do Brasil para o Japão",
              "do litoral para as florestas"
            ],
            "answer": 0,
            "explain": "Com a industrialização das cidades, muitos deixaram o campo em busca de trabalho.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Qual foi um dos principais motivos dessa migração?",
            "options": [
              "A busca por novas oportunidades de trabalho",
              "O gosto pessoal por férias",
              "O crescimento da população no campo",
              "A vontade de ter mais lazer"
            ],
            "answer": 0,
            "explain": "As indústrias e o comércio nas cidades ofereciam trabalho, e as máquinas no campo diminuíam as vagas.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "Como se chamam as pessoas que trocam a cidade pelo campo hoje em dia?",
            "options": [
              "neo-rurais",
              "imigrantes",
              "camponeses antigos",
              "turistas"
            ],
            "answer": 0,
            "explain": "Neo-rurais fazem o caminho inverso: deixam a cidade para viver e trabalhar no campo.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "No texto, Eder e Edna deixaram a cidade para:",
            "options": [
              "produzir morangos no campo",
              "abrir uma loja no shopping",
              "trabalhar em uma fábrica",
              "morar em outro país"
            ],
            "answer": 0,
            "explain": "O casal foi para Mandirituba (PR) e produz morangos.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "As fotos de colheita de café de 1930 (manual) e de 2022 (com máquina) mostram que:",
            "options": [
              "as máquinas mudaram o trabalho no campo",
              "o café não é mais plantado",
              "o trabalho no campo nunca mudou",
              "só crianças trabalham no campo"
            ],
            "answer": 0,
            "explain": "A colheita mecanizada exige menos pessoas: é a modernização do campo.",
            "from": "O campo e a cidade"
          },
          {
            "type": "text",
            "q": "Em que década, mais da metade da população brasileira passou a viver em cidades? (Escreva o número, ex.: 1950)",
            "answers": [
              "1970",
              "anos 1970",
              "decada de 1970"
            ],
            "explain": "Nos anos 1970, mais da metade dos brasileiros já vivia em cidades.",
            "from": "O campo e a cidade"
          },
          {
            "type": "mc",
            "q": "O que é lazer?",
            "options": [
              "Toda atividade de descanso e diversão",
              "Só o trabalho feito em casa",
              "Uma profissão do circo",
              "A hora de ir para a escola"
            ],
            "answer": 0,
            "explain": "Lazer é toda atividade que envolve descanso e diversão.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "O lazer é importante para:",
            "options": [
              "pessoas de todas as idades",
              "somente crianças",
              "somente idosos",
              "ninguém"
            ],
            "answer": 0,
            "explain": "Crianças, jovens, adultos e idosos precisam de descanso e diversão.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "O que é um hobby?",
            "options": [
              "Uma atividade feita como passatempo",
              "Um tipo de trabalho pago",
              "Um documento de direitos",
              "Um prédio de cinema"
            ],
            "answer": 0,
            "explain": "Hobby é uma atividade feita só como lazer: colecionar, pintar, tocar um instrumento.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "A peteca é uma brincadeira de origem:",
            "options": [
              "indígena",
              "japonesa",
              "alemã",
              "portuguesa"
            ],
            "answer": 0,
            "explain": "O livro mostra indígenas guarani jogando peteca feita de folha de palmeira.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "Qual documento de 1948 garante o direito ao repouso e ao lazer?",
            "options": [
              "Declaração Universal dos Direitos Humanos",
              "Constituição de 1988",
              "Lei dos rótulos de 2023",
              "Certidão de nascimento"
            ],
            "answer": 0,
            "explain": "O Artigo 24 da Declaração diz que todo ser humano tem direito a repouso e lazer.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "A Constituição Federal de 1988 garante aos trabalhadores:",
            "options": [
              "o descanso semanal remunerado",
              "trabalhar sem nenhum descanso",
              "férias de 15 dias apenas",
              "salário só para quem não descansa"
            ],
            "answer": 0,
            "explain": "Quem trabalha tem direito a um dia de descanso por semana sem desconto no salário.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "As leis trabalhistas, como as férias de 30 dias, existem hoje porque:",
            "options": [
              "os trabalhadores lutaram por elas",
              "o governo teve boa vontade",
              "sempre existiram",
              "foram criadas em 1925 e nunca mudaram"
            ],
            "answer": 0,
            "explain": "A historiadora explica que houve décadas de luta dos trabalhadores.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "O que significa a frase “Enquanto alguns se divertem, outros trabalham”?",
            "options": [
              "O lazer de uns depende do trabalho de outros",
              "Ninguém trabalha nas festas",
              "Só crianças trabalham",
              "Lazer e trabalho nunca se misturam"
            ],
            "answer": 0,
            "explain": "Cantores, técnicos, pipoqueiros e muitos outros trabalham para garantir a diversão das pessoas.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "Como eram os primeiros filmes de cinema, no final do século 19?",
            "options": [
              "Sem som e sem cores",
              "Coloridos e em 3D",
              "Vistos pela internet",
              "Exibidos só na televisão"
            ],
            "answer": 0,
            "explain": "Os primeiros filmes não tinham som nem cores e eram exibidos nos cinemas de rua.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "Segundo o texto, no Brasil:",
            "options": [
              "milhões de pessoas vivem em cidades sem cinema",
              "toda cidade tem cinema",
              "não existem mais cinemas",
              "o cinema é um lazer para todos"
            ],
            "answer": 0,
            "explain": "Só 7% dos municípios têm sala de cinema; cerca de 90 milhões vivem em cidades sem cinema.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "Por que hoje os circos quase não usam animais?",
            "options": [
              "Por causa dos maus-tratos aos animais",
              "Porque os animais ficaram caros",
              "Porque os circos acabaram",
              "Porque os animais não viajam"
            ],
            "answer": 0,
            "explain": "As pessoas estão mais conscientes dos maus-tratos aos animais.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "O circo é itinerante. Isso quer dizer que ele:",
            "options": [
              "viaja de cidade em cidade",
              "fica sempre no mesmo lugar",
              "só funciona no inverno",
              "tem só um artista"
            ],
            "answer": 0,
            "explain": "Itinerante = que viaja, se desloca constantemente.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "text",
            "q": "Como se chama a área central do circo, onde acontecem as apresentações?",
            "answers": [
              "picadeiro",
              "o picadeiro"
            ],
            "explain": "Picadeiro é a área central do circo, reservada às atrações.",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "q": "Festejar é:",
            "options": [
              "reunir-se para celebrar uma tradição ou acontecimento",
              "trabalhar mais horas para ganhar dinheiro",
              "viajar sozinho para outro país",
              "ficar em casa estudando para a prova"
            ],
            "answer": 0,
            "explain": "Festejar é se reunir para celebrar algo: um ano novo, uma colheita, um nascimento.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "As festas juninas foram trazidas ao Brasil pelos:",
            "options": [
              "portugueses",
              "japoneses",
              "alemães",
              "indígenas"
            ],
            "answer": 0,
            "explain": "São festas de origem religiosa trazidas pelos portugueses.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Qual santo é celebrado em 24 de junho?",
            "options": [
              "São João",
              "Santo Antônio",
              "São Pedro",
              "São Benedito"
            ],
            "answer": 0,
            "explain": "Santo Antônio dia 13, São João dia 24 e São Pedro dia 29.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "O Círio de Nazaré acontece:",
            "options": [
              "em Belém (PA), em outubro",
              "em Olinda, no Carnaval",
              "em Blumenau, em junho",
              "no Xingu, em dezembro"
            ],
            "answer": 0,
            "explain": "Todo mês de outubro, milhares de romeiros caminham em Belém em homenagem a Nossa Senhora de Nazaré.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "A Congada foi trazida ao Brasil pelos:",
            "options": [
              "africanos",
              "portugueses",
              "alemães",
              "japoneses"
            ],
            "answer": 0,
            "explain": "A Congada lembra a coroação do rei e da rainha do antigo Reino do Congo, na África.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "O Kuarup é um ritual indígena do Xingu que:",
            "options": [
              "homenageia as pessoas que já morreram",
              "comemora o Ano-Novo",
              "celebra o aniversário da cidade",
              "é uma festa de origem alemã"
            ],
            "answer": 0,
            "explain": "Os povos do Xingu acreditam que os mortos não querem ver os vivos tristes.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Segundo o Livro dos Recordes, o maior Carnaval do mundo é o de:",
            "options": [
              "Rio de Janeiro",
              "Salvador",
              "Recife",
              "São Paulo"
            ],
            "answer": 0,
            "explain": "São mais de 2 milhões de pessoas por dia nas ruas do Rio de Janeiro.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "A Oktoberfest, em Blumenau (SC), celebra as tradições dos imigrantes:",
            "options": [
              "alemães",
              "japoneses",
              "africanos",
              "portugueses"
            ],
            "answer": 0,
            "explain": "É um festival parecido com o de Munique, na Alemanha.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "O Bon Odori é um festival dos descendentes de:",
            "options": [
              "japoneses",
              "alemães",
              "italianos",
              "indígenas"
            ],
            "answer": 0,
            "explain": "No estado de São Paulo, descendentes de japoneses celebram o Bon Odori.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "O bumba meu boi conta a história de:",
            "options": [
              "Pai Francisco e Mãe Catirina",
              "Santo Antônio e São Pedro",
              "dom Pedro I",
              "um rei do Congo"
            ],
            "answer": 0,
            "explain": "Catirina queria comer língua de boi; o boi foi morto e depois ressuscitado pelos curandeiros.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Muitas cidades fazem festa para celebrar:",
            "options": [
              "o aniversário de fundação",
              "o fim das aulas",
              "o primeiro dia de chuva",
              "a troca de prefeito"
            ],
            "answer": 0,
            "explain": "Salvador (29/3/1549) e São Paulo (25/1/1554) comemoram sua fundação.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Qual destes feriados é religioso?",
            "options": [
              "25 de dezembro (Natal)",
              "7 de setembro (Independência)",
              "1º de maio (Dia do Trabalho)",
              "21 de abril (Tiradentes)"
            ],
            "answer": 0,
            "explain": "O Natal é um feriado religioso, comemorado pelos cristãos.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "text",
            "q": "Em que estado brasileiro fica Parintins, onde acontece o Festival Folclórico?",
            "answers": [
              "amazonas",
              "am",
              "o amazonas"
            ],
            "explain": "Parintins fica no Amazonas (AM).",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Qual alternativa mostra uma festa e o povo que a trouxe para o Brasil?",
            "options": [
              "Congada – africanos",
              "Oktoberfest – portugueses",
              "Kuarup – japoneses",
              "Festas juninas – alemães"
            ],
            "answer": 0,
            "explain": "Congada veio dos africanos. Oktoberfest é alemã, Kuarup é indígena e as festas juninas são portuguesas.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Um trabalhador que tem direito a descansar no domingo sem desconto no salário usa um direito garantido pela:",
            "options": [
              "Constituição Federal de 1988",
              "lei dos rótulos de 2023",
              "Folia do Divino",
              "Oktoberfest"
            ],
            "answer": 0,
            "explain": "É o descanso semanal remunerado da Constituição de 1988.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "A chegada de máquinas ao campo, a partir de 1950, fez com que:",
            "options": [
              "houvesse menos trabalho para as pessoas no campo",
              "mais pessoas fossem morar no campo",
              "as cidades ficassem vazias",
              "as festas juninas acabassem"
            ],
            "answer": 0,
            "explain": "As máquinas reduziram as vagas no campo, e muitos migraram para as cidades.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual destes é um alimento in natura?",
            "options": [
              "ovo",
              "refrigerante",
              "salsicha",
              "biscoito recheado"
            ],
            "answer": 0,
            "explain": "O ovo chega como vem da natureza; os outros são industrializados.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Pipoqueiro, palhaço e trapezista são exemplos de:",
            "options": [
              "trabalhadores do lazer",
              "pessoas em férias",
              "neo-rurais",
              "imigrantes japoneses"
            ],
            "answer": 0,
            "explain": "O lazer gera trabalho: enquanto uns se divertem, outros trabalham.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Qual festa acontece em junho e celebra Santo Antônio, São João e São Pedro?",
            "options": [
              "Festas juninas",
              "Círio de Nazaré",
              "Carnaval",
              "Oktoberfest"
            ],
            "answer": 0,
            "explain": "As festas juninas celebram os santos juninos nos dias 13, 24 e 29 de junho.",
            "from": "Simulado"
          }
        ]
      }
    ]
  },
  {
    "id": "matematica",
    "nome": "Matemática",
    "cor": "--ciano",
    "prova": "2026-11-25",
    "horario": "12h55 às 14h25",
    "capitulos": []
  },
  {
    "id": "geografia",
    "nome": "Geografia",
    "cor": "--laranja",
    "prova": "2026-11-26",
    "horario": "12h55 às 14h25",
    "capitulos": []
  },
  {
    "id": "ciencias",
    "nome": "Ciências",
    "cor": "--verde",
    "prova": "2026-11-27",
    "horario": "12h55 às 14h25",
    "capitulos": []
  }
];
