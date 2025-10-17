import React, { useState, useEffect } from "react";
import { Star, Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const savedRatings = localStorage.getItem("productRatings");
    const savedFavorites = localStorage.getItem("productFavorites");

    if (savedRatings) setRatings(JSON.parse(savedRatings));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("productRatings", JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    localStorage.setItem("productFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleRating = (productId: number, value: number) => {
    setRatings((prev) => ({ ...prev, [productId]: value }));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="py-12 px-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-pink-400">
        Nuestros productos
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-zinc-900 rounded-lg shadow-md hover:shadow-pink-500/20 transition p-4 text-center relative"
          >
            <button
              onClick={() => toggleFavorite(product.id)}
              className="absolute top-3 right-3 focus:outline-none"
            >
              <Heart
                className={`w-6 h-6 transition-transform ${
                  favorites[product.id]
                    ? "fill-pink-500 text-pink-500 scale-110"
                    : "text-gray-500 hover:text-pink-400"
                }`}
              />
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-pink-400 font-medium">{product.price}</p>

            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, index) => {
                const value = index + 1;
                return (
                  <button
                    key={index}
                    onClick={() => handleRating(product.id, value)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-5 h-5 transition-transform ${
                        value <= (ratings[product.id] || 0)
                          ? "fill-pink-500 text-pink-500"
                          : "text-gray-500"
                      } hover:text-pink-400 hover:scale-125`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
