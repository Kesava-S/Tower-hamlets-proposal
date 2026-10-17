import React from "react";
import StickyTopBar from "@/components/StickyTopBar";
import Hero from "@/components/Hero";
import Strengths from "@/components/Strengths";
import HotelSnapshot from "@/components/HotelSnapshot";
import Opportunities from "@/components/Opportunities";
import PlanPillars from "@/components/PlanPillars";
import SuggestedPilot from "@/components/SuggestedPilot";
import Roadmap from "@/components/Roadmap";
import ProofOfWork from "@/components/ProofOfWork";
import PersonalNote from "@/components/PersonalNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-charcoal relative selection:bg-navy selection:text-cream">
      {/* Sticky top bar on scroll */}
      <StickyTopBar />

      {/* 1. Hero (above the fold) */}
      <Hero />

      <SectionDivider />

      {/* 2. Section 01: What you've built well */}
      <Strengths />

      <SectionDivider />

      {/* 3. Hotel-by-hotel snapshot */}
      <HotelSnapshot />

      <SectionDivider />

      {/* 4. Section 02: Findings: 5 clear opportunities */}
      <Opportunities />

      <SectionDivider />

      {/* 5. Section 03: The plan: what I will build and run */}
      <PlanPillars />

      <SectionDivider />

      {/* 6. Suggested pilot: The Carmichael Hotel, Hull */}
      <SuggestedPilot />

      <SectionDivider />

      {/* 7. Step-by-step roadmap */}
      <Roadmap />

      <SectionDivider />

      {/* 8. Why me: proof of work */}
      <ProofOfWork />

      {/* 9. Personal note */}
      <PersonalNote />

      {/* 10. Final CTA */}
      <FinalCTA />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
