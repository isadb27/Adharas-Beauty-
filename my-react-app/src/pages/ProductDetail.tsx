import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products as lipsProducts } from "../data/lipsProducts"; // Puedes importar más adelante los de eyes, face, etc.

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = lipsProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-white">
        <p>Producto no encontrado</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-400"
        >
          Volver
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black text-white py-12 px-6 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-pink-400">
          {product.name}
        </h1>
        <p className="text-lg mb-4">{product.price}</p>
        <p className="max-w-md text-center text-gray-300">
          Este es un producto destacado de Adhara’s Beauty. Disfruta de su
          textura, durabilidad y color vibrante.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-pink-500 px-6 py-2 rounded-md hover:bg-pink-400"
        >
          Volver
        </button>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetail;
