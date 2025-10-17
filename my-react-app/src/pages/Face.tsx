import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { faceproducts as faceProducts } from "../data/faceProducts";

const Face: React.FC = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <ProductGrid products={faceProducts} />
      <Footer />
    </>
  );
};

export default Face;