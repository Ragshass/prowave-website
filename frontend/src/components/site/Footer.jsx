import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <img src={BRAND.logo} alt="Prowave Amplifiers" className="h-20 w-auto" />
            <p className="mt-6 text-zinc-500 max-w-sm leading-relaxed text-sm">
              Precision-built PA amplifiers — manufactured and exported by Wave Audio Co.
              Trusted by dealers, installers, and audio professionals across India and beyond.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-5">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    data-testid={`social-${s.label.toLowerCase()}`}
                    className="inline-flex items-center justify-center h-11 w-11 border border-white/15 text-zinc-400 hover:text-white hover:border-primary hover:bg-primary transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-6 block font-mono text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {BRAND.email}
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-500 text-sm text-center sm:text-left">
            © {year} Wave Audio Co. All rights reserved. <span className="text-zinc-600">|</span>{" "}
            Prowave Amplifiers
          </p>
          <a
            href="#top"
            data-testid="footer-back-to-top"
            className="group inline-flex items-center gap-2 text-zinc-400 hover:text-primary font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-200"
          >
            Back to top
            <ArrowUp size={15} className="transition-transform duration-200 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
