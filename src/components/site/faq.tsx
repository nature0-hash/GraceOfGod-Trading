"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

/**
 * FAQ: accordion-style, different layout from Jiro (which didn't have one).
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/25 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-[#3b0764] uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1f0a2e] tracking-tight">
            Questions, answered
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5a4068]">
            The most common questions we get from traders. Don&apos;t see yours?
            Message us on WhatsApp. We love to help.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-white border-[#f59e0b]/40 shadow-lg shadow-[#3b0764]/8"
                    : "bg-white border-[#3b0764]/10 hover:border-[#3b0764]/25"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-bold text-[#1f0a2e]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#3b0764] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-[#5a4068] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5a4068] mb-5">
            Still have questions? Our team replies within minutes on WhatsApp.
          </p>
          <WhatsAppButton
            label="Ask on WhatsApp"
            size="lg"
            variant="amber"
            message="Hello GraceOfGod Trading, I have a question about trading gift cards."
          />
        </motion.div>
      </div>
    </section>
  );
}
