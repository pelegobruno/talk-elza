import React from 'react';

const ReceitaCard = ({ receita }) => (
  <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
    <h2>{receita.titulo}</h2>
    <p>{receita.descricao}</p>
  </div>
);

export default ReceitaCard;
