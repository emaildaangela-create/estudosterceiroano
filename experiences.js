/* Perfis de experiência: definem como cada conteúdo vira uma ação significativa. */
const EXPERIENCE_PROFILES = {
  lp17: [
    { mode:'cartaz', goal:'Monte o cartaz de lavar as mãos', prompt:'Isto entra no cartaz?', result:'o cartaz' },
    { mode:'maquina', goal:'Transforme as palavras', prompt:'Escolha a palavra que sai da máquina.', result:'a coleção de palavras' },
    { mode:'memoria', goal:'Jogo da memória dos graus', prompt:'Ache as duas cartas que combinam.', result:'todos os pares' }
  ],
  lp18: [
    { mode:'factory', pilot:'factory', scene:'assets/games/piloto-lp18-fabrica.webp', goal:'Criar palavras com -oso e -osa', prompt:'Ligue a fábrica e transforme a expressão em uma nova palavra.', result:'palavras' },
    { mode:'choice', goal:'Separar nomes e características', prompt:'Esta palavra dá nome ou mostra uma característica?', result:'coleções' }
  ],
  lp19: [
    { mode:'origins', pilot:'origins', scene:'assets/games/piloto-lp19-origens.webp', goal:'Descobrir palavras que indicam origem', prompt:'Complete o passaporte de cada lugar.', result:'mapa de origens' },
    { mode:'scenario', goal:'Investigar quem está contando', prompt:'A pessoa fala de si ou de outra pessoa?', result:'arquivo' }
  ],
  lp20: [
    { mode:'builder', goal:'Consertar palavras incompletas', prompt:'Qual letra termina esta palavra?', result:'palavras' },
    { mode:'transform', goal:'Transformar singular em plural', prompt:'Como esta expressão fica no plural?', result:'painel de transformações' }
  ],
  lp21: [
    { mode:'explore', goal:'Escolher o balão que mostra a intenção', prompt:'Qual balão combina com esta situação?', result:'quadrinhos' },
    { mode:'choice', goal:'Organizar os pronomes', prompt:'Em qual grupo este pronome entra?', result:'coleções' }
  ],
  lp22: [
    { mode:'scenario', goal:'Escolher como falar com cada pessoa', prompt:'Com quem usamos esta forma de tratamento?', result:'diálogos' },
    { mode:'choice', goal:'Descobrir as pessoas do discurso', prompt:'Quem esta palavra representa na conversa?', result:'coleções' }
  ],
  mat09: [
    { mode:'outfit', pilot:'outfit', scene:'assets/games/piloto-mat09-maquina.webp', goal:'Acionar a máquina de multiplicação', prompt:'Qual resultado faz a máquina funcionar?', result:'coleção de multiplicações' },
    { mode:'combinations', goal:'Investigar duas ideias da multiplicação', prompt:'A situação combina escolhas ou repete grupos iguais?', result:'painel de estratégias' }
  ],
  mat10: [
    { mode:'clockwork', pilot:'clockwork', scene:'assets/games/piloto-mat10-relogios.webp', goal:'Ajustar o relógio para cada horário', prompt:'Encontre o horário equivalente na oficina.', result:'coleção de relógios' },
    { mode:'choice', goal:'Consertar um painel de tempo', prompt:'Esta conversão está correta?', result:'painel' }
  ],
  mat11: [
    { mode:'distribute', goal:'Repartir quantidades igualmente', prompt:'Quanto fica em cada grupo?', result:'grupos' },
    { mode:'scenario', goal:'Descobrir quando sobra alguma coisa', prompt:'Essa divisão termina sem resto?', result:'divisões' }
  ],
  cie09: [
    { mode:'earth', pilot:'earth', scene:'assets/games/piloto-cie09-terra.webp', goal:'Montar um modelo das camadas da Terra', prompt:'Coloque a descrição na parte correta do laboratório.', result:'modelo da Terra' },
    { mode:'scenario', goal:'Investigar forças que transformam a Terra', prompt:'Essa transformação começa dentro ou fora da Terra?', result:'investigação' }
  ],
  cie10: [
    { mode:'observatory', pilot:'observatory', scene:'assets/games/piloto-cie10-observatorio.webp', goal:'Criar um guia dos corpos celestes', prompt:'Envie cada corpo celeste para a descrição correta.', result:'guia espacial' },
    { mode:'scenario', goal:'Simular os movimentos da Terra', prompt:'Qual movimento produz esse acontecimento?', result:'órbitas' }
  ],
  cie11: [
    { mode:'explore', goal:'Completar um diário de observação da Lua', prompt:'Qual pista combina com esta fase?', result:'diário lunar' },
    { mode:'scenario', goal:'Escolher um lugar para observar estrelas', prompt:'Esta condição ajuda ou atrapalha a observação?', result:'observatório' }
  ],
  geo09: [
    { mode:'municipality', pilot:'municipality', scene:'assets/games/piloto-geo09-municipio.webp', goal:'Montar um município com campo e cidade', prompt:'Leve cada atividade para o lugar onde ela costuma acontecer.', result:'município' },
    { mode:'explore', goal:'Criar um glossário de Geografia', prompt:'Qual explicação combina com este conceito?', result:'glossário' }
  ],
  geo10: [
    { mode:'ruralurban', pilot:'ruralurban', scene:'assets/games/piloto-geo10-campo-cidade.webp', goal:'Comparar modos de vida', prompt:'Leve cada situação para o campo ou para a cidade.', result:'dois cotidianos' },
    { mode:'explore', goal:'Montar um mapa de heranças culturais', prompt:'Qual herança está ligada a este grupo ou lugar?', result:'mapa cultural' }
  ],
  geo11: [
    { mode:'scenario', goal:'Ajudar a cidade a identificar poluições', prompt:'Que tipo de poluição aparece nesta situação?', result:'plano da cidade' },
    { mode:'sequence', goal:'Construir o caminho da água limpa', prompt:'Qual é a próxima etapa do tratamento?', result:'estação de tratamento' }
  ],
  hist09: [
    { mode:'community', pilot:'community', scene:'assets/games/piloto-hist09-comunidade.webp', goal:'Organizar os espaços de uma comunidade', prompt:'Coloque cada espaço no painel público ou privado.', result:'mapa da comunidade' },
    { mode:'explore', goal:'Descobrir a função dos espaços públicos', prompt:'Que função este espaço cumpre?', result:'guia comunitário' }
  ],
  hist10: [
    { mode:'access', pilot:'access', scene:'assets/games/piloto-hist10-acessos.webp', goal:'Decidir como os espaços podem ser usados', prompt:'Entregue a chave de acesso correta para cada lugar.', result:'mapa de acesso' },
    { mode:'explore', goal:'Montar o quadro de responsabilidades', prompt:'Quem realiza esta função no município?', result:'quadro cívico' }
  ],
  hist11: [
    { mode:'scenario', goal:'Participar de um conselho da cidade', prompt:'Isto é um desafio ou uma solução?', result:'plano de melhorias' },
    { mode:'explore', goal:'Investigar palavras usadas para entender a cidade', prompt:'Qual explicação combina com este conceito?', result:'caderno da cidade' }
  ]
};
