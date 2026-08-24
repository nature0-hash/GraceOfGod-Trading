"use client";

import { motion } from "framer-motion";
import { MessageCircle, Upload, ShieldCheck, Wallet, ArrowRight } from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const tradeSteps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Message us on WhatsApp",
    description:
      "Send us a quick message with the type and value of the gift card you want to trade. We respond in minutes, 24/7.",
    accent: "from-[#3b0764] to-[#5b0e8a]",
  },
  {
    icon: Upload,
    step: "02",
    title: "Share your gift card securely",
    description:
      "Send clear photos of the card or the digital code through our WhatsApp channel. We never ask for sensitive financial details beyond what's needed to verify the card.",
    accent: "from-[#5b0e8a] to-[#7c2d8a]",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "We verify the balance",
    description:
      "Our team validates the card balance within minutes. You receive an upfront quote with no hidden deductions — the rate we quote is the rate you get paid.",
    accent: "from-[#f59e0b] to-[#fbbf24]",
  },
  {
    icon: Wallet,
    step: "04",
    title: "Get paid instantly",
    description:
      "Choose your preferred payout — bank transfer, mobile money, or local payment app — and receive your funds. Most payouts complete within 5 to 15 minutes.",
    accent: "from-[#fb7185] to-[#f43f5e]",
  },
];

/**
 * HowItWorks — different layout from Jiro.
 * Vertical timeline on mobile, horizontal flowing cards on desktop.
 */
export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#3b0764]/5 border border-[#3b0764]/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              How it works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            From gift card to cash in 4 simple steps
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            Most trades complete within minutes. Here&apos;s the full process,
            start to finish.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3b0764]/30 via-[#f59e0b]/40 to-[#fb7185]/30" />

          {tradeSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-6 border border-[#3b0764]/10 hover:border-[#f59e0b]/40 hover:shadow-xl hover:shadow-[#3b0764]/8 transition-all duration-300 h-full flex flex-col">
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-lg`}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className="text-4xl font-extrabold text-[#3b0764]/10">
                    {step.step}
                  </span>
                </div>

                <h4 className="text-base md:text-lg font-bold text-[#1f0a2e] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-[#5a4068] leading-relaxed flex-1">
                  {step.description}
                </p>

                {/* Bottom connector arrow (desktop) */}
                {i < tradeSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-14 z-10 h-7 w-7 items-center justify-center rounded-full bg-white border border-[#3b0764]/15 shadow-md">
                    <ArrowRight className="h-3.5 w-3.5 text-[#3b0764]" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <WhatsAppButton
            label="Start Your Trade Now"
            size="lg"
            variant="brand"
            message="Hello GraceOfGod Trading, I'd like to start a trade. Can you walk me through it?"
          />
        </motion.div>
      </div>
    </section>
  );
}
