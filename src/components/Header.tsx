import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count, total } = useCart();
  const navigate = useNavigate();

  const goCart = () => {
    try {
      navigate("/cart");
    } catch {
      window.location.href = "/cart";
    }
  };

  return (
    <header
      className="sticky top-0 z-[9999] border-b border-white/10 bg-black/70 backdrop-blur"
      style={{ isolation: "isolate" }}
    >
      <div className="container relative mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 py-2 px-4">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2" aria-label="Adharas Beauty — Inicio">
          <img src="/adharas-logo.jpg" alt="Adharas Beauty" className="h-11 w-auto" />
          <span className="sr-only">Adharas Beauty</span>
        </Link>

        {/* Buscador */}
        <form role="search" className="mx-auto flex w-full max-w-[560px] gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="Buscar productos, tonos, colecciones…"
            className="w-full rounded-full border border-white/10 bg-[#0f0f12] px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#ED5A87]"
          />
          <button type="button" className="rounded-full bg-[#ED5A87] px-4 py-3 font-semibold text-black hover:bg-[#ff86b0]">
            Buscar
          </button>
        </form>

        {/* Acciones */}
        <div className="flex items-center justify-end gap-2 pointer-events-auto">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#141416] text-white">
            👤
          </span>

          <button
            type="button"
            onClick={goCart}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#141416] text-white focus:outline-none focus:ring-2 focus:ring-[#ED5A87]"
            aria-label={
              count > 0
                ? `Abrir carrito, ${count} artículos, total $${total.toLocaleString("es-CO")}`
                : "Abrir carrito"
            }
            title={count > 0 ? `Carrito: ${count} · $${total.toLocaleString("es-CO")}` : "Carrito"}
          >
            🛒
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 rounded-full bg-[#ED5A87] px-1.5 text-xs font-bold text-black">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
