// src/services/productService.ts
import { supabase } from '../lib/supabaseClient';

export async function getProdutos() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name');

  if (error) throw new Error(error.message);
  return data;
}

export async function getProdutosByUser(user_id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('user_id', user_id)
    .order('name');

  if (error) throw new Error(error.message);
  return data;
}

export async function adicionarProduto(produto: {
  name: string;
  description?: string;
  image?: string;
  user_id: string;
}) {
  const { data, error } = await supabase.from('products').insert([produto]);
  if (error) throw new Error(error.message);
  return data;
}

export async function editarProduto(id: string, produto: {
  name: string;
  description?: string;
  image?: string;
}) {
  const { data, error } = await supabase.from('products').update(produto).eq('id', id);
  if (error) throw new Error(error.message);
  return data;
}

export async function deletarProduto(id: string) {
  const { data, error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw new Error(error.message);
  return data;
}
