import { useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/data";

// Official WhatsApp glyph
function WhatsAppIcon({ size = 28 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.06 12.06 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411zM12.05 21.785h-.006a9.938 9.938 0 0 1-5.031-1.378l-.361-.214-3.741.98.999-3.648-.235-.375a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.455-9.885 9.94-9.885a9.87 9.87 0 0 1 7.026 2.906 9.828 9.828 0 0 1 2.913 6.983c-.003 5.45-4.455 9.891-9.94 9.891z" />
    </svg>
  );
}

export default function WhatsappButton() {
  const [hover, setHover] = useState(false);
  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi Prowave, I'd like to know more about your amplifiers."
  )}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: hover ? 1 : 0, x: hover ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="hidden sm:block bg-black/90 backdrop-blur border border-white/15 text-white text-sm font-medium px-4 py-2 whitespace-nowrap pointer-events-none"
      >
        Chat with us on WhatsApp
      </motion.span>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        data-testid="whatsapp-button"
        className="wa-pulse inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white transition-colors duration-200 shadow-lg"
      >
        <WhatsAppIcon size={30} />
      </a>
    </motion.div>
  );
}
