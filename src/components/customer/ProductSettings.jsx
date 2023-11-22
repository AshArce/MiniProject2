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

  const handleCategoryFirstChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategoryFirst(selectedCategory);

    // Filter sampleProducts based on the selected category
    const filteredProducts = sampleProducts.filter(product => product.category[0] === selectedCategory);

    // Get the second index values from the filtered products
    const secondCategories = filteredProducts.map(product => product.category[1]);

    // Set the second dropdown to the unique second index values
    setSelectedCategorySecond([...new Set(secondCategories)][0] || '');
  };

  const handleCategorySecondChange = (event) => {
    setSelectedCategorySecond(event.target.value);
    // Additional actions based on the selected category can be performed here if needed
  };

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
          {sampleProducts
            .filter(product => product.category[0] === selectedCategoryFirst)
            .map(product => (
              <MenuItem key={product.id} value={product.category[1]}>
                {product.category[1]}
              </MenuItem>
            ))}
        </Select>
      </div>
      {/* Additional settings content can be added here */}
    </div>
  );
}

export default ProductSettings;