import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { products as lipsProducts } from "../data/lipsProducts";

const Lips: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={lipsProducts} />
      <Footer />
    </>
  );
};

export default Lips;