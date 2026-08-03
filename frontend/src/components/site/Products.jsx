import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data";

function enquire(product) {
  window.dispatchEvent(new CustomEvent("prowave:enquire", { detail: product }));
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Products() {
  return (
    <section
      id="products"
      data-testid="products-section"
      className="relative bg-background py-24 md:py-36 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              / The Range
            </span>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
              Amplifiers for every zone.
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm md:text-right">
            From two-zone mixers to 3200W flagship power stages — engineered for continuous,
            demanding use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.id}
              data-testid={`product-card-${p.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-[#111] border border-white/10 hover:border-primary/60 transition-colors duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 bg-black/50 backdrop-blur px-3 py-1.5 border border-white/10">
                  {p.spec}
                </span>
              </div>

              <div className="p-6 md:p-7 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-2">
                    {p.tag}
                  </p>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-white tracking-tight">
                    {p.name}
                  </h3>
                </div>
                <button
                  data-testid={`enquire-btn-${p.id}`}
                  onClick={() => enquire(p.name)}
                  className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-[#c81e1e] text-white font-semibold font-mono uppercase text-xs tracking-[0.1em] px-4 py-3 clip-corner transition-colors duration-200"
                >
                  Enquire
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
