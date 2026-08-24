# Palmbox Trading Limited — Website

A polished, fully responsive gift-card trading website for **Palmbox Trading Limited**.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, and shadcn/ui.

## Quick start

```bash
# Install dependencies
bun install

# Run the dev server
bun run dev

# Open http://localhost:3000
```

## Production build

```bash
bun run build   # Type-checks + builds for production
bun run start   # Serves the production build (optional, Vercel runs this for you)
```

## Deploy on Vercel

This project is **Vercel-ready**.

1. Push the folder to a GitHub repository.
2. Go to <https://vercel.com/new> and import the repo.
3. Vercel auto-detects Next.js. No env vars or build overrides are required.
4. Click **Deploy**. The build runs `next build` (defined in `package.json`).

> No environment variables are required for the public-facing marketing site.
> `DATABASE_URL` is only set in `.env` (gitignored) for the unused Prisma client and is not needed in production.

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (fonts + metadata)
│   ├── page.tsx             # Home page (composes all sections)
│   ├── globals.css          # Tailwind v4 theme + brand tokens
│   └── api/route.ts         # Health-check endpoint
├── components/
│   ├── site/                # All Palmbox marketing components
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── rate-ticker.tsx  # NEW: live rate marquee strip
│   │   ├── trust-badges.tsx
│   │   ├── services.tsx     # Includes vertical "trade journey" timeline
│   │   ├── gallery.tsx      # Bento grid (different from Jiro)
│   │   ├── about.tsx
│   │   ├── contact.tsx      # Split-screen + WhatsApp-powered form
│   │   ├── terms.tsx
│   │   ├── footer.tsx       # Phone number visible ONLY here
│   │   ├── whatsapp-button.tsx
│   │   ├── floating-whatsapp.tsx
│   │   └── brand-cards.tsx  # 20 unique brand gift card SVGs
│   └── ui/                  # shadcn/ui primitives
└── lib/
    ├── site-config.ts       # Company details, nav, rates, gift cards
    ├── utils.ts             # cn() helper
    └── db.ts                # Prisma client (unused on the marketing site)
```

## Brand identity (Palmbox)

| Token        | Hex       | Use                          |
|--------------|-----------|------------------------------|
| Emerald      | `#0C3B2E` | Primary brand color          |
| Copper       | `#C97B3C` | Accent / highlight           |
| Cream        | `#FAF6EE` | Background                   |
| Charcoal     | `#1A1A1A` | Body text                    |
| WhatsApp     | `#25D366` | WhatsApp CTAs                |

This palette is intentionally different from the navy + gold reference site.

## Supported gift card brands (20)

Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, eBay, Sephora, Netflix,
Spotify, Visa, Mastercard, Walmart, Target, Best Buy, Apple Store, Nike,
Adidas, Macy's, Nordstrom.

## WhatsApp number visibility rule

The phone number **2349010808521** (displayed as `+234 901 080 8521`) is
visibly shown **only in the footer** of the website. Every other WhatsApp
button on the site uses the WhatsApp deep-link (`https://wa.me/...`) without
displaying the digits.

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui (New York)
- Framer Motion 12
- Lucide React icons

## License

© Palmbox Trading Limited. All rights reserved.
