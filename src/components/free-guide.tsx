import { interests } from "@/lib/interests";
import { Placeholder, PrivacyConsent, SectionHeading, TextField, sectionClass, submitClass } from "@/components/ui";

export function FreeGuide() {
  return (
    <section id="guide" className={`bg-sand ${sectionClass}`}>
      <SectionHeading>A free guide to Kyoto</SectionHeading>
      <p className="mx-auto mb-10 max-w-[36em] text-sm leading-[1.85]">
        We will send it to the email address you enter. If you would like to be considered for a private tour in
        spring 2027, tick the box below.
      </p>

      <form className="mx-auto flex max-w-[640px] flex-col items-center gap-[18px] rounded-[3px] bg-paper px-5 py-8 md:p-[38px]">
        <Placeholder label="Cover" className="h-[220px] w-[170px] rounded-[3px]" />
        <p className="text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">Free</p>
        <h3 className="font-serif text-[30px] font-semibold">Kyoto, without the crowds</h3>
        <p className="max-w-[32em] text-[13px] leading-[1.85]">
          [ Three lines on what the reader learns. How to build a day that avoids the crush, who you can meet, when to
          come. ]
        </p>

        <hr className="my-2 w-full border-sand" />

        <TextField label="Your name" name="name" type="text" autoComplete="name" className="w-full" />
        <TextField label="Email address" name="email" type="email" autoComplete="email" required className="w-full" />

        <fieldset className="mt-1.5 w-full">
          <legend className="mx-auto mb-[18px] text-xs">What are you curious about?</legend>
          <div className="grid grid-cols-1 gap-x-5 gap-y-[11px] sm:grid-cols-2">
            {interests.map((interest) => (
              <label key={interest.id} className="flex min-h-7 items-center justify-center gap-[9px] text-xs">
                <input type="checkbox" name="interests" value={interest.id} />
                <span className="size-2.5 shrink-0 rounded-full" style={{ background: interest.color }} />
                {interest.name}
              </label>
            ))}
            <label className="flex min-h-7 items-center justify-center gap-[9px] text-xs">
              <input type="checkbox" name="interests" value="unsure" />
              <span className="size-2.5 shrink-0 rounded-full border border-ink" />
              Not sure yet
            </label>
          </div>
        </fieldset>

        <label className="mt-1.5 flex w-full items-start justify-center gap-2.5 rounded-[3px] border-[1.5px] border-accent px-[18px] py-4 text-left text-[12.5px] leading-[1.6]">
          <input type="checkbox" name="springWaitlist" className="mt-0.5" />
          <span>
            Put me on the list for private tours in spring 2027.{" "}
            <span className="font-semibold text-accent">Only a limited number of places.</span>
          </span>
        </label>

        <TextField label="When, and how many of you? (optional)" name="travelDetails" type="text" className="w-full" />
        <PrivacyConsent />
        <button type="button" className={`${submitClass} text-base`}>
          Send me the guide
        </button>
      </form>
    </section>
  );
}
