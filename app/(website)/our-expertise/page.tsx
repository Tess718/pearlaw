import ExpHero from "@/app/components/expertise/ExpHero";
import Expertise from "@/app/components/landing/Expertise";
import Matters from "@/app/components/expertise/Matters";

export default function AboutPage() {
  return (
    <main className="bg-[#f0f1f5]">
        <ExpHero />
        <Expertise hideLearnMore={true} mobileSubtitle="Our Practice Areas" mobileTitle="We deliver focused, practical legal solutions across key areas that matter most to Nigerian businesses." />
        <Matters/>
    </main>
  );
}
