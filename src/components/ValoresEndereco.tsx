const valores = [
  {
    titulo: 'Comprometimento com o Cliente',
    texto: 'Atendemos com agilidade, respeito e total dedicação às suas necessidades.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    titulo: 'Paixão por Duas Rodas',
    texto: 'Somos apaixonados por motos, e isso se reflete em tudo o que fazemos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    titulo: 'Responsabilidade e Ética',
    texto: 'Nosso compromisso é com o respeito, a ética e a responsabilidade em todas as relações.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    titulo: 'Qualidade e Confiabilidade',
    texto: 'Só trabalhamos com produtos de procedência garantida e marcas reconhecidas no mercado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

export function ValoresEndereco() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-[#fef7f7]">
      {/* VALORES */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-[#d70005] uppercase tracking-widest mb-3">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Na <strong className="text-[#d70005]">Oliveira Distribuidora</strong>, acreditamos que cada peça faz a diferença —
            e que cada cliente merece o melhor atendimento possível.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((valor, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#d70005]/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#d70005]/8 text-[#d70005] flex items-center justify-center mb-4 group-hover:bg-[#d70005] group-hover:text-white transition-all duration-300">
                {valor.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">{valor.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{valor.texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ENDEREÇO */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-[#d70005] uppercase tracking-widest mb-3">Localização</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Onde Estamos</h2>
          <p className="text-gray-500 text-base">
            Rua Maria Firmino, 443 — Siqueira, Fortaleza - CE, 60732-150
          </p>
        </div>

        <div className="w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
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
