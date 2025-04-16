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
    <div className="max-w- md:w-[90%] justify-between mx-auto px-1 text-center">
      <h1 className="text-2xl font-bold my-4 text-[#d70005]">Todos os Produtos</h1>
      <div className="mx-auto py-8 px-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 justify-between">
      {produtos.length === 0 ?(
          <p className="text-center col-span-full">Nenhum produto disponível no momento.</p>
        ) : (
        produtos.map((p) => (
          <div key={p.id} className="m-3 bg-white shadow-md rounded-2xl p-4 hover:scale-105 transition-all flex flex-col w-[100%] md:w-[250px] justify-around">
            <img src={p.image} alt={p.name} className="w-full h-40 object-contain rounded-xl mb-2" />
            <h2 className="text-lg font-semibold text-[#d70005]">{p.name}</h2>
            <p className='text-sm text-gray-600 mb-3 hidden'>{p.description}</p>
            <button onClick={() => adicionar(p)} className="bg-green-500 text-white px-2 py-1 mt-2 mr-2">Adicionar</button>
            <button onClick={() => setSelected(p)} className="underline">Ver Detalhes</button>
          </div>
        )))}
        {selected && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <img src={selected.image} alt={selected.name} className="w-full h-40 object-contain rounded-xl mb-2" />
              <h2 className="text-2xl font-bold text-[#d70005]">{selected.name}</h2>
              <p className="text-gray-700 mt-2 block">{selected.description}</p>
              <button onClick={() => setSelected(null)} className="mt-6 bg-[#d70005] text-white px-4 py-2 rounded-md hover:bg-[#d70005] transition w-full">Fechar</button>
            </div>
          </div>
        )}
      </div>
      <CarrinhoFlutuante />
    </div>
  );
}