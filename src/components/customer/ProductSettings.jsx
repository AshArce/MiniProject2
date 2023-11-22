// ProductSettings.jsx
import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { sampleProducts } from '../../features/adminpage/productdata';

function ProductSettings() {
  const firstProductCategory = sampleProducts.length > 0 ? sampleProducts[0].category[0] : '';
  const secondProductCategory = sampleProducts.length > 0 ? sampleProducts[0].category[1] : '';

  const [selectedCategoryFirst, setSelectedCategoryFirst] = useState(firstProductCategory);
  const [selectedCategorySecond, setSelectedCategorySecond] = useState(secondProductCategory);
  const [selectedProductId, setSelectedProductId] = useState(sampleProducts.length > 0 ? sampleProducts[0].id : null);

  const handleCategoryFirstChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategoryFirst(selectedCategory);

    // Find the first product that matches the selected category
    const selectedProduct = sampleProducts.find(product => product.category[0] === selectedCategory);

    if (selectedProduct) {
      // Set the selected product ID
      setSelectedProductId(selectedProduct.id);

      // Set the default value for the second category based on the selected product
      setSelectedCategorySecond(selectedProduct.category[1]);
    } else {
      setSelectedProductId(null);
      setSelectedCategorySecond('');
    }

    // Additional actions based on the selected category can be performed here if needed
  };

  const handleCategorySecondChange = (event) => {
    setSelectedCategorySecond(event.target.value);
    // Additional actions based on the selected category can be performed here if needed
  };

  // Filter subcategories based on the selected product ID
  const subCategories = selectedProductId
    ? sampleProducts.find(product => product.id === selectedProductId)?.category.slice(2) || []
    : [];

  return (
    <div>
      <h2>Product Settings</h2>
      <div>
        <label htmlFor="category-select-first">Category:</label>
        <Select
          id="category-select-first"
          value={selectedCategoryFirst}
          onChange={handleCategoryFirstChange}
        >
          {sampleProducts.map(product => (
            <MenuItem key={product.id} value={product.category[0]}>
              {product.category[0]}
            </MenuItem>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="category-select-second">SubCategory:</label>
        <Select
          id="category-select-second"
          value={selectedCategorySecond}
          onChange={handleCategorySecondChange}
        >
          {subCategories.map(subCategory => (
            <MenuItem key={subCategory} value={subCategory}>
              {subCategory}
            </MenuItem>
          ))}
        </Select>
      </div>
      {/* Additional settings content can be added here */}
    </div>
  );
}

export default ProductSettings;
