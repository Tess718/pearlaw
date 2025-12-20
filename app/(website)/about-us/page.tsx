import AboutHero from "@/app/components/about/AboutHero";
import MissionVission from "@/app/components/about/MissionVission";
import History from "@/app/components/about/History";


export default function AboutPage() {
  return (
    <main className="bg-[#f0f1f5]">
        <AboutHero />
        <MissionVission />
        <History />
    </main>
  );
}
