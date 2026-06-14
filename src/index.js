if ('serviceWorker' in navigator) {
<<<<<<< HEAD
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/talk-elza/sw.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o ServiceWorker:', error);
      });
  });
}
=======
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.log('Falha ao registrar o ServiceWorker:', error);
        });
    });
  }
  
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
