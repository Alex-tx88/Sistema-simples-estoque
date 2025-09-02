import React from "react";
import './module_css/Card.css';

const Card = ({title,value,icon})=>{
    return(
        <div className="dashboard-card0">
            <div className="card-content">
                <span className="card-title">{title}</span>
                <span className="card-value">{value}</span>
            </div>
            <div className="card-icon"></div>
        </div>

    )
}

export default Card;