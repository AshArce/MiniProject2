import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Box, styled } from '@mui/system'; // Updated import statement
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';




const Container = styled('div')`
  display: flex;
  height: 100%;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px; 
  margin-right: 60px;
  height: 100%;
  z-index: 1;
`;

const Dashboard = () => {

  const [userStats, setUserStats] = useState({
    totalUsers: 1000,
    sellers: 750,
    newSubs: 50,
  });

  const [topProducts, setTopProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    // Fetch top products data (replace this with your actual data fetching logic)
    const fetchTopProducts = async () => {
      try {
        // Example: Fetch top products from an API
        const response = await fetch('/api/top-products');
        const data = await response.json();
        setTopProducts(data);
      } catch (error) {
        console.error('Error fetching top products:', error);
      }
    };

    fetchTopProducts();
  }, []);

  useEffect(() => {
  // Fetch best sellers data (replace this with your actual data fetching logic)
  const fetchBestSellers = async () => {
    try {
      // Example: Fetch best sellers from an API
      const response = await fetch('/api/best-sellers');
      const data = await response.json();
      setBestSellers(data);
    } catch (error) {
      console.error('Error fetching best sellers:', error);
    }
  };

  fetchBestSellers();
}, []);

  const titleFontSize = '1.5rem'; // Adjust as needed


  return (
    <Container>
      <Sidebar />
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div className="userStats">
                <Typography variant="h4">Dashboard</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={0}
                          sx={{
                            p: 2,
                            height: 250,
                            background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                          }}>
              <Typography variant="body1" sx={{ fontSize: titleFontSize }}>Top Products</Typography>
              <ul>
            {/* Render the list of top products */}
            {topProducts.map((product) => (
                <li key={product.id}>{product.name}</li>
            ))}
            </ul>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={0}
                          sx={{
                            p: 2,
                            height: 250,
                            background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                          }}>
              <Typography variant="body1" sx={{ fontSize: titleFontSize }}>Best Sellers</Typography>
              <ol>
                {/* Render the list of best sellers */}
                {bestSellers.map((seller) => (
                  <li key={seller.id}>{seller.name}</li>
                ))}
             </ol>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                height: 250,
                background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: titleFontSize }}>
            Total Users
              </Typography>
              <Typography variant="h4">{userStats.totalUsers}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                height: 250,
                background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: titleFontSize }}>
            Sellers
              </Typography>
              <Typography variant="h4">{userStats.sellers}</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                height: 250,
                background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
              }}
            >
              <Typography variant="body1" sx={{ fontSize: titleFontSize }}>
            New Subscribers (Today)
              </Typography>
              <Typography variant="h4">{userStats.newSubs}</Typography>
            </Paper>
          </Grid>

          
        </Grid>
      </Content>
    </Container>
  );
};

export default Dashboard;
