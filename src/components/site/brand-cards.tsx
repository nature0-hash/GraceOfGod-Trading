"use client";

/**
 * Realistic gift card SVG components for each brand.
 * Each card mimics the actual brand's gift card design with:
 *  - Proper brand colors / gradients
 *  - Brand logo (SVG)
 *  - "GIFT CARD" header
 *  - Brand name
 *  - Chip element
 *  - "PALMBOX" footer
 */

export type BrandCardProps = {
  variant?: "large" | "small";
  className?: string;
};

/* ============================================================================
 * Amazon Gift Card
 * ========================================================================== */
export function AmazonCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 100%)" }}
      >
        <AmazonLogo className="absolute top-2 left-2 h-4" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-[#232F3E]">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FF9900 0%, #FFB84D 60%, #FF9900 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="40" cy="20" r="40" fill="white" opacity="0.3" />
          <circle cx="170" cy="80" r="50" fill="white" opacity="0.2" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-[#232F3E]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-semibold">Gift Card</div>
            <AmazonLogo className="mt-2 h-7" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-70 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function AmazonLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className} fill="currentColor">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" fill="#232F3E">amazon</text>
      <path d="M 5 27 Q 50 35 95 27" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ============================================================================
 * Steam Gift Card
 * ========================================================================== */
export function SteamCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #1B2838 0%, #2A475E 100%)" }}
      >
        <SteamLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">STEAM</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-400/40 border border-white/20" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #1B2838 0%, #2A475E 60%, #1B2838 100%)" }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="30" cy="80" r="50" fill="white" />
          <circle cx="180" cy="10" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <SteamLogo className="mt-3 h-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-400/50 border border-white/30" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function SteamLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className}>
      <circle cx="14" cy="15" r="10" fill="#ffffff" />
      <circle cx="14" cy="15" r="5" fill="#1B2838" />
      <circle cx="50" cy="18" r="5" fill="#ffffff" />
      <text x="60" y="20" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#ffffff" letterSpacing="1">STEAM</text>
    </svg>
  );
}

/* ============================================================================
 * iTunes / Apple Gift Card
 * ========================================================================== */
export function ITunesCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 50%, #FFB347 100%)" }}
      >
        <AppleLogo className="absolute top-2 right-2 h-5 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">iTunes</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-200/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #FB5BC5 0%, #FF8FB1 40%, #FFB347 100%)" }}
    >
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <radialGradient id="itunes-grad" cx="20%" cy="30%">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="200" height="100" fill="url(#itunes-grad)" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
            <div className="mt-3 text-2xl font-bold">iTunes</div>
          </div>
          <AppleLogo className="h-10 text-white" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-200/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function AppleLogo({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.01-3.77-2.04-1.6-.16-3.13.94-3.94.94-.82 0-2.06-.92-3.39-.89-1.74.03-3.36 1.02-4.26 2.58-1.82 3.15-.46 7.81 1.31 10.37.87 1.25 1.91 2.66 3.27 2.61 1.32-.05 1.81-.85 3.4-.85 1.59 0 2.04.85 3.43.83 1.42-.03 2.31-1.28 3.18-2.54 1-1.46 1.42-2.88 1.45-2.95-.03-.01-2.78-1.07-2.81-4.25-.03-2.66 2.17-3.93 2.27-3.99-1.25-1.83-3.18-2.04-3.86-2.07m-2.59-1.57c.72-.87 1.21-2.08 1.08-3.29-1.04.04-2.31.69-3.06 1.56-.67.77-1.26 2-1.1 3.19 1.16.09 2.35-.59 3.08-1.46" />
    </svg>
  );
}

/* ============================================================================
 * Google Play Gift Card
 * ========================================================================== */
