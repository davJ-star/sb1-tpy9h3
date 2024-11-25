import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <FeatureSection />
    </div>
  );
}