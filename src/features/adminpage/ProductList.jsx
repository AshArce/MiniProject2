// Import necessary dependencies
import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/system';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import AddProductModal from '../../components/admin/AddProductModal';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import { useNavigate } from 'react-router-dom';
import EditProduct from '../../components/admin/EditProduct';

// Importing sampleProducts from productdata file
import { sampleProducts } from './productdata';

// Styling Container component
const Container = styled('div')`
  display: flex;
`;

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(sampleProducts);

  const handleEditProduct = (productId) => {
    console.log('Editing product with ID:', productId);
  }

  const handleDeleteProduct = (productId) => {
    // Filter out the product with the matching ID
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <Container>
      <Sidebar/>

      <div className="content">
        <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ 
          mt: '15px',
          background: 'rgba(0, 0, 0, 0)',
          p: 2, 
          maxHeight: '90px',
          display: 'flex',
          alignItems: 'center',
           }}>
          <Typography variant="body1" sx={{ fontSize: '20px', marginBottom: 2, fontFamily:'poppins', fontWeight: 'bold', color: '#24527a' }}>
            Product List
          </Typography>
         
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper elevation={0} sx={{ 
          background: 'rgba(0, 0, 0, 0)',
          mt: '15px',
          p: 2, 
          maxHeight: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
           }}>
           <Button variant="contained"
           sx={{
            textTransform: 'capitalize',
            background: '#24527a'
           }}>
              Add New Product
            </Button>
        </Paper>
      </Grid>

          <Grid item xs={12} md={12}>
            <Paper elevation={0} 
            sx={{ 
              p: 1, 
              mb: 2, 
              maxHeight: '600px', 
              overflowY: 'auto' }}>
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
              <Table sx={{fontFamily: 'poppins'}}>
                <TableHead>
                  <TableRow sx={{fontWeight: 'bold'}}>
                    <TableCell sx={{fontWeight: 'bold'}}>Image</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Product Name</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Category</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Status</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Stocks</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Date</TableCell>
                    <TableCell sx={{fontWeight: 'bold'}}>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={`/${product.image}`} alt={product.name} width="50" />
                      </TableCell>
                      <TableCell>
                        <span
                          style={{
                            color: (product.name === 'Out of Stock' && product.status === 'Out of Stock') ? 'red' : 'inherit',
                          }}
                        >
                          {product.name}
                        </span>
                      </TableCell>
                      <TableCell>{product.category[0]}</TableCell>
                      <TableCell>
                        <span
                          style={{
                            color: product.status === 'Out of Stock' ? 'red' : 'inherit',
                          }}
                          >
                          {product.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                        style={{
                          color: product.stocks === '0' ? 'red' : 'inherit',
                        }}>
                        {product.stocks}
                        </span>
                        </TableCell>
                      <TableCell>{product.date}</TableCell>
                      <TableCell>
                        <Link to={`../.././admin/edit/${product.id}`}>
                          <IconButton aria-label="Edit">
                            <EditIcon />
                          </IconButton>
                        </Link>
                        <IconButton aria-label="Delete" onClick={() => handleDeleteProduct(product.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductList;
