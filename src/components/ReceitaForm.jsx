import React, { useState } from 'react';
import { saveReceita } from '../services/storage';

const ReceitaForm = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveReceita({ titulo, descricao });
    setTitulo('');
    setDescricao('');
    alert('Receita salva!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" required />
      <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" required />
      <button type="submit">Salvar Receita</button>
    </form>
  );
};

export default ReceitaForm;
