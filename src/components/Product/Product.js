import React from 'react';

const Product = (props) => {    
    const {product, addToCart} = props;
    return (
        <div style={{border: '1px solid tomato', padding: '5px'}}>
            <h3>{product.name}</h3>
            <button 
            onClick={()=> addToCart(product.id, product.name)}
            >Add to Cart
            </button>
        </div>
    );
};

export default Product;