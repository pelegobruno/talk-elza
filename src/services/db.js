// src/services/db.js
import Dexie from 'dexie';

const db = new Dexie('ReceitasOfflineDB');

db.version(2).stores({
  receitas: '++id, titulo, descricao, imagem, video, createdAt, pendente',
});

export default db;
