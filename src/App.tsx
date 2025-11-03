import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useCart } from "./context/CartContext";

// Floating test button for the cart
function AddTestFloating() {
  const { addToCart, count, total } = useCart();
  return (
    <div className="fixed left-2 bottom-2 z-[99999] flex flex-col gap-2">
      <button
        onClick={() =>
          addToCart({
            id: "test-1",
            name: "Test product",
            price: 12345,
            image: "",
          })
        }
        className="rounded bg-[#ED5A87] px-4 py-2 text-black font-semibold shadow-lg"
      >
        + Add test
      </button>
      <div className="rounded bg-black/70 px-3 py-2 text-white text-sm shadow-lg">
        <div>Quantity: {count}</div>
        <div>Total: ${total.toLocaleString("en-US")}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Global navbar */}
      <Navbar />

      {/* Main routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        {/* Category routes from navbar */}
        <Route
          path="/skin"
          element={<div className="p-6 text-white">Skin</div>}
        />
        <Route
          path="/eyes"
          element={<div className="p-6 text-white">Eyes</div>}
        />
        <Route
          path="/lips"
          element={<div className="p-6 text-white">Lips</div>}
        />
        <Route
          path="/brushes"
          element={<div className="p-6 text-white">Brushes</div>}
        />
        <Route
          path="/brows"
          element={<div className="p-6 text-white">Brows</div>}
        />
        <Route
          path="/accessories"
          element={<div className="p-6 text-white">Accessories</div>}
        />

        {/* Optional routes for icons */}
        <Route
          path="/favorites"
          element={<div className="p-6 text-white">Favorites 💗</div>}
        />
        <Route
          path="/login"
          element={<div className="p-6 text-white">Login / Account</div>}
        />
      </Routes>

      {/* Floating test cart button */}
      <AddTestFloating />

      {/* Debug buttons */}
      <button
        onClick={() => {
          try {
            const raw = localStorage.getItem("adharas_cart_v1");
            alert(raw ? raw : "Cart is empty or unavailable 😢");
          } catch {
            alert("Could not access localStorage");
          }
        }}
        className="fixed bottom-20 right-4 z-[99999] rounded bg-pink-600 px-3 py-2 text-white shadow-lg"
      >
        View localStorage
      </button>

      <button
        onClick={() => {
          try {
            localStorage.setItem("adharas_cart_v1", "[]");
            window.dispatchEvent(
              new CustomEvent("cart-updated", {
                detail: { cart: [], qty: 0, amount: 0 },
              })
            );
            alert("Cart cleaned 🧹");
          } catch {
            alert("Could not clean the cart");
          }
        }}
        className="fixed bottom-36 right-4 z-[99999] rounded bg-gray-700 px-3 py-2 text-white shadow-lg"
      >
        Clear cart
      </button>
    </>
  );
}
