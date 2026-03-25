// src/components/ProdutosDestaque.tsx
import { useState, useEffect } from 'react';
import { getProdutos } from '../services/productService';
import { ShoppingCart, X, ArrowRight } from 'lucide-react';
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
      .then(res => setProdutos(res.slice(0, 8)))
      .catch(err => console.error('Erro ao buscar produtos:', err));
  }, []);

  return (
    <section className="py-16 px-4 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Header da seção */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-block text-xs font-semibold text-[#d70005] uppercase tracking-widest mb-2">Destaques</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Produtos em Destaque</h2>
          </div>
          <a
            href="/produtos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#d70005] hover:text-[#b50004] transition-colors group"
          >
            Ver todos
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {produtos.length === 0 ? (
          <p className="text-center text-gray-400 py-12">Nenhum produto disponível no momento.</p>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {produtos.map(p => (
              <SwiperSlide key={p.id}>
                <div className="my-6 mx-0.5 flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 hover:border-gray-200 overflow-hidden transition-all duration-300 group">
                  {/* Imagem */}
                  <div className="relative overflow-hidden bg-gray-50 h-44">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3 line-clamp-2 leading-snug flex-1">
                      {p.name}
                    </h3>

                    <div className="flex flex-col gap-2 mt-auto">
                      <button
                        onClick={() => onAdd(p)}
                        className="flex items-center justify-center gap-2 bg-[#d70005] hover:bg-[#b50004] text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
                      >
                        <ShoppingCart size={15} />
                        Adicionar
                      </button>
                      <button
                        onClick={() => setSelected(p)}
                        className="text-xs text-gray-400 hover:text-[#d70005] transition-colors"
                      >
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Modal de detalhes */}
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
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-40 object-contain"
              />
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">{selected.name}</h3>
            <p className="text-sm text-gray-500 mb-5 leading-relaxed">{selected.description}</p>

            <button
              onClick={() => { onAdd(selected); setSelected(null); }}
              className="w-full bg-[#d70005] hover:bg-[#b50004] text-white font-semibold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <ShoppingCart size={16} />
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
