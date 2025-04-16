// src/components/Header.tsx
import { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-[#161617] text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img
          src="src/assets/logo-sem_fundo.png"
          alt="TaLimpo Logo"
          className="w-[200px]"
        />

        {/* Botão hambúrguer no mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-[#d70005] focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-xl">
          <a href="/" className="hover:text-[#d70005]">Início</a>
          <a href="#about" className="hover:text-[#d70005]">Sobre</a>
          <a href="/contato" className="hover:text-[#d70005]">Contato</a>
          <a href="/produtos" className="hover:text-[#d70005]">Catálogo</a>
        </nav>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <nav className="md:hidden mt-4 flex flex-col items-center space-y-2 text-lg text-[#d70005]">
          <a href="/" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Início</a>
          <a href="#about" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Sobre</a>
          <a href="/contato" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Contato</a>
          <a href="/produtos" className="hover:text-[#102e41]" onClick={() => setMenuAberto(false)}>Catálogo</a>
        </nav>
      )}
    </header>
  );
}
