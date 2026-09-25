import { carPhotos } from "./carPhotos";
import type { GossipItem, LicensedImage, Source } from "./types";
import {
  WIKI_2001,
  WIKI_2F2F,
  WIKI_F9,
  WIKI_FATE,
  WIKI_FIVE,
  WIKI_TOKYO,
  WIKI_X,
  imcdb,
  wiki,
} from "./sources";

export type CarBadge = "추격" | "파트너" | "이륜" | "출연";
export type CarEra =
  | "1950s"
  | "1960s"
  | "1970s"
  | "1980s"
  | "1990s"
  | "2000s"
  | "2010s"
  | "2020s";

export const ERA_LABEL: Record<CarEra, string> = {
  "1950s": "1950년대",
  "1960s": "1960년대",
  "1970s": "1970년대",
  "1980s": "1980년대",
  "1990s": "1990년대",
  "2000s": "2000년대",
  "2010s": "2010년대",
  "2020s": "2020년대",
};

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
  image?: LicensedImage;
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
  orange: "linear-gradient(165deg,#3a2410 0%,#0B0D10 48%,#c67a3244 100%)",
};

const WIKI_F7 = wiki("Furious_7", "Furious 7");

function detail(
  slug: string,
  parts: {
    overview: string[];
    onScreen: string[];
    sources: Source[];
    timeline?: { year: string; text: string }[];
    production?: string[];
    gossip?: GossipItem[];
    continuity?: string[];
    videos?: { id: string; title: string }[];
    related?: { href: string; label: string }[];
    footnotes?: { n: number; text: string }[];
  },
): CarL2 {
  return {
    slug,
    overview: parts.overview,
    onScreen: parts.onScreen,
    sources: parts.sources,
    timeline: parts.timeline ?? [],
    production: parts.production ?? ["출력, 배기량, 가격은 확인한 문단에 있을 때만 적습니다."],
    gossip: parts.gossip ?? [{ label: "확인됨", text: "이 문서의 문장은 아래 출처 밖으로 나가지 않습니다." }],
    continuity: parts.continuity ?? ["다른 편의 비슷한 차와 같은 개체라고 단정하지 않습니다."],
    videos: parts.videos ?? [],
    related: parts.related ?? [{ href: "/cars", label: "영화 속 차량" }],
    footnotes: parts.footnotes ?? [{ n: 1, text: "출처는 이 카드 하단입니다." }],
  };
}

