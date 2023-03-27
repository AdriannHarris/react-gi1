import React from 'react';
import './styles.css'

function Products(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
export default Products;