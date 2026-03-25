import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] text-white">
      {/* Faixa vermelha */}
      <div className="h-1 bg-gradient-to-r from-[#d70005] via-[#ff2a2a] to-[#d70005]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Coluna 1 - Marca */}
        <div className="flex flex-col gap-4">
          <img
            src="https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/logo-sem_fundo.png?raw=true"
            alt="Oliveira Distribuidora"
            className="h-10 w-auto"
          />
          <p className="text-white/50 text-sm leading-relaxed">
            Distribuindo qualidade e confiança para quem é apaixonado por duas rodas desde o primeiro dia.
          </p>
          <div className="flex gap-3 mt-1">
            <a
              href="https://www.instagram.com/oliveira_distribuidora1"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d70005] flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a
              href="https://www.facebook.com/p/oliveira_distribuidora1"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d70005] flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={17} />
            </a>
            <a
              href="mailto:motosnet-adm@gmail.com"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#d70005] flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="E-mail"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Coluna 2 - Links */}
        <div>
          <h3 className="text-sm font-semibold text-white/30 uppercase tracking-widest mb-4">Navegação</h3>
          <ul className="space-y-2.5">
            {[
              { href: '/', label: 'Início' },
              { href: '/produtos', label: 'Catálogo de Peças' },
              { href: '/contato', label: 'Fale Conosco' },
              { href: '#about', label: 'Sobre nós' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#d70005] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="text-sm font-semibold text-white/30 uppercase tracking-widest mb-4">Contato</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin size={15} className="text-[#d70005] mt-0.5 flex-shrink-0" />
              <span>Rua Maria Firmino, 443 - Siqueira, Fortaleza - CE, 60732-150</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone size={15} className="text-[#d70005] flex-shrink-0" />
              <a href="tel:+5585996728327" className="hover:text-white transition-colors">
                (85) 99672-8327
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail size={15} className="text-[#d70005] flex-shrink-0" />
              <a href="mailto:motosnet-adm@gmail.com" className="hover:text-white transition-colors">
                motosnet-adm@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">&copy; 2025 Oliveira Distribuidora. Todos os direitos reservados.</p>
          <p className="text-white/20 text-xs">Fortaleza, Ceará - Brasil</p>
        </div>
      </div>
    </footer>
  );
}
