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
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full w-14 h-14 shadow-xl flex items-center justify-center z-50"
        aria-label="Abrir carrinho"
      >
        <ShoppingCart className="w-6 h-6" />
        {itens.length > 0 && (
          <span className="absolute -top-1 -right-1 text-xs bg-red-500 rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {itens.length}
          </span>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 flex justify-end" onClick={(e) => e.stopPropagation()}>
          <div className="bg-white w-80 h-full p-4 shadow-lg">
            <div className='justify-between flex items-center mb-4'>
              <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>
              <button onClick={() => setOpen(false)} className="text-red-500 text-2xl"><CircleX /></button>
            </div>

            <ul>
              {itens.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b">
                  {item.name}
                  <button onClick={() => remover(item.id)} className="text-red-500 text-sm">Remover</button>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/5585996728327?text=${mensagem}`}
              className="block mt-4 bg-green-600 text-white py-2 text-center rounded"
              target="_blank"
            >
              Finalizar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}