import React, {useEffect, useState} from 'react';
import Header from '../../components/customer/Header';
import Carousel from '../../components/customer/Carousel';
import TopPicks from '../../components/customer/TopPicks';
import TopSales from '../../components/customer/TopSales';
import SubscribeFlag from '../../components/customer/SubscribeFlag';

import svgBackground from '/src/greenbg.svg';

const HeroPage = () => {


  const [products, setProducts] = useState([
    { id: 1, name: 'Product A', category: 'Sneakers', status: 'In-stock', date: '2023-11-08', image: '/images/img/prod1.jpg' },
    { id: 2, name: 'Product B', category: 'T-Shirt', status: 'In-stock', date: '2023-11-09', image: '/images/img/prod2.jpg' },
    { id: 3, name: 'Product C', category: 'Shorts', status: 'Out of Stock', date: '2023-11-09', image: '/images/img/prod3.jpg' },
    { id: 4, name: 'Product D', category: 'Sandals', status: 'Out of stock', date: '2023-11-09', image: '/images/img/prod4.jpg' },
    { id: 5, name: 'Product E', category: 'Crop top', status: 'In-stock', date: '2023-11-09', image: '/images/img/prod5.jpg' },
  ]);

  // Sample sales data
  const [salesData, setSalesData] = useState({
    1: 50,
    2: 120,
    3: 80,
    4: 30,
    5: 100,
  });

  const heroPageStyle = {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, 
    backgroundImage: `url(${svgBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  return (
    <div style={heroPageStyle}>
      <Header />
      <div style={backgroundStyle}></div>
      <Carousel />
      <TopPicks products={products} salesData={salesData} />
      <TopSales products={products} salesData={salesData}/>
      <SubscribeFlag/>
    </div>
  );
};

export default HeroPage;
