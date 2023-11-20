import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroPage = () => {
  const carouselImages = [
    '/image/heropageimg/featurediteem1.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})`, height: '500px', backgroundSize: 'cover' }}>
            {/* You can customize the content inside each slide if needed */}
            <div style={{ textAlign: 'center', paddingTop: '200px', color: 'white' }}>
              <Typography variant="h2">Welcome to Our E-Commerce Store</Typography>
              <Typography variant="subtitle1">Discover amazing products and deals</Typography>
              <Button variant="contained" color="primary" size="large">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default HeroPage;
