<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
=======
import React from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; // ⚡ USAR HashRouter
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
import Home from './pages/home';
import Admin from './pages/Admin';
import Util from './pages/util';
import Login from './pages/login';

<<<<<<< HEAD
import './App.css'; 

function App() {
  const [isLogado, setIsLogado] = useState(sessionStorage.getItem('logado') === 'true');

  return (
    <BrowserRouter basename="/talk-elza">
      <Navbar isLogado={isLogado} setIsLogado={setIsLogado} />
      
=======
function App() {
  const isLogado = sessionStorage.getItem('logado') === 'true';

  return (
    <HashRouter> {/* MUDANÇA AQUI */}
      <Navbar isLogado={isLogado} />
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/util" element={<Util />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login setIsLogado={setIsLogado} />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar({ isLogado, setIsLogado }) {
=======
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

function Navbar({ isLogado }) {
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
<<<<<<< HEAD
    setIsLogado(false);
=======
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
    navigate('/login');
  };

  return (
<<<<<<< HEAD
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
=======
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/">Home</Link>
      {' | '}
      {isLogado && <><Link to="/admin">Admin</Link> | </>}
      <Link to="/util">Util</Link>
      {' | '}
      {!isLogado && <Link to="/login">Login</Link>}
      {isLogado && (
        <>
          <button onClick={handleLogout}>Sair</button>
        </>
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
      )}
    </nav>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
