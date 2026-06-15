import React, { useState, useEffect } from 'react';
import {
  getReceitas,
  saveReceita,
  deleteReceita,
  updateReceita,
} from '../services/storage';
import {
  salvarReceitaLocalmente,
  sincronizarPendentes,
} from '../services/sync';

function Admin() {
  const [receitas, setReceitas] = useState([]);
  
  // Estados do Formulário de Adição
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  
  // Estados de Edição
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // Estado para Avisos na Tela (Toasts)
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Dispara os avisos bonitos na tela
  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  useEffect(() => {
    // Verificação de Segurança
    if (sessionStorage.getItem('logado') !== 'true') {
      window.location.href = '/login';
      return;
    }

    carregarReceitas();

    const handleOnline = async () => {
      console.log('🟢 Online! Sincronizando receitas...');
      triggerToast('Conexão restabelecida! Sincronizando dados...', 'info');
      await sincronizarPendentes();
      await carregarReceitas();
    };

    window.addEventListener('online', handleOnline);
    return () => window.removeEventListener('online', handleOnline);
  }, []);

  const carregarReceitas = async () => {
    const data = await getReceitas();
    setReceitas(data);
  };

  const addRecipe = async () => {
    // Validação de segurança: Não permite salvar sem título
    if (!title.trim()) {
      triggerToast('O título da receita é obrigatório!', 'error');
      return;
    }

    const nova = {
      titulo: title,
      descricao: description,
      imagem: image,
      video,
    };

    if (navigator.onLine) {
      await saveReceita(nova);
      await carregarReceitas();
      triggerToast('✅ Receita adicionada com sucesso!');
    } else {
      await salvarReceitaLocalmente(nova);
      triggerToast('⚠️ Salvo offline. Será enviado quando a internet voltar.', 'info');
    }

    // Limpa os campos após salvar
    setTitle('');
    setDescription('');
    setImage('');
    setVideo('');
  };

  const excluirReceita = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta receita definitivamente?')) {
      await deleteReceita(id);
      await carregarReceitas();
      triggerToast('🗑️ Receita excluída com sucesso!', 'info');
    }
  };

  const iniciarEdicao = (receita) => {
    setEditId(receita.id);
    setEditForm({ ...receita });
  };

  const cancelarEdicao = () => {
    setEditId(null);
    setEditForm({});
  };

  const salvarEdicao = async () => {
    if (!editForm.titulo.trim()) {
      triggerToast('O título não pode ficar vazio!', 'error');
      return;
    }
    await updateReceita(editId, editForm);
    await carregarReceitas();
    setEditId(null);
    setEditForm({});
    triggerToast('✏️ Receita atualizada com sucesso!');
  };

  const alterarCampo = (campo, valor) => {
    setEditForm({ ...editForm, [campo]: valor });
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', position: 'relative' }}>
      
      {/* Sistema de Avisos Flutuantes (Toast) */}
      {toast.show && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: toast.type === 'error' ? '#ff3333' : toast.type === 'info' ? '#2196F3' : '#4CAF50',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '30px',
          fontWeight: 'bold',
          boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
          zIndex: 9999,
          transition: 'all 0.3s ease'
        }}>
          {toast.message}
        </div>
      )}

      <h1 className="titulo-admin" style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Administração de Receitas</h1>
      
      {/* Formulário de Adição - Layout de Cartão */}
      <section style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
        <h3 style={{ color: '#ff0084', marginBottom: '15px' }}>➕ Nova Receita</h3>
        
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Título da Receita (Obrigatório)" 
          style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', color: '#333' }}
        />
        
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Modo de Preparo e Ingredientes..." 
          rows="4"
          style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', color: '#333', resize: 'vertical' }}
        />
        
        <input 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          placeholder="URL da Imagem de Capa (Opcional)" 
          style={{ width: '100%', padding: '12px', marginBottom: '10px', borderRadius: '8px', border: '1px solid #ddd', color: '#333' }}
        />
        
        <input 
          value={video} 
          onChange={(e) => setVideo(e.target.value)} 
          placeholder="URL do Vídeo do YouTube (Opcional)" 
          style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '8px', border: '1px solid #ddd', color: '#333' }}
        />
        
        <button 
          onClick={addRecipe}
          style={{ width: '100%', padding: '12px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Salvar Receita
        </button>
      </section>

      {/* Lista de Receitas Cadastradas */}
      <section style={{ backgroundColor: '#fff9f5', padding: '20px', borderRadius: '15px' }}>
        <h3 className="titulo-admin" style={{ fontSize: '1.8rem', marginTop: '0', color: '#8b453e' }}>Receitas Cadastradas ({receitas.length})</h3>
        
        {receitas.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777', fontStyle: 'italic' }}>Nenhuma receita cadastrada ainda.</p>
        ) : (
          receitas.map((r) => (
            <div key={r.id} className="item-admin" style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginBottom: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'block' }}>
              
              {editId === r.id ? (
                // MODO DE EDIÇÃO
                <div style={{ width: '100%' }}>
                  <input value={editForm.titulo} onChange={(e) => alterarCampo('titulo', e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Título" />
                  <textarea value={editForm.descricao} onChange={(e) => alterarCampo('descricao', e.target.value)} rows="3" style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Descrição" />
                  <input value={editForm.imagem} onChange={(e) => alterarCampo('imagem', e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '8px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="URL da Imagem" />
                  <input value={editForm.video} onChange={(e) => alterarCampo('video', e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="URL do Vídeo" />
                  
                  <div className="botoes-admin" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <button onClick={salvarEdicao} style={{ backgroundColor: '#4caf50' }}>💾 Salvar</button>
                    <button onClick={cancelarEdicao} style={{ backgroundColor: '#777' }}>❌ Cancelar</button>
                  </div>
                </div>
              ) : (
                // MODO DE VISUALIZAÇÃO DA LISTA
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <strong style={{ fontSize: '1.1rem', color: '#333' }}>{r.titulo}</strong>
                  <div className="botoes-admin" style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => iniciarEdicao(r)} style={{ backgroundColor: '#2196F3', padding: '6px 12px' }}>✏️ Editar</button>
                    <button onClick={() => excluirReceita(r.id)} style={{ backgroundColor: '#f44336', padding: '6px 12px' }}>🗑️ Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </section>
      
    </div>
  );
}

export default Admin;