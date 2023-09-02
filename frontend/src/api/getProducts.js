// getProducts.js
import axios from 'axios';

const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/products');
    return response.data;
  } catch (error) {
    console.error('Axios Error:', error);
    if (error.response) {
      console.error('Response Data:', error.response.data);
    }
    throw error;
  }
};

export default getProducts;