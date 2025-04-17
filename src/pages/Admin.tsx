import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminForm } from '../components/AdminForm';
import { AdminTable } from '../components/AdminTable';

export function Admin() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [produtoEditando, setProdutoEditando] = useState<any | null>(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user]);

  if (!user) return null;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Painel Admin</h1>
        <button
          onClick={() => {
            localStorage.removeItem('supabase.auth.token');
            window.location.href = '/login';
          }}
          className="text-red-500 text-sm"
        >
          Sair
        </button>
      </div>

      <AdminForm
        produtoSelecionado={produtoEditando}
        onSucesso={() => {
          setProdutoEditando(null);
          setRefetch(!refetch); // forçar reload
        }}
      />
      <AdminTable
        onEditar={setProdutoEditando}
        key={refetch ? '1' : '0'} // força recarregar dados
      />
    </div>
  );
}
