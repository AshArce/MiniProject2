import React, {useEffect, useState} from 'react';
import Header from '../../components/customer/Header';
import Carousel from '../../components/customer/Carousel';
import TopPicks from '../../components/customer/TopPicks';
import TopSales from '../../components/customer/TopSales';
import SubscribeFlag from '../../components/customer/SubscribeFlag';
import Footer from '../../components/customer/Footer';

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

  const spaceStyle = {
    margin: '20px 0',
  }


  return (
    <div >
      <Header />
      <Carousel />
      <TopPicks products={products} salesData={salesData} />
      <TopSales products={products} salesData={salesData}/>
      <SubscribeFlag/>
      <div style={spaceStyle} /> {/* Add a container with space */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default HeroPage;
