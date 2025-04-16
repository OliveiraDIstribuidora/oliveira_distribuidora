// src/pages/Admin.tsx
import { useState } from 'react';
import { AdminForm } from '../components/AdminForm';

export function Admin() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState('');

  const senhaCorreta = 'admin123';

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (senha === senhaCorreta) {
      setAutenticado(true);
    } else {
      alert('Senha incorreta');
    }
  }

  if (!autenticado) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">Área Restrita</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2 mr-2"
          />
          <button type="submit" className="bg-[#d70005] text-white px-4 py-2 rounded">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return <AdminForm />;
}
