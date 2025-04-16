import { useState } from 'react';
import { adicionarProduto } from '../services/productService';

export function AdminForm() {
  const [form, setForm] = useState({ name: '', description: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await adicionarProduto(form);
      setMsg('Produto adicionado com sucesso!');
      setForm({ name: '', description: '', image: '' });
    } catch (err) {
      setMsg('Erro ao adicionar produto.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Painel Admin - Adicionar Produto</h2>
      <input
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full"
        required
      />
      <textarea
        placeholder="Descrição"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="URL da Imagem"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-[#d70005] text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Salvando...' : 'Adicionar Produto'}
      </button>
      {msg && <p className="text-sm text-green-600">{msg}</p>}
    </form>
  );
}
