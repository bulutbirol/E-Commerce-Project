import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import EditorsPick from './components/home/EditorsPick';
import BestsellerProducts from './components/home/BestsellerProducts';
import Banner from './components/home/NeuralUniverse';
import ShopHero from './components/home/ShopHero';
import NeuralUniverse from './components/home/NeuralUniverse';
import FeaturedPosts from './components/home/FeaturedPosts';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EditorsPick />
      <BestsellerProducts />
      <ShopHero />
      <NeuralUniverse />
      <FeaturedPosts />
      <Footer />
    </div>
  );
}

export default App;