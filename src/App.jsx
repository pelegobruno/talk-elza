import React from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; // ⚡ USAR HashRouter
import Home from './pages/home';
import Admin from './pages/Admin';
import Util from './pages/util';
import Login from './pages/login';

function App() {
  const isLogado = sessionStorage.getItem('logado') === 'true';

  return (
    <HashRouter> {/* MUDANÇA AQUI */}
      <Navbar isLogado={isLogado} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/util" element={<Util />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}

function Navbar({ isLogado }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
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
      )}
    </nav>
  );
}

export default App;
