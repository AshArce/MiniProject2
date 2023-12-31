import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { textAlign } from '@mui/system';
import { sampleProducts } from '../../features/adminpage/productdata';


const TopPicks = ({ products, salesData }) => {
  const sortedProducts = sampleProducts ? [...sampleProducts].sort((a, b) => b.sales - a.sales) : [];

  const topFourProducts = sortedProducts.slice(0, 4);

  return (
    <div style={{ padding: '10% 10%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* Grid for topFourProducts */}
          <Grid container spacing={3}>
            {topFourProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={6}>
                <Paper
                  elevation={3}
                  style={{
                    fontFamily:'poppins',
                    textAlign: 'center',
                    padding: '10px',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    fontSize: '16px'
                  }}
                >
                  <img src={product.image} alt={product.name} 
                  style={{ width: '100%', 
                  height: '200px', 
                  borderRadius: '10px',
                  objectFit: 'cover' }} />

                  <Typography variant="h5" component="div" gutterBottom
                  style={{
                    fontFamily:'poppins',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '16px',
                  }}>
                    {product.name}
                  </Typography>

                  <Typography variant="body1" component="div"
                  style={{
                    fontFamily:'poppins',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}>
                    ₱ {product.price}
                  </Typography>

                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            style={{
              textAlign: 'center',
              padding: '10px',
              boxSizing: 'border-box',
              backgroundColor: 'rgba(255, 255, 255, 0)', // Adjust the alpha channel (0.5 for 50% transparency)
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
            style={{fontFamily: 'poppins',fontWeight: 'bold', paddingBottom: '10%'}}>
            Popular Item
            </Typography>

            <Typography variant="h1" gutterBottom 
            style={{
              fontFamily: 'poppins',
              fontWeight: 'bolder',
              fontSize: '65px',
              paddingBottom: '10%'
              }}>
            Hot Trending On This Week.
            </Typography>
            <Typography variant="body1" style={{fontFamily:'poppins', paddingBottom: '10%'}}>
            Various kinds of products that are trending the trend will be reset every week. Don't miss out on the best of items every week.
            </Typography>

            <button style={{
              fontFamily:'poppins',
              fontSize: '14px',
              padding: '10px',
              marginTop: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent sea green color
              color: '#5dacbd',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              fontWeight: 'bold',
              paddingLeft: 0,
              paddingTop: '5%'
              }}>
              
              See All
            </button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopPicks;
