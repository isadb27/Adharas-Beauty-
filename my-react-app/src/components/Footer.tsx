import React from "react";
import fondoTornasol from "../assets/imagenes/fondofooter.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-white py-10 px-6 md:px-20 bg-gray-900 overflow-hidden">
      {/* Imagen tornasol a la izquierda */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-1/3 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${fondoTornasol})`,
        }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Texto principal */}
        <div className="text-center md:text-left text-sm leading-relaxed max-w-xl md:ml-auto">
          <h3 className="text-2xl font-semibold mb-2">CUSTOMER SERVICE</h3>
          <p>
            Operating hours are from 9am–9pm EST Monday–Friday and 9am–6pm EST
            Saturday. Reach out today!
          </p>
          <p className="mt-2 text-pink-300">
            <a
              href="mailto:customerservice@adharasbeauty.com"
              className="hover:underline"
            >
              customerservice@adharasbeauty.com
            </a>
          </p>
          <p className="mt-4">
            Shipping info, Returns, Help Q&A, Paying methods, Gift cards, Gift
            cards balance.
          </p>
          <p>
            Do you have questions?{" "}
            <a href="#" className="text-pink-400 hover:underline">
              Click here
            </a>
          </p>
        </div>

        {/* Enlaces inferiores */}
        <div className="flex flex-col md:items-end text-sm gap-2">
          <p>United States | English</p>
          <p className="hover:text-pink-400 cursor-pointer">Terms of use</p>
          <p className="hover:text-pink-400 cursor-pointer">Refund policy</p>
          <p className="hover:text-pink-400 cursor-pointer">Privacy</p>
          <button className="mt-2 border border-pink-400 text-pink-400 px-3 py-1 rounded hover:bg-pink-400 hover:text-black transition">
            Cookies settings
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;