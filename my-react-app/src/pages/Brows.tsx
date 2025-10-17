import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { browsProducts as browsProducts } from "../data/browsProducts";

const Brows: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={browsProducts} />
      <Footer />
    </>
  );
};

export default Brows;