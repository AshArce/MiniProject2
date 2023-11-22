import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { sampleProducts } from '../../features/adminpage/productdata';


function ProductCard() {
  return (
    <Grid container spacing={2} p={1}>
      {sampleProducts.map((product) => (
        <Grid item key={product.id}
          xs={6} //mobile 
          sm={4} //tablet
          md={3} // laptop
          p={2}
        >
          <Paper sx={{
            padding: 2,
            textAlign: 'center',
            aspectRatio: '1/1'
          }}>

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

            <Typography variant="subtitle1"
              mt={1}>
              {product.name}
            </Typography>

            {product.status === 'In-stock' ? (
              <Typography variant="body2" style={{ display: 'none' }}>
                {product.status}
              </Typography>
            ) : (
              <Typography variant="body2">{product.status}</Typography>
            )}

            <Typography variant="body2">
              ₱{product.price}
            </Typography>

            {product.status !== 'Out of Stock' && (
              <Button variant="contained">Add to Cart</Button>
            )}

          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductCard;
