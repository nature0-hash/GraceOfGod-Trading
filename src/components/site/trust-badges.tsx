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

/**
 * TrustBadges — different layout from Jiro.
 * Asymmetric staggered 4-card row with connecting line and large numeric labels.
 */
export function TrustBadges() {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#3b0764]/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3b0764]/5 border border-[#3b0764]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              Why trade with us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            Built on trust, speed, and fairness
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            Every trade is handled with the same care — whether it&apos;s your
            first $25 card or your thousandth bulk order. Here&apos;s what
            every client gets when they trade with GraceOfGod.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustBadges.map((badge, i) => {
            const Icon = iconMap[badge.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-white rounded-3xl p-6 md:p-7 border border-[#3b0764]/10 hover:border-[#f59e0b]/50 hover:shadow-xl hover:shadow-[#3b0764]/10 transition-all duration-300"
              >
                {/* Number marker */}
                <span className="absolute top-6 right-6 text-5xl font-extrabold text-[#3b0764]/5 group-hover:text-[#f59e0b]/15 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] text-white shadow-lg shadow-[#3b0764]/25 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-[#1f0a2e] mb-2">
                  {badge.title}
                </h3>
                <p className="text-sm text-[#5a4068] leading-relaxed">
                  {badge.description}
                </p>

                {/* Bottom accent bar */}
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fb7185] group-hover:w-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
