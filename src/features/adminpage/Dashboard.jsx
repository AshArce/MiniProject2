import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { Box, styled } from '@mui/system'; // Updated import statement
import { Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import {sampleProducts, calculateOverallTotalSales, calculateOverallOrders, soldProducts} from '../adminpage/productdata';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import SalesGraph from '../../components/admin/SalesGraph';
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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

  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Sort products based on salesData in descending order
    const sortedProducts = sampleProducts.slice().sort((a, b) => parseFloat(b.salesData) - parseFloat(a.salesData));

    // Take the top 5 products
    const top5Products = sortedProducts.slice(0, 5);

    setTopProducts(top5Products);
  }, []);

  const titleFontSize = 16;

  

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(amount);
  };

  const overallTotalSales = calculateOverallTotalSales(sampleProducts);
  const overallOrders = calculateOverallOrders(sampleProducts);
  const overallSoldProducts = soldProducts(sampleProducts);

  // Calculate the number of returns
  const returns = overallOrders - overallSoldProducts;


  return (
    <Container>
      <Sidebar />
      <Content sx={{paddingRight:'20px'}}>
        <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ 
          background: 'rgba(0, 0, 0, 0)',
          p: 2, 
          maxHeight: '90px'
           }}>
          <Typography variant="body1" sx={{ fontSize: titleFontSize, marginBottom: 2, fontFamily:'poppins', fontWeight: 'bold', color: '#24527a' }}>
            Welcome to your dashboard!
          </Typography>
         
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ 
          background: 'rgba(0, 0, 0, 0)',
          p: 2, 
          maxHeight: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
           }}>
           <Avatar sx={{ bgcolor: 'white', mr: 2 }}>
              <AccountCircleIcon sx={{ color: '#24527a' }} />
            </Avatar>
            <Typography sx={{fontSize:'16px', fontWeight:'bold', color: '#24527a'}}>
              Admin Name
            </Typography>
        </Paper>
      </Grid>

        <Grid item xs={12} md={3}>
        <Paper elevation={0} sx={{ 
          p: 2, 
          border: '1px solid',
          borderColor: '#e0ebeb',
          background: 'rgba(0, 0, 0, 0)',
           }}>
          <Typography variant="body1" sx={{ fontFamily:'poppins', fontWeight:'bold', color:'#24527a', }}>
            Revenue
          </Typography>
          <Typography variant="h4" sx={{ fontWeight:'bold', color:'#5dacdb' }}>
            {formatCurrency(isNaN(overallTotalSales) ? 0 : overallTotalSales)}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={0} sx={{ 
          p: 2, 
          border: '1px solid',
          borderColor: '#e0ebeb',
          background: 'rgba(0, 0, 0, 0)',
           }}>
          <Typography variant="body1" sx={{ fontFamily:'poppins', fontWeight:'bold', color:'#24527a', }}>
            Orders
          </Typography>
          <Typography variant="h4" sx={{ fontWeight:'bold', color:'#5dacdb' }}>
            {overallOrders}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={0} sx={{ 
          p: 2, 
          border: '1px solid',
          borderColor: '#e0ebeb',
          background: 'rgba(0, 0, 0, 0)',
           }}>
          <Typography variant="body1" sx={{ fontFamily:'poppins', fontWeight:'bold', color:'#24527a',  }}>
            Sold
          </Typography>
          <Typography variant="h4" sx={{fontWeight:'bold', color:'#5dacdb' }}>
           {overallSoldProducts}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={3}>
        <Paper elevation={0} sx={{ 
          p: 2, 
          border: '1px solid',
          borderColor: '#e0ebeb',
          background: 'rgba(0, 0, 0, 0)',
           }}>
          <Typography variant="body1" sx={{ fontFamily:'poppins', fontWeight:'bold', color:'#24527a',  }}>
            Return
          </Typography>
          <Typography variant="h4" sx={{fontWeight:'bold', color:'#5dacdb',  }}>
            {returns}          
            </Typography>
        </Paper>
      </Grid>


        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ 
            p: 2, 
            border: '1px solid',
            borderColor: '#e0ebeb',
            background: 'rgba(0, 0, 0, 0)',
            maxHeight: '368px', 
            overflowY: 'auto' 
            }}>
               <style>
                  {`
                    /* Make the scrollbar transparent */
                    ::-webkit-scrollbar {
                      width: 10px;
                    }

                    ::-webkit-scrollbar-thumb {
                      background-color: rgba(255, 255, 255, 0.5); /* Adjust the alpha value to control transparency */
                    }

                    ::-webkit-scrollbar-track {
                      background-color: transparent;
                    }
                  `}
                </style>
            <Typography variant="body1" sx={{ fontSize: titleFontSize, marginBottom: 2 }}>Top Products</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Sales</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Stocks</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topProducts.map((product) => (
                  <TableRow key={product.id}>
                    {/* Product Column */}
                    <TableCell>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={`/${product.image}`}
                          alt={product.name}
                          style={{ width: '50px', height: '50px', marginRight: '10px' }}
                        />
                        <div>{product.name}</div>
                      </div>
                    </TableCell>
                    {/* Sales Column */}
                    <TableCell>{product.salesData}</TableCell>
                    {/* Amount Column */}
                    <TableCell>{formatCurrency(product.price * product.salesData)}</TableCell>
                    {/* Stocks Column */}
                    <TableCell>{product.stocks}</TableCell>
                    {/* Status Column */} 
                    <TableCell sx={{ color: product.status === 'Out of stock' ? 'red' : 'inherit' }}>
                            {product.status}
                          </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ 
              p: 2, 
              border: '1px solid',
              borderColor: '#e0ebeb',
              background: 'rgba(0, 0, 0, 0)',
              maxHeight: '800px',
              overflowX: 'auto' 
              }}>
        <Typography variant="body1" sx={{ fontSize: titleFontSize, marginBottom: 2 }}>Sales Graph</Typography>
        <SalesGraph product={sampleProducts} />
      </Paper>
          </Grid>
      </Grid>
      </Content>
    </Container>
  );
};

export default Dashboard;
