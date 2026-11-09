"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import { Eyebrow } from "@/components/ui";

const reviews = [
  {
    quote: `We were a little unlucky with the weather during our stay in Osaka. But our fantastic guide Mitsuki had the perfect solution!
Why not experience some traditional Japanese karaoke? We had an absolute blast! And how about trying Purikura, the famous Japanese photo booths where digital filters and crazy lighting transform your faces? Simply hilarious! Of course, Mitsuki also made sure we didn't miss the highlights, including the magnificent Osaka Castle and the beautiful Nara Park, with its lovely free-roaming deer.
Mitsuki made our time in Osaka truly memorable, despite the rainy weather. If you're looking for a fun, knowledgeable and enthusiastic guide in Osaka, we can wholeheartedly recommend her!
Thank you, Mitsuki, for such a wonderful experience`,
    author: "B&G, Belgium",
  },
  {
    quote:
      "About a year ago my boyfriend and I went to a special trip: to Japan. We went on a 3 day trip to Nagano Prefecture- a beautiful area of nature and culture where you definitely benefit from a local. Mitsuki helped us rent a car, took us to eat Soba Noodles, a delicacy and super tasty. We went to a lot of Shrines and Temples, incl. her telling us all about the history behind the differences and religions. We also spoke a lot about Japan today - she brought us to Onsens and to beautiful mountain sceneries. All in all 3 days packed with diverse attractions- and Mitsuki being always open for local and cultural knowledge. She also gave us local tips for Tokyo, Osaka, and Kyoto. I can recommend travelling and learning with Mitsuki",
    author: "A., Germany",
  },
  {
    quote:
      "One of the things I remember about our time in Osaka was how you wanted us to experience the city from a local’s perspective. Rather than just taking us to the usual tourist spots, you wanted to share places and experiences that felt more authentic and local. It felt like exploring Osaka with friends who were excited to share their city with us. That personal touch made the experience so much more memorable.",
    author: "A., United States",
  },
  {
    quote:
      "Mitsuki was a great tour guide for my stay in Osaka. She walked around town with us and helped us to have a great local experience! We hit the local bars, did some karaoke and had some excellent takoyaki!",
    author: "Guest from the United States",
  },
];

// Two cards side by side from Tailwind's md breakpoint up, one below it.
const WIDE_QUERY = "(min-width: 48rem)";

function subscribeToWidth(onChange: () => void) {
  const query = window.matchMedia(WIDE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const arrowClass =
  "absolute top-1/2 z-10 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-sand bg-paper text-lg text-accent shadow-sm transition-opacity disabled:cursor-default disabled:opacity-40";

export function Reviews() {
  const wide = useSyncExternalStore(
    subscribeToWidth,
    () => window.matchMedia(WIDE_QUERY).matches,
    () => true,
  );
  const perView = wide ? 2 : 1;
  const lastIndex = reviews.length - perView;

  const [requestedIndex, setIndex] = useState(0);
  // Clamped here so switching from one to two cards never leaves an empty slot.
  const index = Math.min(requestedIndex, lastIndex);
  const touchStartX = useRef<number | null>(null);

  function go(direction: 1 | -1) {
    setIndex(Math.max(0, Math.min(index + direction, lastIndex)));
  }

  // Each step moves one card plus the 1rem gap between cards.
  const step = wide ? "50% + 0.5rem" : "100% + 1rem";

  return (
    <div className="mt-12">
      <Eyebrow className="mb-4">What our guests say</Eyebrow>
      <div className="relative mx-auto max-w-[1000px]">
        <button
          type="button"
          aria-label="Previous reviews"
          onClick={() => go(-1)}
          disabled={index === 0}
          className={`${arrowClass} -left-2 md:-left-5`}
        >
          ‹
        </button>
        <div
          className="overflow-hidden"
          onTouchStart={(event) => (touchStartX.current = event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(distance) > 40) go(distance < 0 ? 1 : -1);
          }}
        >
          <ul
            className="flex gap-4 text-left transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(${-index} * (${step})))` }}
          >
            {reviews.map((review, reviewIndex) => (
              <li
                key={review.author}
                aria-hidden={reviewIndex < index || reviewIndex >= index + perView}
                className="w-full shrink-0 rounded-[3px] border border-sand px-[22px] py-7 md:w-[calc(50%-0.5rem)]"
              >
                <figure className="flex h-full flex-col gap-4">
                  <blockquote className="text-[13px] leading-[1.85] whitespace-pre-line">“{review.quote}”</blockquote>
                  <figcaption className="mt-auto text-xs tracking-[0.06em] text-accent uppercase">
                    {review.author}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          aria-label="Next reviews"
          onClick={() => go(1)}
          disabled={index === lastIndex}
          className={`${arrowClass} -right-2 md:-right-5`}
        >
          ›
        </button>
      </div>
    </div>
  );
}
