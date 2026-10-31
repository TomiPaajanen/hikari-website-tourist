export type InterestId = "traditions" | "spiritual" | "food" | "nature" | "contemporary";

export type Interest = {
  id: InterestId;
  name: string;
  summary: string;
  color: string;
};

// Order matters: the ring diagram places these clockwise from the top.
export const interests: Interest[] = [
  { id: "traditions", name: "Living Traditions", summary: "Crafts, artisans, tea, textiles", color: "#336A94" },
  { id: "spiritual", name: "Spiritual Japan", summary: "Shrines, temples, inner life", color: "#7C6BC0" },
  { id: "food", name: "Food and Local Life", summary: "Markets, kitchens, daily rhythm", color: "#C25E46" },
  { id: "nature", name: "Nature and Rural Rhythms", summary: "Satoyama, farms, hot springs", color: "#5A6349" },
  { id: "contemporary", name: "Contemporary Japan", summary: "Art, regeneration, sustainability", color: "#D9B452" },
];

export function getInterest(id: InterestId): Interest {
  return interests.find((interest) => interest.id === id)!;
}
