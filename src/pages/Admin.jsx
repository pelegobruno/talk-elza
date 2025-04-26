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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem('logado') !== 'true') {
      window.location.href = '/login';
      return;
    }

    carregarReceitas();

    const handleOnline = async () => {
      console.log('🟢 Online! Sincronizando receitas...');
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
    const nova = {
      titulo: title,
      descricao: description,
      imagem: image,
      video,
    };

    if (navigator.onLine) {
      await saveReceita(nova);
      await carregarReceitas();
    } else {
      await salvarReceitaLocalmente(nova);
      alert('Receita salva offline. Ela será enviada quando a internet voltar.');
    }

    setTitle('');
    setDescription('');
    setImage('');
    setVideo('');
  };

  const excluirReceita = async (id) => {
    await deleteReceita(id);
    await carregarReceitas();
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
    await updateReceita(editId, editForm);
    await carregarReceitas();
    setEditId(null);
    setEditForm({});
  };

  const alterarCampo = (campo, valor) => {
    setEditForm({ ...editForm, [campo]: valor });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Administração de Receitas</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="URL da Imagem" />
      <input value={video} onChange={(e) => setVideo(e.target.value)} placeholder="URL do Vídeo" />
      <button onClick={addRecipe}>Adicionar Receita</button>

      <h3 className="titulo-admin">Receitas Cadastradas</h3>
      {receitas.map((r) => (
        <div key={r.id} className="item-admin">
          {editId === r.id ? (
            <div style={{ width: '100%' }}>
              <input value={editForm.titulo} onChange={(e) => alterarCampo('titulo', e.target.value)} />
              <textarea value={editForm.descricao} onChange={(e) => alterarCampo('descricao', e.target.value)} />
              <input value={editForm.imagem} onChange={(e) => alterarCampo('imagem', e.target.value)} />
              <input value={editForm.video} onChange={(e) => alterarCampo('video', e.target.value)} />
              <div className="botoes-admin">
                <button onClick={salvarEdicao}>💾 Salvar</button>
                <button onClick={cancelarEdicao}>❌ Cancelar</button>
              </div>
            </div>
          ) : (
            <>
              <strong>{r.titulo}</strong>
              <div className="botoes-admin">
                <button onClick={() => iniciarEdicao(r)}>✏️ Editar</button>
                <button onClick={() => excluirReceita(r.id)}>🗑️ Excluir</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Admin;
