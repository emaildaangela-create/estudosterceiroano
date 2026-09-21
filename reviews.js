/* Revisão de Inglês para a prova - conteúdos indicados pela escola. */
(function(){
  var questoes=[
    {q:'Why does Lucy go to the market?',o:['To buy fruit.','Because she is sleeping.','To fly.','Because she has wings.'],a:0,e:'To buy fruit.'},
    {q:'Why doesn’t Lucy buy milk?',o:['Because there is a little milk at home.','Because there are a few milk.','To buy milk.','Because milk can fly.'],a:0,e:'Because there is a little milk at home.'},
    {q:'Complete: Lucy buys ___ apples.',o:['some','any','a little','because'],a:0,e:'some'},
    {q:'Complete: She doesn’t buy ___ milk.',o:['some','any','a few','to'],a:1,e:'any'},
    {q:'Which expression is used with countable plural nouns?',o:['a few','a little','because','any milk'],a:0,e:'a few'},
    {q:'Which expression is used with uncountable nouns?',o:['a little','a few','many one','an few'],a:0,e:'a little'},
    {q:'Complete: There are ___ bananas in the basket.',o:['a few','a little','any water','to'],a:0,e:'a few'},
    {q:'Complete: There is ___ juice in the glass.',o:['a little','a few','many','an'],a:0,e:'a little'},
    {q:'Choose the correct question and answer.',o:['Why do you study? Because I want to learn.','Why you study? To because learn.','Because do you study? Why learn.','Why study you? Any learn.'],a:0,e:'Why do you study? Because I want to learn.'},
    {q:'A bird uses its wings ___ fly.',o:['to','because','any','a few'],a:0,e:'to'},
    {q:'A rhino uses its horns ___ protect itself.',o:['to','some','because of any','a little'],a:0,e:'to'},
    {q:'Why does a chameleon use its tongue?',o:['To catch insects.','Because a pouch.','To keep warm with fur.','Because there are any.'],a:0,e:'To catch insects.'},
    {q:'Which animal carries its baby in a pouch?',o:['A kangaroo','A rhino','A bird','A bear'],a:0,e:'A kangaroo'},
    {q:'What keeps a bear warm?',o:['Its fur','Its pouch','Its horns','Its jar'],a:0,e:'Its fur'},
    {q:'Choose the correct container: a ___ of water.',o:['glass','bunch','piece','price'],a:0,e:'glass'},
    {q:'Choose the correct quantity: a ___ of grapes.',o:['bunch','jar','glass','money'],a:0,e:'bunch'},
    {q:'Choose the correct container: a ___ of honey.',o:['jar','piece','wing','price'],a:0,e:'jar'},
    {q:'Before buying two toys, I ___ them.',o:['compare','put away','fly','protect'],a:0,e:'compare'},
    {q:'I look at the ___ before I buy something.',o:['price','pouch','tongue','fur'],a:0,e:'price'},
    {q:'After shopping, I ___ my things.',o:['put away','compare to','buy because','a few'],a:0,e:'put away'}
  ];
  var html='<section class="revisao-bloco"><h2>English - Exam Review</h2><p class="revisao-instrucao">Units 5 and 6 - Reading, Vocabulary and Grammar</p>'+
    '<div class="revisao-texto"><h3>Quick review</h3><p><strong>Why...?</strong> asks for a reason. Answer with <strong>Because...</strong></p><p>Use <strong>to + verb</strong> to explain a purpose: “I study to learn.”</p><p>Use <strong>some</strong> mainly in affirmative sentences and <strong>any</strong> mainly in questions and negative sentences.</p><p>Use <strong>a few</strong> with countable plural nouns and <strong>a little</strong> with uncountable nouns.</p></div>'+
    '<div class="revisao-texto"><h3>Read</h3><p>Lucy goes to the market <strong>to buy fruit</strong>. She buys <strong>some apples</strong> and <strong>a few bananas</strong>. She doesn’t buy <strong>any milk</strong> because there is <strong>a little milk</strong> at home. Then she visits a pet shop to see the animals.</p></div>'+
    '<h3>Choose the best answer.</h3><ol class="revisao-questoes">';
  questoes.forEach(function(item,i){var nome='ing-prova-'+i;html+='<li class="revisao-radio-item"><p>'+item.q+'</p><div class="revisao-subitens">'+item.o.map(function(opcao,j){return '<label><input type="radio" name="'+nome+'"> '+String.fromCharCode(97+j)+') '+opcao+'</label>';}).join('')+'</div></li>';});
  html+='</ol></section>';
  var correcao={textos:[],radios:questoes.map(function(item,i){return{n:'ing-prova-'+i,c:item.a,r:item.e};})};
  window.REVISOES_EXTRAS={ingles:{titulo:'Revisão de Inglês para a prova',html:html,correcao:correcao}};
})();

