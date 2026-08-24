"use client";

import { motion } from "framer-motion";
import { giftCards, type BrandId } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  ITunesCard,
  GooglePlayCard,
  XboxCard,
  PlayStationCard,
  EbayCard,
  SephoraCard,
  NetflixCard,
  SpotifyCard,
  VisaCard,
  MastercardCard,
  WalmartCard,
  TargetCard,
  BestBuyCard,
  AppleStoreCard,
  NikeCard,
  AdidasCard,
  MacysCard,
  NordstromCard,
} from "./brand-cards";

const brandCardMap: Record<
  BrandId,
  React.ComponentType<{ variant?: "large" | "small" | "mini"; className?: string }>
> = {
  amazon: AmazonCard,
  steam: SteamCard,
  itunes: ITunesCard,
  "google-play": GooglePlayCard,
  xbox: XboxCard,
  playstation: PlayStationCard,
  ebay: EbayCard,
  sephora: SephoraCard,
  netflix: NetflixCard,
  spotify: SpotifyCard,
  visa: VisaCard,
  mastercard: MastercardCard,
  walmart: WalmartCard,
  target: TargetCard,
  "best-buy": BestBuyCard,
  "apple-store": AppleStoreCard,
  nike: NikeCard,
  adidas: AdidasCard,
  macys: MacysCard,
  nordstrom: NordstromCard,
};

/**
 * Gallery — different layout from Jiro.
 * Features a "spotlight" arrangement: one big featured card + 5 supporting
 * cards in a tighter grid, followed by an asymmetric marquee strip.
 */
export function Gallery() {
  const marquee = [...giftCards, ...giftCards];

  return (
    <section id="brands" className="py-20 md:py-28 bg-[#FFFBF5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              Brand Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            Gift cards we trade every day
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            We accept every major gift card brand from the US, UK, EU, Canada,
            Australia and beyond. Don&apos;t see your card listed? Reach out —
            we likely still trade it.
          </p>
        </motion.div>

        {/* Spotlight featured card layout — 1 large + 5 medium */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12"
        >
          {/* Featured large card (Amazon) — spans 2 cols / 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="col-span-2 md:row-span-2 cursor-pointer group"
          >
            <div className="h-full md:h-[27rem]">
              <FeaturedCard />
            </div>
          </motion.div>

          {/* Smaller cards */}
          {giftCards.slice(1, 5).map((card, i) => {
            const CardComponent = brandCardMap[card.id];
            return (
              <motion.div
                key={`spotlight-${card.id}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="cursor-pointer"
              >
                <CardComponent variant="large" />
                <div className="mt-2 text-center">
                  <div className="text-xs font-semibold text-[#3b0764]">{card.name}</div>
                  {card.tag && (
                    <div className="text-[10px] text-[#6b4f7d]">{card.tag}</div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Secondary grid: next 6 cards in 3 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 mb-14">
          {giftCards.slice(5, 11).map((card, i) => {
            const CardComponent = brandCardMap[card.id];
            return (
              <motion.div
                key={`secondary-${card.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="cursor-pointer"
              >
                <CardComponent variant="large" />
              </motion.div>
            );
          })}
        </div>

        {/* Marquee strip with the rest */}
        <div className="relative">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#1f0a2e]">
              ...and many more
            </h3>
            <p className="text-sm text-[#5a4068] mt-1">
              Hover to pause. Don&apos;t see your card? Reach out, we probably
              trade it.
            </p>
          </div>

          <div className="marquee-container relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#FFFBF5] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#FFFBF5] to-transparent z-10" />

            <div className="flex gap-4 animate-marquee w-max py-2">
              {marquee.map((card, i) => {
                const CardComponent = brandCardMap[card.id];
                return (
                  <div key={`marquee-${i}`} className="flex flex-col items-center gap-2">
                    <CardComponent variant="small" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#5a4068] mb-5">
            Ready to trade? Get an instant rate quote on WhatsApp — most
            replies arrive within 2 minutes.
          </p>
          <WhatsAppButton
            label="Get Rate Quote"
            size="lg"
            variant="amber"
            message="Hello GraceOfGod Trading, which gift cards do you currently trade and what are your rates?"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * FeaturedCard — a custom large display card highlighting Amazon as the
 * flagship brand. Combines the brand card with marketing copy in a single
 * tall visual.
 */
function FeaturedCard() {
  return (
    <div className="relative h-full rounded-3xl overflow-hidden shadow-xl shadow-[#3b0764]/15 border border-white/10 bg-gradient-to-br from-[#FF9900] via-[#FFB84D] to-[#FF9900]">
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="80" cy="80" r="120" fill="white" opacity="0.3" />
          <circle cx="320" cy="500" r="150" fill="white" opacity="0.2" />
          <circle cx="350" cy="100" r="60" fill="white" opacity="0.25" />
        </svg>
      </div>

      <div className="relative h-full p-8 md:p-10 flex flex-col justify-between text-[#232F3E]">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] opacity-70 font-semibold mb-3">
            Featured Brand
          </div>
          <div className="flex items-center gap-3 mb-6">
            <AmazonLogo className="h-10 md:h-12" />
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Amazon
            </span>
          </div>
          <p className="text-sm md:text-base text-[#232F3E]/80 max-w-sm leading-relaxed">
            The world&apos;s most-traded gift card. We accept Amazon US, UK,
            EU, Canada and more — with some of the best rates in the industry
            and instant verification on WhatsApp.
          </p>
        </div>

        <div className="flex items-center justify-between mt-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-60 font-semibold">
              Gift Card
            </div>
            <div className="text-xs opacity-80 font-semibold mt-1">
              GraceOfGod Trading
            </div>
          </div>
          <div className="h-8 w-12 rounded-md bg-yellow-300/80 border border-white/40 shadow-inner" />
        </div>
      </div>
    </div>
  );
}

function AmazonLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className} fill="currentColor">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#232F3E">
        amazon
      </text>
      <path d="M 5 27 Q 50 35 95 27" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
