import type { Footnote, GossipItem, Source } from "./types";
import { WIKI_2F2F, WIKI_FIVE, WIKI_SIX, wiki } from "./sources";

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

const gold = "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E44 100%)";
const bay = "linear-gradient(165deg,#14283a 0%,#0B0D10 50%,#3aa0c633 100%)";
const heat = "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)";

export const gadgets: Gadget[] = [
  {
    slug: "nitrous",
    nameKo: "니트로스",
    nameEn: "Nitrous oxide",
    brand: "2 Fast 2 Furious",
    brandKo: "2편",
    era: "2000s",
    badges: ["장비"],
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "로먼이 로베르토를 차 밖으로 밀어내는 즉석 사출 좌석에 쓰입니다.",
    hasL2: true,
    posterTone: heat,
  },
  {
    slug: "vault",
    nameKo: "증거 금고",
    nameEn: "Evidence vault",
    brand: "Fast Five",
    brandKo: "언리미티드",
    era: "2010s",
    badges: ["스턴트"],
    filmTitleKo: "분노의 질주: 언리미티드",
    oneLiner: "높이 8피트. 차저 두 대가 산후안에서 끌어당긴 소품이 있습니다.",
    hasL2: true,
    posterTone: gold,
  },
  {
    slug: "nightshade",
    nameKo: "나이트셰이드",
    nameEn: "Nightshade",
    brand: "Fast & Furious 6",
    brandKo: "더 맥시멈",
    era: "2010s",
    badges: ["장비"],
    filmTitleKo: "분노의 질주: 더 맥시멈",
    oneLiner: "오언 쇼가 부품을 모아 만들려는 전자기 펄스 무기.",
    hasL2: true,
    posterTone: bay,
  },
  {
    slug: "gods-eye",
    nameKo: "갓스 아이",
    nameEn: "God's Eye",
    brand: "Furious 7",
    brandKo: "더 세븐",
    era: "2010s",
    badges: ["장비"],
    filmTitleKo: "분노의 질주: 더 세븐",
    oneLiner: "메건 램지가 만든 추적 프로그램. 칩은 라이칸 하이퍼스포츠에 숨겨져 있습니다.",
    hasL2: true,
    posterTone: gold,
  },
];

export function getGadget(slug: string) {
  return gadgets.find((item) => item.slug === slug);
}

