# ProWave Amplifiers — Product Requirements Document

## Original Problem Statement
Single-page marketing website for **ProWave Amplifiers**, a product brand of **Wave Audio Co.** — a PA amplifier manufacturer, seller, and exporter with distribution across India. Brand-presence site (NOT e-commerce). Goal: credibility for buyers, distributors, and export inquiries.

Visual theme: Matte black / charcoal base, red accent (from logo). Bold technical sans-serif. Sticky nav w/ logo top-left. Award-worthy motion (framer-motion + lenis), masked hero reveal, editorial marquee, numbered manifesto, subtle parallax.

## Architecture
- **Frontend:** React 19 (CRA/craco), Tailwind, framer-motion, lenis smooth scroll, shadcn/ui (Input/Textarea/Select/Label/sonner), lucide-react icons.
- **Backend:** FastAPI + MongoDB (motor). Routes under `/api`.
- **Fonts:** Rajdhani (display/headings), Barlow (body), JetBrains Mono (labels).

## User Personas
- Buyers / audio professionals evaluating amplifiers.
- Dealers & distributors seeking partnership.
- Export clients (international).

## Core Requirements (static)
Sections: Sticky Nav, Hero ("Feel the Sound."), About manifesto, Marquee, Product Gallery (4 models, Enquire), Catalogue Download, Why ProWave (4 features bento), Location/Map (Sector 7 Noida), Contact form, Floating WhatsApp, Footer.

## What's Been Implemented (2026-08-03) — MVP Complete
- Full single-page site with all sections above, dark industrial aesthetic.
- Kinetic hero: masked line-by-line reveal + scroll parallax on product image.
- Product gallery with hover-zoom + per-product "Enquire" (prefills contact form via custom event).
- Catalogue "Download" generates a real PDF client-side (`/lib/catalogue.js`).
- Contact form → `POST /api/contact` (stored in Mongo `contact_messages`), Select dropdown for interest, sonner toast. Verified: POST 200, records persist.
- Floating WhatsApp button (wa.me, red pulse glow, tooltip). Google Map iframe embed + directions link.
- Backend endpoints: `GET /api/`, `POST /api/contact`, `GET /api/contact`. Verified via curl.

## Data / Config Notes
- Placeholder contact details in `frontend/src/data.js` (BRAND): phone +91 98100 00000, email sales@waveaudio.co.in, WhatsApp 919810000000. **User should replace with real values.**
- Product images & logo = user-provided brand assets.

## Backlog / Next Tasks
- P1: Replace placeholder phone/email/WhatsApp/social links with real ones.
- P1: Email notification on new contact (Resend integration) so inquiries reach inbox.
- P2: Real product spec sheets / individual model detail pages.
- P2: Admin view for submitted inquiries.
- P2: SEO meta/OG tags, favicon with ProWave logo.
