export function ValoresEndereco() {
  return (
    <section className="py-16 px-4">
      {/* VALORES */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#d70005] mb-6">Nossos Valores</h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12">
          Na <strong className="text-[#d70005]">Oliveira Distribuidora</strong>, acreditamos que cada peça faz a diferença — 
          e que cada cliente merece o melhor atendimento possível. Por isso, nossos valores são o que nos guiam todos os dias:
        </p>

        <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left text-gray-700">
          {[
            {
              titulo: 'Comprometimento com o Cliente',
              texto: 'Atendemos com agilidade, respeito e total dedicação às suas necessidades.',
            },
            {
              titulo: 'Paixão por Duas Rodas',
              texto: 'Somos apaixonados por motos, e isso se reflete em tudo o que fazemos.',
            },
            {
              titulo: 'Responsabilidade e Ética',
              texto: 'Nosso compromisso é com o respeito, a ética e a responsabilidade em todas as relações.',
            },
            {
              titulo: 'Qualidade e Confiabilidade',
              texto: 'Só trabalhamos com produtos de procedência garantida e marcas reconhecidas no mercado.',
            },
          ].map((valor, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-[#d70005]"
            >
              <h3 className="text-xl font-semibold text-[#d70005] mb-3">{valor.titulo}</h3>
              <p className="text-gray-600">{valor.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ENDEREÇO */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#d70005] mb-6">Onde Estamos</h2>
        <p className="text-gray-700 text-xl mb-2">
          Rua Maria Firmino, 443 - Siqueira, Fortaleza - CE, 60732-150
        </p>
        <p className="text-gray-600 mb-8">Visite a loja física!</p>

        <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d70005]">
          <iframe
            title="Mapa da Oliveira Distribuidora"
            src="https://www.google.com/maps/embed?pb=!4v1743592867046!6m8!1m7!1sCI2DFxGX13k4OIiv4_DhjQ!2m2!1d-3.815342168612243!2d-38.62041140024277!3f249.3549020906971!4f-12.301542913918723!5f0.7820865974627469"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
