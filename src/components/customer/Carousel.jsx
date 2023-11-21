import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slidesData = [
    {
      image: '/images/ft_item1.png',
      text: 'Discover Amazing Products',
    },
    {
      image: '/images/ft_item2.png',
      text: 'Shop with Confidence',
    },
    {
      image: '/images/ft_item3.png',
      text: 'Exclusive Offers Just for You',
    },
    // Add more entries for additional slides
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={slide.image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <div style={{ 
              position: 'absolute', 
              top: 0,
              right: 0,
              width: '50%', 
              textAlign: 'right', 
              color: 'white', 
              background: 'rgba(0, 0, 0, 0.7)',
              padding: '20px',
              zIndex: slidesData.length - index, // Set a higher z-index for each subsequent slide
            }}>
              <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>{slide.text}</p>
              <button style={{ 
                background: 'transparent',
                color: 'white',
                border: '1px solid white',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
              }}>Shop Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
