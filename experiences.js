/* Perfis de experiência: definem como cada conteúdo vira uma ação significativa.
   4º bimestre — só os módulos da lista oficial das provas. Os perfis dos
   bimestres anteriores ficam no histórico do git (content/arquivo/). */
const EXPERIENCE_PROFILES = {
  ing07: [
    { mode:'memoria', goal:'Jogo da memória do corpo', prompt:'Vire duas cartas e ache a palavra e o seu significado.', result:'todos os pares do corpo' },
    { mode:'transform', goal:'Responder com Yes, I did / No, I didn\'t', prompt:'✅ fez · ❌ não fez. Qual é a resposta curta?', result:'painel de respostas' },
    { mode:'choice', goal:'Too much, too many ou enough?', prompt:'Qual expressão completa a frase?', result:'frases completas' },
    { mode:'choice', goal:'Separar bons e maus hábitos', prompt:'Este hábito é bom ou ruim para você?', result:'pôster de hábitos' }
  ],
  ing08: [
    { mode:'explore', goal:'Descobrir as palavras de festa', prompt:'Leia a pista. Qual objeto de festa é esse?', result:'kit de festa' },
    { mode:'memoria', goal:'Memória dos verbos irregulares', prompt:'Ache cada verbo e o seu passado.', result:'todos os pares do passado' },
    { mode:'choice', goal:'Regular ou irregular?', prompt:'Este verbo ganha -ed ou muda de forma?', result:'coleção de verbos' },
    { mode:'choice', goal:'Comparar duas festas de novembro', prompt:'Day of the Dead ou Yi Peng?', result:'mural das festas' }
  ],
  ing09: [
    { mode:'memoria', goal:'Memória do fim de semana', prompt:'Ache cada atividade e o seu significado.', result:'agenda do fim de semana' },
    { mode:'choice', goal:'Went ou didn\'t go?', prompt:'Leia a pista. A pessoa foi ou não foi?', result:'diário do fim de semana' },
    { mode:'explore', goal:'Completar as histórias do fim de semana', prompt:'Qual frase continua a história?', result:'histórias completas' },
    { mode:'choice', goal:'Emocionante ou chato?', prompt:'Como foi esse fim de semana?', result:'mural de fins de semana' }
  ]
};
EXPERIENCE_PROFILES.sim_ingles = [
  { mode:'choice', goal:'Separar as palavras por Unit', prompt:'Em qual Unit esta palavra apareceu?', result:'mapa das Units' },
  { mode:'memoria', goal:'Memória do passado', prompt:'Ache o verbo e o seu passado.', result:'todos os pares' }
];
