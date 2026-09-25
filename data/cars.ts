import type { GossipItem, Source } from "./types";
import {
  BMW_FALLOUT,
  BMW_GHOST_PARTNER,
  BMW_GHOST_PREMIERE,
  BMW_ROGUE,
  BMW_WELT_FALLOUT,
  imcdb,
} from "./sources";

export type CarBadge = "추격" | "파트너" | "이륜";
export type CarEra = "1980s" | "1990s" | "2000s" | "2010s" | "2020s";

export type IconCar = {
  slug: string;
  nameKo: string;
  nameEn: string;
  brand: string;
  brandKo: string;
  era: CarEra;
  badges: CarBadge[];
  filmSlug: string;
  filmTitleKo: string;
  oneLiner: string;
  hasL2: boolean;
  posterTone: string;
};

export type CarL2 = {
  slug: string;
  overview: string[];
  timeline: { year: string; text: string }[];
  onScreen: string[];
  production: string[];
  gossip: GossipItem[];
  continuity: string[];
  videos: { id: string; title: string }[];
  related: { href: string; label: string }[];
  sources: Source[];
  footnotes: { n: number; text: string }[];
};

const tone = {
  silver: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e44 100%)",
  blue: "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c644 100%)",
  green: "linear-gradient(165deg,#102018 0%,#0B0D10 50%,#5e8a6a44 100%)",
  red: "linear-gradient(165deg,#2a1410 0%,#0B0D10 50%,#c65e3233 100%)",
  gold: "linear-gradient(165deg,#3a3418 0%,#0B0D10 48%,#C6A75E55 100%)",
};

export const cars: IconCar[] = [
  {
    slug: "audi-tt",
    nameKo: "아우디 TT 로드스터 (8N)",
    nameEn: "Audi TT Roadster (8N)",
    brand: "Audi",
    brandKo: "아우디",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "mission-impossible-2",
    filmTitleKo: "미션 임파서블 2",
    oneLiner: "양산 전 프로토타입 로드스터. 캐릭터가 모는 추격차로 기록됩니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "triumph-speed-triple",
    nameKo: "트라이엄프 스피드 트리플",
    nameEn: "Triumph Speed Triple",
    brand: "Triumph",
    brandKo: "트라이엄프",
    era: "2000s",
    badges: ["추격", "이륜"],
    filmSlug: "mission-impossible-2",
    filmTitleKo: "미션 임파서블 2",
    oneLiner: "헌트가 결말 추격에서 타는 네이키드. 두카티가 아닙니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "triumph-daytona",
    nameKo: "트라이엄프 데이토나 955i",
    nameEn: "Triumph Daytona 955i",
    brand: "Triumph",
    brandKo: "트라이엄프",
    era: "2000s",
    badges: ["추격", "이륜"],
    filmSlug: "mission-impossible-2",
    filmTitleKo: "미션 임파서블 2",
    oneLiner: "앰브로스 쪽의 풀 페어링 트라이엄프.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "lamborghini-gallardo",
    nameKo: "람보르기니 가야르도",
    nameEn: "Lamborghini Gallardo",
    brand: "Lamborghini",
    brandKo: "람보르기니",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "mission-impossible-3",
    filmTitleKo: "미션 임파서블 3",
    oneLiner: "3편에서 캐릭터가 모는 2006년형 가야르도.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "bmw-vision-efficientdynamics",
    nameKo: "BMW 비전 이피션트다이내믹스",
    nameEn: "BMW Vision EfficientDynamics",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너"],
    filmSlug: "ghost-protocol",
    filmTitleKo: "미션 임파서블: 고스트 프로토콜",
    oneLiner: "이후 i8의 바탕이 된 콘셉트. 헌트가 추격에서 탑니다.",
    hasL2: true,
    posterTone: tone.green,
  },
  {
    slug: "bmw-6-series",
    nameKo: "BMW 6시리즈 컨버터블 (F12)",
    nameEn: "BMW 6 Series Convertible (F12)",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너"],
    filmSlug: "ghost-protocol",
    filmTitleKo: "미션 임파서블: 고스트 프로토콜",
    oneLiner: "같은 보도자료가 헌트의 추격차로 함께 적는 2011년형 오픈카.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "bmw-m3-f80",
    nameKo: "BMW M3 (F80)",
    nameEn: "BMW M3 (F80)",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너"],
    filmSlug: "rogue-nation",
    filmTitleKo: "미션 임파서블: 로그네이션",
    oneLiner: "5세대 M3. E92가 아닙니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "bmw-s1000rr",
    nameKo: "BMW S 1000 RR",
    nameEn: "BMW S 1000 RR",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너", "이륜"],
    filmSlug: "rogue-nation",
    filmTitleKo: "미션 임파서블: 로그네이션",
    oneLiner: "예고편에 나온 BMW 모토라드. M3와 같은 파트너십 글에 있습니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "bmw-m5-f90",
    nameKo: "BMW M5 (F90)",
    nameEn: "BMW M5 (F90)",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너"],
    filmSlug: "fallout",
    filmTitleKo: "미션 임파서블: 폴아웃",
    oneLiner: "4.4리터 V8, 441kW. 파리의 구형 세단과는 다른 차입니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "bmw-r-ninet",
    nameKo: "BMW R nineT 스크램블러",
    nameEn: "BMW R nineT Scrambler",
    brand: "BMW",
    brandKo: "BMW",
    era: "2010s",
    badges: ["추격", "파트너", "이륜"],
    filmSlug: "fallout",
    filmTitleKo: "미션 임파서블: 폴아웃",
    oneLiner: "파리 개선문 주변, 역주행 추격의 바이크.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "bmw-5-series-e28",
    nameKo: "1986 BMW 5시리즈 (E28)",
    nameEn: "1986 BMW 5 Series (E28)",
    brand: "BMW",
    brandKo: "BMW",
    era: "1980s",
    badges: ["추격", "파트너"],
    filmSlug: "fallout",
    filmTitleKo: "미션 임파서블: 폴아웃",
    oneLiner: "파리 추격의 구형 세단. M5라는 말과 528i라는 말이 같이 있습니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "fiat-500",
    nameKo: "피아트 500 (촬영용)",
    nameEn: "Fiat 500 (custom)",
    brand: "Fiat",
    brandKo: "피아트",
    era: "2020s",
    badges: ["추격"],
    filmSlug: "dead-reckoning",
    filmTitleKo: "미션 임파서블: 데드 레코닝 PART ONE",
    oneLiner: "로마 추격용으로 만든 차체. 시판 500과 같지 않습니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "bmw-g310gs",
    nameKo: "BMW G 310 GS",
    nameEn: "BMW G 310 GS",
    brand: "BMW",
    brandKo: "BMW",
    era: "2020s",
    badges: ["추격", "이륜"],
    filmSlug: "dead-reckoning",
    filmTitleKo: "미션 임파서블: 데드 레코닝 PART ONE",
    oneLiner: "2020년형. 캐릭터 또는 추격에 쓰인 바이크로 기록됩니다.",
    hasL2: true,
    posterTone: tone.green,
  },
  {
    slug: "honda-crf250",
    nameKo: "혼다 CRF 250",
    nameEn: "Honda CRF 250",
    brand: "Honda",
    brandKo: "혼다",
    era: "2020s",
    badges: ["추격", "이륜"],
    filmSlug: "dead-reckoning",
    filmTitleKo: "미션 임파서블: 데드 레코닝 PART ONE",
    oneLiner: "절벽 점프의 바이크. 세부모델은 CRF 250까지만 적습니다.",
    hasL2: true,
    posterTone: tone.red,
  },
];

