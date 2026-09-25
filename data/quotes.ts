import type { QuoteItem } from "./types";

export type QuoteGroup = {
  filmSlug: string;
  filmTitleKo: string;
  filmTitleEn: string;
  year: number;
  href?: string;
  items: QuoteItem[];
};

/** 위키백과가 1966년 시리즈의 공식으로 적은 문장만. 한국어는 번역입니다. */
export const quoteGroups: QuoteGroup[] = [
  {
    filmSlug: "origin",
    filmTitleKo: "1966년 텔레비전",
    filmTitleEn: "Mission: Impossible",
    year: 1966,
    href: "/origin",
    items: [
      {
        speaker: "임무 테이프",
        textKo: "당신의 임무입니다, 댄/짐. 수락하신다면.",
        textEn: "Your mission, Dan/Jim, should you choose to accept it.",
        spoiler: false,
      },
      {
        speaker: "임무 테이프",
        textKo:
          "언제나처럼, 당신이나 IM 포스 대원이 붙잡히거나 죽더라도, 장관은 당신의 행동에 대해 아는 바를 부인할 것입니다.",
        textEn:
          "As always, should you or any of your IM Force be caught or killed, the Secretary will disavow any knowledge of your actions.",
        spoiler: false,
      },
      {
        speaker: "임무 테이프",
        textKo: "이 테이프는 5초 후에 자동으로 파괴됩니다.",
        textEn: "This tape will self-destruct in five seconds.",
        spoiler: false,
      },
    ],
  },
];
