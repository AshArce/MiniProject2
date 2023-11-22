// Inside AllProducts.jsx
import React, { useState } from 'react';
import ProductCard from '../../components/customer/ProductCard';
import ShoppingCart from '../../components/customer/ShopingCart';
import { sampleProducts } from '../adminpage/productdata';




function AllProducts() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Product already exists in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it
      setCart((prevCart) => [...prevCart, { ...product, quantity: product.quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <ProductCard products={sampleProducts} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </>
  );
}

export default AllProducts;
