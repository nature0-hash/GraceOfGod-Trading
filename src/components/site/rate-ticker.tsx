"use client";

import { liveRates } from "@/lib/site-config";
import { TrendingUp } from "lucide-react";

/**
 * Live Rate Ticker - a unique scrolling marquee strip showing
 * indicative payout rates for each gift card brand.
 * This section is unique to Palmbox and is not in the Jiro reference.
 */
export function RateTicker() {
  // Duplicate for the infinite marquee
  const items = [...liveRates, ...liveRates];

  return (
    <section
      aria-label="Indicative payout rates"
      className="relative bg-[#0C3B2E] text-white py-4 overflow-hidden border-y border-[#C97B3C]/20"
    >
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 stripe-pattern pointer-events-none" />

      <div className="relative flex items-center">
        {/* Left label - fixed */}
        <div className="hidden md:flex items-center gap-2 pl-6 pr-5 py-1 mr-2 bg-[#C97B3C] rounded-r-full z-10 flex-shrink-0">
          <TrendingUp className="h-4 w-4" />
          <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Live Rates
          </span>
        </div>

        {/* Marquee strip */}
        <div className="marquee-container relative overflow-hidden flex-1">
          <div className="flex gap-8 animate-marquee-fast w-max py-1">
            {items.map((item, i) => (
              <div
                key={`rate-${i}`}
                className="flex items-center gap-2 whitespace-nowrap text-sm"
              >
                <span className="font-semibold text-[#FAF6EE]/90">
                  {item.brand}
                </span>
                <span className="text-[#C97B3C] font-extrabold">
                  {item.rate}
                </span>
                <span className="text-white/30">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer line */}
      <div className="relative text-center mt-1.5 px-4">
        <span className="text-[10px] text-white/50 italic">
          Indicative payout rates, updated daily. Final rate confirmed on WhatsApp.
        </span>
      </div>
    </section>
  );
}
