/**
 * Site-wide configuration for PALMBOX TRADING LIMITED.
 * The WhatsApp number is intentionally NOT exported as a display string here.
 * The number is only shown in the footer; everywhere else we use a generic label.
 */

export type BrandId =
  | "amazon"
  | "steam"
  | "itunes"
  | "google-play"
  | "xbox"
  | "playstation"
  | "ebay"
  | "sephora"
  | "netflix"
  | "spotify"
  | "visa"
  | "mastercard"
  | "walmart"
  | "target"
  | "best-buy"
  | "apple-store"
  | "nike"
  | "adidas"
  | "macys"
  | "nordstrom";

export type GiftCardBrand = {
  id: BrandId;
  name: string;
};

export const siteConfig = {
  brand: "PALMBOX TRADING LIMITED",
  brandShort: "Palmbox Trading",
  brandLine1: "PALMBOX",
  brandLine2: "TRADING LIMITED",
  tagline: "The Trusted Home of Gift Card Trading",
  description:
    "Palmbox Trading Limited is a global gift card trading partner. We deliver secure transactions, instant payouts, and the most competitive rates for gift cards worldwide.",

  // Real company WhatsApp number. Only displayed visually in the footer.
  whatsappNumber: "2349010808521",
  whatsappDisplay: "+234 901 080 8521",
  email: "support@palmboxtrading.com",
  emailDisplay: "support@palmboxtrading.com",
  domain: "palmboxtrading.com",

  // Working hours
  hours: "Mon - Sat: 8:00 AM - 11:00 PM (WAT)",
  hoursSunday: "Sunday: 12:00 PM - 10:00 PM (WAT)",

  // Social links (optional placeholders)
  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Cards", href: "#cards" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const trustBadges = [
  {
    icon: "shield-check",
    title: "Bank-Grade Security",
    description:
      "Every trade is processed through encrypted, verified channels. Your cards and your payouts stay protected from start to finish.",
    stat: "Always",
    statLabel: "Secure",
  },
  {
    icon: "zap",
    title: "Lightning Payouts",
    description:
      "Most trades are verified and paid out in under ten minutes. No long waiting, no excuses, no hidden delays.",
    stat: "<10 min",
    statLabel: "Avg payout",
  },
  {
    icon: "globe",
    title: "Traded Worldwide",
    description:
      "We work with traders across Africa, Europe, North America, Asia and beyond. Wherever you are, we have a payout option for you.",
    stat: "40+",
    statLabel: "Countries",
  },
  {
    icon: "layers",
    title: "Every Card Accepted",
    description:
      "Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora, Visa and many more. We trade every major brand.",
    stat: "20+",
    statLabel: "Card brands",
  },
] as const;

export const giftCards: GiftCardBrand[] = [
  { id: "amazon", name: "Amazon" },
  { id: "steam", name: "Steam" },
  { id: "itunes", name: "iTunes" },
  { id: "google-play", name: "Google Play" },
  { id: "xbox", name: "Xbox" },
  { id: "playstation", name: "PlayStation" },
  { id: "ebay", name: "eBay" },
  { id: "sephora", name: "Sephora" },
  { id: "netflix", name: "Netflix" },
  { id: "spotify", name: "Spotify" },
  { id: "visa", name: "Visa" },
  { id: "mastercard", name: "Mastercard" },
  { id: "walmart", name: "Walmart" },
  { id: "target", name: "Target" },
  { id: "best-buy", name: "Best Buy" },
  { id: "apple-store", name: "Apple Store" },
  { id: "nike", name: "Nike" },
  { id: "adidas", name: "Adidas" },
  { id: "macys", name: "Macy's" },
  { id: "nordstrom", name: "Nordstrom" },
];

/**
 * Live rate ticker data, used in the scrolling marquee strip below the hero.
 * Rates are illustrative and clearly framed as "indicative" in the UI.
 */
export const liveRates: { brand: string; rate: string }[] = [
  { brand: "Amazon", rate: "96%" },
  { brand: "Steam", rate: "92%" },
  { brand: "iTunes", rate: "90%" },
  { brand: "Google Play", rate: "89%" },
  { brand: "PlayStation", rate: "88%" },
  { brand: "Xbox", rate: "87%" },
  { brand: "Sephora", rate: "85%" },
  { brand: "Netflix", rate: "84%" },
  { brand: "Spotify", rate: "83%" },
  { brand: "Visa", rate: "82%" },
  { brand: "Mastercard", rate: "82%" },
  { brand: "Walmart", rate: "80%" },
  { brand: "eBay", rate: "79%" },
  { brand: "Apple Store", rate: "88%" },
  { brand: "Best Buy", rate: "78%" },
  { brand: "Target", rate: "77%" },
];

export const legalSections = [
  { id: "terms", href: "#terms", label: "Terms & Conditions" },
  { id: "privacy", href: "#privacy", label: "Privacy Policy" },
  { id: "cookies", href: "#cookies", label: "Cookie Policy" },
  { id: "aml", href: "#aml", label: "AML & Fraud Prevention" },
  { id: "disclaimer", href: "#disclaimer", label: "Disclaimer" },
] as const;
