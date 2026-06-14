// src/services/storage.js
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';

const COLLECTION_NAME = 'receitas';

// Adicionar nova receita no Firebase
export async function saveReceita(novaReceita) {
  await addDoc(collection(db, COLLECTION_NAME), {
    ...novaReceita,
    createdAt: serverTimestamp(), // ⏰ adiciona timestamp no momento da criação
  });
}

// Buscar todas as receitas, ordenadas pela data (mais novo primeiro)
export async function getReceitas() {
  const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Atualizar uma receita específica
export async function updateReceita(id, dadosAtualizados) {
  const ref = doc(db, COLLECTION_NAME, id);
  await updateDoc(ref, dadosAtualizados);
}

// Excluir uma receita
export async function deleteReceita(id) {
  const ref = doc(db, COLLECTION_NAME, id);
  await deleteDoc(ref);
}
