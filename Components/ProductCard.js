import React from 'react';
const ProductCard = ({ product }) => {
    return (
        <div >
            <h3>{product.title}</h3>
            <p>{product.category}</p>
            <h4>${product.price}</h4>
        </div>
    );
};

export default ProductCard;