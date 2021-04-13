import React from 'react';
import "./ProductCard.css"

function Card({product, onClick}) {

    return (
        <div className="Product__card" onClick={() => onClick(product.id)}>
            <img src={product.image} alt="non image"/>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>Delete</button>
        </div>
    )
}

export default Card;
