import Dexie from 'dexie';

const db = new Dexie('CulinariaElzaDB_V3');

db.version(1).stores({
  receitas: 'id, titulo, descricao, imagem, video, createdAt, pendente',
});

export default db;