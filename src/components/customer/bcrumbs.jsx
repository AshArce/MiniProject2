// BCrumbs.jsx
import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BCrumbs({ selectedCategoryFirst, selectedCategorySecond }) {
  const categoryLink = (selectedCategoryFirst ?? 'All Items').toLowerCase();
  const subCategoryLink = (selectedCategorySecond ?? 'All Items').toLowerCase();

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/products">
          Products
        </Link>
        {selectedCategoryFirst !== 'All Items' && (
          <Link underline="hover" color="inherit" href={`/products/${categoryLink}`}>
            {selectedCategoryFirst}
          </Link>
        )}
        {selectedCategorySecond !== 'All Items' && (
          <Link underline="hover" color="inherit" href={`/products/${categoryLink}/${subCategoryLink}`}>
            {selectedCategorySecond}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
}
