/**
 * Site-wide configuration for GRACEOFGOD TRADING AND LOGISTICS LIMITED.
 *
 * IMPORTANT: The WhatsApp number is intentionally ONLY referenced here as data.
 * It is rendered visibly on the page ONLY in the Footer's "Contact Us" block.
 * Everywhere else, WhatsApp actions use the button (which opens wa.me) WITHOUT
 * displaying the actual number.
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
  /** Optional short tagline used on gallery cards */
  tag?: string;
};

export const siteConfig = {
  brand: "GRACEOFGOD TRADING AND LOGISTICS LIMITED",
  brandShort: "GraceOfGod Trading",
  /** Tiny eyebrow used in navbar / hero */
  brandEyebrow: "Sunrise Trading",
  tagline: "Sunrise Gift Card Trading — Fast, Fair, Global",
  description:
    "GRACEOFGOD TRADING AND LOGISTICS LIMITED is a global gift card trading partner offering secure transactions, instant verification, and the best market rates for gift cards worldwide.",

  // Real company WhatsApp number (used by wa.me links; only DISPLAYED in footer).
  whatsappNumber: "2348105369172",
  whatsappDisplay: "+234 810 536 9172",

  // Public email (shown in footer contact block).
  email: "hello@sunrisetrading.com",
  emailDisplay: "hello@sunrisetrading.com",

  // Working hours
  hours: "Mon – Sat: 8:00 AM – 10:00 PM (WAT)",
  hoursSun: "Sun: 12 PM – 10 PM (WAT)",

  social: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

/**
 * Build a WhatsApp deep-link. Number is hidden from the visible UI everywhere
 * except the footer — but the link itself still works correctly.
 */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Brands", href: "#brands" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
] as const;

export const trustBadges = [
  {
    icon: "shield-check",
    title: "Bank-Grade Security",
    description:
      "Every transaction is processed through verified, encrypted channels. We protect your cards and your payouts from start to finish.",
  },
  {
    icon: "zap",
    title: "Instant Verification",
    description:
      "Submit your card and our team verifies the balance within minutes. No long waits, no endless back-and-forth — just fast confirmation.",
  },
  {
    icon: "globe",
    title: "Global Coverage",
    description:
      "We trade with clients across Africa, Europe, North America, Asia and beyond. Wherever you are, we have a payout method that works.",
  },
  {
    icon: "layers",
    title: "All Card Types",
    description:
      "Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora, Visa, Mastercard and many more — we accept them all, every single day.",
  },
] as const;

export const giftCards: GiftCardBrand[] = [
  { id: "amazon", name: "Amazon", tag: "USD · GBP · EUR · CAD" },
  { id: "steam", name: "Steam", tag: "Wallet top-ups" },
  { id: "itunes", name: "iTunes", tag: "Apple gift" },
  { id: "google-play", name: "Google Play", tag: "All regions" },
  { id: "xbox", name: "Xbox", tag: "Game pass" },
  { id: "playstation", name: "PlayStation", tag: "PSN wallet" },
  { id: "ebay", name: "eBay", tag: "Marketplace" },
  { id: "sephora", name: "Sephora", tag: "Beauty" },
  { id: "netflix", name: "Netflix", tag: "Streaming" },
  { id: "spotify", name: "Spotify", tag: "Premium" },
  { id: "visa", name: "Visa", tag: "Prepaid" },
  { id: "mastercard", name: "Mastercard", tag: "Prepaid" },
  { id: "walmart", name: "Walmart", tag: "Retail" },
  { id: "target", name: "Target", tag: "Retail" },
  { id: "best-buy", name: "Best Buy", tag: "Electronics" },
  { id: "apple-store", name: "Apple Store", tag: "App Store & iTunes" },
  { id: "nike", name: "Nike", tag: "Apparel" },
  { id: "adidas", name: "Adidas", tag: "Apparel" },
  { id: "macys", name: "Macy's", tag: "Department store" },
  { id: "nordstrom", name: "Nordstrom", tag: "Luxury retail" },
];

export const stats = [
  { value: "50K+", label: "Trades completed" },
  { value: "120+", label: "Card types supported" },
  { value: "40+", label: "Countries served" },
  { value: "24/7", label: "WhatsApp support" },
] as const;

export const faqs = [
  {
    q: "How long does it take to get paid after I submit my gift card?",
    a: "Most trades are completed within 5 to 15 minutes of submitting your card. Once we verify the balance, we immediately arrange your payout through your preferred method — bank transfer, mobile money, or another local payment option. Complex or high-value trades may take slightly longer, but you will always know the status in real time through WhatsApp.",
  },
  {
    q: "Which gift card brands do you accept?",
    a: "We trade every major gift card brand including Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, eBay, Sephora, Netflix, Spotify, Visa, Mastercard, Walmart, Target, Best Buy, Apple Store, Nike, Adidas, Macy's, Nordstrom and many more. If you don't see your card listed, message us on WhatsApp — we likely still trade it.",
  },
  {
    q: "How do you determine the rate for my gift card?",
    a: "Our rates are benchmarked daily against live market data so you always receive a fair, competitive payout. The exact rate depends on the card brand, the card value, the country of origin, and current market demand. Once we confirm your card details on WhatsApp, we send you an upfront quote — no hidden deductions, no last-minute changes.",
  },
  {
    q: "What payment methods do you support for payouts?",
    a: "We pay out via bank transfer, mobile money (including M-Pesa, GTBank, Access Bank, OPay and more), local payment apps, and select stablecoin options for international clients. Tell us your country and preferred method on WhatsApp, and we'll confirm the best payout channel for you.",
  },
  {
    q: "Is it safe to trade gift cards with you?",
    a: "Yes. Every card is verified through secure, authorized channels and every payout is recorded. We have completed thousands of trades with clients across more than 40 countries, and our reputation is built on paying exactly what we quote. We never ask for sensitive financial information beyond what's required to process your payout.",
  },
  {
    q: "Can I trade gift cards in bulk?",
    a: "Absolutely. We work with individual traders, retailers, and bulk resellers. Bulk trades often unlock better rates and faster processing. Message us on WhatsApp with your card types and total value, and our team will prepare a custom bulk-rate quote for you.",
  },
] as const;
