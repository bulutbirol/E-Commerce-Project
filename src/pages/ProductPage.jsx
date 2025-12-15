import React from "react";
import GreenHeader from "../components/layout/GreenHeader";
import Footer from "../components/layout/Footer";
import ProductDetail from "./ProductDetail";
import ShopClients from "../components/shop/ShopClients";
import BestsellerProducts from "../components/home/BestsellerProducts";

const ProductPage = () => {
  return (
    <>
      <GreenHeader />
      <ProductDetail />
      <BestsellerProducts />
      <ShopClients />
      <Footer />
    </>
  );
};

export default ProductPage;
