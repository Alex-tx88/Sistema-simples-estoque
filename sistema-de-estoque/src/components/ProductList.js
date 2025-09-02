import React from 'react';
import ProductItem from './ProductItem';
import './module_css/ProductList.css';

const ProductList = ({ products }) => {
  return (
    <section className="product-list-container">
      <div className="list-header">
        <h3>Lista de Produtos</h3>
        <div className="list-actions">
          <input type="text" placeholder="Buscar produtos..." className="search-input" />
          <button className="new-product-btn">+ Novo Produto</button>
        </div>
      </div>
      <div className="products-grid">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;