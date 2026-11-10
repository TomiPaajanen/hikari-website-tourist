import { AboutUs } from "@/components/about-us";
import { ComingSoon } from "@/components/coming-soon";
import { Experiences } from "@/components/experiences";
import { Faq } from "@/components/faq";
import { ForAgents } from "@/components/for-agents";
import { FreeGuide } from "@/components/free-guide";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language";
import { PlanTrip } from "@/components/plan-trip";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  // Read at build time: changing MAINTENANCE_MODE in Vercel takes effect after a redeploy.
  if (process.env.MAINTENANCE_MODE === "true") {
    return <ComingSoon />;
  }

  return (
    <LanguageProvider>
      <div className="mx-auto max-w-[1280px] text-center">
        <SiteHeader />
        <main>
          <Hero />
          <Services />
          <hr className="border-sand" />
          <Experiences />
          <hr className="border-sand" />
          <AboutUs />
          <hr className="border-sand" />
          <PlanTrip />
          <FreeGuide />
          <hr className="border-sand" />
          <ForAgents />
          <hr className="border-sand" />
          <Faq />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
