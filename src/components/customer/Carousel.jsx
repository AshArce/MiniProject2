import React, { useState } from 'react';
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
      image: '/images/item1.png',
    },
    {
      image: '/images/item2.png',
    },
    {
      image: '/images/item3.png',
    },
    // Add more entries for additional slides
  ];

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={slide.image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            <div style={{ 
              position : 'absolute', 
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center', 
              zIndex: slidesData.length - index, // Set a higher z-index for each subsequent slide
            }}>
              <button 
                style={{ 
                  background: buttonClicked ? 'white' : 'seagreen',
                  color: buttonClicked ? 'seagreen' : 'white',
                  border: '1px solid seagreen',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
                onClick={handleButtonClick}
              >
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
