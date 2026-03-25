// src/components/CarrinhoFlutuante.tsx
import { useState } from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

export function CarrinhoFlutuante() {
  const { itens, remover } = useCarrinho();
  const [open, setOpen] = useState(false);

  const mensagem = encodeURIComponent(
    `Olá, vim pelo site e gostaria de fazer um orçamento com essas peças:\n\n` +
    itens.map((p, i) => `${i + 1}. ${p.name}`).join('\n')
  );

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#d70005] hover:bg-[#b50004] text-white rounded-2xl w-14 h-14 shadow-xl shadow-red-900/30 flex items-center justify-center z-50 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-6 h-6" />
        {itens.length > 0 && (
          <span className="absolute -top-1.5 -right-1.5 text-xs bg-white text-[#d70005] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-sm border border-red-100">
            {itens.length}
          </span>
        )}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Painel lateral */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: '75vh' }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-200" />
        </div>

        <div className="px-5 pb-6 overflow-y-auto" style={{ maxHeight: 'calc(75vh - 20px)' }}>
          {/* Header */}
          <div className="flex justify-between items-center mb-5 mt-2">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Seu Carrinho</h2>
              <p className="text-xs text-gray-400">{itens.length} {itens.length === 1 ? 'item' : 'itens'}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>

          {/* Items */}
          {itens.length > 0 ? (
            <>
              <ul className="space-y-2 mb-6">
                {itens.map((item) => (
                  <li key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-10 h-10 object-contain rounded-lg bg-white flex-shrink-0" />
                    )}
                    <span className="text-sm text-gray-700 font-medium flex-1 leading-snug line-clamp-2">{item.name}</span>
                    <button
                      onClick={() => remover(item.id)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all flex-shrink-0"
                    >
                      <Trash2 size={14} />
                    </button>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5585996728327?text=${mensagem}`}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-3.5 rounded-2xl transition-all duration-200 active:scale-95 shadow-lg shadow-green-900/20"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Finalizar pelo WhatsApp
              </a>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart size={24} className="text-gray-300" />
              </div>
              <p className="text-gray-400 text-sm">Seu carrinho está vazio</p>
              <p className="text-gray-300 text-xs mt-1">Adicione produtos para fazer um orçamento</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
