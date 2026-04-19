const CACHE_NAME = 'summit-calc-v1';

// This forces the new service worker to take over immediately when you update GitHub
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Standard fetch - you can add offline caching here later if needed
  event.respondWith(fetch(event.request));
});
