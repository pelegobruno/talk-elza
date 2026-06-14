import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ⚡ AQUI ESTÁ A CORREÇÃO: Recebendo o setIsLogado para atualizar o menu instantaneamente
function Login({ setIsLogado }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErro(''); // Limpa os erros anteriores

    if (usuario === 'admin2025' && senha === 'admin2025') {
      sessionStorage.setItem('logado', 'true');
      
      // Avisa o App.jsx que logou para liberar o menu na hora!
      if (setIsLogado) {
        setIsLogado(true);
      }
      
      navigate('/admin');
    } else {
      // Mensagem de erro mais profissional do que um alert()
      setErro('Puxa, usuário ou senha estão incorretos. Tente novamente!');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        <div style={styles.iconContainer}>
          <span style={styles.icon}>👩‍🍳</span>
        </div>
        
        <h2 style={styles.title}>Área Restrita</h2>
        <p style={styles.subtitle}>Entre para gerenciar suas receitas</p>

        <form onSubmit={handleLogin} style={styles.form}>
          
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Nome de usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Sua senha secreta"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={styles.input}
              required
            />
          </div>

          {/* Área de exibição de erro elegante */}
          {erro && (
            <div style={styles.errorBox}>
              <span style={{ marginRight: '8px' }}>⚠️</span> {erro}
            </div>
          )}

          <button type="submit" style={styles.button}>
            Entrar na Cozinha
          </button>

        </form>
      </div>
    </div>
  );
}

// ==========================================
// ESTILOS NATIVOS DE APP (INLINE)
// ==========================================
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh', // Centraliza verticalmente na tela
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '30px',
    padding: '40px 30px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#fff0f5',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px',
    boxShadow: '0 4px 15px rgba(255, 0, 132, 0.1)',
  },
  icon: {
    fontSize: '2.5rem',
  },
  title: {
    color: '#333',
    margin: '0 0 10px 0',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#777',
    fontSize: '1rem',
    margin: '0 0 30px 0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '16px',
    border: '2px solid #f0f0f0',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#fafafa',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box', // Garante que o padding não quebre a largura
  },
  errorBox: {
    backgroundColor: '#fff0f0',
    color: '#d32f2f',
    padding: '12px',
    borderRadius: '12px',
    fontSize: '0.9rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff0084', // O Pink da Culinária Elza
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    padding: '16px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 6px 20px rgba(255, 0, 132, 0.3)',
    transition: 'transform 0.2s, background-color 0.2s',
    width: '100%',
  }
};

export default Login;