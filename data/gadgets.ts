import type { Footnote, GossipItem, Source } from "./types";
import { wiki } from "./sources";

export type GadgetBadge = "장비" | "스턴트";
export type GadgetEra = "1990s" | "2000s" | "2010s" | "2020s" | "시리즈";

export type Gadget = {
  slug: string;
  nameKo: string;
  nameEn: string;
  brand: string;
  brandKo: string;
  era: GadgetEra;
  badges: GadgetBadge[];
  filmTitleKo: string;
  oneLiner: string;
  hasL2: boolean;
  posterTone: string;
};

export type GadgetDetail = {
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
  footnotes: Footnote[];
};

export const gadgets: Gadget[] = [
  {
    slug: "self-destruct",
    nameKo: "자동 파괴 메시지",
    nameEn: "Self-destructing message",
    brand: "IMF",
    brandKo: "IMF",
    era: "시리즈",
    badges: ["장비"],
    filmTitleKo: "시리즈 전체",
    oneLiner: "수락할 임무와, 재생이 끝나면 타 버리는 기록.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E44 100%)",
  },
  {
    slug: "latex-mask",
    nameKo: "라텍스 가면",
    nameEn: "Latex mask",
    brand: "IMF",
    brandKo: "IMF",
    era: "시리즈",
    badges: ["장비"],
    filmTitleKo: "시리즈 전체",
    oneLiner: "텔레비전에서 이어진 위장. 3편에서 제작 과정이 보입니다.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 50%,#8a734033 100%)",
  },
  {
    slug: "contact-lens",
    nameKo: "스마트 콘택트렌즈",
    nameEn: "Smart contact lens",
    brand: "IMF",
    brandKo: "IMF",
    era: "2010s",
    badges: ["장비"],
    filmTitleKo: "고스트 프로토콜",
    oneLiner: "두바이 회의에서 정보를 띄우는 렌즈.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#14283a 0%,#0B0D10 50%,#3aa0c633 100%)",
  },
  {
    slug: "gecko-gloves",
    nameKo: "등반 장갑",
    nameEn: "Climbing gloves",
    brand: "IMF",
    brandKo: "IMF",
    era: "2010s",
    badges: ["장비", "스턴트"],
    filmTitleKo: "고스트 프로토콜",
    oneLiner: "부르즈 할리파 외벽. 화면 밖에서 크루즈는 케이블에 매여 있었습니다.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#3a3418 0%,#0B0D10 48%,#C6A75E55 100%)",
  },
  {
    slug: "a400m",
    nameKo: "에어버스 A400M",
    nameEn: "Airbus A400M Atlas",
    brand: "Airbus",
    brandKo: "에어버스",
    era: "2010s",
    badges: ["스턴트"],
    filmTitleKo: "로그네이션",
    oneLiner: "이륙하는 수송기 바깥. 팀이 소유한 차가 아닙니다.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#101828 0%,#0B0D10 50%,#8a734033 100%)",
  },
  {
    slug: "halo",
    nameKo: "HALO 점프",
    nameEn: "HALO jump",
    brand: "—",
    brandKo: "—",
    era: "2010s",
    badges: ["스턴트"],
    filmTitleKo: "폴아웃",
    oneLiner: "파리 상공의 고고도 저개산 낙하.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#181820 0%,#0B0D10 50%,#c6a75e22 100%)",
  },
  {
    slug: "entity-key",
    nameKo: "십자가 열쇠",
    nameEn: "Cruciform key",
    brand: "—",
    brandKo: "—",
    era: "2020s",
    badges: ["장비"],
    filmTitleKo: "데드 레코닝",
    oneLiner: "엔티티를 다루는 열쇠. 둘로 나뉩니다.",
    hasL2: true,
    posterTone: "linear-gradient(165deg,#10241c 0%,#0B0D10 50%,#5e8a6a33 100%)",
  },
];

export function getGadget(slug: string) {
  return gadgets.find((item) => item.slug === slug);
}

