import Image from "next/image";
import type { CSSProperties } from "react";
import { getInterest, interests, type Interest, type InterestId } from "@/lib/interests";
import { ButtonLink, Eyebrow, SectionHeading, sectionClass } from "@/components/ui";

// Bubble centres sit on a circle whose radius is this percentage of the diagram width.
const RING_RADIUS = 34.29;

type ItineraryExample = {
  title: string;
  image: { src: string; alt: string };
  interest: InterestId;
  days: string;
  plan: string[];
};

const itineraryExamples: ItineraryExample[] = [
  {
    title: "[ JOURNEY TITLE ]",
    image: { src: "/images/top-1.png", alt: "Sunset over Kyoto, seen from the surrounding hills" },
    interest: "traditions",
    days: "[ N ]",
    plan: [
      "[ Who you meet → what you touch → what you understand ]",
      "[ Same three points, two or three lines ]",
      "[ Same three points, two or three lines ]",
    ],
  },
  {
    title: "[ JOURNEY TITLE ]",
    image: { src: "/images/top-3.jpg", alt: "A traditional wooden house in a leafy Japanese garden" },
    interest: "contemporary",
    days: "[ N ]",
    plan: [
      "[ Who you meet → what you touch → what you understand ]",
      "[ Same three points, two or three lines ]",
      "[ Same three points, two or three lines ]",
    ],
  },
];

const itineraryTags = ["Where", "What is included", "Languages"];

function InterestBubble({
  interest,
  className = "",
  style,
}: {
  interest: Interest;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <li
      className={`flex aspect-square flex-col items-center justify-center gap-[7px] rounded-full border-[1.5px] bg-paper text-center ${className}`}
      style={{ borderColor: interest.color, ...style }}
    >
      <span className="font-serif text-[19px] leading-[1.2] font-semibold">{interest.name}</span>
      <span className="text-[10px] leading-normal">{interest.summary}</span>
    </li>
  );
}

function InterestRing() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[700px] md:block">
      <div aria-hidden className="absolute inset-[15.71%] rounded-full border border-sand" />
      <ul>
        {interests.map((interest, index) => {
          const angle = (index / interests.length) * 2 * Math.PI;
          return (
            <InterestBubble
              key={interest.id}
              interest={interest}
              className="absolute w-[27.14%] -translate-x-1/2 -translate-y-1/2 p-[26px]"
              style={{
                left: `${50 + RING_RADIUS * Math.sin(angle)}%`,
                top: `${50 - RING_RADIUS * Math.cos(angle)}%`,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

function ItineraryCard({ example }: { example: ItineraryExample }) {
  const interest = getInterest(example.interest);

  return (
    <article className="max-w-[520px] min-w-0 flex-[1_1_400px] overflow-hidden rounded-[3px] border border-sand">
      <div className="relative h-[190px]">
        <Image
          src={example.image.src}
          alt={example.image.alt}
          fill
          sizes="(max-width: 560px) 100vw, 520px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-3.5 p-[26px]">
        <h3 className="font-serif text-[26px] font-semibold">{example.title}</h3>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
          <span className="size-[9px] rounded-full" style={{ background: interest.color }} />
          <span>{interest.name}</span>
          <span>· {example.days} days</span>
        </div>
        <ol className="flex flex-col gap-2.5 text-[12.5px] leading-[1.7]">
          {example.plan.map((day, index) => (
            <li key={index}>
              <span className="font-semibold">Day {index + 1}</span>&nbsp;&nbsp;{day}
            </li>
          ))}
        </ol>
        <div className="mt-0.5 flex flex-wrap justify-center gap-2">
          {itineraryTags.map((tag) => (
            <span key={tag} className="rounded-[3px] bg-sand px-2.5 py-[5px] text-[11px]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Experiences() {
  return (
    <section id="itineraries" className={sectionClass}>
      <SectionHeading>Tell us what you are curious about</SectionHeading>
      <p className="mx-auto mb-2.5 max-w-[34em] text-sm leading-[1.8]">We will build the itinerary around it.</p>

      <ul className="my-8 flex flex-wrap justify-center gap-4 md:hidden">
        {interests.map((interest) => (
          <InterestBubble key={interest.id} interest={interest} className="w-40 p-4" />
        ))}
      </ul>
      <InterestRing />

      <Eyebrow className="mt-6 mb-5">Tour itinerary examples</Eyebrow>
      <div className="flex flex-wrap justify-center gap-[26px]">
        {itineraryExamples.map((example, index) => (
          <ItineraryCard key={index} example={example} />
        ))}
      </div>

      <div className="mt-[34px] flex flex-col items-center gap-5">
        <p className="font-serif text-xl italic">
          Every itinerary is an example. We build yours around your interest.
        </p>
        <ButtonLink href="#plan" className="px-8 py-[15px] text-sm">
          Plan your trip with us
        </ButtonLink>
      </div>
    </section>
  );
}
