// src/components/ProdutosDestaque.tsx
import { useState, useEffect } from 'react';
import { getProdutos } from '../services/productService';
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper-overrides.css';

export function ProdutosDestaque({ onAdd }: { onAdd: (produto: any) => void }) {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    getProdutos()
      .then(res => setProdutos(res.slice(0, 5)))
      .catch(err => console.error('Erro ao buscar produtos:', err));
  }, []);

  return (
    <section className="max-w-7xl w-full mx-auto px-4 py-10">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold text-[#d70005]">Produtos em Destaque</h2>
      </div>

      {produtos.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum produto disponível no momento.</p>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {produtos.map(p => (
            <SwiperSlide key={p.id}>
              <div className=" my-8 mx-1 h-full flex flex-col justify-between bg-white shadow-md hover:shadow-xl rounded-2xl p-4 transition-transform hover:scale-105 text-center border-t-4 border-[#d70005]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-40 object-contain rounded-xl mb-3"
                />

                <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-[3rem]">
                  {p.name}
                </h3>

                <div className="space-y-2 mt-auto">
                  <button
                    onClick={() => onAdd(p)}
                    className="flex items-center justify-center gap-2 bg-[#d70005] hover:bg-[#d700048e] text-white px-4 py-2 rounded-md transition w-full"
                  >
                    <ShoppingCart size={18} /> Adicionar
                  </button>
                  <button
                    onClick={() => setSelected(p)}
                    className="text-sm underline text-gray-700 hover:text-[#d70005] transition"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="flex justify-center mt-8">
        <a
          href="/produtos"
          className="text-white bg-[#d70005] px-8 py-3 rounded-xl hover:bg-[#9b1a1d] hover:scale-105 transition font-medium"
        >
          Ver todos
        </a>
      </div>

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
