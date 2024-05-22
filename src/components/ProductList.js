// component to display the list of products with addToCart function component definition
import React, { useState } from 'react';
import Product from './Product';
import products from '../data';

const ProductList = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, products.find((product) => product.id === productId)]);
    console.log("cart:", cart);
  };

  return (
    <div className="product-list" style={{ overflowY: 'auto' }}>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;