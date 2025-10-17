export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between text-white">
        <a href="#" className="text-xl font-extrabold tracking-wide">
          Adharas <span className="text-primary">Beauty</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary" href="#weekly">Weekly sales</a>
          <a className="hover:text-primary" href="#banners">About us</a>
          <a className="hover:text-primary" href="#categories">Categories</a>
          <a className="hover:text-primary" href="#support">Customer service</a>
        </div>
        <button className="px-4 py-2 rounded-xl bg-primary text-white hover:opacity-90">Sign in</button>
      </nav>
    </header>
  );
}
