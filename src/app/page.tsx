import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Statement } from "@/components/Statement";
import { ProductHighlights } from "@/components/ProductHighlights";
import { AboutUs } from "@/components/AboutUs";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import { ContactSection } from "@/components/ContactSection";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Footer } from "@/components/Footer";
import { MarketingPopup } from "@/components/MarketingPopup";
import { BrandTicker } from "@/components/BrandTicker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] selection:bg-[#D4AF37] selection:text-black">

      {/* 1. Global Header */}
      <Header />

      <main className="flex-1 w-full relative">

        {/* 2. Hero Section Refined */}
        <Hero />

        {/* 3. Brand Authority Ticker - Removed */}
        {/* <BrandTicker /> */}

        {/* 4. Brand Philosophy / Statement */}
        <Statement />

        {/* 5. Customer Results (Moved Up) */}
        <SocialProof />

        {/* 5. Science & Problem Solution */}
        <ProblemSolution />

        {/* 6. Product Gallery */}
        <ProductHighlights />

        {/* 7. Brand Story / About Us */}
        <AboutUs />


        {/* 8. Clinical Results / Social Proof */}


        {/* 9. FAQ Support */}
        <FAQ />

        {/* 10. Final Call To Action */}
        <CallToAction />

        {/* 11. Contact Form */}
        <ContactSection />

      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Global Overlays */}
      {/* <MarketingPopup /> */}
      <ScrollToTop />
    </div>
  );
}