/* Bônus de estudo: folhas originais de Matemática e Inglês, com correção automática. */
(function(){
  function campo(curto){return '<input class="revisao-campo'+(curto?' revisao-campo--curto':'')+'" type="text">';}
  function linha(texto,curto){return '<label class="revisao-linha">'+texto.replace('{}',campo(curto))+'</label>';}
  var mat=[
    'O chef de uma confeitaria assou 45 biscoitos de chocolate e quer arrumá-los em bandejas, colocando exatamente 9 biscoitos em cada uma. Quantas bandejas serão necessárias?',
    'Uma professora de Artes tem 50 pincéis e precisa distribuí-los igualmente entre 7 grupos de alunos.',
    'Na biblioteca municipal, chegaram novas doações. Calcule as quantidades abaixo:',
    'Um supermercado recebeu 6 caixas de maçãs. Dentro de cada caixa há 125 maçãs. Quantas maçãs o supermercado recebeu no total?',
    'Carlos quer comprar uma bicicleta usada que custa R$ 390,00. Ele tem 2 notas de R$ 100,00, 3 notas de R$ 50,00 e 1 nota de R$ 20,00.',
    'Sobre as regras e os termos da divisão, assinale a alternativa correta.',
    'Descubra os números escondidos, lembrando que multiplicação e divisão caminham juntas.',
    'Uma fábrica de cadernos produz 234 unidades por dia. Mantendo esse ritmo, quantos cadernos serão fabricados em 4 dias?',
    'Um florista recebeu 85 rosas e quer montar buquês com exatamente 9 rosas cada um.',
    'Mateus quer comprar um jogo de tabuleiro que custa R$ 150,00. Ele percebeu que só tem a terça parte desse valor.'
  ];
  var m='<section class="revisao-bloco"><h2>Matemática · 3º bimestre</h2><p class="revisao-instrucao">Resolva e registre os cálculos.</p><ol class="revisao-questoes">';
  mat.forEach(function(q,i){m+='<li><p>'+q+'</p>';
    if(i===1)m+='<div class="revisao-subitens">'+linha('a) Quantos pincéis cada grupo receberá? {}')+linha('b) A divisão é exata ou não exata? Justifique. {}')+'</div>';
    else if(i===2)m+='<div class="revisao-subitens">'+linha('a) A metade de 86 livros: {}',true)+linha('b) A quarta parte de 48 livros: {}',true)+linha('c) A terça parte de 60 revistas: {}',true)+linha('d) A quinta parte de 35 dicionários: {}',true)+'</div>';
    else if(i===4)m+='<div class="revisao-subitens">'+linha('a) Quantos reais Carlos tem ao todo? {}')+linha('b) É suficiente? Se não, quanto falta? {}')+'</div>';
    else if(i===5)m+='<div class="revisao-subitens"><label><input type="radio" name="mat6"> a) O dividendo é o resultado final da divisão.</label><label><input type="radio" name="mat6"> b) A divisão é não exata quando o resto é zero.</label><label><input type="radio" name="mat6"> c) O quociente é o resultado e a sobra é o resto.</label><label><input type="radio" name="mat6"> d) Para achar a terça parte, divide-se por 2.</label></div>';
    else if(i===6)m+='<div class="revisao-subitens">'+linha('a) Se 7 × 8 = 56, então 56 ÷ 8 = {}',true)+linha('b) Se '+campo(true)+' ÷ 5 = 9, então 9 × 5 = {}',true)+'</div>';
    else if(i===8)m+='<div class="revisao-subitens">'+linha('a) Quantos buquês completos? {}')+linha('b) Sobrarão rosas? Quantas? {}')+'</div>';
    else if(i===9)m+='<div class="revisao-subitens">'+linha('a) Quantos reais Mateus tem? {}')+linha('b) Quanto ainda falta? {}')+'</div>';
    else m+=linha('Resposta: {}');
    if([0,2,3,4,7,8,9].indexOf(i)>=0)m+='<textarea class="revisao-calculo" aria-label="Espaço para cálculos"></textarea>';
    m+='</li>';
  });m+='</ol></section>';

  var eng1='<section class="revisao-bloco"><h2>English Review · Sheet 1</h2><div class="revisao-texto"><h3>Grasslands</h3><p>Earth has lots of grasslands. Grasslands usually have very few trees. Grasslands can have lots of animals. Many of them like to eat grass.</p><p>A savanna is a warm or tropical grassland area. The grasses can be very tall. This is good for animals to hide in. Many animals eat the grass, too. Animals like elephants, zebras, and lions might live in a savanna.</p><p>Temperate grasslands, like prairies and steppes, might seem like large grassy fields, but the grasses get much taller. The animals use the grass to eat, hide, and make their homes. Buffalo, wolves, owls, and bugs might live there.</p></div>';
  eng1+='<h3>1. Write T (true) or F (false).</h3><div class="revisao-subitens">'+linha('a) Grasslands have a few trees. {}',true)+linha('b) A savanna has a cold temperature. {}',true)+linha('c) Many animals in grasslands don’t eat grass. {}',true)+linha('d) Bears and penguins don’t live in the grasslands. {}',true)+'</div>';
  eng1+='<h3>2. Complete.</h3><div class="revisao-banco"><span>tongue</span><span>fur</span><span>pouch</span><span>horns</span><span>wings</span></div><div class="revisao-subitens">'+linha('A rhino uses its {} to protect itself.')+linha('A chameleon uses its {} to catch insects.')+linha('A kangaroo has a {} to carry its baby.')+linha('A bird uses its {} to fly.')+linha('A bear has thick {} to keep warm.')+'</div>';
  eng1+='<h3>3. Containers and quantities.</h3><div class="revisao-subitens">'+linha('I need a {} of water. I’m thirsty.')+linha('There is a {} of grapes.')+linha('I have a {} of honey.')+linha('Peter always eats a {} of strawberry cake.')+'</div>';
  eng1+='<h3>4. Choose a few or a little.</h3><div class="revisao-subitens"><div>Tomatoes: <span class="revisao-opcoes"><label><input type="radio" name="e4a"> a few</label><label><input type="radio" name="e4a"> a little</label></span></div><div>Coffee: <span class="revisao-opcoes"><label><input type="radio" name="e4b"> a few</label><label><input type="radio" name="e4b"> a little</label></span></div><div>Bananas: <span class="revisao-opcoes"><label><input type="radio" name="e4c"> a few</label><label><input type="radio" name="e4c"> a little</label></span></div></div>';
  eng1+='<h3>5. Unscramble.</h3><div class="revisao-subitens">'+linha('ECIRP → {}')+linha('YENOM → {}')+linha('ERAPMOC → {}')+linha('YUB → {}')+linha('TUP → {}')+'</div>';
  eng1+='<h3>6. Complete with SOME or ANY.</h3><div class="revisao-subitens">'+['I don’t want {} coffee.','I would like {} apples.','I need {} bread.','I would love {} pears.','I don’t have {} cheese.','I can’t eat {} nuts.'].map(function(x){return linha(x);}).join('')+'</div></section>';

  var eng2='<section class="revisao-bloco"><h2>English Review · Sheet 2</h2><h3>1. Complete with SOME or ANY.</h3><div class="revisao-subitens">'+[
    'There are {} apples in the basket.','There is {} milk in the glass.','There aren’t {} cookies on the plate.','Is there {} rice in the bowl?','There is {} sugar in the jar.','There isn’t {} vegetable in the fridge.','Are there {} sandwiches on the plate?','There is {} ice in the glass.','There isn’t {} soup in the bowl.','Are there {} chips in the packet?','There are {} vegetables in the bowl.','There aren’t {} bananas on the table.'
  ].map(function(x){return linha(x);}).join('')+'</div>';
  eng2+='<h3>2. Make sentences with A FEW or A LITTLE.</h3><div class="revisao-subitens">'+['apples','milk','sugar','sandwiches','salad'].map(function(x){return linha(x+': {}');}).join('')+'</div>';
  eng2+='<h3>3. Complete the sentences.</h3><div class="revisao-subitens">'+['Kangaroos use their {} to carry their babies.','Goats use their {} to fight.','Elephants use their {} to drink water.','Penguins use their {} to swim.','Polar bears use their {} to hide in the snow.','Giraffes use their {} to clean their ears.'].map(function(x){return linha(x);}).join('')+'</div>';
  eng2+='<h3>4. Write the quantities or containers.</h3><div class="revisao-subitens">'+['A {} of juice.','A {} of oil.','A {} of grapes.','A {} of cookies.','A {} of salad.'].map(function(x){return linha(x);}).join('')+'</div>';
  eng2+='<h3>5. Complete the text.</h3><div class="revisao-banco"><span>put away</span><span>money</span><span>buy</span><span>compare</span><span>prices</span></div><p class="revisao-linha">I need to go to the supermarket to '+campo(false)+' milk, cereal and fruits. I read the cereal boxes to '+campo(false)+' them and check the '+campo(false)+' before I pay. I don’t want to spend a lot of '+campo(false)+'. At home, the children help me '+campo(false)+' the things.</p></section>';
  var gMat='<h3>Matemática</h3><ol><li><strong>5 bandejas.</strong> 45 ÷ 9 = 5.</li><li><strong>a)</strong> 7 pincéis para cada grupo e sobra 1. <strong>b)</strong> Divisão não exata, porque o resto é 1.</li><li><strong>a)</strong> 43; <strong>b)</strong> 12; <strong>c)</strong> 20; <strong>d)</strong> 7.</li><li><strong>750 maçãs.</strong> 6 × 125 = 750.</li><li><strong>a)</strong> R$ 370,00. <strong>b)</strong> Não; faltam R$ 20,00.</li><li><strong>Alternativa C.</strong> O quociente é o resultado da divisão e a sobra, quando existe, é o resto.</li><li><strong>a)</strong> 7. <strong>b)</strong> 45 nos dois espaços.</li><li><strong>936 cadernos.</strong> 234 × 4 = 936.</li><li><strong>a)</strong> 9 buquês completos. <strong>b)</strong> Sim, sobram 4 rosas.</li><li><strong>a)</strong> R$ 50,00. <strong>b)</strong> Faltam R$ 100,00.</li></ol>';
  var gIng='<h3>English Review · Sheet 1</h3><ol><li><strong>a)</strong> T; <strong>b)</strong> F; <strong>c)</strong> F; <strong>d)</strong> T.</li><li><strong>a)</strong> horns; <strong>b)</strong> tongue; <strong>c)</strong> pouch; <strong>d)</strong> wings; <strong>e)</strong> fur.</li><li><strong>a)</strong> glass; <strong>b)</strong> bunch; <strong>c)</strong> jar; <strong>d)</strong> piece.</li><li><strong>a)</strong> a few; <strong>b)</strong> a little; <strong>c)</strong> a few.</li><li><strong>a)</strong> price; <strong>b)</strong> money; <strong>c)</strong> compare; <strong>d)</strong> buy; <strong>e)</strong> put.</li><li><strong>a)</strong> any; <strong>b)</strong> some; <strong>c)</strong> some; <strong>d)</strong> some; <strong>e)</strong> any; <strong>f)</strong> any.</li></ol><p class="gabarito-nota"><strong>Observação da questão 1d:</strong> “T” é a resposta escolar esperada, mas o texto não menciona ursos nem pinguins diretamente.</p>';
  gIng+='<h3>English Review · Sheet 2</h3><ol><li><strong>1)</strong> some; <strong>2)</strong> some; <strong>3)</strong> any; <strong>4)</strong> any; <strong>5)</strong> some; <strong>6)</strong> any; <strong>7)</strong> any; <strong>8)</strong> some; <strong>9)</strong> any; <strong>10)</strong> any; <strong>11)</strong> some; <strong>12)</strong> any.</li><li><strong>a)</strong> There are a few apples. <strong>b)</strong> There is a little milk. <strong>c)</strong> There is a little sugar. <strong>d)</strong> There are a few sandwiches. <strong>e)</strong> There is a little salad.</li><li><strong>a)</strong> pouches; <strong>b)</strong> horns; <strong>c)</strong> trunks; <strong>d)</strong> wings; <strong>e)</strong> fur; <strong>f)</strong> tongues.</li><li><strong>a)</strong> glass; <strong>b)</strong> bottle; <strong>c)</strong> bunch; <strong>d)</strong> jar; <strong>e)</strong> bowl.</li><li><strong>buy; compare; prices; money; put away.</strong></li></ol><p class="gabarito-nota"><strong>Observação da questão 1, item 6:</strong> o exercício espera “any”, mas a frase impressa tem problema gramatical. O natural seria “There aren’t any vegetables...” ou “There isn’t a vegetable...”.</p>';
  var correcaoMat={textos:[
    {i:0,a:[/^5$/,/cinco/,/\b5 bandejas?\b/],r:'5 bandejas'},
    {i:1,a:[/^7$/,/sete/,/\b7 pinceis?\b/],r:'7 pincéis'},
    {i:2,a:[/nao exata/],r:'Não exata, pois sobra 1 pincel'},
    {i:3,a:['43'],r:'43'},{i:4,a:['12'],r:'12'},{i:5,a:['20'],r:'20'},{i:6,a:['7'],r:'7'},
    {i:7,a:[/\b750\b/],r:'750 maçãs'},{i:8,a:[/\b370\b/],r:'R$ 370,00'},{i:9,a:[/\b20\b/],r:'Não. Faltam R$ 20,00'},
    {i:10,a:['7'],r:'7'},{i:11,a:['45'],r:'45'},{i:12,a:['45'],r:'45'},{i:13,a:[/\b936\b/],r:'936 cadernos'},
    {i:14,a:['9'],r:'9 buquês'},{i:15,a:[/\b4\b/],r:'Sim, sobram 4 rosas'},{i:16,a:[/\b50\b/],r:'R$ 50,00'},{i:17,a:[/\b100\b/],r:'R$ 100,00'}
  ],radios:[{n:'mat6',c:2,r:'Alternativa C'}]};
  var respostasIngles=[
    ['t','true','verdadeiro'],['f','false','falso'],['f','false','falso'],['t','true','verdadeiro'],
    ['horns'],['tongue'],['pouch'],['wings'],['fur'],['glass'],['bunch'],['jar'],['piece'],
    ['price'],['money'],['compare'],['buy'],['put'],['any'],['some'],['some'],['some'],['any'],['any'],
    ['some'],['some'],['any'],['any'],['some'],['any'],['any'],['some'],['any'],['any'],['some'],['any'],
    ['there are a few apples','a few apples'],['there is a little milk','a little milk'],['there is a little sugar','a little sugar'],['there are a few sandwiches','a few sandwiches'],['there is a little salad','a little salad'],
    ['pouches'],['horns'],['trunks'],['wings'],['fur'],['tongues'],['glass'],['bottle'],['bunch'],['jar'],['bowl'],['buy'],['compare'],['prices'],['money'],['put away']
  ];
  var respostasCertasIngles=['T','F','F','T','horns','tongue','pouch','wings','fur','glass','bunch','jar','piece','price','money','compare','buy','put','any','some','some','some','any','any','some','some','any','any','some','any','any','some','any','any','some','any','There are a few apples.','There is a little milk.','There is a little sugar.','There are a few sandwiches.','There is a little salad.','pouches','horns','trunks','wings','fur','tongues','glass','bottle','bunch','jar','bowl','buy','compare','prices','money','put away'];
  var correcaoIng={textos:respostasIngles.map(function(a,i){return{i:i,a:a,r:respostasCertasIngles[i]};}),radios:[{n:'e4a',c:0,r:'a few'},{n:'e4b',c:1,r:'a little'},{n:'e4c',c:0,r:'a few'}]};
  Object.assign(window.REVISOES_EXTRAS,{'bonus-matematica':{titulo:'Bônus de Matemática · Folha de revisão',html:m,correcao:correcaoMat,bonus:true},'bonus-ingles':{titulo:'Bônus de Inglês · Folhas de revisão',html:eng1+eng2,correcao:correcaoIng,bonus:true}});
})();
