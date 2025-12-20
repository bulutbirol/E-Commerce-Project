import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import EditorsPick from './components/home/EditorsPick';
import BestsellerProducts from './components/home/BestsellerProducts';
import ShopHero from './components/home/ShopHero';
import NeuralUniverse from './components/home/NeuralUniverse';
import FeaturedPosts from './components/home/FeaturedPosts';
import Footer from './components/layout/Footer';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import GreenHeader from './components/layout/GreenHeader';
import ProductDetail from "./pages/ProductDetail";
import ShopClients from './components/shop/ShopClients';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


const HomePage = () => (
  <>
    <Header />
    <Hero />
    <EditorsPick />
    <BestsellerProducts />
    <ShopHero />
    <NeuralUniverse />
    <FeaturedPosts />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route
        path="/product/:productId"
        element={
          <>
            <GreenHeader />
            <ProductDetail />
            <BestsellerProducts />
            <ShopClients />
            <Footer />
          </>
        }
      />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;