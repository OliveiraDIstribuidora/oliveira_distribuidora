// src/components/SliderMarcas.tsx
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
    // repetição
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/TXK.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/WW3.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/danidrea.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/darom.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/diafrag.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/filtran.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/logo-gauss.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/tmac.jpeg?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/valflex.png?raw=true',
    'https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/marcas/vedamotors.png?raw=true'
  ];

  return (
    <section className="bg-white overflow-hidden py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#d70005] mt-8">Trabalhamos com as Melhores Marcas do Mercado</h2>
        <p className="text-gray-500 max-w-[90%] mx-auto text-xl">Na Oliveira <span className="text-[#d70005]">Distribuidora</span>, oferecemos peças e acessórios de moto das marcas mais renomadas,
        garantindo qualidade, durabilidade e performance para sua motocicleta.</p>
      </div>
   
      <div className="relative w-full overflow-hidden my-20">
        <div className="flex w-max animate-slide gap-8">
          {[...marcas, ...marcas].map((marca, idx) => (
            <div key={idx} className="min-w-[150px] flex items-center justify-center">
              <img src={marca} alt={`marca-${idx}`} className="h-16 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
