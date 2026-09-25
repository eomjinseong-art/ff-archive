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

export const guides: GuidePath[] = [
  {
    slug: "first",
    titleKo: "처음",
    titleEn: "First",
    summary: "팀이 보이는 고스트 프로토콜로 시작하고, 맥쿼리의 첫 편을 본 뒤, 1996년의 원점으로 돌아갑니다.",
    steps: [
      {
        filmSlug: "ghost-protocol",
        titleKo: "고스트 프로토콜",
        titleEn: "Ghost Protocol",
        year: 2011,
        why: "조직이 부인된 네 사람의 임무라, 앞 편을 몰라도 팀이 읽힙니다.",
        hasDetail: true,
      },
      {
        filmSlug: "rogue-nation",
        titleKo: "로그네이션",
        titleEn: "Rogue Nation",
        year: 2015,
        why: "일사와 신디케이트. 이후 세 편의 입구입니다.",
        hasDetail: true,
      },
      {
        filmSlug: "mission-impossible",
        titleKo: "미션 임파서블",
        titleEn: "Mission: Impossible",
        year: 1996,
        why: "헌트가 어떻게 혼자 남았는지. 랭글리와 펠프스.",
        hasDetail: true,
      },
    ],
  },
  {
    slug: "order",
    titleKo: "순서",
    titleEn: "Order",
    summary: "1996년부터 2025년까지 개봉 순서. 맥쿼리 네 편은 앞에서부터 봐야 인물이 이어집니다.",
    steps: [
      { filmSlug: "mission-impossible", titleKo: "미션 임파서블", titleEn: "Mission: Impossible", year: 1996, why: "헌트의 시작.", hasDetail: true },
      { filmSlug: "mission-impossible-2", titleKo: "미션 임파서블 2", titleEn: "Mission: Impossible 2", year: 2000, why: "존 우.", hasDetail: true },
      { filmSlug: "mission-impossible-3", titleKo: "미션 임파서블 3", titleEn: "Mission: Impossible III", year: 2006, why: "줄리아와 벤지.", hasDetail: true },
      { filmSlug: "ghost-protocol", titleKo: "고스트 프로토콜", titleEn: "Ghost Protocol", year: 2011, why: "조직의 부인.", hasDetail: true },
      { filmSlug: "rogue-nation", titleKo: "로그네이션", titleEn: "Rogue Nation", year: 2015, why: "신디케이트.", hasDetail: true },
      { filmSlug: "fallout", titleKo: "폴아웃", titleEn: "Fallout", year: 2018, why: "사도.", hasDetail: true },
      { filmSlug: "dead-reckoning", titleKo: "데드 레코닝", titleEn: "Dead Reckoning Part One", year: 2023, why: "엔티티.", hasDetail: true },
      { filmSlug: "final-reckoning", titleKo: "파이널 레코닝", titleEn: "The Final Reckoning", year: 2025, why: "잠수함과 복엽기.", hasDetail: true },
    ],
  },
  {
    slug: "stunts",
    titleKo: "스턴트",
    titleEn: "Stunts",
    summary: "외벽, 수송기, 낙하, 절벽, 복엽기. 기록 페이지의 다섯 건을 작품 순으로 봅니다.",
    steps: [
      { filmSlug: "ghost-protocol", titleKo: "고스트 프로토콜", titleEn: "Ghost Protocol", year: 2011, why: "부르즈 할리파. 케이블은 후반에 지웠습니다.", hasDetail: true },
      { filmSlug: "rogue-nation", titleKo: "로그네이션", titleEn: "Rogue Nation", year: 2015, why: "A400M, 5,000피트.", hasDetail: true },
      { filmSlug: "fallout", titleKo: "폴아웃", titleEn: "Fallout", year: 2018, why: "HALO. 발목 부상은 별도 기록입니다.", hasDetail: true },
      { filmSlug: "dead-reckoning", titleKo: "데드 레코닝", titleEn: "Dead Reckoning Part One", year: 2023, why: "노르웨이 오토바이와 열차.", hasDetail: true },
      { filmSlug: "final-reckoning", titleKo: "파이널 레코닝", titleEn: "The Final Reckoning", year: 2025, why: "복엽기.", hasDetail: true },
    ],
  },
];
