//component to display a single product with "Add To Cart" button
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <p>{product.name}</p>
      <p>Cost: ${product.cost}</p>
      <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
