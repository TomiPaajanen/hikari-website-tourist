"use server";

import { interests } from "@/lib/interests";
import { subscribe } from "@/lib/mailerlite";
import { sendEmail } from "@/lib/resend";

// These must match the group names in MailerLite exactly.
const GUIDE_GROUP = "Kyoto guide";
const WAITLIST_GROUP = "Spring 2027 early access";

export type GuideSignupState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export type EnquiryState = GuideSignupState;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(formData: FormData, name: string, maxLength = 200) {
  return String(formData.get(name) ?? "")
    .trim()
    .slice(0, maxLength);
}

export async function signUpForGuide(_previous: GuideSignupState, formData: FormData): Promise<GuideSignupState> {
  // Real visitors never see this field; bots fill in everything.
  if (text(formData, "website")) {
    return { status: "success" };
  }

  const email = text(formData, "email");
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (formData.get("privacy") !== "on") {
    return { status: "error", message: "Please agree to the privacy policy." };
  }

  const chosenInterests = formData
    .getAll("interests")
    .map((id) => interests.find((interest) => interest.id === id)?.name ?? "Not sure yet");

  // Empty values are left out so they don't wipe details a returning subscriber gave before.
  const fields = Object.fromEntries(
    Object.entries({
      name: text(formData, "name"),
      interests: chosenInterests.join(", "),
      travel_timing: text(formData, "travelDetails", 500),
    }).filter(([, value]) => value),
  );

  // The form tells everyone they'll hear about spring 2027, so every sign-up joins both groups.
  try {
    await subscribe({ email, fields, groups: [GUIDE_GROUP, WAITLIST_GROUP] });
  } catch (error) {
    console.error("Guide signup failed:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again, or write to us at info@toirojourneys.com.",
    };
  }

  return { status: "success" };
}

// Agency enquiries go straight to the shared inbox; replying answers the sender.
export async function sendEnquiry(_previous: EnquiryState, formData: FormData): Promise<EnquiryState> {
  if (text(formData, "website")) {
    return { status: "success" };
  }

  const email = text(formData, "email");
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (formData.get("privacy") !== "on") {
    return { status: "error", message: "Please agree to the privacy policy." };
  }

  const company = text(formData, "company");
  const name = text(formData, "name");
  const topics = formData
    .getAll("topics")
    .slice(0, 10)
    .map((topic) => String(topic).slice(0, 50))
    .join(", ");
  const message = text(formData, "message", 5000);

  try {
    await sendEmail({
      to: "info@toirojourneys.com",
      replyTo: email,
      subject: `Website enquiry from ${company || name || email}`,
      text: [
        `Company: ${company || "-"}`,
        `Name: ${name || "-"}`,
        `Email: ${email}`,
        `Topics: ${topics || "-"}`,
        "",
        message || "(No message)",
      ].join("\n"),
    });
  } catch (error) {
    console.error("Enquiry failed:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again, or write to us at info@toirojourneys.com.",
    };
  }

  return { status: "success" };
}
