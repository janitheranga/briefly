"use client";

import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProductShowcaseSection } from "@/components/sections/ProductShowcaseSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <CompaniesSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
