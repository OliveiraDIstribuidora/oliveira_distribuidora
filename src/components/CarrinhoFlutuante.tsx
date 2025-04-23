// src/components/CarrinhoFlutuante.tsx
import { useState } from 'react';
import { useCarrinho } from '../context/CarrinhoContext';
import { CircleX, ShoppingCart } from 'lucide-react';

export function CarrinhoFlutuante() {
  const { itens, remover } = useCarrinho();
  const [open, setOpen] = useState(false);

  const mensagem = encodeURIComponent(itens.map(p => `${p.name}`).join('\n'));

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#d70005] text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center z-50 hover:scale-105 transition-transform"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-7 h-7" />
        {itens.length > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-white text-[#d70005] rounded-full w-5 h-5 flex items-center justify-center font-bold shadow">
            {itens.length}
          </span>
        )}
      </button>

      {/* Painel do carrinho */}
      {open && (
        <>
          {/* Fundo escuro para foco */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Carrinho embaixo */}
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl z-50 max-h-[70vh] overflow-y-auto transition-transform animate-slide-up p-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#d70005]">Seu Carrinho</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-[#d70005] text-2xl hover:opacity-70 transition"
              >
                <CircleX />
              </button>
            </div>

            <ul className="divide-y">
              {itens.length > 0 ? (
                itens.map((item) => (
                  <li key={item.id} className="flex justify-between items-center py-3">
                    <span className="text-gray-800">{item.name}</span>
                    <button
                      onClick={() => remover(item.id)}
                      className="text-sm text-[#d70005] hover:underline"
                    >
                      Remover
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-center text-gray-500 py-10">Seu carrinho está vazio</li>
              )}
            </ul>

            {itens.length > 0 && (
              <a
                href={`https://wa.me/5585996728327?text=Olá, vim pelo site e gostaria de fazer um orçamento com essas peças:\n${mensagem}`}
                className="block mt-6 bg-[#d70005] text-white font-semibold py-3 text-center rounded-xl hover:bg-red-700 transition"
                target="_blank"
              >
                Finalizar no WhatsApp
              </a>
            )}
          </div>
        </>
      )}
    </>
  );
}
