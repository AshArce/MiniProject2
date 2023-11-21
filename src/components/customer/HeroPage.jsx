import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from 'react-slick';
import Header from './Header';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme();

const HeroPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // beforeChange: (current, next) => setCurrentSlide(next),
  };

  const carouselData = [
    {
      image: 'images/heropage/ft_item1.png',
      title: 'Product 1',
      description: 'Discover the amazing features of Product 1.',
    },
    {
      image: 'images/heropage/ft_item2.png',
      title: 'Product 2',
      description: 'Explore the benefits of Product 2 for your needs.',
    },
    {
      image: 'images/heropage/ft_item3.png',
      title: 'Product 3',
      description: 'Explore the benefits of Product 2 for your needs.',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <CssBaseline />
      <Slider {...carouselSettings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={`carousel-${index}`} style={{ width: '100%', height: '100%' }} />
            {index === currentSlide && (
              <Container
                component="section"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '70%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'left',
                  width: '60%',
                  padding: '20px',
                }}
              >
                <Typography variant="h2" component="div" gutterBottom sx={{ color: 'black', marginBottom: '10px' }}>
                  {item.title}
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'black', marginBottom: '20px' }}>
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Shop Now
                </Button>
              </Container>
            )}
          </div>
        ))}
      </Slider>
    </ThemeProvider>
  );
};

export default HeroPage;
