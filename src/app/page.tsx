import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBadges } from "@/components/site/trust-badges";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { HowItWorks } from "@/components/site/how-it-works";
import { About } from "@/components/site/about";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Terms } from "@/components/site/terms";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBF5]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadges />
        <Services />
        <Gallery />
        <HowItWorks />
        <About />
        <Faq />
        <Contact />
        <Terms />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
