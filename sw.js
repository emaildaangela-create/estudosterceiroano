const CACHE = 'estudos-3-ano-v12';
const ARQUIVOS = [
  './', './index.html', './style.css', './data.js', './experiences.js',
  './pedagogy.js', './app.js', './manifest.webmanifest',
  './assets/app-icon.svg', './assets/app-icon-192.png', './assets/app-icon-512.png',
  './assets/capa-aprender.webp',
  './assets/capa-aprender.png', './assets/mascote-capivara-v2.webp',
  './assets/quiz-cidade-espacos.webp', './assets/quiz-desmatamento.webp',
  './assets/quiz-poluicao-sonora.webp', './assets/quiz-terra-noturna.webp',
  './assets/descobrir-textos.webp', './assets/descobrir-palavras.webp',
  './assets/descobrir-numeros.webp', './assets/descobrir-medidas.webp',
  './assets/descobrir-natureza.webp', './assets/descobrir-lugares.webp',
  './assets/descobrir-ideias.webp',
  './assets/descobrir-anuncios.webp', './assets/descobrir-memorias.webp',
  './assets/descobrir-quadrinhos.webp', './assets/descobrir-contos.webp',
  './assets/disciplina-portugues.webp', './assets/disciplina-matematica.webp',
  './assets/disciplina-ciencias.webp', './assets/disciplina-geografia.webp',
  './assets/disciplina-historia.webp',
  './assets/jogo-maquina-encolher.webp', './assets/jogo-maquina-aumentar.webp'
];

self.addEventListener('install', function (evento) {
  evento.waitUntil(caches.open(CACHE).then(function (cache) {
    return cache.addAll(ARQUIVOS);
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (evento) {
  evento.waitUntil(caches.keys().then(function (nomes) {
    return Promise.all(nomes.filter(function (nome) { return nome !== CACHE; }).map(function (nome) {
      return caches.delete(nome);
    }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (evento) {
  if (evento.request.method !== 'GET' || new URL(evento.request.url).origin !== self.location.origin) return;
  /* Vídeos usam requisições parciais (Range). Deixamos o navegador cuidar
     delas diretamente para iniciar a reprodução sem baixar o arquivo todo. */
  if (evento.request.destination === 'video' || evento.request.headers.has('range')) return;
  evento.respondWith(fetch(evento.request).then(function (resposta) {
    var copia = resposta.clone();
    caches.open(CACHE).then(function (cache) { cache.put(evento.request, copia); });
    return resposta;
  }).catch(function () {
    return caches.match(evento.request).then(function (resposta) {
      return resposta || (evento.request.mode === 'navigate' ? caches.match('./index.html') : Promise.reject());
    });
  }));
});
