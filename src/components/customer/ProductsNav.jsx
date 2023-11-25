
// ProductsNav.jsx
import React from 'react';
import { Grid, Typography } from '@mui/material';
import BCrumbs from './bcrumbs';
import ProductSettings from './ProductSettings';


function ProductsNav({
  selectedCategoryFirst,
  selectedCategorySecond,
  setSelectedCategoryFirst,
  setSelectedCategorySecond,
}) {
  return (
    <div>
      <Grid container>
        <Grid item sm={6}>

          <BCrumbs
            selectedCategoryFirst={selectedCategoryFirst} selectedCategorySecond={selectedCategorySecond} />
        </Grid>
        <Grid item sm={6}>
          <ProductSettings
            selectedCategoryFirst={selectedCategoryFirst}
            selectedCategorySecond={selectedCategorySecond}
            setSelectedCategoryFirst={setSelectedCategoryFirst}
            setSelectedCategorySecond={setSelectedCategorySecond}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductsNav;
