import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/system';
import Sidebar from './Sidebar';


const Container = styled('div')`
  display: flex;
`;

const Content = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 60px;
`;

const Categories = () => {
  const [newProperty, setNewProperty] = useState({
    categoryName: '',
    parentCategory: '',
  });

  const exampleProperties = [
    { categoryName: 'Sneakers', parentCategory: 'Shoes' },
    { categoryName: 'Sandals', parentCategory: 'Shoes' },
    { categoryName: 'Crop top', parentCategory: 'Tops' },
    { categoryName: 'Jeans', parentCategory: 'Bottoms' },
    { categoryName: 'T-Shirts', parentCategory: 'Tops' },
    { categoryName: 'Cargo Pants', parentCategory: 'Bottoms' },
  ];

  const [properties, setProperties] = useState(exampleProperties);

  const handlePropertyChange = (property, value) => {
    setNewProperty((prevProperty) => ({ ...prevProperty, [property]: value }));
  };

  const handleAddProperty = () => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
    setNewProperty({ categoryName: '', parentCategory: '' });
  };

  const handleDeleteProperty = (index) => {
    const updatedProperties = [...properties];
    updatedProperties.splice(index, 1);
    setProperties(updatedProperties);
  };


  return (
    <Container>
      <Sidebar />
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Category Name"
              variant="outlined"
              placeholder="Enter category name"
              fullWidth
              value={newProperty.categoryName}
              onChange={(e) => handlePropertyChange('categoryName', e.target.value)}
              style={{ marginBottom: '16px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Select
              label="Parent Category"
              variant="outlined"
              value={newProperty.parentCategory}
              onChange={(e) => handlePropertyChange('parentCategory', e.target.value)}
              fullWidth
              style={{ marginBottom: '16px' }}
            >
              <MenuItem value="None">No Parent Category</MenuItem>
              <MenuItem value="Shoes">Shoes</MenuItem>
              <MenuItem value="Tops">Tops</MenuItem>
              <MenuItem value="Bottoms">Bottoms</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddProperty}
            >
              Save
            </Button>
          </Grid>
        </Grid>

        {/* Display Properties Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Parent Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {properties.map((property, index) => (
              <TableRow key={index}>
                <TableCell>{property.categoryName}</TableCell>
                <TableCell>{property.parentCategory}</TableCell>
                <TableCell>
                  <IconButton aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => handleDeleteProperty(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Content>
    </Container>
  );
};

export default Categories;
