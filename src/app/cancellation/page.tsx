import type { Metadata } from "next";
import { LegalList, LegalPage, LegalSection, contactEmail } from "@/components/legal";

export const metadata: Metadata = {
  title: "Cancellation & Change Policy",
};

const cancellationFees = [
  { notice: "From booking confirmation to 30 days before tour start date", fee: "30% (Includes the non-refundable planning fee)" },
  { notice: "29 to 15 days before tour start date", fee: "50%" },
  { notice: "14 to 8 days before tour start date", fee: "70%" },
  { notice: "7 days or fewer, on start date, or no-show", fee: "100% (No refund)" },
];

export default function CancellationPage() {
  return (
    <LegalPage title="Cancellation & Change Policy">
      <p>
        At TOIRO Journeys, we design custom, private experiences tailored to your travel plans. Because our tours are
        reserved exclusively for your party and involve advance guide scheduling and itinerary design, the following
        terms apply to all tour cancellations, changes, and refunds.
      </p>
      <p>
        All cancellation and change requests must be submitted in writing by email to {contactEmail}. Days are
        counted by calendar date in Japan Standard Time (JST). A cancellation email received by 3:00 PM JST counts as
        received that day. An email received after 3:00 PM JST counts as received the next calendar day.
      </p>

      <LegalSection title="1. Cancellation by the Guest">
        <p>
          If you need to cancel your booked tour, a cancellation fee applies. The fee is calculated as a percentage of
          the total tour price based on the date and time we receive your written email notice:
        </p>
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-ink">
              <th className="py-2 pr-4 font-semibold">Cancellation Notice Received (JST)</th>
              <th className="py-2 font-semibold">Cancellation Fee (% of Total Tour Price)</th>
            </tr>
          </thead>
          <tbody>
            {cancellationFees.map(({ notice, fee }) => (
              <tr key={notice} className="border-b border-sand">
                <td className="py-2.5 pr-4">{notice}</td>
                <td className="py-2.5">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <b>Booking confirmation:</b> Your booking is confirmed on the day we receive your 20% planning fee. Before
          that day, no booking exists and no cancellation fee applies.
        </p>

        <h3 className="mt-2 font-semibold">Planning Fee Policy</h3>
        <LegalList
          items={[
            "The 20% planning fee paid at booking covers the design of your custom itinerary. It is non-refundable in any case of customer cancellation.",
            "The planning fee counts directly toward the total cancellation fee shown above—it is not charged on top of it.",
            "If you have paid more than the applicable cancellation fee at the time of cancellation, we will refund the difference.",
            "If the fee is higher than the amount you have paid so far, the remaining difference will be charged to the credit card used at booking.",
          ]}
        />
      </LegalSection>

      <LegalSection title="2. Tour Date & Itinerary Changes">
        <p>
          We understand travel schedules can shift. We will make every effort to accommodate change requests, subject
          to guide and third-party availability.
        </p>
        <LegalList
          items={[
            <>
              <b>Free Date Change:</b> You may change your tour date once at no charge if your request is submitted 30
              days or more before the original tour start date.
            </>,
            <>
              <b>Late Changes & Additional Change Fees</b> (or the equivalent in EUR):
              <LegalList
                items={[
                  "29 to 15 days before start date: US$50 per change",
                  "14 to 4 days before start date: US$100 per change",
                  "3 days or less before start date: US$150 per change",
                ]}
              />
            </>,
            <>
              <b>Daily Cut-off Deadline:</b> Change requests must reach us by 3:00 PM JST on the day prior to the tour
              start date. We cannot accommodate same-day change requests; same-day requests will be treated as a
              customer cancellation under Section 1.
            </>,
            <>
              <b>Cancelling After a Date Change:</b> If you cancel a tour after previously modifying the date, any
              cancellation fee in Section 1 will be calculated from your original tour start date.
            </>,
            <>
              <b>Unavailable Changes:</b> If we are unable to accommodate your requested date change and you choose to
              cancel, standard cancellation fees in Section 1 apply.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="3. Refunds & Payment Processing">
        <LegalList
          items={[
            <>
              <b>Processing Window:</b> Confirmed refunds will be processed within 14 days of confirmation.
            </>,
            <>
              <b>Payment Method & Currency:</b> Refunds are credited back to the original payment card in the currency
              originally billed (USD or EUR).
            </>,
            <>
              <b>Payment Processing Fees:</b> Payment gateway transaction fees are non-refundable to us when issuing a
              refund. Except for cancellations by TOIRO Journeys (Section 4), transaction processing fees will be
              deducted from your total refund amount.
            </>,
            <>
              <b>Exchange Rates & Issuer Fees:</b> Currency exchange rate fluctuations and bank/card issuer fees are
              outside our control and are not covered by TOIRO Journeys.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Cancellation or Modifications by TOIRO Journeys">
        <LegalList
          items={[
            <>
              <b>Operator Cancellation:</b> If we must cancel a tour for a reason that is not your fault (e.g., guide
              emergency or illness), you will receive a 100% full refund, including the 20% planning fee.
            </>,
            <>
              <b>Itinerary Changes:</b> If we must modify a portion of your itinerary due to local disruptions, we will
              offer a comparable alternative. If you choose not to accept the alternative, you may cancel the affected
              portion without a cancellation fee.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Force Majeure & Severe Disruptions">
        <p>
          If a tour cannot take place due to events beyond control—including natural disasters, severe weather
          conditions, epidemics, government orders, strikes, or major public transport suspensions:
        </p>
        <LegalList
          items={[
            "We will issue a refund of total amounts paid, minus unrecoverable costs already paid to third-party providers on your behalf. The refund includes the 20% planning fee.",
            "If a tour is operational and safe to run, but you choose to cancel due to external events or travel disruptions, standard cancellation fees in Section 1 apply.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Travel Insurance">
        <p>We strongly advise all guests to purchase comprehensive travel insurance at the time of booking.</p>
        <p>
          Your policy should include coverage for trip cancellations, travel delays, lost luggage, medical treatment,
          and emergency evacuation. Cancellation fees detailed in Section 1 apply regardless of the cause of
          cancellation, including medical issues, flight delays, or personal emergencies.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>For cancellation requests, date modifications, or questions regarding these terms, please contact:</p>
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
