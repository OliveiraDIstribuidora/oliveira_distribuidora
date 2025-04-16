// src/context/CarrinhoContext.tsx
import { createContext, useContext, useState } from 'react';

type Produto = { id: string | number; name: string };

type CarrinhoContextType = {
  itens: Produto[];
  adicionar: (produto: Produto) => void;
  remover: (id: string | number) => void;
};

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  const adicionar = (produto: Produto) => setItens((prev) => [...prev, produto]);
  const remover = (id: string | number) => setItens((prev) => prev.filter(p => p.id !== id));

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error('useCarrinho deve ser usado dentro do CarrinhoProvider');
  return context;
}
