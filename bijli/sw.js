const staticCacheName = 'static-v1.0.0';
const dynamicCacheName = 'dynamic-v1.0.0';
const assets = [
    './',
    './assets/script.js',
    './assets/styles.css',
    './assets/style2.css'
]


//call install event
self.addEventListener('install', e => {
    console.log('Service Worker: Activated');

    e.waitUntil(
        caches
          .open(cacheName)
          .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
          })
          .then(() => self.skipWaiting())
      );
});

// Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );

});

// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  });
  