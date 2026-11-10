import type { ReactNode } from "react";
import { SectionHeading, sectionClass } from "@/components/ui";
import { EARLY_ACCESS_URL } from "@/lib/links";

const questions: { question: string; answer: ReactNode }[] = [
  {
    question: "Do I need to know my exact travel dates?",
    answer: "No. A rough idea of your travel timing is enough to start the conversation.",
  },
  {
    question: "What is the early access list?",
    answer: (
      <>
        It is the way to be the first to plan your trip with us.{" "}
        <a href={EARLY_ACCESS_URL}>Join the early access list</a>.
      </>
    ),
  },
  {
    question: "What happens on a discovery call?",
    answer:
      "We will spend 30 minutes online asking what you are curious about and sharing what we could do together.",
  },
  {
    question: "Is joining the early access list a commitment to book?",
    answer: "No. Joining the list and having a discovery call do not commit you to booking a trip.",
  },
  {
    question: "When should I join the early access list?",
    answer: "Join by November 24 to get first pick of discovery call times for spring 2027.",
  },
  {
    question: "How much is a private tour?",
    answer:
      "It depends on your plans, so we quote after we hear what you have in mind. As a guide, it starts from ¥50,000 per person for a half day and ¥100,000 per person for a full day.",
  },
];

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      aria-hidden
      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
    >
      <path
        d="M3 6 L8 11 L13 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Faq() {
  return (
    <section id="faq" className={sectionClass}>
      <SectionHeading className="mb-8">Frequently asked questions</SectionHeading>
      {/* Native <details> elements open and close without any JavaScript. */}
      <div className="mx-auto max-w-[640px] text-left">
        {questions.map(({ question, answer }) => (
          <details key={question} className="group border-b border-sand last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[19px] leading-snug [&::-webkit-details-marker]:hidden">
              {question}
              <ChevronIcon />
            </summary>
            <p className="-mt-2 pr-10 pb-6 text-[13.5px] leading-[1.8]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
