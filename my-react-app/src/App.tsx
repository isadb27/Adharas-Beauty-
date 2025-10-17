import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { SectionTitle } from "./components/SectionTitle";
import { weekly, featured } from "./data/products";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import WorldwideSection from "./sections/WorldwideSection";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />

      {/* WEEKLY SALES */}
      <section id="weekly" className="py-12">
        <SectionTitle title="Our weekly sales" />
        <div className="mx-auto max-w-7xl px-4 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {weekly.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <AboutSection />
      <WorldwideSection />

      {/* FEATURED */}
      <section id="featured" className="py-12">
        <SectionTitle title="Our favorite bestsellers" />
        <div className="mx-auto max-w-7xl px-4 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="service" className="border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
          <div>
            <h4 className="font-bold font-oswald text-lg">Adharas Beauty</h4>
            <p className="mt-2 text-sm text-white/70">The star who glows the most.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Customer Service</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a className="hover:text-primary" href="#">Shipping Info</a></li>
              <li><a className="hover:text-primary" href="#">Returns</a></li>
              <li><a className="hover:text-primary" href="#">Help Q&A</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Payments & Gifts</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a className="hover:text-primary" href="#">Paying methods</a></li>
              <li><a className="hover:text-primary" href="#">Gift cards</a></li>
              <li><a className="hover:text-primary" href="#">Gift card balance</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a className="hover:text-primary" href="#">Terms of Use</a></li>
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Adharas Beauty. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
