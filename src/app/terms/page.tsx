import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Terms of Use | TOIRO Journeys",
};

const email = (
  <a href="mailto:info@toirojourneys.com" className="whitespace-nowrap">
    info@toirojourneys.com
  </a>
);

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="mt-4 font-serif text-[22px] font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <LanguageProvider>
      <div className="mx-auto max-w-[1280px]">
        <SiteHeader />
        <main className="mx-auto flex max-w-[44em] flex-col gap-4 px-4 py-16 text-sm leading-[1.85] md:py-20">
          <h1 className="font-serif text-[34px] leading-tight font-semibold md:text-[40px]">Terms of Use</h1>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 text-[13px]">
            <dt className="font-semibold">Effective Date</dt>
            <dd>November 5, 2026</dd>
            <dt className="font-semibold">Website</dt>
            <dd>TOIRO Journeys (operated by Mitsuki Nakao)</dd>
            <dt className="font-semibold">Contact Email</dt>
            <dd>{email}</dd>
          </dl>

          <p>
            Welcome to the website of TOIRO Journeys (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
            accessing or using our website, sample itineraries, blog posts, and related online services (collectively,
            the &quot;Site&quot;), you (&quot;the user&quot; or &quot;visitor&quot;) agree to comply with and be bound
            by these Terms of Use.
          </p>
          <p>If you do not agree with these terms, please do not use our Site.</p>

          <Section title="1. Scope and Relationship to Booking Terms">
            <List
              items={[
                <>
                  <b>Website Usage:</b> These Terms of Use govern your general access to and interaction with this
                  Site.
                </>,
                <>
                  <b>Tour Bookings:</b> If you book a private tour or planning service with us, your reservation,
                  payment, cancellation, and refund rights are governed by our dedicated Booking Terms & Cancellation
                  Policy. Where any conflict exists between these Terms of Use and the Booking Terms regarding a tour
                  purchase, the Booking Terms take priority.
                </>,
              ]}
            />
          </Section>

          <Section title="2. Intellectual Property Rights">
            <List
              items={[
                <>
                  <b>Ownership:</b> All content on this Site—including text, sample itineraries, travel guides,
                  photographs, graphics, logos, brand elements, audio/video clips, and design layouts—is the exclusive
                  property of Mitsuki Nakao / TOIRO Journeys or used with appropriate permission, and is protected
                  under Japanese and international copyright laws.
                </>,
                <>
                  <b>Limited License:</b> You are granted a limited, revocable, non-exclusive, and non-transferable
                  license to access and view the Site for personal, non-commercial use only.
                </>,
                <>
                  <b>Prohibited Acts:</b> You may not copy, reproduce, republish, download, post, transmit,
                  distribute, scrape, modify, or create derivative works from any content on this Site for commercial
                  or public purposes without our prior explicit written consent.
                </>,
              ]}
            />
          </Section>

          <Section title="3. Permitted and Prohibited Use">
            <p>When using our Site and contact channels, you agree not to:</p>
            <List
              items={[
                "Use the Site in any manner that violates local, national, or international laws or regulations.",
                "Submit false, misleading, or fraudulent inquiries through our contact or booking forms.",
                "Attempt to gain unauthorized access to our servers, website systems, database, or network infrastructure.",
                "Use automated systems (such as bots, spiders, or scrapers) to extract data or content from the Site.",
                "Transmit any harmful code, viruses, malware, or unsolicited commercial messages (spam).",
              ]}
            />
            <p>
              We reserve the right to restrict or terminate your access to the Site without prior notice if you violate
              these rules.
            </p>
          </Section>

          <Section title="4. Travel Information and Itinerary Disclaimers">
            <List
              items={[
                <>
                  <b>Informational Purposes Only:</b> Content provided on our blog, sample itineraries, travel tips,
                  and regional guides is intended for general informational and inspiration purposes only.
                </>,
                <>
                  <b>Accuracy:</b> While we strive to keep all information up to date, details regarding local venues,
                  operating hours, transportation, admission fees, and seasonal availability in Japan change
                  frequently. We do not guarantee that all information displayed on the Site is accurate, complete, or
                  current at all times.
                </>,
                <>
                  <b>No Travel Agency Services:</b> As outlined in our Booking Terms, TOIRO Journeys provides private
                  guiding and custom itinerary design. We do not operate as a licensed travel agency or booking agent
                  for third-party accommodation, transport, or flight services. Any reservations made with third-party
                  providers based on information on our Site are strictly between you and the respective provider.
                </>,
              ]}
            />
          </Section>

          <Section title="5. Third-Party Links and Resources">
            <p>
              Our Site may contain links to external third-party websites, booking portals, transport operators, or
              local attractions for your convenience.
            </p>
            <List
              items={[
                "We do not control, endorse, or accept responsibility for the content, privacy policies, practices, or availability of any third-party websites.",
                "Accessing external links is strictly at your own risk, and we encourage you to read the terms and privacy policies of any site you visit.",
              ]}
            />
          </Section>

          <Section title="6. Limitation of Liability">
            <p>To the fullest extent permitted by law in Japan:</p>
            <List
              items={[
                'The Site and its contents are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied.',
                "TOIRO Journeys and Mitsuki Nakao shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from your use of, or inability to use, this Site, including reliance on any information contained herein.",
              ]}
            />
          </Section>

          <Section title="7. Privacy Policy">
            <p>
              Your submission of personal data through forms on this Site is governed by our Privacy Policy, which
              explains how we collect, store, process, and protect your information under applicable Japanese data
              privacy laws (Act on the Protection of Personal Information - APPI).
            </p>
          </Section>

          <Section title="8. Changes to These Terms">
            <p>
              We reserve the right to revise or update these Terms of Use at any time without prior notice. Any
              modifications will become effective immediately upon posting to this page with an updated &quot;Effective
              Date.&quot; Continued use of the Site following any changes constitutes your acceptance of the updated
              terms.
            </p>
          </Section>

          <Section title="9. Governing Law and Jurisdiction">
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of Japan. Any dispute
              or claim arising out of or in connection with the use of this Site shall be subject to the exclusive
              jurisdiction of the competent courts in Japan.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p>If you have any questions regarding these Terms of Use or the practices of this Site, please contact us at:</p>
            <p>
              TOIRO Journeys
              <br />
              Representative: Mitsuki Nakao
              <br />
              Email: {email}
            </p>
          </Section>
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
