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
        console.log('Produtos recebidos:', produtosLimitados);
        setProdutos(produtosLimitados);
      })
      .catch((err) => {
        console.error('Erro ao buscar produtos:', err);
      });
  }, []);

  return (
    <div className=''>
      <section className="max-w- md:w-[90%] justify-between mx-auto px-1">
        <div className="mx-auto py-8 px-1 flex justify-between text-center">
          <h2 className="text-2xl font-bold text-[#d70005]">Produtos em Destaque</h2>
          <button className="text-[#005c99] text-xl"><a href="/produtos">Ver todos</a></button>
        </div>
        <div className='mx-auto py-8 px-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 justify-between text-center'>
          {produtos.length === 0 ? (
            <p className="text-center col-span-full">Nenhum produto disponível no momento.</p>
          ) : (
            produtos.map((p) => (
              <div key={p.id} className="m-3 bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition-all flex flex-col w-[90%] md:w-[90%] justify-around">
                <img src={p.image} alt={p.name} className="w-full h-40 object-contain rounded-xl mb-2" />
                <h2 className="flex text-xl font-bold text-[#161617] justify-center">{p.name}</h2>
                <p className='text-sm text-gray-600 mb-3 hidden'>{p.description}</p>
                <button onClick={() => onAdd(p)} className="flex bg-green-500 text-white px-2 py-1 my-3 mr-2 gap-3 justify-center rounded-md hover:bg-green-700"><ShoppingCart />Adicionar</button>
                <button onClick={() => setSelected(p)} className="underline">Ver Detalhes</button>
              </div>
            )))}
          {selected && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl max-w-md w-full p-6 relative justify-center flex-col text-center">
                <img src={selected.image} alt={selected.name} className="w-full h-40 object-contain rounded-xl mb-2" />
                <h2 className="text-2xl font-bold mt-4 text-[#161617]">{selected.name}</h2>
                <p className="text-gray-700 my-4 block">{selected.description}</p>
                <button onClick={() => setSelected(null)} className="mt-4 bg-[#d70005] text-white px-4 py-2 rounded-md hover:bg-[#9a1a1c] transition w-full">Fechar</button>
              </div>
            </div>
          )}
        </div>

      </section>
    </div>
  );
}