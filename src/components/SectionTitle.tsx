export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-center text-3xl md:text-4xl font-oswald font-extrabold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-center text-white/70 text-sm font-sans">{subtitle}</p>
      )}
      <div className="mt-4 h-px bg-white/10 max-w-md mx-auto" />
    </div>
  );
}
