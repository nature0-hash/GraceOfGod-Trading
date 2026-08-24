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

const brandCardMap: Record<BrandId, React.ComponentType<{ variant?: "large" | "small"; className?: string }>> = {
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

export function Gallery() {
  // Marquee list of all card names for the bottom scrolling strip
  const marquee = [...giftCards, ...giftCards];

  return (
    <section
      id="cards"
      className="py-20 md:py-28 bg-[#FAF6EE] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C97B3C]/10 border border-[#C97B3C]/25 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0C3B2E] uppercase tracking-wider">
              Gallery
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0C3B2E] tracking-tight">
            Every gift card you can trade
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/70">
            We accept and pay out for all major gift card brands from around the
            world. Don&apos;t see your card? Just ask, we likely support it.
          </p>
        </motion.div>

        {/* Uniform responsive grid, well arranged on every screen size.
            Mobile: 2 cols, Tablet: 3 cols, Desktop: 4 cols, Wide: 5 cols.
            All cards use the same variant so rows stay perfectly aligned. */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5 mb-16">
          {giftCards.map((card, i) => {
            const CardComponent = brandCardMap[card.id];
            return (
              <motion.div
                key={`card-${card.id}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.2 : 1.2 }}
                className="cursor-pointer"
              >
                <CardComponent variant="large" />
              </motion.div>
            );
          })}
        </div>

        {/* Marquee strip showing brand names */}
        <div className="relative">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#0C3B2E]">
              ...and we&apos;re always adding more
            </h3>
            <p className="text-sm text-[#1A1A1A]/70 mt-1">
              Hover to pause the strip. Don&apos;t see your card? Reach out, we
              probably trade it.
            </p>
          </div>

          <div className="marquee-container relative overflow-hidden bg-[#0C3B2E] rounded-2xl py-5 px-4">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0C3B2E] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0C3B2E] to-transparent z-10" />

            <div className="flex gap-3 animate-marquee w-max">
              {marquee.map((card, i) => (
                <div
                  key={`marquee-${i}`}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C97B3C]" />
                  <span className="text-sm font-semibold text-white whitespace-nowrap">
                    {card.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#1A1A1A]/70 mb-5">
            Ready to trade? Get an instant rate quote on WhatsApp.
          </p>
          <WhatsAppButton
            label="Get Rate Quote"
            size="lg"
            message="Hello Palmbox Trading, which gift cards do you currently trade and what are your rates?"
          />
        </div>
      </div>
    </section>
  );
}
