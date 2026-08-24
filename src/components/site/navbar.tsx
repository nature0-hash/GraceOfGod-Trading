"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
          ? "bg-[#FAF6EE]/95 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(12,59,46,0.18)] border-b border-[#E6DCC8]"
          : "bg-[#FAF6EE]/70 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand wordmark, text only, no logo */}
        <a
          href="#home"
          className="flex flex-col leading-none group"
          aria-label={siteConfig.brand}
        >
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-[#C97B3C] font-semibold">
            Palmbox
          </span>
          <span className="text-sm md:text-base font-extrabold tracking-tight text-[#0C3B2E] group-hover:text-[#145E48] transition-colors">
            TRADING LIMITED
          </span>
        </a>

        {/* Desktop nav - centered */}
        <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#1A1A1A]/80 hover:text-[#0C3B2E] rounded-full hover:bg-[#F1E9D9] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton label="WhatsApp" size="sm" />
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#0C3B2E] hover:bg-[#F1E9D9] transition-colors"
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
          "lg:hidden overflow-hidden transition-all duration-300 bg-[#FAF6EE] border-t border-[#E6DCC8]",
          mobileOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#1A1A1A]/80 hover:text-[#0C3B2E] hover:bg-[#F1E9D9] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <WhatsAppButton label="Chat on WhatsApp" className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  );
}

