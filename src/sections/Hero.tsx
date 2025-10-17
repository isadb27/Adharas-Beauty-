export default function Hero() {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url("/pincelbanner.jpg")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h1 className="font-oswald text-4xl md:text-6xl font-extrabold">
          Shine Brighter: <span className="text-primary">Discover Our New Collection</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Texturas que enamoran, colores que empoderan. Diseñado con tu vibe.
        </p>
      </div>
    </section>
  );
}
