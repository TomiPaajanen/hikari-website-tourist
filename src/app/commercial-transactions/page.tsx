import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalList, LegalPage, contactEmail } from "@/components/legal";

export const metadata: Metadata = {
  title: "Specified Commercial Transactions Act Notice | TOIRO Journeys",
};

const items: { label: string; value: ReactNode }[] = [
  { label: "Legal Business Name", value: "Mitsuki Nakao / TOIRO Journeys" },
  { label: "Representative", value: "Mitsuki Nakao" },
  { label: "Business Address", value: "Provided without delay upon request via email." },
  { label: "Phone Number", value: "Provided without delay upon request via email." },
  { label: "Contact Email", value: contactEmail },
  {
    label: "Service Prices",
    value:
      "Displayed on individual tour pages or detailed in custom proposal quotes provided prior to booking. Prices shown are the total amount payable, including any applicable consumption tax.",
  },
  {
    label: "Additional Costs",
    value:
      "Entrance fees, transportation costs, and meals/personal expenses incurred during the tour (unless explicitly included in your tour quote).",
  },
  { label: "Accepted Payment Methods", value: "Credit Card" },
  {
    label: "Payment Timing",
    value: (
      <LegalList
        items={[
          <>
            <b>Planning Fee (20% of tour price):</b> Charged immediately upon booking confirmation.
          </>,
          <>
            <b>Remaining Balance (80% of tour price):</b> Automatically charged 30 days prior to the tour start date.
          </>,
          <>
            <b>Late Bookings (30 days or fewer prior to start date):</b> Full balance (100%) charged immediately at
            booking confirmation.
          </>,
        ]}
      />
    ),
  },
  {
    label: "Service Delivery Timing",
    value:
      "Guiding and itinerary planning services are rendered on the agreed date(s) specified in the booking confirmation itinerary.",
  },
  { label: "Quote Validity", value: "The validity period of each custom quote is stated in the quote." },
  { label: "Availability", value: "A limited number of private tours are accepted per season." },
  {
    label: "Cancellation & Refund Policy",
    value: "Governed by our Cancellation & Change Policy. Please review our cancellation terms prior to booking.",
  },
  {
    label: "System Requirements",
    value:
      "A modern web browser and valid email address to receive booking confirmations, itinerary updates, and payment receipts.",
  },
];

export default function CommercialTransactionsPage() {
  return (
    <LegalPage title="Specified Commercial Transactions Act Notice">
      <p className="-mt-2 text-[13px]" lang="ja">
        特定商取引法に基づく表記
      </p>
      <dl className="mt-4 border-t border-sand">
        {items.map(({ label, value }) => (
          <div key={label} className="grid gap-1 border-b border-sand py-4 md:grid-cols-[14em_1fr] md:gap-6">
            <dt className="font-semibold">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </LegalPage>
  );
}
