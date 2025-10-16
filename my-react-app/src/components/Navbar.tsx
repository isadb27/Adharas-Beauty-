import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/imagenes/logofndonegro1.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-black text-white select-none">
      {/* === Primera fila === */}
      <div className="flex justify-between items-center px-6 py-3 relative">
        {/* Idioma */}
        <div className="text-sm">United States | English</div>

        {/* Logo */}
        <img
          src={logo}
          alt="Adhara's Beauty"
          className="h-8 object-contain cursor-pointer"
        />

        {/* Iconos */}
        <div className="flex items-center gap-5 text-xl relative">
          {/* === Buscador === */}
          <div className="relative flex items-center justify-center">
            <FaSearch
              className="cursor-pointer hover:text-pink-400 transition"
              onClick={() => setShowSearch(!showSearch)}
            />

            {showSearch && (
              <div className="absolute bottom-6 right-[0] transform translate-y-[27px] bg-white text-black rounded-full flex items-center px-3 py-1 shadow-lg animate-fadeIn">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none bg-transparent w-40 text-sm"
                />
                <FaSearch className="text-pink-500 ml-2" />
              </div>
            )}
          </div>

          <FaHeart className="cursor-pointer hover:text-pink-400 transition" />
          <FaShoppingCart className="cursor-pointer hover:text-pink-400 transition" />
          <FaUser className="cursor-pointer hover:text-pink-400 transition" />
        </div>
      </div>

      {/* === Segunda fila: Categorías === */}
      <nav className="border-t border-gray-800">
        <ul className="flex justify-between max-w-3xl mx-auto px-6 py-3 text-lg">
          {[
            { name: "Eyes", path: "/eyes" },
            { name: "Brows", path: "/brows" },
            { name: "Face", path: "/face" },
            { name: "Lips", path: "/lips" },
            { name: "Skincare", path: "/skincare" },
            { name: "Hair", path: "/hair" },
          ].map((cat) => (
            <li key={cat.name} className="cursor-pointer hover:text-pink-400 transition">
              <Link to={cat.path}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
✅ Qué cambió
Importado Link de react-router-dom para navegación interna.

Cada categoría ahora tiene una path (/eyes, /brows, etc.).

Se mantiene todo tu diseño original:

Misma animación del buscador

Misma estructura y estilos

Hover rosa en texto

⚙️ Próximo paso (solo una vez)
En tu App.tsx, debes envolver toda tu app con BrowserRouter y crear las rutas para cada categoría, por ejemplo:

tsx
Copiar código
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import EyesPage from "./pages/EyesPage";
import BrowsPage from "./pages/BrowsPage";
// ... y así para las demás

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductGrid />} />
        <Route path="/eyes" element={<EyesPage />} />
        <Route path="/brows" element={<BrowsPage />} />
        {/* demás rutas */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;