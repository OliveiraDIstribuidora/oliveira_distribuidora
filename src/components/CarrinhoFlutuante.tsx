// src/components/CarrinhoFlutuante.tsx
import { useState } from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import { CircleX, ShoppingCart } from 'lucide-react';

export function CarrinhoFlutuante() {
  const { itens, remover } = useCarrinho();
  const [open, setOpen] = useState(false);

  const mensagem = encodeURIComponent(itens.map(p => `• ${p.name}`).join('\n'));

  return (
    <>
      {/* Botão flutuante do carrinho */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full w-14 h-14 shadow-2xl flex items-center justify-center z-50 transition duration-300"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-6 h-6" />
        {itens.length > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-red-600 border-white border-2 rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {itens.length}
          </span>
        )}
      </button>

      {/* Painel do carrinho */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 flex justify-end" onClick={() => setOpen(false)}>
          <div
            className="bg-white w-80 sm:w-96 h-full p-5 shadow-2xl relative overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Seu Carrinho</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-red-500 transition"
                aria-label="Fechar carrinho"
              >
                <CircleX className="w-6 h-6" />
              </button>
            </div>

            {/* Lista de itens */}
            {itens.length > 0 ? (
              <>
                <ul className="space-y-3">
                  {itens.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center border-b pb-2 text-gray-700"
                    >
                      <span className="truncate">{item.name}</span>
                      <button
                        onClick={() => remover(item.id)}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Botão de finalizar */}
                <a
                  href={`https://wa.me/5585996728327?text=${mensagem}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded text-center transition duration-300"
                >
                  Finalizar no WhatsApp
                </a>
              </>
            ) : (
              <p className="text-gray-500 text-center mt-20">Seu carrinho está vazio.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
