// ProductReview.js
import React from 'react';
import { Typography, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const ProductReview = ({ selectedProduct }) => {
  // Assuming selectedProduct contains reviews information
  const { reviews } = selectedProduct;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Product Reviews
      </Typography>
      <Divider />
      
      {reviews && reviews.length > 0 ? (
        <List>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={review.title}
                secondary={`By ${review.author} on ${review.date}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No reviews available for this product.</Typography>
      )}

      {/* Add a button to close the reviews */}
      <Button variant="contained" color="primary">
        Close Reviews
      </Button>
    </div>
  );
};

export default ProductReview;
