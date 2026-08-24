"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MessageCircle, Send, MapPin } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

/**
 * Contact: different layout from Jiro.
 *
 * IMPORTANT: The WhatsApp *number* is intentionally NOT displayed here.
 * It is only displayed in the Footer. Here we show a WhatsApp button + a
 * pre-fills form that opens WhatsApp, without exposing the raw number visually.
 */
export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] p-8 md:p-14 mb-16"
        >
          {/* Decorative */}
          <div className="absolute inset-0 dotted-pattern opacity-20" />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#f59e0b]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#fb7185]/20 blur-3xl" />

          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Start trading today
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your cash is one message away
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80">
              Send us a message on WhatsApp and get an instant rate quote. Most
              trades complete within minutes: no long waits, no complex
              sign-ups, no hidden fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                label="Chat on WhatsApp Now"
                size="lg"
                variant="amber"
                message="Hello GraceOfGod Trading, I'd like to trade a gift card. Please share your current rates."
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

        {/* Contact details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1f0a2e] mb-3">
            Other ways to reach us
          </h3>
          <p className="text-[#5a4068]">
            We&apos;re available around the clock. Reach us on the channel that
            works best for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {/* WhatsApp: NO phone number shown, just button + description */}
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            value="Tap to start a chat"
            sub="Fastest response, 24/7"
            href={whatsappLink("Hello GraceOfGod Trading, I'd like to trade a gift card.")}
            accent="plum"
          />
          <ContactCard
            icon={Mail}
            title="Email"
            value={siteConfig.emailDisplay}
            sub="We reply within 2 hours"
            href={`mailto:${siteConfig.email}`}
            accent="amber"
          />
          <ContactCard
            icon={Clock}
            title="Working Hours"
            value={siteConfig.hours}
            sub={siteConfig.hoursSun}
            href="#"
            accent="coral"
          />
        </div>

        {/* Quick contact form (opens WhatsApp with pre-filled message) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-[#faf5ff] to-[#FFFBF5] rounded-3xl p-6 md:p-10 border border-[#3b0764]/10"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#1f0a2e] mb-2">
              Send us a quick message
            </h3>
            <p className="text-sm text-[#5a4068]">
              Fill this in and we&apos;ll open a pre-filled WhatsApp chat with
              our team. No phone number needed, just hit send.
            </p>
          </div>
          <QuickForm />
        </motion.div>

        {/* Location strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex items-center justify-center gap-3 text-sm text-[#5a4068]"
        >
          <MapPin className="h-4 w-4 text-[#f59e0b]" />
          <span>
            GRACEOFGOD TRADING AND LOGISTICS LIMITED, serving clients
            across Africa, Europe, North America, Asia and beyond.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({
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
  accent: "plum" | "amber" | "coral";
}) {
  const accentClasses = {
    plum: "bg-[#3b0764]/10 text-[#3b0764]",
    amber: "bg-[#f59e0b]/15 text-[#f59e0b]",
    coral: "bg-[#fb7185]/15 text-[#fb7185]",
  };

  const content = (
    <div className="group h-full bg-white rounded-3xl p-6 border border-[#3b0764]/10 hover:border-[#3b0764]/30 hover:shadow-lg hover:shadow-[#3b0764]/8 transition-all duration-300 flex flex-col items-center text-center">
      <div
        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 ${accentClasses[accent]} group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h4 className="text-sm font-semibold text-[#6b4f7d] uppercase tracking-wider mb-1">
        {title}
      </h4>
      <div className="text-base font-bold text-[#1f0a2e] break-all">{value}</div>
      <div className="text-xs text-[#6b4f7d] mt-1">{sub}</div>
    </div>
  );

  if (href === "#") return content;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
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
    const text = `Hello GraceOfGod Trading!%0A%0AName: ${encodeURIComponent(
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
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3b0764]/15 text-sm text-[#1f0a2e] placeholder:text-[#9b7ab0] focus:outline-none focus:border-[#3b0764] focus:ring-2 focus:ring-[#3b0764]/10 transition-all"
        />
        <input
          required
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          placeholder="Gift card type (e.g. Amazon, Steam)"
          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3b0764]/15 text-sm text-[#1f0a2e] placeholder:text-[#9b7ab0] focus:outline-none focus:border-[#3b0764] focus:ring-2 focus:ring-[#3b0764]/10 transition-all"
        />
      </div>
      <input
        value={cardValue}
        onChange={(e) => setCardValue(e.target.value)}
        placeholder="Card value (e.g. $100)"
        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3b0764]/15 text-sm text-[#1f0a2e] placeholder:text-[#9b7ab0] focus:outline-none focus:border-[#3b0764] focus:ring-2 focus:ring-[#3b0764]/10 transition-all"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Anything else we should know?"
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3b0764]/15 text-sm text-[#1f0a2e] placeholder:text-[#9b7ab0] focus:outline-none focus:border-[#3b0764] focus:ring-2 focus:ring-[#3b0764]/10 transition-all resize-none"
      />
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#3b0764] hover:bg-[#5b0e8a] rounded-full transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#3b0764]/25"
      >
        <Send className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}
