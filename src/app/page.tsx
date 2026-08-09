import { Hero } from "@/components/home/Hero";
import { ClinicPresentation } from "@/components/home/ClinicPresentation";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { ResultsSection } from "@/components/home/ResultsSection";
import { AlineHighlight } from "@/components/home/AlineHighlight";
import { TrustBand } from "@/components/home/TrustBand";
import { TestimonialsLocation } from "@/components/home/TestimonialsLocation";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <TrustBand />
      <ClinicPresentation />
      <FeaturedTreatments />
      <AlineHighlight />
      <ResultsSection />
      <TestimonialsLocation />
    </main>
  );
}