export const gadgetDetails: Record<string, GadgetDetail> = {
  "self-destruct": {
    slug: "self-destruct",
    overview: [
      "1966년 시리즈의 임무는 테이프로 전달되고, 재생이 끝나면 탑니다. 위키백과는 보통의 문장으로 ‘5초 후에 자동 파괴된다’를 적고, 간혹 10초였다고 덧붙입니다.",
      "극장판은 그 형식을 유지하되 매체는 바뀝니다. 수신인도 짐에서 에단으로 이동합니다. 한 편의 정확한 소품 모델명을 시리즈 전체로 일반화하지 않습니다.",
    ],
    timeline: [
      { year: "1966", text: "CBS 시리즈 첫 방송. 테이프와 연기가 오프닝의 약속이 됩니다." },
      { year: "1996", text: "극장판 1편이 펠프스에게 보내는 브리핑으로 형식을 가져옵니다." },
    ],
    onScreen: ["수신, 거절할 권리, 발각되면 부인된다는 문장, 그리고 파괴. 이 네 칸이 공식입니다."],
    production: ["원작의 주제 음악은 랄로 시프린입니다. 메시지 자체와 음악을 한 문장으로 붙이지 않습니다."],
    gossip: [{ label: "확인됨", text: "위키백과가 5초와 가끔의 10초를 구분합니다. 항상 5초는 아닙니다." }],
    continuity: ["영화가 안경, 화면, 다른 매체로 바꿔도 부인 조항은 남습니다."],
    videos: [{ id: "L8Pbjh4EZRk", title: "1996 공식 예고편" }],
    related: [{ href: "/origin", label: "원작" }, { href: "/quotes", label: "명대사" }],
    sources: [wiki("Mission:_Impossible_(1966_TV_series)", "Mission: Impossible (1966 TV series)")],
    footnotes: [{ n: 1, text: "문장과 5초·10초는 1966년 시리즈 위키백과입니다." }],
  },
  "latex-mask": {
    slug: "latex-mask",
    overview: [
      "위장은 텔레비전 팀의 장기였습니다. 극장판은 그 가면을 플롯 장치로 유지합니다.",
      "3편은 사진을 기계에 넣어 얼굴을 뜨는 과정을 보여 줍니다. 2편은 앰브로스가 헌트의 얼굴을 쓰는 쪽이고, 고스트 프로토콜은 헨드릭스 쪽의 위장입니다.",
    ],
    timeline: [
      { year: "1966", text: "텔레비전 팀이 변장으로 목표에 접근합니다." },
      { year: "2006", text: "3편에서 제작 절차가 화면에 남습니다." },
    ],
    onScreen: ["벗기는 순간이 반전으로 쓰입니다. 누가 누구인지는 작품마다 다릅니다."],
    production: ["분장 팀의 실물 공정과 화면의 기계를 한 기술로 단정하지 않습니다."],
    gossip: [{ label: "미확인", text: "현실의 안면 인식 우회 성능은 이 아카이브가 측정하지 않습니다." }],
    continuity: ["로그네이션은 걸음 인식처럼, 가면만으로 통과하지 못하는 검사를 넣습니다."],
    videos: [],
    related: [{ href: "/films/mission-impossible-3", label: "3편" }],
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III")],
    footnotes: [{ n: 1, text: "3편의 가면 시퀀스는 그 작품의 줄거리로 확인합니다." }],
  },
  "contact-lens": {
    slug: "contact-lens",
    overview: [
      "고스트 프로토콜에서 팀이 렌즈로 문서와 얼굴을 읽습니다. 장비가 실패하는 편이기도 해서, 만능으로 적지 않습니다.",
    ],
    timeline: [{ year: "2011", text: "두바이 이중 회의에서 사용됩니다." }],
    onScreen: ["코드를 복사하고, 위장 회의의 타이밍을 맞추는 데 쓰입니다."],
    production: ["보도된 제작 인터뷰는 렌즈 카메라를 당시의 연구와 연결합니다. 시제품의 모델명은 적지 않습니다."],
    gossip: [{ label: "제작진 인터뷰", text: "버드가 렌즈 카메라와 도마뱀 장갑을 현실 연구·실험과 구분해 말한 기사가 있습니다." }],
    continuity: ["이후 편이 같은 렌즈를 표준 장비로 선언하지는 않습니다."],
    videos: [{ id: "m31C9DofmSo", title: "고스트 프로토콜 예고편" }],
    related: [{ href: "/films/ghost-protocol", label: "고스트 프로토콜" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
    footnotes: [{ n: 1, text: "화면의 용도는 작품 줄거리, 인터뷰 층은 당시 보도를 구분해 읽습니다." }],
  },
  "gecko-gloves": {
    slug: "gecko-gloves",
    overview: [
      "헌트가 부르즈 할리파 유리 외벽을 오를 때 끼는 장갑입니다. 한 짝이 고장 나는 것이 장면의 긴장입니다.",
    ],
    timeline: [{ year: "2011", text: "두바이 촬영. 후반 작업에서 케이블을 지웠습니다." }],
    onScreen: ["높은 층에서 서버실 쪽으로 들어갑니다."],
    production: [
      "위키백과는 크루즈가 항상 여러 케이블에 고정되어 있었고, ILM이 케이블을 지웠다고 적습니다. 자유 등반으로 보이지 않게 적습니다.",
    ],
    gossip: [{ label: "확인됨", text: "케이블이 있었다는 문장은 위키백과 제작 단락입니다." }],
    continuity: ["이 장갑이 이후 편의 표준 장비로 반복되지는 않습니다."],
    videos: [],
    related: [{ href: "/records", label: "스턴트 기록" }, { href: "/locations", label: "부르즈 할리파" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
    footnotes: [{ n: 1, text: "케이블과 ILM은 고스트 프로토콜 위키백과 제작 단락입니다." }],
  },
  a400m: {
    slug: "a400m",
    overview: [
      "로그네이션 오프닝에서 헌트는 이륙하는 A400M 바깥에 매달립니다. 위키백과는 등록기호 F-WWMZ, 장소 RAF 위터링, 고도 5,000피트, 이착륙 8회를 적습니다.",
      "이 페이지의 사진은 2025년 에어 타투의 독일 공군기입니다. 촬영기가 아닙니다.",
    ],
    timeline: [{ year: "2014–2015", text: "오스트리아·모로코 촬영 이후 영국에서 이 시퀀스를 찍습니다." }],
    onScreen: ["화물칸의 화물과 기체의 바깥이 한 샷으로 연결됩니다."],
    production: ["크루즈가 대역 없이 수행했다고 위키백과는 적습니다."],
    gossip: [{ label: "확인됨", text: "등록기호와 횟수는 위키백과 제작 단락과 사진 설명에 있습니다." }],
    continuity: ["가젯 허브에 둔 이유는 장비 목록이 아니라 스턴트 항공기이기 때문입니다. 도로 차량은 영화 속 차량 칸에 있습니다."],
    videos: [],
    related: [{ href: "/records", label: "스턴트 기록" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation")],
    footnotes: [{ n: 1, text: "F-WWMZ와 숫자는 로그네이션 위키백과 제작 단락입니다." }],
  },
  halo: {
    slug: "halo",
    overview: [
      "폴아웃에서 헌트와 워커는 파리 상공으로 HALO 점프를 합니다. 고고도에서 떨어지다 낮게 펴는 방식입니다.",
    ],
    timeline: [{ year: "2017–2018", text: "파리에서 촬영이 시작됩니다. 발목 부상으로 일정이 밀립니다. HALO와 발목 샷을 한 사고로 합치지 않습니다." }],
    onScreen: ["야간 파리 상공이 이 시퀀스의 배경입니다."],
    production: ["위키백과가 점프의 고도 숫자를 이 문단에 주지 않으면, 숫자를 만들지 않습니다."],
    gossip: [{ label: "미확인", text: "훈련 횟수에 대한 팬 집계는 싣지 않습니다." }],
    continuity: ["파이널 레코닝의 복엽기와는 다른 공중 스턴트입니다."],
    videos: [{ id: "wb49-oV0F78", title: "폴아웃 예고편" }],
    related: [{ href: "/films/fallout", label: "폴아웃" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout")],
    footnotes: [{ n: 1, text: "HALO라는 호출은 폴아웃 위키백과 줄거리의 단어입니다." }],
  },
  "entity-key": {
    slug: "entity-key",
    overview: [
      "데드 레코닝의 열쇠는 둘로 나뉩니다. 엔티티에 접근하는 맥거핀이고, 그레이스가 이 물건 때문에 추격에 들어옵니다.",
    ],
    timeline: [
      { year: "2023", text: "데드 레코닝." },
      { year: "2025", text: "파이널 레코닝은 잠수함의 포드코바를 이 존재와 연결합니다." },
    ],
    onScreen: ["파티, 열차, 잠수함으로 이어지는 소품입니다."],
    production: ["실물 소품의 재질은 적지 않습니다."],
    gossip: [],
    continuity: ["3편의 토끼의 발과, 2025년 작품이 말하는 포드코바의 연결은 파이널 레코닝의 설정으로만 적습니다."],
    videos: [],
    related: [{ href: "/villains/the-entity", label: "엔티티" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One")],
    footnotes: [{ n: 1, text: "열쇠의 기능 세부를 추측하지 않습니다." }],
  },
};
