/* Estudos do 3¬∫ ano ‚Äî navega√ß√£o, atividades e progresso local. */
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
    instrucao.textContent=ios?'No Safari, toque em Compartilhar e depois em ‚ÄúAdicionar √† Tela de In√≠cio‚Äù.':'Abra o menu do navegador e escolha ‚ÄúInstalar aplicativo‚Äù ou ‚ÄúAdicionar √† tela inicial‚Äù.';
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
    'finalidade':'para que algo serve', 'g√™nero':'um tipo de texto', 'objetiva':'direta e f√°cil de entender',
    'substantivo':'palavra que d√° nome a pessoas, lugares, animais, objetos ou ideias',
    'sufixo':'peda√ßo acrescentado no final de uma palavra', 'ortografia':'maneira correta de escrever as palavras',
    'munic√≠pio':'cidade e a √°rea administrada junto com ela', 'comunidade':'grupo de pessoas que compartilha um lugar ou interesses',
    'patrim√¥nio':'algo importante que uma comunidade preserva', 'paisagem':'tudo o que podemos observar em um lugar',
    'multiplica√ß√£o':'adi√ß√£o de parcelas iguais', 'divis√£o':'repartir ou formar grupos com a mesma quantidade',
    'adjetivo':'palavra que mostra uma caracter√≠stica', 'pronome':'palavra que pode substituir ou acompanhar um nome',
    'biografia':'hist√≥ria da vida de uma pessoa escrita por outra', 'autobiografia':'hist√≥ria que algu√©m escreve sobre a pr√≥pria vida',
    'cronol√≥gica':'organizada na ordem em que os fatos aconteceram', 'rota√ß√£o':'giro da Terra em torno dela mesma',
    'transla√ß√£o':'movimento da Terra ao redor do Sol', 'astro':'corpo natural que existe no espa√ßo',
    'sat√©lite':'corpo que gira ao redor de um planeta', 'atmosfera':'camada de gases que envolve a Terra',
    'litosfera':'parte s√≥lida mais externa da Terra', 'hidrosfera':'toda a √°gua existente no planeta',
    'biosfera':'regi√µes da Terra onde existe vida', 'magma':'material muito quente encontrado dentro da Terra',
    'rural':'relacionado ao campo', 'urbana':'relacionada √† cidade', 'migra√ß√£o':'mudan√ßa de pessoas de um lugar para outro',
    'censo':'pesquisa que re√∫ne informa√ß√µes sobre a popula√ß√£o', 'democracia':'forma de governo com participa√ß√£o dos cidad√£os',
    'pot√°vel':'pr√≥pria e segura para beber', 'triagem':'separa√ß√£o de materiais por tipo'
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
    var h=(bloco.h||'').toLowerCase();
    if(/instrucional|instru√ß/.test(h)) return 'Pense no cartaz de lavar as m√£os do banheiro da escola. O que precisa estar nele para algu√©m conseguir seguir?';
    if(/diminutivo|aumentativo|plural|ortografia/.test(h)) return 'Observe como as palavras mudam. Tente descobrir o padr√£o antes de abrir a explica√ß√£o.';
    if(/tempo|hora|calend/.test(h)) return 'Pense em uma situa√ß√£o do seu dia em que voc√™ usa essa ideia.';
    if(/terra|c√©u|lua|sol|estrela/.test(h)) return 'Comece com uma hip√≥tese: o que voc√™ acha que acontece? Depois compare com a descoberta.';
    if(/munic√≠pio|cidade|comunidade|espa√ßo/.test(h)) return 'Pense no lugar onde voc√™ vive. O que voc√™ j√° viu que se parece com este assunto?';
    return idx===0?'Voc√™ n√£o precisa saber a resposta ainda. Primeiro fa√ßa uma suposi√ß√£o.':'Antes de ler, tente explicar esta ideia com suas pr√≥prias palavras.';
  }
  function temaBloco(bloco) {
    var h=normalizar(bloco&&bloco.h);
    if(/texto|memoria|poema|anuncio|instrucional/.test(h))return 'textos';
    if(/substantivo|diminutivo|aumentativo|plural|ortografia|verbo|adjetivo|silaba/.test(h))return 'palavras';
    if(/multiplica|divis|possibil|numero|calculo/.test(h))return 'numeros';
    if(/tempo|hora|localiza|desloca/.test(h))return 'medidas';
    if(/terra|ceu|lua|sol|estrela|planeta/.test(h))return 'natureza';
    if(/municipio|cidade|comunidade|espaco|populacao|servico/.test(h))return 'lugares';
    return 'ideia';
  }
  function visualDaDescoberta(bloco) {
    var tema=temaBloco(bloco), visuais={
      textos:{src:'assets/descobrir-textos.webp',alt:'Crian√ßa observando uma sequ√™ncia ilustrada de instru√ß√µes para lavar as m√£os.'},
      palavras:{src:'assets/descobrir-palavras.webp',alt:'Crian√ßa montando e investigando palavras com pe√ßas coloridas.'},
      numeros:{src:'assets/descobrir-numeros.webp',alt:'Crian√ßa explorando grupos, formas e quantidades com materiais de matem√°tica.'},
      medidas:{src:'assets/descobrir-medidas.webp',alt:'Crian√ßa investigando tempo, caminhos e medidas com rel√≥gio e instrumentos.'},
      natureza:{src:'assets/descobrir-natureza.webp',alt:'Crian√ßas investigando a Terra, a natureza, a Lua e o c√©u.'},
      lugares:{src:'assets/descobrir-lugares.webp',alt:'Crian√ßas observando uma maquete com campo, cidade e espa√ßos da comunidade.'},
      ideia:{src:'assets/descobrir-ideias.webp',alt:'Crian√ßa investigando pistas e organizando uma nova ideia.'}
    };
    return visuais[tema]||visuais.ideia;
  }
  function irTopo() { window.scrollTo({top:0,behavior:'smooth'}); }
  /* As p√°ginas do livro n√£o s√£o publicadas junto com o app. Se a imagem n√£o
     estiver l√°, a figura inteira some em vez de deixar um √≠cone quebrado. */
  function figuraOpcional(figura) {
    var img=figura&&figura.querySelector('img'); if(!img)return figura;
    img.addEventListener('error',function(){figura.remove();});
    return figura;
  }

  /* --- Cara de jogo: som, confete e sequ√™ncia de acertos ------------------ */
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
    var caixa=palcoFesta('estrelas',1400), simbolos=['‚≠ê','‚ú®','üåü','üí´'];
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
      var b=criar('i',null,'üéà');
      b.style.left=aleatorio(4,92)+'vw';
      b.style.fontSize=aleatorio(28,46)+'px';
      b.style.animationDuration=aleatorio(2.6,4)+'s';
      b.style.animationDelay=aleatorio(0,.6)+'s';
      caixa.appendChild(b);
    }
  }
  function carimbo() {
    var caixa=palcoFesta('carimbo',1100), marcas=['üéâ','üëè','üí™','üôå','ü•≥'];
    caixa.appendChild(criar('b',null,marcas[Math.floor(Math.random()*marcas.length)]));
  }
  /* Um repert√≥rio em vez de sempre o mesmo confete ‚Äî e nunca a mesma
     comemora√ß√£o duas vezes seguidas. */
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
      placar.pontos+=10+(placar.◊ç7ˆ⁄$z{-ÆÈ‹j◊ùW'Frì∑ñÊV¬ÁVW'ï6V∆V7F˜"ÇrÁñÊV¬◊G&Á6f˜&÷6ııˆFWˆó27G&ˆÊrríÁFWáD6ˆÁFVÁC÷˜∑ñÊV¬Ê6∆74∆ó7BÊFBÇwñÊV¬◊G&Á6f˜&÷6Ú“◊&ˆÁFÚrì∂fVVF&6¥ñÁFW&FófÚá7FvR«G'VR¬tˆ'6W'fRÚVR◊VF˜RV“FˆF22∆g&2FWá&W7<:6Ú‚r¬rr∆6ˆÊ6«Vó"ì∑÷V«6W∂W'&˜2≤≥∂"Ê6∆74∆ó7BÊFBÇvFV6ó6Ú“÷W'&Frì∂ñbÜW'&˜3„”"ñ÷˜7G&%ó7Fá7FvR¬t6ˆÊfó&6R7V'7FÁFófÚ¬'FñvÚR6&7FW,:◊7Fñ6W7L:6ÚFˆF˜2ÊÚ«W&¬‚rì∑◊“ì∂W66ˆ∆Ü2ÊVÊD6Üñ∆BÜ"ì∑“ì∑7FvRÊVÊD6Üñ∆BÜW66ˆ∆Ü2ì∞–¢––†–¢gVÊ7Fñˆ‚ñÊñ6ñ%Vó¢Ü6«&VñÊñ6ñ"í∞–¢f"wV&FFÛ“&VñÊñ6ñ"bbW7FFÚÁFVÁFFóf5∂6ÊñE”∞–¢Vó£÷wV&FFÚÚ∂ñÊFñ6S¶wV&FFÚÊñÊFñ6W«√∆6W'F˜3¶wV&FFÚÊ6W'F˜7«√«&W7ˆÊFñF3¶wV&FFÚÊñÊFñ6W«√∆W'&˜3¢ÜwV&FFÚÊW'&˜7«≈µ“íÊ÷ÜgVÊ7Fñˆ‚Üíó∑&WGW&‚∑VW7FÛ¶6ÁVó•∂ï“∆ñÊFñ6T˜&ñvñÊ√¶ó”∑“í∆ñÊFñ6W3¶6ÁVó¢Ê÷ÜgVÊ7Fñˆ‚ÖÚ∆íó∑&WGW&‚ì∑“í«&Wfó6Û¶f«6R«W6¶f«6W“†–¢∂ñÊFñ6S£∆6W'F˜3£«&W7ˆÊFñF3£∆W'&˜3•µ“∆ñÊFñ6W3¶6ÁVó¢Ê÷ÜgVÊ7Fñˆ‚ÖÚ∆íó∑&WGW&‚ì∑“í«&Wfó6Û¶f«6R«W6¶f«6W”∞–¢ñbá&VñÊñ6ñ"ó∂FV∆WFRW7FFÚÁFVÁFFóf5∂6ÊñE”∑6«f"Çì∑––¢&VÊFW%VW7FÚÜ6ì∞–¢––¢gVÊ7Fñˆ‚6«f%FVÁFFófÜ6í∞–¢ñbáVó¢Á&Wfó6Úó&WGW&„∞–¢W7FFÚÁFVÁFFóf5∂6ÊñE”◊∂ñÊFñ6SßVó¢ÊñÊFñ6R∆6W'F˜3ßVó¢Ê6W'F˜2∆W'&˜3ßVó¢ÊW'&˜2Ê÷ÜgVÊ7Fñˆ‚ÜRó∑&WGW&‚RÊñÊFñ6T˜&ñvñÊ√∑“ó”∑6«f"Çì∞–¢––¢gVÊ7Fñˆ‚W&wVÁF4GVó2Ü6í≤&WGW&‚Vó¢Á&Wfó6ÚÚVó¢ÁW&wVÁF2¢6ÁVó£≤–¢gVÊ7Fñˆ‚6ˆÁFWáGV∆ó¶%VW7FÚÜ6«í∞¢f"FWáFÛ◊Á¬ñ÷vV”◊Êñ÷vW«∆ÁV∆¬¬ñ÷vV‘«C◊Êñ÷vT«G«¬rr¬ñ÷vV‘6Fñˆ„◊Êñ÷vT6FñˆÁ«¬rr¬6ˆÁFWáFÛ“rr¬ñÊFñ6S÷6ÁVó¢ÊñÊFWÑˆbáí¬∆ÊÛ“áGóVˆbTDtÙuí”“wVÊFVfñÊVBrbeTDtÙuï∂6ÊñE“ó«∆ÁV∆¬¬ßW7FS◊∆ÊÚbg∆ÊÚÁVW7FñˆÁ2bg∆ÊÚÁVW7FñˆÁ5∂ñÊFñ6U”∞¢ñbÜßW7FRó∂6ˆÁFWáFÛ÷ßW7FRÊ6ˆÁFWáG«¬rs∑FWáFÛ÷ßW7FRÁ&ˆ◊G««FWáFÛ∑––¢ñbÇı‰ÊFó&ñÊÜ¬ˆíÁFW7BáFWáFÚííFWáFÛ◊FWáFÚÁ&W∆6RÇı‰ÊFó&ñÊÜ¬ˆí¬t∆VñW7FRFú:∆ˆvÚFRV÷Fó&ñÊÜ¢rì∞–¢ñbÜ6ÊñC””“v6ñSrbbÙÁL:'Fñ6&V6R6ˆ◊∆WF÷VÁFRW67W&ˆíÁFW7BáFWáFÚííFWáFÛ“uV÷ñ÷vV“F2«W¶W2Ê˜GW&Ê2FFW'&÷˜7G&ˆÊFRå:◊VóF26ñFFW2‚ÊV∆¬ÁL:'Fñ6&V6R6ˆ◊∆WF÷VÁFRW67W&‚˜"\:£Ús∞–¢ñbÜ6ÊñC””“v«rrbbı6VwVÊFÚÚ6'F¢FÚVÊñ6VbˆíÁFW7BáFWáFÚíbb6ÁvTñ÷vW2íñ÷vV”÷6ÁvTñ÷vW5≥◊«∆ÁV∆√∞–¢ñbÜñ÷vV“bbñ÷vV‘«Bíñ÷vV‘«C“tñ«W7G&:|:6ÚFRˆñÚ&&W7ˆÊFW":W&wVÁF‚s∞¢ñbÜñ÷vV“bbñ÷vV‘6Fñˆ‚íñ÷vV‘6Fñˆ„“tˆ'6W'fRñ«W7G&:|:6ÚÁFW2FR&W7ˆÊFW"‚s∞¢&WGW&‚∑FWáFÛßFWáFÚ∆6ˆÁFWáFÛ¶6ˆÁFWáFÚ∆ñ÷vV”¶ñ÷vV“∆ñ÷vV‘«C¶ñ÷vV‘«B∆ñ÷vV‘6Fñˆ„¶ñ÷vV‘6FñˆÁ”∞¢––¢gVÊ7Fñˆ‚&VÊFW%VW7FÚÜ6í∞–¢f"&ó£“BÇr6FW6fñÚ÷6ˆÁFWVFÚrì≤&ó¢ÊñÊÊW$ÖD‘√“rs∞–¢ñbÇ6ÁVóß«¬6ÁVó¢Ê∆VÊwFÇó∑&ó¢ÊVÊD6Üñ∆BÜ7&ñ"ÇvFóbr¬wf¶ñÚr¬tñÊFÏ:6Úå:W&wVÁF2&W7FR77VÁFÚ‚ríì∑&WGW&„∑––¢f"W&wVÁF3◊W&wVÁF4GVó2Ü6ì∞–¢ñbáVó¢ÁW6ó∑&VÊFW$ñÁFW'f∆ÚÜ6«W&wVÁF2ì∑&WGW&„∑––¢ñbáVó¢ÊñÊFñ6S„◊W&wVÁF2Ê∆VÊwFÇó∑&VÊFW%&W7V«FFÚÜ6ì∑&WGW&„∑––¢f"◊W&wVÁF5∑Vó¢ÊñÊFñ6U“¬6ˆÁFWáFÛ÷6ˆÁFWáGV∆ó¶%VW7FÚÜ6«í¬6&C÷7&ñ"Çw6V7Fñˆ‚r¬wVó¢÷6&Brí¬&ˆFF‘÷FÇÊf∆ˆ˜"áVó¢ÊñÊFñ6RÛ2í≥¬&ˆFF3‘÷FÇÊ6Vñ¬áW&wVÁF2Ê∆VÊwFÇÛ2ì∞–¢6&BÊñÊÊW$ÖD‘√“s«6∆73“'Vó¢÷6&EıˆWF#‚r≤áVó¢Á&Wfó6ÛÚu&Wfó<:6ÚF˜2W'&˜2s¢u&ˆFFr∑&ˆFF≤rFRr∑&ˆFF2í≤r+rW&wVÁFr≤áVó¢ÊñÊFñ6R≥í≤rFRr∑W&wVÁF2Ê∆VÊwFÇ≤s¬˜‚s∞¢ñbÜ6ˆÁFWáFÚÊñ÷vV“ó∞¢6&BÊVÊD6Üñ∆BÜfñwW&˜6ñˆÊ¬Ü7&ñ"ÇvfñwW&Rr¬wVW7FÚ÷6ˆÁFWáFÚr¬s∆á&Vc“"r∑FWáFı6VwW&ÚÜ6ˆÁFWáFÚÊñ÷vV“í≤r"F&vWC“%ˆ&∆Ê≤"&V√“&Êˆ˜VÊW""&ñ÷∆&V√“$◊∆ñ"ñ«W7G&:|:6Ú#„∆ñ÷r7&3“"r∑FWáFı6VwW&ÚÜ6ˆÁFWáFÚÊñ÷vV“í≤r"«C“"r∑FWáFı6VwW&ÚÜ6ˆÁFWáFÚÊñ÷vV‘«Bí≤r"∆ˆFñÊs“&∆ßí#„¬ˆ„∆fñv6Fñˆ„‚r∑FWáFı6VwW&ÚÜ6ˆÁFWáFÚÊñ÷vV‘6Fñˆ‚í≤rF˜VRÊñ÷vV“&◊∆ú:÷∆„¬ˆfñv6Fñˆ„‚rííì∞¢––¢ñbÜ6ˆÁFWáFÚÊ6ˆÁFWáFÚñ6&BÊVÊD6Üñ∆BÜ7&ñ"ÇvFóbr¬wVW7FÚ÷6ˆÁFWáFÚ◊FWáFÚr¬s«7„‰ñÊf˜&÷:|;VW2&VÁ6#¬˜7„„«‚r∑FWáFı6VwW&ÚÜ6ˆÁFWáFÚÊ6ˆÁFWáFÚí≤s¬˜‚ríì∞–¢6&BÊVÊD6Üñ∆BÜ7&ñ"Çwr¬wVó¢÷6&Eı˜W&wVÁFr«FWáFı6VwW&ÚÜ6ˆÁFWáFÚÁFWáFÚííì∞–¢f"&W7˜7F÷7&ñ"ÇvFóbr∆ÁV∆¬∆ÁV∆¬«∑&ˆ∆S¢w7FGW2r¬v&ñ÷∆ófRs¢wˆ∆óFRw“í¬&∆˜VVFÛ÷f«6R¬W'&˜TÁFW3÷f«6R¬W'&ı&Vvó7G&FÛ÷f«6S∞–¢gVÊ7Fñˆ‚&Vvó7G&$W'&ÚÜW66ˆ∆Üó∂ñbÜW'&ı&Vvó7G&FÚó&WGW&„∂W'&ı&Vvó7G&FÛ◊G'VS∑Vó¢ÊW'&˜2ÁW6Çá∑VW7FÛß∆W66ˆ∆Ü¶W66ˆ∆Ü∆ñÊFñ6T˜&ñvñÊ√ßVó¢ÊñÊFñ6W5∑Vó¢ÊñÊFñ6U◊“ì∑––¢gVÊ7Fñˆ‚÷˜7G&$Ê˜fFVÁFFófÜ÷VÁ6vV“ó∑&W7˜7FÊ6∆74Ê÷S“vfVVF&6≤fVVF&6≤“÷W'&Ús∑&W7˜7FÊñÊÊW$ÖD‘√“s«7G&ˆÊsÂFVÁFR÷ó2V÷fW¢„¬˜7G&ˆÊs„«6∆73“&Wá∆ñ66Ú#‚r∑FWáFı6VwW&ÚÜ÷VÁ6vV“í≤s¬˜‚s∑&WfV∆"á&W7˜7Fì∑––¢gVÊ7Fñˆ‚6ˆÊ6«Vó"Ü6W'FÚ∆W66ˆ∆Üó∞–¢ñbÜ&∆˜VVFÚó&WGW&„∂&∆˜VVFÛ◊G'VS∑Vó¢Á&W7ˆÊFñF2≤≥∂ñbÜ6W'FÚbbÇW'&˜TÁFW7««Vó¢Á&Wfó6ÚíóVó¢Ê6W'F˜2≤≥∂ñbÇ6W'FÚó&Vvó7G&$W'&ÚÜW66ˆ∆Üì∞–¢&W7˜7FÊ6∆74Ê÷S“vfVVF&6≤r≤Ü6W'FÛÚvfVVF&6≤“÷ˆ≤s¢vfVVF&6≤“÷W'&Úrì∑&W7˜7FÊñÊÊW$ÖD‘√“s«7G&ˆÊs‚r≤Ü6W'FÛÚÜW'&˜TÁFW3Útv˜&fñ6˜R6∆&Ús¢ufˆ<:¢W&6V&WRrì¢uf÷˜2VÁFVÊFW"ßVÁF˜2‚rí≤s¬˜7G&ˆÊs‚r≤áÊWá∆ñ„Ús«6∆73“&Wá∆ñ66Ú#‚r∑FWáFı6VwW&ÚáÊWá∆ñ‚í≤s¬˜‚s¢rrì∞–¢ñbÇ6W'FÚñ6&BÊVÊD6Üñ∆BÜf∆÷66˜FRÇuGVFÚ&V“Ï:6Ú6W'F"ñÊF‚W7FWá∆ñ6:|:6Ú÷˜7G&Ú6÷ñÊÜÚ&&Wfó<:6Ú‚r«G'VRíì∞–¢f"Êc÷7&ñ"ÇvFóbr¬vÊfVv6Úrí¬V«Fñ÷◊Vó¢ÊñÊFñ6S””◊W&wVÁF2Ê∆VÊwFÇ”¬&˜É÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚ&˜FÚ“◊&ñ÷&ñÚr«V«Fñ÷ÚáVó¢Á&Wfó6ÛÚuFW&÷ñÊ"&Wfó<:6Ús¢ufW"&W7V«FFÚrì¢u,;7Üñ÷(i"r«∑GóS¢v'WGFˆ‚w“ì∞–¢ñbÇVó¢Á&Wfó6ÚbbV«Fñ÷ó∑f"wV&F#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚ&˜FÚ“÷∆WfRr¬t6ˆÁFñÁV"FWˆó2r«∑GóS¢v'WGFˆ‚w“ì∂wV&F"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑Vó¢ÊñÊFñ6R≤≥∑Vó¢ÁW6◊Vó¢ÊñÊFñ6S«W&wVÁF2Ê∆VÊwFÇbgVó¢ÊñÊFñ6RS3”””∑6«f%FVÁFFófÜ6ì∂'&ó$Fó66ó∆ñÊÜW7FFÚÊFó66ó∆ñÊì∑Fˆ7BÇu6WRˆÁFÚfˆíwV&FFÚ‚rì∑“ì∂ÊbÊVÊD6Üñ∆BÜwV&F"ì∑––¢&˜ÇÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑Vó¢ÊñÊFñ6R≤≥∑Vó¢ÁW6“Vó¢Á&Wfó6ÚbbVó¢ÊñÊFñ6S«W&wVÁF2Ê∆VÊwFÇbbVó¢ÊñÊFñ6RS3”””∑6«f%FVÁFFófÜ6ì∑&VÊFW%VW7FÚÜ6ì∂ó%F˜ÚÇì∑“ì∂ÊbÊVÊD6Üñ∆Bá&˜Çì∂6&BÊVÊD6Üñ∆BÜÊbì∞–¢&WfV∆"á&W7˜7F∆Êbì∞–¢––¢ñbáÁGóS””“v÷2ró∞–¢f"W'&˜4÷3”¬˜3÷7&ñ"ÇvFóbr¬v˜6ˆW2rì≤Ê˜FñˆÁ2Êf˜$V6ÇÜgVÊ7Fñˆ‚Ü˜∆íó∑f"#÷7&ñ"Çv'WGFˆ‚r¬v˜6Úr¬s«7‚6∆73“&˜6ııˆ∆WG&#‚rµ7G&ñÊrÊg&ˆ‘6Ü$6ˆFRÉcR∂íí≤s¬˜7„„«7„‚r∑FWáFı6VwW&ÚÜ˜í≤s¬˜7„‚r«∑GóS¢v'WGFˆ‚w“ì∂"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∂ñbÜ&∆˜VVF˜«∆"ÊFó6&∆VBó&WGW&„∂ñbÜì””◊ÊÁ7vW"ó∂˜2ÁVW'ï6V∆V7F˜$∆¬Çv'WGFˆ‚ríÊf˜$V6ÇÜgVÊ7Fñˆ‚áÇó∑ÇÊFó6&∆VC◊G'VS∑“ì∂"Ê6∆74∆ó7BÊFBÇv˜6Ú“÷6W'Frì∂6ˆÊ6«Vó"áG'VR∆˜ì∑÷V«6W∂W'&˜4÷2≤≥∂W'&˜TÁFW3◊G'VS∑&Vvó7G&$W'&ÚÜ˜ì∂"ÊFó6&∆VC◊G'VS∂"Ê6∆74∆ó7BÊFBÇv˜6Ú“÷W'&Frì∂÷˜7G&$Ê˜fFVÁFFófÜW'&˜4÷3”””ÚtV∆ñ÷ñÊRW7F«FW&ÊFófR&V∆VñW&wVÁF‚sßÊWá∆ñÁ«¬t6ˆ◊&R2«FW&ÊFóf2VRñÊF&W7F“‚rì∂ñbÜW'&˜4÷3”””"ñ6&BÊVÊD6Üñ∆BÜf∆÷66˜FRáÊWá∆ñÁ«¬tˆ'6W'fR2∆g&2÷ó2ñ◊˜'FÁFW2FW&wVÁF‚r«G'VRíì∑◊“ì∂˜2ÊVÊD6Üñ∆BÜ"ì∑“ì∂6&BÊVÊD6Üñ∆BÜ˜2ì∞–¢“V«6R∞–¢f"FVÁFFóf5FWáFÛ”¬ÁV÷W&ñ6“ˆÏ;¶÷W&˜«VÁF˜7«VÁF7«VÁF˜∆Ü˜&7«6VwVÊF˜7∆Fñ2ˆíÁFW7BÜ6ˆÁFWáFÚÁFWáFÚí¬∆ñÊÜ÷7&ñ"ÇvFóbr¬v6◊Ú◊&W7˜7Frí¬6◊Û÷7&ñ"ÇvñÁWBr¬v6◊Úr∆ÁV∆¬«∑GóS¢wFWáBr∆ñÁWF÷ˆFS¶ÁV÷W&ñ6ÚvÁV÷W&ñ2s¢wFWáBr∆WFˆ6ˆ◊∆WFS¢vˆfbr«∆6VÜˆ∆FW#¶ÁV÷W&ñ6ÚtW67&WfÚÏ;¶÷W&Ús¢tW67&WfV÷∆g&˜Rg&6R7W'Fr¬v&ñ÷∆&V¬s¢u7V&W7˜7Fw“í¬VÁfñ#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚ&˜FÚ“◊&ñ÷&ñÚr¬t6ˆÊfW&ó"r«∑GóS¢v'WGFˆ‚w“ì∞–¢gVÊ7Fñˆ‚6ÜV6"Çó∂ñbÇ6◊ÚÁf«VRÁG&ñ“Çó«∆&∆˜VVFÚó&WGW&„∑f"f∆˜#÷6◊ÚÁf«VRÁG&ñ“Çí∆6W'FÛ◊f∆ñF%&W7˜7Fáf∆˜"«ÊÁ7vW'7«≈µ“ì∂ñbÜ6W'FÚó∂6◊ÚÊFó6&∆VC◊G'VS∂VÁfñ"ÊFó6&∆VC◊G'VS∂6ˆÊ6«Vó"áG'VR«f∆˜"ì∑&WGW&„∑◊FVÁFFóf5FWáFÚ≤≥∂W'&˜TÁFW3◊G'VS∑&Vvó7G&$W'&Úáf∆˜"ì∂ñbáFVÁFFóf5FWáFÛ”””ó∂÷˜7G&$Ê˜fFVÁFFófáó7F&W7˜7F&W'Fá∆ÁV÷W&ñ6íì∂6◊ÚÁf«VS“rs∂6◊ÚÊfˆ7W2Çì∑÷V«6W∂6◊ÚÊFó6&∆VC◊G'VS∂VÁfñ"ÊFó6&∆VC◊G'VS∂6ˆÊ6«Vó"Üf«6R«f∆˜"ì∑◊“VÁfñ"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆6ÜV6"ì∂6◊ÚÊFDWfVÁD∆ó7FVÊW"Çv∂WñF˜v‚r∆gVÊ7Fñˆ‚ÜRó∂ñbÜRÊ∂Wì””“tVÁFW"rñ6ÜV6"Çì∑“ì∂∆ñÊÜÊVÊD6Üñ∆BÜ6◊Úì∂∆ñÊÜÊVÊD6Üñ∆BÜVÁfñ"ì∂6&BÊVÊD6Üñ∆BÜ∆ñÊÜì∞–¢––¢6&BÊVÊD6Üñ∆Bá&W7˜7Fì∑&ó¢ÊVÊD6Üñ∆BÜ6&Bì∞–¢––¢gVÊ7Fñˆ‚&VÊFW$ñÁFW'f∆ÚÜ6«W&wVÁF2í∞–¢f"&ó£“BÇr6FW6fñÚ÷6ˆÁFWVFÚrí¬fVóF3◊Vó¢ÊñÊFñ6R¬f«F”◊W&wVÁF2Ê∆VÊwFÇ÷fVóF2¬&ˆFF‘÷FÇÊf∆ˆ˜"ÜfVóF2Û2ì∞–¢f"&˜É÷7&ñ"Çw6V7Fñˆ‚r¬w&W7V«FFÚñÁFW'f∆Úr¬s«6∆73“'&W7V«FFıı˜6V∆Ú#Â&ˆFFr∑&ˆFF≤r6ˆÊ6«\:÷F¬˜„∆É3‰&ˆÜ˜&&&W7ó&#¬ˆÉ3„«Âfˆ<:¢&W7ˆÊFWRr∂fVóF2≤rW&wVÁF2‚f«F“r∂f«F“≤r‚6WR&ˆw&W76Ú¨:W7L:wV&FFÚ„¬˜‚rì∞–¢&˜ÇÊñÁ6W'D&Vf˜&RÜf∆÷66˜FRÇtf:vV÷W67W'F6R&V6ó6"‚&VÊFW"Ï:6Ú:íV÷6˜'&ñF‚r∆f«6Rí∆&˜ÇÊfó'7D6Üñ∆Bì∞–¢f"Êc÷7&ñ"ÇvFóbr¬vÊfVv6Úrí¬&#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚr¬t6ˆÁFñÁV"FWˆó2r«∑GóS¢v'WGFˆ‚w“í¬6VwVó#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚ&˜FÚ“◊&ñ÷&ñÚr¬t6ˆ÷\:v",;7Üñ÷&ˆFF(i"r«∑GóS¢v'WGFˆ‚w“ì∞–¢&"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑6«f%FVÁFFófÜ6ì∂'&ó$Fó66ó∆ñÊÜW7FFÚÊFó66ó∆ñÊì∑“ì∑6VwVó"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑Vó¢ÁW6÷f«6S∑&VÊFW%VW7FÚÜ6ì∂ó%F˜ÚÇì∑“ì∂ÊbÊVÊD6Üñ∆Bá&"ì∂ÊbÊVÊD6Üñ∆Bá6VwVó"ì∂&˜ÇÊVÊD6Üñ∆BÜÊbì∑&ó¢ÊVÊD6Üñ∆BÜ&˜Çì∞–¢––¢gVÊ7Fñˆ‚Ê˜&÷∆ó¶"á2ó∑&WGW&‚7G&ñÊrá7«¬rríÁFÙ∆˜vW$66RÇíÊÊ˜&÷∆ó¶RÇt‰dBríÁ&W∆6RÇıµ«S3’«S3fe“ˆr¬rríÁ&W∆6RÇıµÊ◊£”ï«5“ˆr¬rríÁ&W∆6RÇı«2≤ˆr¬rríÁG&ñ“Çì∑––¢gVÊ7Fñˆ‚f∆ñF%&W7˜7Fáb∆6VóF2ó∑f"÷Ê˜&÷∆ó¶"ábì∑&WGW&‚6VóF2Á6ˆ÷RÜgVÊ7Fñˆ‚áÇó∑f"#÷Ê˜&÷∆ó¶"áÇì∑&WGW&‚””÷"«¬Ü"Ê∆VÊwFÉ„BbbÊñÊFWÑˆbÜ"ì„”ì∑“ì∑––¢gVÊ7Fñˆ‚ó7F&W7˜7F&W'Fá∆ÁV÷W&ñ6ó∂ñbÜÁV÷W&ñ6ó&WGW&‚ufˆ«FR˜2Ï;¶÷W&˜2FÚVÁVÊ6ñFÚR6ˆÊfó&˜W&:|:6Ú˜RVÊñFFRVFñF‚s∑f"«fÛ÷Ê˜&÷∆ó¶"ÇáÊÁ7vW'7«≈µ“ï≥“ì∑&WGW&‚«fÛÚt&W7˜7F6ˆ÷\:v6ˆ“(	¬r∂«fÚÊ6Ü$BÉíÁFıWW$66RÇí≤~(	“‚&V∆VñW&wVÁF‚s¢u&V∆VñW&wVÁFR&W7ˆÊF6ˆ“˜V62∆g&2‚s∑––¢gVÊ7Fñˆ‚6FVv˜&ñVW7FÚáí∞–¢f"C÷Ê˜&÷∆ó¶"áÁì∞–¢ñbÇ˜FWáF˜∆ñÁ7G'V6ñˆÊ«∆6'Fß∆÷ÁV«∆ÁVÊ6ñ˜∆÷V÷˜&ñ«Fó&ñÊÜÚÁFW7BáBíó&WGW&‚t6ˆ◊&VVÊFW"FWáF˜2RñÊf˜&÷:|;VW2s∞–¢ñbÇ˜∆g&«7V'7FÁFóf˜∆Fñ÷ñÁWFóf˜∆V÷VÁFFóf˜««W&««6ñ∆&«fW&&˜∆F¶WFófÚÚÁFW7BáBíó&WGW&‚tˆ'6W'f"6ˆ÷Ú2∆g&2gVÊ6ñˆÊ“s∞–¢ñbÇˆÁV÷W&˜∆◊V«Fó∆ñ6∆Fófó7«˜76ñ&ñ«∆Ü˜&∆÷ñÁWF˜∆6∆7V∆˜«&W7V«FFÚÚÁFW7BáBíó&WGW&‚u&W6ˆ«fW"6óGV:|;VW26ˆ“Ï;¶÷W&˜2s∞–¢ñbÇˆ6WW«FW'&∆«V«6ˆ«∆W7G&V∆«∆ÊWF∆«Wß∆F÷˜6fW&ÚÁFW7BáBíó&WGW&‚tñÁfW7Fñv"ÊGW&W¶RÚ<:óRs∞–¢ñbÇˆ6ñFFW∆◊VÊñ6óñ˜∆6ˆ◊VÊñFFW∆&ó'&˜«˜V∆6˜∆W76˜«V&∆ñ6˜«&ófFÚÚÁFW7BáBíó&WGW&‚tVÁFVÊFW"«Vv&W2R6ˆ◊VÊñFFW2s∞–¢&WGW&‚uW6"ÚVRfˆíFW66ˆ&W'FÚs∞–¢––¢gVÊ7Fñˆ‚&W7V÷ÙFˆ÷ñÊñÚÜ6∆W'&˜2í∞–¢f"w'W˜3◊∑“¬W'&F˜3◊∑”∂W'&˜2Êf˜$V6ÇÜgVÊ7Fñˆ‚ÜRó∂W'&F˜5∂RÊñÊFñ6T˜&ñvñÊ≈”◊G'VS∑“ì∞–¢6ÁVó¢Êf˜$V6ÇÜgVÊ7Fñˆ‚á∆íó∑f"Êˆ÷S÷6FVv˜&ñVW7FÚáì∂ñbÇw'W˜5∂Êˆ÷U“ñw'W˜5∂Êˆ÷U”◊∑F˜F√£∆6W'F˜3£”∂w'W˜5∂Êˆ÷U“ÁF˜F¬≤≥∂ñbÇW'&F˜5∂ï“ñw'W˜5∂Êˆ÷U“Ê6W'F˜2≤≥∑“ì∞–¢f"&˜É÷7&ñ"ÇvFóbr¬w&W7V÷Ú÷Fˆ÷ñÊñÚr¬s∆ÉC‰ÚVRW7FR&W7V«FFÚ÷˜7G&¬ˆÉC‚rí¬∆ó7F÷7&ñ"ÇwV¬rì∞–¢ˆ&¶V7BÊ∂Wó2Üw'W˜2íÊf˜$V6ÇÜgVÊ7Fñˆ‚ÜÊˆ÷Ró∑f"s÷w'W˜5∂Êˆ÷U“¬ˆ≥÷rÊ6W'F˜3””÷rÁF˜F√∂∆ó7FÊVÊD6Üñ∆BÜ7&ñ"Çv∆ír∆ˆ≥Úw&W7V÷Ú÷Fˆ÷ñÊñııˆˆ≤s¢w&W7V÷Ú÷Fˆ÷ñÊñıı˜&WfW"r¬s«7„‚r∑FWáFı6VwW&ÚÜÊˆ÷Rí≤s¬˜7„„«7G&ˆÊs‚r≤Üˆ≥Út¨:W7L:fó&÷Rs¶rÊ6W'F˜2≤rFRr∂rÁF˜F¬≤r+rf∆R&WfW"rí≤s¬˜7G&ˆÊs‚ríì∑“ì∂&˜ÇÊVÊD6Üñ∆BÜ∆ó7Fì∑&WGW&‚&˜É∞–¢––¢gVÊ7Fñˆ‚&VÊFW%&W7V«FFÚÜ6í∞–¢f"&ó£“BÇr6FW6fñÚ÷6ˆÁFWVFÚrí¬F˜F√◊W&wVÁF4GVó2Ü6íÊ∆VÊwFÇ¬7C‘÷FÇÁ&˜VÊBáVó¢Ê6W'F˜2Ù÷FÇÊ÷ÇÉ«F˜F¬í£í¬Fó63÷Fó65˜$ñBÜW7FFÚÊFó66ó∆ñÊí¬W'&˜3◊Vó¢ÊW'&˜2Á6∆ñ6RÇì∞–¢ñbÇVó¢Á&Wfó6Úó∂W7FFÚÁ&ˆw&W76ı∂6ÊñE”◊∂fVóFÛßG'VR∆6W'F˜3ßVó¢Ê6W'F˜2«F˜F√ßF˜F¬∆FF¶ÊWrFFRÇíÁFÙï4ı7G&ñÊrÇó”∂FV∆WFRW7FFÚÁFVÁFFóf5∂6ÊñE”∑6«f"Çì∑––¢f"◊6s◊Vó¢Á&Wfó6ÛÚufˆ<:¢fˆ«F˜R:2ñFVñ2VR÷W&V6ñ“˜WG&FVÁFFóf‚s¢á7C„”ÉÚufˆ<:¢¨:6ˆÁ6VwVRWá∆ñ6"2ñFVñ2&ñÊ6óó2‚sß7C„”SSÚufˆ<:¢6ˆÁ7G'VóRV÷&ˆ&6R‚f∆R&WfW"r∂W'&˜2Ê∆VÊwFÇ≤rñFVñr≤ÜW'&˜2Ê∆VÊwFÉ”””Úrs¢w2rí≤r‚s¢tv˜&6&V÷˜2WÜF÷VÁFRVó2ñFVñ2&V6ó6“FR˜WG&ˆ∆ÜF‚rì∞–¢f"&˜É÷7&ñ"Çw6V7Fñˆ‚r¬w&W7V«FFÚr¬s«6∆73“'&W7V«FFııˆÁV÷W&Ú#‚r∑Vó¢Ê6W'F˜2≤rÚr∑F˜F¬≤s¬˜„∆É3‚r≤áVó¢Á&Wfó6ÛÚu&Wfó<:6Ú6ˆÊ6«\:÷Fs¢tFW6fñÚ6ˆÊ6«\:÷FÚrí≤s¬ˆÉ3„«‚r∂◊6r≤s¬˜‚rì∞–¢ñbÇVó¢Á&Wfó6Úñ&˜ÇÊVÊD6Üñ∆Bá&W7V÷ÙFˆ÷ñÊñÚÜ6∆W'&˜2íì∞–¢&˜ÇÊñÁ6W'D&Vf˜&RÜf∆÷66˜FRáVó¢Á&Wfó6ÛÚu&WfW"V“W'&Ú:íV÷f˜&÷FR&VÊFW"¬Ï:6ÚV“67FñvÚ‚s¢ufˆ<:¢FW&÷ñÊ˜RÊÚ6WR&óF÷Ú‚Ú&W7V«FFÚ÷˜7G&Ú,;7Üñ÷Ú76Ú¬Ï:6ÚÚ6WRf∆˜"‚r∆f«6Rí∆&˜ÇÊfó'7D6Üñ∆Bì∞–¢f"Êc÷7&ñ"ÇvFóbr¬vÊfVv6Úrì∞–¢ñbÇVó¢Á&Wfó6ÚbbW'&˜2Ê∆VÊwFÇó∑f"&WfW$W'&˜3÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚr¬u&WfW"÷WW2W'&˜2Çr∂W'&˜2Ê∆VÊwFÇ≤rír«∑GóS¢v'WGFˆ‚w“ì∑&WfW$W'&˜2ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑Vó£◊∂ñÊFñ6S£∆6W'F˜3£«&W7ˆÊFñF3£∆W'&˜3•µ“«W&wVÁF3¶W'&˜2Ê÷ÜgVÊ7Fñˆ‚ÜRó∑&WGW&‚RÁVW7FÛ∑“í∆ñÊFñ6W3¶W'&˜2Ê÷ÜgVÊ7Fñˆ‚ÜRó∑&WGW&‚RÊñÊFñ6T˜&ñvñÊ√∑“í«&Wfó6ÛßG'VR«W6¶f«6W”∑&VÊFW%VW7FÚÜ6ì∑“ì∂ÊbÊVÊD6Üñ∆Bá&WfW$W'&˜2ì∑––¢f"&WWFó#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚr¬u&Vf¶W"GVFÚr«∑GóS¢v'WGFˆ‚w“í¬fˆ«F#÷7&ñ"Çv'WGFˆ‚r¬v&˜FÚ&˜FÚ“◊&ñ÷&ñÚr¬ufW"˜WG&˜277VÁF˜2r«∑GóS¢v'WGFˆ‚w“ì∑&WWFó"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∂ñÊñ6ñ%Vó¢Ü6«G'VRì∑“ì∑fˆ«F"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∂'&ó$Fó66ó∆ñÊÜFó62ÊñBì∑“ì∂ÊbÊVÊD6Üñ∆Bá&WWFó"ì∂ÊbÊVÊD6Üñ∆Báfˆ«F"ì∂&˜ÇÊVÊD6Üñ∆BÜÊbì∑&ó¢ÊVÊD6Üñ∆BÜ&˜Çì∂ñbÇVó¢Á&Wfó6ÚóFˆ7BÇu&ˆw&W76Ú6«fÚÊW7FR&V∆ÜÚ‚rì∞–¢––†–¢gVÊ7Fñˆ‚6V∆V6ñˆÊ$&ÜÊˆ÷R«&ˆ∆"í∞–¢f"6÷6˜$ñBÜFó65˜$ñBÜW7FFÚÊFó66ó∆ñÊí∆W7FFÚÊ6óGV∆Úì≤ñbÇ6ó&WGW&„∞–¢ñbÜÊˆ÷S””“wfñFVÚrbb6ÁfñFVÚñÊˆ÷S“wFV˜&ñs≤W7FFÚÊ&÷Êˆ÷S≤W7FFÚÊ&V5∂6ÊñE”÷Êˆ÷S≤6«f"Çì∞–¢Ú¢Ú6ˆÁfóFR÷&V∆Úf∆FÚ&∆ˆ6ÚFRFV˜&ñVRW7L:&W'FÛ≤f˜&F–¢FW66ˆ'&ó"V∆RÏ:6ÚFV“fW"6ˆ“ÚVRW7L:ÊFV∆‚¢–¢BÇr66◊W&wVÁFríÊÜñFFV‚“Êˆ÷R”“wFV˜&ñs∞–¢BBÇrÊ&ríÊf˜$V6ÇÜgVÊ7Fñˆ‚Ü"ó∑f"Fóf÷"ÊFF6WBÊ&””÷Êˆ÷S∂"Ê6∆74∆ó7BÁFˆvv∆RÇv&“÷Fófr∆Fófì∂"Á6WDGG&ñ'WFRÇv&ñ◊6V∆V7FVBr∆FófÚwG'VRs¢vf«6Rrì∑“ì∞–¢BBÇrÁñÊV¬÷&ríÊf˜$V6ÇÜgVÊ7Fñˆ‚áó∑f"Fóf◊ÊñC””“wñÊV¬“r∂Êˆ÷S∑ÊÜñFFV„“Fóf∑Ê6∆74∆ó7BÁFˆvv∆RÇwñÊV¬÷&“÷FófÚr∆Fófì∑“ì∞–¢ñbá&ˆ∆"ñFˆ7V÷VÁBÁVW'ï6V∆V7F˜"ÇrÊ&2ríÁ67&ˆ∆ƒñÁFıfñWrá∂&VÜfñ˜#¢w6÷ˆ˜FÇr∆&∆ˆ6≥¢w7F'Bw“ì∞–¢––¢gVÊ7Fñˆ‚fˆ«F"Çí∞–¢ñbÇBÇr7FV∆÷6óGV∆ÚríÊÜñFFV‚í'&ó$Fó66ó∆ñÊÜW7FFÚÊFó66ó∆ñÊì∞–¢V«6RñbÇBÇr7FV∆÷Fó66ó∆ñÊríÊÜñFFV‚í&VÊFW$Üˆ÷RÇì≤V«6R&VÊFW$Üˆ÷RÇì∞–¢––¢gVÊ7Fñˆ‚∆ñv$WfVÁF˜2Çí∞–¢BÇr6∆ñÊ≤÷Üˆ÷RríÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚ÜRó∂RÁ&WfVÁDFVfV«BÇì∑&VÊFW$Üˆ÷RÇì∑“ì∞–¢BÇr6'F‚◊fˆ«F"ríÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r«fˆ«F"ì∞–¢BÇr6'F‚÷6ˆÁFñÁV"ríÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∂ñbÜW7FFÚÁV«Fñ÷Úñ'&ó$6óGV∆ÚÜW7FFÚÁV«Fñ÷ÚÊFó66ó∆ñÊ∆W7FFÚÁV«Fñ÷ÚÊ6óGV∆Úì∑“ì∞–¢BBÇrÊ&ríÊf˜$V6ÇÜgVÊ7Fñˆ‚Ü"ó∂"ÊFDWfVÁD∆ó7FVÊW"Çv6∆ñ6≤r∆gVÊ7Fñˆ‚Çó∑6V∆V6ñˆÊ$&Ü"ÊFF6WBÊ&«G'VRì∑“ì∑“ì∞–¢––¢gVÊ7Fñˆ‚ñÊñ6ñ"Çí∞–¢ñbáGóVˆbDï44ïƒî‰3””“wVÊFVfñÊVBw«¬Dï44ïƒî‰2Ê∆VÊwFÇó≤BÇr6w&FR÷Fó66ó∆ñÊ2ríÊñÊÊW$ÖD‘√“s∆Fób6∆73“'f¶ñÚ#‰Ï:6Úfˆí˜7<:◊fV¬6'&Vv"˜277VÁF˜2„¬ˆFóc‚s∑&WGW&„∑––¢6'&Vv"Çì≤∆ñv$WfVÁF˜2Çì≤6ˆÊfñwW&$ñÁ7F∆6ÚÇì≤&Vvó7G&%6W'fñ6Uv˜&∂W"Çì≤&VÊFW$Üˆ÷RÇì∞–¢––¢ñbÜFˆ7V÷VÁBÁ&VGï7FFS””“v∆ˆFñÊrrñFˆ7V÷VÁBÊFDWfVÁD∆ó7FVÊW"ÇtDÙ‘6ˆÁFVÁD∆ˆFVBr∆ñÊñ6ñ"ì∂V«6RñÊñ6ñ"Çì∞–ß“íÇì∞–†