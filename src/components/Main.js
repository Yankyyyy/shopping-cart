// component to display the list of products with addToCart function component definition
// and also, component to manage the cart and display its contents with removeFromCart function component definition
import React, { useState } from 'react';
import Product from './Product';
import CartItem from './CartItem';
import products from '../data';
import '../styles.css'; // Import the CSS styles


const Main = () => {
  const [cart, setCart] = useState([]); // State to store cart items

  const addToCart = (productId) => {
    setCart((prevCart) => [...prevCart, products.find((product) => product.id === productId)]);
    console.log("cart:", cart);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const totalCost = cart.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div>
      <div className="container">
        <div align="center" className="box">
        <h2>Products</h2>
        {products.map((product) => (
            <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
        </div>

        <div align="center" className="box">
        <h2>Cart</h2>
        {cart.length === 0 ? (
        <p>Cart is empty</p>
        ) : (
        cart.map((item) => (
            <CartItem key={item.id} item={item} onRemoveFromCart={removeFromCart} />
        ))
        )}
        <p>Total: ${totalCost}</p>
        <button onClick={() => setCart([])}>Checkout (Clear Cart)</button>
        </div>
      </div>
    </div>
  );
};

export default Main;