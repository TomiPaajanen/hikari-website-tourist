import Image from "next/image";
import { SectionHeading, sectionClass } from "@/components/ui";

const founders = [
  {
    photo: { src: "/images/profile2.png", alt: "Portrait in a kimono, in a green garden" },
    name: "[ NAME ]",
    role: "[ Role ]",
    bio: "[ Three to five lines. Years lived abroad, the regeneration background, who they know in Kyoto and Nara. Facts about people and places, not adjectives. ]",
  },
  {
    photo: { src: "/images/profile1.JPEG", alt: "Portrait on a hilltop overlooking the sea" },
    name: "[ NAME ]",
    role: "[ Role ]",
    bio: "[ Three to five lines. What they bring, who they work with, which part of the journey they look after. Facts, not adjectives. ]",
  },
];

export function AboutUs() {
  return (
    <section id="about" className={sectionClass}>
      <SectionHeading>The two of us</SectionHeading>
      <p className="mx-auto mb-11 max-w-[36em] text-sm leading-[1.85]">
        [ A short Kyoto story — the morning, the person, the moment that made us want to do this. Three or four
        sentences. ]
      </p>

      <div className="flex flex-wrap justify-center gap-14">
        {founders.map((founder, index) => (
          <article key={index} className="flex min-w-0 flex-[0_1_380px] flex-col items-center gap-4">
            <Image
              src={founder.photo.src}
              alt={founder.photo.alt}
              width={190}
              height={190}
              className="size-[190px] rounded-full object-cover object-top"
            />
            <h3 className="font-serif text-[28px] font-semibold">{founder.name}</h3>
            <p className="text-xs tracking-[0.06em] text-accent uppercase">{founder.role}</p>
            <p className="text-[13px] leading-[1.85]">{founder.bio}</p>
          </article>
        ))}
      </div>

      <blockquote className="mx-auto mt-12 max-w-[40em] border-y border-sand py-[22px] font-serif text-[21px] leading-[1.7] italic">
        TOIRO means ten colours. Ten travellers, ten Japans — because the same place tells a different story to
        everyone.
      </blockquote>
      <p className="mx-auto mt-[22px] max-w-[36em] text-[13px] leading-[1.85]">
        [ One paragraph on why we started TOIRO Journeys. First person, with our names and faces on it. ]
      </p>
    </section>
  );
}
