const CACHE_CORE = 'estudos-3-ano-core-e7061997';
const CACHE_VIDEOS = 'estudos-3-ano-videos-v1';
const CACHE_LEGADO = 'estudos-3-ano-v47';
/* A lista entre os marcadores é atualizada pelo build_data.py. */
const ARQUIVOS = [
  // <arquivos-offline>
  './',
  './index.html',
  './style.css',
  './data.js',
  './experiences.js',
  './pedagogy.js',
  './app.js',
  './manifest.webmanifest',
  './assets/app-icon.svg',
  './assets/app-icon-192.png',
  './assets/app-icon-512.png',
  './assets/capa-aprender.webp',
  './assets/capa-aprender.png',
  './assets/mascote-capivara-v2.webp',
  './assets/descobrir-ideias.webp',
  './assets/4b/disciplina-ingles.svg',
  './assets/4b/hist12-alimentos.svg',
  './assets/4b/hist12-campo-cidade.svg',
  './assets/4b/hist12-migracao.svg',
  './assets/4b/hist13-cinema-circo.svg',
  './assets/4b/hist13-direitos.svg',
  './assets/4b/hist14-festas.svg',
  './assets/4b/ing07-corpo.svg',
  './assets/4b/ing07-did.svg',
  './assets/4b/ing07-habitos.svg',
  './assets/4b/ing07-too-enough.svg',
  './assets/4b/ing08-festa.svg',
  './assets/4b/ing08-irregular.svg',
  './assets/4b/ing08-novembro.svg',
  './assets/4b/ing08-regular.svg',
  './assets/4b/ing09-didnt.svg',
  './assets/4b/ing09-fimdesemana.svg',
  './assets/4b/ing09-go-ing.svg',
  './assets/4b/lp23-poema.svg',
  './assets/4b/lp23-possessivos.svg',
  './assets/4b/lp23-visual.svg',
  './assets/4b/lp24-demonstrativos.svg',
  './assets/4b/lp25-conto.svg',
  './assets/4b/lp25-sinonimo.svg',
  './assets/4b/lp25-verbo.svg',
  './assets/4b/lp26-am-ao.svg',
  './assets/4b/lp26-tempos.svg',
  './assets/4b/lp27-sujeito.svg',
  './assets/4b/lpg-misterio.svg',
  './assets/4b/lpg-poema.svg',
  './assets/4b/mat13-capacidade.svg',
  './assets/4b/mat13-comprimento.svg',
  './assets/4b/mat13-instrumentos.svg',
  './assets/4b/mat13-jarra-300.svg',
  './assets/4b/mat13-massa.svg',
  './assets/4b/mat14-fracao-de-quantidade.svg',
  './assets/4b/mat14-fracoes-unitarias.svg',
  './assets/4b/mat14-meio-terco-quarto.svg',
  './assets/4b/mat14-partes-da-fracao.svg',
  './assets/4b/mat14-q-chocolate.svg',
  './assets/4b/mat14-q-oitavo.svg',
  './assets/4b/mat14-q-quinto.svg',
  './assets/4b/mat14-q-sexto.svg',
  './assets/4b/mat14-q-terco.svg',
  './assets/4b/mat14-q-torta.svg',
  './assets/english/watercolor/body.png',
  './assets/english/watercolor/celebrations.png',
  './assets/english/watercolor/cultures.png',
  './assets/english/watercolor/habits.png',
  './assets/english/watercolor/hobbies.png',
  './assets/english/watercolor/quantities.png',
  './assets/english/watercolor/weekend.png'
  // </arquivos-offline>
];

