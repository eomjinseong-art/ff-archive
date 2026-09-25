import type { Source } from "./types";
import { WIKI_FIVE, WIKI_SERIES, WIKI_SIX, wiki } from "./sources";

export type StuntRecord = {
  slug: string;
  title: string;
  filmSlug: string;
  filmTitleKo: string;
  year: number;
  text: string;
  sources: Source[];
};

export type BoxOfficeRow = {
  slug: string;
  titleKo: string;
  year: number;
  millions: number;
};

const WIKI_F7 = wiki("Furious_7", "Furious 7");
const WIKI_TOKYO = wiki(
  "The_Fast_and_the_Furious:_Tokyo_Drift",
  "The Fast and the Furious: Tokyo Drift",
);

export const recordsIntro = {
  title: "스턴트 기록",
  lede: "위키백과 제작 단락에 숫자가 있거나, 장소가 특정된 수행만 올립니다. 흥행은 각 작품 정보 상자의 명목 월드와이드입니다. 물가 보정은 하지 않습니다.",
  notes: [
    "화면 속 차와 촬영용 복제차를 한 대로 적지 않습니다.",
    "기종명이 없는 차량에 트림을 붙이지 않습니다.",
    "언리미티드는 도입 6억 3,000만 달러와 본문 합계 6억 2,610만 달러가 다릅니다. 표는 정보 상자입니다.",
  ],
};

export const stuntRecords: StuntRecord[] = [
  {
    slug: "vault",
    title: "경찰서 금고",
    filmSlug: "fast-five",
    filmTitleKo: "분노의 질주: 언리미티드",
    year: 2011,
    text: "증거 금고를 차로 끌어냅니다. 위키백과는 길이 8피트, 여섯 버전, 무게 4 쇼트 톤(3.6톤), 케이블 30피트(9.1미터)를 적습니다. 촬영 중 200대가 넘는 차가 파괴됐습니다. 이야기는 리우이고, 상당 부분은 산후안에서 찍었습니다. 테오도로 모스코소 다리 스턴트는 포기됐습니다.",
    sources: [WIKI_FIVE],
  },
  {
    slug: "tank",
    title: "테네리페의 탱크",
    filmSlug: "fast-and-furious-6",
    filmTitleKo: "분노의 질주: 더 맥시멈",
    year: 2013,
    text: "탱크가 실제로 약 250대의 차 위를 지나갔다고 제작 단락이 적습니다. 장소는 테네리페입니다.",
    sources: [WIKI_SIX],
  },
  {
    slug: "antonov",
    title: "안토노프와 차저",
    filmSlug: "fast-and-furious-6",
    filmTitleKo: "분노의 질주: 더 맥시멈",
    year: 2013,
    text: "안토노프 An-124 실물 세트에서 닷지 차저를 기수 쪽으로 공압 대포로 쏘았습니다. 위키백과는 화면이 암시하는 활주로(약 18–29마일)가 당시 가장 긴 캄도 밤다 공항 활주로 3.42마일보다 길다고 지적합니다. 그 차저를 1970 Charger R/T로 부르지는 않습니다.",
    sources: [WIKI_SIX],
  },
  {
    slug: "lykan",
    title: "라이칸과 차량 대수",
    filmSlug: "furious-7",
    filmTitleKo: "분노의 질주: 더 세븐",
    year: 2015,
    text: "화면 속 라이칸 하이퍼스포츠의 가치는 340만 달러로 적히지만, 부서진 차는 더 싼 목적 제작 모델이고 양산 7대 중 하나가 아니라고 위키백과가 구분합니다. 같은 제작 단락은 차 340대 사용, 230대 이상 파괴, 액션의 약 10%만 CGI라고 적습니다.",
    sources: [WIKI_F7],
  },
  {
    slug: "tokyo-fleet",
    title: "도쿄의 차량 대수",
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    year: 2006,
    text: "제작 단락은 차량 약 250대, 그중 80대 이상 파괴를 적습니다.",
    sources: [WIKI_TOKYO],
  },
];

/** 각 작품 위키백과 정보 상자. 백만 달러. */
export const worldBoxOffice: BoxOfficeRow[] = [
  { slug: "the-fast-and-the-furious", titleKo: "분노의 질주", year: 2001, millions: 212.6 },
  { slug: "2-fast-2-furious", titleKo: "패스트 & 퓨리어스 2", year: 2003, millions: 236 },
  { slug: "tokyo-drift", titleKo: "도쿄 드리프트", year: 2006, millions: 159 },
  { slug: "fast-and-furious", titleKo: "더 오리지널", year: 2009, millions: 360 },
  { slug: "fast-five", titleKo: "언리미티드", year: 2011, millions: 630 },
  { slug: "fast-and-furious-6", titleKo: "더 맥시멈", year: 2013, millions: 788.7 },
  { slug: "furious-7", titleKo: "더 세븐", year: 2015, millions: 1515 },
  { slug: "fate-of-the-furious", titleKo: "더 익스트림", year: 2017, millions: 1236 },
  { slug: "hobbs-and-shaw", titleKo: "홉스&쇼", year: 2019, millions: 760 },
  { slug: "f9", titleKo: "더 얼티메이트", year: 2021, millions: 726.2 },
  { slug: "fast-x", titleKo: "라이드 오어 다이", year: 2023, millions: 714.4 },
];

export const boxOfficeNote =
  "시리즈 위키백과는 합산을 70억 달러 이상이라고 적습니다. 위 표는 그 합을 다시 계산하지 않고, 각 정보 상자를 백만 달러로 적습니다. 언리미티드 본문 합계는 6억 2,610만 달러입니다. 물가 보정이 아닙니다.";

export const homeRecordTeasers = [
  { label: "금고", value: "8피트", meta: "2011 · 산후안 촬영", href: "/records#vault" },
  { label: "탱크", value: "약 250대", meta: "2013 · 테네리페", href: "/records#tank" },
  { label: "차량", value: "340대", meta: "2015 · 230대 이상 파괴", href: "/records#lykan" },
];

export const recordsSources: Source[] = [WIKI_SERIES, ...stuntRecords.flatMap((item) => item.sources)];
