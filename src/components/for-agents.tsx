import {
  Eyebrow,
  PrivacyConsent,
  SectionHeading,
  TextField,
  fieldClass,
  sectionClass,
  submitClass,
} from "@/components/ui";

const services = [
  "Tours built around local experiences",
  "Improving and extending what you already sell",
  "Planning and operations support",
  "Guides for your groups",
];

const steps = [
  {
    title: "Get in touch",
    description: "Tell us about your travelers and what you are looking for. We reply within 3–5 business days.",
  },
  {
    title: "Discovery call",
    description: "We listen. Who your guests are, what you already offer, and where it could go further.",
  },
  {
    title: "Proposal",
    description: "We send ideas for you to review: itineraries, local experiences, or guide support.",
  },
  {
    title: "Start working together",
    description: "Once we agree on the scope, we begin planning and operations.",
  },
];

const topics = [
  { value: "proposals", label: "Tour proposals" },
  { value: "existing", label: "Existing products" },
  { value: "operations", label: "Planning and operations" },
  { value: "guides", label: "Guides" },
];

export function ForAgents() {
  return (
    <section id="agents" className={sectionClass}>
      <SectionHeading>For travel agencies</SectionHeading>
      <p className="mx-auto mb-10 max-w-[36em] text-sm leading-[1.8]">
        We work with agencies and DMCs who need a Japanese partner on the ground. Tell us what you are planning and we
        will come back with what we can do.
      </p>

      <ul className="mx-auto mb-11 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li key={service} className="rounded-[3px] bg-sand px-[18px] py-6 text-[13px] leading-[1.6] font-medium">
            {service}
          </li>
        ))}
      </ul>

      <Eyebrow className="mb-4">How we work together</Eyebrow>
      <ol className="mx-auto mb-11 grid max-w-[1000px] grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="flex flex-col gap-2 rounded-[3px] border border-sand px-[18px] py-6">
            <span className="font-serif text-[22px] leading-none font-semibold text-accent">{index + 1}</span>
            <h4 className="text-[13px] font-semibold">{step.title}</h4>
            <p className="text-xs leading-[1.7]">{step.description}</p>
          </li>
        ))}
      </ol>

      <form className="mx-auto flex max-w-[620px] flex-col gap-4 rounded-[3px] border border-sand px-5 py-8 md:p-[38px]">
        <h3 className="font-serif text-[26px] font-semibold">Get in touch</h3>
        <div className="flex flex-wrap gap-[15px]">
          <TextField
            label="Company or organisation"
            name="company"
            type="text"
            autoComplete="organization"
            className="flex-[1_1_200px]"
          />
          <TextField label="Your name" name="name" type="text" autoComplete="name" className="flex-[1_1_160px]" />
        </div>
        <TextField label="Email address" name="email" type="email" autoComplete="email" required />

        <fieldset>
          <legend className="mx-auto mb-4 text-xs">What would you like to talk about?</legend>
          <div className="grid grid-cols-1 gap-x-[18px] gap-y-2.5 text-xs sm:grid-cols-2">
            {topics.map((topic) => (
              <label key={topic.value} className="flex min-h-7 items-center justify-center gap-[7px]">
                <input type="checkbox" name="topics" value={topic.value} />
                {topic.label}
              </label>
            ))}
          </div>
        </fieldset>

        <label className="flex flex-col gap-1.5 text-xs">
          Message
          <textarea name="message" rows={3} className={fieldClass} />
        </label>
        <PrivacyConsent />
        <button type="button" className={`${submitClass} text-[15px]`}>
          Send
        </button>
        <p className="text-[11px] leading-[1.7]">Travelling on your own and have a question? Write to us here too.</p>
      </form>
    </section>
  );
}
