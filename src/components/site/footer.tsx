"use client";

import { Mail, MessageCircle, Clock, ArrowUp, Globe2, Sparkles } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Footer — unique layout vs. Jiro.
 *
 * IMPORTANT: This is the ONLY place on the entire website where the actual
 * WhatsApp phone number is visibly displayed. Everywhere else, WhatsApp
 * actions are triggered via buttons (which open wa.me links) without showing
 * the raw number to the visitor.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1e0a2e] via-[#2d0d44] to-[#1e0a2e] text-white mt-auto">
      {/* Top accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[#3b0764] via-[#f59e0b] to-[#fb7185]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#5b0e8a] via-[#3b0764] to-[#1e0a2e] shadow-md shadow-[#3b0764]/40">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#f59e0b]/30 via-transparent to-[#fb7185]/25" />
                <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-[#fbbf24]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="currentColor" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#f59e0b] font-semibold">
                  {siteConfig.brandEyebrow}
                </span>
                <span className="text-sm font-extrabold tracking-tight text-white">
                  GraceOfGod Trading
                </span>
                <span className="text-[9px] text-white/50">
                  TRADING &amp; LOGISTICS LIMITED
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
              Your trusted global gift card partner. Secure, instant, and
              reliable gift card trading worldwide — sunrise-fast, every time.
            </p>
            <a
              href={whatsappLink("Hello GraceOfGod Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f59e0b] hover:bg-[#fbbf24] text-[#1e0a2e] text-sm font-bold transition-colors shadow-lg shadow-[#f59e0b]/25"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f59e0b] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#f59e0b] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f59e0b] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Gift Card Trading",
                "Bulk Gift Card Trading",
                "Instant Cash Payouts",
                "Global Money Payouts",
                "24/7 WhatsApp Support",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-white/70 inline-flex items-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us — the ONLY place where the WhatsApp number is visible */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#f59e0b] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#f59e0b]/15 flex-shrink-0 group-hover:bg-[#f59e0b]/25 transition-colors">
                    <MessageCircle className="h-4 w-4 text-[#f59e0b]" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/50">
                      WhatsApp
                    </span>
                    {/* The phone number is displayed ONLY here, in the footer contact block */}
                    <span className="text-base font-bold text-white tracking-wide">
                      {siteConfig.whatsappDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors group"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#3b0764]/40 flex-shrink-0 group-hover:bg-[#3b0764]/60 transition-colors">
                    <Mail className="h-4 w-4 text-[#fbbf24]" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-wider text-white/50">
                      Email
                    </span>
                    <span className="text-sm font-bold text-white break-all">
                      {siteConfig.emailDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#fb7185]/15 flex-shrink-0">
                  <Clock className="h-4 w-4 text-[#fb7185]" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">
                    Hours
                  </span>
                  <span className="text-xs">{siteConfig.hours}</span>
                  <span className="block text-xs text-white/60">{siteConfig.hoursSun}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <span className="inline-flex items-center gap-1.5">
            <Globe2 className="h-3.5 w-3.5 text-[#f59e0b]" />
            40+ countries served
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
            50,000+ trades completed
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5 text-[#fb7185]" />
            24/7 WhatsApp support
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60 text-center sm:text-left">
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-xs text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
