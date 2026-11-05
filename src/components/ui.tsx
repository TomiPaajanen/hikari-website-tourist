import type { ComponentProps, ReactNode } from "react";

export const sectionClass = "px-4 pt-16 pb-16 md:px-14 md:pt-20 md:pb-[76px]";

export const fieldClass =
  "min-h-11 rounded-[3px] border border-sand bg-white p-[13px] text-center text-[13px]";

export const submitClass =
  "min-h-11 w-full cursor-pointer rounded-[3px] bg-accent p-4 font-medium text-white transition-opacity hover:opacity-90";

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`mb-3.5 font-serif text-[30px] leading-tight font-semibold md:text-[38px] ${className}`}>
      {children}
    </h2>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-serif text-[13px] font-semibold tracking-[0.12em] text-accent uppercase ${className}`}>
      {children}
    </p>
  );
}

export function ButtonLink({ className = "", ...props }: ComponentProps<"a">) {
  return (
    <a
      className={`inline-flex min-h-11 items-center rounded-[3px] bg-accent text-white no-underline transition-opacity hover:opacity-90 ${className}`}
      {...props}
    />
  );
}

export function TextField({ label, className = "", ...inputProps }: { label: string } & ComponentProps<"input">) {
  return (
    <label className={`flex flex-col gap-1.5 text-xs ${className}`}>
      {label}
      <input className={fieldClass} {...inputProps} />
    </label>
  );
}

export function PrivacyConsent() {
  return (
    <label className="flex items-center justify-center gap-2 text-xs leading-normal">
      <input type="checkbox" name="privacy" required />
      <span>
        I agree to the{" "}
        {/* A new tab, so visitors don't lose what they've typed in the form. */}
        <a href="/privacy" target="_blank">
          privacy policy
        </a>
      </span>
    </label>
  );
}
