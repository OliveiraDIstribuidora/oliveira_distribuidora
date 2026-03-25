import { useEffect, useState } from 'react';
import { getProdutos } from '../services/productService';
import { CarrinhoFlutuante } from '../components/CarrinhoFlutuante';
import { useCarrinho } from '../context/CarrinhoContext';
import { ShoppingCart, X, Search } from 'lucide-react';

export function TodosProdutos() {
  const { adicionar } = useCarrinho();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    getProdutos().then(setProdutos).catch(console.error);
  }, []);

  const filtrados = produtos.filter(p =>
    p.name?.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero da página */}
      <div className="bg-[#161617] pt-10 pb-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Catálogo de Peças</h1>
        <p className="text-white/50 text-sm md:text-base mb-8">
          {produtos.length > 0 ? `${produtos.length} produtos disponíveis` : 'Carregando...'}
        </p>

        {/* Barra de busca */}
        <div className="max-w-md mx-auto relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar produto..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-[#d70005] focus:bg-white/15 transition-all text-sm"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {filtrados.length === 0 ? (
          <p className="text-center text-gray-400 py-20">
            {busca ? `Nenhum produto encontrado para "${busca}"` : 'Nenhum produto disponível.'}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtrados.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="bg-gray-50 h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-3 flex flex-col flex-1">
                  <h2 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug mb-3 flex-1">
                    {p.name}
                  </h2>
                  <div className="flex flex-col gap-1.5">
                    <button
                      onClick={() => adicionar(p)}
                      className="flex items-center justify-center gap-1.5 bg-[#d70005] hover:bg-[#b50004] text-white text-xs font-medium py-2 rounded-lg transition-all active:scale-95"
                    >
                      <ShoppingCart size={13} />
                      Adicionar
                    </button>
                    <button
                      onClick={() => setSelected(p)}
                      className="text-xs text-gray-400 hover:text-[#d70005] transition-colors py-1"
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl relative animate-modal-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <img src={selected.image} alt={selected.name} className="w-full h-40 object-contain" />
            </div>

            <h2 className="text-lg font-bold text-gray-900 mb-2">{selected.name}</h2>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">{selected.description}</p>

            <button
              onClick={() => { adicionar(selected); setSelected(null); }}
              className="w-full bg-[#d70005] hover:bg-[#b50004] text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <ShoppingCart size={16} />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      )}

      <CarrinhoFlutuante />
    </div>
  );
}
