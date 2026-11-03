const API_URL = "https://connect.mailerlite.com/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) {
    throw new Error("MAILERLITE_API_KEY is not set");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`MailerLite ${init?.method ?? "GET"} ${path} failed: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

// Groups are looked up by name so they can be set up in the MailerLite dashboard without touching the code.
async function getGroupId(name: string): Promise<string> {
  const { data } = await request<{ data: { id: string; name: string }[] }>(
    `/groups?filter[name]=${encodeURIComponent(name)}&limit=100`,
  );
  // The name filter also returns partial matches.
  const group = data.find((candidate) => candidate.name === name);
  if (!group) {
    throw new Error(`MailerLite group "${name}" does not exist`);
  }
  return group.id;
}

// Creates the subscriber, or updates them if the email is already on the list.
export async function subscribe({
  email,
  fields,
  groups,
}: {
  email: string;
  fields: Record<string, string>;
  groups: string[];
}) {
  const groupIds = await Promise.all(groups.map(getGroupId));
  await request("/subscribers", {
    method: "POST",
    body: JSON.stringify({ email, fields, groups: groupIds }),
  });
}
