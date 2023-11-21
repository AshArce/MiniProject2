
// Dashboard.js
import React, { useState, useEffect } from 'react';


import { Box, styled } from '@mui/system'; // Updated import statement
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from '../../components/admin/Sidebar';




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

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUserStats({
        totalUsers: 1000,
        sellers: 750,
        newSubs: 50,
      });
    };

    fetchData();
  }, []);

  const isSmallscreen = useMediaQuery('(max-width: 320px)');


  const titleFontSize = isSmallscreen ? '2rem' : '1.5rem';


  return (
    <Container>
      <Sidebar />
      <Content>
        <Box className="dashboard"
          sx={{
            margin: 0,
          }}>
          <h1>Dashboard</h1>
          <div className="user-stats">

            <Grid container
              spacing={2}
              style={{ padding: '0', margin: '0' }}
            >

              <Grid item xs={12} md={12}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: isSmallscreen ? 'column' : 'row',
                  alignItems: 'center',
                  gap: 2,
                  flexWrap: 'wrap',
                }}>

                  {/* box1 */}
                  <div className="stat-card">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 230,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="body1" sx={{ fontSize: titleFontSize }}>Total Users</Typography>
                      <Typography variant="h4">{userStats.totalUsers}</Typography>
                    </Paper>
                  </div>

                  {/* box2 */}
                  <div className="stat-card">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 230,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="h4" sx={{ fontSize: titleFontSize }}>Seller</Typography>
                      <Typography variant="body1">{userStats.totalUsers}</Typography>
                    </Paper>
                  </div>

                  {/* box3 */}
                  <div className="stat-card">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 230,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="h4" sx={{ fontSize: titleFontSize }}>New Subscribers (Today)</Typography>
                      <Typography variant="body1">{userStats.totalUsers}</Typography>
                    </Paper>
                  </div>
                </Box>
              </Grid>

              <Grid item xs={12} md={12}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexDirection: isSmallscreen ? 'column' : 'row',
                  flexWrap: 'wrap',
                }}>
                  <div className="top-products">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 510,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="h6">Top Products</Typography>
                      {/* Add your list of recent orders here */}
                    </Paper>
                  </div>

                  <div className="best-seller">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 230,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="h6">Best Sellers</Typography>
                      {/* Add your list of recent orders here */}
                    </Paper>
                  </div>
                </Box>
              </Grid>

              <Grid Grid item xs={12} md={12}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}>

                  <div className="revenue">
                    <Paper elevation={0}
                      sx={{
                        p: 2,
                        width: 230,
                        height: 100,
                        background: 'linear-gradient(to right, #FF69B4, #ADD8E6)',
                      }}>
                      <Typography variant="h6">Revenue</Typography>
                      {/* Add your list of recent orders here */}
                    </Paper>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Content>
    </Container>
  );
};

export default Dashboard;
