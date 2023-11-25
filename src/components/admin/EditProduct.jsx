import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { styled } from '@mui/system';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SelectField from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Sidebar from '../admin/Sidebar';
import { Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';


// Content grid
const StyledContainer = styled('div')`
  display: flex;
  flex-direction: row;
  margin-right: 60px;
  margin-bottom: 20px;
  margin-top: 0;
`;

const ContainerWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const LeftContainer = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-right: 20px;
  margin-left: 2%;
  padding: 25px;
  border: 1px solid;
  border-radius: 20px;
  color: #24527a;
`;

const RightContainer = styled('div')`
  flex: 1;
  margin-top: 60px;
  margin-left: 20px;
  border-radius: 20px;
  border: 1px solid;
  color: #24527a;
  padding: 25px;
`;

const ImagePreviewContainer = styled('div')`
  margin-top: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
`;

const ImagePreviewWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 8px; /* Add margin to the top of the row */
`;

const ImagePreview = styled('img')`
  max-width: 100%;
  max-height: 100px;
`;

const DeleteButton = styled(Button)`
  margin-left: auto; /* Push the button to the end */
  padding: 8px 16px;
`;

const InputField = styled(TextField)`
  && {
    margin-bottom: 16px;
  }
`;

const ActionButtons = styled('div')`
  margin-top: auto; /* Push to the bottom */
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

const SectionTitle = styled('h2')`
  margin-bottom: 16px;
`;

const FileNameTypography = styled(Typography)`
  margin-left: 8px;
  `;

  const ChooseFileButton = styled('label')`
  margin-top: 16px;
  padding: 10px;
  background-color: #2196F3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function EditProduct() {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected image, e.g., set it in the state
    setSelectedImage(file);
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Save clicked');
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancel clicked');
  };

  return (
    <StyledContainer>
      <Sidebar />
      <ContainerWrapper>
        <LeftContainer>
          <SectionTitle>Edit Product</SectionTitle>
          <label htmlFor="image-upload">Select Image:</label>
          <ChooseFileButton
            component="label"  // Make the button act as a label
          >
            <CloudUploadIcon sx={{ marginRight: 8 }} /> {/* Upload icon */}
            Choose File
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}  
            />
          </ChooseFileButton>

          {selectedImage && (
          <ImagePreviewContainer>
            <Paper elevation={3} variant="outlined" sx={{ p: 2, mb: 2 }}>
              <ImagePreviewWrapper>
                <ImagePreview
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Preview"
                />
                <FileNameTypography variant="body2" color="textSecondary">
                  File Name: {selectedImage.name}
                </FileNameTypography>
              </ImagePreviewWrapper>
              <DeleteButton
                variant="outlined"
                color="secondary"
                onClick={handleDeleteImage}
              >
                Delete
              </DeleteButton>
            </Paper>
          </ImagePreviewContainer>
        )}
        </LeftContainer>
        <RightContainer>
          {/* Product details section */}
          <SectionTitle>Product Details</SectionTitle>
          {/* Rest of your code */}
          <InputField
  label="Product Name"
  fullWidth
  value={productName}
  onChange={(e) => setProductName(e.target.value)}
/>

<FormControl fullWidth sx={{ marginBottom: 2 }}>
  <InputLabel htmlFor="color">Color</InputLabel>
<SelectField
  label="Color"
  fullWidth
  value={color}
  onChange={(e) => setColor(e.target.value)}
  sx={{ marginBottom: 2 }}
>
  <MenuItem value="White">White</MenuItem>
  <MenuItem value="Black">Black</MenuItem>
  <MenuItem value="Green">Green</MenuItem>
  <MenuItem value="Orange">Orange</MenuItem>
  <MenuItem value="Pink">Pink</MenuItem>
  <MenuItem value="Blue">Blue</MenuItem>
  <MenuItem value="Yellow">Yellow</MenuItem>
</SelectField>
</FormControl>

<FormControl fullWidth sx={{ marginBottom: 2 }}>
  <InputLabel htmlFor="parentCategory">Parent Category</InputLabel>
<SelectField
  label="Category"
  fullWidth
  value={color}
  onChange={(e) => setCategory(e.target.value)}
  sx={{ marginBottom: 2 }}
>
  <MenuItem value="Shoes">Shoes</MenuItem>
  <MenuItem value="Tops">Tops</MenuItem>
  <MenuItem value="Bottoms">Bottoms</MenuItem>

</SelectField>
</FormControl>

<FormControl fullWidth sx={{ marginBottom: 2 }}>
  <InputLabel htmlFor="subCategory">Sub Category</InputLabel>
<SelectField
  label="Status"
  fullWidth
  value={color}
  onChange={(e) => setStatus(e.target.value)}
  sx={{ marginBottom: 2 }}
>
  <MenuItem value="In-Stock">In-Stock</MenuItem>
  <MenuItem value="Out of Stock">Out of Stock</MenuItem>
</SelectField>
</FormControl>

<InputField
  label="Stocks"
  fullWidth
  value={price}
  onChange={(e) => setStock(e.target.value)}
/>
<InputField
  label="Price"
  fullWidth
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>
<InputField
  label="Description"
  multiline
  rows={4}
  fullWidth
  value={price}
  onChange={(e) => setDescription(e.target.value)}
/>
{/* Add SelectField for other fields */}
          {/* ... */}
          <ActionButtons>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCancel}
              sx={{ marginLeft: 2 }}
            >
              Cancel
            </Button>
          </ActionButtons>
        </RightContainer>
      </ContainerWrapper>
    </StyledContainer>
  );
}

export default EditProduct;