export const cars: IconCar[] = [
  {
    slug: "eclipse-rs",
    nameKo: "1995 미쓰비시 이클립스 RS",
    nameEn: "1995 Mitsubishi Eclipse RS",
    brand: "Mitsubishi",
    brandKo: "미쓰비시",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "브라이언이 모임에 가져오는 개조 이클립스. 트란 일행이 부숩니다.",
    hasL2: true,
    posterTone: tone.green,
  },
  {
    slug: "rx7-fd",
    nameKo: "1993 마쓰다 RX-7",
    nameEn: "1993 Mazda RX-7",
    brand: "Mazda",
    brandKo: "마쓰다",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "돔이 첫 레이스에 타고 오는 RX-7. IMCDb는 FD로 분류합니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "supra-mk4",
    nameKo: "1994 토요타 수프라 Mk IV",
    nameEn: "1994 Toyota Supra Mk.IV",
    brand: "Toyota",
    brandKo: "토요타",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "브라이언이 차고에 들이는 MK4. 결말의 열쇠는 돔에게 넘어갑니다.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "charger-rt-1970",
    nameKo: "1970 닷지 차저 R/T",
    nameEn: "1970 Dodge Charger R/T",
    brand: "Dodge",
    brandKo: "닷지",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "돔 아버지의 차. 제시를 쏜 트란을 쫓다 트럭에 받힙니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "jetta-mk3",
    nameKo: "MK3 폭스바겐 제타",
    nameEn: "MK3 Volkswagen Jetta",
    brand: "Volkswagen",
    brandKo: "폭스바겐",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "제시 아버지의 차. 레이스 워즈에서 핑크 슬립을 잃습니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "s2000-tran",
    nameKo: "혼다 S2000",
    nameEn: "Honda S2000",
    brand: "Honda",
    brandKo: "혼다",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "자니 트란이 제타와 드래그할 때 모는 차. 연식은 줄거리에 없습니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "skyline-r34",
    nameKo: "1999 닛산 스카이라인 GT-R R34",
    nameEn: "1999 Nissan Skyline GT-R R34",
    brand: "Nissan",
    brandKo: "닛산",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "마이애미에서 브라이언이 테지의 레이스에 가지고 나오는 차.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "evo-7",
    nameKo: "2002 미쓰비시 랜서 에볼루션 VII",
    nameEn: "2002 Mitsubishi Lancer Evolution VII",
    brand: "Mitsubishi",
    brandKo: "미쓰비시",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "베론 일을 위해 브라이언이 받는 차. GPS가 붙어 있습니다.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "eclipse-spyder",
    nameKo: "2003 미쓰비시 이클립스 GTS 스파이더",
    nameEn: "2003 Mitsubishi Eclipse GTS Spyder",
    brand: "Mitsubishi",
    brandKo: "미쓰비시",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "로먼 피어스의 오픈카. 위키백과 출연 소개가 차종을 적습니다.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "s2000-suki",
    nameKo: "2001 혼다 S2000 AP1",
    nameEn: "2001 Honda S2000 AP1",
    brand: "Honda",
    brandKo: "혼다",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "수키의 핫핑크 S2000. 데번 아오키가 촬영 중 운전을 배웠습니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "yenko-camaro",
    nameKo: "1969 셰보레 옌코 카마로 SYC",
    nameEn: "1969 Chevrolet Yenko Camaro SYC",
    brand: "Chevrolet",
    brandKo: "셰보레",
    era: "1960s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "핑크 슬립으로 얻은 머슬카. 브라이언이 요트 갑판으로 몰고 들어갑니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "challenger-rt",
    nameKo: "1970 닷지 챌린저 R/T",
    nameEn: "1970 Dodge Challenger R/T",
    brand: "Dodge",
    brandKo: "닷지",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "2-fast-2-furious",
    filmTitleKo: "패스트 & 퓨리어스 2",
    oneLiner: "옌코와 함께 핑크 슬립 레이스에서 넘어온 차. 단독 운전자는 줄거리가 가르지 않습니다.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "monte-carlo",
    nameKo: "1971 셰보레 몬테카를로",
    nameEn: "1971 Chevrolet Monte Carlo",
    brand: "Chevrolet",
    brandKo: "셰보레",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "애리조나 오프닝에서 션이 몰다 부수는 차.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "viper-srt10",
    nameKo: "2003 닷지 바이퍼 SRT-10",
    nameEn: "2003 Dodge Viper SRT-10",
    brand: "Dodge",
    brandKo: "닷지",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "동창 클레이의 차. 파이프에 처박힙니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "silvia-s15",
    nameKo: "닛산 실비아 S15",
    nameEn: "Nissan Silvia S15",
    brand: "Nissan",
    brandKo: "닛산",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "한이 션에게 빌려 준 차. 첫 드리프트에서 크게 부서집니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "fairlady-z",
    nameKo: "닛산 페어레이디 Z (350Z)",
    nameEn: "Nissan Fairlady Z (Z33)",
    brand: "Nissan",
    brandKo: "닛산",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "드리프트 킹 타카시의 차. 문서가 350Z와 Z33을 같이 적습니다.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "evo-8",
    nameKo: "2003 미쓰비시 랜서 에볼루션 VIII",
    nameEn: "2003 Mitsubishi Lancer Evolution VIII",
    brand: "Mitsubishi",
    brandKo: "미쓰비시",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "션이 드리프트를 연습하는 에보. 추격 끝에 닐라와 함께 부서집니다.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "rx7-veilside",
    nameKo: "1994 마쓰다 RX-7 베일사이드 포춘",
    nameEn: "1994 Mazda RX-7 VeilSide Fortune",
    brand: "Mazda",
    brandKo: "마쓰다",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "한의 오렌지·블랙 RX-7. 2005 도쿄 오토살롱용으로 만들어졌습니다.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "mustang-1967",
    nameKo: "1967 포드 머스탱 패스트백",
    nameEn: "1967 Ford Mustang Fastback",
    brand: "Ford",
    brandKo: "포드",
    era: "1960s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "아버지가 찾은 차를 드리프트용으로 고친 결말의 머스탱.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "road-runner",
    nameKo: "1970 플리머스 로드 러너",
    nameEn: "1970 Plymouth Road Runner",
    brand: "Plymouth",
    brandKo: "플리머스",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "tokyo-drift",
    filmTitleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    oneLiner: "결말에서 돔이 타고 와 션에게 레이스를 거는 차. SEMA용으로 만들어졌습니다.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "ford-gt40",
    nameKo: "포드 GT40",
    nameEn: "Ford GT40",
    brand: "Ford",
    brandKo: "포드",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "fast-five",
    filmTitleKo: "분노의 질주: 언리미티드",
    oneLiner: "리우 열차에서 레예스 쪽이 노리는 차. 촬영은 복제를 썼습니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "charger-2010",
    nameKo: "2010 닷지 차저",
    nameEn: "2010 Dodge Charger",
    brand: "Dodge",
    brandKo: "닷지",
    era: "2010s",
    badges: ["추격"],
    filmSlug: "fast-five",
    filmTitleKo: "분노의 질주: 언리미티드",
    oneLiner: "경찰서로 위장해 훔친 차저. 금고를 끌고 가는 두 대입니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "gurkha",
    nameKo: "구르카 LAPV",
    nameEn: "Gurkha LAPV",
    brand: "Terradyne",
    brandKo: "테라다인",
    era: "2010s",
    badges: ["추격"],
    filmSlug: "fast-five",
    filmTitleKo: "분노의 질주: 언리미티드",
    oneLiner: "홉스가 돔 일행을 호송할 때 타는 장갑 차량.",
    hasL2: true,
    posterTone: tone.green,
  },
  {
    slug: "flip-car",
    nameKo: "플립 카",
    nameEn: "Flip Car",
    brand: "custom",
    brandKo: "맞춤",
    era: "2010s",
    badges: ["추격"],
    filmSlug: "fast-and-furious-6",
    filmTitleKo: "분노의 질주: 더 맥시멈",
    oneLiner: "오언 쇼의 낮은 포뮬러형 차. 앞에 램프가 있어 상대 차를 띄웁니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "lykan-hypersport",
    nameKo: "W 모터스 라이칸 하이퍼스포츠",
    nameEn: "W Motors Lykan HyperSport",
    brand: "W Motors",
    brandKo: "W 모터스",
    era: "2010s",
    badges: ["추격"],
    filmSlug: "furious-7",
    filmTitleKo: "분노의 질주: 더 세븐",
    oneLiner: "아부다비 에티하드 타워. 갓스 아이 칩이 이 차에 숨겨져 있습니다.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "koenigsegg-ccxr",
    nameKo: "코닉세그 CCXR 에디션",
    nameEn: "Koenigsegg CCXR Edition",
    brand: "Koenigsegg",
    brandKo: "코닉세그",
    era: "2000s",
    badges: ["파트너"],
    filmSlug: "fast-five",
    filmTitleKo: "분노의 질주: 언리미티드",
    oneLiner: "엔딩에서 테지와 로먼이 한 대씩 샀다고 줄거리가 적습니다.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "gtr-r35",
    nameKo: "2012 닛산 GT-R R35",
    nameEn: "2012 Nissan GT-R (R35)",
    brand: "Nissan",
    brandKo: "닛산",
    era: "2010s",
    badges: ["추격"],
    filmSlug: "furious-7",
    filmTitleKo: "분노의 질주: 더 세븐",
    oneLiner: "IMCDb가 인물 차량으로 올린 R35. 토론은 브라이언이 몬다고 적습니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "civic-heist",
    nameKo: "혼다 시빅",
    nameEn: "Honda Civic",
    brand: "Honda",
    brandKo: "혼다",
    era: "2000s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "항구 습격의 개조 시빅 세 대. 세대와 연식은 줄거리에 없습니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "chevelle-ss-1970",
    nameKo: "1970 셰보레 셰벨 SS",
    nameEn: "1970 Chevrolet Chevelle SS",
    brand: "Chevrolet",
    brandKo: "셰보레",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "the-fast-and-the-furious",
    filmTitleKo: "분노의 질주",
    oneLiner: "크레딧 뒤, 돔이 바하 캘리포니아에서 모는 차.",
    hasL2: true,
    posterTone: tone.gold,
  },
  {
    slug: "fairlane-1956",
    nameKo: "1956 포드 페어레인 크라운 빅토리아",
    nameEn: "1956 Ford Fairlane Crown Victoria",
    brand: "Ford",
    brandKo: "포드",
    era: "1950s",
    badges: ["추격"],
    filmSlug: "fate-of-the-furious",
    filmTitleKo: "분노의 질주: 더 익스트림",
    oneLiner: "아바나에서 랄도의 차. 페르난도의 플리트라인과 맞붙습니다.",
    hasL2: true,
    posterTone: tone.blue,
  },
  {
    slug: "impala-1961",
    nameKo: "1961 셰보레 임팔라",
    nameEn: "1961 Chevrolet Impala",
    brand: "Chevrolet",
    brandKo: "셰보레",
    era: "1960s",
    badges: ["추격"],
    filmSlug: "fate-of-the-furious",
    filmTitleKo: "분노의 질주: 더 익스트림",
    oneLiner: "돔이 아바나 레이스의 내기로 건 차. 이긴 뒤 페르난도에게 넘깁니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "gtx-1971",
    nameKo: "1971 플리머스 GTX",
    nameEn: "1971 Plymouth GTX",
    brand: "Plymouth",
    brandKo: "플리머스",
    era: "1970s",
    badges: ["추격"],
    filmSlug: "fate-of-the-furious",
    filmTitleKo: "분노의 질주: 더 익스트림",
    oneLiner: "뉴욕에서 돔이 핵 풋볼을 가지러 갈 때 몬 차.",
    hasL2: true,
    posterTone: tone.orange,
  },
  {
    slug: "charger-1967",
    nameKo: "1967 닷지 차저",
    nameEn: "1967 Dodge Charger",
    brand: "Dodge",
    brandKo: "닷지",
    era: "1960s",
    badges: ["추격"],
    filmSlug: "f9",
    filmTitleKo: "분노의 질주: 더 얼티메이트",
    oneLiner: "출소 후 돔이 야코프의 머스탱과 달릴 때 몬 차. 1970 R/T와 다릅니다.",
    hasL2: true,
    posterTone: tone.silver,
  },
  {
    slug: "mustang-foxbody-1992",
    nameKo: "1992 포드 머스탱 폭스바디",
    nameEn: "1992 Ford Mustang Foxbody",
    brand: "Ford",
    brandKo: "포드",
    era: "1990s",
    badges: ["추격"],
    filmSlug: "f9",
    filmTitleKo: "분노의 질주: 더 얼티메이트",
    oneLiner: "야코프의 차. 돔의 1967 차저와의 레이스에서 집니다.",
    hasL2: true,
    posterTone: tone.red,
  },
  {
    slug: "gallardo",
    nameKo: "람보르기니 가야르도",
    nameEn: "Lamborghini Gallardo",
    brand: "Lamborghini",
    brandKo: "람보르기니",
    era: "2000s",
    filmSlug: "fast-x",
    filmTitleKo: "분노의 질주: 라이드 오어 다이",
    oneLiner: "제작 단락이 출연 차량으로 적은 이름. 연식, 운전자, 장면은 없습니다.",
    hasL2: true,
    posterTone: tone.gold,
    badges: ["출연"],
  },
];

