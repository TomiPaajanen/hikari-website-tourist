import type { Metadata } from "next";
import Link from "next/link";
import { LegalList, LegalPage, LegalSection, contactEmail } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use | TOIRO Journeys",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      details={[
        { label: "Effective Date", value: "November 5, 2026" },
        { label: "Website", value: "TOIRO Journeys (operated by Mitsuki Nakao)" },
        { label: "Contact Email", value: contactEmail },
      ]}
    >
      <p>
        Welcome to the website of TOIRO Journeys (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By
        accessing or using our website, sample itineraries, blog posts, and related online services (collectively,
        the &quot;Site&quot;), you (&quot;the user&quot; or &quot;visitor&quot;) agree to comply with and be bound
        by these Terms of Use.
      </p>
      <p>If you do not agree with these terms, please do not use our Site.</p>

      <LegalSection title="1. Scope and Relationship to Booking Terms">
        <LegalList
          items={[
            <>
              <b>Website Usage:</b> These Terms of Use govern your general access to and interaction with this
              Site.
            </>,
            <>
              <b>Tour Bookings:</b> If you book a private tour or planning service with us, your reservation,
              payment, cancellation, and refund rights are governed by our dedicated{" "}
              <Link href="/cancellation">Booking Terms & Cancellation Policy</Link>. Where any conflict exists between these Terms of Use and the Booking Terms regarding a tour
              purchase, the Booking Terms take priority.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Intellectual Property Rights">
        <LegalList
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
      </LegalSection>

      <LegalSection title="3. Permitted and Prohibited Use">
        <p>When using our Site and contact channels, you agree not to:</p>
        <LegalList
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
      </LegalSection>

      <LegalSection title="4. Travel Information and Itinerary Disclaimers">
        <LegalList
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
      </LegalSection>

      <LegalSection title="5. Third-Party Links and Resources">
        <p>
          Our Site may contain links to external third-party websites, booking portals, transport operators, or
          local attractions for your convenience.
        </p>
        <LegalList
          items={[
            "We do not control, endorse, or accept responsibility for the content, privacy policies, practices, or availability of any third-party websites.",
            "Accessing external links is strictly at your own risk, and we encourage you to read the terms and privacy policies of any site you visit.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Limitation of Liability">
        <p>To the fullest extent permitted by law in Japan:</p>
        <LegalList
          items={[
            'The Site and its contents are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied.',
            "TOIRO Journeys and Mitsuki Nakao shall not be liable for any direct, indirect, incidental, consequential, or special damages resulting from your use of, or inability to use, this Site, including reliance on any information contained herein.",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Privacy Policy">
        <p>
          Your submission of personal data through forms on this Site is governed by our <Link href="/privacy">Privacy Policy</Link>, which
          explains how we collect, store, process, and protect your information under applicable Japanese data
          privacy laws (Act on the Protection of Personal Information - APPI).
        </p>
      </LegalSection>

      <LegalSection title="8. Changes to These Terms">
        <p>
          We reserve the right to revise or update these Terms of Use at any time without prior notice. Any
          modifications will become effective immediately upon posting to this page with an updated &quot;Effective
          Date.&quot; Continued use of the Site following any changes constitutes your acceptance of the updated
          terms.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing Law and Jurisdiction">
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of Japan. Any dispute
          or claim arising out of or in connection with the use of this Site shall be subject to the exclusive
          jurisdiction of the competent courts in Japan.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact Us">
        <p>If you have any questions regarding these Terms of Use or the practices of this Site, please contact us at:</p>
        <p>
          TOIRO Journeys
          <br />
          Representative: Mitsuki Nakao
          <br />
          Email: {contactEmail}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
