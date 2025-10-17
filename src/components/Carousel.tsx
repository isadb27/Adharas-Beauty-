import type { PropsWithChildren } from "react";
import { useRef } from "react";

type CarouselProps = PropsWithChildren<{
  title?: string;
  idAnchor?: string;
}>;

export default function Carousel({ children, title, idAnchor }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const delta = dir === "left" ? -ref.current.clientWidth : ref.current.clientWidth;
    ref.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section id={idAnchor} className="py-12">
      {title && (
        <h2 className="mx-auto max-w-7xl px-4 text-3xl md:text-4xl font-extrabold mb-6">
          {title}
        </h2>
      )}

      <div className="relative mx-auto max-w-7xl px-10">
        <button
          aria-label="prev"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 hidden sm:grid place-items-center"
        >
          ‹
        </button>

        <div
          ref={ref}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
        >
          {children}
        </div>

        <button
          aria-label="next"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 hidden sm:grid place-items-center"
        >
          ›
        </button>
      </div>
    </section>
  );
}
