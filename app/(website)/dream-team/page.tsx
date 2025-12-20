import DTHero from "@/app/components/dreamteam/DTHero";
import Values from "@/app/components/dreamteam/Values";
import Team from "@/app/components/landing/Team";



export default function DreamTeam() {
  return (
    <main className="bg-[#f0f1f5]">
        <DTHero />
        <Team />
        <Values />
    </main>
  );
}
