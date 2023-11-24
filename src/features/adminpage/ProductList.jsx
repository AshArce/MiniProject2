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
import Sidebar from '../../components/admin/Sidebar';
import AddProductModal from '../../components/admin/AddProductModal';
import { Link } from 'react-router-dom';

// Importing sampleProducts from productdata file
import { sampleProducts } from './productdata';

// Styling Container component
const Container = styled('div')`
  display: flex;
`;
const ProductList = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(sampleProducts);

  const [newProductName, setNewProductName] = useState('');


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (name, image) => {
    // Add the new product to your list
    const newProduct = {
      id: products.length + 1,
      name,
      image,
    };
    setProducts([...products, newProduct]);
    closeModal(); // Close the modal after adding the product
  };

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
      <Sidebar />
      <Content>
        <Grid container spacing={2}>

          <Grid item xs={12} md={8}>
            <div className="stat-card">
              <Typography variant="h4">Products</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper>
              <TextField
                label="Search Products"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={product.image} alt={product.name} width="50" />
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.status}</TableCell>
                      <TableCell>{product.date}</TableCell>
                      <TableCell>
                        <Link to={`/admin/products/edit/${product.id}`}>
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
          <Grid item xs={12} md={4}>

            <Button variant="contained" color="primary" onClick={openModal}>
              Add New Product
            </Button>
            <AddProductModal open={isModalOpen} onClose={closeModal} onAddProduct={handleAddProduct} />

          </Grid>
          <Grid item xs={12} md={8}>
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

export default ProductList;
