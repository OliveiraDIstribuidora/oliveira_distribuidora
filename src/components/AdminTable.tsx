import { useEffect, useState } from 'react';
import { getProdutosByUser, deletarProduto } from '../services/productService';
import { useAuth } from '../context/AuthContext';

export function AdminTable({ onEditar }: { onEditar: (produto: any) => void }) {
  const [produtos, setProdutos] = useState<any[]>([]);
  const { user } = useAuth();

  async function carregar() {
    if (user?.id) {
      const lista = await getProdutosByUser(user.id);
      setProdutos(lista);
    }
  }

  useEffect(() => {
    carregar();
  }, [user]);

  async function handleDelete(id: string) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      await deletarProduto(id);
      carregar();
    }
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Produtos Cadastrados</h3>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Nome</th>
            <th className="p-2">Descrição</th>
            <th className="p-2">Imagem</th>
            <th className="p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.description}</td>
              <td className="border p-2">
                <img src={p.image} alt={p.name} className="h-10 max-w-[80px]" />
              </td>
              <td className="border p-2 space-x-2">
                <button onClick={() => onEditar(p)} className="text-blue-600 hover:underline">
                  Editar
                </button>
                <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
