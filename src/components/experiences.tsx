import Image from "next/image";
import type { CSSProperties } from "react";
import { getInterest, interests, type Interest, type InterestId } from "@/lib/interests";
import { ButtonLink, Eyebrow, SectionHeading, sectionClass } from "@/components/ui";
import { SIGNUP_URL } from "@/lib/links";

// Bubble centres sit on a circle whose radius is this percentage of the diagram width.
const RING_RADIUS = 34.29;

type ItineraryStop = {
  name: string;
  minutes: number;
  description: string;
};

type ItineraryExample = {
  title: string;
  theme: string;
  image: { src: string; alt: string; position: string };
  interest: InterestId;
  duration: string;
  route: string;
  intro: string;
  stops: ItineraryStop[];
  note: string;
};

const itineraryExamples: ItineraryExample[] = [
  {
    title: "01 | Okazaki, Nanzen-ji & Ginkaku-ji",
    theme: "Art and crafts in Okazaki",
    image: {
      src: "/images/temple2.jpg",
      alt: "The vermilion Otenmon gate of Heian Jingu Shrine under a blue sky",
      position: "object-[50%_65%]",
    },
    interest: "traditions",
    duration: "6–7 hours",
    route: "Higashiyama Station → Higashiyama Station",
    intro: "Take your time with art, crafts and a shrine garden, without rushing the exhibitions.",
    stops: [
      {
        name: "Kyoto City KYOCERA Museum of Art",
        minutes: 120,
        description:
          "Enjoy the art and architecture, or try the nearby Hosomi Museum or National Museum of Modern Art, Kyoto.",
      },
      { name: "Lunch in Okazaki", minutes: 60, description: "Take a proper break between exhibitions." },
      {
        name: "Kyoto Museum of Crafts and Design",
        minutes: 75,
        description: "Explore craft materials and techniques. Check dates for demonstrations and workshops.",
      },
      {
        name: "Heian Jingu Shrine & gardens",
        minutes: 75,
        description: "Enjoy the seasonal scenery as you walk through the gardens.",
      },
    ],
    note: "Allow about 5–15 minutes on foot between venues. This full-day plan includes a 45-minute cafe break, travel and spare time. Adjust the order for closing days and last admission.",
  },
  {
    title: "02 | Kyoto Imperial Palace, Demachiyanagi & Shimogamo",
    theme: "From the palace to forest and river",
    image: {
      src: "/images/temple1.jpg",
      alt: "A wooden shrine gate hung with chrysanthemum-crest curtains, opening onto a green courtyard",
      position: "object-[50%_55%]",
    },
    interest: "spiritual",
    duration: "6.5–7.5 hours",
    route: "Imadegawa Station → Demachiyanagi Station",
    intro:
      "Walk through the Imperial Palace and east of Gyoen, then continue to Shimogamo in the afternoon.",
    stops: [
      {
        name: "Kyoto Imperial Palace & Kyoto Gyoen",
        minutes: 115,
        description: "After visiting the palace, enjoy Gyoen's greenery as you head east.",
      },
      {
        name: "Nashinoki Shrine & Rozan-ji",
        minutes: 60,
        description: "Time for a shrine visit and a garden. Choose just one if you prefer less walking.",
      },
      {
        name: "Lunch east of the Imperial Palace",
        minutes: 60,
        description: "Head towards Demachi after lunch. Stop at a cafe if time allows.",
      },
      {
        name: "Shimogamo Shrine, Tadasu-no-Mori & Kamo Delta",
        minutes: 105,
        description: "Finish with 75 minutes visiting the shrine and forest, then 30 minutes by the river.",
      },
    ],
    note: "This plan allows about 50–80 minutes for walking and short breaks. The palace normally closes on Mondays (or the following day if Monday is a holiday). The palace and Gyoen have different access arrangements.",
  },
];

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
      <div className="relative h-[220px]">
        <Image
          src={example.image.src}
          alt={example.image.alt}
          fill
          sizes="(max-width: 560px) 100vw, 520px"
          className={`object-cover ${example.image.position}`}
        />
      </div>
      <div className="flex flex-col items-center gap-3.5 p-[26px]">
        <h3 className="font-serif text-[26px] leading-tight font-semibold">{example.title}</h3>
        <p className="font-serif text-lg italic">{example.theme}</p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px]">
          <span className="size-[9px] rounded-full" style={{ background: interest.color }} />
          <span>{interest.name}</span>
          <span>· Full day · {example.duration}</span>
        </div>
        <p className="text-[11px] tracking-[0.04em] text-accent">{example.route}</p>
        <p className="text-[13px] leading-[1.7]">{example.intro}</p>

        <ol className="mt-1 flex w-full flex-col gap-4 border-t border-sand pt-5 text-left">
          {example.stops.map((stop, index) => (
            <li key={stop.name} className="flex gap-3.5">
              <span className="font-serif text-[22px] leading-none text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <h4 className="font-serif text-[17px] leading-tight font-semibold">{stop.name}</h4>
                <p className="text-[11px] text-accent">{stop.minutes} min</p>
                <p className="text-[12.5px] leading-[1.7]">{stop.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-1 w-full rounded-[3px] bg-sand/50 px-4 py-3 text-left text-[11.5px] leading-[1.7]">
          {example.note}
        </p>
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
        <ButtonLink href={SIGNUP_URL} className="px-8 py-[15px] text-sm">
          Plan your trip with us
        </ButtonLink>
      </div>
    </section>
  );
}
