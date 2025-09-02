import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
const initialProducts = [
  {
    id: 1,
    name: 'Notebook Dell Inspiron',
    category: 'Eletrônicos',
    price: 2500.00,
    quantity: 15,
    description: 'Notebook para uso profissional com 8GB RAM'
  },

    {
    id: 2,
    name: 'Mouse Logitech MX',
    category: 'Periféricos',
    price: 350.00,
    quantity: 0, 
    description: 'Mouse sem fio ergonômico'
  },
]

function App() {
    const [products, setProducts] = useState(initialProducts);

  return (
    <div className="App-container">
      <Header/>
      <main className="main-content">
        <Dashboard/>
         <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;
