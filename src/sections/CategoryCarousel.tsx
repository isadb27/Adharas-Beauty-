export default function CategoryCarousel() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-oswald text-3xl font-bold mb-4">Shop by category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="aspect-[4/5] bg-white/10 rounded-2xl grid place-items-center">Lipstick</div>
        <div className="aspect-[4/5] bg-white/10 rounded-2xl grid place-items-center">Eyes</div>
        <div className="aspect-[4/5] bg-white/10 rounded-2xl grid place-items-center">Accessories</div>
        <div className="aspect-[4/5] bg-white/10 rounded-2xl grid place-items-center">Skincare</div>
      </div>
    </div>
  );
}
