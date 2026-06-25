const CACHE_NAME = 'elza-cache-v2';

// ⚡ Só podemos guardar ficheiros que REALMENTE existem na pasta public após o build
const urlsToCache = [
  '/talk-elza/',
  '/talk-elza/index.html',
  '/talk-elza/manifest.json',
  '/talk-elza/talk-elza_192.png',
  '/talk-elza/talk-elza_512.png'
];

// Instalação: Caching dos arquivos essenciais
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(urlsToCache);
    }).catch(err => console.error('[Service Worker] Erro no cache:', err))
  );
});

// Ativação: Limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Fetch: Servir o cache primeiro (Navegação Offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});