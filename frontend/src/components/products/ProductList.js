import React, { useEffect, useState } from 'react';
import Product from './Products';
import getProducts from '../../api/getProducts'; // Import the getProducts function

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [numToFetch, setNumToFetch] = useState(20); // Initial number of products to fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        // Handle errors if necessary
      }
    };

    fetchData();
  }, []);

  const loadMoreProducts = () => {
    // Increment the number of products to fetch by 10
    setNumToFetch(numToFetch + 10);
  };

  let listProducts = 'No products found';

  if (products) {
    // Slice the products based on the current number to fetch
    const displayedProducts = products.slice(0, numToFetch);

    listProducts = displayedProducts.map((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  return (
	<main>
		<h1 className='main-header'>PRODUKTET E FUNDIT</h1>
	<div id='products' className='product-list'>
      {listProducts}
     
    </div>
	{products.length > numToFetch && (
        <button onClick={loadMoreProducts} className='load-more-button'>
          Load More
        </button>
      )}
	</main>
  );
};

export default ProductList;
