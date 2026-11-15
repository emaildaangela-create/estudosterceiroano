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
            ],
            "art": {
              "body": {
                "src": "assets/english/watercolor/body.png",
                "alt": "Menino de frente, de braços abertos, e o mesmo menino de costas. Os botões abaixo localizam oito partes do corpo.",
                "points": [
                  {
                    "en": "a shoulder",
                    "pt": "ombro",
                    "x": 29,
                    "y": 26
                  },
                  {
                    "en": "an elbow",
                    "pt": "cotovelo",
                    "x": 25,
                    "y": 38
                  },
                  {
                    "en": "fingers",
                    "pt": "dedos das mãos",
                    "x": 19.5,
                    "y": 53
                  },
                  {
                    "en": "a chest",
                    "pt": "peito",
                    "x": 36,
                    "y": 32
                  },
                  {
                    "en": "a stomach",
                    "pt": "barriga",
                    "x": 36,
                    "y": 44
                  },
                  {
                    "en": "a knee",
                    "pt": "joelho",
                    "x": 32,
                    "y": 68
                  },
                  {
                    "en": "toes",
                    "pt": "dedos dos pés",
                    "x": 28.7,
                    "y": 96
                  },
                  {
                    "en": "a back",
                    "pt": "costas",
                    "x": 74.5,
                    "y": 43
                  }
                ]
              }
            }
          },
          {
            "h": "Did you…? Yes, I did. No, I didn't.",
            "p": [
              "Para perguntar sobre algo que <strong>já aconteceu</strong> (no passado), começamos com <strong>Did</strong>: <strong>Did</strong> + pessoa + verbo + resto? Exemplo: <em>Did you wash your hands?</em>",
              "Depois de <strong>Did</strong>, o verbo fica na forma normal, sem mudar: <em>Did you <strong>brush</strong> your teeth?</em> (e não <em>brushed</em>).",
              "A <strong>resposta curta</strong> repete a pessoa e usa <strong>did</strong> ou <strong>didn't</strong>: <em>Yes, I did.</em> / <em>No, I didn't.</em> — <em>Did he take a shower?</em> → <em>Yes, he did.</em> ou <em>No, he didn't.</em>",
              "<strong>Did</strong> é o auxiliar usado nas perguntas e respostas curtas do passado. <strong>Didn't</strong> é a forma curta de <strong>did not</strong>. Na resposta curta, use <em>Yes, I did.</em> ou <em>No, I didn't.</em>",
              "Na música <em>Let's Move</em>: <em>Did you move your legs? Yes, I did! Did you eat a healthy snack? Oops, I forgot!</em>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 1,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "wash your hands",
                  "pt": "lavar as mãos",
                  "alt": "Menina esfrega as mãos com sabão na pia."
                }
              ],
              "grammar": [
                [
                  "Did you wash your hands?",
                  "Did + pessoa + verbo na forma base."
                ],
                [
                  "Yes, I did.",
                  "Sim, lavei."
                ],
                [
                  "No, I didn't.",
                  "Não, não lavei."
                ],
                [
                  "Did she wash her hands?",
                  "Yes, she did. / No, she didn't. A resposta repete a pessoa."
                ]
              ]
            }
          },
          {
            "h": "Healthy habits",
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 0,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "get exercise",
                  "pt": "fazer exercício",
                  "alt": "Crianças correm e brincam ao ar livre."
                },
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 1,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "eat fruit",
                  "pt": "comer frutas",
                  "alt": "Menina come frutas à mesa."
                },
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "eat vegetables",
                  "pt": "comer verduras e legumes",
                  "alt": "Menino come legumes com um garfo."
                },
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 1,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "get rest",
                  "pt": "descansar",
                  "alt": "Criança dorme confortavelmente na cama."
                },
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 0,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "drink water",
                  "pt": "beber água",
                  "alt": "Menino bebe água em um copo transparente."
                },
                {
                  "src": "assets/english/watercolor/habits.png",
                  "col": 1,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "wash your hands",
                  "pt": "lavar as mãos",
                  "alt": "Menina esfrega as mãos com sabão na pia."
                }
              ]
            }
          },
          {
            "h": "Too much, too many, enough",
            "p": [
              "<strong>Too much</strong> e <strong>too many</strong> querem dizer <strong>demais</strong> (mais do que faz bem). <strong>Enough</strong> quer dizer <strong>o suficiente</strong> (a quantidade certa).",
              "<strong>Too much</strong> + coisas que <strong>não contamos</strong> uma por uma: <em>too much TV, too much junk food, too much soda, too much sugar</em>.",
              "<strong>Too many</strong> + coisas que <strong>contamos</strong>: <em>too many chips, too many candies, too many cookies</em>.",
              "<strong>Enough</strong> mostra que está bom: <em>I get <strong>enough</strong> sleep. I drink <strong>enough</strong> water. I get <strong>enough</strong> exercise.</em>",
              "Exemplos do livro: <em>I don't watch too much TV. I think I get enough exercise. I drink enough water. I don't eat too much junk food.</em>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/quantities.png",
                  "col": 0,
                  "row": 0,
                  "cols": 3,
                  "rows": 1,
                  "en": "too much TV",
                  "pt": "TV demais",
                  "alt": "Menino cansado diante da televisão; a janela escura sugere que o tempo passou."
                },
                {
                  "src": "assets/english/watercolor/quantities.png",
                  "col": 1,
                  "row": 0,
                  "cols": 3,
                  "rows": 1,
                  "en": "too many cookies",
                  "pt": "biscoitos demais",
                  "alt": "Menina observa uma grande pilha de biscoitos sobre a mesa."
                },
                {
                  "src": "assets/english/watercolor/quantities.png",
                  "col": 2,
                  "row": 0,
                  "cols": 3,
                  "rows": 1,
                  "en": "enough water",
                  "pt": "água suficiente",
                  "alt": "Menino bebe água depois de brincar ao ar livre."
                }
              ],
              "grammar": [
                [
                  "too much",
                  "Com nomes não contáveis: TV, soda, sugar."
                ],
                [
                  "too many",
                  "Com nomes contáveis no plural: cookies, candies, chips."
                ],
                [
                  "enough",
                  "O suficiente: water, sleep, exercise."
                ]
              ]
            }
          },
          {
            "h": "Reading: Take Care of Your Brain!",
            "p": [
              "O texto <em>Take Care of Your Brain!</em> diz que exercício é bom para o <strong>corpo</strong> e para o <strong>cérebro</strong> (brain). Só <strong>10 minutos</strong> por dia já ajudam o cérebro a pensar mais rápido.",
              "Ficar ao ar livre (<strong>outdoors</strong>), num lugar natural como a floresta, também faz bem: é o <strong>forest bath</strong> (banho de floresta).",
              "Rir também é bom! Quando você ri alto (<strong>laugh out loud</strong>), o cérebro recebe mais sangue e o corpo pode se sentir melhor por até <strong>45 minutos</strong>.",
              "Curiosidade: <strong>gelotologist</strong> é a pessoa que estuda os efeitos do riso no corpo humano.",
              "<strong>Treino de leitura:</strong> <span lang=\"en\">Mia gets exercise in the park every day. She stretches her arms and bends her knees. After exercise, she drinks water and gets rest. She likes the park because she can spend time outdoors with her friends.</span>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "go hiking",
                  "pt": "fazer trilha",
                  "alt": "Crianças com mochilas caminham com um adulto por uma trilha."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 1,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "talk with friends",
                  "pt": "conversar com amigos",
                  "alt": "Três crianças conversam enquanto observam um álbum no parque."
                }
              ]
            }
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
              },
              {
                "base": "chest",
                "result": "peito 🫁"
              },
              {
                "base": "muscle",
                "result": "músculo 💪"
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
                "text": "I sleep well and feel rested. I get __ sleep. 😴",
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
                "text": "I drink the water I need. I get __ water: just the right amount. 💧",
                "cat": 2
              },
              {
                "text": "They eat __ junk food. Every meal! 🍟",
                "cat": 0
              },
              {
                "text": "I get __ exercise: just the right amount, not too little. ⚽",
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
            "explain": "Elbow é o cotovelo. Knee é joelho, shoulder é ombro e back são as costas.",
            "skill": "listening"
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
            "skill": "use"
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
            "focus": "did-short",
            "skill": "use"
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
            "focus": "did-short",
            "skill": "use"
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
            "focus": "did-short",
            "skill": "use"
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
            "focus": "did-short",
            "skill": "use"
          },
          {
            "type": "mc",
            "q": "Complete com a ideia de excesso: “I don't watch ______ TV. I watch a little.”",
            "options": [
              "too much",
              "too many",
              "a",
              "an"
            ],
            "answer": 0,
            "explain": "Too much indica excesso com TV; too many acompanha nomes contáveis no plural.",
            "focus": "too-enough",
            "skill": "use"
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
            "answer": 0,
            "explain": "Chips são coisas que podemos contar (um, dois, três salgadinhos), então usamos too many.",
            "focus": "too-enough",
            "skill": "use"
          },
          {
            "type": "mc",
            "q": "“I sleep well and feel rested. I get ______ sleep.” Qual palavra significa “o suficiente”?",
            "options": [
              "too much",
              "too many",
              "enough",
              "junk"
            ],
            "answer": 2,
            "explain": "Enough quer dizer o suficiente, a quantidade certa.",
            "focus": "too-enough",
            "skill": "use"
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
            "skill": "use"
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
            "skill": "listening"
          },
          {
            "type": "mc",
            "q": "Leia o texto. What does Mia do after exercise?",
            "options": [
              "She drinks water and gets rest.",
              "She watches TV and eats cookies.",
              "She visits a museum with her sister.",
              "She goes to a party at school."
            ],
            "answer": 0,
            "explain": "O texto informa que, depois de se exercitar, Mia bebe água e descansa. Localize a frase com After exercise.",
            "context": "Mia gets exercise in the park every day. She stretches her arms and bends her knees. After exercise, she drinks water and gets rest. She likes the park because she can spend time outdoors with her friends.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Why does Mia like the park?",
            "options": [
              "She can be outdoors with friends.",
              "She can watch TV with her family.",
              "She can see a movie with friends.",
              "She can eat cake at a party."
            ],
            "answer": 0,
            "explain": "A frase com because explica a razão: ela gosta de passar tempo ao ar livre com os amigos.",
            "context": "Mia gets exercise in the park every day. She stretches her arms and bends her knees. After exercise, she drinks water and gets rest. She likes the park because she can spend time outdoors with her friends.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "text",
            "q": "Escreva em inglês a parte do corpo que fica no meio da perna: o joelho.",
            "answers": [
              "knee",
              "a knee",
              "the knee"
            ],
            "explain": "Joelho em inglês é knee (o k não é pronunciado: /ni:/).",
            "skill": "use",
            "answerMode": "english-exact"
          },
          {
            "type": "mc",
            "q": "Ouça o diálogo. What did Leo do yesterday?",
            "options": [
              "He rode his bike.",
              "He watched a movie.",
              "He ate out.",
              "He went fishing."
            ],
            "answer": 0,
            "explain": "Leo responde que andou de bicicleta. Ele diz que não assistiu TV.",
            "listen": "Mia: Did you ride your bike yesterday? Leo: Yes, I did. Mia: Did you watch TV? Leo: No, I did not.",
            "skill": "listening"
          },
          {
            "type": "text",
            "q": "Responda com uma resposta curta negativa: “Did she wash her hands?” ❌",
            "answers": [
              "No, she didn't."
            ],
            "explain": "A resposta curta mantém she e usa didn't: No, she didn't.",
            "skill": "use",
            "focus": "did-short",
            "answerMode": "english-exact"
          },
          {
            "type": "mc",
            "q": "Complete: “______ your knees!” (Dobre os joelhos.)",
            "options": [
              "Bend",
              "Stretch",
              "Drink",
              "Rest"
            ],
            "answer": 0,
            "explain": "Bend significa dobrar. Stretch significa esticar.",
            "skill": "use"
          }
        ],
        "assessmentVersion": 1
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 0,
                  "cols": 1,
                  "rows": 3,
                  "en": "a parade",
                  "pt": "um desfile",
                  "alt": "Crianças marcham com bandeira e instrumentos enquanto pessoas assistem na rua."
                },
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 1,
                  "cols": 1,
                  "rows": 3,
                  "en": "a feast",
                  "pt": "um banquete",
                  "alt": "Uma família de várias gerações compartilha uma mesa com muitos pratos."
                },
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 2,
                  "cols": 1,
                  "rows": 3,
                  "en": "a party",
                  "pt": "uma festa",
                  "alt": "Crianças reunidas ao redor de um bolo de aniversário, com balões e enfeites."
                }
              ],
              "wide": true
            }
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 2,
                  "cols": 1,
                  "rows": 3,
                  "en": "a party",
                  "pt": "uma festa",
                  "alt": "Crianças reunidas ao redor de um bolo de aniversário, com balões e enfeites."
                }
              ],
              "wide": true
            }
          },
          {
            "h": "Simple past: regular verbs (-ed)",
            "p": [
              "Para contar o que <strong>aconteceu</strong>, usamos o <strong>simple past</strong>. Nos <strong>verbos regulares</strong>, acrescentamos <strong>-ed</strong> no final: <em>watch → watched, play → played, listen → listened, celebrate → celebrated</em>.",
              "Se o verbo já termina em <strong>e</strong>, colocamos só <strong>-d</strong>: <em>dance → danced, like → liked</em>.",
              "Pergunta e resposta longa: <em>Did you watch the parade?</em> → <em>Yes, we <strong>watched</strong> the parade.</em> / <em>Did you like the music?</em> → <em>Yes, we <strong>liked</strong> it a lot!</em>",
              "Atenção: na pergunta com <strong>Did</strong> o verbo fica normal (<em>Did you <strong>watch</strong>…?</em>); na resposta longa ele vai para o passado (<em>We <strong>watched</strong>…</em>)."
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 0,
                  "cols": 1,
                  "rows": 3,
                  "en": "We watched the parade.",
                  "pt": "Nós assistimos ao desfile.",
                  "alt": "Crianças marcham com bandeira e instrumentos enquanto pessoas assistem na rua."
                }
              ],
              "wide": true,
              "grammar": [
                [
                  "watch → watched",
                  "Acrescente -ed."
                ],
                [
                  "play → played",
                  "Acrescente -ed."
                ],
                [
                  "listen → listened",
                  "Acrescente -ed."
                ],
                [
                  "dance → danced",
                  "Já termina em e: acrescente só -d."
                ],
                [
                  "like → liked",
                  "Já termina em e: acrescente só -d."
                ]
              ]
            }
          },
          {
            "h": "Simple past: irregular verbs",
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/celebrations.png",
                  "col": 0,
                  "row": 2,
                  "cols": 1,
                  "rows": 3,
                  "en": "We had a party.",
                  "pt": "Nós fizemos uma festa.",
                  "alt": "Crianças reunidas ao redor de um bolo de aniversário, com balões e enfeites."
                }
              ],
              "wide": true,
              "grammar": [
                [
                  "go → went",
                  "ir"
                ],
                [
                  "see → saw",
                  "ver"
                ],
                [
                  "eat → ate",
                  "comer"
                ],
                [
                  "sing → sang",
                  "cantar"
                ],
                [
                  "drink → drank",
                  "beber"
                ],
                [
                  "wear → wore",
                  "vestir"
                ],
                [
                  "have → had",
                  "ter"
                ],
                [
                  "write → wrote",
                  "escrever"
                ],
                [
                  "give → gave",
                  "dar"
                ],
                [
                  "take → took",
                  "pegar / levar"
                ]
              ]
            }
          },
          {
            "h": "Reading: November Celebrations",
            "p": [
              "O texto compara duas celebrações. No <strong>Day of the Dead</strong> (Dia dos Mortos), no <strong>México</strong>, as famílias lembram pessoas queridas que morreram. O livro destaca 1º de novembro; as tradições acontecem entre o fim de outubro e o início de novembro e variam entre comunidades.",
              "Flores, velas, alimentos e retratos podem fazer parte das homenagens. O livro descreve famílias levando um banquete (<strong>a big feast</strong>) ao cemitério. As caveiras decoradas fazem parte da celebração e da memória; não representam uma festa de terror.",
              "O <strong>Yi Peng</strong>, na <strong>Tailândia</strong>, também acontece em novembro. Tem desfile, fantasias bonitas e milhares de <strong>lanternas de papel de arroz</strong> que sobem ao céu. As pessoas acreditam que as lanternas levam embora as coisas ruins. No último dia há fogos de artifício.",
              "Na escrita do Hiro, <em>The Sapporo Snow Festival</em>, ele usa o passado: <em>I <strong>went</strong>… I <strong>wore</strong> a snowsuit… We <strong>saw</strong> snow sculptures… We <strong>played</strong>… We <strong>listened</strong>, <strong>ate</strong> and <strong>drank</strong>…</em>",
              "<strong>Treino de leitura:</strong> <span lang=\"en\">In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.</span>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/cultures.png",
                  "col": 0,
                  "row": 0,
                  "cols": 2,
                  "rows": 1,
                  "en": "Day of the Dead · Mexico",
                  "pt": "Memórias em família, flores e oferendas.",
                  "alt": "Família mexicana organiza flores alaranjadas, velas, alimentos e um retrato em uma oferenda."
                },
                {
                  "src": "assets/english/watercolor/cultures.png",
                  "col": 1,
                  "row": 0,
                  "cols": 2,
                  "rows": 1,
                  "en": "Yi Peng · Thailand",
                  "pt": "Lanternas de papel iluminam o céu.",
                  "alt": "Família tailandesa observa lanternas claras de papel subindo ao céu ao anoitecer."
                }
              ]
            }
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
              ],
              [
                "You hang these colorful things to make a party room look special. 🎊",
                "decorations"
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
              },
              {
                "base": "have",
                "result": "had"
              },
              {
                "base": "take",
                "result": "took"
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
                "text": "Families share a feast at the cemetery.",
                "cat": 0
              },
              {
                "text": "It is celebrated in Thailand.",
                "cat": 1
              },
              {
                "text": "Families remember relatives who died.",
                "cat": 0
              },
              {
                "text": "Paper lanterns rise into the sky.",
                "cat": 1
              },
              {
                "text": "Some people give candy skulls.",
                "cat": 0
              },
              {
                "text": "People believe the lanterns take away bad things.",
                "cat": 1
              }
            ],
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things."
          },
          {
            "type": "pairs",
            "title": "Questions and long answers",
            "short": "Respostas completas",
            "instructions": "Escolha a resposta completa para cada pergunta. Todas as pistas indicam que a ação aconteceu.",
            "pairs": [
              [
                "Did you watch the parade? ✅",
                "Yes, I watched the parade."
              ],
              [
                "Did they play games at the party? ✅",
                "Yes, they played games at the party."
              ],
              [
                "Did she listen to music? ✅",
                "Yes, she listened to music."
              ],
              [
                "Did he dance at the festival? ✅",
                "Yes, he danced at the festival."
              ],
              [
                "Did you see the fireworks? ✅",
                "Yes, I saw the fireworks."
              ],
              [
                "Did she wear a costume? ✅",
                "Yes, she wore a costume."
              ],
              [
                "Did they eat cake? ✅",
                "Yes, they ate cake."
              ],
              [
                "Did he take a present to the party? ✅",
                "Yes, he took a present to the party."
              ]
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
            "explain": "Parade é desfile. Convite é invitation, fantasia é costume e banquete é feast.",
            "skill": "listening"
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
            "skill": "use"
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
            "skill": "use"
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
            "skill": "use"
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
            "focus": "past-irregular-long",
            "skill": "use"
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
            "focus": "past-irregular-long",
            "skill": "use"
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
            "skill": "use"
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
            "skill": "use"
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
            "skill": "listening"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Where do families share a feast during the Day of the Dead?",
            "options": [
              "At the cemetery.",
              "At the cinema.",
              "At the swimming pool.",
              "At the beach."
            ],
            "answer": 0,
            "explain": "O texto localiza o banquete no cemitério: at the cemetery.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Who do families remember during the Day of the Dead?",
            "options": [
              "Relatives who died.",
              "Players who won a game.",
              "Friends at the cinema.",
              "Children at a museum."
            ],
            "answer": 0,
            "explain": "A primeira frase informa que as famílias lembram parentes que morreram: relatives who died.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "mc",
            "q": "Leia o texto. What rises into the sky at Yi Peng?",
            "options": [
              "Paper lanterns.",
              "Birthday balloons.",
              "Colorful costumes.",
              "Candy skulls."
            ],
            "answer": 0,
            "explain": "O texto diz que as lanternas de papel sobem ao céu: paper lanterns rise into the sky.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "text",
            "q": "Escreva o passado do verbo play.",
            "answers": [
              "played"
            ],
            "explain": "Play é regular: play + ed = played. Exemplo: After dinner all the children played games.",
            "skill": "use",
            "answerMode": "english-exact"
          },
          {
            "type": "mc",
            "q": "Did they watch the parade? ✅ Escolha a resposta completa.",
            "options": [
              "Yes, they watched the parade.",
              "Yes, they watch the parade.",
              "Yes, they watching the parade.",
              "Yes, they watches the parade."
            ],
            "answer": 0,
            "explain": "Na pergunta, Did acompanha watch. Na resposta afirmativa, watch vira watched.",
            "focus": "past-regular-long",
            "skill": "use"
          },
          {
            "type": "text",
            "q": "Complete a resposta com a frase inteira: “Did you play games?” ✅ Comece com “Yes, I…” e use play games.",
            "answers": [
              "Yes, I played games."
            ],
            "explain": "Play é regular: a resposta completa é Yes, I played games.",
            "skill": "use",
            "focus": "past-regular-long",
            "answerMode": "english-exact"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did she dance at the party?” ✅ Comece com “Yes, she…” e use dance at the party.",
            "answers": [
              "Yes, she danced at the party."
            ],
            "explain": "Dance já termina em e; acrescentamos d: Yes, she danced at the party.",
            "skill": "use",
            "focus": "past-regular-long",
            "answerMode": "english-exact"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did he go to the festival?” ✅ Comece com “Yes, he…” e use go to the festival.",
            "answers": [
              "Yes, he went to the festival."
            ],
            "explain": "Go muda para went na resposta afirmativa: Yes, he went to the festival.",
            "skill": "use",
            "focus": "past-irregular-long",
            "answerMode": "english-exact"
          },
          {
            "type": "mc",
            "q": "Ouça o relato. What did Ana see at the festival?",
            "options": [
              "She saw fireworks.",
              "She saw dinosaurs.",
              "She saw fish.",
              "She saw stars in a planetarium."
            ],
            "answer": 0,
            "explain": "Ana diz I saw fireworks. Ela também conta que dançou e comeu bolo.",
            "listen": "Yesterday I went to a festival with my family. I danced and ate cake. At night, I saw fireworks. It was exciting!",
            "skill": "listening"
          },
          {
            "type": "mc",
            "q": "Complete a pergunta: “______ she ______ a costume at the party?”",
            "options": [
              "Did / wear",
              "Did / wore",
              "Does / wore",
              "Did / wears"
            ],
            "answer": 0,
            "explain": "A pergunta usa Did + pessoa + verbo na forma base: Did she wear a costume?",
            "skill": "use"
          }
        ],
        "assessmentVersion": 1
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "eat out",
                  "pt": "comer fora",
                  "alt": "Família à mesa de um restaurante, atendida por um garçom."
                },
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 1,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "go to the movies",
                  "pt": "ir ao cinema",
                  "alt": "Crianças nas poltronas de um cinema assistem a um filme na tela."
                },
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "visit a museum",
                  "pt": "visitar um museu",
                  "alt": "Crianças observam um esqueleto de dinossauro exposto em um museu."
                },
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 1,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "go on a picnic",
                  "pt": "fazer um piquenique",
                  "alt": "Família compartilha alimentos sobre uma toalha no parque."
                },
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "stay home",
                  "pt": "ficar em casa",
                  "alt": "Crianças leem e jogam juntas na sala de casa."
                },
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 1,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "go to the beach",
                  "pt": "ir à praia",
                  "alt": "Crianças constroem um castelo de areia perto do mar, acompanhadas por adultos."
                }
              ]
            }
          },
          {
            "h": "Hobbies: go + -ing",
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 0,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "go swimming",
                  "pt": "nadar",
                  "alt": "Crianças nadam numa piscina acompanhadas por um adulto."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 1,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "go fishing",
                  "pt": "pescar",
                  "alt": "Criança pesca com um adulto na margem de um rio."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "go hiking",
                  "pt": "fazer trilha",
                  "alt": "Crianças com mochilas caminham com um adulto por uma trilha."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 1,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "go horseback riding",
                  "pt": "andar a cavalo",
                  "alt": "Criança de capacete monta um cavalo conduzido por um adulto."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 0,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "go ice skating",
                  "pt": "patinar no gelo",
                  "alt": "Criança com capacete patina numa pista de gelo."
                }
              ],
              "grammar": [
                [
                  "go + atividade em -ing",
                  "go swimming · go fishing · go hiking"
                ],
                [
                  "We went hiking.",
                  "No passado: go → went."
                ],
                [
                  "We didn't go hiking.",
                  "Na negativa: didn't + go."
                ]
              ]
            }
          },
          {
            "h": "Didn't: what you did NOT do",
            "p": [
              "Para dizer que algo <strong>não aconteceu</strong> no passado, usamos <strong>didn't</strong> + verbo na forma normal: <em>I <strong>didn't go</strong> to the movies. I <strong>didn't eat</strong> out. I stayed home.</em>",
              "Compare: <em>We <strong>went</strong> to the beach.</em> (fomos) × <em>We <strong>didn't go</strong> to the beach.</em> (não fomos). <em>We <strong>won</strong>!</em> (ganhamos) × <em>We <strong>didn't win</strong>. We lost.</em> (não ganhamos, perdemos).",
              "Cuidado: depois de <strong>didn't</strong> o verbo NÃO vai para o passado. Certo: <em>I didn't <strong>watch</strong> TV.</em> Errado: <em>I didn't watched TV.</em>",
              "Perguntas com <strong>wh-</strong>: <em><strong>How</strong> was your weekend?</em> → <em>It was boring. I didn't do anything special.</em> / <em><strong>What</strong> did you do?</em> → <em>I went to a soccer game.</em> / <em>Did your team win?</em> → <em>No, they didn't win. They lost.</em>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "I stayed home.",
                  "pt": "Eu fiquei em casa.",
                  "alt": "Crianças leem e jogam juntas na sala de casa."
                }
              ],
              "grammar": [
                [
                  "I didn't go to the movies.",
                  "Eu não fui ao cinema."
                ],
                [
                  "I didn't eat out.",
                  "Eu não comi fora."
                ],
                [
                  "We went to the beach.",
                  "Nós fomos à praia."
                ],
                [
                  "We didn't go to the beach.",
                  "Nós não fomos à praia."
                ],
                [
                  "We won the game.",
                  "Nós ganhamos o jogo."
                ],
                [
                  "We didn't win. We lost.",
                  "Nós não ganhamos. Perdemos."
                ],
                [
                  "didn't + verbo na forma base",
                  "Use didn't go, didn't win, didn't watch."
                ]
              ]
            }
          },
          {
            "h": "Reading: Wow! Look at That!",
            "p": [
              "O texto fala do <strong>Children's Museum</strong> (Museu das Crianças) em <strong>Indianapolis, USA</strong>. Do lado de fora há <strong>modelos gigantes de dinossauros</strong>: alguns parecem fugir e outros olham pela janela.",
              "Dentro do museu há fósseis de dinossauros de verdade e salas de ciência, arte, cultura e história. Na exposição <em>Treasures of the Earth</em> aprende-se sobre a história do <strong>Egito</strong>.",
              "Você pode aprender sobre as estrelas no <strong>planetarium</strong> (planetário), ir ao <strong>theater</strong> (teatro) e até fazer <strong>rock climbing</strong> (escalada)!",
              "<strong>Complemento de leitura:</strong> palavras como <em>first</em>, <em>then</em>, <em>next</em> e <em>after that</em> ajudam a acompanhar a ordem dos acontecimentos. Para esta prova, priorize compreender as atividades e dizer o que aconteceu ou não aconteceu com <strong>didn't + verbo na forma base</strong>.",
              "<strong>Treino de leitura:</strong> <span lang=\"en\">On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.</span>"
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "visit a museum",
                  "pt": "Um museu pode ter exposições de dinossauros. Ilustração imaginada; não é uma reprodução do museu citado no texto.",
                  "alt": "Crianças observam um esqueleto de dinossauro exposto em um museu."
                }
              ]
            }
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
                "text": "We canceled our picnic because of the rain. We __ on a picnic. 🌧️",
                "cat": 1
              },
              {
                "text": "We __ to the movies. We watched a film at the cinema! 🎬",
                "cat": 0
              },
              {
                "text": "The beach trip was canceled. We __ to the beach. ⛈️",
                "cat": 1
              },
              {
                "text": "Last Sunday I __ fishing with my dad. We caught two fish! 🎣",
                "cat": 0
              },
              {
                "text": "I was sick and stayed home all day. I __ to the party. 🤒",
                "cat": 1
              },
              {
                "text": "We __ swimming. We swam in the pool for an hour! 🏊",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "What did they do?",
            "short": "Histórias do fim de semana",
            "instructions": "Leia o que aconteceu e escolha a frase que expressa a mesma informação.",
            "pairs": [
              [
                "Our team lost the game.",
                "We didn't win."
              ],
              [
                "Our team won the final game.",
                "We won!"
              ],
              [
                "We had every meal at home on Sunday.",
                "We didn't eat out."
              ],
              [
                "The TV was broken. I played video games on my computer instead.",
                "I didn't watch TV."
              ],
              [
                "We took a blanket and lunch to the park and ate on the grass.",
                "We went on a picnic."
              ]
            ]
          },
          {
            "type": "sort",
            "title": "How did they feel?",
            "short": "Descrever o fim de semana",
            "instructions": "A frase descreve um fim de semana divertido ou chato?",
            "categories": [
              "Exciting 🤩",
              "Boring 🥱"
            ],
            "items": [
              {
                "text": "The game was exciting! We cheered and shouted. 🤩",
                "cat": 0
              },
              {
                "text": "I was bored all day. Nothing interested me. 🥱",
                "cat": 1
              },
              {
                "text": "The museum visit was exciting. I loved the dinosaurs! 🦖",
                "cat": 0
              },
              {
                "text": "The film was boring. I wanted it to end. 🥱",
                "cat": 1
              },
              {
                "text": "I stayed home and played a new game. It was exciting! 🎮",
                "cat": 0
              },
              {
                "text": "I went out, but the show was boring. I felt bored. 🥱",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Long answers with didn't",
            "short": "Frases com didn’t",
            "instructions": "Escolha a resposta completa. ❌ indica que a ação não aconteceu.",
            "pairs": [
              [
                "Did you go swimming? ❌",
                "No, I didn't go swimming."
              ],
              [
                "Did she eat out? ❌",
                "No, she didn't eat out."
              ],
              [
                "Did they visit a museum? ❌",
                "No, they didn't visit a museum."
              ],
              [
                "Did he text his friends? ❌",
                "No, he didn't text his friends."
              ],
              [
                "Did you win the game? ❌",
                "No, I didn't win the game."
              ],
              [
                "Did they go horseback riding? ❌",
                "No, they didn't go horseback riding."
              ]
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
            "explain": "Go hiking é fazer trilha (caminhar na natureza). Pescar é go fishing, nadar é go swimming e patinar no gelo é go ice skating.",
            "skill": "listening"
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
            "skill": "use"
          },
          {
            "type": "mc",
            "q": "O piquenique foi cancelado por causa da chuva. Complete: “We ______ on a picnic.”",
            "options": [
              "didn't go",
              "went",
              "won",
              "didn't went"
            ],
            "answer": 0,
            "explain": "A pista informa que o passeio foi cancelado: didn't go. Depois de didn't usamos go, nunca went.",
            "skill": "use"
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
            "skill": "use"
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
            "focus": "didnt-long",
            "skill": "use"
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
            "skill": "use"
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
            "skill": "use"
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
            "focus": "didnt-long",
            "skill": "listening"
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
            "skill": "use"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Where did Ben learn about the stars?",
            "options": [
              "In the planetarium.",
              "In the theater.",
              "At the beach.",
              "At a birthday party."
            ],
            "answer": 0,
            "explain": "O texto diz que Ben e a irmã foram ao planetário e aprenderam sobre as estrelas.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Why didn't Ben go to the theater?",
            "options": [
              "The theater was closed.",
              "He did not like dinosaurs.",
              "He wanted to go fishing.",
              "His sister stayed home."
            ],
            "answer": 0,
            "explain": "O teatro estava fechado. A palavra but apresenta o obstáculo ao plano de assistir à peça.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Which activity did Ben NOT do?",
            "options": [
              "Go to the theater.",
              "Visit a museum.",
              "See dinosaur fossils.",
              "Go to the planetarium."
            ],
            "answer": 0,
            "explain": "Ben realizou as outras três atividades. O texto informa que ele não foi ao teatro.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading"
          },
          {
            "type": "text",
            "q": "Escreva em inglês: “nadar”, usando go + -ing.",
            "answers": [
              "go swimming"
            ],
            "explain": "A instrução pede go + -ing: go swimming. Swimming sozinho não inclui go; went swimming está no passado.",
            "skill": "use",
            "answerMode": "english-exact"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did you go hiking?” ❌ Comece com “No, I…” e use go hiking.",
            "answers": [
              "No, I didn't go hiking."
            ],
            "explain": "Depois de didn't, use go: No, I didn't go hiking.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did she eat out?” ❌ Comece com “No, she…” e use eat out.",
            "answers": [
              "No, she didn't eat out."
            ],
            "explain": "Depois de didn't, use eat, não ate: No, she didn't eat out.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did they visit a museum?” ❌ Comece com “No, they…” e use visit a museum.",
            "answers": [
              "No, they didn't visit a museum."
            ],
            "explain": "A resposta mantém they e usa didn't visit: No, they didn't visit a museum.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact"
          },
          {
            "type": "mc",
            "q": "Ouça o diálogo. What did Sam do on Sunday?",
            "options": [
              "He went fishing.",
              "He went swimming.",
              "He went to the movies.",
              "He went ice skating."
            ],
            "answer": 0,
            "explain": "Sam diz que não foi nadar. Ele foi pescar com o pai.",
            "listen": "Emma: Did you go swimming on Sunday? Sam: No, I did not go swimming. I went fishing with my dad. Emma: Did you catch any fish? Sam: Yes, I did.",
            "skill": "listening"
          },
          {
            "type": "mc",
            "q": "“Lia texted her friends yesterday.” Qual frase diz que ela NÃO fez isso?",
            "options": [
              "She didn't text her friends yesterday.",
              "She didn't texted her friends yesterday.",
              "She doesn't texted her friends yesterday.",
              "She did text her friends yesterday."
            ],
            "answer": 0,
            "explain": "Didn't pede a forma base text, sem -ed. She did text é afirmativa, não negativa.",
            "focus": "didnt-long",
            "skill": "use"
          }
        ],
        "assessmentVersion": 1
      },
      {
        "id": "sim_ingles",
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + 15 questões sorteadas de todos os módulos",
        "exam": {
          "size": 15,
          "skills": {
            "listening": 3,
            "reading": 3,
            "use": 9
          },
          "requiredFocus": [
            "did-short",
            "too-enough",
            "past-regular-long",
            "past-irregular-long",
            "didnt-long"
          ]
        },
        "theory": [
          {
            "h": "Resumo da prova: vocabulary",
            "p": [
              "A prova cobra <strong>Listening</strong>, <strong>Reading Comprehension</strong> e <strong>Use of English</strong>. Neste treino, cada tentativa tem 3 questões de áudio, 3 de leitura com texto em inglês e 9 de vocabulário e gramática. Essa distribuição organiza a revisão; não informa o número de questões da prova da escola.",
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
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 0,
                  "cols": 2,
                  "rows": 3,
                  "en": "eat out",
                  "pt": "comer fora",
                  "alt": "Família à mesa de um restaurante, atendida por um garçom."
                },
                {
                  "src": "assets/english/watercolor/hobbies.png",
                  "col": 0,
                  "row": 1,
                  "cols": 2,
                  "rows": 3,
                  "en": "go hiking",
                  "pt": "fazer trilha",
                  "alt": "Crianças com mochilas caminham com um adulto por uma trilha."
                }
              ]
            }
          },
          {
            "h": "Resumo da prova: grammar",
            "p": [
              "Tudo gira em torno do <strong>simple past</strong> (passado). Pergunta: <strong>Did</strong> + pessoa + verbo normal? → <em>Did you watch the parade?</em>",
              "<strong>Resposta curta (Unit 7):</strong> <em>Yes, I did.</em> / <em>No, I didn't.</em> — repita a pessoa: <em>Did she…? → Yes, she did.</em>",
              "<strong>Resposta longa (Unit 8):</strong> verbo no passado. Regulares ganham <strong>-ed</strong> (watched, played, danced). Irregulares mudam: <strong>went, saw, ate, sang, drank, wore, had, wrote, gave, took</strong>.",
              "<strong>Negativa (Unit 9):</strong> <strong>didn't</strong> + verbo normal: <em>I didn't go. We didn't win.</em> Nunca: <em>didn't went</em>.",
              "<strong>Too / Enough (Unit 7):</strong> too much (TV, soda, junk food), too many (cookies, candies, chips), enough (sleep, water, exercise)."
            ],
            "art": {
              "scenes": [
                {
                  "src": "assets/english/watercolor/weekend.png",
                  "col": 0,
                  "row": 2,
                  "cols": 2,
                  "rows": 3,
                  "en": "I stayed home.",
                  "pt": "Eu fiquei em casa.",
                  "alt": "Crianças leem e jogam juntas na sala de casa."
                }
              ],
              "grammar": [
                [
                  "I didn't go to the movies.",
                  "Eu não fui ao cinema."
                ],
                [
                  "I didn't eat out.",
                  "Eu não comi fora."
                ],
                [
                  "We went to the beach.",
                  "Nós fomos à praia."
                ],
                [
                  "We didn't go to the beach.",
                  "Nós não fomos à praia."
                ],
                [
                  "We won the game.",
                  "Nós ganhamos o jogo."
                ],
                [
                  "We didn't win. We lost.",
                  "Nós não ganhamos. Perdemos."
                ],
                [
                  "didn't + verbo na forma base",
                  "Use didn't go, didn't win, didn't watch."
                ]
              ]
            }
          }
        ],
        "games": [
          {
            "type": "pairs",
            "title": "Vocabulary in context",
            "short": "Palavras em contexto",
            "instructions": "Leia a pista e escolha a palavra ou expressão em inglês.",
            "pairs": [
              [
                "You bend your arm at this joint.",
                "an elbow"
              ],
              [
                "People share a large meal at a celebration.",
                "a feast"
              ],
              [
                "You walk along a trail in the woods.",
                "go hiking"
              ],
              [
                "You relax after exercise or sleep.",
                "get rest"
              ],
              [
                "These bright lights explode in the night sky.",
                "fireworks"
              ],
              [
                "You have a meal at a restaurant.",
                "eat out"
              ],
              [
                "You wear these special clothes to dress up.",
                "a costume"
              ],
              [
                "You look at exhibits and learn about the past.",
                "visit a museum"
              ],
              [
                "You have many things to do and little free time.",
                "busy"
              ],
              [
                "You want to learn more because something catches your attention.",
                "interesting"
              ]
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
            "skill": "listening",
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
            "skill": "use",
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
            "focus": "did-short",
            "skill": "use",
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
            "focus": "did-short",
            "skill": "use",
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
            "focus": "did-short",
            "skill": "use",
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
            "focus": "did-short",
            "skill": "use",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Complete com a ideia de excesso: “I don't watch ______ TV. I watch a little.”",
            "options": [
              "too much",
              "too many",
              "a",
              "an"
            ],
            "answer": 0,
            "explain": "Too much indica excesso com TV; too many acompanha nomes contáveis no plural.",
            "focus": "too-enough",
            "skill": "use",
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
            "answer": 0,
            "explain": "Chips são coisas que podemos contar (um, dois, três salgadinhos), então usamos too many.",
            "focus": "too-enough",
            "skill": "use",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "“I sleep well and feel rested. I get ______ sleep.” Qual palavra significa “o suficiente”?",
            "options": [
              "too much",
              "too many",
              "enough",
              "junk"
            ],
            "answer": 2,
            "explain": "Enough quer dizer o suficiente, a quantidade certa.",
            "focus": "too-enough",
            "skill": "use",
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
            "skill": "use",
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
            "skill": "listening",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Leia o texto. What does Mia do after exercise?",
            "options": [
              "She drinks water and gets rest.",
              "She watches TV and eats cookies.",
              "She visits a museum with her sister.",
              "She goes to a party at school."
            ],
            "answer": 0,
            "explain": "O texto informa que, depois de se exercitar, Mia bebe água e descansa. Localize a frase com After exercise.",
            "context": "Mia gets exercise in the park every day. She stretches her arms and bends her knees. After exercise, she drinks water and gets rest. She likes the park because she can spend time outdoors with her friends.",
            "contextLang": "en",
            "skill": "reading",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Why does Mia like the park?",
            "options": [
              "She can be outdoors with friends.",
              "She can watch TV with her family.",
              "She can see a movie with friends.",
              "She can eat cake at a party."
            ],
            "answer": 0,
            "explain": "A frase com because explica a razão: ela gosta de passar tempo ao ar livre com os amigos.",
            "context": "Mia gets exercise in the park every day. She stretches her arms and bends her knees. After exercise, she drinks water and gets rest. She likes the park because she can spend time outdoors with her friends.",
            "contextLang": "en",
            "skill": "reading",
            "from": "Feeling Fit"
          },
          {
            "type": "text",
            "q": "Escreva em inglês a parte do corpo que fica no meio da perna: o joelho.",
            "answers": [
              "knee",
              "a knee",
              "the knee"
            ],
            "explain": "Joelho em inglês é knee (o k não é pronunciado: /ni:/).",
            "skill": "use",
            "answerMode": "english-exact",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Ouça o diálogo. What did Leo do yesterday?",
            "options": [
              "He rode his bike.",
              "He watched a movie.",
              "He ate out.",
              "He went fishing."
            ],
            "answer": 0,
            "explain": "Leo responde que andou de bicicleta. Ele diz que não assistiu TV.",
            "listen": "Mia: Did you ride your bike yesterday? Leo: Yes, I did. Mia: Did you watch TV? Leo: No, I did not.",
            "skill": "listening",
            "from": "Feeling Fit"
          },
          {
            "type": "text",
            "q": "Responda com uma resposta curta negativa: “Did she wash her hands?” ❌",
            "answers": [
              "No, she didn't."
            ],
            "explain": "A resposta curta mantém she e usa didn't: No, she didn't.",
            "skill": "use",
            "focus": "did-short",
            "answerMode": "english-exact",
            "from": "Feeling Fit"
          },
          {
            "type": "mc",
            "q": "Complete: “______ your knees!” (Dobre os joelhos.)",
            "options": [
              "Bend",
              "Stretch",
              "Drink",
              "Rest"
            ],
            "answer": 0,
            "explain": "Bend significa dobrar. Stretch significa esticar.",
            "skill": "use",
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
            "skill": "listening",
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
            "skill": "use",
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
            "skill": "use",
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
            "skill": "use",
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
            "focus": "past-irregular-long",
            "skill": "use",
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
            "focus": "past-irregular-long",
            "skill": "use",
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
            "skill": "use",
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
            "skill": "use",
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
            "skill": "listening",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Where do families share a feast during the Day of the Dead?",
            "options": [
              "At the cemetery.",
              "At the cinema.",
              "At the swimming pool.",
              "At the beach."
            ],
            "answer": 0,
            "explain": "O texto localiza o banquete no cemitério: at the cemetery.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Who do families remember during the Day of the Dead?",
            "options": [
              "Relatives who died.",
              "Players who won a game.",
              "Friends at the cinema.",
              "Children at a museum."
            ],
            "answer": 0,
            "explain": "A primeira frase informa que as famílias lembram parentes que morreram: relatives who died.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Leia o texto. What rises into the sky at Yi Peng?",
            "options": [
              "Paper lanterns.",
              "Birthday balloons.",
              "Colorful costumes.",
              "Candy skulls."
            ],
            "answer": 0,
            "explain": "O texto diz que as lanternas de papel sobem ao céu: paper lanterns rise into the sky.",
            "context": "In Mexico, families remember relatives who died during the Day of the Dead. They share a feast at the cemetery and light candles. Some give candy skulls. At Yi Peng in Thailand, people watch paper lanterns rise into the sky. They believe the lanterns take away bad things.",
            "contextLang": "en",
            "skill": "reading",
            "from": "Let's Celebrate"
          },
          {
            "type": "text",
            "q": "Escreva o passado do verbo play.",
            "answers": [
              "played"
            ],
            "explain": "Play é regular: play + ed = played. Exemplo: After dinner all the children played games.",
            "skill": "use",
            "answerMode": "english-exact",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Did they watch the parade? ✅ Escolha a resposta completa.",
            "options": [
              "Yes, they watched the parade.",
              "Yes, they watch the parade.",
              "Yes, they watching the parade.",
              "Yes, they watches the parade."
            ],
            "answer": 0,
            "explain": "Na pergunta, Did acompanha watch. Na resposta afirmativa, watch vira watched.",
            "focus": "past-regular-long",
            "skill": "use",
            "from": "Let's Celebrate"
          },
          {
            "type": "text",
            "q": "Complete a resposta com a frase inteira: “Did you play games?” ✅ Comece com “Yes, I…” e use play games.",
            "answers": [
              "Yes, I played games."
            ],
            "explain": "Play é regular: a resposta completa é Yes, I played games.",
            "skill": "use",
            "focus": "past-regular-long",
            "answerMode": "english-exact",
            "from": "Let's Celebrate"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did she dance at the party?” ✅ Comece com “Yes, she…” e use dance at the party.",
            "answers": [
              "Yes, she danced at the party."
            ],
            "explain": "Dance já termina em e; acrescentamos d: Yes, she danced at the party.",
            "skill": "use",
            "focus": "past-regular-long",
            "answerMode": "english-exact",
            "from": "Let's Celebrate"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did he go to the festival?” ✅ Comece com “Yes, he…” e use go to the festival.",
            "answers": [
              "Yes, he went to the festival."
            ],
            "explain": "Go muda para went na resposta afirmativa: Yes, he went to the festival.",
            "skill": "use",
            "focus": "past-irregular-long",
            "answerMode": "english-exact",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Ouça o relato. What did Ana see at the festival?",
            "options": [
              "She saw fireworks.",
              "She saw dinosaurs.",
              "She saw fish.",
              "She saw stars in a planetarium."
            ],
            "answer": 0,
            "explain": "Ana diz I saw fireworks. Ela também conta que dançou e comeu bolo.",
            "listen": "Yesterday I went to a festival with my family. I danced and ate cake. At night, I saw fireworks. It was exciting!",
            "skill": "listening",
            "from": "Let's Celebrate"
          },
          {
            "type": "mc",
            "q": "Complete a pergunta: “______ she ______ a costume at the party?”",
            "options": [
              "Did / wear",
              "Did / wore",
              "Does / wore",
              "Did / wears"
            ],
            "answer": 0,
            "explain": "A pergunta usa Did + pessoa + verbo na forma base: Did she wear a costume?",
            "skill": "use",
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
            "skill": "listening",
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
            "skill": "use",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "O piquenique foi cancelado por causa da chuva. Complete: “We ______ on a picnic.”",
            "options": [
              "didn't go",
              "went",
              "won",
              "didn't went"
            ],
            "answer": 0,
            "explain": "A pista informa que o passeio foi cancelado: didn't go. Depois de didn't usamos go, nunca went.",
            "skill": "use",
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
            "skill": "use",
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
            "focus": "didnt-long",
            "skill": "use",
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
            "skill": "use",
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
            "skill": "use",
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
            "focus": "didnt-long",
            "skill": "listening",
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
            "skill": "use",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Where did Ben learn about the stars?",
            "options": [
              "In the planetarium.",
              "In the theater.",
              "At the beach.",
              "At a birthday party."
            ],
            "answer": 0,
            "explain": "O texto diz que Ben e a irmã foram ao planetário e aprenderam sobre as estrelas.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Why didn't Ben go to the theater?",
            "options": [
              "The theater was closed.",
              "He did not like dinosaurs.",
              "He wanted to go fishing.",
              "His sister stayed home."
            ],
            "answer": 0,
            "explain": "O teatro estava fechado. A palavra but apresenta o obstáculo ao plano de assistir à peça.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Leia o texto. Which activity did Ben NOT do?",
            "options": [
              "Go to the theater.",
              "Visit a museum.",
              "See dinosaur fossils.",
              "Go to the planetarium."
            ],
            "answer": 0,
            "explain": "Ben realizou as outras três atividades. O texto informa que ele não foi ao teatro.",
            "context": "On Saturday, Ben visited a museum with his sister. They saw dinosaur fossils. Then they went to the planetarium and learned about the stars. They wanted to see a play, but the theater was closed. They did not go to the theater.",
            "contextLang": "en",
            "skill": "reading",
            "from": "My Weekend"
          },
          {
            "type": "text",
            "q": "Escreva em inglês: “nadar”, usando go + -ing.",
            "answers": [
              "go swimming"
            ],
            "explain": "A instrução pede go + -ing: go swimming. Swimming sozinho não inclui go; went swimming está no passado.",
            "skill": "use",
            "answerMode": "english-exact",
            "from": "My Weekend"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did you go hiking?” ❌ Comece com “No, I…” e use go hiking.",
            "answers": [
              "No, I didn't go hiking."
            ],
            "explain": "Depois de didn't, use go: No, I didn't go hiking.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact",
            "from": "My Weekend"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did she eat out?” ❌ Comece com “No, she…” e use eat out.",
            "answers": [
              "No, she didn't eat out."
            ],
            "explain": "Depois de didn't, use eat, não ate: No, she didn't eat out.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact",
            "from": "My Weekend"
          },
          {
            "type": "text",
            "q": "Responda com a frase inteira: “Did they visit a museum?” ❌ Comece com “No, they…” e use visit a museum.",
            "answers": [
              "No, they didn't visit a museum."
            ],
            "explain": "A resposta mantém they e usa didn't visit: No, they didn't visit a museum.",
            "skill": "use",
            "focus": "didnt-long",
            "answerMode": "english-exact",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "Ouça o diálogo. What did Sam do on Sunday?",
            "options": [
              "He went fishing.",
              "He went swimming.",
              "He went to the movies.",
              "He went ice skating."
            ],
            "answer": 0,
            "explain": "Sam diz que não foi nadar. Ele foi pescar com o pai.",
            "listen": "Emma: Did you go swimming on Sunday? Sam: No, I did not go swimming. I went fishing with my dad. Emma: Did you catch any fish? Sam: Yes, I did.",
            "skill": "listening",
            "from": "My Weekend"
          },
          {
            "type": "mc",
            "q": "“Lia texted her friends yesterday.” Qual frase diz que ela NÃO fez isso?",
            "options": [
              "She didn't text her friends yesterday.",
              "She didn't texted her friends yesterday.",
              "She doesn't texted her friends yesterday.",
              "She did text her friends yesterday."
            ],
            "answer": 0,
            "explain": "Didn't pede a forma base text, sem -ed. She did text é afirmativa, não negativa.",
            "focus": "didnt-long",
            "skill": "use",
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
            "focus": "past-irregular-long",
            "skill": "listening",
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
            "skill": "listening",
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
            "skill": "use",
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
            "focus": "didnt-long",
            "skill": "use",
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
            "skill": "use",
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
            "focus": "too-enough",
            "skill": "use",
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
            "skill": "use",
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
            "skill": "listening",
            "from": "Simulado"
          }
        ],
        "assessmentVersion": 1
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
        "video": "assets/videos/lp23.mp4",
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
                "text": "Tem versos com rimas no fim.",
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
            "q": "Esse poema serve principalmente para:",
            "options": [
              "entreter e divertir o leitor",
              "informar um acontecimento real",
              "ensinar a consertar um relógio",
              "vender um relógio novo"
            ],
            "answer": 0,
            "explain": "Poemas brincam com as palavras, o ritmo e os sons para entreter e emocionar o leitor.",
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”"
          },
          {
            "type": "mc",
            "q": "No poema, a repetição de tic-tac indica:",
            "options": [
              "o passar do tempo",
              "que o relógio está quebrado",
              "que o relógio é barulhento demais",
              "que está chovendo"
            ],
            "answer": 0,
            "explain": "Tic-tac imita o som do relógio e, repetido, mostra o tempo passando sem parar.",
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”"
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
            "q": "Qual destes exemplos não é um poema visual?",
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
            "q": "Que ideia a palavra meu transmite nesses versos?",
            "options": [
              "Posse",
              "Tempo",
              "Lugar",
              "Quantidade"
            ],
            "answer": 0,
            "explain": "Meu é pronome possessivo: mostra que o tic-tac pertence a quem fala.",
            "context": "Versos do poema “O relógio”: “Toda a alegria / De fazer / Meu tic-tac”"
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
            "q": "Na fala de Armandinho, de quem é a cabeça?",
            "options": [
              "Do pai",
              "Do Armandinho",
              "Do sapo",
              "Do relógio"
            ],
            "answer": 0,
            "explain": "Armandinho fala com o pai, então sua se refere ao pai. Por isso o pai não via a hora.",
            "context": "Numa tirinha, Armandinho pergunta as horas ao pai. O pai não consegue ver o relógio, e Armandinho diz: “A sua cabeça está na frente do relógio!”"
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
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”"
          }
        ]
      },
      {
        "id": "lp24",
        "module": "24",
        "title": "Aventura e diversão",
        "subtitle": "Pronomes demonstrativos",
        "video": "assets/videos/lp24.mp4",
        "theory": [
          {
            "h": "Pronomes demonstrativos",
            "figure": {
              "src": "assets/4b/lp24-demonstrativos.svg",
              "alt": "Esquema de distância: este perto de quem fala, esse perto de quem ouve, aquele longe dos dois.",
              "tipo": "diagrama"
            },
            "p": [
              "Os <strong>pronomes demonstrativos</strong> indicam a <strong>posição das coisas</strong> em relação às pessoas que conversam. No parque de diversões, Lia diz a Téo: <em>Olhe <strong>este</strong> brinquedo!</em> (perto de quem fala). Téo responde: <em>Prefiro <strong>aquele</strong>.</em> (longe dos dois).",
              "<strong>1ª pessoa</strong> – perto de quem fala: <strong>este, esta, estes, estas, isto</strong>.",
              "<strong>2ª pessoa</strong> – perto de quem ouve: <strong>esse, essa, esses, essas, isso</strong>.",
              "<strong>3ª pessoa</strong> – longe de quem fala e de quem ouve: <strong>aquele, aquela, aqueles, aquelas, aquilo</strong>.",
              "<strong>Isto, isso e aquilo</strong> são <strong>invariáveis</strong>: não mudam para feminino nem para plural."
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
          },
          {
            "h": "Os demonstrativos mudam com a palavra",
            "p": [
              "Os demonstrativos <strong>concordam</strong> com a palavra que acompanham, em gênero (masculino/feminino) e número (singular/plural).",
              "Perto de quem fala: <em><strong>este</strong> balão</em>, <em><strong>esta</strong> pipoca</em>, <em><strong>estes</strong> ingressos</em>, <em><strong>estas</strong> fichas</em>.",
              "Perto de quem ouve: <em><strong>esse</strong> boné</em>, <em><strong>essa</strong> roda-gigante</em>, <em><strong>esses</strong> óculos</em>, <em><strong>essas</strong> pulseiras</em>.",
              "Longe dos dois: <em><strong>aquele</strong> carrossel</em>, <em><strong>aquela</strong> montanha-russa</em>, <em><strong>aqueles</strong> brinquedos</em>, <em><strong>aquelas</strong> barracas</em>.",
              "Os demonstrativos podem se juntar a outras palavras: <em>de + esse = <strong>desse</strong></em>, <em>de + essa = <strong>dessa</strong></em>, <em>em + este = <strong>neste</strong></em>, <em>em + aquele = <strong>naquele</strong></em>."
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
                "text": "Lia segura um balão: “Olhe __ balão!”",
                "cat": 0,
                "fill": "este"
              },
              {
                "text": "Téo está ao lado da roda-gigante. Lia pergunta: “Qual a altura __ roda-gigante?”",
                "cat": 1,
                "fill": "dessa"
              },
              {
                "text": "O carrossel está do outro lado do parque: “Vamos andar em __ carrossel lá longe!”",
                "cat": 2,
                "fill": "aquele"
              },
              {
                "text": "Lia mostra a pipoca na mão dela: “__ pipoca está quentinha.”",
                "cat": 0,
                "fill": "Esta"
              },
              {
                "text": "A montanha-russa fica longe dos dois: “Prefiro __ brinquedo lá no fundo.”",
                "cat": 2,
                "fill": "aquele"
              },
              {
                "text": "Téo segura um boné. Lia pergunta: “__ boné é novo?”",
                "cat": 1,
                "fill": "Esse"
              },
              {
                "text": "Lia aponta o sorvete que ela mesma segura: “__ aqui é de morango.”",
                "cat": 0,
                "fill": "Isto"
              },
              {
                "text": "Algo bem alto no céu, longe dos dois: “O que é __ lá em cima?”",
                "cat": 2,
                "fill": "aquilo"
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Complete com o demonstrativo",
            "short": "Concordância",
            "instructions": "As coisas estão perto de quem fala. Escolha a forma certa de este.",
            "pairs": [
              [
                "… balão (masculino, singular)",
                "este"
              ],
              [
                "… pipoca (feminino, singular)",
                "esta"
              ],
              [
                "… ingressos (masculino, plural)",
                "estes"
              ],
              [
                "… fichas (feminino, plural)",
                "estas"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Possessivo ou demonstrativo?",
            "short": "Qual pronome?",
            "instructions": "A palavra em destaque indica posse (de quem é) ou posição (onde está)?",
            "categories": [
              "Possessivo (de quem é) 🔑",
              "Demonstrativo (onde está) 📍"
            ],
            "items": [
              {
                "text": "AQUELE brinquedo é radical!",
                "cat": 1
              },
              {
                "text": "MEU ingresso caiu no chão.",
                "cat": 0
              },
              {
                "text": "ESTA fila está enorme.",
                "cat": 1
              },
              {
                "text": "NOSSA turma adorou o parque.",
                "cat": 0
              },
              {
                "text": "Você viu ISSO na sua mão?",
                "cat": 1
              },
              {
                "text": "SEU boné é azul.",
                "cat": 0
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "context": "No parque, Lia segura um balão e diz a Téo: “Olhe este balão! É enorme!”",
            "q": "O pronome este indica que o balão está:",
            "options": [
              "perto de quem fala",
              "perto de quem ouve",
              "longe dos dois",
              "em outro dia"
            ],
            "answer": 0,
            "explain": "Este, esta e isto indicam o que está perto de quem fala (Lia)."
          },
          {
            "type": "mc",
            "context": "Téo aponta a montanha-russa, bem longe dos dois, e diz: “Prefiro aquele brinquedo.”",
            "q": "Aquele indica que o brinquedo está:",
            "options": [
              "longe de quem fala e de quem ouve",
              "na mão de quem fala",
              "perto de quem ouve",
              "dentro da mochila"
            ],
            "answer": 0,
            "explain": "Aquele, aquela e aquilo indicam o que está longe das duas pessoas da conversa."
          },
          {
            "type": "mc",
            "context": "Téo está segurando um boné novo. Lia olha para ele e pergunta sobre o boné.",
            "q": "Qual pergunta Lia deve fazer?",
            "options": [
              "Esse boné é novo?",
              "Este boné é novo?",
              "Aquele boné é novo?",
              "Aquilo boné é novo?"
            ],
            "answer": 0,
            "explain": "O boné está perto de quem ouve (Téo), então usamos esse."
          },
          {
            "type": "mc",
            "context": "Téo está ao lado da roda-gigante. Lia, longe dela, pergunta a ele: “Qual é a altura ______ roda-gigante?”",
            "q": "Qual palavra completa a pergunta?",
            "options": [
              "dessa",
              "desta",
              "daquela",
              "deste"
            ],
            "answer": 0,
            "explain": "A roda-gigante está perto de quem ouve: de + essa = dessa."
          },
          {
            "type": "mc",
            "q": "Qual pronome demonstrativo é invariável (não muda para feminino nem para plural)?",
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
            "context": "“— Este cão — pensou o lobo — goza de boa saúde.”",
            "q": "Pelo uso de este, o lobo está:",
            "options": [
              "perto do cão",
              "muito longe do cão",
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
              "a posição das coisas em relação às pessoas",
              "a quem uma coisa pertence",
              "uma ação ou um estado",
              "o contrário de uma palavra"
            ],
            "answer": 0,
            "explain": "Demonstrativos mostram onde está algo. Quem indica posse são os possessivos."
          },
          {
            "type": "mc",
            "context": "Lia segura duas fichas para os brinquedos e mostra a Téo.",
            "q": "Qual frase está correta?",
            "options": [
              "Estas fichas são para a roda-gigante.",
              "Este fichas são para a roda-gigante.",
              "Esta fichas são para a roda-gigante.",
              "Estes fichas são para a roda-gigante."
            ],
            "answer": 0,
            "explain": "Fichas é feminino plural e está perto de quem fala: estas."
          },
          {
            "type": "mc",
            "q": "Em qual frase a palavra destacada é um pronome demonstrativo?",
            "options": [
              "AQUELA barraca vende algodão-doce.",
              "MINHA mãe comprou pipoca.",
              "NÓS andamos no carrossel.",
              "TEU ingresso é azul."
            ],
            "answer": 0,
            "explain": "Aquela indica posição. Minha e teu são possessivos; nós é pronome pessoal."
          },
          {
            "type": "mc",
            "context": "Téo está segurando algo que Lia não reconhece.",
            "q": "Como Lia pergunta?",
            "options": [
              "O que é isso na sua mão?",
              "O que é isto na sua mão?",
              "O que é aquilo na sua mão?",
              "O que é esta na sua mão?"
            ],
            "answer": 0,
            "explain": "A coisa está perto de quem ouve (Téo): isso."
          },
          {
            "type": "text",
            "context": "Lia mostra o sorvete que ela mesma está segurando: “______ sorvete é de morango.”",
            "q": "Escreva o pronome demonstrativo que completa a frase.",
            "answers": [
              "este"
            ],
            "explain": "O sorvete está perto de quem fala, então o mais adequado é este."
          }
        ]
      },
      {
        "id": "lp25",
        "module": "25",
        "title": "Ai, que susto!",
        "subtitle": "Conto de mistério · Verbo · Sinônimo e antônimo",
        "video": "assets/videos/lp25.mp4",
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
            "explain": "O conto diz que ele não estava habituado a andar em terra e acabou se perdendo na densa floresta.",
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário."
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário."
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário."
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário."
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
            "explain": "Conheceu e casou são verbos: indicam ações.",
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário."
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
            "explain": "Formosa e bonita têm o mesmo significado: são sinônimos.",
            "context": "No conto, o capitão “conheceu uma formosa jovem, com quem se casou”."
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
            "context": "O título do conto é “O fantasma da sorte”. No dicionário, a palavra sorte aparece com alguns sinônimos."
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
        "subtitle": "Tempos verbais · Ortografia: -am e -ão",
        "video": "assets/videos/lp26.mp4",
        "theory": [
          {
            "h": "Tempos verbais: passado, presente e futuro",
            "figure": {
              "src": "assets/4b/lp26-tempos.svg",
              "alt": "Linha do tempo com três partes: passado (ontem, eu tive medo), presente (hoje, eu tenho medo) e futuro (amanhã, eu terei coragem).",
              "tipo": "diagrama"
            },
            "p": [
              "O verbo muda de forma para mostrar <strong>quando</strong> uma ação acontece. Isso se chama <strong>tempo verbal</strong>.",
              "<strong>Presente</strong>: algo que acontece agora, com frequência ou sempre. <em>Eu <strong>aprendo</strong> com meus medos. Meu primo <strong>gosta</strong> de filmes de monstros.</em>",
              "<strong>Passado</strong> (ou pretérito): algo que <strong>já aconteceu</strong>. <em>Quando eu <strong>era</strong> pequena, <strong>tinha</strong> medo de bicho-papão. Ele <strong>falou</strong> dos próprios medos.</em>",
              "<strong>Futuro</strong>: algo que <strong>ainda vai acontecer</strong>. <em>Ela <strong>crescerá</strong> e <strong>perderá</strong> o medo do escuro.</em>",
              "Palavras como <strong>ontem</strong>, <strong>hoje</strong> e <strong>amanhã</strong> são boas pistas do tempo da frase."
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
            "h": "Trocando o tempo da frase",
            "p": [
              "Marcelo, de 6 anos, tem medo de raio. Para afastar o medo, ele diz: <em>Eu me <strong>deito</strong> e me <strong>cubro</strong>.</em> (presente)",
              "No passado: <em>Eu me <strong>deitei</strong> e me <strong>cobri</strong>.</em>",
              "No futuro: <em>Eu me <strong>deitarei</strong> e me <strong>cobrirei</strong>.</em>",
              "Veja o verbo <strong>estudar</strong>: <em>Ontem eu <strong>estudei</strong>. Hoje eu <strong>estudo</strong>. Amanhã eu <strong>estudarei</strong>.</em>"
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
              "Ditados: <em>Os cães <strong>ladram</strong> e a caravana passa.</em> (verbo) / <em>A ocasião faz o <strong>ladrão</strong>.</em> (substantivo)"
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
                "text": "Depois do jantar de amanhã, eles oferecer__ sobremesa.",
                "cat": 1
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Viagem no tempo",
            "short": "Trocar o tempo",
            "instructions": "Passe o verbo para o futuro.",
            "pairs": [
              [
                "Eles perderam o medo do escuro.",
                "Eles perderão o medo do escuro."
              ],
              [
                "Os amigos conversaram muito.",
                "Os amigos conversarão muito."
              ],
              [
                "Elas passaram em frente ao museu.",
                "Elas passarão em frente ao museu."
              ],
              [
                "Eu me deito e me cubro.",
                "Eu me deitarei e me cobrirei."
              ],
              [
                "Ontem eu estudei.",
                "Amanhã eu estudarei."
              ]
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
            "context": "Marcelo, de 6 anos, contou: “Tenho medo de raio. Também não gosto de história com bruxa.”",
            "q": "Os verbos tenho e gosto indicam algo que:",
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
            "context": "Para afastar o medo, Marcelo diz: “Eu me deito e me cubro.”",
            "q": "Como fica a frase com os verbos no futuro?",
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
              "plural do substantivo"
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
            "q": "Qual frase está no presente?",
            "options": [
              "Eu conheço muitas histórias.",
              "Eu conheci muitas histórias.",
              "Eu conhecerei muitas histórias.",
              "Eu conhecia muitas histórias."
            ],
            "answer": 0,
            "explain": "Conheço indica o que acontece agora: presente."
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
            "explain": "Ladram é verbo (o que os cães fazem). Ladrão é um substantivo."
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
            "q": "Complete corretamente: “Na semana passada, eles ______ para a praia.”",
            "options": [
              "viajaram",
              "viajarão",
              "viajam",
              "viajão"
            ],
            "answer": 0,
            "explain": "Semana passada pede verbo no passado, com -am: viajaram."
          },
          {
            "type": "mc",
            "q": "Complete corretamente: “No próximo sábado, os alunos ______ o teatro.”",
            "options": [
              "visitarão",
              "visitaram",
              "visitão",
              "visitavam"
            ],
            "answer": 0,
            "explain": "Próximo sábado ainda vai acontecer: futuro, com -ão (visitarão)."
          },
          {
            "type": "mc",
            "q": "Qual frase usa o verbo estudar no futuro?",
            "options": [
              "Amanhã eu estudarei.",
              "Ontem eu estudei.",
              "Hoje eu estudo.",
              "Eu estudava muito."
            ],
            "answer": 0,
            "explain": "Estudarei indica algo que ainda vai acontecer."
          },
          {
            "type": "text",
            "context": "Eles perderam o medo do escuro.",
            "q": "Reescreva o verbo no futuro: Eles ______ o medo do escuro.",
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
        "subtitle": "Sujeito e predicado",
        "video": "assets/videos/lp27.mp4",
        "theory": [
          {
            "h": "Oração: frase com verbo",
            "p": [
              "Uma <strong>oração</strong> é uma frase que tem <strong>verbo</strong>. Exemplo: <em>Vegetais <strong>oferecem</strong> vitaminas.</em> O verbo é <strong>oferecem</strong>.",
              "Toda oração pode ser dividida em duas partes: o <strong>sujeito</strong> e o <strong>predicado</strong>."
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
              "O <strong>sujeito</strong> é o termo <strong>sobre o qual se diz algo</strong>. Para achá-lo, perguntamos: <strong>Quem (ou o que) + verbo?</strong>",
              "<em>Vegetais oferecem vitaminas.</em> → <em>O que oferece vitaminas?</em> → <strong>Vegetais</strong> (sujeito).",
              "O <strong>predicado</strong> é <strong>o que se diz sobre o sujeito</strong>. O verbo faz parte do predicado. Em <em>As frutas | fazem bem à saúde</em>, o sujeito é <strong>As frutas</strong> e o predicado é <strong>fazem bem à saúde</strong>.",
              "O sujeito pode estar no meio ou no fim da frase: <em>No recreio, <strong>os alunos</strong> comem lanches saudáveis.</em> Quem come? Os alunos.",
              "O sujeito pode ter mais de uma palavra principal: <em><strong>Boa alimentação e exercícios</strong> são fundamentais para a saúde.</em>"
            ]
          },
          {
            "h": "O verbo concorda com o sujeito",
            "p": [
              "O verbo sempre <strong>concorda</strong> com o sujeito em número: <em>A fruta <strong>faz</strong> bem</em> (singular) / <em>As frutas <strong>fazem</strong> bem</em> (plural).",
              "<em>Eu <strong>faço</strong> refeições equilibradas.</em> / <em>Nós <strong>fazemos</strong> refeições equilibradas.</em>",
              "Alguns verbos precisam de uma palavra que <strong>complete o sentido</strong>, e ela também fica no predicado: <em>Ela come <strong>salada</strong>.</em> (come o quê?) / <em>Mamãe preparou <strong>um bolo</strong>.</em> Outros não precisam: <em>Ele dorme.</em>"
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
            "title": "O verbo concorda?",
            "short": "Concordância",
            "instructions": "O verbo está concordando com o sujeito?",
            "categories": [
              "Correto ✅",
              "Precisa corrigir ❌"
            ],
            "items": [
              {
                "text": "As frutas fazem bem à saúde.",
                "cat": 0
              },
              {
                "text": "As frutas faz bem à saúde.",
                "cat": 1
              },
              {
                "text": "Os alunos comem lanches saudáveis.",
                "cat": 0
              },
              {
                "text": "A menina comem salada.",
                "cat": 1
              },
              {
                "text": "Nós fazemos um piquenique.",
                "cat": 0
              },
              {
                "text": "Eu e meus amigos lanchou no pátio.",
                "cat": 1
              }
            ]
          }
        ],
        "quiz": [
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
            "explain": "O que oferece vitaminas? Vegetais. Esse é o sujeito."
          },
          {
            "type": "mc",
            "q": "Na frase “Vegetais oferecem vitaminas”, qual é o verbo?",
            "options": [
              "oferecem",
              "Vegetais",
              "vitaminas",
              "não há verbo"
            ],
            "answer": 0,
            "explain": "Oferecem é o verbo: indica a ação. Por ter verbo, a frase é uma oração."
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
            "explain": "Salada completa o sentido de comer (come o quê?). Ela faz parte do predicado."
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
            "type": "mc",
            "q": "Na frase “Boa alimentação e exercícios são fundamentais para a saúde”, o sujeito é:",
            "options": [
              "Boa alimentação e exercícios",
              "são fundamentais",
              "para a saúde",
              "exercícios"
            ],
            "answer": 0,
            "explain": "O que é fundamental? Boa alimentação e exercícios. O sujeito tem duas palavras principais."
          },
          {
            "type": "mc",
            "q": "Em “A minha turma fez um piquenique no pátio”, o predicado é:",
            "options": [
              "fez um piquenique no pátio",
              "A minha turma",
              "A minha turma fez",
              "no pátio"
            ],
            "answer": 0,
            "explain": "O que se diz da minha turma? Que fez um piquenique no pátio."
          },
          {
            "type": "mc",
            "q": "Complete com o verbo que concorda com o sujeito: “Eu e meus amigos ______ no pátio.”",
            "options": [
              "lanchamos",
              "lanchou",
              "lanchei",
              "lanchaste"
            ],
            "answer": 0,
            "explain": "Eu e meus amigos = nós. Nós lanchamos."
          },
          {
            "type": "mc",
            "q": "Qual frase NÃO precisa de complemento para o verbo?",
            "options": [
              "O bebê dorme.",
              "Papai comprou…",
              "A cozinheira deu…",
              "Ela come…"
            ],
            "answer": 0,
            "explain": "Dormir tem sentido completo. Comprar, dar e comer pedem complemento (o quê?)."
          },
          {
            "type": "text",
            "q": "Escreva o sujeito da frase: “Papai comprou tomates na feira.”",
            "answers": [
              "papai"
            ],
            "explain": "Quem comprou tomates? Papai."
          }
        ]
      },
      {
        "id": "lp_generos",
        "module": "✍️",
        "title": "Ler e escrever: poema e conto de mistério",
        "subtitle": "Leitura, interpretação e produção de texto",
        "video": "assets/videos/lp_generos.mp4",
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
            ],
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "explain": "São 2 estrofes (grupos de versos), cada uma com 4 versos.",
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim."
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim."
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim."
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim."
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "explain": "Tremer embaixo do cobertor mostra que eles estavam com medo do barulho.",
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!"
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
            "h": "Resumo da prova: poema e conto de mistério",
            "p": [
              "<strong>Poema:</strong> versos (cada linha), estrofes (grupos de versos), rima (sons parecidos no fim), ritmo e repetição de sons, como tic-tac. Serve para entreter e emocionar.",
              "<strong>Poema visual:</strong> as letras formam figuras; a forma combina com o conteúdo (ex.: “Pêndulo”).",
              "<strong>Conto de mistério:</strong> personagens, lugar, um mistério, suspense e uma solução surpreendente no final (ex.: “O fantasma da sorte” e “O barulho no sótão”).",
              "<strong>Para escrever:</strong> no poema, use versos, estrofes e rimas; no conto, apresente personagens e lugar, crie o mistério, aumente o suspense e revele a solução, usando verbos no passado."
            ]
          }
        ],
        "games": [],
        "quiz": [
          {
            "type": "mc",
            "q": "Esse poema serve principalmente para:",
            "options": [
              "entreter e divertir o leitor",
              "informar um acontecimento real",
              "ensinar a consertar um relógio",
              "vender um relógio novo"
            ],
            "answer": 0,
            "explain": "Poemas brincam com as palavras, o ritmo e os sons para entreter e emocionar o leitor.",
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "q": "No poema, a repetição de tic-tac indica:",
            "options": [
              "o passar do tempo",
              "que o relógio está quebrado",
              "que o relógio é barulhento demais",
              "que está chovendo"
            ],
            "answer": 0,
            "explain": "Tic-tac imita o som do relógio e, repetido, mostra o tempo passando sem parar.",
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”",
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
            "q": "Qual destes exemplos não é um poema visual?",
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
            "q": "Que ideia a palavra meu transmite nesses versos?",
            "options": [
              "Posse",
              "Tempo",
              "Lugar",
              "Quantidade"
            ],
            "answer": 0,
            "explain": "Meu é pronome possessivo: mostra que o tic-tac pertence a quem fala.",
            "context": "Versos do poema “O relógio”: “Toda a alegria / De fazer / Meu tic-tac”",
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
            "q": "Na fala de Armandinho, de quem é a cabeça?",
            "options": [
              "Do pai",
              "Do Armandinho",
              "Do sapo",
              "Do relógio"
            ],
            "answer": 0,
            "explain": "Armandinho fala com o pai, então sua se refere ao pai. Por isso o pai não via a hora.",
            "context": "Numa tirinha, Armandinho pergunta as horas ao pai. O pai não consegue ver o relógio, e Armandinho diz: “A sua cabeça está na frente do relógio!”",
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
            "context": "Trecho do poema “O relógio”, de Vinicius de Moraes: “Passa, tempo, tic-tac / Tic-tac, passa, hora / Chega logo, tic-tac / Tic-tac, e vai-te embora”",
            "from": "Tic-tac!"
          },
          {
            "type": "mc",
            "context": "No parque, Lia segura um balão e diz a Téo: “Olhe este balão! É enorme!”",
            "q": "O pronome este indica que o balão está:",
            "options": [
              "perto de quem fala",
              "perto de quem ouve",
              "longe dos dois",
              "em outro dia"
            ],
            "answer": 0,
            "explain": "Este, esta e isto indicam o que está perto de quem fala (Lia).",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "context": "Téo aponta a montanha-russa, bem longe dos dois, e diz: “Prefiro aquele brinquedo.”",
            "q": "Aquele indica que o brinquedo está:",
            "options": [
              "longe de quem fala e de quem ouve",
              "na mão de quem fala",
              "perto de quem ouve",
              "dentro da mochila"
            ],
            "answer": 0,
            "explain": "Aquele, aquela e aquilo indicam o que está longe das duas pessoas da conversa.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "context": "Téo está segurando um boné novo. Lia olha para ele e pergunta sobre o boné.",
            "q": "Qual pergunta Lia deve fazer?",
            "options": [
              "Esse boné é novo?",
              "Este boné é novo?",
              "Aquele boné é novo?",
              "Aquilo boné é novo?"
            ],
            "answer": 0,
            "explain": "O boné está perto de quem ouve (Téo), então usamos esse.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "context": "Téo está ao lado da roda-gigante. Lia, longe dela, pergunta a ele: “Qual é a altura ______ roda-gigante?”",
            "q": "Qual palavra completa a pergunta?",
            "options": [
              "dessa",
              "desta",
              "daquela",
              "deste"
            ],
            "answer": 0,
            "explain": "A roda-gigante está perto de quem ouve: de + essa = dessa.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Qual pronome demonstrativo é invariável (não muda para feminino nem para plural)?",
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
            "context": "“— Este cão — pensou o lobo — goza de boa saúde.”",
            "q": "Pelo uso de este, o lobo está:",
            "options": [
              "perto do cão",
              "muito longe do cão",
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
              "a posição das coisas em relação às pessoas",
              "a quem uma coisa pertence",
              "uma ação ou um estado",
              "o contrário de uma palavra"
            ],
            "answer": 0,
            "explain": "Demonstrativos mostram onde está algo. Quem indica posse são os possessivos.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "context": "Lia segura duas fichas para os brinquedos e mostra a Téo.",
            "q": "Qual frase está correta?",
            "options": [
              "Estas fichas são para a roda-gigante.",
              "Este fichas são para a roda-gigante.",
              "Esta fichas são para a roda-gigante.",
              "Estes fichas são para a roda-gigante."
            ],
            "answer": 0,
            "explain": "Fichas é feminino plural e está perto de quem fala: estas.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "q": "Em qual frase a palavra destacada é um pronome demonstrativo?",
            "options": [
              "AQUELA barraca vende algodão-doce.",
              "MINHA mãe comprou pipoca.",
              "NÓS andamos no carrossel.",
              "TEU ingresso é azul."
            ],
            "answer": 0,
            "explain": "Aquela indica posição. Minha e teu são possessivos; nós é pronome pessoal.",
            "from": "Aventura e diversão"
          },
          {
            "type": "mc",
            "context": "Téo está segurando algo que Lia não reconhece.",
            "q": "Como Lia pergunta?",
            "options": [
              "O que é isso na sua mão?",
              "O que é isto na sua mão?",
              "O que é aquilo na sua mão?",
              "O que é esta na sua mão?"
            ],
            "answer": 0,
            "explain": "A coisa está perto de quem ouve (Téo): isso.",
            "from": "Aventura e diversão"
          },
          {
            "type": "text",
            "context": "Lia mostra o sorvete que ela mesma está segurando: “______ sorvete é de morango.”",
            "q": "Escreva o pronome demonstrativo que completa a frase.",
            "answers": [
              "este"
            ],
            "explain": "O sorvete está perto de quem fala, então o mais adequado é este.",
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário.",
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário.",
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário.",
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário.",
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
            "context": "Resumo do conto “O fantasma da sorte”: um capitão dos mares, que não estava acostumado a andar em terra, se perde na floresta. Ele chega a um castelo lotado, janta e dorme no quarto do menino. De madrugada, sonha com uma tormenta no mar e, ao acordar, vê uma linda criança cercada de luz, que sorri e desaparece. O nobre explica que ali vive o fantasma de um menino, um fantasma da sorte: quem o vê fica rico e feliz. Depois, o capitão conheceu uma formosa jovem, com quem se casou, e ficou milionário.",
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
            "context": "No conto, o capitão “conheceu uma formosa jovem, com quem se casou”.",
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
            "context": "O título do conto é “O fantasma da sorte”. No dicionário, a palavra sorte aparece com alguns sinônimos.",
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
            "context": "Marcelo, de 6 anos, contou: “Tenho medo de raio. Também não gosto de história com bruxa.”",
            "q": "Os verbos tenho e gosto indicam algo que:",
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
            "context": "Para afastar o medo, Marcelo diz: “Eu me deito e me cubro.”",
            "q": "Como fica a frase com os verbos no futuro?",
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
              "plural do substantivo"
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
            "q": "Qual frase está no presente?",
            "options": [
              "Eu conheço muitas histórias.",
              "Eu conheci muitas histórias.",
              "Eu conhecerei muitas histórias.",
              "Eu conhecia muitas histórias."
            ],
            "answer": 0,
            "explain": "Conheço indica o que acontece agora: presente.",
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
            "explain": "Ladram é verbo (o que os cães fazem). Ladrão é um substantivo.",
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
            "q": "Complete corretamente: “Na semana passada, eles ______ para a praia.”",
            "options": [
              "viajaram",
              "viajarão",
              "viajam",
              "viajão"
            ],
            "answer": 0,
            "explain": "Semana passada pede verbo no passado, com -am: viajaram.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Complete corretamente: “No próximo sábado, os alunos ______ o teatro.”",
            "options": [
              "visitarão",
              "visitaram",
              "visitão",
              "visitavam"
            ],
            "answer": 0,
            "explain": "Próximo sábado ainda vai acontecer: futuro, com -ão (visitarão).",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "mc",
            "q": "Qual frase usa o verbo estudar no futuro?",
            "options": [
              "Amanhã eu estudarei.",
              "Ontem eu estudei.",
              "Hoje eu estudo.",
              "Eu estudava muito."
            ],
            "answer": 0,
            "explain": "Estudarei indica algo que ainda vai acontecer.",
            "from": "Todo mundo tem medo!"
          },
          {
            "type": "text",
            "context": "Eles perderam o medo do escuro.",
            "q": "Reescreva o verbo no futuro: Eles ______ o medo do escuro.",
            "answers": [
              "perderao",
              "perderão"
            ],
            "explain": "Perderam (passado, -am) → perderão (futuro, -ão).",
            "from": "Todo mundo tem medo!"
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
            "explain": "O que oferece vitaminas? Vegetais. Esse é o sujeito.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Na frase “Vegetais oferecem vitaminas”, qual é o verbo?",
            "options": [
              "oferecem",
              "Vegetais",
              "vitaminas",
              "não há verbo"
            ],
            "answer": 0,
            "explain": "Oferecem é o verbo: indica a ação. Por ter verbo, a frase é uma oração.",
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
            "explain": "Salada completa o sentido de comer (come o quê?). Ela faz parte do predicado.",
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
            "type": "mc",
            "q": "Na frase “Boa alimentação e exercícios são fundamentais para a saúde”, o sujeito é:",
            "options": [
              "Boa alimentação e exercícios",
              "são fundamentais",
              "para a saúde",
              "exercícios"
            ],
            "answer": 0,
            "explain": "O que é fundamental? Boa alimentação e exercícios. O sujeito tem duas palavras principais.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Em “A minha turma fez um piquenique no pátio”, o predicado é:",
            "options": [
              "fez um piquenique no pátio",
              "A minha turma",
              "A minha turma fez",
              "no pátio"
            ],
            "answer": 0,
            "explain": "O que se diz da minha turma? Que fez um piquenique no pátio.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Complete com o verbo que concorda com o sujeito: “Eu e meus amigos ______ no pátio.”",
            "options": [
              "lanchamos",
              "lanchou",
              "lanchei",
              "lanchaste"
            ],
            "answer": 0,
            "explain": "Eu e meus amigos = nós. Nós lanchamos.",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "mc",
            "q": "Qual frase NÃO precisa de complemento para o verbo?",
            "options": [
              "O bebê dorme.",
              "Papai comprou…",
              "A cozinheira deu…",
              "Ela come…"
            ],
            "answer": 0,
            "explain": "Dormir tem sentido completo. Comprar, dar e comer pedem complemento (o quê?).",
            "from": "Comer bem para melhor crescer!"
          },
          {
            "type": "text",
            "q": "Escreva o sujeito da frase: “Papai comprou tomates na feira.”",
            "answers": [
              "papai"
            ],
            "explain": "Quem comprou tomates? Papai.",
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim.",
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim.",
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim.",
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
            "context": "A chuva na janela — Pinga, pinga, na janela, / a chuva vem conversar. / Bate leve na panela, / quer um jeito de entrar. // Pinga, pinga, devagar, / molha a rua e o jardim. / Quando o sol voltar a brilhar, / vou brincar até o fim.",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
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
            "context": "O barulho no sótão — Na casa da vovó Lúcia, toda noite, às nove horas em ponto, ouvia-se no sótão: toc… toc… toc… Pedro e a prima Bia tremiam embaixo do cobertor. Seria um fantasma? Numa noite de lua cheia, os dois subiram a escada com uma lanterna. A porta rangeu… e a luz mostrou uma caixa velha que se mexia sozinha! De dentro da caixa saiu uma coruja, que batia o bico na madeira para chamar os filhotes. Vovó riu: — Ela mora aqui há anos. É a nossa vigia da noite!",
            "from": "Ler e escrever: poema e conto de mistério"
          },
          {
            "type": "mc",
            "context": "Lia segura a mochila dela e diz: “Esta é a minha mochila.”",
            "q": "As palavras esta e minha são, nessa ordem, pronomes:",
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
            "q": "Na frase “Amanhã os alunos apresentarão o poema”, o sujeito e o tempo verbal são:",
            "options": [
              "os alunos; futuro",
              "o poema; passado",
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
              "conto de mistério",
              "bilhete",
              "receita"
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
            "context": "Toda noite, às nove horas, um toc-toc vinha do sótão. Pedro e Bia subiram a escada com uma lanterna, tremendo. A porta rangeu… e uma caixa velha se mexeu sozinha!",
            "q": "Que elemento do conto de mistério aparece nesse trecho?",
            "options": [
              "suspense",
              "rima",
              "estrofe",
              "título"
            ],
            "answer": 0,
            "explain": "O momento de tensão, em que ainda não sabemos o que vai acontecer, é o suspense.",
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
          },
          {
            "type": "mc",
            "q": "Em “Nossa turma adora poemas”, a palavra nossa é um pronome:",
            "options": [
              "possessivo",
              "demonstrativo",
              "pessoal",
              "verbo"
            ],
            "answer": 0,
            "explain": "Nossa indica de quem é a turma: possessivo.",
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
        "video": "assets/videos/hist12.mp4",
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
            "explain": "In natura = como vêm da natureza: frutas, verduras, ovos, leite.",
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado."
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
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado."
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
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado."
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades."
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades."
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
            "context": "Eder e Edna moravam na Região Metropolitana de Curitiba, uma área urbana. Eles deixaram a vida na cidade, foram morar na área rural e hoje produzem morangos em Mandirituba (PR). Pessoas que trocam a cidade pelo campo são chamadas de neo-rurais."
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
            "context": "Eder e Edna moravam na Região Metropolitana de Curitiba, uma área urbana. Eles deixaram a vida na cidade, foram morar na área rural e hoje produzem morangos em Mandirituba (PR). Pessoas que trocam a cidade pelo campo são chamadas de neo-rurais."
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades."
          }
        ]
      },
      {
        "id": "hist13",
        "module": "13",
        "title": "Trabalho e lazer",
        "subtitle": "O que é lazer · Adultos também brincam · Cinema e circo",
        "video": "assets/videos/hist13.mp4",
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
              "Especialistas dizem que brincar ajuda os adultos a <strong>fortalecer laços sociais, melhorar a memória, estimular a imaginação e o raciocínio</strong>."
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
            "title": "É lazer?",
            "short": "É lazer?",
            "instructions": "Esta atividade é um momento de lazer (descanso e diversão)?",
            "categories": [
              "É lazer 🎉",
              "Não é lazer 🛠️"
            ],
            "items": [
              {
                "text": "Um advogado canta no tempo livre para relaxar.",
                "cat": 0
              },
              {
                "text": "Um adulto trabalha 8 horas no escritório.",
                "cat": 1
              },
              {
                "text": "Uma família joga peteca no fim de semana.",
                "cat": 0
              },
              {
                "text": "Uma engenheira faz os cálculos de uma ponte no trabalho.",
                "cat": 1
              },
              {
                "text": "Um casal fotografa paisagens nas férias.",
                "cat": 0
              },
              {
                "text": "Amigos jogam basquete na praça.",
                "cat": 0
              },
              {
                "text": "Uma professora corrige provas na escola.",
                "cat": 1
              },
              {
                "text": "Uma pessoa coleciona selos por diversão.",
                "cat": 0
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
            "explain": "O livro mostra indígenas guarani jogando peteca feita de folha de palmeira.",
            "context": "Uma foto do livro mostra pessoas indígenas da etnia Guarani jogando peteca feita de folha de palmeira, em Bertioga (SP)."
          },
          {
            "type": "mc",
            "context": "Especialistas dizem que brincar não é só coisa de criança. Para os adultos, as brincadeiras e os jogos ajudam a fortalecer laços com outras pessoas, melhorar a memória, estimular a imaginação e o raciocínio.",
            "q": "Segundo o texto, brincar ajuda os adultos a:",
            "options": [
              "melhorar a memória e a imaginação",
              "trabalhar mais horas por dia",
              "não precisar de descanso",
              "esquecer os amigos"
            ],
            "answer": 0,
            "explain": "Brincar é importante para todas as idades: fortalece laços, melhora a memória e estimula a imaginação."
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
            "context": "Quando o cinema foi inventado, no final do século 19, os filmes não tinham som nem cores e eram exibidos em salas na rua, os “cinemas de rua”. As pessoas se vestiam de maneira formal. Hoje, muitas salas ficam em shopping centers e os ingressos podem ser comprados pela internet. Apenas 7% dos municípios brasileiros têm sala de cinema: cerca de 90 milhões de pessoas vivem em cidades sem cinema."
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
            "context": "O Brasil nunca teve tantas salas de cinema quanto hoje, mas isso não significa que elas estejam disponíveis para todos. Apenas 7% dos municípios têm uma sala de exibição. Isso significa que 90 milhões de brasileiros vivem em cidades onde não há cinema."
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
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo."
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
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo."
          },
          {
            "type": "text",
            "q": "Como se chama a área central do circo, onde acontecem as apresentações?",
            "answers": [
              "picadeiro",
              "o picadeiro"
            ],
            "explain": "Picadeiro é a área central do circo, reservada às atrações.",
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo."
          }
        ]
      },
      {
        "id": "hist14",
        "module": "14",
        "title": "Muitos jeitos de festejar",
        "subtitle": "Motivos e jeitos de festejar · Brasil, um país festeiro",
        "video": "assets/videos/hist14.mp4",
        "theory": [
          {
            "h": "Muitos motivos e jeitos de festejar",
            "p": [
              "<strong>Festejar</strong> é reunir-se para <strong>celebrar uma tradição ou um acontecimento</strong>: um ano novo, uma colheita, o nascimento de uma criança, a posse de um líder… É um costume muito antigo.",
              "Muitas festas antigas de <strong>origem religiosa</strong> foram trazidas pelos <strong>portugueses</strong>. Um exemplo é a <strong>Folia do Divino</strong>, uma das celebrações mais antigas do catolicismo popular brasileiro.",
              "Os povos indígenas também têm suas festas. O <strong>Kuarup</strong>, dos povos do <strong>Xingu</strong> (MT), é um ritual de <strong>homenagem às pessoas que já morreram</strong>: eles acreditam que os mortos não querem ver os vivos tristes. Há pinturas corporais, flautas uruá e a luta huka-huka."
            ]
          },
          {
            "h": "Brasil, um país festeiro",
            "figure": {
              "src": "assets/4b/hist14-festas.svg",
              "alt": "Calendário de festas brasileiras: Carnaval em fevereiro e março, festas juninas em junho com Santo Antônio, São João e São Pedro, Círio de Nazaré em outubro, Congada, Kuarup e Folia do Divino.",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>Festas juninas</strong>: trazidas pelos <strong>portugueses</strong>, de origem religiosa. Celebram os santos juninos: <strong>Santo Antônio (13)</strong>, <strong>São João (24)</strong> e <strong>São Pedro (29 de junho)</strong>.",
              "<strong>Círio de Nazaré</strong>: festa religiosa em <strong>Belém (PA)</strong>, todo mês de <strong>outubro</strong>, há mais de duzentos anos. Milhares de romeiros caminham em homenagem a Nossa Senhora de Nazaré. A devoção também veio de Portugal.",
              "<strong>Congada</strong>: trazida pelos <strong>africanos</strong>. Lembra a coroação do rei e da rainha do antigo Reino do Congo, na África.",
              "<strong>Carnaval</strong>: herança dos portugueses, acontece entre <strong>fevereiro e março</strong>. O Carnaval do <strong>Rio de Janeiro</strong> é o maior do mundo (Livro dos Recordes). Também é famoso em Recife e Olinda (bonecos gigantes), Salvador, São Paulo e Belo Horizonte."
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
              "Indígenas 🪶"
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
                "text": "Folia do Divino",
                "cat": 0
              },
              {
                "text": "Círio de Nazaré (a devoção)",
                "cat": 0
              },
              {
                "text": "Carnaval",
                "cat": 0
              },
              {
                "text": "Ritual que homenageia os mortos no Xingu",
                "cat": 2
              },
              {
                "text": "Coroação do rei e da rainha do Congo",
                "cat": 1
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
                "Kuarup",
                "Parque Indígena do Xingu (MT)"
              ],
              [
                "Maior Carnaval do mundo",
                "Rio de Janeiro (RJ)"
              ],
              [
                "Bonecos gigantes no Carnaval",
                "Olinda (PE)"
              ],
              [
                "Folia do Divino",
                "festa religiosa trazida pelos portugueses"
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
            "explain": "São festas de origem religiosa trazidas pelos portugueses.",
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram."
          },
          {
            "type": "mc",
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
            "q": "Qual destas festas tem origem africana?",
            "options": [
              "Congada",
              "Festas juninas",
              "Círio de Nazaré",
              "Kuarup"
            ],
            "answer": 0,
            "explain": "A Congada foi trazida pelos africanos."
          },
          {
            "type": "text",
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
            "q": "Em que cidade acontece o Círio de Nazaré?",
            "answers": [
              "belem",
              "belém",
              "belem pa",
              "belém (pa)"
            ],
            "explain": "O Círio de Nazaré acontece em Belém, no Pará."
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
              "<strong>Módulo 13 – Trabalho e lazer:</strong> lazer é descanso e diversão, importante para todas as idades. Adultos também brincam e têm hobbies (colecionar, pintar, tocar um instrumento); brincar ajuda a memória e a imaginação. Cinema: no início sem som e sem cor, nos cinemas de rua, com roupa formal; hoje em shoppings e com ingresso pela internet. Circo: itinerante, se apresenta no picadeiro e hoje quase não usa animais.",
              "<strong>Módulo 14 – Muitos jeitos de festejar:</strong> festejar é reunir-se para celebrar uma tradição ou acontecimento. Festas juninas (portugueses; 13, 24 e 29 de junho), Folia do Divino e Círio de Nazaré (religiosas; Círio em Belém, em outubro), Congada (africanos), Kuarup (indígenas do Xingu, homenagem aos mortos), Carnaval (o do Rio de Janeiro é o maior do mundo)."
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
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado.",
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
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado.",
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
            "context": "No campo, as pessoas costumam consumir alimentos produzidos perto de casa: ovos, leite, frutas, verduras. Por isso, os alimentos in natura (em seu estado natural) tendem a ser mais baratos e frescos. Nas cidades, há muita oferta de produtos industrializados. Exemplo com o milho: a espiga é in natura; o milho em conserva é processado; o salgadinho de milho é ultraprocessado.",
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades.",
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades.",
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
            "context": "Eder e Edna moravam na Região Metropolitana de Curitiba, uma área urbana. Eles deixaram a vida na cidade, foram morar na área rural e hoje produzem morangos em Mandirituba (PR). Pessoas que trocam a cidade pelo campo são chamadas de neo-rurais.",
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
            "context": "Eder e Edna moravam na Região Metropolitana de Curitiba, uma área urbana. Eles deixaram a vida na cidade, foram morar na área rural e hoje produzem morangos em Mandirituba (PR). Pessoas que trocam a cidade pelo campo são chamadas de neo-rurais.",
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
            "context": "Até meados do século passado, a maioria dos brasileiros vivia e trabalhava no campo. A partir dos anos 1950, com a chegada de máquinas ao campo, havia menos trabalho para as pessoas. Ao mesmo tempo, as indústrias, o comércio e os serviços cresciam nas cidades. Muitos camponeses migraram para as cidades em busca de novas oportunidades de trabalho. Nos anos 1970, mais da metade da população brasileira já vivia em cidades.",
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
            "context": "Uma foto do livro mostra pessoas indígenas da etnia Guarani jogando peteca feita de folha de palmeira, em Bertioga (SP).",
            "from": "Trabalho e lazer"
          },
          {
            "type": "mc",
            "context": "Especialistas dizem que brincar não é só coisa de criança. Para os adultos, as brincadeiras e os jogos ajudam a fortalecer laços com outras pessoas, melhorar a memória, estimular a imaginação e o raciocínio.",
            "q": "Segundo o texto, brincar ajuda os adultos a:",
            "options": [
              "melhorar a memória e a imaginação",
              "trabalhar mais horas por dia",
              "não precisar de descanso",
              "esquecer os amigos"
            ],
            "answer": 0,
            "explain": "Brincar é importante para todas as idades: fortalece laços, melhora a memória e estimula a imaginação.",
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
            "context": "Quando o cinema foi inventado, no final do século 19, os filmes não tinham som nem cores e eram exibidos em salas na rua, os “cinemas de rua”. As pessoas se vestiam de maneira formal. Hoje, muitas salas ficam em shopping centers e os ingressos podem ser comprados pela internet. Apenas 7% dos municípios brasileiros têm sala de cinema: cerca de 90 milhões de pessoas vivem em cidades sem cinema.",
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
            "context": "O Brasil nunca teve tantas salas de cinema quanto hoje, mas isso não significa que elas estejam disponíveis para todos. Apenas 7% dos municípios têm uma sala de exibição. Isso significa que 90 milhões de brasileiros vivem em cidades onde não há cinema.",
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
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo.",
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
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo.",
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
            "context": "O circo é um entretenimento antigo. No passado, as atrações com animais eram comuns; hoje são raras, porque as pessoas estão mais conscientes dos maus-tratos aos animais. O que não mudou é a tradição itinerante: o circo viaja de cidade em cidade, monta a tenda e se apresenta no picadeiro, a área central do circo.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
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
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
            "q": "Qual destas festas tem origem africana?",
            "options": [
              "Congada",
              "Festas juninas",
              "Círio de Nazaré",
              "Kuarup"
            ],
            "answer": 0,
            "explain": "A Congada foi trazida pelos africanos.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "text",
            "context": "Festas juninas: trazidas pelos portugueses, celebram Santo Antônio (13), São João (24) e São Pedro (29 de junho). Círio de Nazaré: festa religiosa em Belém (PA), todo mês de outubro. Congada: trazida pelos africanos, lembra a coroação do rei e da rainha do antigo Reino do Congo. Carnaval: herança dos portugueses; o do Rio de Janeiro é o maior do mundo. Kuarup: ritual dos povos indígenas do Xingu (MT) que homenageia as pessoas que já morreram.",
            "q": "Em que cidade acontece o Círio de Nazaré?",
            "answers": [
              "belem",
              "belém",
              "belem pa",
              "belém (pa)"
            ],
            "explain": "O Círio de Nazaré acontece em Belém, no Pará.",
            "from": "Muitos jeitos de festejar"
          },
          {
            "type": "mc",
            "q": "Qual alternativa mostra uma festa e o povo que a trouxe para o Brasil?",
            "options": [
              "Congada – africanos",
              "Círio de Nazaré – indígenas",
              "Kuarup – japoneses",
              "Festas juninas – alemães"
            ],
            "answer": 0,
            "explain": "Congada veio dos africanos. o Círio de Nazaré é uma festa religiosa trazida pelos portugueses, o Kuarup é indígena e as festas juninas são portuguesas.",
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
            "q": "Qual festa acontece em junho e celebra Santo Antônio, São João e São Pedro?",
            "options": [
              "Festas juninas",
              "Círio de Nazaré",
              "Carnaval",
              "Kuarup"
            ],
            "answer": 0,
            "explain": "As festas juninas celebram os santos juninos nos dias 13, 24 e 29 de junho.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Antigamente, quem ia ao cinema de rua costumava:",
            "options": [
              "vestir-se de maneira formal",
              "comprar ingresso pela internet",
              "assistir a filmes coloridos em 3D",
              "ir ao shopping"
            ],
            "answer": 0,
            "explain": "No início do cinema, as pessoas se vestiam formalmente e os filmes não tinham som nem cor.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Colecionar selos por diversão nos momentos livres é um exemplo de:",
            "options": [
              "hobby",
              "trabalho",
              "migração",
              "festa religiosa"
            ],
            "answer": 0,
            "explain": "Hobby é uma atividade feita como lazer ou passatempo.",
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
    "capitulos": [
      {
        "id": "mat13",
        "module": "13",
        "title": "Medidas de massa, de capacidade e de comprimento",
        "subtitle": "Instrumentos · kg, g, mg e t · L e mL · km, m, cm e mm · Problemas",
        "theory": [
          {
            "h": "Instrumentos de medida",
            "figure": {
              "src": "assets/4b/mat13-instrumentos.svg",
              "alt": "Três colunas: massa (balança; quilograma, grama, miligrama, tonelada), capacidade (copo de medidas; litro e mililitro) e comprimento (régua e fita métrica; metro, centímetro, milímetro, quilômetro).",
              "tipo": "diagrama"
            },
            "p": [
              "Para medir, usamos <strong>instrumentos padronizados de medida</strong>. Cada um serve para uma coisa:",
              "<strong>Balança</strong> ⚖️ mede a <strong>massa</strong> (o “peso”): a massa dos tomates que o feirante vende, a massa de uma criança no consultório.",
              "<strong>Copo de medidas</strong> 🥛 mede a <strong>capacidade</strong> (quanto cabe): a quantidade de leite de uma receita de bolo.",
              "<strong>Régua, fita métrica e metro de madeira</strong> 📏 medem o <strong>comprimento</strong>: o tecido da costureira, a altura de uma parede, a capa do caderno.",
              "O <strong>relógio</strong> também é um instrumento de medida: ele mede o <strong>tempo</strong>."
            ],
            "cards": [
              {
                "icon": "⚖️",
                "t": "balança",
                "d": "mede massa"
              },
              {
                "icon": "🥛",
                "t": "copo de medidas",
                "d": "mede capacidade"
              },
              {
                "icon": "📏",
                "t": "régua / fita métrica",
                "d": "mede comprimento"
              },
              {
                "icon": "⏰",
                "t": "relógio",
                "d": "mede tempo"
              }
            ]
          },
          {
            "h": "Medidas de massa: quilograma, grama, miligrama e tonelada",
            "figure": {
              "src": "assets/4b/mat13-massa.svg",
              "alt": "Degraus das unidades de massa: 1 tonelada = 1 000 quilogramas; 1 quilograma = 1 000 gramas; 1 grama = 1 000 miligramas.",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>1 quilograma (1 kg) = 1 000 gramas (1 000 g).</strong> Meio quilograma corresponde a <strong>500 g</strong>. Um pacote de arroz tem 2 kg; um pacote de leite em pó tem 400 g; dois pacotes de milho de pipoca de 500 g formam 1 kg.",
              "<strong>1 grama (1 g) = 1 000 miligramas (1 000 mg).</strong> O miligrama aparece no rótulo dos alimentos: um copo de iogurte tem 110 mg de sódio e 248 mg de cálcio. Uma beterraba de 70 g tem 70 000 mg.",
              "<strong>1 tonelada (1 t) = 1 000 quilogramas.</strong> José leva 10 caixas de 100 kg na empilhadeira: 10 × 100 = 1 000 kg = 1 t.",
              "Para escolher a unidade, pense no tamanho: <strong>abelha</strong> e <strong>formiga</strong> → miligrama; <strong>lápis</strong>, <strong>pera</strong> e <strong>borracha</strong> → grama; <strong>melancia</strong>, <strong>bebê</strong> e <strong>cachorro</strong> → quilograma; <strong>caminhão de carga</strong> → tonelada."
            ],
            "cards": [
              {
                "icon": "🍚",
                "t": "1 kg",
                "d": "1 000 g"
              },
              {
                "icon": "🫘",
                "t": "meio quilograma",
                "d": "500 g"
              },
              {
                "icon": "🥛",
                "t": "1 g",
                "d": "1 000 mg"
              },
              {
                "icon": "🚚",
                "t": "1 t",
                "d": "1 000 kg"
              }
            ]
          },
          {
            "h": "Medidas de capacidade: litro e mililitro",
            "figure": {
              "src": "assets/4b/mat13-capacidade.svg",
              "alt": "Uma jarra de 1 litro é igual a quatro copos de 250 mililitros: 250 + 250 + 250 + 250 = 1 000 mL.",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>1 litro (1 L) = 1 000 mililitros (1 000 mL).</strong> Leite, suco, água e óleo costumam ser vendidos por litro.",
              "Júlio fez 1 L de suco e encheu 3 copos de 250 mL: usou 750 mL e sobraram <strong>250 mL</strong> na jarra. Com 4 copos de 200 mL, ele usaria 800 mL e sobrariam <strong>200 mL</strong>.",
              "Uma garrafa de 500 mL tem <strong>250 mL a mais</strong> que uma garrafa de 250 mL.",
              "Um galão de tinta tem cerca de <strong>4 L</strong>; um frasco de xampu tem cerca de <strong>250 mL</strong>."
            ]
          },
          {
            "h": "Medidas de comprimento: quilômetro, metro, centímetro e milímetro",
            "figure": {
              "src": "assets/4b/mat13-comprimento.svg",
              "alt": "1 quilômetro = 1 000 metros; 1 metro = 100 centímetros; 1 centímetro = 10 milímetros; 1 milímetro é o menor tracinho da régua.",
              "tipo": "diagrama"
            },
            "p": [
              "<strong>1 centímetro (1 cm) = 10 milímetros (10 mm).</strong> Na régua, cada número é 1 cm e os tracinhos pequenos são milímetros. Então 4 cm = 40 mm e 80 mm = 8 cm.",
              "<strong>1 metro (1 m) = 100 centímetros (100 cm).</strong> A fita métrica de papel mede 1 m. Então 3 m = 300 cm e 700 cm = 7 m. Uma porta mede cerca de 2 m; uma tesoura, cerca de 11 cm.",
              "<strong>1 quilômetro (1 km) = 1 000 metros (1 000 m).</strong> Usamos o quilômetro para distâncias grandes, como de uma cidade a outra.",
              "Use <strong>centímetro</strong> para coisas pequenas (um estojo, a página) e <strong>metro</strong> para coisas maiores (a altura de uma parede)."
            ],
            "cards": [
              {
                "icon": "📏",
                "t": "1 cm",
                "d": "10 mm"
              },
              {
                "icon": "🚪",
                "t": "1 m",
                "d": "100 cm"
              },
              {
                "icon": "🛣️",
                "t": "1 km",
                "d": "1 000 m"
              }
            ]
          },
          {
            "h": "Medidas nas feiras livres",
            "p": [
              "Nas feiras livres, os feirantes usam <strong>balanças</strong> para medir a massa dos produtos em <strong>unidades padronizadas</strong>, como o quilograma e o grama.",
              "Também é comum usar <strong>unidades não padronizadas</strong>: a <strong>dúzia</strong> (12 unidades), o <strong>maço</strong> (de verduras) e a <strong>bacia</strong> (de pimentões, por exemplo). Esses produtos não são pesados.",
              "Comparar preços ajuda a escolher bem. Goiaba a R$ 14,90 o quilograma e goiabada a R$ 12,00 por 300 gramas: a goiaba natural é mais saudável, e os alimentos naturais ajudam a prevenir problemas de saúde."
            ]
          },
          {
            "h": "Resolvendo problemas com as quatro operações",
            "p": [
              "➕ <strong>Adição:</strong> um agricultor colheu 4 t de soja (4 000 kg) e 980 kg de milho: 4 000 + 980 = <strong>4 980 kg</strong>. A horta de Pedro tem lados de 30 m, 17 m, 30 m e 17 m: para cercar, precisa de 30 + 17 + 30 + 17 = <strong>94 m</strong> de arame.",
              "➖ <strong>Subtração:</strong> na balança do aeroporto, havia 23 kg; com a mala preta, 38 kg. A mala preta tem 38 − 23 = <strong>15 kg</strong>. Um artista de 176 cm fica com 191 cm nas pernas-de-pau: cada perna-de-pau mede 191 − 176 = <strong>15 cm</strong>.",
              "✖️ <strong>Multiplicação:</strong> Luciana viaja 70 km para ir e 70 km para voltar, de segunda a sexta: 70 × 2 = 140 km por dia e 140 × 5 = <strong>700 km</strong>. Na casa de Giovana, comem meio quilograma (500 g) de feijão por dia: em 5 dias, 5 × 500 = <strong>2 500 g</strong>.",
              "➗ <strong>Divisão:</strong> uma embalagem de 3 L custa 24 reais (24 ÷ 3 = 8 reais por litro) e outra de 2 L custa 12 reais (12 ÷ 2 = 6 reais por litro). A de 2 L é <strong>mais vantajosa</strong>. Um cozinheiro gastou 68 reais e, no dia seguinte, a metade: 68 ÷ 2 = <strong>34 reais</strong>."
            ]
          }
        ],
        "games": [
          {
            "type": "sort",
            "title": "Qual instrumento usar?",
            "short": "Instrumentos",
            "instructions": "Qual instrumento de medida é o mais adequado para cada situação?",
            "categories": [
              "Balança ⚖️",
              "Copo de medidas 🥛",
              "Régua ou fita métrica 📏"
            ],
            "items": [
              {
                "text": "O feirante mede a massa dos tomates que a cliente comprou.",
                "cat": 0
              },
              {
                "text": "O cozinheiro mede o leite da receita de bolo.",
                "cat": 1
              },
              {
                "text": "A costureira mede o comprimento de um pedaço de tecido.",
                "cat": 2
              },
              {
                "text": "A nutricionista mede a massa da criança.",
                "cat": 0
              },
              {
                "text": "Júlio mede 250 mL de suco para cada copo.",
                "cat": 1
              },
              {
                "text": "Você mede a altura de uma parede.",
                "cat": 2
              },
              {
                "text": "O cozinheiro mede a massa de cada bolinho de falafel.",
                "cat": 0
              },
              {
                "text": "Você mede a capa do caderno.",
                "cat": 2
              }
            ]
          },
          {
            "type": "sort",
            "title": "Qual é a unidade mais adequada?",
            "short": "Unidades de massa",
            "instructions": "Qual unidade é a melhor para medir a massa de cada um?",
            "categories": [
              "miligrama (mg)",
              "grama (g)",
              "quilograma (kg)",
              "tonelada (t)"
            ],
            "items": [
              {
                "text": "1 abelha",
                "cat": 0
              },
              {
                "text": "1 formiga",
                "cat": 0
              },
              {
                "text": "1 lápis",
                "cat": 1
              },
              {
                "text": "1 pera",
                "cat": 1
              },
              {
                "text": "4 borrachas",
                "cat": 1
              },
              {
                "text": "1 melancia",
                "cat": 2
              },
              {
                "text": "1 bebê",
                "cat": 2
              },
              {
                "text": "1 cachorro adulto",
                "cat": 2
              },
              {
                "text": "10 caixas de 100 kg na empilhadeira",
                "cat": 3
              },
              {
                "text": "A carga de um caminhão",
                "cat": 3
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Troca de unidades",
            "short": "Converter medidas",
            "instructions": "Escolha a medida que vale o mesmo.",
            "pairs": [
              [
                "1 kg",
                "1 000 g"
              ],
              [
                "meio quilograma",
                "500 g"
              ],
              [
                "1 g",
                "1 000 mg"
              ],
              [
                "1 t",
                "1 000 kg"
              ],
              [
                "1 L",
                "1 000 mL"
              ],
              [
                "4 cm",
                "40 mm"
              ],
              [
                "3 m",
                "300 cm"
              ],
              [
                "1 km",
                "1 000 m"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Padronizada ou não padronizada?",
            "short": "Medidas na feira",
            "instructions": "Esta unidade é padronizada ou não padronizada?",
            "context": "Nas feiras livres, os comerciantes costumam utilizar balanças para medir a massa dos produtos em unidades padronizadas de medida, como o quilograma e o grama. No entanto, é comum também o uso de unidades não padronizadas de medida, como a dúzia, o maço e a bacia.",
            "categories": [
              "Padronizada 📏",
              "Não padronizada 🧺"
            ],
            "items": [
              {
                "text": "quilograma",
                "cat": 0
              },
              {
                "text": "dúzia",
                "cat": 1
              },
              {
                "text": "grama",
                "cat": 0
              },
              {
                "text": "maço",
                "cat": 1
              },
              {
                "text": "litro",
                "cat": 0
              },
              {
                "text": "bacia",
                "cat": 1
              },
              {
                "text": "metro",
                "cat": 0
              },
              {
                "text": "mililitro",
                "cat": 0
              }
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual instrumento o cozinheiro deve usar para medir a quantidade de leite de uma receita de bolo?",
            "options": [
              "Copo de medidas",
              "Régua",
              "Fita métrica",
              "Relógio"
            ],
            "answer": 0,
            "explain": "O copo de medidas mede capacidade, isto é, a quantidade de líquido."
          },
          {
            "type": "mc",
            "q": "1 quilograma equivale a:",
            "options": [
              "1 000 gramas",
              "100 gramas",
              "10 gramas",
              "500 gramas"
            ],
            "answer": 0,
            "explain": "1 kg = 1 000 g. Meio quilograma é que corresponde a 500 g."
          },
          {
            "type": "mc",
            "context": "Na casa de Giovana, é consumido meio quilograma de feijão por dia. Atenção: meio quilograma corresponde a 500 gramas.",
            "q": "Quantos gramas de feijão são consumidos de segunda a sexta-feira?",
            "options": [
              "2 500 g",
              "500 g",
              "1 000 g",
              "3 500 g"
            ],
            "answer": 0,
            "explain": "De segunda a sexta são 5 dias: 5 × 500 = 2 500 g."
          },
          {
            "type": "mc",
            "context": "Na balança do aeroporto, um senhor colocou uma mala vermelha: o visor mostrou 23 kg. Depois, colocou a mala preta em cima da vermelha: o visor mostrou 38 kg.",
            "q": "Qual é a massa da mala preta?",
            "options": [
              "15 kg",
              "23 kg",
              "38 kg",
              "61 kg"
            ],
            "answer": 0,
            "explain": "A mala preta é a diferença: 38 − 23 = 15 kg (ou 15 000 g)."
          },
          {
            "type": "mc",
            "q": "1 grama equivale a:",
            "options": [
              "1 000 miligramas",
              "100 miligramas",
              "10 miligramas",
              "1 miligrama"
            ],
            "answer": 0,
            "explain": "1 g = 1 000 mg. O miligrama aparece nos rótulos dos alimentos, como o do iogurte."
          },
          {
            "type": "text",
            "q": "Uma beterraba pesa 70 g. Quantos miligramas (mg) ela pesa? Escreva só o número.",
            "answers": [
              "70000",
              "70 000",
              "70.000",
              "70000 mg",
              "70 000 mg"
            ],
            "explain": "Cada grama tem 1 000 mg: 70 × 1 000 = 70 000 mg."
          },
          {
            "type": "mc",
            "context": "José trabalha com uma empilhadeira. Na foto, há 10 caixas sobre a empilhadeira, e a massa de cada caixa é 100 quilogramas.",
            "q": "Quanto José está levando de uma só vez?",
            "options": [
              "1 000 kg, ou seja, 1 tonelada",
              "100 kg, ou seja, 1 tonelada",
              "10 kg, ou seja, 1 tonelada",
              "1 000 g, ou seja, 1 tonelada"
            ],
            "answer": 0,
            "explain": "10 × 100 = 1 000 kg. E 1 tonelada = 1 000 kg."
          },
          {
            "type": "mc",
            "context": "Um agricultor colheu 4 toneladas de soja e 980 quilogramas de milho. Lembre: 1 tonelada = 1 000 quilogramas.",
            "q": "Quantos quilogramas de grãos esse agricultor colheu ao todo?",
            "options": [
              "4 980 kg",
              "984 kg",
              "1 380 kg",
              "4 098 kg"
            ],
            "answer": 0,
            "explain": "4 t = 4 000 kg. Então 4 000 + 980 = 4 980 kg."
          },
          {
            "type": "mc",
            "q": "1 litro equivale a:",
            "options": [
              "1 000 mililitros",
              "100 mililitros",
              "250 mililitros",
              "500 mililitros"
            ],
            "answer": 0,
            "explain": "1 L = 1 000 mL."
          },
          {
            "type": "mc",
            "context": "Júlio fez 1 L de suco de laranja e colocou em 1 jarra. Depois, encheu 3 copos iguais com 250 mL de suco de laranja em cada um.",
            "q": "Quantos mililitros de suco sobraram na jarra?",
            "options": [
              "250 mL",
              "750 mL",
              "500 mL",
              "1 000 mL"
            ],
            "answer": 0,
            "explain": "3 × 250 = 750 mL nos copos. 1 000 − 750 = 250 mL na jarra."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat13-jarra-300.svg",
            "imageAlt": "Jarra de 1 litro graduada de 100 em 100 mililitros, com líquido até a marca de 300 mL.",
            "q": "A jarra tem 300 mL de suco. Quantos mililitros faltam para completar 1 litro?",
            "options": [
              "700 mL",
              "300 mL",
              "600 mL",
              "1 000 mL"
            ],
            "answer": 0,
            "explain": "1 L = 1 000 mL. 1 000 − 300 = 700 mL."
          },
          {
            "type": "mc",
            "context": "Vera foi ao mercado com o pai comprar amaciante. A embalagem da esquerda tem 3 L e custa 24 reais. A embalagem da direita tem 2 L e custa 12 reais.",
            "q": "Considerando o preço de 1 litro, qual embalagem é mais vantajosa?",
            "options": [
              "A da direita: 6 reais o litro",
              "A da esquerda: 8 reais o litro",
              "A da esquerda: 6 reais o litro",
              "A da direita: 8 reais o litro"
            ],
            "answer": 0,
            "explain": "24 ÷ 3 = 8 reais por litro; 12 ÷ 2 = 6 reais por litro. A de 2 L sai mais barata."
          },
          {
            "type": "mc",
            "q": "80 mm equivalem a:",
            "options": [
              "8 cm",
              "80 cm",
              "800 cm",
              "8 m"
            ],
            "answer": 0,
            "explain": "1 cm = 10 mm. 80 ÷ 10 = 8 cm."
          },
          {
            "type": "mc",
            "q": "700 cm equivalem a:",
            "options": [
              "7 m",
              "70 m",
              "700 m",
              "7 km"
            ],
            "answer": 0,
            "explain": "1 m = 100 cm. 700 ÷ 100 = 7 m."
          },
          {
            "type": "text",
            "q": "Complete: 3 m são equivalentes a quantos centímetros? Escreva só o número.",
            "answers": [
              "300",
              "300 cm"
            ],
            "explain": "1 m = 100 cm. 3 × 100 = 300 cm."
          },
          {
            "type": "mc",
            "q": "Qual unidade é a mais adequada para medir a altura de uma parede?",
            "options": [
              "Metro",
              "Litro",
              "Quilograma",
              "Miligrama"
            ],
            "answer": 0,
            "explain": "Altura é comprimento. Para coisas grandes, usamos o metro."
          },
          {
            "type": "mc",
            "q": "Qual medida mais se aproxima da altura real de uma porta?",
            "options": [
              "2 m",
              "2 cm",
              "2 mm",
              "2 km"
            ],
            "answer": 0,
            "explain": "Uma porta tem cerca de 2 metros, isto é, 200 cm."
          },
          {
            "type": "mc",
            "context": "Luciana mora na cidade de Santos e trabalha na capital, a cerca de 70 quilômetros. De segunda a sexta-feira, ela faz o trajeto de ida e volta.",
            "q": "Quantos quilômetros, aproximadamente, Luciana percorre de segunda a sexta-feira?",
            "options": [
              "700 km",
              "140 km",
              "350 km",
              "70 km"
            ],
            "answer": 0,
            "explain": "Ida e volta: 70 × 2 = 140 km por dia. Em 5 dias: 140 × 5 = 700 km."
          },
          {
            "type": "mc",
            "context": "Um artista de circo tem 176 cm de altura. Com as pernas-de-pau, ele fica com 191 cm de altura.",
            "q": "Qual é o comprimento de cada perna-de-pau?",
            "options": [
              "15 cm",
              "15 m",
              "15 mm",
              "25 cm"
            ],
            "answer": 0,
            "explain": "191 − 176 = 15 cm."
          },
          {
            "type": "mc",
            "context": "Receita de mousse de Teresa (o chocolate caiu sobre algumas palavras): “230 ___ de chocolate meio amargo; 350 ___ de creme de leite fresco gelado. Coloque em uma forma de 30 ___ de comprimento e leve ao congelador.”",
            "q": "Quais unidades completam a receita, na ordem em que aparecem?",
            "options": [
              "gramas, mililitros, centímetros",
              "quilogramas, litros, centímetros",
              "litros, metros, quilogramas",
              "gramas, quilogramas, litros"
            ],
            "answer": 0,
            "explain": "Chocolate se mede em gramas, creme de leite (líquido) em mililitros e o comprimento da forma em centímetros."
          },
          {
            "type": "mc",
            "context": "Pedro vai cercar a horta retangular da chácara. Os lados da horta medem 30 m, 17 m, 30 m e 17 m.",
            "q": "De quantos metros de arame Pedro vai precisar para dar uma volta na horta?",
            "options": [
              "94 m",
              "47 m",
              "64 m",
              "510 m"
            ],
            "answer": 0,
            "explain": "Somamos todos os lados: 30 + 17 + 30 + 17 = 94 m."
          },
          {
            "type": "mc",
            "context": "Supermercado Preço Bom: tomate, 1 kg por 4 reais. Supermercado Preço Justo: tomate, 2 kg por 7 reais.",
            "q": "Para comprar 2 kg de tomate, qual supermercado é mais vantajoso?",
            "options": [
              "Preço Justo: 7 reais",
              "Preço Bom: 7 reais",
              "Preço Bom: 8 reais",
              "Preço Justo: 8 reais"
            ],
            "answer": 0,
            "explain": "No Preço Bom, 2 kg custam 2 × 4 = 8 reais. No Preço Justo, custam 7 reais."
          },
          {
            "type": "mc",
            "context": "Para fazer 1 copo de suco de graviola de 250 mL, Gregório usou 2 graviolas.",
            "q": "Quantos litros de suco Gregório pode fazer com 8 graviolas?",
            "options": [
              "1 litro",
              "2 litros",
              "4 litros",
              "8 litros"
            ],
            "answer": 0,
            "explain": "8 ÷ 2 = 4 copos. 4 × 250 = 1 000 mL = 1 litro."
          },
          {
            "type": "mc",
            "context": "Nas feiras livres, os comerciantes usam balanças e unidades padronizadas, como o quilograma. Também usam unidades não padronizadas para vender frutas, legumes e verduras.",
            "q": "Qual destas é uma unidade não padronizada usada nas feiras?",
            "options": [
              "Dúzia",
              "Quilograma",
              "Metro",
              "Litro"
            ],
            "answer": 0,
            "explain": "Dúzia e maço não são unidades padronizadas; quilograma, metro e litro são."
          }
        ]
      },
      {
        "id": "mat14",
        "module": "14",
        "title": "Frações",
        "subtitle": "Metade, terço e quarto · Quinto a décimo · Fração de quantidade · Problemas",
        "theory": [
          {
            "h": "Metade ou um meio",
            "figure": {
              "src": "assets/4b/mat14-partes-da-fracao.svg",
              "alt": "Retângulo dividido em 4 partes iguais com 1 parte pintada, ao lado da fração um quarto: o numerador 1 indica as partes pintadas e o denominador 4 indica o total de partes iguais.",
              "tipo": "diagrama"
            },
            "p": [
              "Quando uma figura é dividida em <strong>2 partes iguais</strong> e pintamos 1 parte, dizemos que <strong>metade</strong> ou <strong>um meio</strong> da figura foi pintado. Escrevemos <strong>1/2</strong>.",
              "O número de cima é o <strong>numerador</strong>: indica quantas partes foram pintadas. O número de baixo é o <strong>denominador</strong>: indica em quantas <strong>partes iguais</strong> a figura foi dividida.",
              "O traço entre os números significa <strong>divisão</strong>. Essa representação recebe o nome de <strong>fração</strong>.",
              "Jair dividiu um sanduíche igualmente com Estela: o sanduíche foi dividido em 2 partes, e cada um ficou com <strong>metade</strong>."
            ],
            "cards": [
              {
                "icon": "⬆️",
                "t": "numerador",
                "d": "partes pintadas"
              },
              {
                "icon": "⬇️",
                "t": "denominador",
                "d": "total de partes iguais"
              },
              {
                "icon": "➗",
                "t": "traço da fração",
                "d": "significa divisão"
              }
            ]
          },
          {
            "h": "Terça parte e quarta parte",
            "figure": {
              "src": "assets/4b/mat14-meio-terco-quarto.svg",
              "alt": "Três círculos: dividido em 2 partes com 1 pintada (um meio), em 3 partes com 1 pintada (um terço) e em 4 partes com 1 pintada (um quarto).",
              "tipo": "diagrama"
            },
            "p": [
              "Figura dividida em <strong>3 partes iguais</strong>, 1 pintada: <strong>terça parte</strong> ou <strong>um terço</strong> → <strong>1/3</strong>.",
              "Figura dividida em <strong>4 partes iguais</strong>, 1 pintada: <strong>quarta parte</strong> ou <strong>um quarto</strong> → <strong>1/4</strong>. Dobrando uma folha ao meio duas vezes, obtemos 4 partes iguais: cada uma é a metade da metade, ou seja, um quarto. Juntando 4 quartos, formamos a folha inteira.",
              "Atenção: as partes precisam ser <strong>iguais</strong>. Se uma pizza foi dividida em 4 pedaços iguais e 1 foi tirado, o pedaço tirado é <strong>1/4</strong> da pizza."
            ]
          },
          {
            "h": "Quinta, sexta, sétima, oitava, nona e décima partes",
            "figure": {
              "src": "assets/4b/mat14-fracoes-unitarias.svg",
              "alt": "Barras iguais divididas de 2 a 10 partes, cada uma com 1 parte pintada: um meio, um terço, um quarto, um quinto, um sexto, um sétimo, um oitavo, um nono, um décimo. Quanto mais partes, menor o pedaço.",
              "tipo": "diagrama"
            },
            "p": [
              "Frações com <strong>numerador 1</strong> são chamadas <strong>frações unitárias</strong>. Veja como lemos:",
              "1/2 um meio · 1/3 um terço · 1/4 um quarto · 1/5 <strong>um quinto</strong> · 1/6 <strong>um sexto</strong> · 1/7 <strong>um sétimo</strong> · 1/8 <strong>um oitavo</strong> · 1/9 <strong>um nono</strong> · 1/10 <strong>um décimo</strong>.",
              "Quando dividimos uma figura em 5 partes iguais e pintamos 1, a <strong>quinta parte</strong> (um quinto, 1/5) foi pintada. Com 10 partes iguais, a <strong>décima parte</strong> (um décimo, 1/10).",
              "Quanto <strong>mais</strong> partes iguais, <strong>menor</strong> é cada pedaço: 1/10 de uma pizza é menor que 1/2 da mesma pizza."
            ],
            "cards": [
              {
                "icon": "🍕",
                "t": "1/5",
                "d": "um quinto"
              },
              {
                "icon": "🍕",
                "t": "1/6",
                "d": "um sexto"
              },
              {
                "icon": "🍕",
                "t": "1/7",
                "d": "um sétimo"
              },
              {
                "icon": "🍕",
                "t": "1/8",
                "d": "um oitavo"
              },
              {
                "icon": "🍕",
                "t": "1/9",
                "d": "um nono"
              },
              {
                "icon": "🍕",
                "t": "1/10",
                "d": "um décimo"
              }
            ]
          },
          {
            "h": "Frações de quantidade",
            "figure": {
              "src": "assets/4b/mat14-fracao-de-quantidade.svg",
              "alt": "Metade de 8 morangos: 8 morangos repartidos em 2 grupos de 4, 8 ÷ 2 = 4. Um quarto de 12 picolés: 12 picolés em 4 grupos de 3, 12 ÷ 4 = 3.",
              "tipo": "diagrama"
            },
            "p": [
              "Para achar a fração de uma quantidade, <strong>dividimos</strong> a quantidade pelo <strong>denominador</strong>.",
              "Cecília tinha 8 morangos e deu metade ao irmão: <strong>1/2 de 8 = 8 ÷ 2 = 4</strong>.",
              "1/3 de 9 bolas = 9 ÷ 3 = <strong>3</strong>. 1/4 de 12 picolés = 12 ÷ 4 = <strong>3</strong>. 1/8 de 16 chaves = 16 ÷ 8 = <strong>2</strong>.",
              "Mais exemplos do livro: 1/2 de 50 carrinhos = 25; 1/4 de 20 bombons = 5; 1/5 de 35 laranjas = 7; 1/7 de 63 pirulitos = 9; 1/9 de 54 bolas = 6."
            ]
          },
          {
            "h": "Resolvendo problemas com frações unitárias",
            "p": [
              "Plínio dividiu uma torta de limão em <strong>8 pedaços iguais</strong>. A metade da torta são <strong>4 pedaços</strong> (8 ÷ 2); um quarto são <strong>2 pedaços</strong> (8 ÷ 4). Se ele comeu 1 pedaço, comeu <strong>1/8</strong> da torta.",
              "João dividiu um bolo em <strong>10 pedaços</strong>. A família comeu 2 + 1 + 3 + 1 + 2 = <strong>9 pedaços</strong>. Restou 1 pedaço: <strong>1/10</strong> do bolo.",
              "Ricardo tem <strong>18 carrinhos</strong>. Metade é azul: 18 ÷ 2 = <strong>9</strong>. Um sexto é verde: 18 ÷ 6 = <strong>3</strong> (o mesmo para os vermelhos e os amarelos). 9 + 3 + 3 + 3 = 18.",
              "Na pesquisa da professora Gabriela, votaram 15 + 30 + 5 + 8 + 2 = <strong>60 alunos</strong>. Pão de queijo teve 30 votos (<strong>metade</strong>, pois 60 ÷ 2 = 30) e churrasco teve 15 (<strong>um quarto</strong>, pois 60 ÷ 4 = 15).",
              "“Metade das batatas ficou crua” <strong>não</strong> quer dizer que nenhuma ficou cozida: a outra metade ficou cozida. E “1/2 da lata de leite condensado” é a metade da lata."
            ]
          }
        ],
        "games": [
          {
            "type": "memory",
            "title": "Jogo da memória das frações unitárias",
            "short": "Memória das frações",
            "instructions": "Ache cada fração e o jeito de ler.",
            "items": [
              {
                "base": "1/2",
                "result": "um meio"
              },
              {
                "base": "1/3",
                "result": "um terço"
              },
              {
                "base": "1/4",
                "result": "um quarto"
              },
              {
                "base": "1/5",
                "result": "um quinto"
              },
              {
                "base": "1/8",
                "result": "um oitavo"
              },
              {
                "base": "1/10",
                "result": "um décimo"
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Repartir em grupos iguais",
            "short": "Fração de quantidade",
            "instructions": "Reparta a quantidade em grupos iguais. Quantos ficam em cada grupo?",
            "pairs": [
              [
                "Metade de 8 morangos: 8 ÷ 2",
                "4"
              ],
              [
                "Terça parte de 9 bolas: 9 ÷ 3",
                "3"
              ],
              [
                "Oitava parte de 16 chaves: 16 ÷ 8",
                "2"
              ],
              [
                "Metade de 12 vasos: 12 ÷ 2",
                "6"
              ],
              [
                "Quarta parte de 20 bombons: 20 ÷ 4",
                "5"
              ],
              [
                "Quinta parte de 35 laranjas: 35 ÷ 5",
                "7"
              ],
              [
                "Terça parte de 24 bolinhas: 24 ÷ 3",
                "8"
              ]
            ]
          },
          {
            "type": "sort",
            "title": "Que fração é essa?",
            "short": "Meio, terço ou quarto",
            "instructions": "Leia a situação. Que fração do todo foi pega?",
            "categories": [
              "Um meio (1/2)",
              "Um terço (1/3)",
              "Um quarto (1/4)"
            ],
            "items": [
              {
                "text": "Jair dividiu um sanduíche igualmente com Estela. Com quanto Jair ficou?",
                "cat": 0
              },
              {
                "text": "Uma pizza foi dividida em 4 pedaços iguais. Tiraram 1 pedaço.",
                "cat": 2
              },
              {
                "text": "Um bolo foi dividido em 3 partes iguais. Ana comeu 1 parte.",
                "cat": 1
              },
              {
                "text": "Dobrei a folha ao meio duas vezes e pintei 1 das partes.",
                "cat": 2
              },
              {
                "text": "Uma torta de 8 pedaços iguais: Plínio separou 4 pedaços.",
                "cat": 0
              },
              {
                "text": "Uma torta de 8 pedaços iguais: Plínio separou 2 pedaços.",
                "cat": 2
              },
              {
                "text": "Uma barra de 3 pedaços iguais: Lia comeu 1 pedaço.",
                "cat": 1
              },
              {
                "text": "Metade das batatas ficou crua. Que fração ficou crua?",
                "cat": 0
              }
            ]
          },
          {
            "type": "pairs",
            "title": "Problemas de frações",
            "short": "Problemas",
            "instructions": "Leia o problema e escolha a resposta.",
            "pairs": [
              [
                "Ricardo tem 18 carrinhos. Metade é azul. Quantos são azuis?",
                "9 carrinhos"
              ],
              [
                "Um sexto dos 18 carrinhos de Ricardo é verde. Quantos são verdes?",
                "3 carrinhos"
              ],
              [
                "A torta de Plínio tem 8 pedaços iguais. Quantos pedaços são um quarto da torta?",
                "2 pedaços"
              ],
              [
                "O bolo tinha 10 pedaços iguais e a família comeu 9. Que fração restou?",
                "um décimo do bolo"
              ],
              [
                "60 alunos votaram. Um quarto escolheu churrasco. Quantos alunos?",
                "15 alunos"
              ],
              [
                "O cozinheiro gastou 68 reais. No outro dia, gastou metade disso. Quanto?",
                "34 reais"
              ]
            ]
          }
        ],
        "quiz": [
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-sexto.svg",
            "imageAlt": "Círculo dividido em 6 partes iguais, com 1 parte pintada de laranja.",
            "q": "Qual fração representa a parte colorida desta figura?",
            "options": [
              "1/6",
              "1/8",
              "1/7",
              "1/2"
            ],
            "answer": 0,
            "explain": "O círculo foi dividido em 6 partes iguais e 1 está colorida: 1/6, um sexto."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-chocolate.svg",
            "imageAlt": "Barra de chocolate com 3 fileiras de 3 pedaços retangulares iguais, 9 pedaços no total.",
            "q": "Giulia ganhou esta barra de chocolate. Que fração da barra representa cada pedaço?",
            "options": [
              "1/9",
              "1/3",
              "1/10",
              "1/8"
            ],
            "answer": 0,
            "explain": "A barra tem 3 × 3 = 9 pedaços iguais. Cada pedaço é 1/9, um nono."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-oitavo.svg",
            "imageAlt": "Retângulo dividido em 8 partes iguais, com 1 parte pintada de roxo.",
            "q": "Como se lê a fração que representa a parte pintada?",
            "options": [
              "um oitavo",
              "um sétimo",
              "um sexto",
              "um décimo"
            ],
            "answer": 0,
            "explain": "8 partes iguais, 1 pintada: 1/8, que se lê um oitavo."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-terco.svg",
            "imageAlt": "Retângulo dividido em 3 partes iguais, com 1 parte pintada de amarelo.",
            "q": "Que parte do retângulo foi pintada de amarelo?",
            "options": [
              "A terça parte",
              "A metade",
              "A quarta parte",
              "A quinta parte"
            ],
            "answer": 0,
            "explain": "3 partes iguais, 1 pintada: a terça parte, ou um terço (1/3)."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-quinto.svg",
            "imageAlt": "Círculo dividido em 5 partes iguais, com 1 parte pintada de verde.",
            "q": "Qual fração representa a parte verde?",
            "options": [
              "1/5",
              "1/4",
              "1/6",
              "1/3"
            ],
            "answer": 0,
            "explain": "5 partes iguais, 1 verde: 1/5, um quinto."
          },
          {
            "type": "mc",
            "q": "Na fração 1/4, o número 4 é o denominador. O que ele indica?",
            "options": [
              "Em quantas partes iguais o todo foi dividido",
              "Quantas partes foram pintadas",
              "Quantas figuras existem",
              "Quantas partes sobraram"
            ],
            "answer": 0,
            "explain": "O denominador (número de baixo) indica o total de partes iguais. O numerador (de cima) indica as partes pintadas."
          },
          {
            "type": "mc",
            "q": "Uma pizza foi dividida em 2 pedaços iguais e outra pizza igual, em 10 pedaços iguais. Qual pedaço é maior?",
            "options": [
              "1/2 da pizza",
              "1/10 da pizza",
              "Os dois são iguais",
              "Não dá para saber"
            ],
            "answer": 0,
            "explain": "Quanto mais partes iguais, menor é cada pedaço. Por isso 1/2 é maior que 1/10."
          },
          {
            "type": "mc",
            "context": "Cecília tinha 8 morangos. Ela disse ao irmão: “Vou dar metade dessa quantidade de morangos para você”.",
            "q": "Quantos morangos Cecília deu ao irmão?",
            "options": [
              "4 morangos",
              "2 morangos",
              "6 morangos",
              "8 morangos"
            ],
            "answer": 0,
            "explain": "1/2 de 8 = 8 ÷ 2 = 4."
          },
          {
            "type": "text",
            "q": "Calcule: 1/3 de 27 copos é igual a quantos copos? Escreva só o número.",
            "answers": [
              "9",
              "9 copos",
              "nove"
            ],
            "explain": "1/3 de 27 = 27 ÷ 3 = 9."
          },
          {
            "type": "mc",
            "q": "Quanto é 1/5 de 35 laranjas?",
            "options": [
              "7 laranjas",
              "5 laranjas",
              "30 laranjas",
              "40 laranjas"
            ],
            "answer": 0,
            "explain": "1/5 de 35 = 35 ÷ 5 = 7."
          },
          {
            "type": "text",
            "q": "Quanto é 1/4 de 12 picolés? Escreva só o número.",
            "answers": [
              "3",
              "3 picolés",
              "três"
            ],
            "explain": "1/4 de 12 = 12 ÷ 4 = 3."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-torta.svg",
            "imageAlt": "Torta de limão redonda dividida em 8 pedaços iguais.",
            "q": "Plínio dividiu igualmente esta torta de limão em 8 pedaços. Quantos pedaços correspondem à metade da torta?",
            "options": [
              "4 pedaços",
              "2 pedaços",
              "8 pedaços",
              "6 pedaços"
            ],
            "answer": 0,
            "explain": "Metade de 8 = 8 ÷ 2 = 4 pedaços."
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-torta.svg",
            "imageAlt": "Torta de limão redonda dividida em 8 pedaços iguais.",
            "q": "Plínio comeu um pedaço desta torta, dividida em 8 pedaços iguais. Que fração da torta ele comeu?",
            "options": [
              "1/8",
              "1/2",
              "1/4",
              "1/6"
            ],
            "answer": 0,
            "explain": "1 pedaço de 8 pedaços iguais: 1/8, um oitavo."
          },
          {
            "type": "mc",
            "context": "João dividiu o bolo em 10 pedaços iguais. O avô comeu 2 pedaços, o pai comeu 1, o irmão comeu 3, João comeu 1 e a mãe comeu 2 pedaços.",
            "q": "Que fração do bolo restou?",
            "options": [
              "1/10",
              "1/9",
              "1/2",
              "1/5"
            ],
            "answer": 0,
            "explain": "2 + 1 + 3 + 1 + 2 = 9 pedaços comidos. Restou 1 de 10: 1/10."
          },
          {
            "type": "mc",
            "context": "Ricardo tem uma coleção de 18 carrinhos. Metade desses carrinhos são azuis, um sexto é verde, um sexto é vermelho e um sexto é amarelo.",
            "q": "Quantos carrinhos de Ricardo são verdes?",
            "options": [
              "3 carrinhos",
              "9 carrinhos",
              "6 carrinhos",
              "2 carrinhos"
            ],
            "answer": 0,
            "explain": "1/6 de 18 = 18 ÷ 6 = 3."
          },
          {
            "type": "mc",
            "context": "Na cozinha, a mulher pergunta: “As batatas ficaram boas?”. O homem responde: “Não, metade das batatas ficou crua”.",
            "q": "O que o homem quis dizer?",
            "options": [
              "Metade das batatas ficou cozida",
              "Nenhuma batata ficou cozida",
              "Todas as batatas ficaram cruas",
              "Só uma batata ficou crua"
            ],
            "answer": 0,
            "explain": "Se metade ficou crua, a outra metade ficou cozida."
          },
          {
            "type": "mc",
            "context": "A menina ganhou 1 sanduíche cortado em 2 metades. Pedro ganhou 1 sanduíche igual, cortado em 4 quartos. Ela reclamou: “Por que Pedro ganhou 4 sanduíches e eu ganhei só 2?”.",
            "q": "A menina tem razão de reclamar?",
            "options": [
              "Não, os dois ganharam um sanduíche inteiro",
              "Sim, Pedro ganhou mais sanduíche",
              "Sim, ela ganhou o dobro",
              "Não, ela ganhou mais que Pedro"
            ],
            "answer": 0,
            "explain": "2 metades formam 1 sanduíche inteiro, e 4 quartos também. Os dois ganharam a mesma quantidade."
          },
          {
            "type": "mc",
            "context": "Pesquisa da professora Gabriela com os alunos do 3º ano (cada aluno votou em uma comida típica): churrasco 15, pão de queijo 30, tapioca 5, açaí 8, arroz com pequi 2. Ao todo, votaram 60 alunos.",
            "q": "Em qual comida típica votou metade dos alunos?",
            "options": [
              "Pão de queijo",
              "Churrasco",
              "Açaí",
              "Tapioca"
            ],
            "answer": 0,
            "explain": "Metade de 60 = 60 ÷ 2 = 30, e pão de queijo teve 30 votos. Churrasco teve 15, que é um quarto de 60."
          },
          {
            "type": "mc",
            "q": "O que quer dizer “1/2 da lata de leite condensado” em uma receita?",
            "options": [
              "Metade da lata",
              "Duas latas",
              "Uma lata inteira",
              "Um quarto da lata"
            ],
            "answer": 0,
            "explain": "1/2 é um meio: a lata dividida em 2 partes iguais, usando 1 parte."
          }
        ]
      },
      {
        "id": "sim_matematica",
        "module": "★",
        "title": "Simulado da prova",
        "subtitle": "Resumo final + 15 questões sorteadas de todos os módulos",
        "exam": {
          "size": 15
        },
        "theory": [
          {
            "h": "Resumo da prova de Matemática",
            "p": [
              "<strong>Módulo 13 – Medidas:</strong> balança mede massa; copo de medidas mede capacidade; régua e fita métrica medem comprimento. 1 t = 1 000 kg; 1 kg = 1 000 g (meio quilograma = 500 g); 1 g = 1 000 mg. 1 L = 1 000 mL. 1 km = 1 000 m; 1 m = 100 cm; 1 cm = 10 mm. Nas feiras, há unidades padronizadas (kg, g) e não padronizadas (dúzia, maço, bacia).",
              "<strong>Módulo 14 – Frações:</strong> numerador (em cima) = partes pintadas; denominador (embaixo) = total de partes iguais. Frações unitárias: 1/2 um meio, 1/3 um terço, 1/4 um quarto, 1/5 um quinto, 1/6 um sexto, 1/7 um sétimo, 1/8 um oitavo, 1/9 um nono, 1/10 um décimo. Para achar a fração de uma quantidade, divida pelo denominador: 1/2 de 8 = 8 ÷ 2 = 4.",
              "<strong>As quatro operações nos problemas:</strong> some para juntar (4 000 kg + 980 kg), subtraia para achar a diferença (38 kg − 23 kg), multiplique para repetir (70 km × 2 × 5) e divida para repartir ou comparar preços (24 reais ÷ 3 L = 8 reais o litro)."
            ],
            "cards": [
              {
                "icon": "⚖️",
                "t": "1 kg",
                "d": "1 000 g"
              },
              {
                "icon": "🥛",
                "t": "1 L",
                "d": "1 000 mL"
              },
              {
                "icon": "🚪",
                "t": "1 m",
                "d": "100 cm"
              },
              {
                "icon": "📏",
                "t": "1 cm",
                "d": "10 mm"
              },
              {
                "icon": "🛣️",
                "t": "1 km",
                "d": "1 000 m"
              },
              {
                "icon": "🚚",
                "t": "1 t",
                "d": "1 000 kg"
              },
              {
                "icon": "⬆️",
                "t": "numerador",
                "d": "partes pintadas"
              },
              {
                "icon": "⬇️",
                "t": "denominador",
                "d": "partes iguais"
              },
              {
                "icon": "➗",
                "t": "1/4 de 12",
                "d": "12 ÷ 4 = 3"
              }
            ]
          }
        ],
        "games": [],
        "quiz": [
          {
            "type": "mc",
            "q": "Qual instrumento o cozinheiro deve usar para medir a quantidade de leite de uma receita de bolo?",
            "options": [
              "Copo de medidas",
              "Régua",
              "Fita métrica",
              "Relógio"
            ],
            "answer": 0,
            "explain": "O copo de medidas mede capacidade, isto é, a quantidade de líquido.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "1 quilograma equivale a:",
            "options": [
              "1 000 gramas",
              "100 gramas",
              "10 gramas",
              "500 gramas"
            ],
            "answer": 0,
            "explain": "1 kg = 1 000 g. Meio quilograma é que corresponde a 500 g.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Na casa de Giovana, é consumido meio quilograma de feijão por dia. Atenção: meio quilograma corresponde a 500 gramas.",
            "q": "Quantos gramas de feijão são consumidos de segunda a sexta-feira?",
            "options": [
              "2 500 g",
              "500 g",
              "1 000 g",
              "3 500 g"
            ],
            "answer": 0,
            "explain": "De segunda a sexta são 5 dias: 5 × 500 = 2 500 g.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Na balança do aeroporto, um senhor colocou uma mala vermelha: o visor mostrou 23 kg. Depois, colocou a mala preta em cima da vermelha: o visor mostrou 38 kg.",
            "q": "Qual é a massa da mala preta?",
            "options": [
              "15 kg",
              "23 kg",
              "38 kg",
              "61 kg"
            ],
            "answer": 0,
            "explain": "A mala preta é a diferença: 38 − 23 = 15 kg (ou 15 000 g).",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "1 grama equivale a:",
            "options": [
              "1 000 miligramas",
              "100 miligramas",
              "10 miligramas",
              "1 miligrama"
            ],
            "answer": 0,
            "explain": "1 g = 1 000 mg. O miligrama aparece nos rótulos dos alimentos, como o do iogurte.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "text",
            "q": "Uma beterraba pesa 70 g. Quantos miligramas (mg) ela pesa? Escreva só o número.",
            "answers": [
              "70000",
              "70 000",
              "70.000",
              "70000 mg",
              "70 000 mg"
            ],
            "explain": "Cada grama tem 1 000 mg: 70 × 1 000 = 70 000 mg.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "José trabalha com uma empilhadeira. Na foto, há 10 caixas sobre a empilhadeira, e a massa de cada caixa é 100 quilogramas.",
            "q": "Quanto José está levando de uma só vez?",
            "options": [
              "1 000 kg, ou seja, 1 tonelada",
              "100 kg, ou seja, 1 tonelada",
              "10 kg, ou seja, 1 tonelada",
              "1 000 g, ou seja, 1 tonelada"
            ],
            "answer": 0,
            "explain": "10 × 100 = 1 000 kg. E 1 tonelada = 1 000 kg.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Um agricultor colheu 4 toneladas de soja e 980 quilogramas de milho. Lembre: 1 tonelada = 1 000 quilogramas.",
            "q": "Quantos quilogramas de grãos esse agricultor colheu ao todo?",
            "options": [
              "4 980 kg",
              "984 kg",
              "1 380 kg",
              "4 098 kg"
            ],
            "answer": 0,
            "explain": "4 t = 4 000 kg. Então 4 000 + 980 = 4 980 kg.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "1 litro equivale a:",
            "options": [
              "1 000 mililitros",
              "100 mililitros",
              "250 mililitros",
              "500 mililitros"
            ],
            "answer": 0,
            "explain": "1 L = 1 000 mL.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Júlio fez 1 L de suco de laranja e colocou em 1 jarra. Depois, encheu 3 copos iguais com 250 mL de suco de laranja em cada um.",
            "q": "Quantos mililitros de suco sobraram na jarra?",
            "options": [
              "250 mL",
              "750 mL",
              "500 mL",
              "1 000 mL"
            ],
            "answer": 0,
            "explain": "3 × 250 = 750 mL nos copos. 1 000 − 750 = 250 mL na jarra.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat13-jarra-300.svg",
            "imageAlt": "Jarra de 1 litro graduada de 100 em 100 mililitros, com líquido até a marca de 300 mL.",
            "q": "A jarra tem 300 mL de suco. Quantos mililitros faltam para completar 1 litro?",
            "options": [
              "700 mL",
              "300 mL",
              "600 mL",
              "1 000 mL"
            ],
            "answer": 0,
            "explain": "1 L = 1 000 mL. 1 000 − 300 = 700 mL.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Vera foi ao mercado com o pai comprar amaciante. A embalagem da esquerda tem 3 L e custa 24 reais. A embalagem da direita tem 2 L e custa 12 reais.",
            "q": "Considerando o preço de 1 litro, qual embalagem é mais vantajosa?",
            "options": [
              "A da direita: 6 reais o litro",
              "A da esquerda: 8 reais o litro",
              "A da esquerda: 6 reais o litro",
              "A da direita: 8 reais o litro"
            ],
            "answer": 0,
            "explain": "24 ÷ 3 = 8 reais por litro; 12 ÷ 2 = 6 reais por litro. A de 2 L sai mais barata.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "80 mm equivalem a:",
            "options": [
              "8 cm",
              "80 cm",
              "800 cm",
              "8 m"
            ],
            "answer": 0,
            "explain": "1 cm = 10 mm. 80 ÷ 10 = 8 cm.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "700 cm equivalem a:",
            "options": [
              "7 m",
              "70 m",
              "700 m",
              "7 km"
            ],
            "answer": 0,
            "explain": "1 m = 100 cm. 700 ÷ 100 = 7 m.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "text",
            "q": "Complete: 3 m são equivalentes a quantos centímetros? Escreva só o número.",
            "answers": [
              "300",
              "300 cm"
            ],
            "explain": "1 m = 100 cm. 3 × 100 = 300 cm.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "Qual unidade é a mais adequada para medir a altura de uma parede?",
            "options": [
              "Metro",
              "Litro",
              "Quilograma",
              "Miligrama"
            ],
            "answer": 0,
            "explain": "Altura é comprimento. Para coisas grandes, usamos o metro.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "q": "Qual medida mais se aproxima da altura real de uma porta?",
            "options": [
              "2 m",
              "2 cm",
              "2 mm",
              "2 km"
            ],
            "answer": 0,
            "explain": "Uma porta tem cerca de 2 metros, isto é, 200 cm.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Luciana mora na cidade de Santos e trabalha na capital, a cerca de 70 quilômetros. De segunda a sexta-feira, ela faz o trajeto de ida e volta.",
            "q": "Quantos quilômetros, aproximadamente, Luciana percorre de segunda a sexta-feira?",
            "options": [
              "700 km",
              "140 km",
              "350 km",
              "70 km"
            ],
            "answer": 0,
            "explain": "Ida e volta: 70 × 2 = 140 km por dia. Em 5 dias: 140 × 5 = 700 km.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Um artista de circo tem 176 cm de altura. Com as pernas-de-pau, ele fica com 191 cm de altura.",
            "q": "Qual é o comprimento de cada perna-de-pau?",
            "options": [
              "15 cm",
              "15 m",
              "15 mm",
              "25 cm"
            ],
            "answer": 0,
            "explain": "191 − 176 = 15 cm.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Receita de mousse de Teresa (o chocolate caiu sobre algumas palavras): “230 ___ de chocolate meio amargo; 350 ___ de creme de leite fresco gelado. Coloque em uma forma de 30 ___ de comprimento e leve ao congelador.”",
            "q": "Quais unidades completam a receita, na ordem em que aparecem?",
            "options": [
              "gramas, mililitros, centímetros",
              "quilogramas, litros, centímetros",
              "litros, metros, quilogramas",
              "gramas, quilogramas, litros"
            ],
            "answer": 0,
            "explain": "Chocolate se mede em gramas, creme de leite (líquido) em mililitros e o comprimento da forma em centímetros.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Pedro vai cercar a horta retangular da chácara. Os lados da horta medem 30 m, 17 m, 30 m e 17 m.",
            "q": "De quantos metros de arame Pedro vai precisar para dar uma volta na horta?",
            "options": [
              "94 m",
              "47 m",
              "64 m",
              "510 m"
            ],
            "answer": 0,
            "explain": "Somamos todos os lados: 30 + 17 + 30 + 17 = 94 m.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Supermercado Preço Bom: tomate, 1 kg por 4 reais. Supermercado Preço Justo: tomate, 2 kg por 7 reais.",
            "q": "Para comprar 2 kg de tomate, qual supermercado é mais vantajoso?",
            "options": [
              "Preço Justo: 7 reais",
              "Preço Bom: 7 reais",
              "Preço Bom: 8 reais",
              "Preço Justo: 8 reais"
            ],
            "answer": 0,
            "explain": "No Preço Bom, 2 kg custam 2 × 4 = 8 reais. No Preço Justo, custam 7 reais.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Para fazer 1 copo de suco de graviola de 250 mL, Gregório usou 2 graviolas.",
            "q": "Quantos litros de suco Gregório pode fazer com 8 graviolas?",
            "options": [
              "1 litro",
              "2 litros",
              "4 litros",
              "8 litros"
            ],
            "answer": 0,
            "explain": "8 ÷ 2 = 4 copos. 4 × 250 = 1 000 mL = 1 litro.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "context": "Nas feiras livres, os comerciantes usam balanças e unidades padronizadas, como o quilograma. Também usam unidades não padronizadas para vender frutas, legumes e verduras.",
            "q": "Qual destas é uma unidade não padronizada usada nas feiras?",
            "options": [
              "Dúzia",
              "Quilograma",
              "Metro",
              "Litro"
            ],
            "answer": 0,
            "explain": "Dúzia e maço não são unidades padronizadas; quilograma, metro e litro são.",
            "from": "Medidas de massa, de capacidade e de comprimento"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-sexto.svg",
            "imageAlt": "Círculo dividido em 6 partes iguais, com 1 parte pintada de laranja.",
            "q": "Qual fração representa a parte colorida desta figura?",
            "options": [
              "1/6",
              "1/8",
              "1/7",
              "1/2"
            ],
            "answer": 0,
            "explain": "O círculo foi dividido em 6 partes iguais e 1 está colorida: 1/6, um sexto.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-chocolate.svg",
            "imageAlt": "Barra de chocolate com 3 fileiras de 3 pedaços retangulares iguais, 9 pedaços no total.",
            "q": "Giulia ganhou esta barra de chocolate. Que fração da barra representa cada pedaço?",
            "options": [
              "1/9",
              "1/3",
              "1/10",
              "1/8"
            ],
            "answer": 0,
            "explain": "A barra tem 3 × 3 = 9 pedaços iguais. Cada pedaço é 1/9, um nono.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-oitavo.svg",
            "imageAlt": "Retângulo dividido em 8 partes iguais, com 1 parte pintada de roxo.",
            "q": "Como se lê a fração que representa a parte pintada?",
            "options": [
              "um oitavo",
              "um sétimo",
              "um sexto",
              "um décimo"
            ],
            "answer": 0,
            "explain": "8 partes iguais, 1 pintada: 1/8, que se lê um oitavo.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-terco.svg",
            "imageAlt": "Retângulo dividido em 3 partes iguais, com 1 parte pintada de amarelo.",
            "q": "Que parte do retângulo foi pintada de amarelo?",
            "options": [
              "A terça parte",
              "A metade",
              "A quarta parte",
              "A quinta parte"
            ],
            "answer": 0,
            "explain": "3 partes iguais, 1 pintada: a terça parte, ou um terço (1/3).",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-quinto.svg",
            "imageAlt": "Círculo dividido em 5 partes iguais, com 1 parte pintada de verde.",
            "q": "Qual fração representa a parte verde?",
            "options": [
              "1/5",
              "1/4",
              "1/6",
              "1/3"
            ],
            "answer": 0,
            "explain": "5 partes iguais, 1 verde: 1/5, um quinto.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "q": "Na fração 1/4, o número 4 é o denominador. O que ele indica?",
            "options": [
              "Em quantas partes iguais o todo foi dividido",
              "Quantas partes foram pintadas",
              "Quantas figuras existem",
              "Quantas partes sobraram"
            ],
            "answer": 0,
            "explain": "O denominador (número de baixo) indica o total de partes iguais. O numerador (de cima) indica as partes pintadas.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "q": "Uma pizza foi dividida em 2 pedaços iguais e outra pizza igual, em 10 pedaços iguais. Qual pedaço é maior?",
            "options": [
              "1/2 da pizza",
              "1/10 da pizza",
              "Os dois são iguais",
              "Não dá para saber"
            ],
            "answer": 0,
            "explain": "Quanto mais partes iguais, menor é cada pedaço. Por isso 1/2 é maior que 1/10.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "Cecília tinha 8 morangos. Ela disse ao irmão: “Vou dar metade dessa quantidade de morangos para você”.",
            "q": "Quantos morangos Cecília deu ao irmão?",
            "options": [
              "4 morangos",
              "2 morangos",
              "6 morangos",
              "8 morangos"
            ],
            "answer": 0,
            "explain": "1/2 de 8 = 8 ÷ 2 = 4.",
            "from": "Frações"
          },
          {
            "type": "text",
            "q": "Calcule: 1/3 de 27 copos é igual a quantos copos? Escreva só o número.",
            "answers": [
              "9",
              "9 copos",
              "nove"
            ],
            "explain": "1/3 de 27 = 27 ÷ 3 = 9.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "q": "Quanto é 1/5 de 35 laranjas?",
            "options": [
              "7 laranjas",
              "5 laranjas",
              "30 laranjas",
              "40 laranjas"
            ],
            "answer": 0,
            "explain": "1/5 de 35 = 35 ÷ 5 = 7.",
            "from": "Frações"
          },
          {
            "type": "text",
            "q": "Quanto é 1/4 de 12 picolés? Escreva só o número.",
            "answers": [
              "3",
              "3 picolés",
              "três"
            ],
            "explain": "1/4 de 12 = 12 ÷ 4 = 3.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-torta.svg",
            "imageAlt": "Torta de limão redonda dividida em 8 pedaços iguais.",
            "q": "Plínio dividiu igualmente esta torta de limão em 8 pedaços. Quantos pedaços correspondem à metade da torta?",
            "options": [
              "4 pedaços",
              "2 pedaços",
              "8 pedaços",
              "6 pedaços"
            ],
            "answer": 0,
            "explain": "Metade de 8 = 8 ÷ 2 = 4 pedaços.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "image": "assets/4b/mat14-q-torta.svg",
            "imageAlt": "Torta de limão redonda dividida em 8 pedaços iguais.",
            "q": "Plínio comeu um pedaço desta torta, dividida em 8 pedaços iguais. Que fração da torta ele comeu?",
            "options": [
              "1/8",
              "1/2",
              "1/4",
              "1/6"
            ],
            "answer": 0,
            "explain": "1 pedaço de 8 pedaços iguais: 1/8, um oitavo.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "João dividiu o bolo em 10 pedaços iguais. O avô comeu 2 pedaços, o pai comeu 1, o irmão comeu 3, João comeu 1 e a mãe comeu 2 pedaços.",
            "q": "Que fração do bolo restou?",
            "options": [
              "1/10",
              "1/9",
              "1/2",
              "1/5"
            ],
            "answer": 0,
            "explain": "2 + 1 + 3 + 1 + 2 = 9 pedaços comidos. Restou 1 de 10: 1/10.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "Ricardo tem uma coleção de 18 carrinhos. Metade desses carrinhos são azuis, um sexto é verde, um sexto é vermelho e um sexto é amarelo.",
            "q": "Quantos carrinhos de Ricardo são verdes?",
            "options": [
              "3 carrinhos",
              "9 carrinhos",
              "6 carrinhos",
              "2 carrinhos"
            ],
            "answer": 0,
            "explain": "1/6 de 18 = 18 ÷ 6 = 3.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "Na cozinha, a mulher pergunta: “As batatas ficaram boas?”. O homem responde: “Não, metade das batatas ficou crua”.",
            "q": "O que o homem quis dizer?",
            "options": [
              "Metade das batatas ficou cozida",
              "Nenhuma batata ficou cozida",
              "Todas as batatas ficaram cruas",
              "Só uma batata ficou crua"
            ],
            "answer": 0,
            "explain": "Se metade ficou crua, a outra metade ficou cozida.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "A menina ganhou 1 sanduíche cortado em 2 metades. Pedro ganhou 1 sanduíche igual, cortado em 4 quartos. Ela reclamou: “Por que Pedro ganhou 4 sanduíches e eu ganhei só 2?”.",
            "q": "A menina tem razão de reclamar?",
            "options": [
              "Não, os dois ganharam um sanduíche inteiro",
              "Sim, Pedro ganhou mais sanduíche",
              "Sim, ela ganhou o dobro",
              "Não, ela ganhou mais que Pedro"
            ],
            "answer": 0,
            "explain": "2 metades formam 1 sanduíche inteiro, e 4 quartos também. Os dois ganharam a mesma quantidade.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "context": "Pesquisa da professora Gabriela com os alunos do 3º ano (cada aluno votou em uma comida típica): churrasco 15, pão de queijo 30, tapioca 5, açaí 8, arroz com pequi 2. Ao todo, votaram 60 alunos.",
            "q": "Em qual comida típica votou metade dos alunos?",
            "options": [
              "Pão de queijo",
              "Churrasco",
              "Açaí",
              "Tapioca"
            ],
            "answer": 0,
            "explain": "Metade de 60 = 60 ÷ 2 = 30, e pão de queijo teve 30 votos. Churrasco teve 15, que é um quarto de 60.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "q": "O que quer dizer “1/2 da lata de leite condensado” em uma receita?",
            "options": [
              "Metade da lata",
              "Duas latas",
              "Uma lata inteira",
              "Um quarto da lata"
            ],
            "answer": 0,
            "explain": "1/2 é um meio: a lata dividida em 2 partes iguais, usando 1 parte.",
            "from": "Frações"
          },
          {
            "type": "mc",
            "q": "Quantos pacotes de 500 g de milho de pipoca são necessários para formar 1 quilograma?",
            "options": [
              "2 pacotes",
              "5 pacotes",
              "10 pacotes",
              "1 pacote"
            ],
            "answer": 0,
            "explain": "1 kg = 1 000 g. 500 + 500 = 1 000, então são 2 pacotes.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "12 cm equivalem a:",
            "options": [
              "120 mm",
              "12 mm",
              "1 200 mm",
              "102 mm"
            ],
            "answer": 0,
            "explain": "1 cm = 10 mm. 12 × 10 = 120 mm.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "q": "Quanto é 1/7 de 63 pirulitos?",
            "options": [
              "9 pirulitos",
              "7 pirulitos",
              "56 pirulitos",
              "70 pirulitos"
            ],
            "answer": 0,
            "explain": "1/7 de 63 = 63 ÷ 7 = 9.",
            "from": "Simulado"
          },
          {
            "type": "mc",
            "context": "Júlio fez 1 L de suco de uva e colocou em 1 jarra. Em seguida, encheu 4 copos iguais com 200 mL de suco de uva cada um.",
            "q": "Quantos mililitros de suco sobraram na jarra?",
            "options": [
              "200 mL",
              "800 mL",
              "400 mL",
              "600 mL"
            ],
            "answer": 0,
            "explain": "4 × 200 = 800 mL nos copos. 1 000 − 800 = 200 mL na jarra.",
            "from": "Simulado"
          }
        ]
      }
    ]
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
