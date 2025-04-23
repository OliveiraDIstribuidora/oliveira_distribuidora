import { useEffect, useState } from 'react';
import { getProdutos } from '../services/productService';
import { CarrinhoFlutuante } from '../components/CarrinhoFlutuante';
import { useCarrinho } from '../context/CarrinhoContext';

export function TodosProdutos() {
  const { adicionar } = useCarrinho();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    getProdutos().then(setProdutos).catch(console.error);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-8 text-[#d70005]">Todos os Produtos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.length === 0 ? (
          <p className="col-span-full text-gray-500">Nenhum produto disponível no momento.</p>
        ) : (
          produtos.map((p) => (
            <div
              key={p.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-2xl p-4 flex flex-col items-center justify-between hover:scale-105 transition-transform duration-300 border-t-4 border-[#d70005]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-contain rounded-xl mb-3"
              />
              <h2 className="text-lg font-semibold text-[#d70005]">{p.name}</h2>
              <p className="text-sm text-gray-600 mb-3 hidden">{p.description}</p>
              <div className="flex gap-2 m-4">
                <button
                  onClick={() => adicionar(p)}
                  className="bg-[#d70005] hover:bg-[#8b292b] text-white px-4 py-2 rounded-lg transition"
                >
                  Adicionar
                </button>
                <button
                  onClick={() => setSelected(p)}
                  className="text-sm underline text-gray-700 hover:text-[#d70005]"
                >
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal de Detalhes */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-lg">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-40 object-contain rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-[#d70005] mb-2">{selected.name}</h2>
            <p className="text-gray-700 mb-6">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="bg-[#d70005] hover:bg-red-700 text-white px-4 py-2 rounded-md w-full transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <CarrinhoFlutuante />
    </div>
  );
}
