import type { QuoteItem } from "./types";

export type QuoteGroup = {
  filmSlug: string;
  filmTitleKo: string;
  filmTitleEn: string;
  year: number;
  href?: string;
  items: QuoteItem[];
};

/** 위키백과 줄거리가 따옴표로 적은 문장만. 한국어는 그 문장의 번역입니다. */
export const quoteGroups: QuoteGroup[] = [
  {
    filmSlug: "fast-and-furious-6",
    filmTitleKo: "분노의 질주: 더 맥시멈",
    filmTitleEn: "Fast & Furious 6",
    year: 2013,
    items: [
      {
        speaker: "데커드 쇼",
        textKo: "너는 나를 모르지만, 곧 알게 될 거다.",
        textEn: "You don't know me, but you're about to.",
        spoiler: true,
      },
    ],
  },
];
