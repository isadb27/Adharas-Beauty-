export default function Hero() {
  return (
    <section
      className="relative h-[60vh] md:h-[70vh] flex items-center"
      style={{
        backgroundImage: "url(/pincelbanner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <h1 className="font-oswald text-4xl md:text-6xl font-extrabold max-w-3xl">
          Shine Brighter: <span className="text-primary">Discover Our New Collection</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/80">
          Texturas que enamoran, colores que empoderan. Diseñado con tu vibe.
        </p>
        <div className="mt-6 flex gap-3">
          <button className="px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90">Shop now</button>
          <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white hover:text-black transition">Learn more</button>
        </div>
      </div>
    </section>
  );
}
