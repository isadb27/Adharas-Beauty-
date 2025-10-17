import { useCart } from "../context/CartContext";

export default function TestCart() {
  const { count, total, addToCart, clear } = useCart();

  return (
    <div className="fixed left-2 bottom-24 z-[99998] rounded-xl bg-black/70 p-3 text-white text-sm shadow-lg">
      <div className="font-semibold mb-1">🧪 TestCart</div>
      <div>Cantidad: {count}</div>
      <div>Total: ${total.toLocaleString("es-CO")}</div>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() =>
            addToCart({
              id: "test-2",
              name: "Producto Test 2",
              price: 9999,
              image: "",
            })
          }
          className="rounded bg-[#ED5A87] px-2 py-1 text-black"
        >
          + Añadir test 2
        </button>
        <button
          onClick={clear}
          className="rounded bg-gray-700 px-2 py-1 text-white"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}
