import { AboutUs } from "@/components/about-us";
import { Experiences } from "@/components/experiences";
import { ForAgents } from "@/components/for-agents";
import { FreeGuide } from "@/components/free-guide";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language";
import { PlanTrip } from "@/components/plan-trip";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="mx-auto max-w-[1280px] text-center">
        <SiteHeader />
        <main>
          <Hero />
          <Experiences />
          <hr className="border-sand" />
          <AboutUs />
          <hr className="border-sand" />
          <PlanTrip />
          <FreeGuide />
          <hr className="border-sand" />
          <ForAgents />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
