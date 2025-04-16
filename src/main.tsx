// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CarrinhoProvider } from './context/CarrinhoContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </BrowserRouter>
</React.StrictMode>

);