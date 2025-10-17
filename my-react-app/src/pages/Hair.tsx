import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { hairproducts as hairProducts } from "../data/hairProducts";

const Hair: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={hairProducts} />
      <Footer />
    </>
  );
};

export default Hair;