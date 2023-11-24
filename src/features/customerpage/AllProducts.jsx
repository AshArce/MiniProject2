// Inside AllProducts.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/customer/ProductCard';
import ShoppingCart from '../../components/customer/ShopingCart';
import { sampleProducts } from '../adminpage/productdata';
import ProductsNav from '../../components/customer/ProductsNav';
import Header from '../../components/customer/Header';
import ProductSettings from '../../components/customer/ProductSettings';



function AllProducts() {
  const [selectedParentCategory, setSelectedParentCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Implement your logic to filter products based on the selected categories
    // Update the filteredProducts state with the result
    const filteredProducts = sampleProducts.filter(product =>
      (!selectedParentCategory || product.category[0] === selectedParentCategory) &&
      (!selectedSubCategory || product.category[1] === selectedSubCategory)
    );
    setFilteredProducts(filteredProducts);
  }, [selectedParentCategory, selectedSubCategory]);

  const handleParentCategoryChange = (event) => {
    setSelectedParentCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };



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
      <Header />
      <ProductsNav />
      <ProductCard products={filteredProducts.length > 0 ? filteredProducts : sampleProducts} />
      <ProductSettings
        selectedParentCategory={selectedParentCategory}
        selectedSubCategory={selectedSubCategory}
        onParentCategoryChange={setSelectedParentCategory}
        onSubCategoryChange={setSelectedSubCategory}
      />
    </>
  );
}

export default AllProducts;
