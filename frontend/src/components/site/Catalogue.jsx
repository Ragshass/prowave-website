import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";
import { CATALOGUE_URL } from "@/data";

export default function Catalogue() {
  return (
    <section
      id="catalogue"
      data-testid="catalogue-section"
      className="relative bg-[#141414] py-24 md:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 font-display font-bold text-[22vw] leading-none text-white/[0.03] whitespace-nowrap">
        CATALOGUE
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              / Technical Documentation
            </span>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[0.95]">
              Explore the full amplifier range.
            </h2>
            <p className="mt-6 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">
              Explore our full amplifier range, specifications, and technical details. Download the
              Prowave catalogue to find the right power solution for your setup.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noreferrer"
              download="Prowave-Amplifier-Catalogue.pdf"
              data-testid="download-catalogue-btn"
              className="group inline-flex items-center gap-4 bg-primary hover:bg-[#c81e1e] text-white font-semibold font-mono uppercase tracking-[0.12em] text-sm px-8 py-5 clip-corner transition-colors duration-200"
            >
              <FileDown size={20} />
              Download Catalogue
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
