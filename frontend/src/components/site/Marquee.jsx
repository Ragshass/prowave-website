const WORDS = ["Prowave Amplifiers", "Feel the Sound", "Made in India", "Export Ready", "Precision Audio"];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section
      data-testid="marquee-section"
      className="relative bg-primary py-5 md:py-7 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {row.map((w, i) => (
          <div key={i} className="flex items-center">
            <span className="font-display font-bold uppercase tracking-tight text-3xl md:text-5xl text-white px-6">
              {w}
            </span>
            <span className="text-white/70 text-2xl md:text-4xl px-2">✳</span>
          </div>
        ))}
      </div>
    </section>
  );
}
