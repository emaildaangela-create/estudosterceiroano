/* Estudos do 3º ano — navegação, atividades e progresso local. */
(function () {
  'use strict';

  var CHAVE = 'estudos3ano.estado.v2';
  var estado = { disciplina:null, capitulo:null, aba:'teoria', passoDescoberta:0, progresso:{}, tentativas:{}, experiencias:{}, leitura:{}, areas:{}, ultimo:null, som:true };
  var jogoAtual = 0;
  var quiz = null;
  var promptInstalacao = null;
  var focoAntesDaInstalacao = null;
  var placar = { pontos:0, sequencia:0, melhor:0 };   /* vale pela partida atual */

  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function criar(tag, classe, html, attrs) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (html !== undefined && html !== null) n.innerHTML = html;
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }
  function textoSeguro(v) { return String(v == null ? '' : v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function misturar(lista) {
    var a = lista.slice();
    for (var i=a.length-1;i>0;i--) { var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t; }
    return a;
  }
  function discPorId(id) { return DISCIPLINAS.find(function (d) { return d.id === id; }); }
  function capPorId(disc,id) { return disc && disc.capitulos.find(function (c) { return c.id === id; }); }
  function acento(disc) { return 'var(' + disc.cor + ')'; }
  function totalCaps() { return DISCIPLINAS.reduce(function (n,d) { return n+d.capitulos.length; },0); }
  function totalFeitos() { return Object.keys(estado.progresso).filter(function (id) { return estado.progresso[id] && estado.progresso[id].feito; }).length; }

  function carregar() {
    try {
      var salvo = JSON.parse(localStorage.getItem(CHAVE) || 'null');
      if (salvo && typeof salvo === 'object') {
        estado.progresso = salvo.progresso || {};
        estado.tentativas = salvo.tentativas || {};
        estado.experiencias = salvo.experiencias || {};
        estado.leitura = salvo.leitura || {};
        estado.areas = salvo.areas || {};
        estado.ultimo = salvo.ultimo || null;
        estado.disciplina = salvo.disciplina || null;
        estado.capitulo = salvo.capitulo || null;
        estado.passoDescoberta = Number(salvo.passoDescoberta) || 0;
        estado.som = salvo.som !== false;
      }
    } catch (_) {}
  }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (_) {}
    atualizarTopo();
  }
  function atualizarTopo() {
    var n=totalFeitos(), xp=$('#xp-num');
    if (xp) xp.textContent=n;
    var caixa=$('#topo-xp');
    if (caixa) caixa.hidden=n===0;
  }
  function toast(msg) {
    var t=$('#toast'); if(!t) return;
    t.textContent=msg; t.hidden=false;
    clearTimeout(toast.timer); toast.timer=setTimeout(function(){t.hidden=true;},2400);
  }
  function appEstaInstalado() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }
  function fecharAjudaInstalacao() {
    var ajuda=$('#instalar-ajuda'); if(!ajuda)return;
    ajuda.hidden=true;
    if(focoAntesDaInstalacao)focoAntesDaInstalacao.focus();
  }
  function abrirAjudaInstalacao() {
    var ajuda=$('#instalar-ajuda'), instrucao=$('#instalar-instrucao'); if(!ajuda||!instrucao)return;
    var ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
    instrucao.textContent=ios?'No Safari, toque em Compartilhar e depois em “Adicionar à Tela de Início”.':'Abra o menu do navegador e escolha “Instalar aplicativo” ou “Adicionar à tela inicial”.';
    focoAntesDaInstalacao=document.activeElement; ajuda.hidden=false; $('#fechar-instalacao').focus();
  }
  function configurarInstalacao() {
    var botao=$('#btn-instalar'), ajuda=$('#instalar-ajuda'), fechar=$('#fechar-instalacao'); if(!botao)return;
    var ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
    botao.hidden=appEstaInstalado()||!ios;
    window.addEventListener('beforeinstallprompt',function(evento){evento.preventDefault();promptInstalacao=evento;if(!appEstaInstalado())botao.hidden=false;});
    window.addEventListener('appinstalled',function(){promptInstalacao=null;botao.hidden=true;toast('Aplicativo instalado!');});
    botao.addEventListener('click',function(){
      if(!promptInstalacao){abrirAjudaInstalacao();return;}
      promptInstalacao.prompt();
      promptInstalacao.userChoice.then(function(escolha){
        if(escolha.outcome==='accepted')botao.hidden=true;
        promptInstalacao=null;
      });
    });
    if(fechar)fechar.addEventListener('click',fecharAjudaInstalacao);
    if(ajuda)ajuda.addEventListener('click',function(evento){if(evento.target===ajuda)fecharAjudaInstalacao();});
    document.addEventListener('keydown',function(evento){if(evento.key==='Escape'&&ajuda&&!ajuda.hidden)fecharAjudaInstalacao();});
  }
  function registrarServiceWorker() {
    if(!('serviceWorker' in navigator))return;
    window.addEventListener('load',function(){navigator.serviceWorker.register('./sw.js').catch(function(){});});
  }
  var GLOSSARIO = {
    'finalidade':'para que algo serve', 'gênero':'um tipo de texto', 'objetiva':'direta e fácil de entender',
    'substantivo':'palavra que dá nome a pessoas, lugares, animais, objetos ou ideias',
    'sufixo':'pedaço acrescentado no final de uma palavra', 'ortografia':'maneira correta de escrever as palavras',
    'município':'cidade e a área administrada junto com ela', 'comunidade':'grupo de pessoas que compartilha um lugar ou interesses',
    'patrimônio':'algo importante que uma comunidade preserva', 'paisagem':'tudo o que podemos observar em um lugar',
    'multiplicação':'adição de parcelas iguais', 'divisão':'repartir ou formar grupos com a mesma quantidade',
    'adjetivo':'palavra que mostra uma característica', 'pronome':'palavra que pode substituir ou acompanhar um nome',
    'biografia':'história da vida de uma pessoa escrita por outra', 'autobiografia':'história que alguém escreve sobre a própria vida',
    'cronológica':'organizada na ordem em que os fatos aconteceram', 'rotação':'giro da Terra em torno dela mesma',
    'translação':'movimento da Terra ao redor do Sol', 'astro':'corpo natural que existe no espaço',
    'satélite':'corpo que gira ao redor de um planeta', 'atmosfera':'camada de gases que envolve a Terra',
    'litosfera':'parte sólida mais externa da Terra', 'hidrosfera':'toda a água existente no planeta',
    'biosfera':'regiões da Terra onde existe vida', 'magma':'material muito quente encontrado dentro da Terra',
    'rural':'relacionado ao campo', 'urbana':'relacionada à cidade', 'migração':'mudança de pessoas de um lugar para outro',
    'censo':'pesquisa que reúne informações sobre a população', 'democracia':'forma de governo com participação dos cidadãos',
    'potável':'própria e segura para beber', 'triagem':'separação de materiais por tipo'
  };
  function palavras(txt) { return String(txt||'').replace(/<[^>]+>/g,' ').trim().split(/\s+/).filter(Boolean); }
  function separarResumo(paragrafos) {
    var todos=(paragrafos||[]).slice(), primeiro=todos.shift()||'', frases=primeiro.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[primeiro], resumo='', resto=[];
    frases.forEach(function(f){ if(palavras(resumo+' '+f).length<=45 || !resumo) resumo+=(resumo?' ':'')+f.trim(); else resto.push(f.trim()); });
    if(resto.length) todos.unshift(resto.join(' '));
    return { resumo:resumo, detalhes:todos };
  }
  function explicarTermos(html) {
    var saida=String(html||'');
    Object.keys(GLOSSARIO).forEach(function(termo){
      var rx=new RegExp('\\b('+termo+')\\b','gi');
      saida=saida.replace(rx,'<span class="termo" tabindex="0" data-explica="'+textoSeguro(GLOSSARIO[termo])+'">$1</span>');
    });
    return saida;
  }
  function falaMascote(mensagem,compacta) {
    return criar('aside','mascote-fala'+(compacta?' mascote-fala--compacta':''),
      '<img src="assets/mascote-capivara-v2.webp" alt="Mascote do aplicativo"><p>'+textoSeguro(mensagem)+'</p>');
  }
  function conviteMissao(bloco,idx) {
    var h=normalizar(bloco&&bloco.h);
    if(/instrucional|instrucao/.test(h)) return 'Pense no cartaz de lavar as mãos do banheiro da escola. O que precisa estar nele para alguém conseguir seguir?';
    if(/anuncio|classificado|aulas de tango/.test(h)) return 'Onde você já viu algo sendo oferecido para vender, trocar, alugar ou prestar um serviço?';
    if(/memoria|biografia|santos dumont|aula de musica|linha do tempo/.test(h)) return 'Que pistas ajudam a perceber que um texto conta fatos da vida ou lembranças do passado?';
    if(/quadrinho|balao|monica|marina/.test(h)) return 'O que os desenhos, os quadros e os balões ajudam a entender antes mesmo de ler todas as falas?';
    if(/conto|zebra|lobo/.test(h)) return 'Que elementos fazem você perceber que este texto conta uma história?';
    if(/diminutivo|aumentativo|plural|ortografia/.test(h)) return 'Observe como as palavras mudam. Tente descobrir o padrão antes de abrir a explicação.';
    if(/tempo|hora|calend/.test(h)) return 'Pense em uma situação do seu dia em que você usa essa ideia.';
    if(/terra|ceu|lua|sol|estrela/.test(h)) return 'Observe o título e a imagem. O que você acha que acontece com esse elemento da natureza?';
    if(/municipio|cidade|comunidade|espaco/.test(h)) return 'Pense no lugar onde você vive. O que você já viu que se parece com este assunto?';
    return 'Observe o título e a imagem. O que você já sabe ou percebe sobre este assunto?';
  }
  function temaBloco(bloco) {
    var h=normalizar(bloco&&bloco.h);
    if(/anuncio|classificado|aulas de tango/.test(h))return 'anuncios';
    if(/memoria|biografia|santos dumont|aula de musica|linha do tempo/.test(h))return 'memorias';
    if(/quadrinho|balao|monica|marina/.test(h))return 'quadrinhos';
    if(/conto|zebra|lobo/.test(h))return 'contos';
    if(/instrucional|lavar as maos/.test(h))return 'instrucoes';
    if(/substantivo|diminutivo|aumentativo|plural|ortografia|verbo|adjetivo|silaba/.test(h))return 'palavras';
    if(/multiplica|divis|possibil|numero|calculo/.test(h))return 'numeros';
    if(/tempo|hora|localiza|desloca/.test(h))return 'medidas';
    if(/terra|ceu|lua|sol|estrela|planeta/.test(h))return 'natureza';
    if(/municipio|cidade|comunidade|espaco|populacao|servico/.test(h))return 'lugares';
    return 'ideia';
  }
  function visualDaDescoberta(bloco) {
    var tema=temaBloco(bloco), visuais={
      instrucoes:{src:'assets/descobrir-textos.webp',alt:'Criança observando uma sequência ilustrada de instruções para lavar as mãos.'},
      anuncios:{src:'assets/descobrir-anuncios.webp',alt:'Crianças observando um anúncio ilustrado em um mural da comunidade.'},
      memorias:{src:'assets/descobrir-memorias.webp',alt:'Criança ouvindo uma pessoa idosa compartilhar fotografias e lembranças de sua vida.'},
      quadrinhos:{src:'assets/descobrir-quadrinhos.webp',alt:'Crianças criando uma história em quadrinhos com quadros e diferentes balões de fala.'},
      contos:{src:'assets/descobrir-contos.webp',alt:'Crianças ouvindo uma contadora de histórias enquanto personagens surgem de um livro.'},
      palavras:{src:'assets/descobrir-palavras.webp',alt:'Criança montando e investigando palavras com peças coloridas.'},
      numeros:{src:'assets/descobrir-numeros.webp',alt:'Criança explorando grupos, formas e quantidades com materiais de matemática.'},
      medidas:{src:'assets/descobrir-medidas.webp',alt:'Criança investigando tempo, caminhos e medidas com relógio e instrumentos.'},
      natureza:{src:'assets/descobrir-natureza.webp',alt:'Crianças investigando a Terra, a natureza, a Lua e o céu.'},
      lugares:{src:'assets/descobrir-lugares.webp',alt:'Crianças observando uma maquete com campo, cidade e espaços da comunidade.'},
      ideia:{src:'assets/descobrir-ideias.webp',alt:'Criança investigando pistas e organizando uma nova ideia.'}
    };
    return visuais[tema]||visuais.ideia;
  }
  function irTopo() { window.scrollTo({top:0,behavior:'smooth'}); }
  /* As páginas do livro não são publicadas junto com o app. Se a imagem não
     estiver lá, a figura inteira some em vez de deixar um ícone quebrado. */
  function figuraOpcional(figura) {
    var img=figura&&figura.querySelector('img'); if(!img)return figura;
    img.addEventListener('error',function(){figura.remove();});
    return figura;
  }

  /* --- Cara de jogo: som, confete e sequência de acertos ------------------ */
  var audio;
  function bip(tipo) {
    if(!estado.som)return;
    try {
      var Ctx=window.AudioContext||window.webkitAudioContext; if(!Ctx)return;
      audio=audio||new Ctx();
      var o=audio.createOscillator(), g=audio.createGain(), t=audio.currentTime;
      o.connect(g); g.connect(audio.destination);
      if(tipo==='ok'){o.frequency.setValueAtTime(660,t);o.frequency.setValueAtTime(880,t+.09);}
      else if(tipo==='erro'){o.type='triangle';o.frequency.setValueAtTime(200,t);}
      else {o.frequency.setValueAtTime(523,t);o.frequency.setValueAtTime(784,t+.12);o.frequency.setValueAtTime(1046,t+.24);}
      g.gain.setValueAtTime(.0001,t);
      g.gain.exponentialRampToValueAtTime(.16,t+.02);
      g.gain.exponentialRampToValueAtTime(.0001,t+.35);
      o.start(); o.stop(t+.36);
    } catch(_) {}
  }
  var CORES_FESTA=['#ba376d','#20768e','#1d805c','#b45b16','#6b49b8','#8b6509'];
  function palcoFesta(tipo,duracao) {
    var caixa=criar('div','festa festa--'+tipo);
    document.body.appendChild(caixa);
    setTimeout(function(){caixa.remove();},duracao);
    return caixa;
  }
  function aleatorio(min,max) { return min+Math.random()*(max-min); }
  function confete(quantidade) {
    var caixa=palcoFesta('confete',3600);
    for(var i=0;i<quantidade;i++){
      var p=criar('i');
      p.style.left=aleatorio(0,100)+'vw';
      p.style.background=CORES_FESTA[i%CORES_FESTA.length];
      p.style.animationDuration=aleatorio(1.7,3.1)+'s';
      p.style.animationDelay=aleatorio(0,.35)+'s';
      p.style.transform='rotate('+Math.floor(aleatorio(0,360))+'deg)';
      caixa.appendChild(p);
    }
  }
  function estrelas(quantidade) {
    var caixa=palcoFesta('estrelas',1400), simbolos=['⭐','✨','🌟','💫'];
    for(var i=0;i<quantidade;i++){
      var angulo=(i/quantidade)*Math.PI*2, alcance=aleatorio(120,290);
      var e=criar('i',null,simbolos[i%simbolos.length]);
      e.style.setProperty('--x',Math.cos(angulo)*alcance+'px');
      e.style.setProperty('--y',Math.sin(angulo)*alcance+'px');
      e.style.fontSize=aleatorio(17,29)+'px';
      e.style.animationDelay=aleatorio(0,.12)+'s';
      caixa.appendChild(e);
    }
  }
  function baloes(quantidade) {
    var caixa=palcoFesta('baloes',4200);
    for(var i=0;i<quantidade;i++){
      var b=criar('i',null,'🎈');
      b.style.left=aleatorio(4,92)+'vw';
      b.style.fontSize=aleatorio(28,46)+'px';
      b.style.animationDuration=aleatorio(2.6,4)+'s';
      b.style.animationDelay=aleatorio(0,.6)+'s';
      caixa.appendChild(b);
    }
  }
  function carimbo() {
    var caixa=palcoFesta('carimbo',1100), marcas=['🎉','👏','💪','🙌','🥳'];
    caixa.appendChild(criar('b',null,marcas[Math.floor(Math.random()*marcas.length)]));
  }
  /* Um repertório em vez de sempre o mesmo confete — e nunca a mesma
     comemoração duas vezes seguidas. */
  var FESTAS=[function(){confete(30);},function(){estrelas(16);},function(){baloes(9);},carimbo];
  var ultimaFesta=-1;
  function festejar(forte) {
    if(semAnimacao())return;
    if(forte){confete(70);estrelas(20);return;}   /* fim de jogo: as duas juntas */
    var i;
    do { i=Math.floor(Math.random()*FESTAS.length); } while(i===ultimaFesta);
    ultimaFesta=i;
    FESTAS[i]();
  }
  function zerarPlacar() { placar={pontos:0,sequencia:0,melhor:0}; }
  function pontuar(certo) {
    if(certo){
      placar.sequencia++;
      placar.melhor=Math.max(placar.melhor,placar.sequencia);
      placar.pontos+=10+(placar.sequencia>=3?5:0);
    } else placar.sequencia=0;
    atualizarPlacar();
  }
  function atualizarPlacar() {
    var hud=$('#hud-jogo'); if(!hud)return;
    hud.querySelector('.hud__pontos b').textContent=placar.pontos;
    hud.querySelector('.hud__seguidas b').textContent=placar.sequencia;
    hud.querySelector('.hud__seguidas').classList.toggle('hud__pilula--quente',placar.sequencia>=3);
  }
  function montarHud() {
    var hud=criar('div','hud',null,{id:'hud-jogo'});
    hud.appendChild(criar('div','hud__pilula hud__pontos','<b>'+placar.pontos+'</b><span>Pontos</span>'));
    hud.appendChild(criar('div','hud__pilula hud__seguidas'+(placar.sequencia>=3?' hud__pilula--quente':''),'<b>'+placar.sequencia+'</b><span>Seguidas</span>'));
    var som=criar('button','hud__som',estado.som?'🔊':'🔇',{type:'button','aria-label':'Ligar ou desligar o som'});
    som.addEventListener('click',function(){
      estado.som=!estado.som; salvar(); som.textContent=estado.som?'🔊':'🔇';
      som.setAttribute('aria-pressed',estado.som?'true':'false'); if(estado.som)bip('ok');
    });
    hud.appendChild(som);
    return hud;
  }
  function semAnimacao() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  /* Quando nasce conteúdo embaixo (a nomeação, o feedback, o botão de seguir),
     a página vai atrás dele: puxa o fim para dentro da tela, mas nunca esconde
     o começo debaixo do cabeçalho grudado. */
  function revelar(inicio,fim) {
    if(!inicio||!inicio.getBoundingClientRect||!window.scrollBy)return;
    var mexer=function(){
      try {
        var a=inicio.getBoundingClientRect(), b=(fim||inicio).getBoundingClientRect();
        /* O que cobre o alto da tela: o cabeçalho e, na tela de capítulo,
           também a barra de abas — as duas são grudentas. */
        var teto=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topo'),10)||58;
        var abas=$('.abas');
        if(abas){var ra=abas.getBoundingClientRect();if(ra.bottom>0&&ra.bottom<window.innerHeight/2)teto=Math.max(teto,ra.bottom);}
        var topo=teto+14, chao=window.innerHeight-14, delta=0;
        if(b.bottom>chao) delta=b.bottom-chao;
        if(a.top-delta<topo) delta=a.top-topo;
        if(Math.abs(delta)<4)return;
        window.scrollBy({top:delta,behavior:semAnimacao()?'auto':'smooth'});
      } catch(_) {}
    };
    if(window.requestAnimationFrame)window.requestAnimationFrame(mexer);else mexer();
  }
  function mostrar(id) {
    $$('.tela').forEach(function (t) { var ativa=t.id===id; t.hidden=!ativa; t.classList.toggle('tela--ativa',ativa); });
    var home=id==='tela-home';
    document.body.classList.toggle('body--home',home);
    $('#btn-voltar').hidden=home;
    irTopo();
  }

  function renderHome() {
    estado.disciplina=null; estado.capitulo=null; estado.aba='teoria';
    var grade=$('#grade-disciplinas'); grade.innerHTML='';
    DISCIPLINAS.forEach(function (disc) {
      var feitos=disc.capitulos.filter(function(c){return estado.progresso[c.id] && estado.progresso[c.id].feito;}).length;
      var iniciados=disc.capitulos.some(function(c){return !!estado.progresso[c.id];});
      var status=feitos ? feitos+' de '+disc.capitulos.length+' concluídos' : (iniciados?'Continuar':'');
      var b=criar('button','disc-card','<span class="disc-card__nome">'+textoSeguro(disc.nome)+'</span>'+
        (status?'<span class="disc-card__status">'+status+'</span>':'')+'<span class="disc-card__seta" aria-hidden="true">→</span>',{type:'button'});
      b.style.setProperty('--acento',acento(disc));
      b.addEventListener('click',function(){abrirDisciplina(disc.id);}); grade.appendChild(b);
    });
    var feitos=totalFeitos(), total=totalCaps(), pct=Math.round(feitos/total*100);
    $('#painel-progresso').hidden=feitos===0;
    $('#painel-pct').textContent=pct+'%'; $('#barra-fill').style.width=pct+'%';
    $('#barra-geral').setAttribute('aria-valuenow',String(pct));
    var cont=$('#btn-continuar'); cont.hidden=true;
    if (estado.ultimo) {
      var d=discPorId(estado.ultimo.disciplina), c=capPorId(d,estado.ultimo.capitulo);
      if(d&&c){ cont.hidden=false; $('#continuar-titulo').textContent=c.title; $('#continuar-detalhe').textContent=d.nome+' · módulo '+c.module; }
    }
    atualizarTopo(); mostrar('tela-home');
  }

  function abrirDisciplina(id) {
    var disc=discPorId(id); if(!disc) return renderHome();
    estado.disciplina=id; estado.capitulo=null; salvar();
    var cab=$('#cabecalho-disc'); cab.innerHTML='<p class="cabecalho-disc__trilha">Matéria</p><h1 class="cabecalho-disc__titulo" id="disc-titulo">'+textoSeguro(disc.nome)+'</h1><p class="cabecalho-disc__texto">Escolha um assunto. Você pode explorar no seu ritmo e voltar quando quiser.</p>';
    cab.style.setProperty('--acento',acento(disc));
    var visuaisDisciplina={
      portugues:{src:'assets/disciplina-portugues.webp',alt:'Crianças lendo, escrevendo e imaginando histórias juntas.'},
      matematica:{src:'assets/disciplina-matematica.webp',alt:'Crianças explorando formas, quantidades, medidas, padrões e o tempo.'},
      ciencias:{src:'assets/disciplina-ciencias.webp',alt:'Crianças investigando plantas, animais, água, a Terra e o céu.'},
      geografia:{src:'assets/disciplina-geografia.webp',alt:'Crianças explorando mapas, paisagens, cidade, campo e caminhos.'},
      historia:{src:'assets/disciplina-historia.webp',alt:'Crianças e pessoas idosas compartilhando fotografias, memórias e histórias da comunidade.'}
    }, visual=visuaisDisciplina[disc.id], figura=$('#disc-visual');
    figura.innerHTML=visual?'<img src="'+visual.src+'" alt="'+visual.alt+'">':'';
    var lista=$('#lista-capitulos'); lista.innerHTML='';
    disc.capitulos.forEach(function(cap){
      var p=estado.progresso[cap.id], marca=p&&p.feito?'✓':'→';
      var b=criar('button','cap-card','<span class="cap-card__num">'+cap.module+'</span><span><strong class="cap-card__titulo">'+textoSeguro(cap.title)+'</strong><span class="cap-card__sub">'+textoSeguro(cap.subtitle||'')+'</span></span><span class="cap-card__estado" aria-hidden="true">'+marca+'</span>',{type:'button'});
      b.style.setProperty('--acento',acento(disc)); b.addEventListener('click',function(){abrirCapitulo(id,cap.id);}); lista.appendChild(b);
    });
    mostrar('tela-disciplina');
  }

  function abrirCapitulo(discId,capId,aba) {
    var disc=discPorId(discId), cap=capPorId(disc,capId); if(!cap) return renderHome();
    estado.disciplina=discId; estado.capitulo=capId; estado.ultimo={disciplina:discId,capitulo:capId};
    /* O vídeo funciona como abertura do módulo. Uma aba explícita ainda é
       respeitada quando a navegação vem de dentro da própria experiência. */
    estado.aba=aba||(cap.video?'video':estado.areas[capId]||'teoria');
    estado.passoDescoberta=Number(estado.leitura[capId])||0;
    estado.passoDescoberta=Math.min(estado.passoDescoberta||0,Math.max(0,cap.theory.length-1)); zerarPlacar(); salvar();
    $('#tela-capitulo').style.setProperty('--acento',acento(disc));
    $('#cap-trilha').textContent=disc.nome+' · módulo '+cap.module;
    $('#cap-titulo').textContent=cap.title; $('#cap-sub').textContent=cap.subtitle||'';
    var plano=(typeof PEDAGOGY!=='undefined'&&PEDAGOGY[cap.id])||null;
    $('#cap-pergunta').innerHTML=plano&&plano.objectives?'<strong>Você vai aprender a:</strong> '+plano.objectives.map(textoSeguro).join(' · '):textoSeguro(conviteMissao(cap.theory[0]||{},0));
    var videoTab=$('#aba-video'); videoTab.hidden=!cap.video;
    renderTeoria(cap); renderVideo(cap); jogoAtual=0; renderJogos(cap); iniciarQuiz(cap);
    selecionarAba((estado.aba==='video'&&!cap.video)?'teoria':estado.aba,false);
    mostrar('tela-capitulo');
  }

  function renderTeoria(cap) {
    var raiz=$('#teoria-conteudo'); raiz.innerHTML='';
    var idx=Math.max(0,Math.min(estado.passoDescoberta,cap.theory.length-1)), bloco=cap.theory[idx];
    /* O objetivo geral permanece no cabeçalho; a provocação desta missão aparece no cartão. */
    if(idx===0) raiz.appendChild(falaMascote('Observe o título e a imagem da missão. Antes de ler, conte o que você já sabe ou percebe sobre o assunto.',false));
    else if(temaBloco(bloco)!==temaBloco(cap.theory[idx-1])) raiz.appendChild(falaMascote('Nova descoberta: o assunto muda um pouco agora. Procure uma ligação com o que você acabou de aprender.',true));
    var passos=criar('div','passos');
    cap.theory.forEach(function(_,i){var p=criar('button','passos__ponto'+(i===idx?' passos__ponto--ativo':''),null,{type:'button','aria-label':'Ir para a missão '+(i+1)});p.addEventListener('click',function(){guardarPasso(cap,i);renderTeoria(cap);});passos.appendChild(p);});
    raiz.appendChild(passos);
    var card=criar('article','bloco-leitura'), recorte=separarResumo(bloco.p||[]), fonteNumerada=(bloco.p||[]).find(function(p){return /<strong>1\.<\/strong>/.test(p)&&/<strong>2\.<\/strong>/.test(p);});
    if(fonteNumerada){recorte.resumo=fonteNumerada.split(/<strong>1\.<\/strong>/)[0].replace(/[\s:]+$/,'')+'.';recorte.detalhes=(bloco.p||[]).filter(function(p){return p!==fonteNumerada;});}
    card.innerHTML='<p class="bloco-leitura__etapa">Missão '+(idx+1)+' de '+cap.theory.length+'</p><h3>'+textoSeguro(bloco.h)+'</h3>'+
      '<p class="missao-convite">'+textoSeguro(conviteMissao(bloco,idx))+'</p>';
    var visual=visualDaDescoberta(bloco), destaque=criar('div','descoberta-destaque');
    destaque.appendChild(criar('figure','descoberta-visual','<img src="'+textoSeguro(visual.src)+'" alt="'+textoSeguro(visual.alt)+'" loading="lazy">'));
    destaque.appendChild(criar('div','ideia-principal','<span>Ideia principal</span><p>'+explicarTermos(recorte.resumo)+'</p>'));
    card.appendChild(destaque);
    var sequencia=montarSequencia(bloco.p||[]); if(sequencia) card.appendChild(sequencia);
    if(recorte.detalhes.length){var det=criar('details');det.innerHTML='<summary>Entender melhor</summary>';recorte.detalhes.forEach(function(p){det.appendChild(criar('p',null,explicarTermos(p)));var transformacao=montarTransformacao(p);if(transformacao)det.appendChild(transformacao);});card.appendChild(det);}
    if(cap.pageImages && cap.pageImages[idx%2] && (idx===1 || idx===cap.theory.length-1)) {
      var fig=criar('figure','pagina-livro','<img src="'+textoSeguro(cap.pageImages[idx%2])+'" alt="Página do material deste assunto" loading="lazy"><figcaption>Uma página do material para observar com calma</figcaption>'); card.appendChild(figuraOpcional(fig));
    }
    if(idx===cap.theory.length-1){card.appendChild(criar('aside','pausa','<strong>Pausa para pensar</strong>Como você explicaria esta descoberta para alguém da sua idade? Não precisa usar palavras de livro.'));}
    raiz.appendChild(card);
    var nav=criar('div','navegacao');
    var ant=criar('button','botao','← Anterior',{type:'button'}); ant.disabled=idx===0; ant.addEventListener('click',function(){guardarPasso(cap,idx-1);renderTeoria(cap);irTopo();});
    var prox=criar('button','botao botao--primario',idx===cap.theory.length-1?'Vamos jogar →':'Próxima →',{type:'button'}); prox.addEventListener('click',function(){if(idx===cap.theory.length-1){selecionarAba('jogos',true);}else{guardarPasso(cap,idx+1);renderTeoria(cap);irTopo();}});
    nav.appendChild(ant);nav.appendChild(prox);raiz.appendChild(nav);
  }
  function guardarPasso(cap,indice) { estado.passoDescoberta=indice;estado.leitura[cap.id]=indice;salvar(); }

  function montarSequencia(paragrafos) {
    var fonte=(paragrafos||[]).find(function(p){return /<strong>1\.<\/strong>/.test(p)&&/<strong>2\.<\/strong>/.test(p);});
    if(!fonte)return null;
    var partes=fonte.split(/<strong>\d+\.<\/strong>/).slice(1).map(function(p){return p.replace(/^[\s,;:]+|[\s,;:]+$/g,'');}).filter(Boolean);
    if(partes.length<2)return null;
    var box=criar('div','sequencia-visual','<strong>Veja o passo a passo</strong>'), lista=criar('ol');
    partes.forEach(function(p){lista.appendChild(criar('li',null,explicarTermos(p)));});box.appendChild(lista);return box;
  }
  function montarTransformacao(paragrafo) {
    if(String(paragrafo).indexOf('→')<0)return null;
    var limpo=String(paragrafo).replace(/<[^>]+>/g,'').replace(/^.*?:\s*/,'');
    var partes=limpo.split('→').map(function(x){return x.trim().replace(/[.;]$/,'');}).filter(Boolean);
    if(partes.length<2||partes.length>6)return null;
    var box=criar('div','transformacao');
    partes.forEach(function(p,i){box.appendChild(criar('span','transformacao__passo',textoSeguro(p)));if(i<partes.length-1)box.appendChild(criar('span','transformacao__seta','→'));});return box;
  }

  function renderVideo(cap) {
    var raiz=$('#video-conteudo'); raiz.innerHTML=''; if(!cap.video)return;
    var card=criar('section','video-abertura');
    card.appendChild(criar('h3',null,'Veja uma apresentação deste módulo'));
    card.appendChild(criar('p','video-abertura__convite','Assista ao vídeo para conhecer as ideias que você vai explorar.'));
    var frame=criar('div','video-frame'), carregando=criar('div','video-carregando','<span class="video-carregando__giro" aria-hidden="true"></span><strong>Carregando o vídeo…</strong>',{role:'status','aria-live':'polite'});
    var video=criar('video',null,null,{controls:'',preload:'metadata',playsinline:'','aria-label':'Apresentação do módulo '+cap.module});
    video.src=cap.video;
    function pronto(){carregando.hidden=true;frame.classList.add('video-frame--pronto');}
    function esperando(){carregando.hidden=false;carregando.querySelector('strong').textContent='Carregando o vídeo…';}
    video.addEventListener('loadeddata',pronto);video.addEventListener('canplay',pronto);video.addEventListener('playing',pronto);video.addEventListener('waiting',esperando);
    video.addEventListener('error',function(){carregando.hidden=false;carregando.classList.add('video-carregando--erro');carregando.innerHTML='<span aria-hidden="true">⚠️</span><strong>Não foi possível carregar o vídeo. Tente novamente em instantes.</strong>';});
    frame.appendChild(video);frame.appendChild(carregando);card.appendChild(frame);
    var nav=criar('div','navegacao');nav.appendChild(criar('span'));var descobrir=criar('button','botao botao--primario','Começar a descobrir →',{type:'button'});descobrir.addEventListener('click',function(){selecionarAba('teoria',true);});nav.appendChild(descobrir);card.appendChild(nav);raiz.appendChild(card);
  }

  function renderJogos(cap) {
    var raiz=$('#jogos-conteudo'); raiz.innerHTML='';
    if(!cap.games||!cap.games.length){raiz.appendChild(criar('div','vazio','Ainda não há experiências para este assunto.'));return;}
    var salvo=progressoExperiencias(cap);jogoAtual=Math.max(0,Math.min(salvo.atual||0,cap.games.length-1));salvo.atual=jogoAtual;
    var game=cap.games[jogoAtual], perfis=(typeof EXPERIENCE_PROFILES!=='undefined'&&EXPERIENCE_PROFILES[cap.id])||[], perfil=perfis[jogoAtual]||{mode:game.type==='pairs'?'explore':'choice',goal:game.title,prompt:game.instructions,result:'descoberta'};
    raiz.appendChild(montarHud());
    if(cap.games.length>1)raiz.appendChild(seletorDeJogos(cap,salvo));
    montarNovaExperiencia(raiz,cap,game,perfil,salvo);
  }
  /* Todo jogo do capítulo fica sempre à mão — inclusive os já concluídos. */
  function seletorDeJogos(cap,salvo) {
    var barra=criar('div','seletor-jogos',null,{role:'tablist','aria-label':'Jogos deste assunto'});
    cap.games.forEach(function(g,i){
      var feito=!!salvo.feitas[i], atual=i===jogoAtual;
      var b=criar('button','seletor-jogo'+(atual?' seletor-jogo--atual':'')+(feito?' seletor-jogo--feito':''),
        '<span class="seletor-jogo__n">'+(feito?'✓':(i+1))+'</span><span>'+textoSeguro(g.short||g.title)+'</span>',
        {type:'button',role:'tab','aria-selected':atual?'true':'false'});
      b.addEventListener('click',function(){
        if(i===jogoAtual)return;
        jogoAtual=i;salvo.atual=i;zerarPlacar();salvar();renderJogos(cap);irTopo();
      });
      barra.appendChild(b);
    });
    return barra;
  }

  function progressoExperiencias(cap) {
    if(!estado.experiencias[cap.id]){
      var jaConcluido=estado.progresso[cap.id]&&estado.progresso[cap.id].feito;
      estado.experiencias[cap.id]={feitas:cap.games.map(function(){return !!jaConcluido;}),passos:{},atual:0};
      if(jaConcluido)cap.games.forEach(function(g,i){estado.experiencias[cap.id].passos[i]=totalItens(g,((typeof EXPERIENCE_PROFILES!=='undefined'&&EXPERIENCE_PROFILES[cap.id])||[])[i]||{});});
      salvar();
    }
    var p=estado.experiencias[cap.id];p.feitas=p.feitas||[];p.passos=p.passos||{};return p;
  }
  function totalItens(game,perfil) { return perfil.mode==='sequence'?game.pairs.length:(game.type==='pairs'?game.pairs.length:game.items.length); }

  /* --- Estrutura dos três tempos: mexer → ver acontecer → dar o nome. ------
     O artefato é a coisa que a criança constrói. Ele fica visível no topo e
     ganha uma peça a cada rodada; a nomeação fecha a rodada dizendo como o
     que ela acabou de fazer se chama na prova. */
  function pecasConquistadas(game,passo,indices) {
    /* Na memória os pares saem fora de ordem, então o artefato é montado a
       partir dos índices realmente achados, e não dos N primeiros itens. */
    var lista=indices?indices.map(function(i){return game.items[i];}):(game.items||[]).slice(0,passo);
    return lista.filter(Boolean).map(function(item){
      return item.piece ? {texto:item.piece,nome:item.name} : (item.result ? {texto:item.result,nome:item.name} : null);
    }).filter(Boolean);
  }
  function renderArtefato(game,passo,completo,indices) {
    var arte=game.artifact; if(!arte)return null;
    var pecas=pecasConquistadas(game,completo?(game.items||[]).length:passo,completo?null:indices);
    var caixa=criar('section','artefato artefato--'+(arte.kind||'objeto')+(completo?' artefato--pronto':'')+(!pecas.length?' artefato--vazio':''));
    caixa.appendChild(criar('h4','artefato__titulo',textoSeguro(arte.title)));
    if(!pecas.length){caixa.appendChild(criar('p','artefato__vazio',textoSeguro(arte.empty||'Ainda não tem nada aqui.')));return caixa;}
    var lista=criar('ol','artefato__pecas');
    pecas.forEach(function(p){
      var li=criar('li','artefato__peca','<span class="artefato__texto">'+textoSeguro(p.texto)+'</span>'+
        (p.nome?'<span class="artefato__etiqueta">'+textoSeguro(p.nome)+'</span>':''));
      lista.appendChild(li);
    });
    caixa.appendChild(lista);
    if(completo&&arte.done)caixa.appendChild(criar('p','artefato__fecho',textoSeguro(arte.done)));
    return caixa;
  }
  /* Terceiro tempo: a criança já fez a coisa; agora ela recebe o nome dela. */
  function comemorar(forte) {
    pontuar(true); bip(forte?'vitoria':'ok'); festejar(forte);
  }
  function elogio() {
    if(placar.sequencia>=5)return '🔥 '+placar.sequencia+' seguidas! Você está voando.';
    if(placar.sequencia>=3)return '🔥 '+placar.sequencia+' seguidas!';
    return ['Boa!','Isso!','Mandou bem!','Acertou!'][Math.floor(Math.random()*4)];
  }
  function fecharRodada(stage,item,game,aoContinuar) {
    stage.querySelectorAll('.feedback,.pista-dinamica,.nomeacao').forEach(function(n){n.remove();});
    stage.querySelectorAll('button').forEach(function(b){b.disabled=true;});
    comemorar(false);
    var caixa=criar('div','nomeacao',null,{role:'status'});
    caixa.appendChild(criar('p','nomeacao__viva',textoSeguro(elogio())));
    if(item.name)caixa.appendChild(criar('p','nomeacao__rotulo','Isso tem nome: <strong>'+textoSeguro(item.name)+'</strong>'));
    if(item.say)caixa.appendChild(criar('p','nomeacao__texto',item.say));
    stage.appendChild(caixa);
    var nav=criar('div','navegacao');nav.appendChild(criar('span'));
    var seguir=criar('button','botao botao--primario','Continuar →',{type:'button'});
    seguir.addEventListener('click',aoContinuar);nav.appendChild(seguir);stage.appendChild(nav);
    revelar(caixa,nav);
  }
  function errarRodada(stage,botao,erros,pista) {
    pontuar(false); bip('erro');
    botao.classList.add('decisao--errada');
    setTimeout(function(){botao.classList.remove('decisao--errada');},500);
    if(erros>=2&&pista)mostrarPista(stage,pista);
  }
  function marcarPasso(cap,game,perfil,salvo,manterTela) {
    var total=totalItens(game,perfil), atual=Number(salvo.passos[jogoAtual])||0;atual++;salvo.passos[jogoAtual]=atual;
    if(atual>=total)salvo.feitas[jogoAtual]=true;
    salvar();
    /* O tabuleiro da memória não pode ser redesenhado a cada par: as cartas
       viradas se perderiam. Quem decide a hora de redesenhar é o próprio jogo. */
    if(manterTela)return;
    renderJogos(cap);irTopo();
  }
  function reiniciarExperiencia(cap,salvo) {
    salvo.feitas[jogoAtual]=false;salvo.passos[jogoAtual]=0;
    if(salvo.achados)salvo.achados[jogoAtual]=[];
    zerarPlacar();salvar();renderJogos(cap);
  }
  function montarNovaExperiencia(raiz,cap,game,perfil,salvo) {
    var total=totalItens(game,perfil), passo=Math.min(Number(salvo.passos[jogoAtual])||0,total), feita=!!salvo.feitas[jogoAtual];
    if(feita){renderConclusaoExperiencia(raiz,cap,game,perfil,salvo,total);return;}
    var card=criar('section','jogo-card jogo-card--novo jogo-card--'+textoSeguro(perfil.mode||'atividade'));
    var artefato=renderArtefato(game,passo,false,perfil.mode==='memoria'?(salvo.achados&&salvo.achados[jogoAtual]||[]):null);
    if(artefato){
      /* Com artefato, quem marca o progresso é o próprio objeto enchendo —
         não precisa dizer à criança quantas perguntas ainda faltam. */
      card.appendChild(artefato);
    } else {
      card.appendChild(criar('div','progresso-jogo','<span style="width:'+Math.round(passo/total*100)+'%"></span>'));
      card.appendChild(criar('p','atividade-progresso','Jogo '+(jogoAtual+1)+' de '+cap.games.length+' · item '+(passo+1)+' de '+total));
    }
    card.appendChild(criar('h3','jogo-pergunta',textoSeguro(perfil.prompt)));
    var stage=criar('div','game-stage');card.appendChild(stage);raiz.appendChild(card);
    var concluir=function(){marcarPasso(cap,game,perfil,salvo);};
    if(perfil.mode==='memoria') renderMemoria(stage,game,perfil,cap,salvo,
      function(){marcarPasso(cap,game,perfil,salvo,true);},    /* guarda, sem redesenhar */
      function(){renderJogos(cap);irTopo();});                  /* aí sim mostra o resultado */
    else if(perfil.mode==='cartaz') renderCartaz(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='maquina') renderMaquina(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='scenario'&&game.type==='pairs')renderConstrucao(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='choice'||perfil.mode==='scenario'||perfil.mode==='combinations') renderEscolhaUnica(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='builder'||perfil.mode==='explore') renderConstrucao(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='clock') renderRelogio(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='distribute') renderDistribuicao(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='sequence') renderSequenciaJogo(stage,game,passo,perfil,concluir);
    else if(perfil.mode==='transform') renderTransformacaoJogo(stage,game,passo,perfil,concluir);
    else if(game.type==='pairs')renderConstrucao(stage,game,passo,perfil,concluir);else renderEscolhaUnica(stage,game,passo,perfil,concluir);
  }
  function renderConclusaoExperiencia(raiz,cap,game,perfil,salvo,total) {
    var arte=game&&game.artifact, box;
    if(arte){
      /* A recompensa é a coisa pronta na tela — e só aqui o termo da prova
         aparece sozinho, como nome do que a criança acabou de construir. */
      box=criar('section','jogo-card jogo-conclusao','<h3>🎉 Você montou '+textoSeguro(perfil.result)+'.</h3>');
      box.appendChild(renderArtefato(game,total,true));
      if(arte.termLine)box.appendChild(criar('p','conclusao-termo',arte.termLine));
    } else {
      box=criar('section','jogo-card jogo-conclusao','<h3>🎉 Você completou '+textoSeguro(perfil.result)+'.</h3>');
    }
    var nav=criar('div','navegacao'), repetir=criar('button','botao','Jogar novamente',{type:'button'});repetir.addEventListener('click',function(){reiniciarExperiencia(cap,salvo);});nav.appendChild(repetir);
    if(jogoAtual<cap.games.length-1){var proximo=criar('button','botao botao--primario','Próximo jogo →',{type:'button'});proximo.addEventListener('click',function(){jogoAtual++;salvo.atual=jogoAtual;salvar();renderJogos(cap);});nav.appendChild(proximo);}box.appendChild(nav);raiz.appendChild(box);
  }
  function opcoesEmbaralhadas(lista,correta,limite) {
    var unicas=[];[correta].concat(misturar(lista)).forEach(function(x){if(unicas.indexOf(x)<0)unicas.push(x);});return misturar(unicas.slice(0,limite||3));
  }
  function feedbackInterativo(stage,certo,mensagem,pista,aoContinuar) {
    stage.querySelectorAll('.feedback,.pista-dinamica').forEach(function(n){n.remove();});
    pontuar(certo); bip(certo?'ok':'erro'); if(certo)festejar(false);
    var fb=criar('div','feedback '+(certo?'feedback--ok':'feedback--erro'),'<strong>'+(certo?elogio():'Ainda não.')+'</strong><p class="explicacao">'+textoSeguro(mensagem)+'</p>',{role:'status'});stage.appendChild(fb);
    if(!certo&&pista)mostrarPista(stage,pista);
    if(certo){stage.querySelectorAll('button').forEach(function(b){b.disabled=true;});var nav=criar('div','navegacao');nav.appendChild(criar('span'));var seguir=criar('button','botao botao--primario','Ver a próxima →',{type:'button'});seguir.addEventListener('click',aoContinuar);nav.appendChild(seguir);stage.appendChild(nav);revelar(fb,nav);}
    else revelar(fb);
  }
  function mostrarPista(stage,mensagem) {stage.querySelectorAll('.pista-dinamica').forEach(function(n){n.remove();});var m=falaMascote(mensagem,true);m.classList.add('pista-dinamica');stage.appendChild(m);revelar(m);}
  /* Jogo da memória: as cartas ficam viradas para baixo e a criança procura a
     palavra que combina. Cada par achado nomeia o grau e vai para o artefato. */
  function renderMemoria(stage,game,perfil,cap,salvo,registrar,verResultado) {
    var achados=(salvo.achados&&salvo.achados[jogoAtual]||[]).slice();
    var cartas=[];
    game.items.forEach(function(item,i){
      cartas.push({i:i,texto:item.base,lado:'base'});
      cartas.push({i:i,texto:item.result,lado:'result'});
    });
    cartas=misturar(cartas);
    var mesa=criar('div','memoria'), virada=null, travado=false;
    cartas.forEach(function(carta){
      var achada=achados.indexOf(carta.i)>=0;
      var b=criar('button','carta'+(achada?' carta--achada':''),
        '<span class="carta__verso" aria-hidden="true"><i>✦</i></span><span class="carta__frente">'+textoSeguro(carta.texto)+'</span>',
        {type:'button','aria-label':achada?carta.texto:'Carta virada para baixo'});
      b.dados=carta;
      if(achada)b.disabled=true;
      b.addEventListener('click',function(){
        if(travado||b.disabled||b===virada)return;
        b.classList.add('carta--aberta'); b.setAttribute('aria-label',carta.texto);
        if(!virada){virada=b; bip('ok'); return;}
        var outra=virada; virada=null;
        if(outra.dados.i===carta.i){
          [outra,b].forEach(function(x){x.classList.add('carta--achada');x.disabled=true;});
          achados.push(carta.i);
          salvo.achados=salvo.achados||{}; salvo.achados[jogoAtual]=achados.slice();
          var ultimo=achados.length>=game.items.length;
          comemorar(ultimo);
          trocarArtefato(game,achados);
          registrar();
          /* Mesmo no último par a nomeação aparece primeiro: o resultado só
             entra quando a criança tocar em continuar. */
          nomearInline(stage,game.items[carta.i],ultimo?verResultado:null);
        } else {
          travado=true; pontuar(false); bip('erro');
          [outra,b].forEach(function(x){x.classList.add('carta--errada');});
          setTimeout(function(){
            [outra,b].forEach(function(x){x.classList.remove('carta--aberta','carta--errada');x.setAttribute('aria-label','Carta virada para baixo');});
            travado=false;
          },900);
        }
      });
      mesa.appendChild(b);
    });
    stage.appendChild(mesa);
  }
  /* Na memória a nomeação não trava nada: a criança continua jogando. */
  function nomearInline(stage,item,aoFechar) {
    stage.querySelectorAll('.nomeacao').forEach(function(n){n.remove();});
    stage.querySelectorAll('.navegacao').forEach(function(n){n.remove();});
    var caixa=criar('div','nomeacao nomeacao--solta',null,{role:'status'});
    caixa.appendChild(criar('p','nomeacao__viva',textoSeguro(aoFechar?'🎉 Achou todos os pares!':elogio())));
    if(item.name)caixa.appendChild(criar('p','nomeacao__rotulo','Par achado: <strong>'+textoSeguro(item.name)+'</strong>'));
    if(item.say)caixa.appendChild(criar('p','nomeacao__texto',item.say));
    stage.appendChild(caixa);
    var fim=caixa;
    if(aoFechar){
      var nav=criar('div','navegacao');nav.appendChild(criar('span'));
      var b=criar('button','botao botao--primario','Ver o que você achou →',{type:'button'});
      b.addEventListener('click',aoFechar);nav.appendChild(b);stage.appendChild(nav);fim=nav;
    }
    revelar(caixa,fim);
  }
  function trocarArtefato(game,achados) {
    var velho=$('.artefato'); if(!velho)return;
    var novo=renderArtefato(game,achados.length,false,achados);
    if(novo)velho.parentNode.replaceChild(novo,velho);
  }

  /* Jogo do cartaz: a criança lê um trecho de verdade e decide se ele ensina
     alguém a fazer algo. O que entra vira um passo do cartaz, ali em cima. */
  function renderCartaz(stage,game,passo,perfil,concluir) {
    var item=game.items[passo], erros=0;
    var cena=criar('div','cena-trecho','<span class="cena-trecho__selo">Trecho recortado</span><p class="cena-trecho__texto">'+textoSeguro(item.text)+'</p>');
    stage.appendChild(cena);
    var opcoes=criar('div','decisoes decisoes--cartaz');
    game.categories.forEach(function(nome,i){
      var b=criar('button','decisao decisao--grande'+(i===0?' decisao--aceitar':' decisao--recusar'),
        (i===0?'<span aria-hidden="true">📋</span> ':'<span aria-hidden="true">🗑️</span> ')+textoSeguro(nome),{type:'button'});
      b.addEventListener('click',function(){
        if(i===item.cat){
          b.classList.add('decisao--certa');
          cena.classList.add(item.cat===0?'cena-trecho--aceita':'cena-trecho--recusada');
          fecharRodada(stage,item,game,concluir);
        } else {
          erros++;
          errarRodada(stage,b,erros,'Pergunte a si mesma: alguém consegue FAZER alguma coisa lendo isso?');
        }
      });
      opcoes.appendChild(b);
    });
    stage.appendChild(opcoes);
  }
  /* Máquina de encolher e crescer: a palavra entra INTEIRA e a saída fica em
     branco — nada de pedaço pré-quebrado, que só confunde. A criança escolhe
     entre palavras inteiras (as erradas são os erros que a prova cobra) e vê
     a palavra escolhida encolher ou crescer de verdade na tela. */
  function renderMaquina(stage,game,passo,perfil,concluir) {
    var item=game.items[passo], erros=0, cresce=item.dir==='maior';
    var acao=(cresce?'CRESCER':'ENCOLHER')+(item.plural?' MUITOS':'');
    var maquina=criar('div','maquina'+(cresce?' maquina--cresce':' maquina--encolhe'));
    maquina.innerHTML='<figure class="maquina__ilustracao"><img src="assets/'+(cresce?'jogo-maquina-aumentar.webp':'jogo-maquina-encolher.webp')+'" alt="Máquina '+(cresce?'aumentadora':'encolhedora')+' transformando um vaso"><figcaption>'+ (cresce?'Máquina de aumentar':'Máquina de encolher') +'</figcaption></figure>'+
      '<div class="maquina__painel"><div class="maquina__lado"><span>1 · entra</span><strong class="maquina__base">'+textoSeguro(item.base)+'</strong></div>'+
      '<div class="maquina__corpo"><i class="maquina__engrenagem" aria-hidden="true">⚙</i><span class="maquina__acao">'+textoSeguro(acao)+'</span></div>'+
      '<div class="maquina__lado"><span>2 · sai</span><strong class="maquina__saida">?</strong></div></div>';
    stage.appendChild(maquina);
    var escolhas=criar('div','palavras-maquina');
    misturar([item.result].concat(item.wrong||[])).forEach(function(op){
      var b=criar('button','palavra-maquina',textoSeguro(op),{type:'button'});
      b.addEventListener('click',function(){
        if(op===item.result){
          b.classList.add('decisao--certa');
          var saida=maquina.querySelector('.maquina__saida');
          saida.textContent=op;
          maquina.classList.add('maquina--pronta');
          fecharRodada(stage,item,game,concluir);
        } else {
          erros++;
          errarRodada(stage,b,erros,item.plural
            ? 'Passe a palavra para o plural primeiro e olhe como ela termina.'
            : 'Olhe a última sílaba de “'+item.base+'”. Ela tem a letra S?');
        }
      });
      escolhas.appendChild(b);
    });
    stage.appendChild(escolhas);
  }
  function renderEscolhaUnica(stage,game,passo,perfil,concluir) {
    var item=game.items[passo], erros=0, cena=criar('div','cena-decisao');
    if(perfil.mode==='scenario')cena.appendChild(criar('span','cena-decisao__selo','Situação'));
    if(perfil.mode==='combinations')cena.appendChild(criar('div','cena-objetos',visualizarNumeros(item.text)));
    cena.appendChild(criar('p','cena-decisao__texto',textoSeguro(item.text)));stage.appendChild(cena);
    var opcoes=criar('div','decisoes'+(game.categories.length>2?' decisoes--muitas':''));
    game.categories.forEach(function(nome,i){var b=criar('button','decisao',textoSeguro(rotuloCurto(nome)),{type:'button'});b.addEventListener('click',function(){if(i===item.cat){b.classList.add('decisao--certa');if(/__/.test(item.text))cena.querySelector('.cena-decisao__texto').textContent=completarLacuna(item.text,nome);feedbackInterativo(stage,true,mensagemDaEscolha(item,nome,perfil),'',concluir);}else{erros++;b.classList.add('decisao--errada');setTimeout(function(){b.classList.remove('decisao--errada');},500);if(erros===1)feedbackInterativo(stage,false,'Leia o cartão novamente e compare com as respostas.','',function(){});else if(erros>=2)mostrarPista(stage,'Pista: a melhor resposta é “'+rotuloCurto(game.categories[item.cat])+'”.');}});opcoes.appendChild(b);});stage.appendChild(opcoes);
  }
  function mensagemDaEscolha(item,categoria,perfil) {
    if(perfil.result==='conjunto de pistas')return item.cat===0?'Sim. Isso ajuda a pessoa a entender e seguir os passos.':'Certo. Isso aparece em outros tipos de texto, não em uma instrução.';
    return 'Esta situação combina com “'+rotuloCurto(categoria)+'”.';
  }
  function completarLacuna(texto,categoria) {var letra=/com S/i.test(categoria)?'s':(/com Z/i.test(categoria)?'z':'');return String(texto).replace('__',letra);}
  function rotuloCurto(nome) {
    return String(nome).replace('Característica do texto instrucional','Sim, é uma pista').replace('NÃO é característica dele','Não é uma pista').replace('Combinação de possibilidades','Combinar escolhas').replace('Adição de parcelas iguais','Repetir grupos iguais').replace(/^Substantivo$/,'Dá nome').replace(/^Adjetivo$/,'Mostra característica');
  }
  function visualizarNumeros(texto) {
    var nums=String(texto).match(/\d+/g)||[];if(!nums.length)return '<span class="objeto-visual">?</span>';
    return nums.slice(0,2).map(function(n){return '<span class="objeto-visual">'+n+'</span>';}).join('<span class="objeto-visual__vezes">×</span>');
  }
  function renderConstrucao(stage,game,passo,perfil,concluir) {
    if(game.type==='sort'){renderEscolhaUnica(stage,game,passo,perfil,concluir);return;}
    if(perfil.wordParts){renderConstrucaoPalavra(stage,game,passo,concluir);return;}
    var par=game.pairs[passo], respostas=game.pairs.map(function(p){return p[1];}), opcoes=opcoesEmbaralhadas(respostas,par[1],3), erros=0;
    var cena=criar('div','cena-construcao','<span class="cena-decisao__selo">'+(perfil.mode==='explore'?'Pista para investigar':'Peça inicial')+'</span><p>'+textoSeguro(par[0])+'</p><div class="construcao-resultado" aria-live="polite"><span>?</span></div>');stage.appendChild(cena);
    var escolhas=criar('div','decisoes decisoes--coluna');opcoes.forEach(function(op){var b=criar('button','decisao',textoSeguro(op),{type:'button'});b.addEventListener('click',function(){if(op===par[1]){b.classList.add('decisao--certa');cena.querySelector('.construcao-resultado').innerHTML=montarPecasResposta(op);feedbackInterativo(stage,true,'A ligação ficou completa. Observe as duas partes juntas.','',concluir);}else{erros++;b.classList.add('decisao--errada');setTimeout(function(){b.classList.remove('decisao--errada');},500);if(erros===1)feedbackInterativo(stage,false,'Essa peça não completa a ideia.','',function(){});else if(erros>=2)mostrarPista(stage,'A resposta correta começa com “'+par[1].slice(0,Math.min(4,par[1].length))+'…”.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }
  function prefixoComum(a,b) {var i=0;a=String(a);b=String(b);while(i<a.length&&i<b.length&&normalizar(a[i])===normalizar(b[i]))i++;return a.slice(0,i);}
  function partesDaPalavra(par) {var base=prefixoComum(par[0],par[1]);return {base:base,sufixo:String(par[1]).slice(base.length)};}
  function renderConstrucaoPalavra(stage,game,passo,concluir) {
    var par=game.pairs[passo], partes=partesDaPalavra(par), sufixos=game.pairs.map(partesDaPalavra).map(function(x){return x.sufixo;}), opcoes=opcoesEmbaralhadas(sufixos,partes.sufixo,4), erros=0;
    var cena=criar('div','cena-construcao','<span class="cena-decisao__selo">Palavra original: '+textoSeguro(par[0])+'</span><div class="palavra-montagem"><span>'+textoSeguro(partes.base)+'</span><b>?</b></div>');stage.appendChild(cena);
    var escolhas=criar('div','pecas-palavra');opcoes.forEach(function(op){var b=criar('button','peca-palavra',textoSeguro(op),{type:'button'});b.addEventListener('click',function(){if(op===partes.sufixo){b.classList.add('decisao--certa');cena.querySelector('.palavra-montagem b').textContent=op;feedbackInterativo(stage,true,partes.base+' + '+op+' forma '+par[1]+'.','',concluir);}else{erros++;b.classList.add('decisao--errada');setTimeout(function(){b.classList.remove('decisao--errada');},500);if(erros>=2)mostrarPista(stage,'Observe como começa “'+par[1]+'”. A parte que falta vem logo depois de “'+partes.base+'”.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }
  function montarPecasResposta(resposta) {
    var partes=String(resposta).split(/(\s+|→|=)/).filter(function(x){return x.trim();});return partes.map(function(p){return '<span>'+textoSeguro(p)+'</span>';}).join('');
  }
  function horaDoTexto(txt) {var t=normalizar(txt);if(t.indexOf('meia noite')>=0)return 0;if(t.indexOf('meio dia')>=0)return 12;var m=t.match(/\d+/);return m?Number(m[0])%12:0;}
  function renderRelogio(stage,game,passo,perfil,concluir) {
    var par=game.pairs[passo], hora=horaDoTexto(par[0]), respostas=game.pairs.map(function(p){return p[1];}), opcoes=opcoesEmbaralhadas(respostas,par[1],3), erros=0;
    var relogio=criar('div','relogio-jogo','<span class="relogio__n r12">12</span><span class="relogio__n r3">3</span><span class="relogio__n r6">6</span><span class="relogio__n r9">9</span><i class="ponteiro ponteiro--hora" style="transform:rotate('+(hora*30)+'deg)"></i><i class="ponteiro ponteiro--minuto"></i><b></b>');stage.appendChild(criar('p','cena-legenda',textoSeguro(par[0])));stage.appendChild(relogio);
    var escolhas=criar('div','decisoes');opcoes.forEach(function(op){var b=criar('button','decisao',textoSeguro(op),{type:'button'});b.addEventListener('click',function(){if(op===par[1]){b.classList.add('decisao--certa');feedbackInterativo(stage,true,'O relógio e o horário de 24 horas representam o mesmo momento.','',concluir);}else{erros++;b.classList.add('decisao--errada');if(erros>=2)mostrarPista(stage,'Depois do meio-dia, podemos somar 12 à hora mostrada.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }
  function divisorDoTexto(txt) {var bruto=String(txt),m=bruto.match(/÷\s*(\d+)/);if(m)return Number(m[1]);var t=normalizar(txt);if(/terca/.test(t))return 3;if(/metade/.test(t))return 2;if(/quinta/.test(t))return 5;if(/quarta/.test(t))return 4;if(/decima/.test(t))return 10;return 2;}
  function renderDistribuicao(stage,game,passo,perfil,concluir) {
    var par=game.pairs[passo], numeros=String(par[0]).match(/\d+/g)||[], total=String(par[0]).indexOf('÷')>=0?Number(numeros[0]):Number(numeros[numeros.length-1]), divisor=divisorDoTexto(par[0]), resposta=Number(par[1]), alternativas=opcoesEmbaralhadas([String(Math.max(1,resposta-1)),String(resposta+1),String(resposta+2)],String(resposta),3), erros=0;
    stage.appendChild(criar('p','cena-legenda',textoSeguro(par[0])));var objetos=criar('div','objetos-divisao');for(var i=0;i<Math.min(total,40);i++)objetos.appendChild(criar('i','objeto-divisao'));stage.appendChild(objetos);
    var grupos=criar('div','grupos-divisao');for(var g=0;g<divisor;g++)grupos.appendChild(criar('div','grupo-divisao','<span>grupo '+(g+1)+'</span>'));stage.appendChild(grupos);
    var escolhas=criar('div','decisoes');alternativas.forEach(function(op){var b=criar('button','decisao',op+' em cada grupo',{type:'button'});b.addEventListener('click',function(){if(Number(op)===resposta){b.classList.add('decisao--certa');objetos.classList.add('objetos-divisao--movidos');grupos.querySelectorAll('.grupo-divisao').forEach(function(gr){for(var j=0;j<resposta&&j<12;j++)gr.appendChild(criar('i','objeto-divisao'));});feedbackInterativo(stage,true,total+' objetos repartidos em '+divisor+' grupos deixam '+resposta+' em cada um.','',concluir);}else{erros++;b.classList.add('decisao--errada');if(erros>=2)mostrarPista(stage,'Experimente contar de '+divisor+' em '+divisor+' até chegar a '+total+'.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }
  function renderSequenciaJogo(stage,game,passo,perfil,concluir) {
    var corretos=game.pairs.slice(0,passo), restantes=misturar(game.pairs.slice(passo)), esperado=game.pairs[passo], erros=0;
    var fluxo=criar('ol','fluxo-etapas');corretos.forEach(function(p){fluxo.appendChild(criar('li',null,'<strong>'+textoSeguro(p[0])+'</strong><span>'+textoSeguro(p[1])+'</span>'));});fluxo.appendChild(criar('li','fluxo-etapas__vazio','Qual é a etapa '+(passo+1)+'?'));stage.appendChild(fluxo);
    var escolhas=criar('div','decisoes decisoes--coluna');restantes.forEach(function(par){var b=criar('button','decisao',textoSeguro(par[0]),{type:'button'});b.addEventListener('click',function(){if(par===esperado){b.classList.add('decisao--certa');feedbackInterativo(stage,true,par[0]+': '+par[1],'',concluir);}else{erros++;b.classList.add('decisao--errada');if(erros>=2)mostrarPista(stage,'Pista: a próxima etapa é “'+esperado[0]+'”.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }
  function renderTransformacaoJogo(stage,game,passo,perfil,concluir) {
    var par=game.pairs[passo], respostas=game.pairs.map(function(p){return p[1];}), opcoes=opcoesEmbaralhadas(respostas,par[1],3), erros=0;
    var painel=criar('div','painel-transformacao','<div><span>Antes</span><strong>'+textoSeguro(par[0])+'</strong></div><i>→</i><div class="painel-transformacao__depois"><span>Depois</span><strong>?</strong></div>');stage.appendChild(painel);
    var escolhas=criar('div','decisoes decisoes--coluna');opcoes.forEach(function(op){var b=criar('button','decisao',textoSeguro(op),{type:'button'});b.addEventListener('click',function(){if(op===par[1]){b.classList.add('decisao--certa');painel.querySelector('.painel-transformacao__depois strong').textContent=op;painel.classList.add('painel-transformacao--pronto');feedbackInterativo(stage,true,'Observe o que mudou em todas as palavras da expressão.','',concluir);}else{erros++;b.classList.add('decisao--errada');if(erros>=2)mostrarPista(stage,'Confira se substantivo, artigo e característica estão todos no plural.');}});escolhas.appendChild(b);});stage.appendChild(escolhas);
  }

  function iniciarQuiz(cap,reiniciar) {
    var guardado=!reiniciar && estado.tentativas[cap.id];
    quiz=guardado ? {indice:guardado.indice||0,acertos:guardado.acertos||0,respondidas:guardado.indice||0,erros:(guardado.erros||[]).map(function(i){return {questao:cap.quiz[i],indiceOriginal:i};}),indices:cap.quiz.map(function(_,i){return i;}),revisao:false,pausa:false} :
      {indice:0,acertos:0,respondidas:0,erros:[],indices:cap.quiz.map(function(_,i){return i;}),revisao:false,pausa:false};
    if(reiniciar){delete estado.tentativas[cap.id];salvar();}
    renderQuestao(cap);
  }
  function salvarTentativa(cap) {
    if(quiz.revisao)return;
    estado.tentativas[cap.id]={indice:quiz.indice,acertos:quiz.acertos,erros:quiz.erros.map(function(e){return e.indiceOriginal;})};salvar();
  }
  function perguntasAtuais(cap) { return quiz.revisao ? quiz.perguntas : cap.quiz; }
  function contextualizarQuestao(cap,q) {
    var texto=q.q, imagem=q.image||null, imagemAlt=q.imageAlt||'', imagemCaption=q.imageCaption||'', contexto='', indice=cap.quiz.indexOf(q), plano=(typeof PEDAGOGY!=='undefined'&&PEDAGOGY[cap.id])||null, ajuste=plano&&plano.questions&&plano.questions[indice];
    if(ajuste){contexto=ajuste.context||'';texto=ajuste.prompt||texto;}
    if(/^Na tirinha,/i.test(texto)) texto=texto.replace(/^Na tirinha,/i,'Leia este diálogo de uma tirinha:');
    if(cap.id==='cie11' && /Antártica aparece completamente escura/i.test(texto)) texto='Uma imagem das luzes noturnas da Terra mostra onde há muitas cidades. Nela, a Antártica aparece completamente escura. Por quê?';
    if(cap.id==='lp17' && /Segundo o cartaz do Unicef/i.test(texto) && cap.pageImages) imagem=cap.pageImages[1]||null;
    if(imagem && !imagemAlt) imagemAlt='Ilustração de apoio para responder à pergunta.';
    if(imagem && !imagemCaption) imagemCaption='Observe a ilustração antes de responder.';
    return {texto:texto,contexto:contexto,imagem:imagem,imagemAlt:imagemAlt,imagemCaption:imagemCaption};
  }
  function renderQuestao(cap) {
    var raiz=$('#desafio-conteudo'); raiz.innerHTML='';
    if(!cap.quiz||!cap.quiz.length){raiz.appendChild(criar('div','vazio','Ainda não há perguntas para este assunto.'));return;}
    var perguntas=perguntasAtuais(cap);
    if(quiz.indice>=perguntas.length){renderResultado(cap);return;}
    var q=perguntas[quiz.indice], contexto=contextualizarQuestao(cap,q), card=criar('section','quiz-card');
    card.innerHTML='<p class="quiz-card__etapa">'+(quiz.revisao?'Revisão · ':'')+'Pergunta '+(quiz.indice+1)+' de '+perguntas.length+'</p>';
    if(contexto.imagem){
      card.appendChild(figuraOpcional(criar('figure','questao-contexto','<a href="'+textoSeguro(contexto.imagem)+'" target="_blank" rel="noopener" aria-label="Ampliar a ilustração"><img src="'+textoSeguro(contexto.imagem)+'" alt="'+textoSeguro(contexto.imagemAlt)+'" loading="lazy"></a><figcaption>'+textoSeguro(contexto.imagemCaption)+' Toque na imagem para ampliá-la.</figcaption>')));
    }
    if(contexto.contexto)card.appendChild(criar('div','questao-contexto-texto','<span>Informações para pensar</span><p>'+textoSeguro(contexto.contexto)+'</p>'));
    card.appendChild(criar('p','quiz-card__pergunta',textoSeguro(contexto.texto)));
    var resposta=criar('div',null,null,{role:'status','aria-live':'polite'}), bloqueado=false, errouAntes=false, erroRegistrado=false;
    function registrarErro(escolha){if(erroRegistrado)return;erroRegistrado=true;quiz.erros.push({questao:q,escolha:escolha,indiceOriginal:quiz.indices[quiz.indice]});}
    function mostrarNovaTentativa(mensagem){resposta.className='feedback feedback--erro';resposta.innerHTML='<strong>Tente mais uma vez.</strong><p class="explicacao">'+textoSeguro(mensagem)+'</p>';revelar(resposta);}
    function concluir(certo,escolha){
      if(bloqueado)return;bloqueado=true;quiz.respondidas++;if(certo&&(!errouAntes||quiz.revisao))quiz.acertos++;if(!certo)registrarErro(escolha);
      resposta.className='feedback '+(certo?'feedback--ok':'feedback--erro');resposta.innerHTML='<strong>'+(certo?(errouAntes?'Agora ficou claro!':'Você percebeu!'):'Vamos entender juntos.')+'</strong>'+(q.explain?'<p class="explicacao">'+textoSeguro(q.explain)+'</p>':'');
      if(!certo)card.appendChild(falaMascote('Tudo bem não acertar ainda. Esta explicação mostra o caminho para a revisão.',true));
      var nav=criar('div','navegacao'), ultima=quiz.indice===perguntas.length-1, prox=criar('button','botao botao--primario',ultima?(quiz.revisao?'Terminar revisão':'Ver resultado'):'Próxima →',{type:'button'});
      if(!quiz.revisao&&!ultima){var guardar=criar('button','botao botao--leve','Continuar depois',{type:'button'});guardar.addEventListener('click',function(){quiz.indice++;salvarTentativa(cap);abrirDisciplina(estado.disciplina);toast('Seu ponto foi guardado.');});nav.appendChild(guardar);}
      prox.addEventListener('click',function(){quiz.indice++;salvarTentativa(cap);renderQuestao(cap);irTopo();});nav.appendChild(prox);card.appendChild(nav);
      revelar(resposta,nav);
    }
    if(q.type==='mc'){
      var errosMc=0, ops=criar('div','opcoes'); q.options.forEach(function(op,i){var b=criar('button','opcao','<span class="opcao__letra">'+String.fromCharCode(65+i)+'</span><span>'+textoSeguro(op)+'</span>',{type:'button'});b.addEventListener('click',function(){if(bloqueado||b.disabled)return;if(i===q.answer){ops.querySelectorAll('button').forEach(function(x){x.disabled=true;});b.classList.add('opcao--certa');concluir(true,op);}else{errosMc++;errouAntes=true;registrarErro(op);b.disabled=true;b.classList.add('opcao--errada');mostrarNovaTentativa(errosMc===1?'Elimine esta alternativa e releia a pergunta.':q.explain||'Compare as alternativas que ainda restam.');if(errosMc===2)card.appendChild(falaMascote(q.explain||'Observe as palavras mais importantes da pergunta.',true));}});ops.appendChild(b);});card.appendChild(ops);
    } else {
      var tentativasTexto=0, numerica=/número|quantos|quantas|quanto|horas|segundos|dias/i.test(contexto.texto), linha=criar('div','campo-resposta'), campo=criar('input','campo',null,{type:'text',inputmode:numerica?'numeric':'text',autocomplete:'off',placeholder:numerica?'Escreva o número':'Escreva uma palavra ou frase curta','aria-label':'Sua resposta'}), enviar=criar('button','botao botao--primario','Conferir',{type:'button'});
      function checar(){if(!campo.value.trim()||bloqueado)return;var valor=campo.value.trim(),certo=validarResposta(valor,q.answers||[]);if(certo){campo.disabled=true;enviar.disabled=true;concluir(true,valor);return;}tentativasTexto++;errouAntes=true;registrarErro(valor);if(tentativasTexto===1){mostrarNovaTentativa(pistaRespostaAberta(q,numerica));campo.value='';campo.focus();}else{campo.disabled=true;enviar.disabled=true;concluir(false,valor);}} enviar.addEventListener('click',checar);campo.addEventListener('keydown',function(e){if(e.key==='Enter')checar();});linha.appendChild(campo);linha.appendChild(enviar);card.appendChild(linha);
    }
    card.appendChild(resposta);raiz.appendChild(card);
  }
  function normalizar(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').replace(/\s+/g,' ').trim();}
  function validarResposta(v,aceitas){var a=normalizar(v);return aceitas.some(function(x){var b=normalizar(x);return a===b || (b.length>4 && a.indexOf(b)>=0);});}
  function pistaRespostaAberta(q,numerica){if(numerica)return 'Volte aos números do enunciado e confira a operação ou a unidade pedida.';var alvo=normalizar((q.answers||[])[0]);return alvo?'A resposta começa com “'+alvo.charAt(0).toUpperCase()+'”. Releia a pergunta.':'Releia a pergunta e responda com poucas palavras.';}
  function categoriaQuestao(q) {
    var t=normalizar(q.q);
    if(/texto|instrucional|cartaz|manual|anuncio|memoria|tirinha/.test(t))return 'Compreender textos e informações';
    if(/palavra|substantivo|diminutivo|aumentativo|plural|silaba|verbo|adjetivo/.test(t))return 'Observar como as palavras funcionam';
    if(/numero|multiplica|divis|possibil|hora|minuto|calculo|resultado/.test(t))return 'Resolver situações com números';
    if(/ceu|terra|lua|sol|estrela|planeta|luz|atmosfera/.test(t))return 'Investigar a natureza e o céu';
    if(/cidade|municipio|comunidade|bairro|populacao|espaco|publico|privado/.test(t))return 'Entender lugares e comunidades';
    return 'Usar o que foi descoberto';
  }
  function resumoDominio(cap,erros) {
    var grupos={}, errados={};erros.forEach(function(e){errados[e.indiceOriginal]=true;});
    cap.quiz.forEach(function(q,i){var nome=categoriaQuestao(q);if(!grupos[nome])grupos[nome]={total:0,acertos:0};grupos[nome].total++;if(!errados[i])grupos[nome].acertos++;});
    var box=criar('div','resumo-dominio','<h4>O que este resultado mostra</h4>'), lista=criar('ul');
    Object.keys(grupos).forEach(function(nome){var g=grupos[nome], ok=g.acertos===g.total;lista.appendChild(criar('li',ok?'resumo-dominio__ok':'resumo-dominio__rever','<span>'+textoSeguro(nome)+'</span><strong>'+(ok?'Já está firme':g.acertos+' de '+g.total+' · vale rever')+'</strong>'));});box.appendChild(lista);return box;
  }
  function renderResultado(cap) {
    var raiz=$('#desafio-conteudo'), total=perguntasAtuais(cap).length, pct=Math.round(quiz.acertos/Math.max(1,total)*100), disc=discPorId(estado.disciplina), erros=quiz.erros.slice();
    if(!quiz.revisao){estado.progresso[cap.id]={feito:true,acertos:quiz.acertos,total:total,data:new Date().toISOString()};delete estado.tentativas[cap.id];salvar();}
    var msg=quiz.revisao?'Você concluiu a revisão.':(erros.length?'Você acertou '+quiz.acertos+' de '+total+'. Revise '+erros.length+' '+(erros.length===1?'questão':'questões')+' para fortalecer o que aprendeu.':'Você acertou todas as '+total+' questões!');
    var box=criar('section','resultado resultado--final','<div class="resultado__palmas" aria-hidden="true"><span>👏</span><span>👏</span></div><h3>'+(quiz.revisao?'Revisão concluída':'Desafio concluído!')+'</h3><p class="resultado__placar"><strong>'+quiz.acertos+'</strong><span>de '+total+' acertos</span></p><p class="resultado__mensagem">'+msg+'</p>');
    if(!quiz.revisao)box.appendChild(resumoDominio(cap,erros));
    var nav=criar('div','navegacao');
    if(!quiz.revisao && erros.length){var reverErros=criar('button','botao','Rever meus erros ('+erros.length+')',{type:'button'});reverErros.addEventListener('click',function(){quiz={indice:0,acertos:0,respondidas:0,erros:[],perguntas:erros.map(function(e){return e.questao;}),indices:erros.map(function(e){return e.indiceOriginal;}),revisao:true,pausa:false};renderQuestao(cap);});nav.appendChild(reverErros);}
    var repetir=criar('button','botao','Refazer tudo',{type:'button'}), voltar=criar('button','botao botao--primario','Ver outros assuntos',{type:'button'});repetir.addEventListener('click',function(){iniciarQuiz(cap,true);});voltar.addEventListener('click',function(){abrirDisciplina(disc.id);});nav.appendChild(repetir);nav.appendChild(voltar);box.appendChild(nav);raiz.appendChild(box);
    if(!quiz.celebrado){quiz.celebrado=true;bip('vitoria');festejar(true);}
    if(!quiz.revisao)toast('Progresso salvo neste aparelho.');
  }

  function selecionarAba(nome,rolar) {
    var cap=capPorId(discPorId(estado.disciplina),estado.capitulo); if(!cap)return;
    if(nome==='video'&&!cap.video)nome='teoria'; estado.aba=nome; estado.areas[cap.id]=nome; salvar();
    /* O convite amarelo fala do bloco de teoria que está aberto; fora do
       Descobrir ele não tem a ver com o que está na tela. */
    $('#cap-pergunta').hidden = nome!=='teoria';
    $$('.aba').forEach(function(b){var ativa=b.dataset.aba===nome;b.classList.toggle('aba--ativa',ativa);b.setAttribute('aria-selected',ativa?'true':'false');});
    $$('.painel-aba').forEach(function(p){var ativa=p.id==='painel-'+nome;p.hidden=!ativa;p.classList.toggle('painel-aba--ativo',ativa);});
    if(rolar)document.querySelector('.abas').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function voltar() {
    if(!$('#tela-capitulo').hidden) abrirDisciplina(estado.disciplina);
    else if(!$('#tela-disciplina').hidden) renderHome(); else renderHome();
  }
  function ligarEventos() {
    $('#link-home').addEventListener('click',function(e){e.preventDefault();renderHome();});
    $('#btn-voltar').addEventListener('click',voltar);
    $('#btn-continuar').addEventListener('click',function(){if(estado.ultimo)abrirCapitulo(estado.ultimo.disciplina,estado.ultimo.capitulo);});
    $$('.aba').forEach(function(b){b.addEventListener('click',function(){selecionarAba(b.dataset.aba,true);});});
  }
  function iniciar() {
    if(typeof DISCIPLINAS==='undefined'||!DISCIPLINAS.length){$('#grade-disciplinas').innerHTML='<div class="vazio">Não foi possível carregar os assuntos.</div>';return;}
    carregar(); ligarEventos(); configurarInstalacao(); registrarServiceWorker(); renderHome();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
})();
