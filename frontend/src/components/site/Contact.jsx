import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRAND } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const INTERESTS = [
  "General Inquiry",
  "Product Enquiry",
  "Bulk / Distributor Order",
  "Dealership Opportunity",
  "Export Inquiry",
];

const EMPTY = { name: "", phone: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [interest, setInterest] = useState("General Inquiry");
  const [loading, setLoading] = useState(false);
  const msgRef = useRef(null);

  useEffect(() => {
    const onEnquire = (e) => {
      const product = e.detail;
      setInterest("Product Enquiry");
      setForm((f) => ({
        ...f,
        message: `Hi, I'd like to enquire about the ${product}. Please share pricing and availability.`,
      }));
      setTimeout(() => msgRef.current?.focus(), 600);
    };
    window.addEventListener("prowave:enquire", onEnquire);
    return () => window.removeEventListener("prowave:enquire", onEnquire);
  }, []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, {
        ...form,
        kind: interest === "Product Enquiry" ? "enquiry" : "contact",
        product: interest,
      });
      toast.success("Message sent!", {
        description: "Our team will get back to you shortly.",
      });
      setForm(EMPTY);
      setInterest("General Inquiry");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-[#0d0d0d] py-24 md:py-36 border-t border-white/5 noise-overlay"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-primary">
              / Get in Touch
            </span>
            <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[0.95]">
              Let&apos;s talk <span className="text-primary">sound.</span>
            </h2>
            <p className="mt-7 text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
              Have a query about our amplifiers, bulk orders, or dealership opportunities? Reach out
              — we&apos;re happy to help.
            </p>

            <div className="mt-10 space-y-4 font-mono text-sm">
              <a
                href={`tel:${BRAND.phoneRaw}`}
                data-testid="contact-phone-link"
                className="block text-zinc-300 hover:text-primary transition-colors duration-200"
              >
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                data-testid="contact-email-link"
                className="block text-zinc-300 hover:text-primary transition-colors duration-200"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          <motion.form
            data-testid="contact-form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#141414] border border-white/10 p-7 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Name
                </Label>
                <Input
                  id="name"
                  data-testid="contact-input-name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="bg-black/40 border-white/15 h-12 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Phone
                </Label>
                <Input
                  id="phone"
                  data-testid="contact-input-phone"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 ..."
                  className="bg-black/40 border-white/15 h-12 focus-visible:ring-primary"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="contact-input-email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className="bg-black/40 border-white/15 h-12 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                  I&apos;m interested in
                </Label>
                <Select value={interest} onValueChange={setInterest}>
                  <SelectTrigger
                    data-testid="contact-select-interest"
                    className="bg-black/40 border-white/15 h-12 focus:ring-primary"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/15 text-white">
                    {INTERESTS.map((o) => (
                      <SelectItem key={o} value={o} data-testid={`interest-${o}`}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mt-5">
              <Label htmlFor="message" className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
                Message
              </Label>
              <Textarea
                id="message"
                ref={msgRef}
                data-testid="contact-input-message"
                value={form.message}
                onChange={update("message")}
                rows={5}
                placeholder="Tell us about your requirement..."
                className="bg-black/40 border-white/15 focus-visible:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              data-testid="contact-submit-btn"
              disabled={loading}
              className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#c81e1e] disabled:opacity-60 text-white font-semibold font-mono uppercase tracking-[0.12em] text-sm px-8 py-4 clip-corner transition-colors duration-200"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
