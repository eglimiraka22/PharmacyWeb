// src/App.js
import React from 'react';
import ProductList from './components/products/ProductList';
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<>
				<Header />

				<ProductList />
			</>
		</BrowserRouter>
	);
}

export default App;
