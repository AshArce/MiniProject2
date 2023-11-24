import React, {useEffect, useState} from 'react';
import Header from '../../components/customer/Header';
import Carousel from '../../components/customer/Carousel';
import TopPicks from '../../components/customer/TopPicks';
import TopSales from '../../components/customer/TopSales';
import SubscribeFlag from '../../components/customer/SubscribeFlag';
import Footer from '../../components/customer/Footer';
import { sampleProducts } from '../adminpage/productdata';

const HeroPage = () => {


  const [salesData, setSalesData] = useState(getSalesDataFromProductData(sampleProducts));

  const spaceStyle = {
    margin: '20px 0',
  }


  return (
    <div >
      <Header />
      <Carousel />
      <TopPicks products={sampleProducts} salesData={salesData} />
      <TopSales products={sampleProducts} salesData={salesData}/>
      <SubscribeFlag/>
      <div style={spaceStyle} /> {/* Add a container with space */}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

const getSalesDataFromProductData = (products) => {
  const salesData = {};
  products.forEach((product) => {
    salesData[product.id] = product.sales || 0;
  });
  return salesData;
};

export default HeroPage;
