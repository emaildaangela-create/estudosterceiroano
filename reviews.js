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
