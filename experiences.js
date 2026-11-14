/* Perfis de experiência: definem como cada conteúdo vira uma ação significativa.
   4º bimestre — só os módulos da lista oficial das provas. Os perfis dos
   bimestres anteriores ficam no histórico do git (content/arquivo/). */
const EXPERIENCE_PROFILES = {
  ing07: [
    { mode:'memoria', goal:'Jogo da memória do corpo', prompt:'Vire duas cartas e ache a palavra e o seu significado.', result:'todos os pares do corpo' },
    { mode:'transform', goal:'Responder com Yes, I did / No, I didn\'t', prompt:'✅ fez · ❌ não fez. Qual é a resposta curta?', result:'painel de respostas', hint:'Observe a pessoa: you → I, he → he, she → she, they → they. ✅ pede Yes + did; ❌ pede No + didn\'t.', feedback:'A resposta usa a pessoa certa e did ou didn\'t, de acordo com a pista.' },
    { mode:'choice', goal:'Too much, too many ou enough?', prompt:'Qual expressão completa a frase?', result:'frases completas' },
    { mode:'choice', goal:'Separar bons e maus hábitos', prompt:'Este hábito é bom ou ruim para você?', result:'pôster de hábitos' }
  ],
  ing08: [
    { mode:'explore', goal:'Descobrir as palavras de festa', prompt:'Leia a pista. Qual objeto de festa é esse?', result:'kit de festa' },
    { mode:'memoria', goal:'Memória dos verbos irregulares', prompt:'Ache cada verbo e o seu passado.', result:'todos os pares do passado' },
    { mode:'choice', goal:'Regular ou irregular?', prompt:'Este verbo ganha -ed ou muda de forma?', result:'coleção de verbos' },
    { mode:'choice', goal:'Comparar duas festas de novembro', prompt:'Consulte o texto: Day of the Dead ou Yi Peng?', result:'mural das festas' },
    { mode:'explore', goal:'Responder às perguntas sobre a festa', prompt:'Observe o verbo e a pista. Qual resposta completa combina?', result:'relato da festa' }
  ],
  ing09: [
    { mode:'memoria', goal:'Memória do fim de semana', prompt:'Ache cada atividade e o seu significado.', result:'agenda do fim de semana' },
    { mode:'choice', goal:'Went ou didn\'t go?', prompt:'Leia a pista. A pessoa foi ou não foi?', result:'diário do fim de semana' },
    { mode:'explore', goal:'Completar as histórias do fim de semana', prompt:'Qual frase continua a história?', result:'histórias completas' },
    { mode:'choice', goal:'Emocionante ou chato?', prompt:'Como a pessoa descreveu a experiência?', result:'mural de fins de semana' },
    { mode:'explore', goal:'Responder com didn\'t em uma frase completa', prompt:'A pista diz o que não aconteceu. Qual resposta completa combina?', result:'diário do fim de semana' }
  ]
};
EXPERIENCE_PROFILES.sim_ingles = [
  { mode:'explore', goal:'Usar o vocabulário em situações', prompt:'Leia a pista em inglês. Qual expressão combina?', result:'vocabulário em uso' },
  { mode:'memoria', goal:'Memória do passado', prompt:'Ache o verbo e o seu passado.', result:'todos os pares' }
];
Object.assign(EXPERIENCE_PROFILES, {
  lp23: [
    { mode:'choice', goal:'Descobrir de quem é cada coisa', prompt:'A palavra em destaque é de qual pessoa do discurso?', result:'mapa das pessoas do discurso' },
    { mode:'transform', goal:'Completar com o pronome possessivo', prompt:'Qual possessivo completa a frase?', result:'frases completas' },
    { mode:'choice', goal:'Separar poemas em versos e poemas visuais', prompt:'Que tipo de poema é este?', result:'varal de poemas' }
  ],
  lp24: [
    { mode:'choice', goal:'Este, esse ou aquele?', prompt:'Onde está a coisa? Escolha o demonstrativo.', result:'mapa do parque' },
    { mode:'choice', goal:'Reconhecer o texto informativo', prompt:'Isto é característica do texto informativo?', result:'ficha do texto informativo' },
    { mode:'sequence', goal:'Montar a linha do tempo da montanha-russa', prompt:'Qual é a próxima data?', result:'linha do tempo' }
  ],
  lp25: [
    { mode:'choice', goal:'Classificar os verbos', prompt:'Este verbo é ação, estado ou fenômeno da natureza?', result:'coleção de verbos' },
    { mode:'memoria', goal:'Memória dos sinônimos', prompt:'Ache cada palavra e o seu sinônimo.', result:'todos os sinônimos' },
    { mode:'transform', goal:'Virar a palavra do avesso', prompt:'Qual é o contrário desta palavra?', result:'painel de antônimos' }
  ],
  lp26: [
    { mode:'choice', goal:'Máquina do tempo dos verbos', prompt:'Em que tempo está o verbo em destaque?', result:'linha do tempo dos verbos' },
    { mode:'choice', goal:'-am ou -ão?', prompt:'Já aconteceu ou ainda vai acontecer?', result:'frases completas' },
    { mode:'choice', goal:'Verbo ou substantivo?', prompt:'Esta palavra com -ão é nome ou verbo no futuro?', result:'coleção de palavras' }
  ],
  lp27: [
    { mode:'explore', goal:'Achar o sujeito', prompt:'Quem + verbo? Escolha o sujeito.', result:'frases analisadas' },
    { mode:'explore', goal:'Achar o predicado', prompt:'O que se diz sobre o sujeito?', result:'frases completas' },
    { mode:'choice', goal:'Montar a reportagem', prompt:'Que parte da reportagem é esta?', result:'reportagem montada' }
  ],
  lp_generos: [
    { mode:'choice', goal:'Detetive dos gêneros', prompt:'Esta pista é de um poema ou de um conto de mistério?', result:'fichário de gêneros' },
    { mode:'explore', goal:'Desvendar o conto', prompt:'Que parte do conto é esta?', result:'mapa do conto' },
    { mode:'writing' },
    { mode:'writing' }
  ]
});
Object.assign(EXPERIENCE_PROFILES, {
  hist12: [
    { mode:'choice', goal:'Montar o mapa do campo e da cidade', prompt:'Isto é mais comum no campo ou na cidade?', result:'mapa do município' },
    { mode:'choice', goal:'Organizar a feira dos alimentos', prompt:'Este alimento é in natura, processado ou ultraprocessado?', result:'feira organizada' },
    { mode:'choice', goal:'Investigar a migração', prompt:'Isto foi um motivo para ir do campo para a cidade?', result:'quadro da migração' }
  ],
  hist13: [
    { mode:'choice', goal:'Lazer ou trabalho?', prompt:'Esta pessoa está se divertindo ou trabalhando?', result:'painel do lazer' },
    { mode:'choice', goal:'Viajar no tempo do cinema e do circo', prompt:'Isto era de antigamente ou é de hoje?', result:'museu do lazer' },
    { mode:'sequence', goal:'Montar a linha do tempo dos direitos', prompt:'Qual direito veio depois?', result:'linha do tempo' }
  ],
  hist14: [
    { mode:'choice', goal:'Descobrir a origem das festas', prompt:'Quem trouxe ou criou esta festa?', result:'mapa das festas' },
    { mode:'explore', goal:'Viajar pelas festas do Brasil', prompt:'Onde ou quando acontece esta festa?', result:'calendário de festas' },
    { mode:'explore', goal:'Arraial dos santos juninos', prompt:'Em que dia de junho se celebra este santo?', result:'arraial' }
  ]
});
