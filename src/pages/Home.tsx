import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Home() {
  return (
    <>
      <Header />

      {/* Categorías */}
      <nav className="pt-2">
        <div className="container mx-auto flex flex-wrap gap-2 px-4">
          {[
            "Piel",
            "Ojos",
            "Labios",
            "Brochas",
            "Cejas",
            "Cuidado capilar",
            "Accesorios",
            "Corporal",
          ].map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-[#141416] px-3.5 py-2 font-semibold text-white hover:border-white/30"
            >
              {c}
            </span>
          ))}
        </div>
      </nav>

      {/* Strip */}
      <section className="my-3">
        <div className="container mx-auto rounded-full border border-[#ED5A87]/40 bg-[rgba(237,90,135,.2)] px-4 py-3 text-center font-semibold text-pink-100">
          <strong>NEW COLLECTION:</strong> Glow Diva 2025 — edición limitada ✨
        </div>
      </section>

      {/* Hero carrusel (más lento: 60s) */}
      <section className="my-4 relative z-0">
        <div className="container mx-auto overflow-hidden rounded-[18px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
          <div className="flex w-[600%] animate-[slide_60s_linear_infinite]">
            {["s1", "s2", "s3", "s1", "s2", "s3"].map((k, i) => (
              <div
                key={i}
                className="grid min-h-[50vh] w-1/6 place-items-center bg-cover bg-center"
                style={{
                  backgroundImage:
                    k === "s1"
                      ? "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1800&auto=format&fit=crop')"
                      : k === "s2"
                      ? "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1556227701-57a9e02a9b1b?q=80&w=1800&auto=format&fit=crop')"
                      : "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1800&auto=format&fit=crop')",
                }}
              >
                <div className="max-w-[920px] p-8 text-center">
                  <h2 className="mb-1 text-[clamp(1.6rem,4vw,2.6rem)] font-bold text-white">
                    Shine Brighter
                  </h2>
                  <p className="mb-3 text-pink-100">
                    Base ligera + fijador 24h.
                  </p>
                  <a className="rounded-full bg-white px-4 py-3 font-semibold text-black">
                    Ver colección
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-3">
        <div className="container mx-auto px-4">
          <h3 className="mb-2 text-center text-2xl font-bold text-white">
            Our Best Sellers
          </h3>
          <div className="grid auto-cols-[minmax(240px,280px)] grid-flow-col gap-3 overflow-x-auto pb-1">
            {PRODUCTS.slice(0, 6).map((p) => (
              <ProductCard key={p.sku} {...p} to={`/product/${p.sku}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Dos banners */}
      <section className="py-3">
        <div className="container mx-auto grid gap-4 px-4">
          <figure className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0f0f12] shadow-[0_10px_30px_rgba(0,0,0,.35)]">
            <img src="/aboutus.png" alt="About us" className="w-full object-cover" />
          </figure>
          <figure className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0f0f12] shadow-[0_10px_30px_rgba(0,0,0,.35)]">
            <img src="/mundocomments.png" alt="Worldwide comments" className="w-full object-cover" />
          </figure>
        </div>
      </section>

      {/* Our New Favorites */}
      <section className="pb-7 pt-2">
        <div className="container mx-auto px-4">
          <h3 className="mb-2 text-center text-2xl font-bold text-white">
            Our New Favorites
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {PRODUCTS.slice(6, 10).map((p) => (
              <ProductCard key={p.sku} {...p} to={`/product/${p.sku}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-[#d8cfda]">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <h4 className="text-lg font-bold text-white">Adharas Beauty</h4>
              <p>“The star who glows the most”</p>
              <img
                src="/logofinal.png"
                alt="Customer Service"
                className="mt-2 w-full max-w-[520px] rounded-xl"
              />
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-white">Customer Services</h5>
              <ul className="list-inside list-disc space-y-1 text-pink-100">
                <li>Shipping Info</li>
                <li>Returns</li>
                <li>Help &amp; Q&amp;A</li>
                <li>Paying Methods</li>
                <li>Gift Cards</li>
                <li>Gift Cards Balance</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div>
              <h5 className="mb-2 font-semibold text-white">Síguenos</h5>
              <p>Instagram • TikTok • Pinterest</p>
            </div>
          </div>
          <p className="mt-4 text-center text-sm opacity-70">
            © 2025 Adharas Beauty
          </p>
        </div>
      </footer>
    </>
  );
}
