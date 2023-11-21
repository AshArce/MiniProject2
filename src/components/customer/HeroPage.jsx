import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme();

const HeroPage = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const carouselImages = [
    'images/heropage/heroimg.png',
    'images/heropage/featured_item1.png',
    'images/heropage/featured_item2.png',
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-${index}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </Slider>
      <Container
        component="section"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" component="div" gutterBottom>
          Your E-Commerce Store
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Discover amazing products and deals
        </Typography>
        <Button variant="contained" color="primary">
          Shop Now
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default HeroPage;
