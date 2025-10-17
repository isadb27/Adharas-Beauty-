import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCart, inc, dec, removeItem,
  totalAmount, type CartItem
} from "../lib/cart";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);

  const refresh = () => {
    setItems(getCart());
    setSubtotal(totalAmount());
  };

  useEffect(() => {
    refresh();
    const onUpdate = () => refresh();
    window.addEventListener("cart-updated", onUpdate as EventListener);
    window.addEventListener("storage", onUpdate as EventListener);
    return () => {
      window.removeEventListener("cart-updated", onUpdate as EventListener);
      window.removeEventListener("storage", onUpdate as EventListener);
    };
  }, []);

  const empty = items.length === 0;

  return (
    <>
      <Header />

      {/* Barra de título */}
      <div className="border-b border-white/10 bg-black/60">
        <div className="container mx-auto px-4">
          <h1 className="py-4 text-center text-2xl font-extrabold tracking-wide text-white">
            Your Cart
          </h1>
        </div>
      </div>

      <main className="container mx-auto grid gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
        {/* Columna izquierda: lista de ítems */}
        <section className="space-y-4">
          {empty ? (
            <div className="rounded-2xl border border-white/10 bg-[#16161a] p-8 text-center">
              <p className="text-white/85">Tu carrito está vacío.</p>
              <Link
                to="/"
                className="mt-4 inline-block rounded-full bg-[#ED5A87] px-5 py-3 font-semibold text-black hover:bg-[#ff86b0]"
              >
                KEEP SHOPPING &gt;
              </Link>
            </div>
          ) : (
            items.map((it) => (
              <article
                key={it.sku}
                className="rounded-2xl border border-white/10 bg-[#16161a] p-4 shadow-[0_8px_24px_rgba(0,0,0,.35)]"
              >
                <div className="grid grid-cols-[110px_1fr_auto] items-start gap-4">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="h-[110px] w-[110px] rounded-xl object-cover"
                  />

                  <div className="pr-2">
                    <h3 className="text-lg font-extrabold tracking-wide text-white">
                      {it.name.toUpperCase()}
                    </h3>
                    <div className="mt-1 text-sm text-white/80">★★★★★</div>
                    <p className="mt-1 text-xs text-white/60">
                      THE GLOSS EVERY GIRL NEEDS IN HER COLLECTION.
                    </p>

                    {/* Controles de cantidad */}
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-2 py-1">
                      <button
                        onClick={() => dec(it.sku)}
                        className="grid h-7 w-7 place-items-center rounded-md border border-white/20"
                        aria-label="Restar"
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-white">{it.qty}</span>
                      <button
                        onClick={() => inc(it.sku)}
                        className="grid h-7 w-7 place-items-center rounded-md border border-white/20"
                        aria-label="Sumar"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(it.sku)}
                        className="ml-3 text-xs text-red-300 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-right text-[#ff79a5]">
                      <span className="text-lg font-extrabold">
                        ${(it.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>{" "}
                      <span className="text-xs">USD</span>
                      <div className="text-[10px] tracking-widest text-white/70">UNIT</div>
                    </div>
                    <div className="mt-4 text-sm font-bold text-white/90">
                      Total:{" "}
                      <span className="text-white">
                        ${(it.price * it.qty).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}

          {/* Bloque subtotal + botones (como el mock) */}
          {!empty && (
            <div className="mt-2 rounded-2xl border border-white/10 bg-[#dcdcdc] p-4 text-[#0b0b0b]">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold">Subtotal:</span>
                <span className="text-lg font-extrabold">
                  $
                  {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
                  USD
                </span>
              </div>
              <p className="mt-1 text-xs text-[#555]">
                whole price after taxes and fees by the end
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Link
                  to="/"
                  className="rounded-md bg-[#ED5A87] py-3 text-center font-extrabold tracking-wide text-black hover:bg-[#ff86b0]"
                >
                  KEEP SHOPPING &gt;
                </Link>
                <Link
                  to="/checkout"
                  className="rounded-md bg-[#333] py-3 text-center font-extrabold tracking-wide text-white hover:bg-[#444]"
                >
                  FINALIZE PURCHASE &gt;
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Columna derecha: resumen */}
        <aside className="h-max rounded-2xl border border-white/10 bg-[#16161a] p-4">
          <h3 className="mb-3 border-b border-[#ED5A87]/30 pb-2 text-lg font-extrabold tracking-wide">
            SUMMARY
          </h3>

          {items.length === 0 ? (
            <p className="text-white/70">No items yet.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.sku} className="grid grid-cols-[56px_1fr_auto] items-center gap-3">
                  <img src={it.image} alt={it.name} className="h-14 w-14 rounded-md object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-white/95">{it.name}</div>
                    <div className="text-xs text-white/60">Qty: {it.qty}</div>
                  </div>
                  <div className="text-sm font-bold text-white">
                    ${(it.qty * it.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <hr className="my-3 border-white/10" />

          <div className="flex justify-between text-white/90">
            <span>Subtotal</span>
            <span className="font-bold">
              $
              {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex justify-between text-white/60">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="mt-3 flex justify-between text-lg font-extrabold">
            <span>Total</span>
            <span>
              $
              {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>

          <Link
            to="/checkout"
            className="mt-4 block rounded-md bg-[#ED5A87] py-3 text-center font-extrabold tracking-wide text-black hover:bg-[#ff86b0]"
          >
            FINALIZE PURCHASE &gt;
          </Link>
        </aside>
      </main>
    </>
  );
}
