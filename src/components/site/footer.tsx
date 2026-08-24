"use client";

import { Mail, MessageCircle, Clock, ArrowUp, Globe, Phone } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#082920] text-white mt-auto">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand column - wider, text only, no logo */}
          <div className="lg:col-span-4">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C97B3C] font-semibold">
                Palmbox
              </span>
              <span className="text-base font-extrabold tracking-tight text-white">
                TRADING LIMITED
              </span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-xs">
              Your trusted global gift card partner. Secure, instant, and
              reliable gift card trading worldwide, paid out in minutes.
            </p>

            {/* WhatsApp CTA, copper not green */}
            <a
              href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C97B3C] hover:bg-[#A85F26] text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#C97B3C] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Gift Card Trading
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Bulk Gift Card Trading
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Instant Cash Payouts
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Global Money Payouts
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                24/7 WhatsApp Support
              </li>
            </ul>
          </div>

          {/* Reach Us, includes WhatsApp phone number naturally with copper icon */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                  <span>
                    <span className="block text-xs text-white/45">WhatsApp</span>
                    {siteConfig.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                  <span>
                    <span className="block text-xs text-white/45">Email</span>
                    {siteConfig.emailDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Clock className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                <span>
                  <span className="block text-xs text-white/45">Hours</span>
                  {siteConfig.hours}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Globe className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                <span>
                  <span className="block text-xs text-white/45">Website</span>
                  {siteConfig.domain}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar, copyright and back to top only, phone number not repeated here */}
      <div className="border-t border-white/10 bg-[#0C3B2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55 text-center sm:text-left">
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </p>
          <a
            href="#home"
            className="text-xs text-white/55 hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            Back to top
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
