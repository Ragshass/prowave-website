import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/data";

export default function WhatsappButton() {
  const [hover, setHover] = useState(false);
  const href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
    "Hi ProWave, I'd like to know more about your amplifiers."
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
        className="wa-pulse inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary hover:bg-[#c81e1e] text-white transition-colors duration-200 shadow-lg"
      >
        <MessageCircle size={26} fill="currentColor" />
      </a>
    </motion.div>
  );
}
