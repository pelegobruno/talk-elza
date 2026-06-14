import db from './db';
import { getReceitas as getFirebaseReceitas, saveReceita } from './storage';

export async function getReceitasOffline() {
  return await db.receitas.toArray();
}

export async function salvarReceitaLocalmente(receita) {
  // Se não tiver ID, cria um, senão usa o que já tem
  const receitaParaSalvar = {
    ...receita,
    id: receita.id || crypto.randomUUID(),
    createdAt: receita.createdAt || new Date().toISOString(),
    pendente: 1, 
  };
  await db.receitas.put(receitaParaSalvar);
}

export async function syncReceitasFirebaseParaLocal() {
  const firebaseReceitas = await getFirebaseReceitas();
  
  // Garante que todas as receitas do Firebase tenham um ID válido antes de salvar localmente
  const receitasParaSalvar = firebaseReceitas.map(r => ({
    ...r,
    id: r.id || crypto.randomUUID(),
    pendente: 0 
  }));

  const pendentes = await db.receitas.where('pendente').equals(1).toArray();

  await db.receitas.clear();
  await db.receitas.bulkPut(receitasParaSalvar);
  
  if (pendentes.length) {
    await db.receitas.bulkPut(pendentes);
  }
}

export async function sincronizarPendentes() {
  const pendentes = await db.receitas.where('pendente').equals(1).toArray();

  for (const receita of pendentes) {
    const { id, pendente, ...dados } = receita; 
    try {
      await saveReceita(dados);
      await db.receitas.delete(id);
    } catch (error) {
      console.error(`Erro ao sincronizar a receita com ID ${id}:`, error);
    }
  }

  await syncReceitasFirebaseParaLocal(); 
}