// Inside ShoppingCart.jsx
import React from 'react';
import Header from './Header';

const ShopingCart = ({ cart, removeFromCart, updateQuantity }) => {
  const productsInCart = cart.filter((product) => product.quantity > 0);
  const totalPrice = cart.reduce((total, product) => total + parseFloat(product.price) * product.quantity, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <>
      <Header />
      <div>
        <h2>Shopping Cart</h2>
        {productsInCart.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>Price: ₱{product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
            <input
              type="number"
              value={product.quantity}
              min={1}
              max={10}
              onChange={(e) => {
                const newQuantity = parseInt(e.target.value, 10);
                if (!isNaN(newQuantity)) {
                  handleUpdateQuantity(product.id, newQuantity);
                }
              }}
            />
          </div>
        ))}
        <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ShopingCart;
