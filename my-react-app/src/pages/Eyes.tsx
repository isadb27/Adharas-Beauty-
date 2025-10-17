import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { eyesProducts as eyesProducts } from "../data/eyesProducts";

const Eyes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={eyesProducts} />
      <Footer />
    </>
  );
};

export default Eyes;