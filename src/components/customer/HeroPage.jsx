// HeroPage.jsx
import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity as needed
});

const HeroContent = styled('div')(({ theme }) => ({
  zIndex: 1,
  textAlign: 'center',
}));

const HeroPage = () => {
  return (
    <HeroContainer style={{ backgroundImage: 'url("/heropageimg/featured_item.png")' }}>
      <Overlay />
      <HeroContent>
        <Typography variant="h2">Welcome to Our Website</Typography>
        <Typography variant="subtitle1">Discover amazing products and deals</Typography>
        <Button variant="contained" color="primary" size="large">
          Shop Now
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroPage;
