import Image from "next/image";
import { ButtonLink, sectionClass } from "@/components/ui";
import { SIGNUP_URL } from "@/lib/links";

const benefits = [
  "A chance for us to hear what you are looking for",
  "An introduction to our tours and how we work",
  "30 countries, all 47 prefectures, and experience guiding visitors from overseas",
];

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 16 16" aria-hidden className="mt-[3px] shrink-0">
      <path
        d="M3 8.5 L6.5 12 L13 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      />
    </svg>
  );
}

export function PlanTrip() {
  return (
    <section id="plan" className={sectionClass}>
      <div className="mx-auto max-w-[880px] rounded-[3px] border border-sand px-5 py-8 md:px-12 md:py-[46px]">
        <h2 className="mb-[34px] font-serif text-[30px] leading-tight font-semibold md:text-[34px]">
          Need help planning your trip?
        </h2>

        <div className="flex flex-wrap items-center gap-[38px]">
          <div className="relative h-[250px] min-w-0 flex-[1_1_300px] overflow-hidden rounded-[3px]">
            <Image
              src="/images/need help planning your trip.png"
              alt="Smiling in a yukata outside a traditional Kyoto restaurant"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-[50%_30%]"
            />
          </div>

          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5 text-left">
            <p className="text-sm leading-[1.75]">
              Tell us a little about your trip and what you are curious about.
            </p>
            <ul className="flex flex-col gap-3.5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-[13.5px] leading-[1.7]">
                  <CheckIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ButtonLink href={SIGNUP_URL} className="mt-9 px-9 py-[17px] text-[15px] font-medium">
          Plan your trip with us
        </ButtonLink>
      </div>
    </section>
  );
}
