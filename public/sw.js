const CACHE_NAME = 'elza-cache-v1';
const urlsToCache = [
  '/talk-elza/',           // ⚡ Importante: seu repositório no GitHub Pages
  '/talk-elza/index.html',
  '/talk-elza/manifest.webmanifest',
  '/talk-elza/vite.svg',
  '/talk-elza/src/main.jsx', // ✅ Arquivo principal Vite
  '/talk-elza/assets/',     // ✅ Pega as imagens e css gerados na build
];

// Instalação: Caching dos arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(urlsToCache);
    })
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

// Fetch: Servir o cache primeiro
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
