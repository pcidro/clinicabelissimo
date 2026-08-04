import { Hero } from "@/components/home/Hero";
import { ClinicPresentation } from "@/components/home/ClinicPresentation";
import { TrustBand } from "@/components/home/TrustBand";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <TrustBand />
      <ClinicPresentation />
    </main>
  );
}
