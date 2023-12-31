// Inside ProductCard.jsx
import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { sampleProducts } from '../../features/adminpage/productdata';


function ProductCard({ products, addToCart }) {
  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
  };

  return (
    <Grid container spacing={2} p={1}>
      {sampleProducts.map((product) => (
        <Grid
          item
          key={product.id}
          xs={6}
          sm={4}
          md={3}
          p={2}
        >
          <Paper
            sx={{
              padding: 2,
              textAlign: 'center',
              aspectRatio: '1/1',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: product.status === 'Out of Stock' ? 'grayscale(100%)' : 'none',
              }}
            />
            <Typography variant="subtitle1" mt={1}>
              {product.name}
            </Typography>
            <Typography variant="body2">
              {product.status === 'Out of Stock' ? 'Out of Stock' : `₱${product.price}`}
            </Typography>
            {product.status !== 'Out of Stock' && (
              <Button variant="contained" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCard;
