this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('my-cache-v1').then(function (cache) {
      return cache.addAll([
        '/'
        // 'test.js',
        // 'test.css'
      ])
    })
  )
})

this.addEventListener('activate', function (event) {
  event.waitUntil(
    Promise.all([
      this.clients.claim(),
      caches.keys().then(function (cacheList) {
        return Promise.all(cacheList.map(function (cacheName) {
          if (cacheName !== 'my-cache-v1') {
            return caches.delete(cacheName)
          }
        }))
      })
    ])
  )
})
