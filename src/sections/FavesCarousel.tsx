export default function FavesCarousel() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-oswald text-3xl font-bold mb-4">Our faves forever</h2>
      {/* Carrusel fila 1 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
      </div>
      {/* Carrusel fila 2 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
        <div className="aspect-square bg-white/10 rounded-xl" />
      </div>
    </div>
  );
}
