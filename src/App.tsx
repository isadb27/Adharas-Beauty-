import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

// 👇 Este mini-componente vive dentro del mismo archivo y usa el carrito global
import { useCart } from "./context/CartContext";
function AddTestFloating() {
  const { addToCart, count, total } = useCart();
  return (
    <div className="fixed left-2 bottom-2 z-[99999] flex flex-col gap-2">
      <button
        onClick={() =>
          addToCart({
            id: "test-1",
            name: "Producto Test",
            price: 12345,
            image: "",
          })
        }
        className="rounded bg-[#ED5A87] px-4 py-2 text-black font-semibold shadow-lg"
      >
        + Añadir test
      </button>
      <div className="rounded bg-black/70 px-3 py-2 text-white text-sm shadow-lg">
        <div>Cantidad: {count}</div>
        <div>Total: ${total.toLocaleString("es-CO")}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Header global */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Botón flotante SIEMPRE visible para probar el carrito */}
      <AddTestFloating />

      {/* Depuración (puedes quitar estos dos botones luego) */}
      <button
        onClick={() => {
          try {
            const raw = localStorage.getItem("adharas_cart_v1");
            alert(raw ? raw : "Carrito vacío o inaccesible 😢");
          } catch {
            alert("No se pudo acceder al localStorage");
          }
        }}
        className="fixed bottom-20 right-4 z-[99999] rounded bg-pink-600 px-3 py-2 text-white shadow-lg"
      >
        Ver localStorage
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
            alert("Carrito limpiado 🧹");
          } catch {
            alert("No se pudo limpiar el carrito");
          }
        }}
        className="fixed bottom-36 right-4 z-[99999] rounded bg-gray-700 px-3 py-2 text-white shadow-lg"
      >
        Limpiar carrito
      </button>
    </>
  );
}
