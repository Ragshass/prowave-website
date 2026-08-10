import { motion } from "framer-motion";
import { ShieldCheck, MapPinned, Globe2, Headphones } from "lucide-react";
import { FEATURES } from "@/data";

const ICONS = { ShieldCheck, MapPinned, Globe2, Headphones };

// Bento spans for asymmetry
const SPAN = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3 md:row-span-2 md:col-start-4 md:row-start-1",
];

export default function WhyProwave() {
  return (
    <section
      id="why"
      data-testid="why-section"
      className="relative bg-[#0d0d0d] py-24 md:py-36 border-t border-white/5 noise-overlay"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
            / Why Prowave
          </span>
          <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            Trusted where it matters most.
          </h2>
        </div>

        <div className="grid md:grid-cols-6 auto-rows-fr gap-5 md:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon];
            const big = i === 0 || i === 3;
            return (
              <motion.div
                key={f.n}
                data-testid={`feature-${f.n}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col justify-between overflow-hidden bg-[#141414] border border-white/10 hover:border-primary/60 p-7 md:p-9 transition-colors duration-300 ${SPAN[i]} ${
                  big ? "min-h-[260px]" : "min-h-[190px]"
                }`}
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-colors duration-500" />
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center justify-center h-12 w-12 border border-primary/40 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="font-display font-bold text-4xl md:text-5xl text-white/5 group-hover:text-primary/25 transition-colors duration-300 tabular-nums">
                    {f.n}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-white tracking-tight">
                    {f.title}
                  </h3>
                  <p className={`mt-3 text-zinc-400 leading-relaxed ${big ? "" : "text-sm"}`}>
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
