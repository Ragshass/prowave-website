import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Mail } from "lucide-react";
import { BRAND } from "@/data";

export default function Location() {
  return (
    <section
      id="location"
      data-testid="location-section"
      className="relative bg-background py-24 md:py-32 border-t border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              / Find Us
            </span>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl tracking-tight text-white leading-[0.95]">
              Headquartered in Noida.
            </h2>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-1 text-primary"><MapPin size={20} /></span>
                <p className="text-zinc-300 leading-relaxed">{BRAND.address}</p>
              </div>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                data-testid="location-phone"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors duration-200"
              >
                <span className="text-primary"><Phone size={20} /></span>
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="location-email"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors duration-200"
              >
                <span className="text-primary"><Mail size={20} /></span>
                {BRAND.email}
              </a>
            </div>

            <a
              href={BRAND.mapDirections}
              target="_blank"
              rel="noreferrer"
              data-testid="get-directions-btn"
              className="mt-9 self-start group inline-flex items-center gap-3 border border-white/25 hover:border-primary text-white font-semibold font-mono uppercase tracking-[0.12em] text-sm px-6 py-3.5 transition-colors duration-200"
            >
              <Navigation size={17} />
              Get Directions
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative border border-white/10 overflow-hidden min-h-[340px] lg:min-h-[420px]"
          >
            <iframe
              title="ProWave location — Sector 7, Noida"
              data-testid="map-embed"
              src={BRAND.mapEmbed}
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
