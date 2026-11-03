"use client";

import Image from "next/image";
import { useActionState } from "react";
import { signUpForGuide, type GuideSignupState } from "@/app/actions";
import { interests } from "@/lib/interests";
import { PrivacyConsent, SectionHeading, TextField, sectionClass, submitClass } from "@/components/ui";

const initialState: GuideSignupState = { status: "idle" };

export function FreeGuide() {
  const [state, formAction, pending] = useActionState(signUpForGuide, initialState);

  return (
    <section id="guide" className={`bg-sand ${sectionClass}`}>
      <SectionHeading>Plan your calm trip to Kyoto</SectionHeading>
      <p className="mx-auto mb-10 max-w-[36em] text-sm leading-[1.85]">
        We will send it to the email address you enter.
      </p>

      <form
        action={formAction}
        className="mx-auto flex max-w-[640px] flex-col items-center gap-[18px] rounded-[3px] bg-paper px-5 py-8 md:p-[38px]"
      >
        <Image
          src="/images/toiro_cover.png"
          alt="Cover of the TOIRO Journeys Kyoto field guide, showing the Nanzen-ji aqueduct"
          width={170}
          height={241}
          className="rounded-[3px] shadow-md ring-1 ring-sand"
        />
        <p className="text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">Free</p>
        <h3 className="font-serif text-[30px] font-semibold">Our Favorite Kyoto</h3>
        <p className="max-w-[32em] text-[13px] leading-[1.85]">
          Get our free guidebook: an overview of 11 areas in Kyoto, plus a closer look at two of them.
        </p>

        <hr className="my-2 w-full border-sand" />

        {state.status === "success" ? (
          <div role="status" className="flex flex-col items-center gap-2 py-4">
            <p className="font-serif text-2xl font-semibold">Thank you!</p>
            <p className="max-w-[30em] text-[13px] leading-[1.85]">
              Your guide is on its way. Check your inbox, and your spam folder just in case.
            </p>
          </div>
        ) : (
          <>
            <TextField label="Your name" name="name" type="text" autoComplete="name" className="w-full" />
            <TextField
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full"
            />

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

            <TextField
              label="When, and how many of you? (optional)"
              name="travelDetails"
              type="text"
              className="w-full"
            />
            {/* Hidden from people, but filled in by spam bots. */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            <p className="max-w-[34em] text-[12px] leading-[1.7]">
              You&apos;ll get our Kyoto spots and itinerary, plus emails about our spring 2027 call times (first
              announcement Nov 25). Unsubscribe anytime. For more details, review our{" "}
              <a href="#footer">Privacy Policy</a>.
            </p>
            <PrivacyConsent />
            <button
              type="submit"
              disabled={pending}
              className={`${submitClass} text-base disabled:cursor-wait disabled:opacity-60`}
            >
              {pending ? "Sending…" : "Send me the guide"}
            </button>
            {state.status === "error" && (
              <p role="alert" className="text-xs leading-[1.6] text-[#C25E46]">
                {state.message}
              </p>
            )}
          </>
        )}
      </form>
    </section>
  );
}
