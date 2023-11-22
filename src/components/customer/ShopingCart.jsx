import React from 'react';
import { sampleProducts } from '../../features/adminpage/productdata';

const ShopingCart = ({ cart, removeFromCart }) => {
  // Check if cart is defined and is an array
  if (!cart || !Array.isArray(cart)) {
    return <p>Invalid cart data</p>;
  }

  // Filter products based on the cart property
  const productsInCart = cart.filter((product) => product.cart);

  // Calculate the total price of products in the cart
  const totalPrice = productsInCart.reduce((total, product) => total + parseFloat(product.price), 0);

  const handleRemoveFromCart = (productId) => {
    // Call the removeFromCart function passed as a prop
    removeFromCart(productId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {productsInCart.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ₱{product.price}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ShopingCart;