for (const car of cars) {
  const photo = carPhotos[car.slug];
  if (photo) car.image = photo;
}

export function getCar(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export const carDetails: Record<string, CarL2> = {
  "eclipse-rs": detail("eclipse-rs", {
    overview: [
      "2001년 작품 위키백과는 브라이언이 개조한 1995 Mitsubishi Eclipse RS를 차 모임에 가져온다고 적습니다. 신용이 없어 차를 걸고 돔과 달립니다.",
      "고장이 나 돔이 이기고, 경찰이 오자 브라이언이 돔을 태워 달아납니다. 트란과 랜스의 구역에서 이클립스는 파괴됩니다.",
    ],
    onScreen: ["돔은 아직 10초 차를 빚졌다고 말합니다. 그 빚이 결말의 수프라로 이어집니다."],
    timeline: [{ year: "2001", text: "다저 스타디움 주차장이 이클립스 시험 주행의 촬영지라고 제작 단락이 적습니다." }],
    production: ["IMCDb 항목 제목도 1995 Mitsubishi Eclipse RS 2G [D31A]입니다. 마력 수치는 그 페이지의 확정 사양으로 올리지 않습니다."],
    sources: [WIKI_2001, imcdb("v008540.html", "1995 Mitsubishi Eclipse RS")],
    related: [
      { href: "/films/the-fast-and-the-furious", label: "분노의 질주" },
      { href: "/crew/brian-oconner", label: "브라이언 오코너" },
    ],
    footnotes: [{ n: 1, text: "차종과 파괴는 2001년 작품 위키백과 줄거리입니다." }],
  }),
  "rx7-fd": detail("rx7-fd", {
    overview: [
      "같은 줄거리는 돔이 Mazda RX-7을 몰고 모임에 도착한다고 적습니다. 연식은 그 문단에 없습니다.",
      "IMCDb는 화면의 차를 1993 Mazda RX-7 [FD]로 올리고, 인물 또는 추격에 쓰인 차량으로 분류합니다.",
    ],
    onScreen: ["첫 레이스의 돔 쪽 차입니다. 결말의 추격은 아버지 차저로 넘어갑니다."],
    production: ["배기량과 로터 개수는 확인한 영화 문서에 없어 적지 않습니다."],
    sources: [WIKI_2001, imcdb("v002371.html", "1993 Mazda RX-7")],
    related: [
      { href: "/crew/dominic-toretto", label: "도미닉 토레토" },
      { href: "/cars/rx7-veilside", label: "한의 베일사이드 RX-7" },
    ],
  }),
  "supra-mk4": detail("supra-mk4", {
    overview: [
      "브라이언은 낡은 MK4 Toyota Supra를 돔의 차고에 들이고, 크루가 복원을 시작합니다. 결말에서 브라이언은 체포 대신 수프라 열쇠를 돔에게 넘기고, 돔이 그 차를 몰고 떠납니다.",
      "IMCDb는 그 차를 1994 Toyota Supra Mk.IV [JZA80]로 분류합니다. 2편 제작 단락은 마이클 일리의 금색 Toyota Supra Turbo Mk IV JZA80이 1편에서 워커가 쓰던 차라고 적습니다.",
    ],
    onScreen: ["1편의 결말 레이스는 브라이언의 수프라와 돔의 차저입니다. 무승부에 가깝게 끝나고 차저가 트럭에 받힙니다."],
    timeline: [
      { year: "2001", text: "복원된 수프라의 열쇠가 돔에게 갑니다." },
      { year: "2003", text: "같은 차가 2편의 슬랩 잭(마이클 일리) 차로 다시 쓰였다고 제작 단락이 적습니다." },
    ],
    production: ["마력과 터빈 부품 목록은 팬 댓글에만 있어 적지 않습니다."],
    sources: [WIKI_2001, WIKI_2F2F, imcdb("v002671.html", "1994 Toyota Supra Mk.IV")],
    related: [{ href: "/crew/brian-oconner", label: "브라이언" }, { href: "/crew/dominic-toretto", label: "돔" }],
    footnotes: [{ n: 1, text: "열쇠를 넘기는 결말은 2001년 작품 위키백과입니다." }],
  }),
  "charger-rt-1970": detail("charger-rt-1970", {
    overview: [
      "2001년 작품 줄거리는 돔이 아버지의 1970 Dodge Charger R/T에 올라 트란을 쫓는다고 적습니다. 랜스를 길 밖으로 밀어낸 뒤, 브라이언과 건널목에서 쿼터마일을 갑니다.",
      "레이스는 거의 무승부이고, 돔의 차저는 지나가는 트럭에 T본으로 받힙니다.",
    ],
    onScreen: ["IMCDb 항목 제목은 1970 Dodge Charger입니다. R/T라는 트림은 위키백과 줄거리가 적습니다."],
    production: ["블로어가 진짜인지, 스턴트 차의 연식이 다른지는 IMCDb 토론에 의견이 갈립니다. 그 토론을 사양으로 올리지 않습니다."],
    continuity: ["더 맥시멈에서 돔이 기체 앞을 뚫고 나오는 차는 ‘a Charger’라고만 적혀 있습니다. 이 1970 R/T와 같은 개체라고 적지 않습니다."],
    sources: [WIKI_2001, imcdb("v002077.html", "1970 Dodge Charger")],
    related: [{ href: "/films/the-fast-and-the-furious", label: "2001년 작품" }],
    footnotes: [{ n: 1, text: "R/T와 아버지 소유는 2001년 작품 위키백과 줄거리입니다." }],
  }),
  "jetta-mk3": detail("jetta-mk3", {
    overview: [
      "레이스 워즈에서 제시는 아버지 차인 MK3 Volkswagen Jetta를 걸고 트란의 Honda S2000와 드래그합니다. 지고 도망칩니다.",
    ],
    onScreen: ["연식과 엔진은 그 문단에 없습니다. MK3라는 세대 표기만 적습니다."],
    sources: [WIKI_2001],
    related: [{ href: "/villains/johnny-tran", label: "자니 트란" }],
  }),
  "s2000-tran": detail("s2000-tran", {
    overview: [
      "트란은 레이스 워즈에서 Honda S2000를 몰고 제시의 제타와 드래그합니다. 위키백과 줄거리는 연식을 적지 않습니다.",
    ],
    onScreen: ["2편의 분홍 S2000는 수키의 2001 AP1로 따로 확인됩니다. 이 문서와 합치지 않습니다."],
    production: ["개조 금액은 줄거리에 없습니다."],
    sources: [WIKI_2001],
    related: [{ href: "/cars/s2000-suki", label: "수키의 S2000" }],
  }),
  "skyline-r34": detail("skyline-r34", {
    overview: [
      "2편에서 브라이언은 1999 Nissan R34 Skyline GT-R로 생계형 스트리트 레이스를 합니다. 행사는 정비사 친구 테지 파커가 엽니다.",
      "출연 소개도 같은 차와, 임무용 2002 Lancer Evolution VII를 함께 적습니다.",
    ],
    onScreen: ["오프닝은 다른 세 명과 달리고, 열린 다리 점프가 있습니다. 수키가 그 레이스에 있습니다."],
    production: ["폴 워커는 기술 고문 크레이그 리버먼에게 빌린 R34를 오프닝에서 몰았다고 제작 단락이 적습니다."],
    videos: [{ id: "LiIdGRkz6G0", title: "The Fast Saga — Brian Races in the Nissan Skyline GT-R R34" }],
    sources: [WIKI_2F2F],
    related: [{ href: "/crew/brian-oconner", label: "브라이언" }, { href: "/films/2-fast-2-furious", label: "2편" }],
    footnotes: [{ n: 1, text: "차종과 리버먼의 차는 2편 위키백과입니다. 공식 채널 영상 제목은 그 클립을 가리킵니다." }],
  }),
  "evo-7": detail("evo-7", {
    overview: [
      "모니카가 브라이언과 로먼에게 주는 맞춤 차 중 브라이언 쪽이 2002 Mitsubishi Lancer Evolution VII입니다. 출연 소개가 그렇게 적습니다.",
    ],
    onScreen: ["두 미쓰비시에는 GPS가 붙어 있어 마크햄이 압류장을 찾아옵니다. 나중에 테지와 수키가 그 차들을 몰며 경찰을 끌어냅니다."],
    sources: [WIKI_2F2F],
    related: [{ href: "/cars/eclipse-spyder", label: "로먼의 이클립스 스파이더" }],
  }),
  "eclipse-spyder": detail("eclipse-spyder", {
    overview: [
      "위키백과는 로먼 피어스가 2003 Mitsubishi Eclipse GTS Spyder를 몬다고 출연 소개에 적습니다. 임무용으로도 이클립스 스파이더가 주어집니다.",
    ],
    onScreen: ["결말의 요트 충돌은 브라이언의 옌코입니다. 스파이더를 그 장면의 차로 적지 않습니다."],
    sources: [WIKI_2F2F],
    related: [{ href: "/crew/roman-pearce", label: "로먼 피어스" }],
  }),
  "s2000-suki": detail("s2000-suki", {
    overview: [
      "수키는 평소 핫핑크 커스텀 Honda S2000를 몬다고 출연 소개가 적습니다. 제작 단락은 데번 아오키가 분홍 2001 Honda S2000 AP1을 몰았다고 적습니다.",
    ],
    onScreen: ["이름이 있는 여성 레이서는 이 편에서 수키뿐입니다."],
    production: ["아오키는 촬영 전 면허가 없었고 현장에서 운전을 배웠습니다."],
    sources: [WIKI_2F2F],
    related: [{ href: "/women/suki", label: "수키" }],
  }),
  "yenko-camaro": detail("yenko-camaro", {
    overview: [
      "브라이언과 로먼은 베론의 테스트에서 진 두 사람에게서 1969 Chevrolet Yenko Camaro SYC와 1970 Dodge Challenger R/T를 핑크 슬립으로 가져옵니다.",
      "마리나에서 브라이언은 옌코를 램프 밖으로 몰아 베론의 요트 갑판에 처박습니다.",
    ],
    onScreen: ["GPS가 없는 머슬카로 경찰을 따돌리는 구간이 이 두 대입니다."],
    sources: [WIKI_2F2F],
    related: [{ href: "/cars/challenger-rt", label: "1970 챌린저 R/T" }],
    footnotes: [{ n: 1, text: "차종과 요트 장면은 2편 위키백과 줄거리입니다." }],
  }),
  "challenger-rt": detail("challenger-rt", {
    overview: [
      "1970 Dodge Challenger R/T는 옌코와 함께 핑크 슬립으로 넘어온 차입니다. 줄거리는 두 대를 ‘the muscle cars’로 묶고, 요트에 들어가는 차를 옌코로 특정합니다.",
    ],
    onScreen: ["챌린저의 단독 운전자를 한 사람으로 단정하지 않습니다."],
    sources: [WIKI_2F2F],
    related: [{ href: "/cars/yenko-camaro", label: "옌코 카마로" }],
  }),
  "monte-carlo": detail("monte-carlo", {
    overview: [
      "애리조나 오로 밸리에서 션은 1971 Chevy Monte Carlo로 동창 클레이와 달립니다. 서로 받아 클레이의 바이퍼는 파이프에 박히고, 션의 몬테카를로도 부서집니다.",
    ],
    onScreen: ["션은 상습범이라 도쿄의 해군 장교 아버지에게 보내집니다."],
    sources: [WIKI_TOKYO],
  }),
  "viper-srt10": detail("viper-srt10", {
    overview: ["클레이의 차는 2003 Dodge Viper SRT-10입니다. 가문의 돈으로 처벌은 피하고, 차는 파이프에 처박힙니다."],
    onScreen: ["션의 몬테카를로와 같은 오프닝 레이스입니다."],
    sources: [WIKI_TOKYO],
  }),
  "silvia-s15": detail("silvia-s15", {
    overview: [
      "은퇴한 드리프트 레이서 한 루가 닛산 실비아 S15를 빌려 주고, 션은 그 차로 타카시의 350Z와 달리다 크게 부숩니다. 빚을 갚으려고 한 밑에서 일합니다.",
      "제작 단락은 그 실비아가 RB26DETT로 바꿔 단 것처럼 보이지만, 실제 촬영 차는 원래 엔진이었다고 적습니다. 엔진은 부서진 S15에서 나와 머스탱에 쓰이는 설정입니다.",
    ],
    onScreen: ["결말 모임에서 션은 Nissan Silvia S15 Spec-R을 몰고 있습니다. 부서진 대출 차와 다른 차로 적습니다."],
    production: ["스왑이 화면의 설정이고 촬영 차는 원래 엔진이라는 구분을 유지합니다."],
    sources: [WIKI_TOKYO],
    related: [{ href: "/cars/mustang-1967", label: "1967 머스탱" }],
    footnotes: [{ n: 1, text: "엔진 스왑의 허와 실은 도쿄 드리프트 위키백과 제작 단락입니다." }],
  }),
  "fairlady-z": detail("fairlady-z", {
    overview: [
      "줄거리는 션이 타카시의 Nissan 350Z와 달린다고 적습니다. 차량 단락은 Nissan Fairlady Z (Z33)를 타카시(D.K.)의 차로 적습니다. 페어레이디 Z33은 350Z의 일본 이름입니다.",
    ],
    onScreen: ["연식은 그 두 문장이 갈라 적지 않습니다."],
    sources: [WIKI_TOKYO],
    related: [{ href: "/villains/takashi", label: "타카시" }],
  }),
  "evo-8": detail("evo-8", {
    overview: [
      "션은 2003 Mitsubishi Lancer Evolution VIII로 드리프트를 익히고, 타카시의 부하 모리모토를 이깁니다. 도주 중 션과 닐라의 에보가 부서집니다.",
    ],
    onScreen: ["한의 RX-7은 그 추격에서 따로 받힙니다."],
    sources: [WIKI_TOKYO],
    related: [{ href: "/crew/sean-boswell", label: "션 보스웰" }],
  }),
  "rx7-veilside": detail("rx7-veilside", {
    overview: [
      "한의 차는 1994 Mazda RX-7 Veilside입니다. 별칭은 Fortune. 추격 끝에 1992 Mercedes-Benz W140에 T본으로 받히고 폭발합니다. 한은 죽은 것처럼 보입니다.",
      "그 바디키트 차는 베일사이드가 2005 도쿄 오토살롱용으로 만들었고, 유니버설이 산 뒤 짙은 빨강에서 오렌지와 검으로 다시 칠했다고 제작 단락이 적습니다.",
    ],
    onScreen: ["나중에 그 W140의 운전자는 데커드 쇼로 밝혀집니다. 더 얼티메이트에서 한은 살아 있습니다."],
    production: ["오토살롱 출품과 재도색은 위키백과가 적은 제작 사실입니다. 키트 가격은 적지 않습니다."],
    sources: [WIKI_TOKYO],
    related: [
      { href: "/crew/han-lue", label: "한 루" },
      { href: "/issues/tokyo-order", label: "이슈 · 도쿄의 시점" },
    ],
    footnotes: [{ n: 1, text: "포춘과 재도색은 도쿄 드리프트 위키백과 제작 단락입니다." }],
  }),
  "mustang-1967": detail("mustang-1967", {
    overview: [
      "션과 한의 크루는 아버지가 찾아 낸 1967 Ford Mustang Fastback을 드리프트용으로 고칩니다. 부서진 S15의 엔진과 부품을 쓰는 설정입니다.",
      "산길에서 타카시가 추락하고, 션이 새 드리프트 킹이 됩니다.",
    ],
    onScreen: ["촬영 차의 실비아 엔진이 원래 엔진이었다는 점은 실비아 문서와 같습니다. 머스탱에 실제로 RB26이 들어갔다는 뜻은 아닙니다."],
    sources: [WIKI_TOKYO],
    related: [{ href: "/cars/silvia-s15", label: "실비아 S15" }],
  }),
  "road-runner": detail("road-runner", {
    overview: [
      "도미닉 토레토가 1970 Plymouth Road Runner를 몰고 와 션에게 레이스를 겁니다. 한은 패밀리였다고 말한 뒤 션이 받습니다.",
      "제작 단락은 이 차를 SEMA 쇼용으로 만든 고도로 맞춤된 1970 로드 러너라고 적습니다.",
    ],
    onScreen: ["IMCDb는 더 세븐에도 1970 Plymouth Road Runner를 인물 차량으로 올립니다. 도쿄 드리프트의 이 차와 같은 개체인지는 위키백과가 말하지 않습니다."],
    production: ["SEMA용이라는 문장까지만 제작 사실로 둡니다."],
    sources: [WIKI_TOKYO, imcdb("v782214.html", "1970 Plymouth Road Runner in Furious 7")],
    related: [{ href: "/crew/dominic-toretto", label: "도미닉 토레토" }],
    footnotes: [{ n: 1, text: "결말의 차종은 도쿄 드리프트 위키백과 줄거리와 제작 단락입니다." }],
  }),
  "ford-gt40": detail("ford-gt40", {
    overview: [
      "리우의 열차 습격에서 지지가 노리는 차는 Ford GT40입니다. 돔은 미아가 그 차를 직접 빼내게 합니다. 칩에 레예스 자금의 위치가 들어 있습니다.",
    ],
    onScreen: ["열차의 다른 차는 1972 데 토마소 판테라와 2007 셰보레 콜벳 GS 로드스터입니다. 상세 페이지는 두지 않고 그 밖의 차량에 둡니다."],
    production: [
      "제작진은 열차에서 뛰어내리는 차를 싸게 복제할 수 있는 기종으로 골랐습니다. 진짜 GT40를 약 200만 달러짜리로 바꾸지 않으려고입니다.",
    ],
    sources: [wiki("Fast_Five", "Fast Five")],
    related: [{ href: "/films/fast-five", label: "언리미티드" }],
    footnotes: [{ n: 1, text: "200만 달러는 언리미티드 위키백과가 적은 진품 가격의 이유입니다. 촬영 차의 가격은 아닙니다." }],
  }),
  "charger-2010": detail("charger-2010", {
    overview: [
      "가장 빠른 차가 감시 카메라에 느리자, 팀은 2010 Dodge Charger 경찰차 네 대를 훔쳐 섞여 듭니다. 그중 두 대가 금고를 건물에서 떼어 산후안 거리를 끕니다.",
      "닷지가 마케팅으로 차저를 공급했다고 제작 단락이 적습니다. 빈 디젤과 폴 워커가 탄 차저의 성능을 스턴트 팀이 먼저 시험했습니다.",
    ],
    onScreen: ["SRT-8 같은 하위 트림은 이 문단이 적지 않습니다. 2010 Dodge Charger로만 둡니다."],
    production: ["지붕 위 이중 운전 장치로 스턴트 드라이버가 몰고, 배우는 실내에 있었습니다."],
    sources: [wiki("Fast_Five", "Fast Five")],
    related: [{ href: "/gadgets/vault", label: "증거 금고" }],
  }),
  gurkha: detail("gurkha", {
    overview: [
      "홉스 팀이 돔, 미아, 브라이언, 빈스를 미국으로 넘기려 할 때 타는 차가 Gurkha LAPV입니다. 레예스 쪽이 호송을 칩니다.",
    ],
    onScreen: ["이후 팀은 이 LAPV로 경찰서에 들어갑니다. 제조사 카탈로그 제원은 영화 문서에 없어 적지 않습니다."],
    sources: [wiki("Fast_Five", "Fast Five")],
    related: [{ href: "/crew/luke-hobbs", label: "루크 홉스" }],
  }),
  "flip-car": detail("flip-car", {
    overview: [
      "런던에서 오언은 맞춤 차로 달아납니다. 제작 단락은 그 차를 Flip Car로 부릅니다.",
      "저스틴 린이 차량 디자이너에게, 마주 오는 차를 들이받아 공중으로 띄울 수 있는 차를 주문했습니다. 매카시 팀이 낮고 포뮬러에 가까운, 앞에 램프가 있는, 실제로 달리는 차를 만들었습니다. 운전자는 안전하게 남습니다.",
    ],
    onScreen: ["양산 모델명이 아닙니다. 베이스 차종을 지어내지 않습니다."],
    production: ["램프가 상대를 띄우고 운전자는 보호된다는 문장까지만 적습니다."],
    sources: [wiki("Fast_%26_Furious_6", "Fast & Furious 6")],
    related: [{ href: "/villains/owen-shaw", label: "오언 쇼" }],
    footnotes: [{ n: 1, text: "설계 설명은 더 맥시멈 위키백과 제작 단락입니다." }],
  }),
  "lykan-hypersport": detail("lykan-hypersport", {
    overview: [
      "더 세븐에서 팀은 아부다비 에티하드 타워로 갑니다. 억만장자 왕자가 가진 W Motors Lykan HyperSport 안에 갓스 아이 칩 플래시 드라이브가 있습니다.",
      "위키백과는 화면에서 부서지는 라이칸의 가치를 340만 달러로 적고, 실제로 부순 차는 일곱 대뿐인 양산 차가 아니라 영화를 위해 만든 더 싼 차라고 구분합니다.",
    ],
    onScreen: ["IMCDb 항목 제목은 2013 W Motors Lykan Hypersport Replica입니다."],
    production: ["340만 달러는 양산 차 가치로 적힌 숫자이고, 파괴된 촬영 차의 가격은 아니라고 각주가 구분합니다."],
    sources: [WIKI_F7, imcdb("v754169.html", "Lykan Hypersport Replica")],
    related: [
      { href: "/gadgets/gods-eye", label: "갓스 아이" },
      { href: "/films/furious-7", label: "더 세븐" },
    ],
    footnotes: [{ n: 1, text: "타워, 칩, 340만 달러와 복제 차 구분은 더 세븐 위키백과입니다." }],
  }),
  "koenigsegg-ccxr": detail("koenigsegg-ccxr", {
    overview: [
      "언리미티드 엔딩에서 테지와 로먼은 각자 Koenigsegg CCXR Edition을 샀다고 줄거리가 적습니다. 한과 지젤은 아우토반, 브라이언과 돔은 해변 레이스입니다.",
    ],
    onScreen: ["누가 어떤 색을 몰았는지, 출력은 그 문단에 없습니다."],
    sources: [wiki("Fast_Five", "Fast Five")],
    related: [{ href: "/crew/tej-parker", label: "테지" }, { href: "/crew/roman-pearce", label: "로먼" }],
  }),
  "gtr-r35": detail("gtr-r35", {
    overview: [
      "IMCDb는 더 세븐의 인물 차량으로 2012 Nissan GT-R [R35]를 올립니다. 항목 토론에는 브라이언이 몬다는 말이 있습니다.",
      "더 세븐 위키백과 줄거리는 이 차의 이름을 적지 않습니다. 연식 논쟁(2012인지, 그릴이 다른 전기형인지)도 토론에 남아 있어, 제목은 IMCDb 항목을 따르고 트림은 적지 않습니다.",
    ],
    onScreen: ["라이칸·차저처럼 줄거리가 이름을 주는 차와 출처의 무게를 나눕니다."],
    production: ["마력과 제로백은 적지 않습니다."],
    sources: [imcdb("v754173.html", "2012 Nissan GT-R R35"), WIKI_F7],
    related: [{ href: "/films/furious-7", label: "더 세븐" }],
    footnotes: [{ n: 1, text: "차종은 IMCDb 항목입니다. 운전자는 그 페이지 토론의 문장입니다." }],
  }),
  "civic-heist": detail("civic-heist", {
    overview: [
      "2001년 작품은 로스앤젤레스 항구에서 습격 팀이 크게 개조한 혼다 시빅 세 대로 전자제품 트레일러를 빼앗고, 터미널 아일랜드 프리웨이로 빠지는 장면으로 시작합니다.",
      "세대, 연식, 색, 운전자 이름은 그 문장에 없습니다. 세 대를 한 사람의 차로 적지 않습니다.",
    ],
    onScreen: [
      "개조는 ‘heavily modified’라는 표현만 확인됩니다. 부품 목록, 출력, 배기량은 적지 않습니다.",
    ],
    timeline: [
      {
        year: "오프닝",
        text: "습격 팀이 시빅 세 대로 세미트레일러의 전자제품을 가져갑니다.",
      },
      {
        year: "이후",
        text: "헥터는 해리의 차고에서 시빅용 퍼포먼스 부품을 사려 합니다. 브라이언은 습격에 쓰인 시빅을 헥터의 차고에서 찾다 돔과 빈스에게 들킵니다. 헥터가 오프닝의 운전대를 잡았다는 뜻은 아닙니다.",
      },
    ],
    continuity: [
      "2편의 수키 S2000, 트란의 S2000과 다른 차입니다. 시빅이라는 이름만 같습니다.",
    ],
    sources: [WIKI_2001],
    related: [
      { href: "/films/the-fast-and-the-furious", label: "분노의 질주" },
      { href: "/cars/s2000-tran", label: "트란의 S2000" },
    ],
    footnotes: [
      { n: 1, text: "시빅 세 대와 이후 헥터의 부품 이야기는 2001년 작품 위키백과 줄거리입니다." },
    ],
  }),
  "chevelle-ss-1970": detail("chevelle-ss-1970", {
    overview: [
      "크레딧이 끝난 뒤, 돔은 멕시코 바하 캘리포니아를 1970 Chevrolet Chevelle SS로 달립니다.",
    ],
    onScreen: [
      "색, 개조, 그 차가 어디서 왔는지는 그 한 문장에 없습니다.",
    ],
    timeline: [
      { year: "크레딧 후", text: "돔이 바하 캘리포니아에서 1970 셰벨 SS를 몹니다." },
    ],
    continuity: [
      "같은 편의 1970 Dodge Charger R/T는 아버지의 차이고, 트럭에 받힙니다. 셰벨과 다른 차입니다.",
    ],
    sources: [WIKI_2001],
    related: [
      { href: "/films/the-fast-and-the-furious", label: "분노의 질주" },
      { href: "/cars/charger-rt-1970", label: "1970 차저 R/T" },
      { href: "/crew/dominic-toretto", label: "도미닉 토레토" },
    ],
    footnotes: [{ n: 1, text: "바하 캘리포니아와 차종은 2001년 작품 위키백과의 크레딧 후 장면입니다." }],
  }),
  "fairlane-1956": detail("fairlane-1956", {
    overview: [
      "아바나에서 돔의 사촌 페르난도가 레이서 랄도에게 빚을 집니다. 돔은 레이스를 걸고, 맞붙는 차는 페르난도의 1949 Chevrolet Fleetline과 랄도의 1956 Ford Fairlane Crown Victoria입니다.",
    ],
    onScreen: [
      "페어레인은 랄도의 차로 적혀 있습니다. 핸들을 랄도가 직접 잡았는지는 그 문장이 나누지 않아 운전자 이름으로 올리지 않습니다.",
      "1949 플리트라인은 이 레이스의 반대편 차입니다. 별도 상세는 두지 않습니다.",
    ],
    timeline: [
      { year: "아바나", text: "페르난도의 1949 플리트라인과 랄도의 1956 페어레인이 레이스를 합니다. 돔은 자신의 1961 임팔라를 내기로 겁니다." },
    ],
    continuity: [
      "도쿄 드리프트의 1967 머스탱, F9의 1992 폭스바디와 다른 포드입니다.",
    ],
    sources: [WIKI_FATE],
    related: [
      { href: "/films/fate-of-the-furious", label: "더 익스트림" },
      { href: "/cars/impala-1961", label: "1961 임팔라" },
    ],
    footnotes: [{ n: 1, text: "차종과 레이스 구도는 더 익스트림 위키백과 줄거리입니다." }],
  }),
  "impala-1961": detail("impala-1961", {
    overview: [
      "아바나 레이스에서 돔이 내기로 건 차는 자신의 1961 Chevrolet Impala입니다. 레이스에 나온 두 대는 페르난도의 1949 플리트라인과 랄도의 1956 페어레인입니다.",
      "아슬하게 이긴 뒤, 돔은 페르난도가 임팔라를 갖게 둡니다.",
    ],
    onScreen: [
      "임팔라가 레이스 자체의 주행 차였다는 문장은 없습니다. 내기 차로만 적습니다.",
    ],
    timeline: [
      { year: "아바나", text: "돔이 1961 임팔라를 겁니다. 이긴 뒤 페르난도에게 넘깁니다." },
    ],
    continuity: [
      "라이드 오어 다이 제작 단락의 Chevrolet Impala는 연식과 장면이 없어, 이 1961년 차와 같은 개체로 보지 않습니다.",
    ],
    sources: [WIKI_FATE],
    related: [
      { href: "/films/fate-of-the-furious", label: "더 익스트림" },
      { href: "/cars/fairlane-1956", label: "1956 페어레인" },
      { href: "/crew/dominic-toretto", label: "도미닉 토레토" },
    ],
    footnotes: [{ n: 1, text: "내기와 양도는 더 익스트림 위키백과 줄거리입니다." }],
  }),
  "gtx-1971": detail("gtx-1971", {
    overview: [
      "사이퍼는 엘레나 네베스와 돔의 아들을 인질로 잡고, 돔을 뉴욕으로 보냅니다. 목표는 러시아 국방장관이 가진 핵 풋볼이고, 그때 돔이 몬 차는 1971 Plymouth GTX입니다.",
    ],
    onScreen: [
      "색과 개조, 출력은 그 문장에 없습니다.",
    ],
    timeline: [
      { year: "뉴욕", text: "돔이 1971 GTX로 핵 풋볼을 가지러 갑니다." },
    ],
    continuity: [
      "같은 편 후반에 사이퍼가 적외선 유도 미사일을 쏘는 대상은 ‘돔의 차저’라고만 적혀 있습니다. 1971 GTX와 같은 차로 적지 않습니다. 도쿄 드리프트의 1970 로드 러너와도 다릅니다.",
    ],
    sources: [WIKI_FATE],
    related: [
      { href: "/films/fate-of-the-furious", label: "더 익스트림" },
      { href: "/villains/cipher", label: "사이퍼" },
      { href: "/crew/dominic-toretto", label: "도미닉 토레토" },
    ],
    footnotes: [{ n: 1, text: "뉴욕, 핵 풋볼, 1971 GTX는 더 익스트림 위키백과 줄거리입니다." }],
  }),
  "charger-1967": detail("charger-1967", {
    overview: [
      "1989년, 아버지 잭 토레토가 쇼트 트랙 사고 이후 죽습니다. 돔은 켄니 린더를 때린 죄로 잡혀 들어갔다가 나옵니다. 출소 후 동생 야코프에게 레이스를 겁니다.",
      "그때 돔의 차는 1967 Dodge Charger이고, 야코프의 차는 1992 Ford Mustang Foxbody입니다. 야코프가 지고, 돔은 그를 로스앤젤레스에서 떠나게 합니다.",
    ],
    onScreen: [
      "레이스의 해는 ‘출소 후’로만 적혀 있습니다. 1989년이라고 단정하지 않습니다.",
    ],
    timeline: [
      { year: "1989", text: "잭이 레이스 중 죽고, 일주일 뒤 돔이 체포됩니다." },
      { year: "출소 후", text: "돔의 1967 차저가 야코프의 1992 머스탱과 달립니다. 야코프가 집니다." },
    ],
    continuity: [
      "2001년의 1970 Dodge Charger R/T, 언리미티드의 2010 차저, 더 익스트림 후반의 ‘돔의 차저’와 연식이 다릅니다. 하나로 합치지 않습니다.",
    ],
    sources: [WIKI_F9],
    related: [
      { href: "/films/f9", label: "더 얼티메이트" },
      { href: "/cars/mustang-foxbody-1992", label: "1992 머스탱 폭스바디" },
      { href: "/villains/jakob-toretto", label: "야코프 토레토" },
    ],
    footnotes: [{ n: 1, text: "1967 차저와 1992 머스탱의 대결은 F9 위키백과 줄거리입니다." }],
  }),
  "mustang-foxbody-1992": detail("mustang-foxbody-1992", {
    overview: [
      "출소한 돔이 야코프에게 건 레이스에서, 야코프의 차는 1992 Ford Mustang Foxbody입니다. 야코프가 집니다.",
    ],
    onScreen: [
      "폭스바디라는 이름은 줄거리에 있습니다. 색, 트림, 개조는 없습니다.",
    ],
    timeline: [
      { year: "출소 후", text: "야코프의 1992 머스탱이 돔의 1967 차저에게 집니다. 야코프는 로스앤젤레스를 떠납니다." },
    ],
    continuity: [
      "도쿄 드리프트의 1967 머스탱 패스트백, 더 익스트림의 1956 페어레인과 다른 포드입니다.",
    ],
    sources: [WIKI_F9],
    related: [
      { href: "/films/f9", label: "더 얼티메이트" },
      { href: "/cars/charger-1967", label: "1967 차저" },
      { href: "/cars/mustang-1967", label: "1967 머스탱 패스트백" },
    ],
    footnotes: [{ n: 1, text: "차종과 패배는 F9 위키백과 줄거리입니다." }],
  }),
  gallardo: detail("gallardo", {
    overview: [
      "Fast X 위키백과 제작 단락은 이 영화에 나온 외국 차 가운데 Lamborghini Gallardo를 적습니다. 알파 로메오 159, 2000 GTV, 닛산 실비아, 포르쉐 911 997 GT3 RS, 파가니 후에이라 트리콜로레, 닷선 240Z와 한 목록입니다.",
    ],
    onScreen: [
      "누가 탔는지, 어느 도시인지, 연식과 색은 그 목록에 없습니다. 장면을 꾸며 적지 않습니다. 목록의 2000년대 칸은 화면에서 읽은 연식이 아닙니다.",
    ],
    production: [
      "같은 단락은 전기차와 여러 닷지 차저, 베일사이드 RX-7도 따로 적습니다. 가야르도는 ‘other vehicles which featured’ 목록의 이름입니다.",
    ],
    continuity: [
      "미션 임파서블 아카이브의 가야르도는 다른 영화의 차입니다. 같은 브랜드라는 이유로만 잇습니다.",
    ],
    sources: [WIKI_X],
    related: [{ href: "/films/fast-x", label: "라이드 오어 다이" }],
    footnotes: [{ n: 1, text: "출연 목록은 Fast X 위키백과 제작 단락입니다. 운전자는 확인하지 못했습니다." }],
  }),
};
