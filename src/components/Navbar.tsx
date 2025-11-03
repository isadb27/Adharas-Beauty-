import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/imagenes/logofndonegro1.png";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full bg-black text-white select-none">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-3 relative">
        <div className="text-sm">United States | English</div>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Adharas Beauty"
            className="h-8 object-contain cursor-pointer"
          />
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-5 text-xl relative">
          {/* Search */}
          <div className="relative flex items-center justify-center">
            <FaSearch
              className="cursor-pointer hover:text-pink-400 transition"
              onClick={() => setShowSearch((prev) => !prev)}
            />
            {showSearch && (
              <div className="absolute bottom-6 right-0 translate-y-[27px] bg-white text-black rounded-full flex items-center px-3 py-1 shadow-lg">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none bg-transparent w-40 text-sm"
                />
                <FaSearch className="text-pink-500 ml-2" />
              </div>
            )}
          </div>

          {/* Favorites */}
          <Link to="/favorites">
            <FaHeart className="cursor-pointer hover:text-pink-400 transition" />
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-pink-400 transition" />
          </Link>

          {/* User */}
          <Link to="/login">
            <FaUser className="cursor-pointer hover:text-pink-400 transition" />
          </Link>
        </div>
      </div>

      {/* Categories bar */}
      <nav className="border-t border-gray-800">
        <ul className="flex justify-between max-w-3xl mx-auto px-6 py-3 text-lg">
          {[
            { name: "Eyes", path: "/eyes" },
            { name: "Brows", path: "/brows" },
            { name: "Lips", path: "/lips" },
            { name: "Brushes", path: "/brushes" },
            { name: "Skin", path: "/skin" },
            { name: "Accessories", path: "/accessories" },
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
