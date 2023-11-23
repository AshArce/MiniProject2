// Inside AllProducts.jsx
import React, { useState } from 'react';
import ProductCard from '../../components/customer/ProductCard';
import ShoppingCart from '../../components/customer/ShopingCart';
import { sampleProducts } from '../adminpage/productdata';
import ProductsNav from '../../components/customer/ProductsNav';




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





  return (
    <>
      <ProductsNav />
      <ProductCard products={sampleProducts} addToCart={addToCart} />

    </>
  );
}

export default AllProducts;
