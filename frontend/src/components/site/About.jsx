import { motion } from "framer-motion";
import { MANIFESTO } from "@/data";

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-background py-24 md:py-36 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
                / About Wave Audio Co.
              </span>
              <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-white">
                Amplifiers built to be <span className="text-stroke-red">heard.</span>
              </h2>
              <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
                Wave Audio Co. designs and manufactures ProWave amplifiers for professional and
                commercial audio applications — engineered for reliability, power efficiency, and
                long-term performance, trusted by dealers, installers, and audio professionals
                nationwide.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <div className="flex flex-col">
              {MANIFESTO.map((m, i) => (
                <motion.div
                  key={m.n}
                  custom={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 border-t border-white/10 first:border-t-0"
                >
                  <span className="font-display font-bold text-3xl md:text-5xl text-zinc-700 tabular-nums">
                    {m.n}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-2xl md:text-3xl text-white tracking-tight">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-zinc-400 leading-relaxed max-w-xl">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
