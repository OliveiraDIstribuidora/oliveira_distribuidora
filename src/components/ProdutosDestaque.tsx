import { useState, useEffect } from 'react';
import { getProdutos } from '../services/productService';
import { ShoppingCart } from 'lucide-react';

export function ProdutosDestaque({ onAdd }: { onAdd: (produto: any) => void }) {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    getProdutos()
      .then((res) => {
        const produtosLimitados = res.slice(0, 5);
        setProdutos(produtosLimitados);
      })
      .catch((err) => {
        console.error('Erro ao buscar produtos:', err);
      });
  }, []);

  return (
    <section className="max-w-7xl w-full mx-auto px-4 py-10">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-[#d70005]">Produtos em Destaque</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {produtos.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            Nenhum produto disponível no momento.
          </p>
        ) : (
          produtos.map((p) => (
            <div
              key={p.id}
              className="w-[90%] mx-auto bg-white shadow-md hover:shadow-xl rounded-2xl p-4 transition-transform hover:scale-105 flex flex-col items-center text-center border-t-4 border-[#d70005]"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-contain rounded-xl mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.name}</h3>
              <p className="text-sm text-gray-600 mb-3 hidden">{p.description}</p>
              <button
                onClick={() => onAdd(p)}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition w-full mb-2"
              >
                <ShoppingCart size={18} />
                Adicionar
              </button>
              <button
                onClick={() => setSelected(p)}
                className="text-sm underline text-gray-700 hover:text-[#d70005] transition"
              >
                Ver Detalhes
              </button>
            </div>
          ))
        )}
      </div>
      <div className='flex justify-center mt-8'>
        <a
          href="/produtos"
          className="text-white bg-[#d70005] p-4 px-8 rounded-xl hover:bg-[#9b1a1d] hover:scale-105 text-base font-medium transition"
        >
          Ver todos
        </a>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-lg text-center relative">
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-40 object-contain rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-[#161617] mb-2">{selected.name}</h3>
            <p className="text-gray-700 mb-6">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="bg-[#d70005] hover:bg-[#9a1a1c] text-white px-4 py-2 rounded-md w-full transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
