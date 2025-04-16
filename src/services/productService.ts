import { supabase } from '../lib/supabaseClient';

export async function getProdutos() {
  const { data, error } = await supabase.from('products').select('*').order('name');
  if (error) throw new Error(error.message);
  return data;
}

export async function adicionarProduto(produto: {
  name: string;
  description?: string;
  image?: string;
}) {
  const { data, error } = await supabase.from('products').insert([produto]);
  if (error) throw new Error(error.message);
  return data;
}