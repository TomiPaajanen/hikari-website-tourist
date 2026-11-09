import Image from "next/image";
import { Reviews } from "@/components/reviews";
import { SectionHeading, sectionClass } from "@/components/ui";

const founders = [
  {
    photo: { src: "/images/profile2.png", alt: "Hikari in a kimono, in a green garden" },
    name: "Hikari",
    role: "Co-founder",
    bio: "I grew up in the Hokkaido countryside. Teaching Japanese and culture abroad gave me both an inside and an outside view of Japan, and I found how many wonderful places and people are still out of the spotlight. My job here is to share them in a form that fits today, and to introduce them to people who are curious.",
  },
  {
    photo: { src: "/images/profile1.JPEG", alt: "Mitsuki on a hilltop overlooking the sea" },
    name: "Mitsuki",
    role: "Co-founder",
    bio: "I’ve been to 30 countries and all 47 prefectures, and I studied how travel can support rural communities. After years of guiding guests from overseas, I wanted to go deeper: private tours and learning programs where you understand Japan’s culture, not just see it.",
  },
];


export function AboutUs() {
  return (
    <section id="about" className={sectionClass}>
      <SectionHeading>Meet us</SectionHeading>
      <div className="mx-auto mb-11 flex max-w-[36em] flex-col gap-4 text-sm leading-[1.85]">
        <p>
          TOIRO Journeys started with two friends who love to travel and spent their 20s abroad. We met in Kyoto, one
          of our favourite places on earth, and we wanted to share the places and things we truly love with the people
          who visit.
        </p>
        <p>
          We see Japan through two views: as native Japanese, and as people who have lived outside it. That is how we
          find the places and people still out of the spotlight.
        </p>
        <p>With us, you don’t just travel. You learn, and you feel it for yourself.</p>
      </div>

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

      <Reviews />
    </section>
  );
}
