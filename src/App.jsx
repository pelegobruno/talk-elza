import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Splash from './components/Splash';
import Home from './pages/home';
import Admin from './pages/Admin';
import Util from './pages/util';
import Login from './pages/login';

import './App.css'; 

function App() {
  // Verifica na memória se o splash já rodou nesta sessão
  const [showSplash, setShowSplash] = useState(() => {
    return sessionStorage.getItem('splashShown') !== 'true';
  });
  
  const [isLogado, setIsLogado] = useState(sessionStorage.getItem('logado') === 'true');

  // Lógica do cronômetro do Splash
  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('splashShown', 'true'); // Grava na memória que já abriu
      }, 2500); // 2.5 segundos de duração
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  // Mostra o Splash apenas se showSplash for verdadeiro
  if (showSplash) {
    return <Splash />;
  }

  // Depois do tempo, mostra o Aplicativo real
  return (
    <BrowserRouter basename="/talk-elza">
      <Navbar isLogado={isLogado} setIsLogado={setIsLogado} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/util" element={<Util />} />
        <Route path="/login" element={<Login setIsLogado={setIsLogado} />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar({ isLogado, setIsLogado }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    setIsLogado(false);
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/util">Util</Link>
      
      {isLogado ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={handleLogout} className="btn-sair">Sair</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default App;