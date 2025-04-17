import { useEffect, useState } from 'react';
import { adicionarProduto, editarProduto } from '../services/productService';
import { useAuth } from '../context/AuthContext';

export function AdminForm({
  produtoSelecionado,
  onSucesso,
}: {
  produtoSelecionado: any | null;
  onSucesso: () => void;
}) {
  const { user } = useAuth();
  const [form, setForm] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    if (produtoSelecionado) {
      setForm({
        name: produtoSelecionado.name || '',
        description: produtoSelecionado.description || '',
        image: produtoSelecionado.image || '',
      });
    } else {
      setForm({ name: '', description: '', image: '' });
    }
  }, [produtoSelecionado]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (produtoSelecionado) {
      await editarProduto(produtoSelecionado.id, form);
    } else {
      await adicionarProduto({ ...form, user_id: user.id });
    }

    setForm({ name: '', description: '', image: '' });
    onSucesso();
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-4">
      <h2 className="text-lg font-bold">{produtoSelecionado ? 'Editar Produto' : 'Adicionar Produto'}</h2>
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
        placeholder="URL da imagem"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {produtoSelecionado ? 'Salvar Alterações' : 'Adicionar Produto'}
      </button>
    </form>
  );
}
