import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import App from './App.jsx';
import './index.css';

// 🛑 EXTERMINADOR DE CACHE ANTIGO
// Este código limpa a memória do navegador e mata o Service Worker travado
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (let registration of registrations) {
      registration.unregister();
      console.log('Cache fantasma eliminado com sucesso!');
    }
  });
}
=======
import App from './App';
import './App.css'; // 👈 Importação do CSS global
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
<<<<<<< HEAD
  </React.StrictMode>,
);
=======
  </React.StrictMode>
);
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
