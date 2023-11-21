import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';


function AddProductModal({ open, onClose, onAddProduct }) {
  const [newProductName, setNewProductName] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  const handleAddProduct = () => {
    if (newProductName && newProductImage) {
      onAddProduct(newProductName, newProductImage);
      setNewProductName('');
      setNewProductImage('');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Product</DialogTitle>
      <DialogContent>
        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          value={newProductName}
          onChange={(e) => setNewProductName(e.target.value)}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={newProductImage}
          onChange={(e) => setNewProductImage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddProduct} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddProductModal;
