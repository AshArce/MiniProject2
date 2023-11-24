// Import necessary React components and Material-UI components
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button'; // Import Button component
import ProductCard from '../../components/customer/ProductCard';

import { sampleProducts } from '../adminpage/productdata';
import ProductsNav from '../../components/customer/ProductsNav';
import CartModal from '../../components/customer/CartModal';


function AllProducts() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategoryFirst, setSelectedCategoryFirst] = useState('');
  const [selectedCategorySecond, setSelectedCategorySecond] = useState('');

  // State to manage the visibility of the shopping cart modal
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  // Function to open the shopping cart modal
  const openCartModal = () => {
    setCartModalOpen(true);
  };

  // Function to close the shopping cart modal
  const closeCartModal = () => {
    setCartModalOpen(false);
  };

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
      <ProductsNav
        selectedCategoryFirst={selectedCategoryFirst}
        selectedCategorySecond={selectedCategorySecond}
        setSelectedCategoryFirst={setSelectedCategoryFirst}
        setSelectedCategorySecond={setSelectedCategorySecond}
      />
      <ProductCard products={filteredProducts} addToCart={addToCart} />
      {/* Button to open the shopping cart modal */}
      <Button variant="contained" color="primary" onClick={openCartModal}>
        Open Shopping Cart
      </Button>

      {/* Shopping Cart Modal */}
      <CartModal
        isOpen={isCartModalOpen}
        onClose={closeCartModal}
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </>
  );
}

export default AllProducts;
