const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "https://m.facebook.com", // Website URL
  "styles.css",
  "script.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});