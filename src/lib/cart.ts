export type CartItem = {
  sku: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

const CART_KEY = "adharas_cart_v1" as const;
const UPDATED_EVENT = "cart-updated" as const;

type CartState = CartItem[];

// --- Utils ---
function safeParse(json: string | null): CartState {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    if (Array.isArray(parsed)) {
      // Sanitiza por si vienen tipos raros
      return parsed
        .map((x) => ({
          sku: String(x?.sku ?? ""),
          name: String(x?.name ?? ""),
          price: Number(x?.price ?? 0),
          image: String(x?.image ?? ""),
          qty: Number(x?.qty ?? 0),
        }))
        .filter((x) => x.sku && x.name && x.qty > 0);
    }
  } catch {}
  return [];
}

function emitUpdate(cart: CartState) {
  // Incluye payload útil por si alguien lo necesita
  const detail = {
    cart,
    qty: cart.reduce((s, i) => s + i.qty, 0),
    amount: cart.reduce((s, i) => s + i.qty * i.price, 0),
  };
  window.dispatchEvent(new CustomEvent(UPDATED_EVENT, { detail }));
}

// --- API pública ---
/** Lee carrito (parseo seguro) */
export const getCart = (): CartItem[] =>
  safeParse(localStorage.getItem(CART_KEY));

/** Guarda carrito y notifica a la app */
export const setCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  // Notifica a este tab
  emitUpdate(cart);
  // Nota: el evento 'storage' se disparará en otras pestañas automáticamente
};

export const totalQty = (): number =>
  getCart().reduce((s, i) => s + i.qty, 0);

export const totalAmount = (): number =>
  getCart().reduce((s, i) => s + i.qty * i.price, 0);

/** Agrega una unidad del producto al carrito */
export const addItem = (item: Omit<CartItem, "qty">) => {
  const cart = getCart();
  const idx = cart.findIndex((x) => x.sku === item.sku);
  if (idx >= 0) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...item, price: Number(item.price) || 0, qty: 1 });
  }
  setCart(cart);
};

export const inc = (sku: string) => {
  const cart = getCart();
  const i = cart.findIndex((x) => x.sku === sku);
  if (i >= 0) {
    cart[i].qty += 1;
    setCart(cart);
  }
};

export const dec = (sku: string) => {
  const cart = getCart();
  const i = cart.findIndex((x) => x.sku === sku);
  if (i >= 0) {
    cart[i].qty -= 1;
    if (cart[i].qty <= 0) cart.splice(i, 1);
    setCart(cart);
  }
};

export const removeItem = (sku: string) => {
  const cart = getCart().filter((x) => x.sku !== sku);
  setCart(cart);
};

export const clearCart = () => setCart([]);
