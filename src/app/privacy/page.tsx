import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection, contactEmail } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      details={[
        { label: "Effective Date", value: "November 5, 2026" },
        { label: "Business Name", value: "TOIRO Journeys (operated by Mitsuki Nakao)" },
        { label: "Contact Email", value: contactEmail },
      ]}
    >
      <p>
        At TOIRO Journeys (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we respect your privacy and are
        committed to protecting the personal information you share with us. This Privacy Policy explains how we
        collect, use, store, and safeguard your information when you visit our website, sign up for our free guide, or
        book our guiding services.
      </p>

      <LegalSection title="1. Information We Collect">
        <p>
          We collect personal information that you voluntarily provide to us when signing up for our guide, making
          inquiries, requesting custom itineraries, or booking tours. This includes:
        </p>
        <LegalList
          items={[
            <>
              <b>Guide Sign-ups:</b> Name, email address, travel interests, and travel timing or group size, when you
              request our free Kyoto guide.
            </>,
            <>
              <b>Contact Information:</b> Full name, email address, phone number, country of residence, and preferred
              language.
            </>,
            <>
              <b>Travel & Booking Details:</b> Travel dates, group size, physical mobility preferences, dietary
              restrictions, accommodation details, and custom itinerary requests.
            </>,
            <>
              <b>Payment Information:</b> Billing details processed securely through third-party payment processors
              (e.g., Stripe). We do not store or process complete credit card numbers directly on our servers.
            </>,
            <>
              <b>Website Usage Data:</b> IP address, browser type, and device information, recorded automatically by
              our web hosting provider when you visit the Site.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="2. How We Use Your Information">
        <p>We use your personal data strictly for the following purposes:</p>
        <LegalList
          items={[
            "To send you our free guide and, if you sign up, emails about our tours, including our spring 2027 announcements.",
            "To communicate with you regarding tour inquiries, custom itinerary designs, and booking confirmations.",
            "To deliver on-site private guiding services in Japan tailored to your group's needs.",
            "To process payments, planning fees, and refunds securely.",
            "To make optional third-party reservations (such as local restaurant bookings, activity tickets, or tea ceremonies) on your behalf at your request.",
            "To improve website functionality, customer service, and user experience.",
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Third-Party Sharing and Disclosures">
        <p>
          We respect your personal data and <b>never sell, rent, or trade your personal information to third parties</b>
          . We share your information only in the following limited circumstances:
        </p>
        <LegalList
          items={[
            <>
              <b>Service Providers:</b> Our email newsletter provider (MailerLite) to store our mailing list and send
              our guide and emails; our website host (Vercel); our email provider (Google Workspace); the service that delivers contact form
              messages to our inbox (Resend); and secure payment
              processors (e.g., Stripe) to complete payment transactions.
            </>,
            <>
              <b>Operating Partner:</b> Our co-founder and operating partner, Hikari, is involved in all aspects of
              running TOIRO Journeys, including administration. She has access to the information you give us for
              these purposes.
            </>,
            <>
              <b>Guides and Other Contractors:</b> We work with independent guides and other contractors who help
              deliver tours or support our operations. They receive only the information they need for their task,
              must keep it confidential, and may not use it for their own purposes.
            </>,
            <>
              <b>Local Suppliers:</b> Relevant details (e.g., guest names or dietary requirements) shared with local
              venues, workshops, or restaurants solely to arrange requested reservations for your tour.
            </>,
            <>
              <b>Legal Requirements:</b> If required by Japanese law, court order, or governmental authorities to
              comply with legal obligations.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Data Security and International Transfers">
        <LegalList
          items={[
            <>
              <b>Security Measures:</b> We implement reasonable administrative and technical security measures to
              protect your personal information from loss, theft, misuse, or unauthorized access.
            </>,
            <>
              <b>Cross-Border Transfers:</b> We are based in Japan and handle your personal data under the Act on the
              Protection of Personal Information (APPI). Some of our service providers store or process data outside
              Japan, including in the European Union and the United States (MailerLite, Vercel, Resend, and Google). These
              providers protect personal data under their own privacy and security commitments and the data
              protection laws of those regions.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Data Retention">
        <p>
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
          policy, manage business tax records, or satisfy legal and administrative reporting obligations. If you sign up
          for our emails, we keep your details until you unsubscribe or ask us to delete them.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies and Analytics">
        <p>
          Our website does not currently use tracking cookies or analytics tools. If we add them in the future (such as
          Google Analytics to understand web traffic), we will update this policy. You can adjust your browser settings
          to refuse or alert you about cookies, though some parts of the site may not function properly without them.
        </p>
      </LegalSection>

      <LegalSection title="7. Your Rights">
        <p>Under applicable privacy laws, you have the right to:</p>
        <LegalList
          items={[
            "Request access to the personal data we hold about you.",
            "Request corrections or updates to inaccurate information.",
            "Request the deletion of your personal data, subject to legal and financial record-keeping retention requirements.",
            "Unsubscribe from our emails at any time, using the unsubscribe link included in every email we send.",
          ]}
        />
        <p>To exercise any of these rights, please contact us at {contactEmail}.</p>
        <p>
          If you are in the European Union or European Economic Area, you may also lodge a complaint with your local
          data protection authority.
        </p>
      </LegalSection>

      <LegalSection title="8. Updates to This Policy">
        <p>
          We reserve the right to update this Privacy Policy from time to time to reflect changes in our legal
          obligations or operational practices. Any modifications will be posted to this page with an updated
          &quot;Effective Date.&quot;
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>For questions or concerns regarding our privacy practices, please contact:</p>
        <p>
          <b>TOIRO Journeys</b>
          <br />
          Representative: Mitsuki Nakao
          <br />
          Email: {contactEmail}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
