import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductDetail from './pages/ProductDetail';

import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import Hero from './components/home/Hero';
import EditorsPick from './components/home/EditorsPick';
import BestsellerProducts from './components/home/BestsellerProducts';
import ShopHero from './components/home/ShopHero';
import NeuralUniverse from './components/home/NeuralUniverse';
import FeaturedPosts from './components/home/FeaturedPosts';
import MeetOurTeam from './components/home/MeetOurTeam';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <EditorsPick />
    <BestsellerProducts />
    <ShopHero />
    <NeuralUniverse />
    <MeetOurTeam />
    <FeaturedPosts />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route 
        path="/product/:productId" 
        element={
          <>
            <Header />
            <ProductDetail />
            <Footer />
          </>
        } 
      />
    </Routes>
  );
}

export default App;