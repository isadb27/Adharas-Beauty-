import { useCart } from "../context/CartContext";

type Props = {
  sku: string;
  name: string;
  price: number | string;
  image: string;
  to?: string;
};

function coercePrice(p: number | string): number {
  if (typeof p === "number") return Number.isFinite(p) ? p : 0;
  // limpia símbolos y maneja coma/punto
  const cleaned = p.replace(/[^\d.,-]/g, "").replace(",", ".");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export default function ProductCard({ sku, name, price, image, to }: Props) {
  const { addToCart } = useCart();
  const numericPrice = coercePrice(price);

  const handleAdd = () => {
    addToCart({ id: sku, name, price: numericPrice, image });
  };

  return (
    <article className="overflow-hidden rounded-[18px] border border-white/10 bg-[#16161a] shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      <a href={to ?? "#"} className="block">
        <img src={image} alt={name} className="h-60 w-full object-cover" />
      </a>
      <div className="p-3">
        <h4 className="mb-1 font-semibold text-white">{name}</h4>
        <p className="font-bold text-pink-100">
          ${numericPrice.toLocaleString("es-CO")}
        </p>
        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-[#ED5A87] px-3 py-2 font-semibold text-black hover:bg-[#ff86b0]"
          >
            Añadir
          </button>
          <a
            className="rounded-full border border-white/20 px-3 py-2 text-white"
            href={to ?? "#"}
          >
            Ver
          </a>
        </div>
      </div>
    </article>
  );
}
