import React from "react";
import { HeroBanner } from "@/components/home/HeroBanner";
import { VervCtaSection } from "@/components/home/VervCtaSection";
import { QuickNavGrid } from "@/components/home/QuickNavGrid";
import { NewsHighlightSection } from "@/components/home/NewsHighlightSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { PartnerLogos } from "@/components/home/PartnerLogos";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <VervCtaSection />
      <QuickNavGrid />
      <NewsHighlightSection />
      <FeaturedSection />
      <PartnerLogos />
    </>
  );
}
