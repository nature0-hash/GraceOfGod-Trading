import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Palmbox Trading Limited | Your Trusted Global Gift Card Partner",
  description:
    "Palmbox Trading Limited is a global gift card trading partner offering secure transactions, instant payouts, and the best rates for gift cards worldwide.",
  keywords: [
    "Palmbox Trading Limited",
    "gift card trading",
    "gift card exchange",
    "global gift cards",
    "trade gift cards",
    "instant gift card payment",
    "Amazon gift card",
    "Steam gift card",
    "iTunes gift card",
  ],
  authors: [{ name: "Palmbox Trading Limited" }],
  openGraph: {
    title: "Palmbox Trading Limited",
    description:
      "Your Trusted Global Gift Card Partner. Secure, instant, and reliable gift card trading worldwide.",
    siteName: "Palmbox Trading Limited",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmbox Trading Limited",
    description:
      "Your Trusted Global Gift Card Partner. Secure, instant, and reliable gift card trading worldwide.",
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
        className={`${jakarta.variable} ${inter.variable} antialiased bg-[#FAF6EE] text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
