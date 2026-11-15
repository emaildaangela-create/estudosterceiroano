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
    { mode:'transform', goal:'Combinar o demonstrativo com a palavra', prompt:'A coisa está perto de quem fala. Qual forma combina?', result:'frases completas', feedback:'O demonstrativo concorda com a palavra em gênero e número.', hint:'Veja se a palavra é masculina ou feminina, singular ou plural.' },
    { mode:'choice', goal:'Possessivo ou demonstrativo?', prompt:'A palavra mostra de quem é ou onde está?', result:'coleção de pronomes' }
  ],
  lp25: [
    { mode:'choice', goal:'Classificar os verbos', prompt:'Este verbo é ação, estado ou fenômeno da natureza?', result:'coleção de verbos' },
    { mode:'memoria', goal:'Memória dos sinônimos', prompt:'Ache cada palavra e o seu sinônimo.', result:'todos os sinônimos' },
    { mode:'transform', goal:'Virar a palavra do avesso', prompt:'Qual é o contrário desta palavra?', result:'painel de antônimos' }
  ],
  lp26: [
    { mode:'choice', goal:'Máquina do tempo dos verbos', prompt:'Em que tempo está o verbo em destaque?', result:'linha do tempo dos verbos' },
    { mode:'choice', goal:'-am ou -ão?', prompt:'Já aconteceu ou ainda vai acontecer?', result:'frases completas' },
    { mode:'transform', goal:'Levar a frase para o futuro', prompt:'Como fica a frase no futuro?', result:'frases no futuro', feedback:'No futuro, o verbo termina em -ão (eles) ou -rei (eu).', hint:'Procure a frase que fala do que ainda vai acontecer.' },
    { mode:'choice', goal:'Verbo ou substantivo?', prompt:'Esta palavra com -ão é nome ou verbo no futuro?', result:'coleção de palavras' }
  ],
  lp27: [
    { mode:'explore', goal:'Achar o sujeito', prompt:'Quem + verbo? Escolha o sujeito.', result:'frases analisadas' },
    { mode:'explore', goal:'Achar o predicado', prompt:'O que se diz sobre o sujeito?', result:'frases completas' },
    { mode:'choice', goal:'Conferir a concordância', prompt:'O verbo concorda com o sujeito?', result:'frases revisadas' }
  ],
  lp_generos: [
    { mode:'choice', goal:'Detetive dos gêneros', prompt:'Esta pista é de um poema ou de um conto de mistério?', result:'fichário de gêneros' },
    { mode:'explore', goal:'Desvendar o conto', prompt:'O que aparece no conto para este elemento?', result:'mapa do conto' },
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
    { mode:'choice', goal:'O que é lazer?', prompt:'Esta atividade é descanso e diversão?', result:'painel do lazer' },
    { mode:'choice', goal:'Viajar no tempo do cinema e do circo', prompt:'Isto era de antigamente ou é de hoje?', result:'museu do lazer' }
  ],
  hist14: [
    { mode:'choice', goal:'Descobrir a origem das festas', prompt:'Quem trouxe ou criou esta festa?', result:'mapa das festas' },
    { mode:'explore', goal:'Viajar pelas festas do Brasil', prompt:'Onde acontece ou de onde veio esta festa?', result:'calendário de festas' },
    { mode:'explore', goal:'Arraial dos santos juninos', prompt:'Em que dia de junho se celebra este santo?', result:'arraial' }
  ]
});
Object.assign(EXPERIENCE_PROFILES, {
  mat13: [
    { mode:'choice', goal:'Escolher o instrumento de medida', prompt:'Balança, copo de medidas ou régua?', result:'caixa de instrumentos' },
    { mode:'choice', goal:'Escolher a unidade de massa', prompt:'Miligrama, grama, quilograma ou tonelada?', result:'balança organizada' },
    { mode:'transform', goal:'Trocar a unidade de medida', prompt:'Qual medida vale o mesmo?', result:'tabela de equivalências', feedback:'As duas medidas são iguais: só mudou a unidade.', hint:'Lembre: 1 kg = 1 000 g, 1 L = 1 000 mL, 1 m = 100 cm, 1 cm = 10 mm.' },
    { mode:'choice', goal:'Medidas na feira livre', prompt:'Esta unidade é padronizada ou não padronizada?', result:'barraca da feira' }
  ],
  mat14: [
    { mode:'memoria', goal:'Jogo da memória das frações unitárias', prompt:'Ache cada fração e o jeito de ler.', result:'todos os pares de frações' },
    { mode:'distribute', goal:'Repartir em grupos iguais', prompt:'Quantos ficam em cada grupo?', result:'quantidades repartidas' },
    { mode:'choice', goal:'Meio, terço ou quarto?', prompt:'Que fração do todo foi pega?', result:'mural de frações' },
    { mode:'explore', goal:'Resolver problemas de frações', prompt:'Leia o problema e escolha a resposta.', result:'problemas resolvidos' }
  ]
});
Object.assign(EXPERIENCE_PROFILES, {
  geo13: [
    { mode:'choice', goal:'Base ou bens de consumo?', prompt:'Que tipo de indústria é esta?', result:'mapa das indústrias' },
    { mode:'choice', goal:'Artesanal ou industrial?', prompt:'Como este produto foi feito?', result:'museu da produção' },
    { mode:'choice', goal:'Durável ou não durável?', prompt:'Este produto dura muito ou acaba rápido?', result:'carrinho de compras' },
    { mode:'explore', goal:'Praticar os 5 Rs', prompt:'Qual R do consumo consciente é esta atitude?', result:'cartaz dos 5 Rs' },
    { mode:'explore', goal:'Conhecer os profissionais da indústria', prompt:'O que este profissional faz?', result:'equipe da fábrica' }
  ],
  cie13: [
    { mode:'choice', goal:'Descobrir o uso do solo', prompt:'Que atividade está usando o solo?', result:'mapa dos usos do solo' },
    { mode:'choice', goal:'Tipos de agricultura', prompt:'Subsistência, comercial ou orgânica?', result:'horta organizada' },
    { mode:'explore', goal:'Cuidar do solo', prompt:'Qual cuidado com o solo é este?', result:'manual do bom agricultor' },
    { mode:'choice', goal:'Polui ou protege?', prompt:'Esta atitude polui ou protege o solo?', result:'campanha pelo solo' },
    { mode:'explore', goal:'Da causa à consequência', prompt:'O que acontece por causa disso?', result:'mapa das consequências' }
  ]
});
