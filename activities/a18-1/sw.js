window.addEventListener('install', function(event) {
    console.log("install", event);
    event.waitUntil(
        caches.open("cache-simple").then(function(cache) {
            console.log('[ServiceWorker] Caching index.html');
            return cache.add("index.html");
        })
    );
});

window.addEventListener('activate', function(event) {
    console.log("activate", event);
});

window.addEventListener('fetch', function(event) {
    console.log("[ServiceWorker] Fetch", event);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request)
        })
    );
});