"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";
import {
  AmazonCard,
  SteamCard,
  PlayStationCard,
  ITunesCard,
  VisaCard,
  NetflixCard,
} from "./brand-cards";

/**
 * Hero — unique layout vs. the Jiro reference.
 *
 * Layout:
 *  - Centered eyebrow + headline + subhead + CTAs at the top.
 *  - Below: a LARGE central orbit animation where 6 brand gift cards
 *    continuously rotate around a central "Sunrise" medallion.
 *
 * The orbit uses pure CSS animations (defined in globals.css) so it runs
 * smoothly at 60fps without React re-renders. Cards stay upright while
 * orbiting thanks to the counter-rotation animation on `.orbit-card-upright`.
 */
export function Hero() {
  // Cards shown on the orbit. Mix of brand colors for visual rhythm.
  const orbitCards = [
    { Comp: AmazonCard, label: "Amazon" },
    { Comp: PlayStationCard, label: "PlayStation" },
    { Comp: SteamCard, label: "Steam" },
    { Comp: ITunesCard, label: "iTunes" },
    { Comp: VisaCard, label: "Visa" },
    { Comp: NetflixCard, label: "Netflix" },
  ];

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Background: warm radial gradients + dotted pattern */}
      <div className="absolute inset-0 warm-radial pointer-events-none" />
      <div className="absolute inset-0 dotted-pattern opacity-50 pointer-events-none" />

      {/* Decorative soft blobs */}
      <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#fb7185]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#3b0764]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: centered copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-[#3b0764]/10 px-4 py-1.5 mb-6 shadow-sm">
            <span className="flex items-center gap-1 text-[#f59e0b]">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#fb7185] animate-pulse" />
            </span>
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              Sunrise Gift Card Trading • Trusted globally
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1f0a2e] leading-[1.04] tracking-tight">
            Trade gift cards at the
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block">
              <span className="amber-text">speed of sunrise</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C50 3 150 3 298 9"
                  stroke="#fb7185"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5a4068] max-w-2xl mx-auto leading-relaxed">
            GRACEOFGOD TRADING AND LOGISTICS LIMITED converts your unused gift
            cards into cash — fast, secure, and at the best market rates.
            Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Visa and
            100+ more brands, paid out within minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppButton
              label="Get Instant Rate Quote"
              size="lg"
              variant="amber"
              message="Hello GraceOfGod Trading, I'd like to trade a gift card. Please share your current rates."
            />
            <a
              href="#brands"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#3b0764] border-2 border-[#3b0764]/15 rounded-full hover:border-[#3b0764] hover:bg-[#3b0764]/[0.04] transition-all duration-300"
            >
              See supported cards
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Below: orbit animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mt-14 md:mt-20"
        >
          <OrbitSystem orbitCards={orbitCards} />

          {/* Floating info chips around the orbit (decorative, non-interactive) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="hidden md:flex absolute top-6 -left-2 lg:left-0 z-20 items-center gap-2 bg-white/90 backdrop-blur rounded-2xl shadow-xl shadow-[#3b0764]/10 p-3 border border-[#3b0764]/8"
          >
            <div className="h-9 w-9 rounded-xl bg-[#3b0764]/10 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5 text-[#3b0764]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1f0a2e]">100% Secure</div>
              <div className="text-[10px] text-[#6b4f7d]">Verified payouts</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="hidden md:flex absolute top-1/3 -right-2 lg:right-0 z-20 items-center gap-2 bg-white/90 backdrop-blur rounded-2xl shadow-xl shadow-[#3b0764]/10 p-3 border border-[#3b0764]/8"
          >
            <div className="h-9 w-9 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center">
              <Zap className="h-5 w-5 text-[#f59e0b]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1f0a2e]">Instant Pay</div>
              <div className="text-[10px] text-[#6b4f7d]">~5 min average</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 items-center gap-2 bg-white/90 backdrop-blur rounded-2xl shadow-xl shadow-[#3b0764]/10 p-3 border border-[#3b0764]/8"
          >
            <div className="h-9 w-9 rounded-xl bg-[#fb7185]/15 flex items-center justify-center">
              <Globe2 className="h-5 w-5 text-[#fb7185]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1f0a2e]">40+ Countries</div>
              <div className="text-[10px] text-[#6b4f7d]">Worldwide payouts</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mini stats row (mobile-friendly) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto"
        >
          <Stat value="50K+" label="Trades completed" />
          <Stat value="120+" label="Card types" />
          <Stat value="40+" label="Countries served" />
          <Stat value="24/7" label="WhatsApp support" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl border border-[#3b0764]/8 p-4 text-center">
      <div className="text-2xl md:text-3xl font-extrabold text-[#3b0764]">
        {value}
      </div>
      <div className="text-[11px] md:text-xs text-[#6b4f7d] font-medium mt-0.5 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ============================================================================
 * OrbitSystem — the rotating gift-card constellation.
 * ========================================================================== */
function OrbitSystem({
  orbitCards,
}: {
  orbitCards: { Comp: typeof AmazonCard; label: string }[];
}) {
  const N = orbitCards.length;
  const angleStep = 360 / N;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] sm:max-w-[640px]">
      {/* Outer atmospheric glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3b0764]/15 via-[#f59e0b]/10 to-[#fb7185]/15 blur-3xl" />

      {/* Decorative guide rings (concentric, slow spin) */}
      <div className="absolute inset-[6%] rounded-full border border-dashed border-[#3b0764]/15 animate-slow-spin pointer-events-none" />
      <div className="absolute inset-[18%] rounded-full border border-[#f59e0b]/25 animate-slow-spin-reverse pointer-events-none" />
      <div className="absolute inset-[32%] rounded-full border border-dashed border-[#3b0764]/15 animate-slow-spin pointer-events-none" />

      {/* Center medallion */}
      <div className="absolute inset-[36%] z-10 rounded-full bg-white shadow-2xl shadow-[#3b0764]/30 border border-[#f59e0b]/30 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white via-[#FFFBF5] to-[#faf5ff]" />
        <div className="relative text-center px-2">
          <div className="inline-flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] shadow-lg shadow-[#3b0764]/40 mb-2 md:mb-3">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f59e0b]/40 via-transparent to-[#fb7185]/30" />
            <svg
              viewBox="0 0 24 24"
              className="relative h-6 w-6 md:h-8 md:w-8 text-[#fbbf24]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3.5" fill="currentColor" />
              <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.05 1.05M17.35 17.35l1.05 1.05M5.6 18.4l1.05-1.05M17.35 6.65l1.05-1.05" />
            </svg>
          </div>
          <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#f59e0b] font-bold">
            Sunrise
          </div>
          <div className="text-[10px] md:text-xs font-extrabold text-[#3b0764] tracking-tight">
            GraceOfGod
          </div>
          <div className="text-[8px] md:text-[9px] text-[#6b4f7d] tracking-wider">
            TRADING
          </div>
        </div>
      </div>

      {/* Rotating frame */}
      <div className="orbit-system absolute inset-0">
        {orbitCards.map(({ Comp, label }, i) => {
          const angle = angleStep * i;
          return (
            <div
              key={label}
              className="orbit-slot absolute inset-0"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-radius))) rotate(${-angle}deg)`,
              }}
            >
              {/* Counter-rotating wrapper keeps the card upright.
                  The translate(-50%,-50%) inside the keyframe centers the card
                  around the slot's center (which is the orbit point). */}
              <div className="orbit-card-upright">
                <Comp variant="mini" />
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
