"use client";

import { motion } from "framer-motion";
import {
  Gift,
  TrendingUp,
  Clock,
  BadgePercent,
  Globe2,
  Headset,
  ArrowRight,
  Check,
  MessageCircle,
  Upload,
  Wallet,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const features = [
  {
    icon: Clock,
    title: "Instant Verification",
    description:
      "Submit your gift card and we verify balance within minutes. No long waits, no back-and-forth."
  },
  {
    icon: BadgePercent,
    title: "Best Market Rates",
    description:
      "We benchmark our rates daily so you always get the most competitive payout for every card type.",
  },
  {
    icon: Globe2,
    title: "Worldwide Coverage",
    description:
      "Trade from any country. We accept gift cards from the US, UK, EU, Canada, Australia and more.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Real humans on WhatsApp 24/7. Get answers, resolve issues, and track your trade in real time.",
  },
];

const tradeSteps = [
  {
    step: "01",
    title: "Message us on WhatsApp",
    description:
      "Send us a quick hello on WhatsApp with the type and value of the gift card you want to trade. We reply in minutes.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "Share your gift card",
    description:
      "Send clear photos of the card or the digital code through our secure WhatsApp channel. Your data stays private.",
    icon: Upload,
  },
  {
    step: "03",
    title: "We verify the balance",
    description:
      "Our team validates the card balance with the issuer and confirms your exact payout rate, upfront and transparent.",
    icon: Check,
  },
  {
    step: "04",
    title: "Get paid instantly",
    description:
      "Choose your preferred payout: bank transfer, mobile money, or local payment. Receive your cash in minutes.",
    icon: Wallet,
  },
];

export function Services() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C97B3C]/10 border border-[#C97B3C]/25 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#0C3B2E] uppercase tracking-wider">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0C3B2E] tracking-tight">
            From gift card to cash, in four simple steps
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/70">
            Most trades complete within ten minutes of your first message. No
            accounts, no forms, no waiting on hold.
          </p>
        </motion.div>

        {/* Service spotlight card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0C3B2E] mb-16 md:mb-20"
        >
          {/* Decorative pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#C97B3C]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#145E48]/30 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-0">
            {/* Left visual */}
            <div className="relative p-8 md:p-12 flex flex-col justify-between min-h-[340px] border-b lg:border-b-0 lg:border-r border-white/10">
              <div>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C97B3C] text-white mb-6 shadow-lg shadow-[#C97B3C]/30">
                  <Gift className="h-8 w-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Trade any gift card for instant cash
                </h3>
                <p className="mt-3 text-sm text-white/70 max-w-sm">
                  Amazon, Steam, iTunes, Google Play, Xbox, PlayStation, Sephora,
                  Visa, Mastercard and many more. All in one place.
                </p>
              </div>

              <div className="relative mt-8 grid grid-cols-3 gap-3">
                <SpotlightStat value="~10 min" label="Avg payout" />
                <SpotlightStat value="20+" label="Card brands" />
                <SpotlightStat value="Secure" label="Always" />
              </div>
            </div>

            {/* Right copy */}
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-[#C97B3C]" />
                <span className="text-xs font-semibold text-[#C97B3C] uppercase tracking-wider">
                  The Palmbox Advantage
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get the most value from your gift cards
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Palmbox Trading Limited gives you a smooth, transparent, and
                fast way to exchange gift cards for cash. We work with individual
                traders, retailers, and bulk resellers, always with upfront
                rates, real-time updates, and guaranteed payouts.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "All major gift card brands supported",
                  "Transparent, upfront rates",
                  "Bank transfer, mobile money & local pay",
                  "Bulk trading available for resellers",
                  "No hidden fees, ever",
                  "WhatsApp support 24/7",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/85"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C97B3C]/20 flex-shrink-0">
                      <Check className="h-3 w-3 text-[#C97B3C]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  label="Trade Now"
                  size="lg"
                  message="Hello Palmbox Trading, I'd like to trade a gift card. Please share your current rates."
                />
                <a
                  href="#cards"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white hover:text-[#C97B3C] transition-colors group"
                >
                  View supported cards
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid - 4 across */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#E6DCC8] hover:border-[#C97B3C]/40 hover:shadow-lg hover:shadow-[#0C3B2E]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0C3B2E] text-[#C97B3C] mb-4">
                <f.icon className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-[#0C3B2E] mb-1.5">
                {f.title}
              </h4>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trade journey - vertical timeline with sticky progress rail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0C3B2E] mb-3">
            The Palmbox trade journey
          </h3>
          <p className="text-[#1A1A1A]/70">
            Four steps from gift card to cash. Track each one as it happens,
            right inside WhatsApp.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical rail */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#E6DCC8] md:-translate-x-px" />
          {/* Progress fill (decorative, full height) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0C3B2E] via-[#C97B3C] to-[#0C3B2E] md:-translate-x-px opacity-60" />

          <div className="space-y-10 md:space-y-16">
            {tradeSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Rail node */}
                <div className="absolute left-6 md:left-1/2 top-6 md:top-8 -translate-x-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-[#C97B3C] border-4 border-[#FAF6EE] shadow-md" />
                </div>

                {/* Card */}
                <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 === 1 ? "md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className="bg-white rounded-2xl p-6 border border-[#E6DCC8] hover:shadow-lg hover:shadow-[#0C3B2E]/5 hover:border-[#C97B3C]/40 transition-all">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse md:justify-end" : ""}`}>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0C3B2E] text-[#C97B3C] flex-shrink-0">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="text-3xl font-extrabold text-[#C97B3C]/30 leading-none">
                        {s.step}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#0C3B2E] mb-2">
                      {s.title}
                    </h4>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative mt-12 text-center pl-16 md:pl-0"
          >
            <WhatsAppButton
              label="Start your first trade"
              size="lg"
              message="Hello Palmbox Trading, I'd like to start my first trade. Please guide me."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpotlightStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/8 backdrop-blur p-3 border border-white/10">
      <div className="text-base font-bold text-white">{value}</div>
      <div className="text-[10px] text-white/70 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
