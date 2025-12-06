import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { ProductHighlights } from "@/components/ProductHighlights";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />
      <Hero />
      <ProblemSolution />
      <ProductHighlights />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
