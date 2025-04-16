export function ValoresEndereco() {
  return (
    <section className="py-12 px-4 my-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#d70005] mb-6">Nossos valores</h2>
        <p className="text-gray-700 text-lg">Na Oliveira <span className="text-[#d70005]">Distribuidora</span>, acreditamos que cada peça faz a diferença — e que cada cliente merece o melhor atendimento possível. Por isso, nossos valores são o que nos guiam todos os dias:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-28 text-lg text-gray-700">
          <div className="bg-white p-8 rounded-lg shadow-md m-4 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-2xl text-[#d70005] mb-3">Comprometimento com o Cliente</h3>
            <p>Atendemos com agilidade, respeito e total dedicação às suas necessidades.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md m-4 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-2xl text-[#d70005] mb-3">Paixão por Duas Rodas</h3>
            <p>Somos apaixonados por motos, e isso se reflete em tudo o que fazemos.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md m-4 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-2xl text-[#d70005] mb-3">Responsabilidade e Ética</h3>
            <p>Nosso compromisso é com o respeito, a ética e a responsabilidade em todas as relações.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md m-4 hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-2xl text-[#d70005] mb-3">Qualidade e Confiabilidade</h3>
            <p>Só trabalhamos com produtos de procedência garantida e marcas reconhecidas no mercado.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#d70005] mb-6">Onde estamos</h2>
        <p className="text-gray-700 text-xl mb-6">Rua Maria Firmino, 443 - Siqueira, Fortaleza - CE, 60732-150</p>
        <p className="text-gray-700 mb-6">
          Visite a loja física!
        </p>

        <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#d70004a5]">
          <iframe
            title="Mapa da loja TaLimpo Thalita"
            src="https://www.google.com/maps/embed?pb=!4v1743592867046!6m8!1m7!1sCI2DFxGX13k4OIiv4_DhjQ!2m2!1d-3.815342168612243!2d-38.62041140024277!3f249.3549020906971!4f-12.301542913918723!5f0.7820865974627469"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}