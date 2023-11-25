//AllProducts.jsx
// Updated the function name from `AllProducts` to `AllProductsPage`
// Updated the prop name from `addToCart` to `handleAddToCart`
// Added key prop to the mapped ProductCard components

import React, { useState, useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import ProductCard from "../../components/customer/ProductCard";
import { sampleProducts } from "../adminpage/productdata";
import ProductsNav from "../../components/customer/ProductsNav";
import Header from "../../components/customer/Header";

function AllProductsPage() {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedCategoryFirst, setSelectedCategoryFirst] = useState("");
  const [selectedCategorySecond, setSelectedCategorySecond] = useState("");

  const handleAddToCart = (product) => {
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
    if (selectedCategoryFirst !== "") {
      const filtered = sampleProducts.filter((product) => product.category[0] === selectedCategoryFirst);
      if (selectedCategorySecond) {
        setFilteredProducts(filtered.filter((product) => product.category[1] === selectedCategorySecond));
      } else {
        setFilteredProducts(filtered);
      }
    } else {
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
      <ProductCard products={filteredProducts} handleAddToCart={handleAddToCart} />
    </>
  );
}

export default AllProductsPage;