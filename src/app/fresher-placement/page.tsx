"use client";
import React from "react";
import Hero from "@/components/FresherPlacement/Hero";
import Overview from "@/components/FresherPlacement/Overview";
import Pathways from "@/components/FresherPlacement/Pathways";
import WhyEarly from "@/components/FresherPlacement/WhyEarly";
import WhySkillVita from "@/components/FresherPlacement/WhySkillVita";
import Roadmap from "@/components/FresherPlacement/Roadmap";
import OutcomesDomains from "@/components/FresherPlacement/OutcomesDomains";
import PortfolioAdvantage from "@/components/FresherPlacement/PortfolioAdvantage";
import FinalCTA from "@/components/FresherPlacement/FinalCTA";

export default function FresherPlacementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SkillVita Fresher Placement Program",
    "description": "Build job-ready skills, real proof-of-work, and a portfolio that helps you stand out before placement season even begins.",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main className="font-sans antialiased text-white bg-black selection:bg-[#22c55e] selection:text-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Overview />
      <Pathways />
      <WhyEarly />
      <WhySkillVita />
      <Roadmap />
      <OutcomesDomains />
      <PortfolioAdvantage />
      <FinalCTA />
    </main>
  );
}
