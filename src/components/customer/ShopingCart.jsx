// Inside ShoppingCart.jsx
import React from 'react';
import Header from './Header';
import { sampleProducts } from '../../features/adminpage/productdata';

const ShopingCart = ({ cart, removeFromCart, updateQuantity }) => {


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
        {sampleProducts.map((product) => (
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