export function GooglePlayCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-slate-200 ${className}`}
        style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)" }}
      >
        <GooglePlayLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-slate-700">Google Play</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-400/60 border border-slate-300" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200 ${className}`}
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 50%, #e2e8f0 100%)" }}
    >
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <linearGradient id="gp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#34A853" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <rect width="200" height="100" fill="url(#gp-grad)" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-slate-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-3 flex items-center gap-2">
              <GooglePlayLogo className="h-7" />
              <span className="text-xl font-bold text-slate-800">Google Play</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-400/70 border border-slate-300" />
          <div className="text-[10px] opacity-60 font-semibold text-slate-600">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function GooglePlayLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#00A1FF" />
      <path d="M14.524 12.732l-2.732-2.732 6.07-3.472a.998.998 0 0 1 1.076.054l-4.414 6.15z" fill="#00CF5F" />
      <path d="M14.524 11.268l4.414 6.15a.998.998 0 0 1-1.076.054l-6.07-3.472 2.732-2.732z" fill="#FFB700" />
      <path d="M3.609 1.814a.998.998 0 0 1 .594-.085l11.321 6.479-2.732 2.732L3.609 1.814z" fill="#FF3D4D" />
      <path d="M3.609 22.186l9.183-10.186 2.732 2.732-11.321 6.479a.998.998 0 0 1-.594-.025z" fill="#00A1FF" />
    </svg>
  );
}

/* ============================================================================
 * Xbox Gift Card
 * ========================================================================== */
export function XboxCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #107C10 0%, #0E6B0E 100%)" }}
      >
        <XboxLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">XBOX</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #107C10 0%, #0E6B0E 60%, #107C10 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="40" cy="50" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-semibold">Gift Card</div>
          <div className="mt-3 flex items-center gap-2">
            <XboxLogo className="h-7" />
            <span className="text-2xl font-bold tracking-tight">XBOX</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-70 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function XboxLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="white">
      <path d="M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.246-1.092-3.647-5.235-7.902-7.834-4.255 2.599-9.148 6.742-7.898 7.834zm11.16-19.55C17.962 2.535 20.235 4.59 21.633 7.21c.838 1.575-3.188 6.252-5.354 8.064-2.318-1.885-4.66-4.854-4.66-4.854s2.36-2.945 4.701-4.854c-2.328-1.91-5.184-3.456-7.18-3.456-.657 0-1.16.146-1.51.41C9.295.913 10.624 0 12 0c1.396 0 2.66.387 3.262 1.483z" />
    </svg>
  );
}

/* ============================================================================
 * PlayStation Gift Card
 * ========================================================================== */
export function PlayStationCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #003791 0%, #0048C8 100%)" }}
      >
        <PlayStationLogo className="absolute top-2 right-2 h-6 text-white" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">PlayStation</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #003791 0%, #0048C8 60%, #0070D1 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="160" cy="20" r="35" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-semibold">Gift Card</div>
            <div className="mt-3 text-xl font-bold">PlayStation</div>
          </div>
          <PlayStationLogo className="h-9 text-white" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-70 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function PlayStationLogo({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color}>
      <path d="M9.483 3.16v15.184l3.632 1.14V8.395c0-.86.386-1.444 1.003-1.24.723.2.86 1.16.86 2.02v4.07c2.765 1.323 4.936.026 4.936-3.62 0-3.738-1.323-5.296-5.193-6.42-1.526-.452-4.07-1.04-7.238-1.04zM8.18 19.79c-1.418-.42-2.715-.55-3.59-.31-.452.13-.55.55-.13.704 1.487.522 4.468.355 6.94-.45v-1.27c-.97.41-2.06.74-3.22 1.326zm9.93-.295c-.83-.083-1.74.043-2.83.36v1.27c1.42-.41 2.85-.55 3.92-.36.5.083.45.61-.13.65-1.42.13-3.21.13-4.96-.27-.41.13-.83.27-1.27.36v-3.18c1.5-.55 3.27-.83 4.69-.55.55.083.83.45.83.83v.13c0 .41-.41.55-.83.5l-.42-.04z" />
    </svg>
  );
}

