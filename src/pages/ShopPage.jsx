import React from 'react';
import GreenHeader from '../components/layout/GreenHeader';
import Footer from '../components/layout/Footer';
import ShopCategories from '../components/shop/ShopCategories';
import ShopProducts from '../components/shop/ShopProducts';
import ShopClients from '../components/shop/ShopClients';

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <GreenHeader />
      <ShopCategories />
      <ShopProducts />
      <ShopClients />
      <Footer />
    </div>
  );
};

export default ShopPage;