"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Globe2,
  ShieldCheck,
  Award,
  Users,
  Sparkles,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We pay what we quote. No bait-and-switch, no hidden deductions, no last-minute changes. Every trade is transparent from start to finish, every single time.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to a high bar on every trade: fast verification, accurate rates, and reliable payouts. If something goes wrong, we make it right. No excuses.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Real humans answer your WhatsApp within minutes. We treat every client, big or small, first-time or long-time, with the same respect and attention.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "We trade across continents and time zones. Wherever you are in the world, we have a payout option that works for you: bank, mobile money, or local app.",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Happy traders" },
  { icon: Award, value: "120+", label: "Card types" },
  { icon: Globe2, value: "40+", label: "Countries served" },
  { icon: ShieldCheck, value: "100%", label: "Secure payouts" },
];

/**
 * About: different layout from Jiro.
 * Alternating row layout: text/visual on each side, with mission & vision
 * stacked horizontally (not vertically) and stats as a horizontal band.
 */
export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-[#FFFBF5] to-[#faf5ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 px-4 py-1.5 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
              <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
                About GraceOfGod
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
              A sunrise of trust for gift card traders worldwide
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#5a4068] leading-relaxed">
              GRACEOFGOD TRADING AND LOGISTICS LIMITED is a global gift card
              trading company built on trust, speed, and fairness. We help
              individuals and businesses convert unused gift cards into real
              cash: quickly, securely, and at the best possible rates.
            </p>
            <p className="mt-4 text-base text-[#5a4068] leading-relaxed">
              What started as a small WhatsApp-based operation has grown into a
              trusted partner for thousands of traders across more than 40
              countries. We trade every major gift card brand, from Amazon
              and Steam to iTunes, Google Play, Xbox, PlayStation, Visa,
              Mastercard and many more, and pay out through bank transfer,
              mobile money, and local payment channels.
            </p>
            <p className="mt-4 text-base text-[#5a4068] leading-relaxed">
              Our mission is simple: make gift card trading fast, transparent,
              and accessible to everyone, everywhere. When you trade with us,
              you get upfront rates, real-time updates, and guaranteed payouts
              every single time.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Get in Touch"
                size="lg"
                variant="amber"
                message="Hello GraceOfGod Trading, I'd like to learn more about your services."
              />
            </div>
          </motion.div>

          {/* Right: mission & vision cards side-by-side + stats below */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-5">
              <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#3b0764]/10 shadow-lg shadow-[#3b0764]/5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b0764] to-[#5b0e8a] text-white mb-4 shadow-md shadow-[#3b0764]/30">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1f0a2e] mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-[#5a4068] leading-relaxed">
                  To make gift card trading simple, fast, and fair for everyone,
                  delivering instant payouts and the most competitive rates,
                  every single time.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-7 border border-[#3b0764]/10 shadow-lg shadow-[#3b0764]/5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#fb7185] text-white mb-4 shadow-md shadow-[#f59e0b]/30">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#1f0a2e] mb-2">
                  Our Vision
                </h3>
                <p className="text-sm text-[#5a4068] leading-relaxed">
                  To be the most trusted gift card trading partner worldwide,
                  known for integrity, speed, and the human touch that makes
                  every client feel valued.
                </p>
              </div>
            </div>

            {/* Stats band */}
            <div className="bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] rounded-3xl p-6 md:p-7 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <circle cx="380" cy="20" r="60" fill="#f59e0b" opacity="0.3" />
                  <circle cx="20" cy="180" r="80" fill="#fb7185" opacity="0.3" />
                </svg>
              </div>
              <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <s.icon className="h-5 w-5 mx-auto mb-1.5 text-[#fbbf24]" />
                    <div className="text-xl md:text-2xl font-extrabold">{s.value}</div>
                    <div className="text-[10px] text-white/70 uppercase tracking-wider mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f0a2e] mb-3">
            What we stand for
          </h3>
          <p className="text-[#5a4068]">
            Four values guide every trade we make and every conversation we
            have with our clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-[#3b0764]/10 hover:border-[#f59e0b]/40 hover:shadow-lg hover:shadow-[#3b0764]/5 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b0764] to-[#5b0e8a] text-white mb-4 shadow-md shadow-[#3b0764]/20">
                <v.icon className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#1f0a2e] mb-2">
                {v.title}
              </h4>
              <p className="text-sm text-[#5a4068] leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
