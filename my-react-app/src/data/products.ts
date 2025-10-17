import type { Product } from "../components/ProductCard";

export const weekly: Product[] = [
  {
    id: '1',
    name: 'Glow Gloss Pink Dream',
    price: '$12.90',
    image: 'https://images.unsplash.com/photo-1586171835257-8cb0933df4a1?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    tag: 'WEEKLY'
  },
  {
    id: '2',
    name: 'Velvet Matte Lipstick',
    price: '$10.50',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
  },
  {
    id: '3',
    name: 'Rose Quartz Brush Set',
    price: '$24.00',
    image: 'https://images.unsplash.com/photo-1582092728086-91d0a5b6a3c4?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    tag: '-30%'
  },
  {
    id: '4',
    name: 'Hydra Skin Serum',
    price: '$18.90',
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
  },
];

export const featured: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `f${i+1}`,
  name: `Adharas Kit ${i+1}`,
  price: `$${(19 + i).toFixed(2)}`,
  image: 'https://images.unsplash.com/photo-1585386959984-a4155223168f?q=80&w=1600&auto=format&fit=crop',
  rating: 5 - (i % 2),
  tag: i % 3 === 0 ? 'HOT' : undefined,
}));
