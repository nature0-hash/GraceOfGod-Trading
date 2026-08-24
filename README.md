# GraceOfGod Trading and Logistics Limited: Gift Card Trading Website

A modern, production-ready Next.js 16 website for **GRACEOFGOD TRADING AND LOGISTICS LIMITED** (Sunrise Trading), a global gift card trading company.

## Highlights

- **Unique "Sunrise Aubergine" design**: Deep Plum + Saffron Amber + Coral palette (no green, no navy).
- **Hero with continuously orbiting gift cards**: six brand cards (Amazon, PlayStation, Steam, iTunes, Visa, Netflix) rotate around a central sunrise medallion. Cards stay upright while orbiting. Fully responsive on desktop, tablet, and mobile.
- **20 realistic brand gift cards**: Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, eBay, Sephora, Netflix, Spotify, Visa, Mastercard, Walmart, Target, Best Buy, Apple Store, Nike, Adidas, Macy's, Nordstrom.
- **Sections**: Hero, Trust Badges, Services, Brand Gallery (with marquee), How It Works, About, FAQ accordion, Contact (with WhatsApp-powered quick form), Terms, Footer.
- **WhatsApp-first contact flow**: every CTA opens WhatsApp with a pre-filled message. The phone number `+234 810 536 9172` is only visibly displayed in the footer Contact Us block (per spec).
- **Fully responsive**: mobile-first design with breakpoints at sm/md/lg/xl.
- **Vercel-ready**: clean `next build` script, no docker-only commands, no exotic dependencies.
- **No green color anywhere**: design palette intentionally avoids green (used by a sister site).
- **Production-safe animations**: pure-CSS orbit (60fps, GPU-accelerated), respects `prefers-reduced-motion`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui (New York style) + Lucide icons
- **Animations:** Framer Motion + custom CSS keyframes
- **Fonts:** Plus Jakarta Sans (display) + Inter (body) via `next/font`

## Quick start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open `http://localhost:3000` in your browser.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **Add New -> Project**.
3. Import the GitHub repo.
4. Vercel auto-detects Next.js. No configuration needed.
5. Click **Deploy**.

The included `vercel.json` already sets the framework, build command, and disables telemetry.

## Project structure

```
.
├── prisma/                          # Prisma schema (kept for completeness; not required at runtime)
├── public/                          # Static assets (logo, robots.txt)
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with fonts + metadata
│   │   ├── page.tsx                 # Home page composition
│   │   ├── globals.css              # Tailwind + custom CSS (orbit, marquee, palette)
│   │   └── api/route.ts             # Health check endpoint
│   ├── components/
│   │   ├── ui/                      # shadcn/ui component library
│   │   └── site/                    # Project-specific sections
│   │       ├── navbar.tsx           # Floating pill navbar
│   │       ├── hero.tsx             # Hero with orbit animation
│   │       ├── trust-badges.tsx     # Why-trade-with-us grid
│   │       ├── services.tsx         # Service spotlight + features
│   │       ├── gallery.tsx          # Brand gallery + marquee
│   │       ├── how-it-works.tsx     # 4-step timeline
│   │       ├── about.tsx            # Mission / Vision / Values
│   │       ├── faq.tsx              # Accordion FAQ
│   │       ├── contact.tsx          # CTA + contact cards + WhatsApp form
│   │       ├── terms.tsx            # Terms & Conditions
│   │       ├── footer.tsx          # Footer (WhatsApp number visible ONLY here)
│   │       ├── floating-whatsapp.tsx # Floating WA button
│   │       ├── whatsapp-button.tsx  # Reusable WhatsApp CTA
│   │       └── brand-cards.tsx      # 20 realistic brand gift card SVGs
│   ├── lib/
│   │   ├── site-config.ts           # Brand config, WA number, gift card list, FAQs
│   │   ├── utils.ts                 # cn() helper
│   │   └── db.ts                    # Prisma client (optional)
│   └── hooks/                       # use-mobile, use-toast
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── components.json                  # shadcn/ui config
├── eslint.config.mjs
├── vercel.json
└── package.json
```

## Configuration

All brand identity is centralized in **`src/lib/site-config.ts`**:

- Brand name, tagline, description
- WhatsApp number (used for `wa.me` links, only visibly displayed in footer)
- Email & working hours
- Navigation links
- Gift card brand list (20 brands)
- FAQ content
- Trust badges

To customize the site, edit that single file.

## Design system

| Token            | Value      | Usage                                |
| ---------------- | ---------- | ------------------------------------ |
| `--primary`      | `#3B0764`  | Deep royal plum: buttons, headings |
| `--accent`       | `#F59E0B`  | Saffron amber: CTAs, highlights     |
| `--coral`        | `#FB7185`  | Warm coral: accents, gradients      |
| `--background`   | `#FFFBF5`  | Warm cream: page bg                 |
| `--plum-deep`    | `#1E0A2E`  | Deepest plum: dark sections/footer |

## Orbit animation

The hero's orbit uses pure CSS keyframes (no JS runtime cost):

- `.orbit-system` rotates 0 to 360deg over 38s (linear, infinite)
- `.orbit-card-upright` counter-rotates 0 to -360deg over 38s, keeping cards upright
- Cards positioned on the circle via static `transform: rotate(angle) translateY(-R) rotate(-angle)`
- Pauses on hover (desktop only) so users can read cards
- Disables entirely under `prefers-reduced-motion: reduce`

## License & ownership

(c) GRACEOFGOD TRADING AND LOGISTICS LIMITED. All rights reserved.

This codebase is provided to the company for production use. Brand names and gift card designs referenced in this site belong to their respective owners and are used here solely for identification of the gift card types we trade.
