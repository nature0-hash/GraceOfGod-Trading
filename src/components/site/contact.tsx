"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send, ChevronRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#FAF6EE]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-[#0C3B2E] p-8 md:p-14 mb-16"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#C97B3C]/25 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#145E48]/30 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-5">
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Start trading today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Send one message. Get paid in minutes.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/75">
              Reach us on WhatsApp for an instant rate quote. Most trades are
              completed within ten minutes. Your cash is just one message away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                label="Chat on WhatsApp Now"
                size="lg"
                message="Hello Palmbox Trading, I'd like to trade a gift card. Please share your current rates."
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Split-screen: contact info + WhatsApp form */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left: contact details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0C3B2E] mb-3">
                Get in touch
              </h3>
              <p className="text-[#1A1A1A]/70">
                We&apos;re available around the clock. Reach us on the channel
                that works best for you.
              </p>
            </div>

            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              value="Chat with us, fastest response"
              sub="Available 24/7"
              href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card.")}
              accent="green"
            />
            <ContactRow
              icon={Mail}
              title="Email"
              value={siteConfig.emailDisplay}
              sub="We reply within 2 hours"
              href={`mailto:${siteConfig.email}`}
              accent="copper"
            />
            <ContactRow
              icon={Clock}
              title="Working hours"
              value={siteConfig.hours}
              sub={siteConfig.hoursSunday}
              href="#"
              accent="emerald"
            />
          </motion.div>

          {/* Right: quick form (WhatsApp-powered) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-10 border border-[#E6DCC8] shadow-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0C3B2E] mb-2">
              Send us a quick message
            </h3>
            <p className="text-sm text-[#1A1A1A]/70 mb-6">
              Fill this in and we&apos;ll open a pre-filled WhatsApp chat with
              our team.
            </p>
            <QuickForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  sub,
  href,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  sub: string;
  href: string;
  accent: "green" | "copper" | "emerald";
}) {
  const accentClasses = {
    green: "bg-[#C97B3C]/15 text-[#C97B3C]",
    copper: "bg-[#C97B3C]/15 text-[#C97B3C]",
    emerald: "bg-[#0C3B2E]/10 text-[#0C3B2E]",
  };

  const inner = (
    <div className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#E6DCC8] hover:border-[#C97B3C]/40 hover:shadow-lg hover:shadow-[#0C3B2E]/5 transition-all duration-300">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0 ${accentClasses[accent]} group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-semibold text-[#1A1A1A]/60 uppercase tracking-wider mb-1">
          {title}
        </h4>
        <div className="text-base font-bold text-[#0C3B2E] truncate">{value}</div>
        <div className="text-xs text-[#1A1A1A]/60 mt-0.5">{sub}</div>
      </div>
      {href !== "#" && (
        <ChevronRight className="h-5 w-5 text-[#1A1A1A]/40 group-hover:text-[#C97B3C] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
      )}
    </div>
  );

  if (href === "#") return inner;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  );
}

function QuickForm() {
  const [name, setName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardValue, setCardValue] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Palmbox Trading!%0A%0AName: ${encodeURIComponent(
      name || "-"
    )}%0AGift Card: ${encodeURIComponent(
      cardType || "-"
    )}%0AValue: ${encodeURIComponent(
      cardValue || "-"
    )}%0A%0AMessage: ${encodeURIComponent(message || "-")}`;
    window.open(`${whatsappLink()}?text=${text}`, "_blank");
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#E6DCC8] text-sm text-[#0C3B2E] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#0C3B2E] focus:ring-2 focus:ring-[#0C3B2E]/10 transition-all"
        />
        <input
          required
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          placeholder="Gift card type (e.g. Amazon, Steam)"
          className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#E6DCC8] text-sm text-[#0C3B2E] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#0C3B2E] focus:ring-2 focus:ring-[#0C3B2E]/10 transition-all"
        />
      </div>
      <input
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        placeholder="Card value (e.g. 100 USD)"
        className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#E6DCC8] text-sm text-[#0C3B2E] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#0C3B2E] focus:ring-2 focus:ring-[#0C3B2E]/10 transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything else we should know?"
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-[#FAF6EE] border border-[#E6DCC8] text-sm text-[#0C3B2E] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#0C3B2E] focus:ring-2 focus:ring-[#0C3B2E]/10 transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#C97B3C] hover:bg-[#A85F26] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#C97B3C]/25"
      >
        <Send className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}
