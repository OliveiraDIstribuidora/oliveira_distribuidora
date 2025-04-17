// src/pages/LoginPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { supabase } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });

    if (error) {
      alert('Login falhou: ' + error.message);
    } else {
      navigate('/admin');
    }
  }

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Login do Admin</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Entrar
      </button>
    </form>
  );
}
