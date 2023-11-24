// AllProducts.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/customer/ProductCard';
import ShoppingCart from '../../components/customer/ShopingCart';
import { sampleProducts } from '../adminpage/productdata';
import ProductsNav from '../../components/customer/ProductsNav';

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
    </>
  );
}

export default AllProducts;
