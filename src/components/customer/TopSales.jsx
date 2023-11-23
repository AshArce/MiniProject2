import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const TopSales = ({ products, salesData }) => {
  const sortedProducts = products ? [...products].sort((a, b) => salesData[b.id] - salesData[a.id]) : [];

  const topTwoProducts = sortedProducts.slice(0, 2);

  return (
    <div style={{ padding: '3% 10% 5%' }}>
      <Grid container spacing={3} >     
      <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            style={{
              textAlign: 'center',
              padding: '10px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0)',
            }}
          >
            <div style={{
              display:'flex', 
              flexDirection:'column', 
              textAlign: 'left',
              color: '#5dacbd',
              fontFamily: 'Poppins',
              }}>

            <Typography variant="h5" gutterBottom 
            style={{
              fontWeight: 'bold', 
              paddingBottom: '15%',
              }}>
            Popular Item
            </Typography>

            <Typography variant="h1" gutterBottom 
            style={{
              fontWeight: 'bolder',
              fontSize: '65px',
              paddingBottom: '15%',
              paddingTop: '10%'
              }}>
            Hot Trending On This Week.
            </Typography>

            <Typography variant="body1" 
            style={{
              paddingBottom: '15%',
              paddingTop: '5%'
              }}>
            Various kinds of products that are trending the trend will be reset every week. Don't miss out on the best of items every week.
            </Typography>

            <button style={{
              padding: '10px',
              marginTop: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent sea green color
              color: '#5dacbd',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: 'bold',
              paddingLeft: 0,
              paddingTop: '15%'
              }}>
              
              See All
            </button>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {topTwoProducts.map((product) => (
              <Grid key={product.id} item xs={12} md={12}>
              <Paper
                elevation={3}
                style={{
                  textAlign: 'center',
                  padding: '10px',
                  boxSizing: 'border-box',
                  borderRadius: '10px'
                }}
              >
                <div style={{ height: '350px' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '265px', objectFit: 'cover' }} />
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Sales: {salesData[product.id]}
                  </Typography>
                </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
   
      </Grid>
    </div>
  );
};

export default TopSales;
