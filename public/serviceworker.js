const CACHE_NAME = 'v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const urlsToCache = [
    '/',
    'index.html',
    'favicon.png',
    'logo192.png',
    'logo512.png',
    // '/static/css/main.0c673e77.chunk.css',
    '/static/css/main.7cd500e0.chunk.css',
    // '/static/js/2.98d3516b.chunk.js',
    '/static/js/2.88ad5674.chunk.js',
    // '/static/js/main.ddc4b973.chunk.js',
    '/static/js/main.66da2b18.chunk.js',
    '/static/js/runtime-main.6fe5cc64.js',

    '/static/media/logo.6ce24c58.svg',
    '/static/media/logo.da8a8e4b.jpg',
    '/static/media/NotoSans-Bold.66ab2974.ttf',
    '/static/media/NotoSans-Regular.fa11626f.ttf',
    '/static/media/PlayfairDisplay-Italic-VariableFont_wght.54d4b837.ttf',

    '/manifest.json'
];

const pathsToCache = [
    '/consultant',
    '/personal',
    '/family',
    '/employment',
    '/income',
    '/policies',
    '/softfacts',
    '/priorities',
    '/thirdpartyadvice',
    '/whatyouown',
    '/whatyouowe',
    '/estate',
    '/changes',
    '/verification',
    '/prompt',
    '/objectives',
    '/other',
    '/investing',
    '/attitude',
    '/risk-profiling',
    '/capacity',
    '/complete',
]

self = this;

// installer service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching data')
            return cache.addAll(urlsToCache).then(() => {

                pathsToCache.map(cacheThePath => {
                    fetch(`${cacheThePath}`).then(fetchedPath => {
                        cache.add(`${cacheThePath}`, fetchedPath)
                    })
                })


            }).catch((err) => {
                console.log('cache error', err)
            })
            // return cache.addAll(urlsToCache).catch((err) => {
            //     console.log('cache error', err)
            // })
        })
    )

})

// activate service worker
self.addEventListener('activate', (event) => {
    // on activation whitelisting cache
    const cacheWhiteList = [CACHE_NAME, DYNAMIC_CACHE]
    // cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    if(!cacheWhiteList.includes(cacheName)){
                        return caches.delete(cacheName)
                    }
                })
            ))
    )
})



// listen for service worker
self.addEventListener('fetch', (event) => {
    // console.log(event.request)
    event.respondWith(
        // fetch(event.request).then(fetchRes => {
        //     return caches.open(DYNAMIC_CACHE).then(cache => {
        //         cache.put(event.request.url, fetchRes.clone())
        //         return fetchRes
        //     })
        // }).catch(() => {
        //     caches.match(event.request).then(cachRes => {
        //         return cachRes
        //     })
        // })
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(fetchRes => {
                return caches.open(DYNAMIC_CACHE).then(cache => {
                    cache.put(event.request.url, fetchRes.clone())
                    return fetchRes
                })
            })
        })


    )
})