if ('serviceWorker' in navigator) {
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