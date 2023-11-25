// ProductSettings.jsx
import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { sampleProducts } from '../../features/adminpage/productdata';

function ProductSettings({
  selectedCategoryFirst,
  selectedCategorySecond,
  setSelectedCategoryFirst,
  setSelectedCategorySecond,
}) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    // Get unique first categories
    const uniqueCategories = [...new Set(sampleProducts.map(product => product.category[0]))];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    // Update subcategories when the first category changes
    if (selectedCategoryFirst !== '') {
      const filteredProducts = sampleProducts.filter(product => product.category[0] === selectedCategoryFirst);
      const uniqueSubCategories = [...new Set(filteredProducts.map(product => product.category[1]))];
      setSubCategories(uniqueSubCategories);
      // Clear the second category selection to prevent duplication
      setSelectedCategorySecond('');
    }
  }, [selectedCategoryFirst, setSelectedCategorySecond]);

  const handleCategoryFirstChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategoryFirst(selectedCategory);
  };

  const handleCategorySecondChange = (event) => {
    setSelectedCategorySecond(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
  <div>
    <label htmlFor="category-select-first">Category:</label>
    <Select
      id="category-select-first"
      value={selectedCategoryFirst}
      onChange={handleCategoryFirstChange}
      style={{ width: '130px', borderRadius: '20px' }}
    >
      <MenuItem value="">All Items</MenuItem>
      {categories.map(category => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
      ))}
    </Select>
  </div>
  
  {selectedCategoryFirst !== '' && (
    <div>
      <label htmlFor="category-select-second">SubCategory:</label>
      <Select
        id="category-select-second"
        value={selectedCategorySecond}
        onChange={handleCategorySecondChange}
        style={{ width: '130px', borderRadius: '20px' }}
      >
        <MenuItem value="">All Items</MenuItem>
        {subCategories.map(subCategory => (
          <MenuItem key={subCategory} value={subCategory}>
            {subCategory}
          </MenuItem>
        ))}
      </Select>
    </div>
  )}
</div>

  );
}

export default ProductSettings;
