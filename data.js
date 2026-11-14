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
    "capitulos": []
  },
  {
    "id": "historia",
    "nome": "História",
    "cor": "--roxo",
    "prova": "2026-11-24",
    "horario": "12h55 às 14h25",
    "capitulos": []
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
