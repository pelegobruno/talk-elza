import db from './db';
import { getReceitas as getFirebaseReceitas, saveReceita } from './storage';

export async function getReceitasOffline() {
  return await db.receitas.toArray();
}

export async function salvarReceitaLocalmente(receita) {
  await db.receitas.add({
    ...receita,
    createdAt: new Date().toISOString(),
    pendente: true,
  });
}

export async function syncReceitasFirebaseParaLocal() {
  const firebaseReceitas = await getFirebaseReceitas();
  const pendentes = await db.receitas.where('pendente').equals(true).toArray();

  await db.receitas.clear();
  await db.receitas.bulkAdd(firebaseReceitas);
  if (pendentes.length) {
    await db.receitas.bulkAdd(pendentes);
  }
}

export async function sincronizarPendentes() {
  const pendentes = await db.receitas.where('pendente').equals(true).toArray();

  for (const receita of pendentes) {
    const { id, ...dados } = receita;
    try {
      await saveReceita(dados);
      await db.receitas.delete(id);
    } catch (error) {
      console.error(`Erro ao sincronizar a receita com ID ${id}:`, error);
    }
  }

  await syncReceitasFirebaseParaLocal(); // Atualiza tudo após sincronizar
}
