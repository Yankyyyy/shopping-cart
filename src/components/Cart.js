//component to manage the cart and display its contents with removeFromCart function component definition
import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cart, setCart] = useState([{id: 2, name: 'Hat', cost: 300}]); // State to store cart items

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const totalCost = cart.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="cart" style={{ overflowY: 'auto' }}>
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
  );
};

export default Cart;
