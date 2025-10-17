import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, totalAmount, type CartItem } from "../lib/cart";

export default function Checkout(){
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(getCart());
    setTotal(totalAmount());
    const onUpdate = () => {
      setItems(getCart());
      setTotal(totalAmount());
    };
    window.addEventListener("cart-updated", onUpdate as EventListener);
    window.addEventListener("storage", onUpdate as EventListener);
    return () => {
      window.removeEventListener("cart-updated", onUpdate as EventListener);
      window.removeEventListener("storage", onUpdate as EventListener);
    };
  }, []);

  return (
    <>
      <Header />

      <main className="container mx-auto grid gap-6 px-4 py-6 lg:grid-cols-[2fr_1fr]">
        {/* Left: Last Details form */}
        <section className="rounded-2xl border border-white/10 bg-[#16161a] p-5">
          <h2 className="mb-3 border-b border-[#ED5A87]/30 pb-2 text-2xl font-extrabold tracking-wide">
            LAST DETAILS
          </h2>

          <form className="grid gap-3">
            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="full name" />
            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="add address" />
            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="add address details" />
            <div className="grid grid-cols-2 gap-3">
              <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="city" />
              <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="zip code" />
            </div>

            <div className="my-2 grid grid-cols-5 gap-2">
              <div className="h-10 rounded-md bg-white/80"></div>
              <div className="h-10 rounded-md bg-white/80"></div>
              <div className="h-10 rounded-md bg-white/80"></div>
              <div className="h-10 rounded-md bg-white/80"></div>
              <div className="h-10 rounded-md bg-white/80"></div>
            </div>

            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="card number" />
            <div className="grid grid-cols-2 gap-3">
              <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="cvv" />
              <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="expiration date" />
            </div>
            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="card holder name" />
            <input className="h-11 rounded-full border border-white/15 bg-white/10 px-4 placeholder:text-white/60 outline-none focus:border-[#ED5A87]" placeholder="billing address" />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button type="button" className="rounded-md bg-[#ED5A87] py-3 font-extrabold tracking-wide text-black hover:bg-[#ff86b0]">
                BUY NOW
              </button>
              <Link to="/" className="rounded-md bg-[#333] py-3 text-center font-extrabold tracking-wide text-white hover:bg-[#444]">
                HOME
              </Link>
            </div>
          </form>
        </section>

        {/* Right: Summary */}
        <aside className="h-max rounded-2xl border border-white/10 bg-[#f0f0f0] p-4 text-[#0b0b0b]">
          <h3 className="mb-3 border-b border-[#ED5A87]/40 pb-2 text-lg font-extrabold tracking-wide">
            SUMMARY
          </h3>

          {items.length === 0 ? (
            <p className="text-sm text-[#333]">No items.</p>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.sku} className="grid grid-cols-[56px_1fr_auto] items-center gap-3 rounded-lg bg-white p-2 shadow-sm">
                  <img src={it.image} className="h-14 w-14 rounded-md object-cover" />
                  <div>
                    <div className="text-sm font-bold">{it.name}</div>
                    <div className="text-xs text-[#666]">Qty: {it.qty}</div>
                  </div>
                  <div className="text-sm font-extrabold">
                    ${(it.qty * it.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-4 border-t border-[#ddd] pt-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-extrabold">
                ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between text-sm text-[#666]">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
        </aside>
      </main>

      {/* customer service banner como en tu mock */}
      <section className="container mx-auto px-4 pb-8">
        <img src="/logofinal.png" alt="Customer Service" className="w-full rounded-xl" />
      </section>
    </>
  );
}
