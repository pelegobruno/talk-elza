<<<<<<< HEAD
import Dexie from 'dexie';

const db = new Dexie('CulinariaElzaDB_V3');

db.version(1).stores({
  receitas: 'id, titulo, descricao, imagem, video, createdAt, pendente',
});

export default db;
=======
// src/services/db.js
import Dexie from 'dexie';

const db = new Dexie('ReceitasOfflineDB');

db.version(2).stores({
  receitas: '++id, titulo, descricao, imagem, video, createdAt, pendente',
});

export default db;
>>>>>>> 01484b9b1ef78fadd13b6d7ca749896bff1d1105
