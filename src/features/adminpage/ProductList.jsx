import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Container = styled('div')`
  display: flex;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 60px;
`;

const ProductList = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [newProductName, setNewProductName] = useState('');
  const [products, setProducts] = useState([

      // Sample product data
      { id: 1, name: 'Product A', category: 'Sneakers', status: 'In-stock', date: '2023-11-08', image: 'product-image-1.jpg' },
      { id: 2, name: 'Product B', category: 'T-Shirt', status: 'In-stock', date: '2023-11-09', image: 'product-image-2.jpg' },
      { id: 3, name: 'Product C', category: 'Shorts', status: 'Out of Stock', date: '2023-11-09', image: 'product-image-2.jpg' },
      { id: 4, name: 'Product D', category: 'Sandals', status: 'Out of stock', date: '2023-11-09', image: 'product-image-2.jpg' },
      { id: 5, name: 'Product E', category: 'Crop top', status: 'In-stock', date: '2023-11-09', image: 'product-image-2.jpg' },
    ]);

  
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