export const gadgetDetails: Record<string, GadgetDetail> = {
  nitrous: {
    slug: "nitrous",
    overview: [
      "2편 위키백과는 로먼이 니트로스 옥사이드로 즉석 사출 좌석을 만들어 로베르토를 차 밖으로 밀어낸다고 적습니다.",
      "거리 레이스 차의 출력 수치나 병의 용량은 그 문단에 없습니다. 숫자를 만들지 않습니다.",
    ],
    timeline: [
      { year: "2003", text: "키로 가는 도주 중 로먼의 차에서 쓰입니다." },
    ],
    onScreen: ["브라이언의 옌코가 요트로 들어가는 장면과 같은 날의 결말입니다."],
    production: ["병의 제조사나 압력은 확인한 제작 단락에 없습니다."],
    gossip: [{ label: "확인됨", text: "‘니트로스 옥사이드를 쓴 즉석 사출 좌석’이라는 문장은 2편 위키백과 줄거리입니다." }],
    continuity: ["2001년 작품 줄거리에 같은 문장은 없습니다. 1편의 니트로 병으로 확장하지 않습니다."],
    videos: [],
    related: [
      { href: "/films/2-fast-2-furious", label: "패스트 & 퓨리어스 2" },
      { href: "/crew/roman-pearce", label: "로먼 피어스" },
    ],
    sources: [WIKI_2F2F],
    footnotes: [{ n: 1, text: "용도는 2편 위키백과 줄거리입니다." }],
  },
  vault: {
    slug: "vault",
    overview: [
      "언리미티드에서 레예스의 남은 현금이 경찰서 증거 금고로 모입니다. 팀은 2010 닷지 차저 두 대로 금고를 건물에서 떼어 거리를 끕니다.",
      "제작 단락은 높이 8피트의 금고를 여섯 종류 만들었다고 적습니다. 그중 하나는 세미트럭 앞의 파사드이고, 다른 하나는 네 바퀴로 스스로 움직이는 보강 소품입니다.",
    ],
    timeline: [
      { year: "2011", text: "화면의 도시는 리우이고, 끌려가는 촬영은 산후안 아토 레이입니다." },
    ],
    onScreen: ["30피트(9.1미터) 케이블로 스턴트 차저에 연결됩니다. 소품 무게는 4 쇼트톤(3.6톤)이라고 같은 단락이 적습니다."],
    production: [
      "스턴트 드라이버 헨리 킹이가 금고 소품을 몰았습니다. 내부 온도가 100°F(38°C)를 넘을 수 있어 온도 조절 슈트를 입었습니다. 촬영 중 금고에 부서진 차량은 200대가 넘습니다.",
    ],
    gossip: [{ label: "확인됨", text: "테오도로 모스코소 다리 끝에 금고를 매달 계획은, 차저가 무게를 못 버틴다는 판단으로 포기됐다고 위키백과가 적습니다." }],
    continuity: ["리우가 배경이고 푸에르토리코·애틀랜타가 촬영 대체지입니다. 두 층을 한 도시로 합치지 않습니다."],
    videos: [],
    related: [
      { href: "/cars/charger-2010", label: "2010 닷지 차저" },
      { href: "/films/fast-five", label: "언리미티드" },
    ],
    sources: [WIKI_FIVE],
    footnotes: [
      { n: 1, text: "치수와 무게, 파괴 대수는 언리미티드 위키백과 제작 단락입니다." },
    ],
  },
  nightshade: {
    slug: "nightshade",
    overview: [
      "더 맥시멈에서 오언 쇼는 전자기 펄스 무기 나이트셰이드를 만들 부품을 훔칩니다. 최고 입찰자에게 팔 계획입니다.",
      "스페인 나토 기지로 가는 군 호송이 마지막 컴퓨터 칩을 옮깁니다. 돔 팀이 끼어들고, 칩은 결국 홉스에게 넘어가 사면의 조건이 됩니다.",
    ],
    timeline: [{ year: "2013", text: "런던의 인터폴 습격으로 시작하고, 칩은 이동하는 안토노프 An-124 쪽으로 이어집니다." }],
    onScreen: ["출력이나 반경 같은 성능 숫자는 줄거리에 없습니다."],
    production: ["무기 소품의 크기 기록은 확인한 단락에 없습니다. 플립 카와 탱크, 수송기는 차량·기록 칸에 둡니다."],
    gossip: [{ label: "확인됨", text: "이름 Nightshade와 EMP라는 분류는 더 맥시멈 위키백과 줄거리입니다." }],
    continuity: ["더 세븐의 갓스 아이와 다른 장치입니다. 한 줄로 잇지 않습니다."],
    videos: [],
    related: [
      { href: "/villains/owen-shaw", label: "오언 쇼" },
      { href: "/films/fast-and-furious-6", label: "더 맥시멈" },
    ],
    sources: [WIKI_SIX],
    footnotes: [{ n: 1, text: "설명은 더 맥시멈 위키백과 줄거리입니다." }],
  },
  "gods-eye": {
    slug: "gods-eye",
    overview: [
      "더 세븐 위키백과는 갓스 아이를 디지털 네트워크 위의 누구든 추적하는 컴퓨터 프로그램이라고 적습니다. 제작자는 메건 램지입니다.",
      "칩이 든 플래시 드라이브는 아부다비 에티하드 타워의 W Motors 라이칸 하이퍼스포츠에 숨겨져 있습니다. 자칸데가 프로그램을 빼앗고, 램지가 다시 해킹해 끊습니다.",
    ],
    timeline: [
      { year: "2015", text: "미스터 노바디스가 돔에게 램지 구출과 프로그램 회수를 조건으로 데커드를 막겠다고 합니다." },
    ],
    onScreen: ["자칸데는 스텔스 헬리콥터와 드론으로 팀을 쫓고, 브라이언이 중계 탑을 빼앗은 뒤 램지가 원격으로 프로그램을 끕니다."],
    production: ["알고리즘이나 서버 위치는 줄거리에 없습니다."],
    gossip: [{ label: "확인됨", text: "제작자가 램지라는 문장은 더 세븐 위키백과 줄거리와 출연 소개가 같이 적습니다." }],
    continuity: ["라이칸은 차량 칸에 있습니다. 프로그램과 차를 한 문서로 합치지 않습니다."],
    videos: [],
    related: [
      { href: "/crew/ramsey", label: "램지" },
      { href: "/cars/lykan-hypersport", label: "라이칸 하이퍼스포츠" },
      { href: "/films/furious-7", label: "더 세븐" },
    ],
    sources: [wiki("Furious_7", "Furious 7")],
    footnotes: [{ n: 1, text: "정의와 칩의 위치는 더 세븐 위키백과 줄거리입니다." }],
  },
};
