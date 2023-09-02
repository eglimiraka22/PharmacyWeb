// src/components/Product.js
import React from 'react';
import OrderButton from '../UI/OrderButton';

const Product = ({ product }) => {


  return (
    <div className="product-card">
      <div className="image" style={{ backgroundImage: `url(${product.image_url})` }}></div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>Manufacturer: {product.manufacturer}</p>
        <p className='price'>€{product.price} {''} </p>

        {/* Add more attributes as needed */}
        <p className='cart'><OrderButton/></p>
      </div>
    </div>
  );
};

export default Product;