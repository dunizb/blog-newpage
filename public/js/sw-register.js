if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/static/js/sw.js', { scope: '/static/' })
      .then(function (reigstration) {
        // console.log(reigstration.scope)

      })
      .catch(function (error) {
        console.error(error)
      })
  })
}
