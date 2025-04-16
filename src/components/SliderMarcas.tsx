// src/components/SliderMarcas.tsx
export function SliderMarcas() {
  const marcas = [
    'src/assets/marcas/darom.png',
    'src/assets/marcas/filtran.png',
    'src/assets/marcas/logo-gauss.png',
    'src/assets/marcas/tmac.jpeg',
    'src/assets/marcas/TXK.png',
    'src/assets/marcas/WW3.png',
    'src/assets/marcas/valflex.png',
    'src/assets/marcas/vedamotors.png',
    // repetição
    'src/assets/marcas/darom.png',
    'src/assets/marcas/filtran.png',
    'src/assets/marcas/logo-gauss.png',
    'src/assets/marcas/tmac.jpeg',
    'src/assets/marcas/TXK.png',
    'src/assets/marcas/WW3.png',
    'src/assets/marcas/valflex.png',
    'src/assets/marcas/vedamotors.png'
    
  ];

  return (
    <section className="bg-white overflow-hidden py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#d70005] mt-8">Marcas parceiras</h2>
        <p className="text-gray-500 text-xl">Marcas de qualidade e confiança</p>
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
