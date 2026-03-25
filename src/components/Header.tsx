import { useState, useEffect } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Início' },
    { href: '#about', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
    { href: '/produtos', label: 'Catálogo' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#161617]/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-[#161617]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://github.com/OliveiraDIstribuidora/oliveira_distribuidora/blob/main/src/assets/logo-sem_fundo.png?raw=true"
            alt="Oliveira Distribuidora Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
            >
              {label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-[#d70005] group-hover:w-4/5 transition-all duration-300 rounded-full" />
            </a>
          ))}
          <a
            href="/produtos"
            className="ml-4 px-5 py-2 bg-[#d70005] hover:bg-[#b50004] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30 active:scale-95"
          >
            Ver Catálogo
          </a>
        </nav>

        {/* Botão hambúrguer */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuAberto ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuAberto ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuAberto ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-[#0f0f10] border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuAberto(false)}
              className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
