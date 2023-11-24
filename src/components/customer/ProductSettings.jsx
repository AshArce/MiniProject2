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

  useEffect(() => {
    // Extract unique categories from sampleProducts
    const uniqueCategories = ['All Items', ...new Set(sampleProducts.map(product => product.category[0]))];
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryFirstChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategoryFirst(selectedCategory);
    setSelectedCategorySecond('');
  };

  const handleCategorySecondChange = (event) => {
    setSelectedCategorySecond(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="category-select-first">Category:</label>
        <Select
          id="category-select-first"
          value={selectedCategoryFirst}
          onChange={handleCategoryFirstChange}
        >
          {categories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </div>
      {selectedCategoryFirst !== 'All Items' && (
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
      )}
      {/* Additional settings content can be added here */}
    </div>
  );
}

export default ProductSettings;
