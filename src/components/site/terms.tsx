"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgePercent,
  AlertTriangle,
  FileText,
} from "lucide-react";

const coreTerms = [
  {
    icon: ShieldCheck,
    title: "Card Ownership",
    description:
      "You must own any gift card you trade with us. Stolen, fraudulent, or unauthorized cards are strictly prohibited and will be rejected immediately. By submitting a card, you confirm that you are the legitimate owner.",
  },
  {
    icon: Clock,
    title: "Processing Times",
    description:
      "Payment times are estimates, not guarantees. Most trades complete within minutes, but verification and external factors may cause delays. We always keep you informed of your trade status in real time.",
  },
  {
    icon: BadgePercent,
    title: "Rates May Change",
    description:
      "Gift card rates fluctuate based on market conditions. The rate quoted at the time of trade is the rate you receive, and rates may change without notice. We benchmark daily to stay competitive.",
  },
  {
    icon: AlertTriangle,
    title: "Trade Rejections",
    description:
      "We reserve the right to reject any trade for reasons including invalid cards, already redeemed cards, mismatched values, or suspicious activity. In such cases, we explain the reason and return your card.",
  },
];

/**
 * Terms: different layout from Jiro.
 * Two-column compact card grid + a wider fraud-prevention banner.
 */
export function Terms() {
  return (
    <section id="terms" className="py-20 md:py-28 bg-[#faf5ff]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 px-4 py-1.5 mb-4">
            <FileText className="h-4 w-4 text-[#f59e0b]" />
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              Terms &amp; Conditions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            Trading terms &amp; conditions
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            Please review the core terms that govern your gift card trades with
            GRACEOFGOD TRADING AND LOGISTICS LIMITED. By trading with us, you
            agree to these terms.
          </p>
        </motion.div>

        {/* Core terms grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {coreTerms.map((term, i) => (
            <motion.div
              key={term.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-[#3b0764]/10 hover:border-[#f59e0b]/40 hover:shadow-lg hover:shadow-[#3b0764]/8 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b0764] to-[#5b0e8a] text-white mb-4 shadow-md shadow-[#3b0764]/20">
                <term.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-[#1f0a2e] mb-2">
                {term.title}
              </h3>
              <p className="text-sm text-[#5a4068] leading-relaxed">
                {term.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Verification & Fraud notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#f59e0b]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#fb7185]/15 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f59e0b] text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Verification required before payment
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                All gift cards are verified for balance and validity before
                payment is released. This protects both you and GraceOfGod
                Trading from fraud and ensures every trade is legitimate.
                Verification typically completes within minutes.
              </p>
            </div>
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fb7185]/25 text-[#fb7185] mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Fraud prevention &amp; liability
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                Fraudulent activity is strictly prohibited and may be reported
                to the appropriate authorities. GRACEOFGOD TRADING AND
                LOGISTICS LIMITED is not liable for losses resulting from
                unauthorized trades, invalid cards, or failure to follow these
                terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Acceptance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center text-xs text-[#6b4f7d] max-w-2xl mx-auto"
        >
          By initiating a trade with GRACEOFGOD TRADING AND LOGISTICS LIMITED,
          you acknowledge that you have read and agree to these Terms &amp;
          Conditions. For any questions, contact us on WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
