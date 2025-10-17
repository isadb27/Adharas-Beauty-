import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { addItem } from "../lib/cart";

const DB: Record<string, {name:string; price:number; image:string; desc:string}> = {
  "HG-01": { name:"HydraShine Gloss", price:39900, image:"/Rectangle%2056-1.png", desc:"Brillo espejo con ácido hialurónico." },
  "GB-30": { name:"Glow Base 30ml", price:79900, image:"/Rectangle%2056.png", desc:"Base ligera de alta duración." },
  "PD-12": { name:"Paleta 12 tonos Diva", price:99900, image:"/Rectangle%2056-2.png", desc:"Mate + shimmer pro." },
};

export default function Product(){
  const { sku = "HG-01" } = useParams();
  const p = DB[sku] ?? DB["HG-01"];

  return (
    <>
      <Header />
      <main className="py-6">
        <div className="container mx-auto px-4">
          <Link to="/" className="mb-4 inline-block text-pink-200">← Volver</Link>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="overflow-hidden rounded-[18px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              <img src={p.image} alt={p.name} className="h-[70vh] w-full object-cover" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">{p.name}</h1>
              <p className="text-white/70">Descripción breve del producto</p>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-pink-100 text-2xl font-extrabold">${p.price.toLocaleString("es-CO")}</span>
                <span className="rounded-full border border-white/20 px-2 py-1 text-sm text-white/80">Envío 24–48h</span>
              </div>

              <p className="mt-3 text-white/90">{p.desc}</p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => addItem({ sku, name: p.name, price: p.price, image: p.image })}
                  className="rounded-full bg-[#ED5A87] px-5 py-3 font-semibold text-black hover:bg-[#ff86b0]">
                  Añadir al carrito
                </button>
                <button
                  onClick={() => addItem({ sku, name: p.name, price: p.price, image: p.image })}
                  className="rounded-full bg-gradient-to-r from-[#ED5A87] via-[#ff4d86] to-[#ff9ac1] px-5 py-3 font-semibold text-black shadow-[0_8px_24px_rgba(237,90,135,.3)]">
                  ¡Llévalo!
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
