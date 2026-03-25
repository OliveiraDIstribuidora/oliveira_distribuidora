import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { TodosProdutos } from './pages/TodosProdutos';
import { CarrinhoFlutuante } from './components/CarrinhoFlutuante';
import { Header } from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
      {/* Carrinho visível em todas as rotas */}
      <CarrinhoFlutuante />
      <Header />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/produtos" element={<TodosProdutos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;