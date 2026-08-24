import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GraceOfGod Trading and Logistics Limited | Sunrise Gift Card Trading",
  description:
    "GRACEOFGOD TRADING AND LOGISTICS LIMITED is a global gift card trading partner offering secure transactions, instant verification, and the best market rates for gift cards worldwide. Amazon, Steam, iTunes, Google Play, Xbox, PlayStation and 100+ more brands.",
  keywords: [
    "GraceOfGod Trading",
    "Sunrise Trading",
    "gift card trading",
    "gift card exchange",
    "global gift cards",
    "trade gift cards",
    "instant gift card payment",
    "Amazon gift card trade",
    "Steam gift card trade",
    "iTunes gift card trade",
  ],
  authors: [{ name: "GRACEOFGOD TRADING AND LOGISTICS LIMITED" }],
  openGraph: {
    title: "GraceOfGod Trading and Logistics Limited",
    description:
      "Sunrise Gift Card Trading: secure, instant, and reliable gift card trading worldwide. Get the best rates for Amazon, Steam, iTunes, Google Play, Xbox, PlayStation and more.",
    siteName: "GraceOfGod Trading and Logistics Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GraceOfGod Trading and Logistics Limited",
    description:
      "Sunrise Gift Card Trading: secure, instant, and reliable gift card trading worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased bg-[#FFFBF5] text-[#1f0a2e]`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
