import { ButtonLink, SectionHeading, sectionClass } from "@/components/ui";
import { PLAN_TRIP_URL } from "@/lib/links";

type Service = {
  title: string;
  price: string;
  unit?: string;
  description: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Custom itinerary planning",
    price: "from ¥6,000",
    unit: "per experience",
    description:
      "Tell us one thing you want to do, such as a Japanese painting workshop. We find the right place, and build your plan around it.",
  },
  {
    title: "Recommendations and booking assistance",
    price: "from ¥3,000",
    unit: "per experience",
    description: "We make the reservation for you in Japanese.",
  },
  {
    title: "Private guided tour",
    price: "Price on request",
    description:
      "Half-day, full-day, or multi-day private custom tours, shaped around your wishes, with a guide by your side throughout.",
    featured: true,
  },
];

export function Services() {
  return (
    <section id="services" className={sectionClass}>
      <SectionHeading className="mb-10">Explore Japan with us</SectionHeading>

      <ul className="mx-auto mb-11 grid max-w-[1000px] grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service) => (
          <li
            key={service.title}
            className={`flex flex-col gap-2 rounded-[3px] border px-[18px] py-7 ${
              service.featured ? "border-ink/40" : "border-sand"
            }`}
          >
            <h3 className="mb-3 font-serif text-[22px] font-semibold">{service.title}</h3>
            <p className="font-serif text-[20px] font-semibold text-ink/80">{service.price}</p>
            {service.unit && <p className="text-[10px] tracking-[0.08em] text-accent uppercase">{service.unit}</p>}
            <p className="mt-3 text-xs leading-[1.8]">{service.description}</p>
          </li>
        ))}
      </ul>

      <ButtonLink href={PLAN_TRIP_URL} className="px-8 py-[15px] text-sm">
        Plan your trip with us
      </ButtonLink>
    </section>
  );
}
