export function SliderMarcas() {
  const marcas = [
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/TXK.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/WW3.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/danidrea.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/darom.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/diafrag.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/filtran.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/logo-gauss.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/tmac.jpeg?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/valflex.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/vedamotors.png?raw=true',
    // repetição para loop contínuo
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/TXK.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/WW3.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/danidrea.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/darom.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/diafrag.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/filtran.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/logo-gauss.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/tmac.jpeg?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/valflex.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/vedamotors.png?raw=true',
  ];

  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <span className="inline-block text-xs font-semibold text-[#d70005] uppercase tracking-widest mb-3">Parceiros</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Trabalhamos com as Melhores Marcas
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          Peças e acessórios das marcas mais renomadas — qualidade, durabilidade e performance para sua moto.
        </p>
      </div>

      {/* Carrossel com fade nas bordas */}
      <div className="relative w-full overflow-hidden">
        {/* Gradiente esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Gradiente direita */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-slide gap-10 py-4">
          {[...marcas, ...marcas].map((marca, idx) => (
            <div
              key={idx}
              className="min-w-[140px] flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img src={marca} alt={`marca-${idx}`} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
