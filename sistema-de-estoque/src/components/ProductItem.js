
import React from 'react';
import './module_css/ProductItem.css';

const ProductItem = ({ product }) => {
  const totalPrice = product.price * product.quantity;
  const stockStatus = product.quantity > 0 ? 'Em estoque' : 'Sem estoque';
  const stockStatusClass = product.quantity > 0 ? 'in-stock' : 'out-of-stock';

  return (
    <div className="product-item">
      <div className="product-details">
        <div className="product-header">
          <h3>{product.name}</h3>
          <span className="category-tag">{product.category}</span>
          <span className={`stock-status ${stockStatusClass}`}>{stockStatus}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span>R$ {product.price.toFixed(2)}</span>
          <span>Qtd: {product.quantity}</span>
          <span>Total: {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </div>
      </div>
      <div className="product-actions">
        <button className="edit-btn">Editar</button>
        <button className="delete-btn">Excluir</button>
      </div>
    </div>
  );
};

export default ProductItem;