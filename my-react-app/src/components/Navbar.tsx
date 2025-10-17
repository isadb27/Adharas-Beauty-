export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between text-white">
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2 text-xl font-extrabold tracking-wide">
          <img
            src="/adharas-logo.jpg"
            alt="Adharas Beauty"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-oswald">
            Adharas <span className="text-primary">Beauty</span>
          </span>
        </a>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="hover:text-primary transition" href="#weekly">Weekly sales</a>
          <a className="hover:text-primary transition" href="#about">About us</a>
          <a className="hover:text-primary transition" href="#featured">Best sellers</a>
          <a className="hover:text-primary transition" href="#service">Customer service</a>
        </div>

        {/* BUTTON */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90 font-medium">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
