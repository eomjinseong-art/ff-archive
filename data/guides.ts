export type GuideStep = {
  filmSlug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  why: string;
  hasDetail: boolean;
};

export type GuidePath = {
  slug: string;
  titleKo: string;
  titleEn: string;
  summary: string;
  steps: GuideStep[];
};

const mainline: GuideStep[] = [
  { filmSlug: "the-fast-and-the-furious", titleKo: "분노의 질주", titleEn: "The Fast and the Furious", year: 2001, why: "로스앤젤레스. 돔과 브라이언.", hasDetail: true },
  { filmSlug: "2-fast-2-furious", titleKo: "패스트 & 퓨리어스 2", titleEn: "2 Fast 2 Furious", year: 2003, why: "마이애미. 돔이 없는 본편.", hasDetail: true },
  { filmSlug: "tokyo-drift", titleKo: "패스트 & 퓨리어스: 도쿄 드리프트", titleEn: "The Fast and the Furious: Tokyo Drift", year: 2006, why: "개봉은 여기. 이야기 시점은 뒤입니다.", hasDetail: true },
  { filmSlug: "fast-and-furious", titleKo: "분노의 질주: 더 오리지널", titleEn: "Fast & Furious", year: 2009, why: "레티와 브라가. 도쿄보다 앞선 시점.", hasDetail: true },
  { filmSlug: "fast-five", titleKo: "분노의 질주: 언리미티드", titleEn: "Fast Five", year: 2011, why: "리우와 금고. 습격으로 기웁니다.", hasDetail: true },
  { filmSlug: "fast-and-furious-6", titleKo: "분노의 질주: 더 맥시멈", titleEn: "Fast & Furious 6", year: 2013, why: "런던과 오언 쇼.", hasDetail: true },
  { filmSlug: "furious-7", titleKo: "분노의 질주: 더 세븐", titleEn: "Furious 7", year: 2015, why: "데커드와 갓스 아이.", hasDetail: true },
  { filmSlug: "fate-of-the-furious", titleKo: "분노의 질주: 더 익스트림", titleEn: "The Fate of the Furious", year: 2017, why: "사이퍼.", hasDetail: true },
  { filmSlug: "f9", titleKo: "분노의 질주: 더 얼티메이트", titleEn: "F9", year: 2021, why: "야코프. 한이 살아 있습니다.", hasDetail: true },
  { filmSlug: "fast-x", titleKo: "분노의 질주: 라이드 오어 다이", titleEn: "Fast X", year: 2023, why: "단테 레예스.", hasDetail: true },
];

export const guides: GuidePath[] = [
  {
    slug: "release",
    titleKo: "개봉 순",
    titleEn: "Release",
    summary: "2001년부터 2023년까지 본편 열 편. 스핀오프 홉스&쇼는 2019년, 더 익스트림과 더 얼티메이트 사이에 개봉했습니다.",
    steps: [
      ...mainline.slice(0, 8),
      {
        filmSlug: "hobbs-and-shaw",
        titleKo: "분노의 질주: 홉스&쇼",
        titleEn: "Hobbs & Shaw",
        year: 2019,
        why: "스핀오프. 본편 열 편에 넣지 않습니다.",
        hasDetail: true,
      },
      ...mainline.slice(8),
    ],
  },
  {
    slug: "chronology",
    titleKo: "이야기 순",
    titleEn: "Chronology",
    summary: "시리즈 문서가 적은 순서만 따릅니다. 1 → 2 → 4 → 5 → 6 → 도쿄 → 7 → 8, 그다음 9와 10. 홉스&쇼는 ‘더 익스트림 이후’라고만 확인됩니다.",
    steps: [
      mainline[0],
      mainline[1],
      { ...mainline[3], why: "2001년의 5년 뒤, 도쿄 드리프트 앞." },
      mainline[4],
      mainline[5],
      { ...mainline[2], why: "개봉은 2006년. 시점은 더 맥시멈과 더 세븐 사이." },
      mainline[6],
      mainline[7],
      mainline[8],
      mainline[9],
    ],
  },
  {
    slug: "first",
    titleKo: "처음",
    titleEn: "First",
    summary: "아카이브의 입구입니다. 시리즈 문서가 언리미티드부터 습격과 첩보로 움직인다고 적은 지점에서 시작하고, 그다음 2001년으로 돌아갑니다.",
    steps: [
      {
        ...mainline[4],
        why: "팀이 모이고, 금고 작전이 이 시리즈의 방향을 바꿉니다. 앞 편을 몰라도 리우의 목표가 읽힙니다.",
      },
      {
        ...mainline[6],
        why: "한의 죽음이 데커드로 이어집니다. 도쿄 드리프트는 그다음에 보면 순서가 맞습니다.",
      },
      {
        ...mainline[0],
        why: "돔과 브라이언이 어떻게 만났는지. 차저의 출처도 여기 있습니다.",
      },
    ],
  },
];
