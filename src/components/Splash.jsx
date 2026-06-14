import React from 'react';
import logo from '../assets/talk-elza.png'; // Lembre-se de usar o nome exato da sua imagem

export default function Splash() {
  return (
    <div className="splash-container">
      <img src={logo} alt="Talk Elza Logo" className="splash-logo" />
    </div>
  );
}