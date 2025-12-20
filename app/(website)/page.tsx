
import Hero from "@/app/components/landing/Hero";
import WhyChooseUs from "@/app/components/landing/WhyChooseUs";
import Testimonials from "@/app/components/landing/Testimonials";
import CallToAction from "@/app/components/landing/CallToAction";
import Expertise from "@/app/components/landing/Expertise";
import Team from "@/app/components/landing/Team";
import OurBlogs from "@/app/components/landing/OurBlogs";
import RealCta from "@/app/components/landing/RealCta";

export default function Home() {
  return (
    <main className="bg-[#f0f1f5]">
      <Hero />
      <CallToAction />
      <Expertise />
      <WhyChooseUs />
      <Team />
      <Testimonials/>
      <div className="hidden lg:block">
        <OurBlogs />
      </div>
      <RealCta />
    </main>
  );
}
