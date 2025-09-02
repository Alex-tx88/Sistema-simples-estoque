import React from "react";
import Card from "./Card";
import './module_css/Dashboard.css';

const Dashboard = ()=>{
    const totalValue = 43500.00

    return(
        <section className="dashboard-container">
            <Card title="Total de produtos" value="4"/>
            <Card title="Valor Total" value={totalValue.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'})}/>
            <Card title="Sem Estoque" value="1"/>
            <Card title="Estoque Baixo" value="1"/>
        </section>
    )
}

export default Dashboard;