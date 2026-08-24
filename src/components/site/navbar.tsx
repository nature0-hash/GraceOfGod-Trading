"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./whatsapp-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(59,7,100,0.08)] border-b border-[#3b0764]/8"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand mark: sunrise medallion + wordmark */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          aria-label={siteConfig.brand}
        >
          <span className="relative inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b0764] via-[#5b0e8a] to-[#1e0a2e] shadow-md shadow-[#3b0764]/30">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#f59e0b]/40 via-transparent to-[#fb7185]/30 opacity-80" />
            <svg viewBox="0 0 24 24" className="relative h-5 w-5 md:h-6 md:w-6 text-[#fbbf24]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#f59e0b] font-semibold">
              {siteConfig.brandEyebrow}
            </span>
            <span className="text-sm md:text-base font-extrabold tracking-tight text-[#3b0764] group-hover:text-[#5b0e8a] transition-colors">
              GraceOfGod Trading
            </span>
          </span>
        </a>

        {/* Desktop nav: pill */}
        <ul className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur border border-[#3b0764]/8 rounded-full p-1 shadow-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#3b0764] hover:text-white hover:bg-[#3b0764] rounded-full transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton label="Chat on WhatsApp" size="sm" variant="amber" />
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-xl text-[#3b0764] hover:bg-[#3b0764]/8 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-t border-[#3b0764]/8",
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#3b0764] hover:text-white hover:bg-[#3b0764] rounded-xl transition-colors"
              >
                {link.label}
                <Sparkles className="h-3.5 w-3.5 opacity-50" />
              </a>
            </li>
          ))}
          <li className="mt-2">
            <WhatsAppButton
              label="Chat on WhatsApp"
              variant="amber"
              className="w-full"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