self.addEventListener('install', function (evento) {
  evento.waitUntil(caches.open(CACHE_CORE).then(function (cache) {
    return cache.addAll(ARQUIVOS);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (evento) {
  evento.waitUntil(caches.keys().then(function (nomes) {
    return Promise.all(nomes.filter(function (nome) { return nome !== CACHE_CORE && nome !== CACHE_VIDEOS && nome !== CACHE_LEGADO; }).map(function (nome) {
      return caches.delete(nome);
    }));
  }).then(function () { return self.clients.claim(); }));
});

function avisarClientes(mensagem){return self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(clientes){clientes.forEach(function(cliente){cliente.postMessage(mensagem);});});}
async function localizarVideo(cache,legado,arquivo){var salvo=await cache.match(arquivo);if(!salvo&&legado){salvo=await legado.match(arquivo);if(salvo)await cache.put(arquivo,salvo.clone());}return salvo;}
async function verificarOffline(arquivos,baixando){var cache=await caches.open(CACHE_VIDEOS),legado=await caches.open(CACHE_LEGADO),n=0;for(var i=0;i<arquivos.length;i++)if(await localizarVideo(cache,legado,arquivos[i]))n++;if(n===arquivos.length)await caches.delete(CACHE_LEGADO);return avisarClientes({tipo:'OFFLINE_STATUS',concluidos:n,total:arquivos.length,pronto:n===arquivos.length,baixando:!!baixando});}
self.addEventListener('message',function(evento){var d=evento.data||{},arquivos=Array.isArray(d.arquivos)?d.arquivos:[];if(d.tipo==='VERIFICAR_OFFLINE')evento.waitUntil(verificarOffline(arquivos,false));if(d.tipo==='BAIXAR_OFFLINE')evento.waitUntil((async function(){try{var cache=await caches.open(CACHE_VIDEOS),legado=await caches.open(CACHE_LEGADO);for(var i=0;i<arquivos.length;i++){var a=arquivos[i],salvo=await localizarVideo(cache,legado,a);if(!salvo){var resposta=await fetch(a,{cache:'no-cache'});if(!resposta.ok)throw new Error('Falha ao baixar '+a);await cache.put(a,resposta);}await avisarClientes({tipo:'OFFLINE_STATUS',concluidos:i+1,total:arquivos.length,pronto:i+1===arquivos.length,baixando:i+1<arquivos.length});}await caches.delete(CACHE_LEGADO);}catch(_){await avisarClientes({tipo:'OFFLINE_ERRO'});}})());});
function respostaParcial(resposta,range){return resposta.arrayBuffer().then(function(buffer){var total=buffer.byteLength,p=/bytes=(\d+)-(\d*)/.exec(range||''),inicio=p?Number(p[1]):0,fim=p&&p[2]?Number(p[2]):total-1;if(inicio>=total)return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+total}});fim=Math.min(fim,total-1);var h=new Headers(resposta.headers);h.set('Content-Range','bytes '+inicio+'-'+fim+'/'+total);h.set('Accept-Ranges','bytes');h.set('Content-Length',String(fim-inicio+1));return new Response(buffer.slice(inicio,fim+1),{status:206,statusText:'Partial Content',headers:h});});}

self.addEventListener('fetch', function (evento) {
  if (evento.request.method !== 'GET' || new URL(evento.request.url).origin !== self.location.origin) return;
  if(evento.request.destination==='video'||evento.request.headers.has('range')){evento.respondWith(Promise.all([caches.open(CACHE_VIDEOS),caches.open(CACHE_LEGADO)]).then(async function(cs){var resposta=await localizarVideo(cs[0],cs[1],evento.request.url);if(!resposta)return fetch(evento.request);var range=evento.request.headers.get('range');return range?respostaParcial(resposta,range):resposta;}));return;}
  evento.respondWith(fetch(evento.request).then(function (resposta) {
    var copia = resposta.clone();
    caches.open(CACHE_CORE).then(function (cache) { cache.put(evento.request, copia); });
    return resposta;
  }).catch(function () {
    return caches.match(evento.request,{ignoreSearch:true}).then(function (resposta) {
      return resposta || (evento.request.mode === 'navigate' ? caches.match('./index.html') : Promise.reject());
    });
  }));
});
