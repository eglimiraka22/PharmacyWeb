// src/components/Product.js
import React, { useContext } from 'react';
import OrderButton from '../UI/OrderButton';
import CartContext from '../../store/cart-context';

const Product = ({ product }) => {

	const cartCtx = useContext(CartContext);
  const price = `$${product.price.toFixed(2)}`;
	const onClickHandler = (e) => {
		e.preventDefault();
    cartCtx.addItem({
      id: product.id,
      name: product.name,
      price: price,
      amount: 1

    });
	};
	return (
		<div className='product-card'>
			<div
				className='image'
				style={{ backgroundImage: `url(${product.image_url})` }}
			></div>
			<div className='details'>
				<h2>{product.name}</h2>
				<p>{product.description}</p>
				<p>Stock: {product.stock}</p>
				<p>Manufacturer: {product.manufacturer}</p>
				<p className='price'>
					€{product.price} {''}{' '}
				</p>

				{/* Add more attributes as needed */}
				<p className='cart'>
					<OrderButton onClick={onClickHandler} />
				</p>
			</div>
		</div>
	);
};

export default Product;
