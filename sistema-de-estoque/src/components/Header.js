import React from "react";
import './module_css/Header.css';

const Header = ()=>{
    const totalProducts = 4;
    const totalValue = 43500.00;


return (
<header className="app-header">
    <div className="header-title">

        <h2>Sistema de Estoque</h2>
    </div>
    <div className="header-info">
        <span>Produtos: {totalProducts}</span>
        <span>Valor Total: {totalValue}</span>
    </div>
</header>
)
}

export default Header;