/* ============================================================================
 * eBay Gift Card
 * ========================================================================== */
export function EbayCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #E53238 0%, #F5A623 100%)" }}
      >
        <EbayLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #E53238 0%, #F5A623 60%, #0064D2 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="20" cy="80" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
          <EbayLogo className="mt-3 h-8" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function EbayLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className}>
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" fill="#E53238">e</text>
      <text x="14" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" fill="#0064D2">b</text>
      <text x="32" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" fill="#F5A623">a</text>
      <text x="50" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="900" fontStyle="italic" fill="#86B817">y</text>
    </svg>
  );
}

/* ============================================================================
 * Sephora Gift Card
 * ========================================================================== */
export function SephoraCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)" }}
      >
        <div className="absolute top-2 left-2 text-white text-[10px] font-bold tracking-[0.15em]">SEPHORA</div>
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 60%, #000000 100%)" }}
    >
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <radialGradient id="sephora-glow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#C97B3C" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="200" height="100" fill="url(#sephora-glow)" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-bold tracking-[0.15em]">SEPHORA</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * Netflix Gift Card
 * ========================================================================== */
export function NetflixCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a0000 100%)" }}
      >
        <NetflixLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a0000 60%, #2a0000 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <rect width="200" height="100" fill="#E50914" opacity="0.3" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <NetflixLogo className="mt-3 h-9" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function NetflixLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 30" className={className}>
      <text x="0" y="24" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#E50914" fontStyle="italic" letterSpacing="-1">NETFLIX</text>
    </svg>
  );
}

/* ============================================================================
 * Spotify Gift Card
 * ========================================================================== */
export function SpotifyCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)" }}
      >
        <SpotifyLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">Spotify</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 60%, #191414 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="160" cy="20" r="30" fill="#1DB954" opacity="0.5" />
          <circle cx="30" cy="80" r="40" fill="#1DB954" opacity="0.3" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-3 text-2xl font-bold">Spotify</div>
          </div>
          <SpotifyLogo className="h-10" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function SpotifyLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1DB954">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

/* ============================================================================
 * Visa Gift Card
 * ========================================================================== */
export function VisaCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 100%)" }}
      >
        <VisaLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #1A1F71 0%, #2A2F8A 60%, #1A1F71 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="180" cy="80" r="40" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-semibold">Gift Card</div>
          <VisaLogo className="mt-3 h-7" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-70 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function VisaLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className}>
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="#FFFFFF" letterSpacing="-1">VISA</text>
    </svg>
  );
}

/* ============================================================================
 * Mastercard Gift Card
 * ========================================================================== */
export function MastercardCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)" }}
      >
        <MastercardLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 60%, #000000 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="50" cy="50" r="30" fill="#EB001B" opacity="0.4" />
          <circle cx="80" cy="50" r="30" fill="#F79E1B" opacity="0.4" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-70 font-semibold">Gift Card</div>
          <MastercardLogo className="mt-3 h-9" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-70 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function MastercardLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 30" className={className}>
      <circle cx="18" cy="15" r="12" fill="#EB001B" />
      <circle cx="30" cy="15" r="12" fill="#F79E1B" />
      <path d="M24 5.5a12 12 0 0 0 0 19 12 12 0 0 0 0-19z" fill="#FF5F00" />
    </svg>
  );
}

/* ============================================================================
 * Walmart Gift Card
 * ========================================================================== */
