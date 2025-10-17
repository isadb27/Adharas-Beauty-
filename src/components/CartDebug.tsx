// src/components/CartDebug.tsx
import { useEffect, useState } from "react";
import { getCart, totalQty, totalAmount } from "../lib/cart";
import type { CartItem } from "../lib/cart";

type DebugInfo = {
  qty: number;
  amount: number;
  items: CartItem[]; // <- clave: tipar el array
};

export default function CartDebug() {
  const [info, setInfo] = useState<DebugInfo>({
    qty: 0,
    amount: 0,
    items: [],
  });

  const refresh = () => {
    setInfo({
      qty: totalQty(),
      amount: totalAmount(),
      items: getCart(),
    });
  };

  useEffect(() => {
    refresh();
    const handler = () => refresh();

    window.addEventListener("cart-updated", handler as EventListener);
    window.addEventListener("storage", handler as EventListener);

    return () => {
      window.removeEventListener("cart-updated", handler as EventListener);
      window.removeEventListener("storage", handler as EventListener);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2 z-[99999] rounded-xl bg-black/70 p-3 text-white text-xs shadow-lg">
      <p>
        🧠 <b>Debug carrito</b>
      </p>
      <p>Cantidad: {info.qty}</p>
      <p>
        Total:{" "}
        {new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        }).format(info.amount)}
      </p>
      <pre className="max-h-40 overflow-auto text-[10px]">
        {JSON.stringify(info.items, null, 2)}
      </pre>
    </div>
  );
}
