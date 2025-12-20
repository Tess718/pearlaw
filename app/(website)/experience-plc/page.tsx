
import Hero from "@/app/components/experience/ExperienceHero";
import CorporateIntro from "@/app/components/experience/CorporateIntro";
import SpecializedAreas from "@/app/components/experience/SpecializedAreas";
import InfoBanner from "@/app/components/experience/InfoBanner";
import ExperienceCTA from "@/app/components/experience/ExperienceCTA";

export default function ExperiencePage() {
  return (
    <main className="bg-[#f0f1f5]">
      <Hero />
      <CorporateIntro />
      <SpecializedAreas />
      <InfoBanner />
      <ExperienceCTA />
    </main>
  );
}