export function WalmartCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0071CE 0%, #005EB8 100%)" }}
      >
        <WalmartLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">Walmart</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #0071CE 0%, #005EB8 60%, #0071CE 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="180" cy="20" r="30" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
            <div className="mt-3 text-2xl font-bold">Walmart</div>
          </div>
          <WalmartLogo className="h-10" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function WalmartLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FFC220">
      <path d="M12 2c.46 0 .83.37.83.83v6.34a.83.83 0 0 1-1.66 0V2.83c0-.46.37-.83.83-.83zM5.46 5.46c.32-.32.84-.32 1.17 0l4.49 4.49a.83.83 0 0 1-1.17 1.17L5.46 6.63a.83.83 0 0 1 0-1.17zm13.08 0c.32.32.32.84 0 1.17l-4.49 4.49a.83.83 0 0 1-1.17-1.17l4.49-4.49c.32-.32.84-.32 1.17 0zM2 12c0-.46.37-.83.83-.83h6.34a.83.83 0 0 1 0 1.66H2.83A.83.83 0 0 1 2 12zm12 0c0-.46.37-.83.83-.83h6.34a.83.83 0 0 1 0 1.66h-6.34A.83.83 0 0 1 14 12zM5.46 18.54a.83.83 0 0 1 0-1.17l4.49-4.49a.83.83 0 0 1 1.17 1.17l-4.49 4.49a.83.83 0 0 1-1.17 0zm13.08 0a.83.83 0 0 1-1.17 0l-4.49-4.49a.83.83 0 0 1 1.17-1.17l4.49 4.49c.32.32.32.84 0 1.17zM12 14.5c.46 0 .83.37.83.83v6.34a.83.83 0 0 1-1.66 0v-6.34c0-.46.37-.83.83-.83z" />
    </svg>
  );
}

/* ============================================================================
 * Target Gift Card
 * ========================================================================== */
export function TargetCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #CC0000 0%, #A60000 100%)" }}
      >
        <TargetLogo className="absolute top-2 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">target</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #CC0000 0%, #A60000 60%, #CC0000 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="40" cy="50" r="30" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
            <div className="mt-3 text-2xl font-light italic">target</div>
          </div>
          <TargetLogo className="h-10" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function TargetLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="10" fill="#CC0000" />
      <circle cx="12" cy="12" r="7" fill="white" />
      <circle cx="12" cy="12" r="4.5" fill="#CC0000" />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
  );
}

/* ============================================================================
 * Best Buy Gift Card
 * ========================================================================== */
export function BestBuyCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #0046BE 0%, #0033A0 100%)" }}
      >
        <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-yellow-400 text-[9px] font-bold text-[#0046BE] rounded">BEST BUY</div>
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">Gift Card</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #0046BE 0%, #0033A0 60%, #0046BE 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="170" cy="80" r="30" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
          <div className="mt-3 inline-block px-3 py-1.5 bg-yellow-400 text-[#0046BE] text-base font-extrabold rounded">BEST BUY</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * Apple Store Gift Card
 * ========================================================================== */
export function AppleStoreCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #F5F5F7 0%, #E8E8ED 100%)" }}
      >
        <AppleLogo className="absolute top-2 right-2 h-5 text-[#1D1D1F]" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-[#1D1D1F]">App Store</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-slate-300" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-slate-200 ${className}`}
      style={{ background: "linear-gradient(135deg, #F5F5F7 0%, #E8E8ED 60%, #D1D1D6 100%)" }}
    >
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            <radialGradient id="apple-glow" cx="70%" cy="30%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="200" height="100" fill="url(#apple-glow)" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-[#1D1D1F]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
            <div className="mt-3 text-xl font-semibold">App Store &amp; iTunes</div>
          </div>
          <AppleLogo className="h-10 text-[#1D1D1F]" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-slate-300" />
          <div className="text-[10px] opacity-60 font-semibold text-slate-600">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * Nike Gift Card
 * ========================================================================== */
export function NikeCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #111111 0%, #2a2a2a 100%)" }}
      >
        <NikeLogo className="absolute top-3 left-2 h-4" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">NIKE</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #111111 0%, #2a2a2a 60%, #111111 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="180" cy="20" r="30" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <NikeLogo className="mt-3 h-7" />
          <div className="mt-2 text-xl font-extrabold tracking-tight">NIKE</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function NikeLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 24" className={className} fill="white">
      <path d="M55.2 4.7c-1.2 1.8-3.4 4.6-7.8 8.4-3.6 3.1-7.5 5.6-11.5 6.9-3.9 1.3-7.5 1.5-10.5.6-2.9-.9-5-2.7-6.2-5.2-1.2-2.4-1.6-5.3-1.2-8.4.4-3.1 1.4-6.1 3-8.9-1.6 1.7-3 3.6-4.2 5.7-1.2 2.1-2 4.2-2.5 6.3-.4 2.1-.5 4.1-.1 6 .4 1.9 1.2 3.6 2.5 5 1.3 1.4 3 2.4 5.1 3 2.1.6 4.5.7 7.2.2 2.7-.5 5.5-1.5 8.4-3.1 2.9-1.6 5.6-3.6 8.1-6 2.5-2.4 4.4-4.8 5.7-7.2.5-1 .8-1.7.9-2.2l-1.9 1.2z" />
    </svg>
  );
}

/* ============================================================================
 * Adidas Gift Card
 * ========================================================================== */
export function AdidasCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)" }}
      >
        <AdidasLogo className="absolute top-3 left-2 h-5" />
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">adidas</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 60%, #000000 100%)" }}
    >
      <div className="absolute inset-0 opacity-15">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <rect width="200" height="100" fill="white" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <AdidasLogo className="mt-3 h-10" />
          <div className="mt-1 text-xl font-bold lowercase tracking-tight">adidas</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

function AdidasLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className}>
      <path d="M10 30 L25 5 L30 8 L17 32 Z" fill="white" />
      <path d="M22 30 L37 5 L42 8 L29 32 Z" fill="white" />
      <path d="M34 30 L49 5 L54 8 L41 32 Z" fill="white" />
    </svg>
  );
}

/* ============================================================================
 * Macy's Gift Card
 * ========================================================================== */
export function MacysCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #E21A2C 0%, #B8151F 100%)" }}
      >
        <div className="absolute top-2 left-2 text-white text-[10px] font-bold tracking-[0.05em]">Macy&apos;s</div>
        <div className="absolute top-2 right-2 text-yellow-300 text-sm">★</div>
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #E21A2C 0%, #B8151F 60%, #E21A2C 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <text x="60" y="60" fontSize="50" fill="white" opacity="0.5">★</text>
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-bold italic">Macy&apos;s</div>
          <div className="text-yellow-300 text-sm mt-1">★ ★ ★</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-80 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * Nordstrom Gift Card
 * ========================================================================== */
export function NordstromCard({ variant = "large", className = "" }: BrandCardProps) {
  if (variant === "small") {
    return (
      <div
        className={`relative w-44 h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-md border border-white/10 ${className}`}
        style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)" }}
      >
        <div className="absolute top-2 left-2 text-white text-[10px] font-serif italic">Nordstrom</div>
        <div className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white">GIFT CARD</div>
        <div className="absolute bottom-1.5 right-2 h-3 w-4 rounded-sm bg-yellow-300/60 border border-white/30" />
      </div>
    );
  }
  return (
    <div
      className={`relative h-52 rounded-2xl overflow-hidden shadow-lg border border-white/10 ${className}`}
      style={{ background: "linear-gradient(135deg, #000000 0%, #1a1a1a 60%, #000000 100%)" }}
    >
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <circle cx="100" cy="50" r="30" fill="white" opacity="0.2" />
        </svg>
      </div>
      <div className="relative h-full p-5 flex flex-col justify-between text-white">
        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-semibold">Gift Card</div>
          <div className="mt-3 text-2xl font-serif italic">Nordstrom</div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-6 w-8 rounded-md bg-yellow-300/70 border border-white/40" />
          <div className="text-[10px] opacity-60 font-semibold">PALMBOX</div>
        </div>
      </div>
    </div>
  );
}
