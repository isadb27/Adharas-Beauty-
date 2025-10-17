import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { skincareProducts } from "../data/skincareProducts";

const Skincare: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={skincareProducts} />
      <Footer />
    </>
  );
};

export default Skincare;