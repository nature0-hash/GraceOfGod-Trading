"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppButton } from "./whatsapp-button";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We pay what we quote. No bait-and-switch, no hidden deductions. Every trade is transparent from start to finish.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to a high bar on every trade: fast verification, accurate rates, and reliable payouts.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Real people answer your WhatsApp within minutes. We treat every client, big or small, with the same respect.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "We trade across continents and time zones. Wherever you are, we have a payout option that works for you.",
  },
];

const stats = [
  { icon: Users, value: "12K+", label: "Happy traders" },
  { icon: Award, value: "20+", label: "Card brands" },
  { icon: Globe2, value: "40+", label: "Countries served" },
  { icon: ShieldCheck, value: "Always", label: "Secure payouts" },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C97B3C]/10 border border-[#C97B3C]/25 px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-[#0C3B2E] uppercase tracking-wider">
                About Palmbox
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0C3B2E] tracking-tight">
              Who we are
            </h2>
            <p className="mt-5 text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed">
              Palmbox Trading Limited is a global gift card trading company
              built on trust, speed, and fairness. We help individuals and
              businesses convert unused gift cards into real cash, quickly,
              securely, and at the best possible rates.
            </p>
            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
              What started as a small WhatsApp-based operation has grown into a
              trusted partner for thousands of traders across more than 40
              countries. We trade every major gift card brand, from Amazon and
              Steam to iTunes, Google Play, Xbox, PlayStation and many more, and
              pay out through bank transfer, mobile money, and local payment
              channels.
            </p>
            <p className="mt-4 text-base text-[#1A1A1A]/70 leading-relaxed">
              Our mission is simple: make gift card trading fast, transparent,
              and accessible to everyone, everywhere. When you trade with us,
              you get upfront rates, real-time updates, and guaranteed payouts,
              every single time.
            </p>

            <div className="mt-8">
              <WhatsAppButton
                label="Get in touch"
                size="lg"
                message="Hello Palmbox Trading, I'd like to learn more about your services."
              />
            </div>
          </motion.div>

          {/* Right: stats and mission/vision cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Mission & Vision cards */}
            <div className="space-y-5">
              <div className="bg-[#FAF6EE] rounded-2xl p-6 md:p-7 border border-[#E6DCC8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0C3B2E] text-[#C97B3C] flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0C3B2E] mb-1">
                      Our Mission
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                      To make gift card trading simple, fast, and fair for
                      everyone, delivering instant payouts and the most
                      competitive rates, every single time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF6EE] rounded-2xl p-6 md:p-7 border border-[#E6DCC8] shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#C97B3C] text-white flex-shrink-0">
                    <Eye className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0C3B2E] mb-1">
                      Our Vision
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                      To be the most trusted gift card trading partner worldwide,
                      known for integrity, speed, and the human touch that makes
                      every client feel valued.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#0C3B2E] rounded-2xl p-4 text-center"
                  >
                    <s.icon className="h-5 w-5 text-[#C97B3C] mx-auto mb-2" />
                    <div className="text-xl font-extrabold text-white">
                      {s.value}
                    </div>
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#0C3B2E] mb-3">
            What we stand for
          </h3>
          <p className="text-[#1A1A1A]/70">
            Four values guide every trade we make and every conversation we
            have.
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
              className="bg-[#FAF6EE] rounded-2xl p-6 border border-[#E6DCC8] hover:border-[#C97B3C]/40 hover:shadow-lg hover:shadow-[#0C3B2E]/5 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0C3B2E] to-[#145E48] text-[#C97B3C] mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h4 className="text-base font-bold text-[#0C3B2E] mb-2">
                {v.title}
              </h4>
              <p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
