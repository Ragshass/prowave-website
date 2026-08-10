import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="site-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center shrink-0">
          <img src={BRAND.logo} alt="Prowave Amplifiers" className="h-10 md:h-12 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[13px] font-mono uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-[width] duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-cta-contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-[#c81e1e] text-white text-[13px] font-semibold font-mono uppercase tracking-[0.12em] px-5 py-2.5 clip-corner transition-colors duration-200"
          >
            Contact Us
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-1"
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10 mt-3"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="block py-3 text-lg font-display uppercase tracking-wide text-zinc-200 border-b border-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
