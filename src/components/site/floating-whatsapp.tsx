"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./whatsapp-button";

/**
 * Floating WhatsApp button - stays visible while scrolling.
 * Note: this button does NOT display the phone number visually.
 * It only opens a WhatsApp chat with a pre-filled message.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card. Please share your current rates.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Palmbox Trading on WhatsApp"
      className={`fixed bottom-5 right-5 z-50 group transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative">
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#C97B3C] animate-ping opacity-30" />
        <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#C97B3C] hover:bg-[#A85F26] shadow-xl shadow-[#C97B3C]/40 flex items-center justify-center transition-colors">
          <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0C3B2E] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
          <span className="absolute top-1/2 -translate-y-1/2 left-full border-4 border-transparent border-l-[#0C3B2E]" />
        </div>
      </div>
    </a>
  );
}
