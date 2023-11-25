// Import necessary React components and Material-UI components
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'; // Import Button component
import ProductCard from '../../components/customer/ProductCard';

import { sampleProducts } from '../adminpage/productdata';
import ProductsNav from '../../components/customer/ProductsNav';
import Header from '../../components/customer/Header';


function AllProducts() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategoryFirst, setSelectedCategoryFirst] = useState('');
  const [selectedCategorySecond, setSelectedCategorySecond] = useState('');



  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: product.quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    if (selectedCategoryFirst !== '') {
      const filtered = sampleProducts.filter(product => product.category[0] === selectedCategoryFirst);
      if (selectedCategorySecond) {
        setFilteredProducts(filtered.filter(product => product.category[1] === selectedCategorySecond));
      } else {
        setFilteredProducts(filtered);
      }
    } else {
      // If "All Items" is selected, display all products
      setFilteredProducts(sampleProducts);
    }
  }, [selectedCategoryFirst, selectedCategorySecond]);

  return (
    <>
      <Header />
      <ProductsNav
        selectedCategoryFirst={selectedCategoryFirst}
        selectedCategorySecond={selectedCategorySecond}
        setSelectedCategoryFirst={setSelectedCategoryFirst}
        setSelectedCategorySecond={setSelectedCategorySecond}
      />
      <ProductCard products={filteredProducts} addToCart={addToCart} />



    </>
  );
}

export default AllProducts;
