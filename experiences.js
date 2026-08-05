/* Perfis de experiência: definem como cada conteúdo vira uma ação significativa. */
const EXPERIENCE_PROFILES = {
  lp17: [
    { mode:'cartaz', goal:'Monte o cartaz de lavar as mãos', prompt:'Isto entra no cartaz?', result:'o cartaz' },
    { mode:'maquina', goal:'Transforme as palavras', prompt:'Escolha a palavra que sai da máquina.', result:'a coleção de palavras' },
    { mode:'memoria', goal:'Jogo da memória dos graus', prompt:'Ache as duas cartas que combinam.', result:'todos os pares' }
  ],
  lp18: [
    { mode:'factory', pilot:'factory', scene:'assets/games/piloto-lp18-fabrica.webp', goal:'Criar palavras com -oso e -osa', prompt:'Ligue a fábrica e transforme a expressão em uma nova palavra.', result:'palavras' },
    { mode:'gramclass', pilot:'gramclass', scene:'assets/games/piloto-lp18-classes.webp', goal:'Separar nomes e características', prompt:'Leve cada palavra para a ala correta do museu.', result:'museu de palavras' }
  ],
  lp19: [
    { mode:'origins', pilot:'origins', scene:'assets/games/piloto-lp19-origens.webp', goal:'Descobrir palavras que indicam origem', prompt:'Complete o passaporte de cada lugar.', result:'mapa de origens' },
    { mode:'scenario', goal:'Investigar quem está contando', prompt:'A pessoa fala de si ou de outra pessoa?', result:'arquivo' }
  ],
  lp20: [
    { mode:'wordrepair', pilot:'wordrepair', scene:'assets/games/piloto-lp20-oficina-sz.webp', goal:'Consertar palavras incompletas', prompt:'Envie cada palavra para a letra que a completa.', result:'palavras consertadas' },
    { mode:'transform', goal:'Transformar singular em plural', prompt:'Como esta expressão fica no plural?', result:'painel de transformações' }
  ],
  lp21: [
    { mode:'comics', pilot:'comics', scene:'assets/games/piloto-lp21-quadrinhos.webp', goal:'Escolher o balão que mostra a intenção', prompt:'Escolha o balão que dá voz à cena.', result:'estúdio de quadrinhos' },
    { mode:'choice', goal:'Organizar os pronomes', prompt:'Em qual grupo este pronome entra?', result:'coleções' }
  ],
  lp22: [
    { mode:'mailroom', pilot:'mailroom', scene:'assets/games/piloto-lp22-correspondencia.webp', goal:'Escolher como falar com cada pessoa', prompt:'Entregue cada forma de tratamento ao destinatário correto.', result:'correspondências' },
    { mode:'choice', goal:'Descobrir as pessoas do discurso', prompt:'Quem esta palavra representa na conversa?', result:'coleções' }
  ],
  mat09: [
    { mode:'outfit', pilot:'outfit', scene:'assets/games/piloto-mat09-maquina.webp', goal:'Acionar a máquina de multiplicação', prompt:'Qual resultado faz a máquina funcionar?', result:'coleção de multiplicações' },
    { mode:'multideas', pilot:'multideas', scene:'assets/games/piloto-mat09-ideias.webp', goal:'Investigar duas ideias da multiplicação', prompt:'Envie a situação para a estratégia que ela representa.', result:'laboratório de multiplicação' }
  ],
  mat10: [
    { mode:'clockwork', pilot:'clockwork', scene:'assets/games/piloto-mat10-relogios.webp', goal:'Ajustar o relógio para cada horário', prompt:'Encontre o horário equivalente na oficina.', result:'coleção de relógios' },
    { mode:'choice', goal:'Consertar um painel de tempo', prompt:'Esta conversão está correta?', result:'painel' }
  ],
  mat11: [
    { mode:'sharing', pilot:'sharing', scene:'assets/games/piloto-mat11-divisao.webp', goal:'Repartir quantidades igualmente', prompt:'Reparta igualmente e escolha quanto fica em cada grupo.', result:'piquenique da divisão' },
    { mode:'scenario', goal:'Descobrir quando sobra alguma coisa', prompt:'Essa divisão termina sem resto?', result:'divisões' }
  ],
  cie09: [
    { mode:'earth', pilot:'earth', scene:'assets/games/piloto-cie09-terra.webp', goal:'Montar um modelo das camadas da Terra', prompt:'Coloque a descrição na parte correta do laboratório.', result:'modelo da Terra' },
    { mode:'landforces', pilot:'landforces', scene:'assets/games/piloto-cie09-agentes.webp', goal:'Investigar forças que transformam a Terra', prompt:'Descubra se a força age de dentro ou de fora da Terra.', result:'laboratório do relevo' }
  ],
  cie10: [
    { mode:'observatory', pilot:'observatory', scene:'assets/games/piloto-cie10-observatorio.webp', goal:'Criar um guia dos corpos celestes', prompt:'Envie cada corpo celeste para a descrição correta.', result:'guia espacial' },
    { mode:'scenario', goal:'Simular os movimentos da Terra', prompt:'Qual movimento produz esse acontecimento?', result:'órbitas' }
  ],
  cie11: [
    { mode:'moonlog', pilot:'moonlog', scene:'assets/games/piloto-cie11-lua.webp', goal:'Completar um diário de observação da Lua', prompt:'Registre a pista correta no diário lunar.', result:'diário lunar' },
    { mode:'scenario', goal:'Escolher um lugar para observar estrelas', prompt:'Esta condição ajuda ou atrapalha a observação?', result:'observatório' }
  ],
  geo09: [
    { mode:'municipality', pilot:'municipality', scene:'assets/games/piloto-geo09-municipio.webp', goal:'Montar um município com campo e cidade', prompt:'Leve cada atividade para o lugar onde ela costuma acontecer.', result:'município' },
    { mode:'geoglossary', pilot:'geoglossary', scene:'assets/games/piloto-geo09-glossario.webp', goal:'Criar um glossário de Geografia', prompt:'Guarde cada definição no cartão geográfico correto.', result:'glossário de campo' }
  ],
  geo10: [
    { mode:'ruralurban', pilot:'ruralurban', scene:'assets/games/piloto-geo10-campo-cidade.webp', goal:'Comparar modos de vida', prompt:'Leve cada situação para o campo ou para a cidade.', result:'dois cotidianos' },
    { mode:'explore', goal:'Montar um mapa de heranças culturais', prompt:'Qual herança está ligada a este grupo ou lugar?', result:'mapa cultural' }
  ],
  geo11: [
    { mode:'pollutionlab', pilot:'pollutionlab', scene:'assets/games/piloto-geo11-poluicao.webp', goal:'Ajudar a cidade a identificar poluições', prompt:'Envie cada alerta ao monitor de poluição correto.', result:'central ambiental' },
    { mode:'sequence', goal:'Construir o caminho da água limpa', prompt:'Qual é a próxima etapa do tratamento?', result:'estação de tratamento' }
  ],
  hist09: [
    { mode:'community', pilot:'community', scene:'assets/games/piloto-hist09-comunidade.webp', goal:'Organizar os espaços de uma comunidade', prompt:'Coloque cada espaço no painel público ou privado.', result:'mapa da comunidade' },
    { mode:'cityservices', pilot:'cityservices', scene:'assets/games/piloto-hist09-servicos.webp', goal:'Descobrir a função dos espaços públicos', prompt:'Ligue cada lugar ao serviço que oferece à comunidade.', result:'central de serviços' }
  ],
  hist10: [
    { mode:'access', pilot:'access', scene:'assets/games/piloto-hist10-acessos.webp', goal:'Decidir como os espaços podem ser usados', prompt:'Entregue a chave de acesso correta para cada lugar.', result:'mapa de acesso' },
    { mode:'explore', goal:'Montar o quadro de responsabilidades', prompt:'Quem realiza esta função no município?', result:'quadro cívico' }
  ],
  hist11: [
    { mode:'citycouncil', pilot:'citycouncil', scene:'assets/games/piloto-hist11-conselho.webp', goal:'Participar de um conselho da cidade', prompt:'Leve cada proposta para desafio ou solução.', result:'plano de melhorias' },
    { mode:'explore', goal:'Investigar palavras usadas para entender a cidade', prompt:'Qual explicação combina com este conceito?', result:'caderno da cidade' }
  ]
};
