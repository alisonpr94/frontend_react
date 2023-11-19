import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    // Carregue os produtos do backend
    axios.get('http://localhost:8000/api/produtos/')
      .then(response => setProdutos(response.data))
      .catch(error => console.error('Erro ao buscar produtos:', error));

    // Carregue as vendas do backend
    axios.get('http://localhost:8000/api/vendas/')
      .then(response => setVendas(response.data))
      .catch(error => console.error('Erro ao buscar vendas:', error));
  }, []);

  return (
    <div>
      <h1>Cafeteria App</h1>

      <h2>Produtos</h2>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>{produto.nome} - R${produto.preco}</li>
        ))}
      </ul>

      <h2>Vendas</h2>
      <ul>
        {vendas.map(venda => (
          <li key={venda.id}>{venda.total} - {venda.data}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
