"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  PlayStationCard,
  ITunesCard,
  GooglePlayCard,
  VisaCard,
} from "./brand-cards";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden hero-pattern"
    >
      {/* Decorative dot grid */}
      <div className="absolute inset-0 dot-pattern opacity-50 pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-[#C97B3C]/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-[#0C3B2E]/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: editorial copy - 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E6DCC8] px-4 py-1.5 mb-6 shadow-sm">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#C97B3C] text-[#C97B3C]" />
                ))}
              </span>
              <span className="text-xs font-semibold text-[#0C3B2E]">
                Trusted by 12,000+ traders worldwide
              </span>
            </div>

            {/* Headline - bold display, mixed treatment */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#0C3B2E] leading-[1.04] tracking-tight">
              Turn gift cards into
              <br />
              <span className="relative inline-block mt-1">
                <span className="copper-text">real cash</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C50 3 150 3 298 9"
                    stroke="#C97B3C"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              in minutes.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-[#1A1A1A]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Palmbox Trading Limited is your secure, instant, and reliable gift
              card exchange. We pay the best rates for Amazon, Steam, iTunes,
              Google Play, Xbox, PlayStation and 20+ other brands, with payouts
              in under ten minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <WhatsAppButton
                label="Start trading now"
                size="lg"
                message="Hello Palmbox Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href="#cards"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0C3B2E] border-2 border-[#0C3B2E]/15 rounded-full hover:border-[#0C3B2E] hover:bg-[#0C3B2E]/[0.04] transition-all duration-300 hover:scale-[1.02]"
              >
                See supported cards
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            {/* Mini stats - horizontal row */}
            <div className="mt-10 flex items-center gap-6 lg:gap-10 justify-center lg:justify-start">
              <HeroStat value="20+" label="Card brands" />
              <span className="hidden sm:block h-10 w-px bg-[#E6DCC8]" />
              <HeroStat value="<10 min" label="Avg payout" />
              <span className="hidden sm:block h-10 w-px bg-[#E6DCC8]" />
              <HeroStat value="40+" label="Countries" />
            </div>
          </motion.div>

          {/* Right: unique card wall - 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5"
          >
            <CardWall />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center lg:text-left">
      <div className="text-2xl sm:text-3xl font-extrabold text-[#0C3B2E]">
        {value}
      </div>
      <div className="text-xs text-[#1A1A1A]/60 font-medium mt-0.5">{label}</div>
    </div>
  );
}

/**
 * Card wall - a unique overlapping diagonal composition of brand gift cards.
 * Replaces Jiro's "floating cards around medallion" with a layered tile layout.
 */
function CardWall() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* Background frame card */}
      <div className="absolute inset-0 -m-3 rounded-[2rem] bg-gradient-to-br from-[#0C3B2E] to-[#082920] shadow-2xl shadow-[#0C3B2E]/20 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#C97B3C]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-[#FAF6EE]">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#C97B3C]">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#C97B3C] font-semibold">
                Verified Payouts
              </div>
              <div className="text-xs font-semibold">Traded worldwide</div>
            </div>
          </div>
        </div>
        {/* Top brand chip */}
        <div className="absolute top-6 left-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-full px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-[#C97B3C] animate-pulse" />
          <span className="text-[10px] font-semibold text-white uppercase tracking-wider">
            Live trading floor
          </span>
        </div>
      </div>

      {/* Card composition - diagonal overlapping cards */}
      <div className="relative grid grid-cols-2 gap-4 p-6 sm:p-8">
        {/* Top-left big card - Amazon */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative z-30"
        >
          <AmazonCard variant="large" />
        </motion.div>

        {/* Top-right small cards stack */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative z-20 flex flex-col gap-3"
        >
          <SteamCard variant="large" />
        </motion.div>

        {/* Bottom-left small card */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative z-20"
        >
          <PlayStationCard variant="large" />
        </motion.div>

        {/* Bottom-right - iTunes large with floating cards peeking */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 2 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative z-30"
        >
          <ITunesCard variant="large" />
        </motion.div>
      </div>

      {/* Floating mini cards on edges (peeking from behind) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute -left-4 sm:-left-8 top-1/3 z-10 animate-float"
      >
        <GooglePlayCard variant="small" className="w-28 h-20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.5 }}
        className="absolute -right-4 sm:-right-8 bottom-1/4 z-10 animate-float-slow"
      >
        <VisaCard variant="small" className="w-28 h-20" />
      </motion.div>
    </div>
  );
}
