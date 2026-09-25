import type { Footnote, Source } from "./types";
import { WIKI_SERIES, WIKI_TV, wiki } from "./sources";

export type PersonNote = { slug: string; text: string };

export type ArchivePerson = {
  slug: string;
  nameKo: string;
  nameEn: string;
  performerKo: string;
  performerEn: string;
  nationalityKo: string;
  nationalityEn: string;
  affiliation: string;
  years: string;
  filmCount: number;
  filmSlugs: string[];
  roleKind: string;
  featuredOnHome: boolean;
  oneLiner: string;
  posterTone: string;
  bio: string[];
  notes: string[];
  filmNotes: PersonNote[];
  sources: Source[];
  footnotes: Footnote[];
};

export const agents: ArchivePerson[] = [
  {
    slug: "ethan-hunt",
    nameKo: "에단 헌트",
    nameEn: "Ethan Hunt",
    performerKo: "톰 크루즈",
    performerEn: "Tom Cruise",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "IMF",
    years: "1996–2025",
    filmCount: 8,
    filmSlugs: [
      "mission-impossible",
      "mission-impossible-2",
      "mission-impossible-3",
      "ghost-protocol",
      "rogue-nation",
      "fallout",
      "dead-reckoning",
      "final-reckoning",
    ],
    roleKind: "팀장",
    featuredOnHome: true,
    oneLiner: "극장판 8편을 한 얼굴로 이은 IMF 현장 팀장.",
    posterTone: "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: [
      "에단 헌트는 1996년 극장판에서 처음 이름을 얻습니다. 프라하에서 팀이 무너진 뒤, 누명을 벗기 위해 본부 바깥에서 움직입니다. 이후 일곱 편의 속편도 같은 인물을 톰 크루즈가 맡습니다.",
      "소속은 IMF, Impossible Missions Force입니다. 고스트 프로토콜과 로그네이션에서는 조직이 공식적으로 버림받거나 해체 압박을 받고, 헌트는 승인 없이 팀을 유지합니다.",
    ],
    notes: [
      "배우는 톰 크루즈입니다. 위키백과 제작 단락은 고스트 프로토콜의 부르즈 할리파, 로그네이션의 A400M, 폴아웃의 발목 부상, 데드 레코닝의 노르웨이 오토바이, 파이널 레코닝의 복엽기를 그의 수행 스턴트로 적습니다.",
    ],
    filmNotes: [
      { slug: "mission-impossible", text: "NOC 명단과 배신한 팀장 사이에서 혼자 남습니다. 랭글리 금고는 이 편의 침투입니다." },
      { slug: "ghost-protocol", text: "크렘린 폭발 이후 고스트 프로토콜로 조직이 부인되고, 두바이에서 핵 코드를 쫓습니다." },
      { slug: "final-reckoning", text: "엔티티와 잠수함 포드코바를 둘러싼 마지막 극장판의 중심입니다." },
    ],
    sources: [WIKI_SERIES, wiki("Ethan_Hunt", "Ethan Hunt")],
    footnotes: [
      { n: 1, text: "극장판 8편의 주연이 톰 크루즈의 에단 헌트라는 점은 위키백과 시리즈 문서의 작품 표와 같습니다." },
      { n: 2, text: "스턴트 서술은 각 작품 위키백과 제작 단락을 따릅니다. 높이와 횟수는 그 단락에 숫자가 있을 때만 적습니다." },
    ],
  },
  {
    slug: "luther-stickell",
    nameKo: "루터 스티켈",
    nameEn: "Luther Stickell",
    performerKo: "빙 라메스",
    performerEn: "Ving Rhames",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "IMF",
    years: "1996–2006, 2015–2025",
    filmCount: 7,
    filmSlugs: [
      "mission-impossible",
      "mission-impossible-2",
      "mission-impossible-3",
      "rogue-nation",
      "fallout",
      "dead-reckoning",
      "final-reckoning",
    ],
    roleKind: "현장",
    featuredOnHome: true,
    oneLiner: "해킹과 현장 지원을 맡은, 헌트 옆의 가장 긴 동료.",
    posterTone: "linear-gradient(165deg,#241810 0%,#0B0D10 50%,#8a5a3222 100%)",
    bio: [
      "루터 스티켈은 1996년 첫 편에서 헌트 편에 섭니다. 빙 라메스가 맡았고, 고스트 프로토콜에는 출연하지 않습니다. 로그네이션에서 돌아옵니다.",
      "컴퓨터와 통신이 그의 칸입니다. 팀이 본부 지원을 잃을 때 장비와 퇴로를 맡는 자리가 반복됩니다.",
    ],
    notes: ["고스트 프로토콜의 현장 기술은 벤지 던이 잇습니다. 루터의 공백은 그 한 편입니다."],
    filmNotes: [
      { slug: "mission-impossible", text: "첫 만남. 헌트가 랭글리로 가기 전 컴퓨터 쪽에서 손을 잡습니다." },
      { slug: "rogue-nation", text: "고스트 프로토콜에 빠진 뒤 돌아옵니다." },
      { slug: "final-reckoning", text: "위키백과 줄거리는 그가 폭발을 줄이려 남는다 고 적습니다. 결말 스포일러입니다." },
    ],
    sources: [WIKI_SERIES, wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
    footnotes: [
      { n: 1, text: "출연 범위는 각 작품 위키백과 출연표를 기준으로 합니다. 고스트 프로토콜 주연 목록에 빙 라메스는 없습니다." },
    ],
  },
  {
    slug: "benji-dunn",
    nameKo: "벤지 던",
    nameEn: "Benji Dunn",
    performerKo: "사이먼 페그",
    performerEn: "Simon Pegg",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    affiliation: "IMF",
    years: "2006–2025",
    filmCount: 6,
    filmSlugs: [
      "mission-impossible-3",
      "ghost-protocol",
      "rogue-nation",
      "fallout",
      "dead-reckoning",
      "final-reckoning",
    ],
    roleKind: "기술",
    featuredOnHome: true,
    oneLiner: "3편에서 기술 요원으로 들어와, 이후 현장까지 따라옵니다.",
    posterTone: "linear-gradient(165deg,#142028 0%,#0B0D10 50%,#3aa0c622 100%)",
    bio: [
      "벤지 던은 미션 임파서블 3에서 처음 나옵니다. 사이먼 페그가 맡았습니다. 처음에는 본부의 기술 지원에 가깝고, 고스트 프로토콜부터 현장 팀에 붙습니다.",
      "가면 제작, 통신, 위장 회의의 타이밍이 그의 반복 업무입니다.",
    ],
    notes: ["6편 연속입니다. 1·2편에는 없습니다."],
    filmNotes: [
      { slug: "mission-impossible-3", text: "첫 등장. 본부 기술 쪽에서 헌트를 돕습니다." },
      { slug: "ghost-protocol", text: "두바이 위장 회의의 통신을 맡습니다. 장비가 말썽을 일으키는 편이기도 합니다." },
    ],
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III"), WIKI_SERIES],
    footnotes: [{ n: 1, text: "첫 등장은 2006년 3편입니다. 위키백과 출연표의 사이먼 페그." }],
  },
  {
    slug: "ilsa-faust",
    nameKo: "일사 파우스트",
    nameEn: "Ilsa Faust",
    performerKo: "레베카 퍼거슨",
    performerEn: "Rebecca Ferguson",
    nationalityKo: "스웨덴",
    nationalityEn: "Sweden",
    affiliation: "MI6",
    years: "2015–2023",
    filmCount: 3,
    filmSlugs: ["rogue-nation", "fallout", "dead-reckoning"],
    roleKind: "현장",
    featuredOnHome: true,
    oneLiner: "MI6 요원. IMF 소속이 아니라, 신디케이트 건으로 헌트와 겹칩니다.",
    posterTone: "linear-gradient(165deg,#1a2030 0%,#0B0D10 50%,#8a734033 100%)",
    bio: [
      "일사 파우스트는 로그네이션에서 등장합니다. 레베카 퍼거슨이 맡았고, 소속은 영국 MI6입니다. 신디케이트에 잠입한 상태로 그려집니다.",
      "폴아웃까지 헌트 팀과 함께 움직입니다. 여성 칸에도 같은 인물을 둡니다.",
    ],
    notes: ["IMF 명단에 넣지 않습니다. 협력하는 외부 요원입니다."],
    filmNotes: [
      { slug: "rogue-nation", text: "빈 오페라와 모로코 구간에서 헌트와 맞붙고, 이내 이해가 겹칩니다." },
      { slug: "fallout", text: "사도들과 레인 추적에 다시 나타납니다." },
      { slug: "dead-reckoning", text: "데드 레코닝의 줄거리는 스포일러 칸에 둡니다. 파이널 레코닝 출연표는 그를 이전 영상으로만 적습니다." },
    ],
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation"),
      wiki("Mission:_Impossible_%E2%80%93_The_Final_Reckoning", "Mission: Impossible – The Final Reckoning"),
    ],
    footnotes: [
      { n: 1, text: "MI6라는 소속은 로그네이션 위키백과 줄거리의 서술입니다. 파이널 레코닝의 아카이브 풋티지 명단에 레베카 퍼거슨이 있습니다." },
    ],
  },
  {
    slug: "william-brandt",
    nameKo: "윌리엄 브랜트",
    nameEn: "William Brandt",
    performerKo: "제레미 레너",
    performerEn: "Jeremy Renner",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "IMF",
    years: "2011–2015",
    filmCount: 2,
    filmSlugs: ["ghost-protocol", "rogue-nation"],
    roleKind: "현장",
    featuredOnHome: true,
    oneLiner: "분석관에서 현장으로 넘어온 IMF 요원. 두 편.",
    posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 50%,#c6a75e22 100%)",
    bio: [
      "윌리엄 브랜트는 고스트 프로토콜에서 분석관으로 헌트와 만납니다. 제레미 레너가 맡았습니다. 로그네이션까지 출연하고, 폴아웃 주연 목록에는 없습니다.",
    ],
    notes: ["두 편 이후 극장판 명단에서 빠집니다."],
    filmNotes: [
      { slug: "ghost-protocol", text: "모스크바에서 합류합니다. 두바이 위장 회의에서 헌트와 짝을 이룹니다." },
      { slug: "rogue-nation", text: "CIA의 해체 압박과 IMF 사이를 오갑니다." },
    ],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
    footnotes: [{ n: 1, text: "폴아웃 위키백과 주연 목록에 제레미 레너는 없습니다." }],
  },
  {
    slug: "jim-phelps",
    nameKo: "짐 펠프스",
    nameEn: "Jim Phelps",
    performerKo: "존 보이트",
    performerEn: "Jon Voight",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "IMF",
    years: "1996",
    filmCount: 1,
    filmSlugs: ["mission-impossible"],
    roleKind: "팀장",
    featuredOnHome: false,
    oneLiner: "1996년 영화의 IMF 팀장. 텔레비전 원작의 이름을 가져왔고, 극중 배반이 논쟁입니다.",
    posterTone: "linear-gradient(165deg,#2a2018 0%,#0B0D10 50%,#8a303022 100%)",
    bio: [
      "텔레비전에서 짐 펠프스는 피터 그레이브스가 맡은 팀장이었습니다. 1996년 영화는 그 이름을 존 보이트에게 맡기고, 줄거리 안에서 배신자로 돌립니다.",
      "악당 칸에 같은 인물을 다시 둡니다. 원작 논쟁은 이슈 글에 있습니다.",
    ],
    notes: ["프란츠 크리거는 이 편의 공범으로 악당 문서에서 함께 다룹니다."],
    filmNotes: [
      { slug: "mission-impossible", text: "오프닝 브리핑의 수신인입니다. 결말의 정체는 스포일러입니다." },
    ],
    sources: [WIKI_TV, wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
    footnotes: [
      { n: 1, text: "텔레비전 펠프스는 1966년 시리즈 문서, 영화의 배우는 1996년 작품 출연표(존 보이트)를 따릅니다." },
    ],
  },
  {
    slug: "grace",
    nameKo: "그레이스",
    nameEn: "Grace",
    performerKo: "헤일리 앳웰",
    performerEn: "Hayley Atwell",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    affiliation: "협력",
    years: "2023–2025",
    filmCount: 2,
    filmSlugs: ["dead-reckoning", "final-reckoning"],
    roleKind: "협력",
    featuredOnHome: true,
    oneLiner: "도둑으로 들어와 헌트 팀에 남습니다. 성씨는 극장판이 밝히지 않습니다.",
    posterTone: "linear-gradient(165deg,#241828 0%,#0B0D10 50%,#8a6ac622 100%)",
    bio: [
      "그레이스는 데드 레코닝 PART ONE에서 등장합니다. 헤일리 앳웰이 맡았습니다. 직업은 도둑이고, 열쇠를 둘러싼 추격에서 헌트와 엮입니다.",
      "파이널 레코닝 출연표에도 있습니다. 여성 칸과 내용을 나눕니다.",
    ],
    notes: ["IMF 정식 발령으로 단정하지 않습니다. 화면의 위치는 협력입니다."],
    filmNotes: [
      { slug: "dead-reckoning", text: "로마와 열차 구간에서 헌트와 붙습니다." },
      { slug: "final-reckoning", text: "엔티티를 가두는 작전에 팀에 남습니다." },
    ],
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One"),
    ],
    footnotes: [{ n: 1, text: "성씨가 없는 크레딧은 데드 레코닝 위키백과 출연표의 Grace입니다." }],
  },
];

export function getAgent(slug: string) {
  return agents.find((person) => person.slug === slug);
}
