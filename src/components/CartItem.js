//component to display a single item in the cart with "Remove" button
import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <p>{item.name} - ${item.cost}</p>
      <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
