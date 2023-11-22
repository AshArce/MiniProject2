import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const TopPicks = ({ products, salesData }) => {
  const sortedProducts = products ? [...products].sort((a, b) => salesData[b.id] - salesData[a.id]) : [];

  const topFourProducts = sortedProducts.slice(0, 4);

  return (
    <div style={{ padding: '5% 10%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* Grid for topFourProducts */}
          <Grid container spacing={3}>
            {topFourProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={6}>
                <Paper
                  elevation={3}
                  style={{
                    textAlign: 'center',
                    padding: '10px',
                    boxSizing: 'border-box',
                  }}
                >
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Sales: {salesData[product.id]}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            style={{
              textAlign: 'center',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Top Picks Description
            </Typography>
            <Typography variant="body1">
              Add your description here. This can include details about the top picks, special features, etc.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopPicks;
