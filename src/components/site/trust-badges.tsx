"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { trustBadges } from "@/lib/site-config";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  zap: Zap,
  globe: Globe,
  layers: Layers,
};

export function TrustBadges() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF6EE]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0C3B2E]/8 border border-[#0C3B2E]/15 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0C3B2E] uppercase tracking-wider">
              Why Palmbox
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0C3B2E] tracking-tight">
            Built for traders who value speed &amp; trust
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/70 leading-relaxed">
            We&apos;ve designed every step around what matters most to you: a
            fast, secure payout at the best rate, with real humans on the other
            end of WhatsApp whenever you need them.
          </p>
        </motion.div>

        {/* Trust cards - vertical layout with stat on top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-6 border border-[#E6DCC8] hover:border-[#C97B3C]/50 hover:shadow-xl hover:shadow-[#0C3B2E]/8 transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C3B2E] via-[#C97B3C] to-[#0C3B2E] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Big stat at top */}
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-[#0C3B2E] leading-none">
                      {badge.stat}
                    </div>
                    <div className="text-[10px] text-[#C97B3C] uppercase tracking-[0.18em] font-semibold mt-1">
                      {badge.statLabel}
                    </div>
                  </div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F1E9D9] text-[#0C3B2E] group-hover:bg-[#0C3B2E] group-hover:text-[#C97B3C] transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0C3B2E] mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