export function getCar(slug: string) {
  return cars.find((car) => car.slug === slug);
}

const photoNote =
  "이 페이지의 사진은 같은 계열의 시판·전시 차량입니다. 촬영에 쓴 그 차가 아니고, 영화 스틸이 아닙니다.";

export const carDetails: Record<string, CarL2> = {
  "audi-tt": {
    slug: "audi-tt",
    overview: [
      "IMCDb는 미션 임파서블 2의 아우디를 1999년 TT 로드스터 1.8 T 콰트로, 양산 전 프로토타입(Typ 8N)으로 적고, 캐릭터가 타거나 추격에 쓴 차로 분류합니다.",
      "같은 항목의 인용은 핸드빌트 프로토타입 네 대와 추가 차체가 촬영에 들어갔다고 전합니다. 아우디 A8은 이 목록에 올리지 않습니다.",
      photoNote,
    ],
    timeline: [
      { year: "1998–1999", text: "촬영 당시 TT 로드스터는 아직 공개 전 차였다는 설명이 항목 인용에 있습니다." },
      { year: "2000", text: "미국 개봉 5월 24일." },
    ],
    onScreen: ["세비야 쪽 추격에서 로드스터가 보입니다. 어느 샷이 프로토타입이고 어느 샷이 스턴트 차체인지는 나누어 읽습니다."],
    production: ["IMCDb가 전하는 아우디월드 인용은 네 대의 프로토타입과 네 개의 추가 차체, 현장 기술 지원을 적습니다."],
    gossip: [
      { label: "확인됨", text: "기종과 역할(캐릭터/추격)은 IMCDb 항목입니다." },
      { label: "미확인", text: "A8을 이 편의 주인공 차로 적는 말은 여기서 채택하지 않습니다." },
    ],
    continuity: ["2편의 이륜 추격은 트라이엄프 두 대입니다. TT와 바이크를 한 대로 합치지 않습니다."],
    videos: [{ id: "hSPtsCQq52k", title: "미션 임파서블 2 공식 예고편" }],
    related: [
      { href: "/films/mission-impossible-2", label: "미션 임파서블 2" },
      { href: "/cars/triumph-speed-triple", label: "스피드 트리플" },
    ],
    sources: [imcdb("v001836", "1999 Audi TT Roadster pre-production")],
    footnotes: [
      { n: 1, text: "Typ 8N 프로토타입과 캐릭터/추격 분류는 IMCDb v001836입니다." },
      { n: 2, text: "네 대의 프로토타입 문장은 그 항목이 인용한 아우디월드 글입니다. 사진을 촬영 차량으로 읽지 않습니다." },
      { n: 3, text: "추가 차체와 기술 지원도 같은 인용입니다." },
    ],
  },
  "triumph-speed-triple": {
    slug: "triumph-speed-triple",
    overview: [
      "IMCDb는 헌트 쪽 바이크를 2000년 트라이엄프 스피드 트리플 955i로 적고, 캐릭터 또는 추격에 쓰였다고 분류합니다.",
      "바이크 전문 글은 검은 휠과 레터링이 2000년 955i보다 앞선 스피드 트리플에 가깝다고 봅니다. 기종은 스피드 트리플로 두고, 연식은 그 차이를 같이 적습니다. 두카티가 아닙니다.",
      "사진의 2011년 스피드 트리플 1050은 같은 이름 계열의 이후 모델입니다.",
    ],
    timeline: [
      { year: "2000", text: "결말의 오토바이 추격. IMCDb 항목 제목은 955i입니다." },
    ],
    onScreen: ["헌트가 타고, 앰브로스는 데이토나 955i입니다. 두 대를 한 기종으로 적지 않습니다."],
    production: ["오프로드 타이어가 흙길 샷에 쓰였다는 설명이 바이크 글에 있습니다. 타이어 규격은 적지 않습니다."],
    gossip: [
      { label: "확인됨", text: "IMCDb 분류는 2000년 스피드 트리플 955i, 캐릭터/추격입니다." },
      { label: "팬 설", text: "휠과 스크립트로 1999년 이전 스피드 트리플을 가리키는 글이 있습니다. 어느 쪽을 촬영 원본으로 단정하지 않습니다." },
    ],
    continuity: ["데드 레코닝의 CRF 250, G 310 GS와 이 바이크는 다른 편입니다."],
    videos: [{ id: "hSPtsCQq52k", title: "미션 임파서블 2 공식 예고편" }],
    related: [
      { href: "/films/mission-impossible-2", label: "미션 임파서블 2" },
      { href: "/cars/triumph-daytona", label: "데이토나 955i" },
      { href: "/directors/john-woo", label: "존 우" },
    ],
    sources: [imcdb("v006407", "2000 Triumph Speed Triple 955i")],
    footnotes: [
      { n: 1, text: "955i와 역할 분류는 IMCDb v006407입니다." },
      { n: 2, text: "연식 이견은 바이크 식별 글의 층입니다. 두카티로 바꾸지 않습니다." },
      { n: 3, text: "사진 설명에 2011년 1050임을 적습니다." },
    ],
  },
  "triumph-daytona": {
    slug: "triumph-daytona",
    overview: [
      "IMCDb는 앰브로스 쪽을 트라이엄프 데이토나 955i로 적고, 캐릭터 또는 추격에 쓰였다고 분류합니다. 항목 댓글은 연식을 1999년으로 맞추자고 적습니다.",
      "사진은 1999년형 데이토나 955i입니다. 촬영에 쓴 그 바이크는 아닙니다.",
    ],
    timeline: [{ year: "2000", text: "2편 결말 추격. 헌트의 스피드 트리플과 짝입니다." }],
    onScreen: ["풀 페어링입니다. 네이키드인 스피드 트리플과 실루엣이 다릅니다."],
    production: ["오프로드 타이어가 보인다는 댓글이 IMCDb에 있습니다. 스턴트 대수를 세지는 않습니다."],
    gossip: [{ label: "확인됨", text: "기종과 역할은 IMCDb입니다. 1999년 연식은 그 항목의 수정 요청입니다." }],
    continuity: ["스피드 트리플 페이지와 같이 읽습니다."],
    videos: [{ id: "hSPtsCQq52k", title: "미션 임파서블 2 공식 예고편" }],
    related: [
      { href: "/films/mission-impossible-2", label: "미션 임파서블 2" },
      { href: "/cars/triumph-speed-triple", label: "스피드 트리플" },
      { href: "/villains/sean-ambrose", label: "숀 앰브로스" },
    ],
    sources: [imcdb("v006408", "Triumph Daytona 955i")],
    footnotes: [
      { n: 1, text: "데이토나 955i와 캐릭터/추격 분류는 IMCDb v006408입니다." },
      { n: 2, text: "1999년 연식 요청은 같은 항목의 댓글입니다." },
      { n: 3, text: "오프로드 타이어 언급도 같은 항목의 댓글입니다. 규격은 적지 않습니다." },
    ],
  },
  "lamborghini-gallardo": {
    slug: "lamborghini-gallardo",
    overview: [
      "IMCDb는 미션 임파서블 3에 2006년 람보르기니 가야르도를 캐릭터 차량으로 적습니다. 타임코드는 약 00:44:16입니다.",
      "파괴 샷에 쓰인 껍질은 엔진이 없었다는 말이 같은 항목 댓글에 있습니다. 그걸 시판 가야르도의 제원으로 옮기지 않습니다.",
      photoNote,
    ],
    timeline: [{ year: "2006", text: "3편 미국 개봉 5월 5일. 항목이 적는 가야르도도 2006년형입니다." }],
    onScreen: ["바티칸 앞뒤의 이동에 슈퍼카가 보입니다. 토끼의 발 설정과 이 차를 연결하지 않습니다."],
    production: ["댓글은 젠 레이 역의 매기 큐가 촬영 중 접촉 사고를 말했다고 전합니다. 인터뷰 원문 없이 확인됨으로 올리지 않습니다."],
    gossip: [
      { label: "확인됨", text: "2006년 가야르도, 캐릭터 차량, 약 00:44:16은 IMCDb입니다." },
      { label: "미확인", text: "엔진 없는 파괴용 껍질과 접촉 사고는 항목 댓글입니다." },
    ],
    continuity: ["이 편의 가면 제작은 가젯 칸에 있습니다. 가야르도에 가젯 목록을 만들지 않습니다."],
    videos: [{ id: "4oVva0muTE8", title: "미션 임파서블 3 공식 예고편" }],
    related: [
      { href: "/films/mission-impossible-3", label: "미션 임파서블 3" },
      { href: "/directors/jj-abrams", label: "J. J. 에이브럼스" },
    ],
    sources: [imcdb("v032093", "2006 Lamborghini Gallardo")],
    footnotes: [
      { n: 1, text: "연식, 역할, 타임코드는 IMCDb v032093입니다." },
      { n: 2, text: "엔진 없는 껍질은 댓글이므로 개요에서 분리합니다." },
      { n: 3, text: "매기 큐 일화는 확인된 인터뷰로 인용하지 않습니다." },
    ],
  },
  "bmw-vision-efficientdynamics": {
    slug: "bmw-vision-efficientdynamics",
    overview: [
      "BMW 미국 프리미어 보도자료는 비전 이피션트다이내믹스(이후 i8의 콘셉트)와 6시리즈 컨버터블을 헌트가 타고, 주요 액션에 나온다고 적습니다. 파트너십 발표도 그 콘셉트를 헌트의 차로 지목합니다.",
      "IMCDb는 이 차를 캐릭터/추격으로 분류합니다. 고스트 프로토콜의 M5 E60이나 M3는 확인하지 못해 넣지 않습니다.",
      "사진은 양산 i8의 측면입니다. 2009년 콘셉트 차체가 아닙니다. 공용에서 콘셉트 전면 사진을 확인하지 못했습니다.",
    ],
    timeline: [
      { year: "2009", text: "비전 이피션트다이내믹스가 콘셉트로 공개됩니다. 영화 개봉은 그 다음입니다." },
      { year: "2011", text: "고스트 프로토콜. BMW가 자동차 파트너입니다." },
    ],
    onScreen: ["BMW 벨트 프리미어 글은 뭄바이 교통을 콘셉트 카가 통과한다고 적습니다. 모래 폭풍의 모든 샷을 이 차로 단정하지 않습니다."],
    production: ["레드카펫에 선 i8 콘셉트와, 영화에 들어간 비전 이피션트다이내믹스를 보도자료가 구분합니다. 양산 i8은 2014년 전후입니다."],
    gossip: [
      { label: "확인됨", text: "헌트가 탄다는 문장은 BMW 보도자료 두 건입니다." },
      { label: "미확인", text: "M5 E60, M3, 주인공급 3시리즈는 이 편 허브에 없습니다." },
    ],
    continuity: ["로그네이션의 M3는 5세대 F80입니다. 이 콘셉트의 후속 양산 i8과 그 M3를 한 차로 부르지 않습니다."],
    videos: [{ id: "m31C9DofmSo", title: "고스트 프로토콜 공식 예고편" }],
    related: [
      { href: "/films/ghost-protocol", label: "고스트 프로토콜" },
      { href: "/cars/bmw-6-series", label: "6시리즈 컨버터블" },
    ],
    sources: [
      BMW_GHOST_PREMIERE,
      BMW_GHOST_PARTNER,
      imcdb("v411854", "BMW Vision EfficientDynamics"),
    ],
    footnotes: [
      { n: 1, text: "헌트와 주요 액션은 2011년 12월 19일 미국 프리미어 보도자료입니다. 파트너 발표는 콘셉트 카를 따로 적습니다." },
      { n: 2, text: "IMCDb v411854가 캐릭터/추격으로 분류합니다. 사진은 양산 i8입니다." },
      { n: 3, text: "양산 i8의 판매 시점은 보도자료가 2014년으로 적는 범위 안에서만 말합니다." },
    ],
  },
  "bmw-6-series": {
    slug: "bmw-6-series",
    overview: [
      "같은 미국 프리미어 보도자료가 비전 이피션트다이내믹스와 함께 BMW 6시리즈 컨버터블을 헌트의 추격차로 적습니다.",
      "IMCDb는 2011년 6시리즈 컨버터블 F12를 캐릭터/추격으로 분류합니다.",
      "사진은 중국에서 찍은 F12 컨버터블입니다. 촬영 차량이 아닙니다.",
    ],
    timeline: [{ year: "2011", text: "F12 컨버터블이 판매 중이던 해에 영화가 개봉합니다." }],
    onScreen: ["오픈카입니다. 콘셉트 쿠페와 실루엣을 섞지 않습니다."],
    production: ["BMW는 이 편과 로그네이션, 폴아웃의 자동차 파트너였다고 이후 보도자료가 회고합니다. 6시리즈에 가젯 버튼을 만들지 않습니다."],
    gossip: [{ label: "확인됨", text: "보도자료의 차명과 IMCDb의 F12 분류가 맞습니다." }],
    continuity: ["배경으로만 잡힌 E90 3시리즈와 E39 5시리즈는 허브에 올리지 않습니다."],
    videos: [{ id: "m31C9DofmSo", title: "고스트 프로토콜 공식 예고편" }],
    related: [
      { href: "/films/ghost-protocol", label: "고스트 프로토콜" },
      { href: "/cars/bmw-vision-efficientdynamics", label: "비전 이피션트다이내믹스" },
    ],
    sources: [BMW_GHOST_PREMIERE, BMW_FALLOUT, imcdb("v411852", "2011 BMW 6 Series Convertible F12")],
    footnotes: [
      { n: 1, text: "6시리즈 컨버터블을 헌트의 차로 적은 글은 BMW 미국 프리미어 보도자료입니다." },
      { n: 2, text: "F12와 역할은 IMCDb v411852입니다." },
      { n: 3, text: "2011년부터의 파트너십 회고는 폴아웃 BMW 보도자료입니다." },
    ],
  },
  "bmw-m3-f80": {
    slug: "bmw-m3-f80",
    overview: [
      "2015년 3월 BMW 보도자료는 로그네이션의 전 세계 자동차 파트너가 BMW이고, 예고편의 정밀 주행에 신형 M3가 쓰인다고 적습니다. 그 문장은 이 차를 5세대 M3라고 부릅니다. 2014–2018년 5세대 세단의 코드는 F80입니다. E92가 아닙니다.",
      "IMCDb도 이 촬영 차를 M3 F80으로 적습니다.",
      "사진은 Alexandre Prévot가 찍은 F80입니다. 브뤼셀 모터쇼의 이후 세대 M3 사진과는 다릅니다.",
    ],
    timeline: [
      { year: "2014", text: "5세대 M3(F80) 판매." },
      { year: "2015", text: "3월 24일 파트너십 보도. 미국 개봉은 7월 31일." },
    ],
    onScreen: ["추격의 세단으로 제시됩니다. 보도자료가 가젯 버튼 목록을 주지 않으므로 만들지 않습니다."],
    production: ["같은 글은 BMW ConnectedDrive를 팀이 사용했다고 적습니다. 기능과 화면 샷을 1:1로 맞추지는 않습니다. 고스트 프로토콜에 이은 두 번째 협업이라고도 합니다."],
    gossip: [
      { label: "확인됨", text: "5세대 M3라는 말은 BMW 보도자료에 있습니다." },
      { label: "미확인", text: "E92로 적는 말은 세대가 다릅니다." },
    ],
    continuity: ["폴아웃의 신형 세단은 M5 F90입니다. 이 M3를 그 편으로 넘기지 않습니다."],
    videos: [{ id: "gOW_azQbOjw", title: "로그네이션 공식 예고편" }],
    related: [
      { href: "/films/rogue-nation", label: "로그네이션" },
      { href: "/cars/bmw-s1000rr", label: "S 1000 RR" },
    ],
    sources: [BMW_ROGUE, imcdb("v798794", "BMW M3 F80")],
    footnotes: [
      { n: 1, text: "5세대 M3와 예고편 주행은 2015년 3월 24일 BMW 보도자료입니다." },
      { n: 2, text: "F80 표기는 IMCDb v798794와, 그 세대의 차체 코드입니다." },
      { n: 3, text: "ConnectedDrive 문장은 같은 보도자료입니다." },
    ],
  },
  "bmw-s1000rr": {
    slug: "bmw-s1000rr",
    overview: [
      "같은 로그네이션 보도자료는 예고편에 BMW 모토라드 S 1000 RR이 나온다고 적습니다.",
      "IMCDb는 이 바이크를 캐릭터 또는 추격으로 분류합니다. 모로코 촬영이 작품에 있지만, 보도자료가 이 바이크의 촬영 도시를 적지는 않습니다.",
      "사진은 뮌헨 BMW 박물관의 S 1000 RR입니다. 촬영 바이크가 아닙니다.",
    ],
    timeline: [{ year: "2015", text: "M3와 같은 날의 파트너십 발표에 바이크가 함께 있습니다." }],
    onScreen: ["슈퍼스포츠 실루엣입니다. 2편의 트라이엄프와 다른 편입니다."],
    production: ["BMW 모토라드가 자동차 파트너십 안에 포함됩니다. 대수를 보도자료가 적지 않습니다."],
    gossip: [{ label: "확인됨", text: "기종명은 BMW 보도자료와 IMCDb가 같습니다." }],
    continuity: ["폴아웃의 이륜은 R nineT 스크램블러입니다."],
    videos: [{ id: "gOW_azQbOjw", title: "로그네이션 공식 예고편" }],
    related: [
      { href: "/films/rogue-nation", label: "로그네이션" },
      { href: "/cars/bmw-m3-f80", label: "M3 F80" },
    ],
    sources: [BMW_ROGUE, imcdb("v798792", "BMW S 1000 RR")],
    footnotes: [
      { n: 1, text: "예고편의 S 1000 RR은 2015년 BMW·BMW 모토라드 보도자료입니다." },
      { n: 2, text: "역할 분류는 IMCDb v798792입니다. 촬영 도시는 보도자료에 없습니다." },
      { n: 3, text: "촬영 대수는 그 보도자료에 없습니다." },
    ],
  },
  "bmw-m5-f90": {
    slug: "bmw-m5-f90",
    overview: [
      "BMW 보도자료는 폴아웃의 신형 M5를 헌트와 함께 나오는 추격 차로 적습니다. 제원은 4.4리터 V8 비트보, 441kW/600마력, M xDrive입니다. 이 세대가 F90입니다.",
      "IMCDb의 2018년 M5 F90 항목은 짧은 등장으로 분류하고, 댓글은 람슈타인 쪽의 원격 조종 차를 말합니다. 파리의 구형 세단 추격과 이 항목을 한 장면으로 합치지 않습니다.",
      "E34는 이 편에 없습니다. 사진은 2018년 M5의 시판 차입니다.",
    ],
    timeline: [
      { year: "2017", text: "F90 M5 공개. 영화 개봉은 2018년입니다." },
      { year: "2018", text: "7월 27일 전후 개봉. BMW 벨트 전시에 싱가포르 그레이 M5가 놓입니다." },
    ],
    onScreen: ["신형 세단의 추격과, 1986년 E28의 파리 추격은 다른 차입니다."],
    production: ["보도자료는 M 퍼포먼스 파츠로 검은 키드니와 카본 미러 캡을 적습니다. 원격 조종은 IMCDb 댓글의 층이므로 보도자료의 제원과 섞지 않습니다."],
    gossip: [
      { label: "확인됨", text: "출력과 M xDrive, 헌트와의 연결은 BMW 파트너십 보도자료입니다." },
      { label: "확인됨", text: "IMCDb v001180568의 역할 태그는 짧은 등장입니다." },
    ],
    continuity: ["로그네이션 M3 F80의 후속이 이 차라는 식으로 이어 붙이지 않습니다."],
    videos: [{ id: "wb49-oV0F78", title: "폴아웃 공식 예고편" }],
    related: [
      { href: "/films/fallout", label: "폴아웃" },
      { href: "/cars/bmw-5-series-e28", label: "1986년 5시리즈" },
      { href: "/cars/bmw-r-ninet", label: "R nineT 스크램블러" },
    ],
    sources: [BMW_FALLOUT, BMW_WELT_FALLOUT, imcdb("v001180568", "2018 BMW M5 F90")],
    footnotes: [
      { n: 1, text: "441kW/600마력과 M xDrive는 BMW 폴아웃 파트너십 보도자료입니다." },
      { n: 2, text: "짧은 등장 태그는 IMCDb v001180568입니다. 파리 추격은 E28 페이지에서 다룹니다." },
      { n: 3, text: "싱가포르 그레이 전시 차는 BMW 벨트 글입니다." },
    ],
  },
  "bmw-r-ninet": {
    slug: "bmw-r-ninet",
    overview: [
      "BMW 파트너십 보도자료는 R nineT 스크램블러가 파리의 빠른 추격에 나온다고 적습니다. BMW 벨트 글은 헌트가 개선문 주변을 역주행한다고 적습니다.",
      "IMCDb 작품 목록에도 2017년 R nineT 스크램블러가 있습니다.",
      "사진은 일반 R nineT입니다. 스크램블러 사양과 펜더, 배기가 다를 수 있습니다. 촬영 바이크가 아닙니다.",
    ],
    timeline: [{ year: "2018", text: "폴아웃. 벨트 전시에 영화에 쓴 스크램블러가 놓였다고 그 글이 적습니다." }],
    onScreen: ["파리 도심의 이륜 추격입니다. HALO 점프와 다른 시퀀스입니다."],
    production: ["전시 설명은 촬영에 쓴 스크램블러와, 같은 해 계열의 E28 전시 차를 구분합니다."],
    gossip: [{ label: "확인됨", text: "개선문 역주행은 BMW 벨트 보도자료의 문장입니다." }],
    continuity: ["로그네이션의 S 1000 RR과 기종이 다릅니다."],
    videos: [{ id: "wb49-oV0F78", title: "폴아웃 공식 예고편" }],
    related: [
      { href: "/films/fallout", label: "폴아웃" },
      { href: "/cars/bmw-m5-f90", label: "M5 F90" },
      { href: "/locations", label: "파리" },
    ],
    sources: [BMW_FALLOUT, BMW_WELT_FALLOUT, imcdb("m4912910", "Fallout vehicle list")],
    footnotes: [
      { n: 1, text: "파리 추격은 파트너십 보도자료, 개선문 역주행은 BMW 벨트 글입니다." },
      { n: 2, text: "2017년 스크램블러 표기는 IMCDb 작품 목록 m4912910입니다." },
      { n: 3, text: "사진이 스크램블러가 아님을 캡션에 적습니다." },
    ],
  },
  "bmw-5-series-e28": {
    slug: "bmw-5-series-e28",
    overview: [
      "파트너십 보도자료는 1986년 BMW 5시리즈 세단이 격한 장면에 크게 나온다고 적습니다. 차체 코드나 M5라는 단어는 그 문장에 없습니다.",
      "BMW 벨트 글은 1986년 M5 E28이 파리를 달리고, 시속 90마일을 넘기며 드리프트하고 계단을 뛰어넘는다고 적습니다. 전시 설명은 같은 1986년 계열의 M5 E28을 브론즈 베이지로 보여 준다고 합니다.",
      "IMCDb 작품 목록의 표기는 1986년 BMW 528i [E28]입니다. E34가 아닙니다. 이 페이지는 세 문장을 한 등급으로 합치지 않습니다.",
      "사진은 미네르바 블루의 M5 E28입니다. 영화의 528i일 수도, M5일 수도 있는 그 차와 색이 같다고 말하지 않습니다.",
    ],
    timeline: [
      { year: "1986", text: "E28 5시리즈의 해. M5 E28도 이 세대입니다." },
      { year: "2018", text: "폴아웃의 파리 추격에 구형 세단이 나옵니다." },
    ],
    onScreen: ["파리의 구형 세단 추격입니다. 신형 M5 F90의 장면과 분리합니다."],
    production: ["벨트 글의 드리프트·점프 문장은 M5 E28이라고 부른 그 차에 붙어 있습니다. 528i 표기와 동시에 읽습니다."],
    gossip: [
      { label: "확인됨", text: "‘1986 BMW 5 Series Sedan’은 파트너십 보도자료입니다." },
      { label: "확인됨", text: "‘BMW M5 E28 from 1986’과 파리 추격은 BMW 벨트 글입니다." },
      { label: "확인됨", text: "IMCDb 목록은 1986 BMW 528i [E28]입니다." },
    ],
    continuity: ["고스트 프로토콜의 배경 E39와 이 차를 한 5시리즈 역사로 잇지 않습니다."],
    videos: [{ id: "wb49-oV0F78", title: "폴아웃 공식 예고편" }],
    related: [
      { href: "/films/fallout", label: "폴아웃" },
      { href: "/cars/bmw-m5-f90", label: "M5 F90" },
    ],
    sources: [BMW_FALLOUT, BMW_WELT_FALLOUT, imcdb("m4912910", "Fallout vehicle list")],
    footnotes: [
      { n: 1, text: "세단이라는 단어는 파트너십 보도자료, M5 E28과 파리의 속도 문장은 BMW 벨트 글, 528i는 IMCDb m4912910입니다." },
      { n: 2, text: "E34로 적지 않는 이유는 인용한 세 자료가 모두 E28 또는 1986년 5시리즈이기 때문입니다." },
      { n: 3, text: "사진의 색은 미네르바 블루이고, 전시 차 설명의 브론즈 베이지와 다릅니다." },
    ],
  },
  "fiat-500": {
    slug: "fiat-500",
    overview: [
      "IMCDb는 데드 레코닝의 소형차를 ‘Fiat 500 Custom Made for Movie’로 적고, 캐릭터 또는 추격에 쓰였다고 분류합니다. 로마 도심 추격의 그 차입니다.",
      "항목과 설명은 시판 500의 껍질에 가까운 촬영용 차라고 전합니다. 출력과 전동 여부를 이 아카이브가 측정하지 않습니다.",
      "사진은 2007년형 시판 500입니다. 추격용 차체가 아닙니다. 배경으로만 나온 2016년 500 라운지는 허브에 넣지 않습니다.",
    ],
    timeline: [{ year: "2023", text: "데드 레코닝. 로마, 베네치아, 열차가 장소 축입니다." }],
    onScreen: ["좁은 골목의 소형차 추격입니다. 절벽의 CRF 250과 다른 시퀀스입니다."],
    production: ["커스텀이라는 표기를 시판 피아트 500의 제원표로 바꾸지 않습니다."],
    gossip: [
      { label: "확인됨", text: "촬영용 커스텀 500, 캐릭터/추격은 IMCDb v001654323입니다." },
      { label: "미확인", text: "전동 파워트레인 같은 세부는 이차 보도에 맡겨 두고 여기 숫자로 적지 않습니다." },
    ],
    continuity: ["1996년 편과 파이널 레코닝에는 이렇게 확인된 주인공 차가 없습니다."],
    videos: [{ id: "avz06PDqDbM", title: "데드 레코닝 공식 예고편" }],
    related: [
      { href: "/films/dead-reckoning", label: "데드 레코닝" },
      { href: "/cars/honda-crf250", label: "CRF 250" },
      { href: "/cars/bmw-g310gs", label: "G 310 GS" },
    ],
    sources: [imcdb("v001654323", "Fiat 500 custom-made for the movie")],
    footnotes: [
      { n: 1, text: "커스텀 표기와 역할은 IMCDb v001654323입니다." },
      { n: 2, text: "시판 500 사진을 촬영 차로 읽지 않습니다." },
      { n: 3, text: "커스텀 표기를 시판 제원으로 바꾸지 않습니다." },
    ],
  },
  "bmw-g310gs": {
    slug: "bmw-g310gs",
    overview: [
      "IMCDb는 데드 레코닝에 2020년 BMW G 310 GS를 캐릭터 또는 추격 바이크로 적습니다.",
      "경찰 소속인지, 팀이 탄 바이크인지는 그 항목이 문장으로 닫지 않습니다. 소속을 만들지 않습니다.",
      "사진은 2023년에 찍은 G 310 GS입니다. 촬영 바이크가 아닙니다.",
    ],
    timeline: [{ year: "2023", text: "데드 레코닝. CRF 250과는 다른 기종입니다." }],
    onScreen: ["어드벤처 실루엣입니다. 절벽 점프의 오프로드 바이크와 구분합니다."],
    production: ["BMW가 이 편의 전 세계 자동차 파트너라고 적은 보도자료를 여기서 인용하지 않습니다. 기종 식별은 IMCDb입니다."],
    gossip: [{ label: "확인됨", text: "2020년 G 310 GS와 역할 태그는 IMCDb v001811749입니다." }],
    continuity: ["폴아웃까지의 BMW 파트너십 문장을 이 바이크의 계약으로 연장하지 않습니다."],
    videos: [{ id: "avz06PDqDbM", title: "데드 레코닝 공식 예고편" }],
    related: [
      { href: "/films/dead-reckoning", label: "데드 레코닝" },
      { href: "/cars/fiat-500", label: "피아트 500" },
      { href: "/cars/honda-crf250", label: "CRF 250" },
    ],
    sources: [imcdb("v001811749", "2020 BMW G 310 GS")],
    footnotes: [
      { n: 1, text: "기종과 역할은 IMCDb v001811749입니다. 소속 기관은 적지 않습니다." },
      { n: 2, text: "사진은 2023년에 찍은 시판 G 310 GS입니다." },
      { n: 3, text: "이 바이크를 폴아웃까지의 BMW 파트너십 계약으로 적지 않습니다." },
    ],
  },
  "honda-crf250": {
    slug: "honda-crf250",
    overview: [
      "IMCDb는 데드 레코닝의 절벽 바이크를 혼다 CRF 250으로 적습니다. CRF250L인지, 모토크로스 CRF250R인지는 그 표기가 닫지 않습니다.",
      "위키백과 제작 단락은 열차와 오토바이 점프를 노르웨이에서 찍었다고 적고, 기종명은 적지 않습니다. 기종은 IMCDb, 장소의 큰 줄기는 위키백과로 나눕니다.",
      "사진은 CRF250L 듀얼스포츠입니다. 촬영 바이크가 아닐 수 있습니다. 피터슨 박물관의 촬영 소품 사진은 쓰지 않습니다.",
    ],
    timeline: [
      { year: "2020", text: "노르웨이 촬영. 영국 스턴트 장치에 불이 났고 부상은 없었다고 위키백과는 적습니다. 그 불과 이 기종을 한 사고로 합치지 않습니다." },
      { year: "2023", text: "데드 레코닝 개봉." },
    ],
    onScreen: ["열차에서 벗어나는 점프입니다. 로마의 피아트 500과 다른 나라의 장면입니다."],
    production: ["점프 거리의 미터 숫자는 위키백과 제작 단락이 주지 않으면 만들지 않습니다."],
    gossip: [
      { label: "확인됨", text: "CRF 250 표기는 IMCDb v001830913입니다." },
      { label: "미확인", text: "L형인지 R형인지는 비워 둡니다." },
    ],
    continuity: ["2편의 트라이엄프 추격과 이 점프를 한 오토바이 역사로 쓰지 않습니다."],
    videos: [{ id: "avz06PDqDbM", title: "데드 레코닝 공식 예고편" }],
    related: [
      { href: "/films/dead-reckoning", label: "데드 레코닝" },
      { href: "/records", label: "스턴트 기록" },
      { href: "/trips/norway", label: "노르웨이" },
    ],
    sources: [
      imcdb("v001830913", "Honda CRF 250"),
      {
        label: "Wikipedia — Dead Reckoning Part One",
        href: "https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One",
      },
    ],
    footnotes: [
      { n: 1, text: "CRF 250은 IMCDb v001830913입니다. 노르웨이 촬영은 위키백과 제작 단락이고, 그 단락은 기종명이 없습니다." },
      { n: 2, text: "사진이 CRF250L임을 캡션에 적습니다." },
      { n: 3, text: "점프 거리의 숫자는 그 제작 단락에 없습니다." },
    ],
  },
};
