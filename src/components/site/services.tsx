"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, BadgePercent, Globe2, Headset, Gift, TrendingUp } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const features = [
  {
    icon: Clock,
    title: "Instant Verification",
    description:
      "Submit your gift card and we verify the balance within minutes. No long waits, no back-and-forth — just fast confirmation and a clear quote.",
  },
  {
    icon: BadgePercent,
    title: "Best Market Rates",
    description:
      "We benchmark our rates daily against live market data so you always get the most competitive payout for every card type and value.",
  },
  {
    icon: Globe2,
    title: "Worldwide Coverage",
    description:
      "Trade from any country. We accept gift cards from the US, UK, EU, Canada, Australia and many more regions, with payouts to match your location.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Real humans on WhatsApp 24/7. Get answers, resolve issues, and track your trade in real time. We treat every client like our only client.",
  },
];

/**
 * Services — different layout from Jiro.
 * Compact hero-style feature card at top, followed by an alternating
 * split-feature visual that showcases the trading workflow.
 */
export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf5ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3b0764]/8 border border-[#3b0764]/15 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            Gift card trading, reimagined
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            The simple, secure way to convert unused gift cards into cash. We
            trade all major brands with the best rates and fastest payouts in
            the industry.
          </p>
        </motion.div>

        {/* Big spotlight banner (different from Jiro's) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] mb-16 md:mb-20"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#f59e0b]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#fb7185]/20 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-20 pointer-events-none dotted-pattern" />

          <div className="relative grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-14">
            {/* Left: copy */}
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-[#fbbf24] mb-6">
                <Gift className="h-7 w-7" />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Trade any gift card for instant cash
              </h3>
              <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-md">
                Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora,
                Visa, Mastercard, Walmart, Target, Best Buy, Apple Store, Nike,
                Adidas, Macy&apos;s, Nordstrom and many more. Every major brand,
                every single day.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
                <SpotlightStat value="~5 min" label="Avg payout" />
                <SpotlightStat value="120+" label="Card types" />
                <SpotlightStat value="100%" label="Secure" />
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  label="Trade Now"
                  size="lg"
                  variant="amber"
                  message="Hello GraceOfGod Trading, I'd like to trade a gift card. Please share your current rates."
                />
                <a
                  href="#brands"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white hover:text-[#fbbf24] transition-colors group"
                >
                  View supported cards
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: feature checklist */}
            <div className="grid sm:grid-cols-2 gap-3 self-center">
              {[
                { icon: ShieldCheck, label: "All major gift card brands supported" },
                { icon: TrendingUp, label: "Transparent, upfront rates" },
                { icon: Globe2, label: "Bank transfer, mobile money & local pay" },
                { icon: Gift, label: "Bulk trading available for resellers" },
                { icon: BadgePercent, label: "No hidden fees, ever" },
                { icon: Headset, label: "WhatsApp support 24/7" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl p-4 flex items-start gap-3 text-white"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#f59e0b]/20 backdrop-blur flex-shrink-0">
                    <item.icon className="h-4 w-4 text-[#fbbf24]" />
                  </span>
                  <span className="text-xs md:text-sm font-medium leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-[#3b0764]/10 hover:shadow-lg hover:shadow-[#3b0764]/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f59e0b]/15 to-[#fb7185]/15 text-[#3b0764] mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#1f0a2e] mb-1.5">
                {f.title}
              </h4>
              <p className="text-sm text-[#5a4068] leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/8 backdrop-blur p-3 border border-white/10 text-center">
      <div className="text-base md:text-lg font-bold text-white">{value}</div>
      <div className="text-[10px] text-white/70 uppercase tracking-wider mt-0.5">
        {label}
      </div>
    </div>
  );
}
