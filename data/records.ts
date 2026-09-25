import type { Source } from "./types";
import { WIKI_SERIES, wiki } from "./sources";

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

export const recordsIntro = {
  title: "스턴트 기록",
  lede: "위키백과 제작 단락에 숫자가 있거나, 장소가 특정된 수행만 올립니다. 흥행은 같은 시리즈 표의 명목 월드와이드입니다. 물가 보정은 하지 않습니다.",
  notes: [
    "케이블을 지운 촬영을 자유 등반으로 적지 않습니다.",
    "기종명이 없는 오토바이에 모델명을 붙이지 않습니다.",
    "작품별 위키 문서와 시리즈 표의 흥행 숫자가 다르면 시리즈 표를 씁니다.",
  ],
};

export const stuntRecords: StuntRecord[] = [
  {
    slug: "burj",
    title: "부르즈 할리파 외벽",
    filmSlug: "ghost-protocol",
    filmTitleKo: "고스트 프로토콜",
    year: 2011,
    text: "톰 크루즈가 두바이 부르즈 할리파 외벽을 올랐습니다. 위키백과는 항상 여러 케이블에 고정되어 있었고, 인더스트리얼 라이트 앤드 매직이 케이블을 지웠다고 적습니다. 폴라 패튼과 레아 세이두도 두바이 격투에서 대역을 쓰지 않았다고 같은 단락이 적습니다.",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
  },
  {
    slug: "a400m",
    title: "A400M 기체 바깥",
    filmSlug: "rogue-nation",
    filmTitleKo: "로그네이션",
    year: 2015,
    text: "RAF 위터링에서 에어버스 A400M(등록 F-WWMZ) 바깥에 매달리는 장면을 찍었습니다. 크루즈가 대역 없이 수행했고, 고도는 5,000피트(1,500미터)로 적혀 있습니다. 48시간 제한 동안 이착륙은 8번입니다.",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation")],
  },
  {
    slug: "halo",
    title: "파리 HALO",
    filmSlug: "fallout",
    filmTitleKo: "폴아웃",
    year: 2018,
    text: "헌트와 워커가 파리 상공에서 HALO 점프를 합니다. 같은 작품의 제작은 크루즈가 스턴트 중 발목을 다쳐 촬영이 몇 달 밀리고 예산이 늘었다고 적습니다. 발목과 HALO를 한 사고로 합치지는 않습니다.",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout")],
  },
  {
    slug: "cliff-bike",
    title: "노르웨이 오토바이와 열차",
    filmSlug: "dead-reckoning",
    filmTitleKo: "데드 레코닝",
    year: 2023,
    text: "열차 위 오토바이 점프는 노르웨이에서 촬영되었습니다. 위키백과는 스트란다와 라우마를 언급합니다. 영국에서는 오토바이 스턴트 장치에 불이 났고, 다친 사람은 없었다고 적습니다. 기종명은 없습니다.",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One")],
  },
  {
    slug: "biplane",
    title: "복엽기",
    filmSlug: "final-reckoning",
    filmTitleKo: "파이널 레코닝",
    year: 2025,
    text: "영국 촬영에서 크루즈와 에사이 모랄레스가 비행 중인 복엽기에서 스턴트를 했습니다. 위키백과는 크루즈가 뒤집힌 열린 조종석 날개를 잡았고, 조종사는 그린스크린 슈트를 입어 지워지게 했다고 전합니다.",
    sources: [wiki("Mission:_Impossible_%E2%80%93_The_Final_Reckoning", "Mission: Impossible – The Final Reckoning")],
  },
];

/** 위키백과 시리즈 표 Box-office gross, worldwide. 백만 달러, 소수 첫째 자리 반올림. */
export const worldBoxOffice: BoxOfficeRow[] = [
  { slug: "mission-impossible", titleKo: "미션 임파서블", year: 1996, millions: 457.7 },
  { slug: "mission-impossible-2", titleKo: "미션 임파서블 2", year: 2000, millions: 546.4 },
  { slug: "mission-impossible-3", titleKo: "미션 임파서블 3", year: 2006, millions: 398.5 },
  { slug: "ghost-protocol", titleKo: "고스트 프로토콜", year: 2011, millions: 694.7 },
  { slug: "rogue-nation", titleKo: "로그네이션", year: 2015, millions: 682.7 },
  { slug: "fallout", titleKo: "폴아웃", year: 2018, millions: 791.7 },
  { slug: "dead-reckoning", titleKo: "데드 레코닝", year: 2023, millions: 571.1 },
  { slug: "final-reckoning", titleKo: "파이널 레코닝", year: 2025, millions: 598.8 },
];

export const boxOfficeNote =
  "시리즈 표 합계는 4,741,543,902달러입니다. 표의 각 편 월드를 소수 첫째 자리로 반올림한 값이 위 숫자입니다. 물가 보정이 아닙니다.";

export const homeRecordTeasers = [
  { label: "외벽", value: "부르즈 할리파", meta: "2011 · 케이블을 지운 촬영", href: "/records#burj" },
  { label: "기체", value: "A400M", meta: "2015 · 5,000피트", href: "/records#a400m" },
  { label: "낙하", value: "HALO", meta: "2018 · 파리", href: "/records#halo" },
];

export const recordsSources: Source[] = [WIKI_SERIES, ...stuntRecords.flatMap((item) => item.sources)];
