import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = { items: CartItem[] };

type CartAction =
  | { type: "HYDRATE"; payload: CartState }
  | { type: "ADD"; payload: Omit<CartItem, "qty"> }
  | { type: "INC"; payload: { id: string } }
  | { type: "DEC"; payload: { id: string } }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "CLEAR" };

const KEY = "adharas_cart_v1";

function readLS(): CartState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { items: [] };
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return { items: [] };
    return {
      items: arr
        .map((x) => ({
          id: String(x?.sku ?? x?.id ?? ""),
          name: String(x?.name ?? ""),
          price: Number(x?.price ?? 0),
          image: String(x?.image ?? ""),
          qty: Number(x?.qty ?? 0),
        }))
        .filter((i) => i.id && i.name && i.qty > 0),
    };
  } catch {
    return { items: [] };
  }
}
function writeLS(state: CartState) {
  try {
    // guardamos con clave original, mapeando id->sku para compatibilidad
    const legacy = state.items.map((i) => ({
      sku: i.id,
      name: i.name,
      price: i.price,
      image: i.image,
      qty: i.qty,
    }));
    localStorage.setItem(KEY, JSON.stringify(legacy));
  } catch {
    /* ignorar si storage está bloqueado */
  }
}

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;

    case "ADD": {
      const { id, name, price, image } = action.payload;
      const found = state.items.find((i) => i.id === id);
      if (found) {
        return { items: state.items.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)) };
      }
      return { items: [...state.items, { id, name, price, image, qty: 1 }] };
    }

    case "INC":
      return { items: state.items.map((i) => (i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i)) };

    case "DEC":
      return { items: state.items.map((i) => (i.id === action.payload.id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0) };

    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.payload.id) };

    case "CLEAR":
      return { items: [] };

    default:
      return state;
  }
}

const CartContext = createContext<{
  items: CartItem[];
  addToCart: (p: Omit<CartItem, "qty">) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  total: number;
} | null>(null);

export const CartProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  // hidratar de localStorage (si existe)
  useEffect(() => {
    const initial = readLS();
    dispatch({ type: "HYDRATE", payload: initial });
  }, []);

  // persistir (si se puede)
  useEffect(() => {
    writeLS(state);
  }, [state]);

  const value = useMemo(() => {
    const count = state.items.reduce((a, i) => a + i.qty, 0);
    const total = state.items.reduce((a, i) => a + i.qty * i.price, 0);
    return {
      items: state.items,
      addToCart: (p: Omit<CartItem, "qty">) => dispatch({ type: "ADD", payload: p }),
      inc: (id: string) => dispatch({ type: "INC", payload: { id } }),
      dec: (id: string) => dispatch({ type: "DEC", payload: { id } }),
      remove: (id: string) => dispatch({ type: "REMOVE", payload: { id } }),
      clear: () => dispatch({ type: "CLEAR" }),
      count,
      total,
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
