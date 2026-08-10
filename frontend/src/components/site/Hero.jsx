import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { HERO_IMAGE, CATALOGUE_URL } from "@/data";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden noise-overlay grid-lines pt-28 pb-14"
    >
      {/* Parallax product image */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Prowave 10000 BW amplifier"
          className="w-full h-full object-cover object-center opacity-40 md:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
            Wave Audio Co. — Est. Precision Audio
          </span>
        </motion.div>

        <h1 className="font-display font-bold leading-[0.9] tracking-tighter text-white text-[19vw] sm:text-[15vw] md:text-[11vw] lg:text-[9.5rem]">
          {["Feel the", "Sound."].map((t, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={line}
                initial="hidden"
                animate="show"
                className={`inline-block ${i === 1 ? "text-primary" : ""}`}
              >
                {t}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-7 max-w-xl text-base md:text-lg text-zinc-300 leading-relaxed"
        >
          <span className="text-white font-semibold">Prowave Amplifiers</span> — precision-built PA
          amplifiers manufactured and exported by Wave Audio Co.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={CATALOGUE_URL}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-cta-catalogue"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-[#c81e1e] text-white font-semibold font-mono uppercase tracking-[0.12em] text-sm px-7 py-4 clip-corner transition-colors duration-200"
          >
            <FileDown size={18} />
            View Catalogue
          </a>
          <a
            href="#contact"
            data-testid="hero-cta-contact"
            className="group inline-flex items-center gap-3 border border-white/25 hover:border-primary text-white font-semibold font-mono uppercase tracking-[0.12em] text-sm px-7 py-4 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="relative z-10 mx-auto max-w-[1400px] w-full px-5 md:px-10 mt-14 hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500"
      >
        <span>[ Scroll to explore ]</span>
        <span className="h-px flex-1 bg-white/10" />
        <span>Manufactured · Exported</span>
      </motion.div>
    </section>
  );
}
