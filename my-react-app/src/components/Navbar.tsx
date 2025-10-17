import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/imagenes/logofndonegro1.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-black text-white select-none">
      <div className="flex justify-between items-center px-6 py-3 relative">
        <div className="text-sm">United States | English</div>

        <Link to="/">
          <img
            src={logo}
            alt="Adhara's Beauty"
            className="h-8 object-contain cursor-pointer"
          />
        </Link>

        <div className="flex items-center gap-5 text-xl relative">
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
            <li
              key={cat.name}
              className="cursor-pointer hover:text-pink-400 transition"
            >
              <Link to={cat.path}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}