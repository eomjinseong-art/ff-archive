import type { Footnote, GossipItem, QuoteItem, Source } from "./types";
import {
  WIKI_2001,
  WIKI_2009,
  WIKI_2F2F,
  WIKI_FIVE,
  WIKI_HOBBS,
  WIKI_SERIES,
  WIKI_SIX,
  WIKI_TOKYO,
  wiki,
} from "./sources";
import { FF_CAR_CTA_LABEL } from "@/lib/site";

export type CastChip = {
  slug?: string;
  kind?: "crew" | "woman" | "villain";
  nameKo: string;
  nameEn: string;
  role: string;
  note?: string;
};

export type GadgetL1 = {
  density: "thin" | "thick" | "solid";
  title: string;
  body: string;
  gadgetSlugs: string[];
};

export type CarL1 = {
  title: string;
  body: string;
  carSlugs: string[];
  ctaLabel: string;
  ctaPath: string;
  footnoteN?: number;
  gossipTeasers?: GossipItem[];
};

export type FilmDetail = {
  slug: string;
  runtime: string;
  director: string;
  usRelease: string;
  oneLiner: string;
  spoilerWarning: string;
  plot: string[];
  cast: CastChip[];
  cars?: CarL1;
  gadgets: GadgetL1;
  quotes: QuoteItem[];
  trailerYoutubeId: string;
  issuesTeaser?: string;
  sources: Source[];
  footnotes: Footnote[];
  related: { href: string; label: string }[];
};

const warning =
  "아래 줄거리는 결말을 포함합니다. 첫 시청 전이라면 한 줄 소개만 보고 넘어가도 됩니다.";

const WIKI_F7 = wiki("Furious_7", "Furious 7");
const WIKI_FATE = wiki("The_Fate_of_the_Furious", "The Fate of the Furious");
const WIKI_F9 = wiki("F9_(film)", "F9 (film)");
const WIKI_X = wiki("Fast_X", "Fast X");

function cars(title: string, body: string, carSlugs: string[], footnoteN = 3): CarL1 {
  return {
    title,
    body,
    carSlugs,
    ctaLabel: FF_CAR_CTA_LABEL,
    ctaPath: "/",
    footnoteN,
  };
}

const thinGear = (body: string): GadgetL1 => ({
  density: "thin",
  title: "별도 장비 문서는 두지 않습니다",
  body,
  gadgetSlugs: [],
});

export const filmDetails: Record<string, FilmDetail> = {
  "the-fast-and-the-furious": {
    slug: "the-fast-and-the-furious",
    runtime: "107분",
    director: "롭 코헨 (Rob Cohen)",
    usRelease: "2001년 6월 22일",
    oneLiner: "로스앤젤레스 지하 레이스에 잠입한 브라이언이 돔의 크루와 겹칩니다.",
    spoilerWarning: warning,
    plot: [
      "로스앤젤레스 항구에서 습격 팀은 크게 개조한 혼다 시빅 세 대로 전자제품 트레일러를 빼앗고 터미널 아일랜드 프리웨이로 빠집니다. 브라이언 오코너는 그 습격을 쫓아 스트리트 레이스에 들어갑니다. 대상은 도미닉 토레토와 그의 크루입니다. 레티 오티즈와 동생 미아 토레토가 그 안에 있습니다.",
      "제시는 조니 트란과 랜스의 오토바이에 죽습니다. 기종명은 위키백과 줄거리에 없습니다. 돔은 아버지의 1970 Dodge Charger를 몰다 트럭에 받히고, 브라이언은 수프라 열쇠를 넘깁니다. 크레딧 뒤, 돔은 멕시코 바하 캘리포니아에서 1970 Chevrolet Chevelle SS를 몹니다.",
      "촬영은 2000년 7월부터 10월까지 로스앤젤레스입니다. 다저 스타디움, 앤젤리노 하이츠, 실버 레이크, 에코 파크, 리틀 사이공, 그리고 레이스 워즈의 샌버너디노 공항이 문서에 있습니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리", note: "빈 디젤." },
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "잠입", note: "폴 워커." },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리", note: "미셸 로드리게스." },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리", note: "조더나 브루스터." },
      { slug: "johnny-tran", kind: "villain", nameKo: "조니 트란", nameEn: "Johnny Tran", role: "적대", note: "릭 윤." },
    ],
    cars: cars(
      "시빅, 이클립스, 셰벨, 차저",
      "오프닝의 개조 시빅 세 대, 브라이언의 1995 Eclipse RS, 돔의 RX-7, 1994 Supra, 돔 아버지의 1970 Charger R/T, 제타, 트란의 S2000, 크레딧 뒤의 1970 Chevelle SS를 상세로 올립니다. 시빅의 세대는 적지 않습니다. 오토바이 기종도 적지 않습니다.",
      ["civic-heist", "eclipse-rs", "rx7-fd", "supra-mk4", "charger-rt-1970", "jetta-mk3", "s2000-tran", "chevelle-ss-1970"],
    ),
    gadgets: thinGear("이 편의 확인된 장치는 차량입니다. 2편의 니트로스 사출 좌석은 여기 넣지 않습니다."),
    quotes: [],
    trailerYoutubeId: "",
    issuesTeaser: "제목은 1954년 로저 코먼 영화에서 라이선스했습니다.",
    sources: [WIKI_2001, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 107분, 미국 개봉 2001년 6월 22일, 예산 3,800만 달러, 흥행 2억 1,260만 달러는 위키백과 정보 상자입니다." },
      { n: 2, text: "니트로스 병 묘사는 확인한 줄거리에 없어 장비로 올리지 않습니다." },
      { n: 3, text: "차종은 2001년 작품 위키백과와 IMCDb 항목입니다. 상세 페이지에 출처가 있습니다." },
    ],
    related: [
      { href: "/origin", label: "원작 · Racer X" },
      { href: "/issues/title-license", label: "이슈 · 제목" },
    ],
  },
  "2-fast-2-furious": {
    slug: "2-fast-2-furious",
    runtime: "107분",
    director: "존 싱글턴 (John Singleton)",
    usRelease: "2003년 6월 6일",
    oneLiner: "마이애미. 본편 가운데 빈 디젤의 돔이 없는 유일한 편입니다.",
    spoilerWarning: warning,
    plot: [
      "브라이언은 마이애미에서 카터 베론의 돈을 옮기는 일에 들어갑니다. 파트너는 어릴 적 친구 로먼 피어스이고, 테지 파커가 레이스를 엽니다.",
      "브라이언은 테지의 레이스에서 1999 Nissan Skyline GT-R R34를 몰고, 임무 차로는 랜서 에볼루션 VII를 받습니다. 로먼은 2003 Eclipse GTS Spyder를 탑니다.",
      "위키백과 정보 상자의 흥행은 2억 3,600만 달러, 예산은 7,600만 달러입니다. 미국 개봉은 2003년 6월 6일입니다.",
    ],
    cast: [
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "잠입", note: "폴 워커." },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리", note: "타이리스 깁슨." },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술", note: "크리스 브리지스." },
      { slug: "suki", kind: "woman", nameKo: "수키", nameEn: "Suki", role: "레이서", note: "데번 아오키." },
      { slug: "carter-verone", kind: "villain", nameKo: "카터 베론", nameEn: "Carter Verone", role: "적대", note: "콜 하우저." },
    ],
    cars: cars(
      "스카이라인, 에보, 옌코",
      "R34, 에볼루션 VII, 로먼의 이클립스 스파이더, 수키의 S2000, 브라이언이 요트에 올린 1969 Yenko Camaro를 올립니다. 같은 장면에서 함께 구한 챌린저는 운전자를 특정하지 않습니다. 1편의 MK4 수프라는 제작 단락이 슬랩 잭의 차로 다시 썼다고 적어, 그 문서도 이 편에 붙입니다.",
      ["skyline-r34", "evo-7", "eclipse-spyder", "s2000-suki", "yenko-camaro", "challenger-rt", "supra-mk4"],
    ),
    gadgets: {
      density: "thick",
      title: "니트로스 사출 좌석",
      body: "로먼이 결말에서 니트로스로 즉석 사출 좌석을 씁니다. 2001년 작품의 니트로스 병으로 확장하지 않습니다.",
      gadgetSlugs: ["nitrous"],
    },
    quotes: [],
    trailerYoutubeId: "LiIdGRkz6G0",
    sources: [WIKI_2F2F, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간·개봉일·예산·흥행은 2편 위키백과 정보 상자입니다. 돔이 없는 본편이라는 말은 시리즈 문서의 그 편 소개입니다." },
      { n: 2, text: "사출 좌석은 2편 위키백과 줄거리의 로먼 장면입니다." },
      { n: 3, text: "차종은 2편 위키백과와 IMCDb입니다." },
    ],
    related: [{ href: "/cars/skyline-r34", label: "차량 · R34" }],
  },
  "tokyo-drift": {
    slug: "tokyo-drift",
    runtime: "104분",
    director: "저스틴 린 (Justin Lin)",
    usRelease: "2006년 6월 16일",
    oneLiner: "개봉은 세 번째, 이야기 시점은 더 맥시멈과 더 세븐 사이입니다.",
    spoilerWarning: warning,
    plot: [
      "션 보스웰이 도쿄에서 드리프트를 배웁니다. 한 루가 가르치고, 상대는 DK로 불리는 타카시입니다. 감독은 저스틴 린이고, 미국 개봉은 2006년 6월 16일입니다. 시사회는 6월 4일입니다.",
      "위키백과는 이야기 시점을 더 맥시멈과 더 세븐 사이로 적습니다. 한이 여기서 죽기 때문에, 뒤에 개봉한 작품이 그 앞의 시간을 보여 줍니다.",
      "제작 단락은 차량 약 250대, 파괴 80대 이상을 적습니다. 흥행은 1억 5,900만 달러, 예산은 8,500만 달러입니다.",
    ],
    cast: [
      { slug: "sean-boswell", kind: "crew", nameKo: "션 보스웰", nameEn: "Sean Boswell", role: "드리프트", note: "루카스 블랙." },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리", note: "성강. 《베터 럭 투모로우》가 기원이라고 문서가 적지만, 그 영화는 본편 목록에 넣지 않습니다." },
      { slug: "takashi", kind: "villain", nameKo: "타카시", nameEn: "Takashi", role: "적대", note: "브라이언 티. DK." },
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "카메오", note: "결말의 로드러너." },
    ],
    cars: cars(
      "몬테카를로에서 로드러너까지",
      "션의 1971 Monte Carlo와 2003 Evo VIII, 클레이의 Viper, 한의 실비아와 베일사이드 RX-7, 타카시의 350Z, 내리막의 1967 Mustang, 돔의 1970 Road Runner를 올립니다.",
      ["monte-carlo", "viper-srt10", "silvia-s15", "fairlady-z", "evo-8", "rx7-veilside", "mustang-1967", "road-runner"],
    ),
    gadgets: thinGear("이 편의 문서는 차량과 드리프트입니다. 별도의 장비 항목은 두지 않습니다."),
    quotes: [],
    trailerYoutubeId: "",
    issuesTeaser: "개봉 순서와 이야기 순서가 다릅니다. 한의 죽음이 그 어긋남의 축입니다.",
    sources: [WIKI_TOKYO, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 104분, 개봉일, 예산, 흥행, 차량 대수는 도쿄 드리프트 위키백과입니다. 시점 설명은 시리즈 문서입니다." },
      { n: 2, text: "장비 칸을 비운 이유는 확인한 문서에 별도 장치 이름이 없기 때문입니다." },
      { n: 3, text: "차종은 도쿄 드리프트 위키백과와 IMCDb입니다." },
    ],
    related: [
      { href: "/issues/tokyo-order", label: "이슈 · 순서" },
      { href: "/lin-era", label: "린의 다섯 편" },
    ],
  },
  "fast-and-furious": {
    slug: "fast-and-furious",
    runtime: "107분",
    director: "저스틴 린 (Justin Lin)",
    usRelease: "2009년 4월 3일",
    oneLiner: "레티의 죽음 이후, 돔과 FBI 브라이언이 브라가를 쫓습니다. 시점은 도쿄 드리프트 앞입니다.",
    spoilerWarning: warning,
    plot: [
      "위키백과 도입은 이 편을 2001년과 2편의 속편이자, 도쿄 드리프트보다 앞선 이야기로 적습니다. 돔과 FBI 요원 브라이언이 레티의 죽음을 갚고 마약왕 아르투로 브라가를 잡기 위해 다시 만납니다.",
      "출연은 빈 디젤, 폴 워커, 미셸 로드리게스, 조더나 브루스터입니다. 한은 짧게 돌아옵니다. 단편 《Los Bandoleros》가 2001년과 이 편 사이를 잇는다고 제작 단락이 적습니다.",
      "상영 시간은 107분, 미국 개봉은 2009년 4월 3일, 예산은 8,500만 달러, 흥행은 3억 6,000만 달러입니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리", note: "빈 디젤." },
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "FBI", note: "폴 워커." },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리", note: "미셸 로드리게스. 줄거리는 그의 죽음에서 시작합니다." },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리", note: "성강. 짧은 등장." },
      { slug: "arturo-braga", kind: "villain", nameKo: "아르투로 브라가", nameEn: "Arturo Braga", role: "적대", note: "존 오티즈." },
    ],
    cars: cars(
      "스카이라인, 셰벨, 토리노, 스바루, 차저",
      "브라이언이 압류장에서 고른 2002 Skyline GT-R R34, 돔의 1970 Chevelle SS, 페닉스의 초록 1972 Torino Sport, 이후 압류장에서 꺼낸 2008 Impreza WRX STI 해치백, 멕시코로 가는 재건된 1970 Charger R/T를 상세로 올립니다. 셰벨은 1편 크레딧 차와 같은 문서입니다. 2편의 1999 R34와는 다른 차입니다.",
      [
        "skyline-r34-2002",
        "chevelle-ss-1970",
        "torino-sport-1972",
        "subaru-sti-2008",
        "charger-rt-rebuilt",
      ],
      2,
    ),
    gadgets: thinGear("확인한 도입과 제작 단락에 별도 장비 이름이 없습니다. 차종은 위 차량 칸에 줄거리와 제작 단락이 적은 것만 올립니다."),
    quotes: [],
    trailerYoutubeId: "",
    sources: [WIKI_2009, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "줄거리 한 줄, 상영 시간, 개봉일, 예산, 흥행은 2009년 작품 위키백과 도입과 정보 상자입니다." },
      { n: 2, text: "다섯 차의 이름과 역할은 2009년 작품 위키백과 줄거리입니다. 셰벨이 1편 크레딧 차라는 점, 화면의 차저가 1969년 차라는 점은 제작 단락입니다." },
    ],
    related: [
      { href: "/origin", label: "단편 · Los Bandoleros" },
      { href: "/lin-era", label: "린의 다섯 편" },
    ],
  },
  "fast-five": {
    slug: "fast-five",
    runtime: "130분",
    director: "저스틴 린 (Justin Lin)",
    usRelease: "2011년 4월 29일",
    oneLiner: "리우에서 레예스의 돈을 노리고, 시리즈가 습격 쪽으로 기웁니다.",
    spoilerWarning: warning,
    plot: [
      "돔 일행은 열차에서 압수 차량을 노리다 포드 GT40를 두고 헤르난 레예스 쪽과 부딪칩니다. 레예스는 남은 현금을 경찰서 증거 금고에 모읍니다.",
      "홉스의 Gurkha 호송이 습격당하고, 빈스가 죽습니다. 팀은 금고를 끌어내는 작전으로 갑니다. 엔딩에서 테지와 로먼이 Koenigsegg CCXR Edition을 한 대씩 샀다고 줄거리가 적습니다.",
      "이야기는 리우지만, 촬영의 상당 부분은 푸에르토리코 산후안과 애틀랜타입니다. 테오도로 모스코소 다리의 스턴트는 포기됐다고 제작 단락이 적습니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "패밀리" },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리" },
      { slug: "gisele-yashar", kind: "woman", nameKo: "지젤 야샤", nameEn: "Gisele Yashar", role: "패밀리" },
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "DSS" },
      { slug: "elena-neves", kind: "woman", nameKo: "엘레나 네베스", nameEn: "Elena Neves", role: "경찰" },
      { slug: "hernan-reyes", kind: "villain", nameKo: "에르난 레예스", nameEn: "Hernan Reyes", role: "적대", note: "조아킹 드 알메이다." },
    ],
    cars: cars(
      "GT40, 경찰 차저, 구르카, 코닉세그",
      "열차의 포드 GT40, 2010 Dodge Charger 경찰차, Gurkha LAPV, 엔딩의 Koenigsegg CCXR를 상세로 올립니다. 판테라와 콜벳은 복제 차라 기타 차량에 둡니다.",
      ["ford-gt40", "charger-2010", "gurkha", "koenigsegg-ccxr"],
    ),
    gadgets: {
      density: "solid",
      title: "증거 금고",
      body: "경찰서의 증거 금고를 차로 끌어냅니다. 크기와 촬영 장소는 장비 상세에 위키백과가 적은 숫자만 옮깁니다.",
      gadgetSlugs: ["vault"],
    },
    quotes: [],
    trailerYoutubeId: "",
    sources: [WIKI_FIVE, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 130분, 미국 개봉 2011년 4월 29일, 예산 1억 2,500만 달러는 정보 상자입니다. 도입의 흥행은 6억 3,000만 달러이고, 박스오피스 단락의 합계는 6억 2,610만 달러입니다." },
      { n: 2, text: "금고의 크기와 케이블은 언리미티드 위키백과 제작 단락입니다." },
      { n: 3, text: "GT40가 진품 약 200만 달러라 복제차를 썼다는 문장은 같은 제작 단락입니다." },
    ],
    related: [
      { href: "/gadgets/vault", label: "장비 · 금고" },
      { href: "/lin-era", label: "린의 다섯 편" },
    ],
  },
  "fast-and-furious-6": {
    slug: "fast-and-furious-6",
    runtime: "130분",
    director: "저스틴 린 (Justin Lin)",
    usRelease: "2013년 5월 24일",
    oneLiner: "런던. 오언 쇼와 나이트셰이드, 그리고 한의 죽음으로 이어지는 엔딩.",
    spoilerWarning: warning,
    plot: [
      "홉스가 사면을 대가로 오언 쇼를 잡자고 돔을 설득합니다. 오언은 전 SAS이고, 장치는 나이트셰이드입니다. 라일리 힉스가 홉스를 배신합니다.",
      "지젤은 안토노프 기내에서 한을 살리고 죽은 것처럼 보입니다. 테네리페에서 탱크가 약 250대의 차 위를 지나갑니다. 수송기 세트에서 닷지 차저를 기수 쪽으로 공압 대포로 쏘았다고 제작 단락이 적습니다.",
      "중간 크레딧에서 도쿄의 한이 들이받히고, 운전자가 레티의 십자가를 두고 “너는 나를 모르지만, 곧 알게 될 거다”라고 말합니다. 그 차가 1970 Charger R/T와 같은 차인지는 문서가 적지 않습니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "패밀리" },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리", note: "기억 없이 오언 쪽에 있습니다." },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리" },
      { slug: "gisele-yashar", kind: "woman", nameKo: "지젤 야샤", nameEn: "Gisele Yashar", role: "패밀리" },
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "DSS" },
      { slug: "elena-neves", kind: "woman", nameKo: "엘레나 네베스", nameEn: "Elena Neves", role: "협력" },
      { slug: "owen-shaw", kind: "villain", nameKo: "오언 쇼", nameEn: "Owen Shaw", role: "적대", note: "루크 에반스." },
      { slug: "deckard-shaw", kind: "crew", nameKo: "데커드 쇼", nameEn: "Deckard Shaw", role: "엔딩", note: "제이슨 스테이섬. 악당 칸에도 있습니다." },
    ],
    cars: cars(
      "기수에서 나온 차저",
      "오언 쪽의 맞춤 플립 카를 상세로 올립니다. 기수로 쏜 닷지 차저는 연식이 없어 1970 R/T와 합치지 않고, 그 밖의 차량에 둡니다.",
      ["flip-car"],
    ),
    gadgets: {
      density: "thick",
      title: "나이트셰이드",
      body: "오언 쇼가 노리는 EMP 장치입니다. 이름과 용도는 장비 상세에 위키백과가 적은 범위만 적습니다.",
      gadgetSlugs: ["nightshade"],
    },
    quotes: [
      {
        speaker: "데커드 쇼",
        textKo: "너는 나를 모르지만, 곧 알게 될 거다.",
        textEn: "You don't know me, but you're about to.",
        spoiler: true,
      },
    ],
    trailerYoutubeId: "",
    issuesTeaser: "중간 크레딧이 도쿄 드리프트의 한의 죽음과 만납니다.",
    sources: [WIKI_SIX, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 130분, 미국 개봉 2013년 5월 24일, 흥행 7억 8,870만 달러는 정보 상자입니다. 예산 칸은 1억 6,000만–2억 6,000만 달러로 폭이 있어 한 숫자로 적지 않습니다." },
      { n: 2, text: "나이트셰이드와 탱크, 안토노프 An-124, 공압 대포, 활주로 길이 지적은 더 맥시멈 위키백과 줄거리·제작입니다." },
      { n: 3, text: "플립 카는 양산차가 아닙니다. 젠슨 인터셉터와 데이토나 차저는 확인한 줄거리에 이름이 없어 뺐습니다." },
    ],
    related: [
      { href: "/issues/tokyo-order", label: "이슈 · 순서" },
      { href: "/gadgets/nightshade", label: "장비 · 나이트셰이드" },
    ],
  },
  "furious-7": {
    slug: "furious-7",
    runtime: "137분",
    director: "제임스 완 (James Wan)",
    usRelease: "2015년 4월 3일",
    oneLiner: "데커드와 갓스 아이. 폴 워커의 마지막 브라이언입니다.",
    spoilerWarning: warning,
    plot: [
      "미스터 노바디가 팀을 모아 모세 자칸데가 갓스 아이를 갖는 것을 막고, 만든 사람 램지를 구하게 합니다. 데커드는 한을 죽인 뒤로 패밀리를 쫓습니다.",
      "팀은 아제르바이잔 코카서스 상공에서 차를 떨어뜨려 램지를 구합니다. 아부다비 에티하드 타워에서는 라이칸 하이퍼스포츠가 나옵니다. 자칸데는 데커드와 손을 잡고 갓스 아이를 얻습니다.",
      "로스앤젤레스에서 램지가 프로그램을 되돌리고, 홉스가 드론을 부숩니다. 돔은 닷지 차저를 자칸데의 헬리콥터에 충돌시키고, 홉스가 수류탄을 쏩니다. 브라이언의 마무리는 은퇴로 바뀝니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "brian-oconner", kind: "crew", nameKo: "브라이언 오코너", nameEn: "Brian O'Conner", role: "패밀리", note: "폴 워커. 마무리 방식은 이슈 글에 있습니다." },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리" },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "ramsey", kind: "woman", nameKo: "램지", nameEn: "Ramsey", role: "해커", note: "메건 램지. 내털리 이매뉴얼." },
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "DSS" },
      { slug: "deckard-shaw-antagonist", kind: "villain", nameKo: "데커드 쇼", nameEn: "Deckard Shaw", role: "적대", note: "패밀리 칸의 데커드와 같은 인물입니다." },
      { slug: "mose-jakande", kind: "villain", nameKo: "모세 자칸데", nameEn: "Mose Jakande", role: "적대", note: "지몬 운수." },
    ],
    cars: cars(
      "라이칸과 R35",
      "에티하드 타워의 라이칸 하이퍼스포츠와, IMCDb가 브라이언의 차로 적은 2012 GT-R R35를 올립니다. 헬리콥터에 충돌한 차저는 1970 R/T로 단정하지 않습니다.",
      ["lykan-hypersport", "gtr-r35"],
    ),
    gadgets: {
      density: "solid",
      title: "갓스 아이",
      body: "램지가 만든 감시 프로그램입니다. 칩이 아부다비의 라이칸에 숨겨져 있습니다.",
      gadgetSlugs: ["gods-eye"],
    },
    quotes: [],
    trailerYoutubeId: "",
    issuesTeaser: "폴 워커는 2013년 11월 촬영 중 사망했습니다. 브라이언의 결말은 은퇴로 다시 쓰였습니다.",
    sources: [WIKI_F7, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 137분, 미국 개봉 2015년 4월 3일, 흥행 15억 1,500만 달러는 정보 상자입니다. 예산 칸은 본문에 범위가 있다고 적혀 한 숫자로 적지 않습니다." },
      { n: 2, text: "차량 340대 사용, 230대 이상 파괴, 액션의 약 10%만 CGI라는 문장은 더 세븐 위키백과 제작 단락입니다." },
      { n: 3, text: "라이칸의 화면 가치 340만 달러와, 부서진 차가 양산 7대 중 하나가 아니라는 문장은 같은 문서입니다." },
    ],
    related: [
      { href: "/issues/walker", label: "이슈 · 폴 워커" },
      { href: "/gadgets/gods-eye", label: "장비 · 갓스 아이" },
    ],
  },
  "fate-of-the-furious": {
    slug: "fate-of-the-furious",
    runtime: "136분",
    director: "F. 게리 그레이 (F. Gary Gray)",
    usRelease: "2017년 4월 14일",
    oneLiner: "사이퍼가 돔을 팀의 반대로 돌립니다. 레티와 자리를 잡은 뒤의 이야기입니다.",
    spoilerWarning: warning,
    plot: [
      "돔과 레티는 아바나에서 신혼 여행 중입니다. 사촌 페르난도가 랄도에게 빚을 지자 돔이 레이스를 겁니다. 맞붙는 차는 페르난도의 1949 Chevrolet Fleetline과 랄도의 1956 Ford Fairlane Crown Victoria이고, 돔은 자신의 1961 Chevrolet Impala를 내기로 겁니다. 이긴 뒤 임팔라는 페르난도에게 넘깁니다. 사이버 테러리스트 사이퍼가 돔을 자기 쪽으로 끌어, 팀이 돔을 찾고 사이퍼를 막게 됩니다.",
      "홉스는 레티, 로먼, 테지, 램지와 베를린에서 장치를 확보하다 돔이 그것을 사이퍼에게 넘기는 것을 봅니다. 홉스는 데커드가 있는 교도소에 갇히고, 미스터 노바디가 둘을 빼 팀에 붙입니다.",
      "사이퍼는 엘레나 네베스와 돔의 아들을 인질로 잡아 돔을 붙듭니다. 뉴욕에서 돔은 1971 Plymouth GTX로 핵 풋볼을 가지러 갑니다. 팀은 기지를 공격당한 뒤 갓스 아이를 빼앗깁니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "ramsey", kind: "woman", nameKo: "램지", nameEn: "Ramsey", role: "해커" },
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "DSS" },
      { slug: "deckard-shaw", kind: "crew", nameKo: "데커드 쇼", nameEn: "Deckard Shaw", role: "협력" },
      { slug: "elena-neves", kind: "woman", nameKo: "엘레나 네베스", nameEn: "Elena Neves", role: "인질", note: "엘사 파타키." },
      { slug: "cipher", kind: "villain", nameKo: "사이퍼", nameEn: "Cipher", role: "적대", note: "샬리즈 테론." },
    ],
    cars: cars(
      "아바나 레이스와 1971 GTX",
      "아바나의 1956 Fairlane Crown Victoria, 내기로 걸린 1961 Impala, 뉴욕의 1971 Plymouth GTX를 상세로 올립니다. 1949 Fleetline은 페어레인 카드에만 적습니다. 출력은 적지 않습니다.",
      ["fairlane-1956", "impala-1961", "gtx-1971"],
    ),
    gadgets: {
      density: "thick",
      title: "갓스 아이",
      body: "팀이 기지에서 갓스 아이를 빼앗깁니다. 프로그램 자체는 더 세븐에서 나온 램지의 장치입니다.",
      gadgetSlugs: ["gods-eye"],
    },
    quotes: [],
    trailerYoutubeId: "kToFKqsCVLQ",
    sources: [WIKI_FATE, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 136분, 미국 개봉 2017년 4월 14일, 흥행 12억 3,600만 달러, 예산 2억 5,000만–2억 7,000만 달러는 정보 상자입니다." },
      { n: 2, text: "아바나, 베를린, 엘레나, 1971 GTX, 갓스 아이는 더 익스트림 위키백과 줄거리입니다." },
      { n: 3, text: "페어레인, 임팔라, 1971 GTX는 더 익스트림 위키백과 줄거리입니다. 제원은 그 문장 밖으로 적지 않습니다." },
    ],
    related: [{ href: "/villains/cipher", label: "악당 · 사이퍼" }],
  },
  "hobbs-and-shaw": {
    slug: "hobbs-and-shaw",
    runtime: "137분",
    director: "데이비드 리치 (David Leitch)",
    usRelease: "2019년 8월 2일",
    oneLiner: "스핀오프. 더 익스트림 이후, 홉스와 데커드가 브릭스턴을 막습니다.",
    spoilerWarning: warning,
    plot: [
      "위키백과는 이 편을 스핀오프이자 시리즈의 아홉 번째 작품으로 적고, 시점을 더 익스트림 이후로 둡니다. 본편 열 편에는 넣지 않습니다.",
      "루크 홉스와 데커드 쇼가 데커드의 동생 해티 쇼와 함께 브릭스턴 로어를 막습니다. 브릭스턴은 사이버 강화된 테러리스트이고, 치명적인 바이러스로 위협합니다.",
      "영어 위키백과 정보 상자의 상영 시간은 137분입니다. 한국어 위키백과는 136분으로 적습니다. 둘을 한 숫자로 합치지 않습니다. 미국 개봉은 2019년 8월 2일, 예산은 2억 달러, 흥행은 7억 6,000만 달러입니다.",
    ],
    cast: [
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "공동 주인공", note: "드웨인 존슨." },
      { slug: "deckard-shaw", kind: "crew", nameKo: "데커드 쇼", nameEn: "Deckard Shaw", role: "공동 주인공", note: "제이슨 스테이섬." },
      { slug: "hattie-shaw", kind: "woman", nameKo: "해티 쇼", nameEn: "Hattie Shaw", role: "협력", note: "버네사 커비. 한국어 위키는 헤티 쇼." },
      { slug: "brixton-lore", kind: "villain", nameKo: "브릭스턴 로어", nameEn: "Brixton Lore", role: "적대", note: "이드리스 엘바." },
    ],
    cars: cars(
      "런던의 맥라렌, 사모아의 피터빌트",
      "시각효과 단락이 런던 추격에 적은 맥라렌은 IMCDb 항목 제목을 따라 2017 720S로 올립니다. 사모아 시퀀스에서 같은 단락이 이름으로 적은 피터빌트는 영화용 차로 올립니다. 운전자는 그 단락이 적지 않습니다.",
      ["mclaren-720s", "peterbilt-samoa"],
    ),
    gadgets: thinGear("바이러스는 줄거리의 위협입니다. 별도의 장비 상세로 만들 만큼 제원을 확인하지 못했습니다."),
    quotes: [],
    trailerYoutubeId: "",
    sources: [WIKI_HOBBS, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "스핀오프, 시점, 137분, 개봉일, 예산, 흥행은 영어 위키백과입니다. 136분은 한국어 위키백과 정보 상자입니다." },
      { n: 2, text: "바이러스의 이름과 제원은 적지 않습니다." },
      { n: 3, text: "맥라렌과 피터빌트는 홉스&쇼 위키백과 시각효과 단락입니다. 2017 720S와 Made for Movie 표기는 IMCDb 항목 제목입니다." },
    ],
    related: [{ href: "/crew/luke-hobbs", label: "패밀리 · 홉스" }],
  },
  f9: {
    slug: "f9",
    runtime: "143분",
    director: "저스틴 린 (Justin Lin)",
    usRelease: "2021년 6월 25일",
    oneLiner: "돔의 동생 야코프와 프로젝트 아레스. 한이 살아 있습니다.",
    spoilerWarning: warning,
    plot: [
      "아버지 잭은 1989년 쇼트 트랙에서 죽습니다. 출소한 돔은 1967 Dodge Charger로 야코프의 1992 Ford Mustang Foxbody와 달립니다. 야코프가 지고 로스앤젤레스를 떠납니다. 본편의 돔과 팀은 그 동생과 자금책 오토가 프로젝트 아레스를 켜는 것을 막습니다. 사이퍼는 노바디의 비행기에서 납치됩니다. 드웨인 존슨은 이 편에 없습니다.",
      "레티와 미아는 도쿄에서 한 루가 살아 있음을 확인합니다. 로먼과 테지는 독일에서 로켓 차를 만들던 션, 트윙키, 얼을 찾습니다. 그 공백을 메우는 이야기는 문서가 설명하지 않아 적지 않습니다.",
      "영어 위키백과 상영 시간은 143분, 한국어 위키백과는 142분입니다. 미국 개봉은 2021년 6월 25일, 한국 개봉은 5월 19일입니다. 흥행은 7억 2,620만 달러입니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리" },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리" },
      { slug: "ramsey", kind: "woman", nameKo: "램지", nameEn: "Ramsey", role: "해커" },
      { slug: "sean-boswell", kind: "crew", nameKo: "션 보스웰", nameEn: "Sean Boswell", role: "독일", note: "루카스 블랙." },
      { slug: "jakob-toretto", kind: "villain", nameKo: "야코프 토레토", nameEn: "Jakob Toretto", role: "적대", note: "존 시나. 화해 이후는 패밀리 칸에 넣지 않습니다." },
      { slug: "cipher", kind: "villain", nameKo: "사이퍼", nameEn: "Cipher", role: "적대" },
    ],
    cars: cars(
      "1967 차저와 1992 머스탱",
      "회상 레이스의 1967 Dodge Charger와 1992 Ford Mustang Foxbody를 상세로 올립니다. 1970 Charger R/T와 같은 차가 아닙니다.",
      ["charger-1967", "mustang-foxbody-1992"],
    ),
    gadgets: thinGear("프로젝트 아레스는 줄거리의 무기 프로그램입니다. 제원을 확인하지 못해 장비 상세로 만들지 않습니다."),
    quotes: [],
    trailerYoutubeId: "x6m43M92HPI",
    sources: [WIKI_F9, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "143분·개봉일·흥행 7억 2,620만 달러·예산 2억–2억 2,500만 달러는 영어 정보 상자입니다. 142분은 한국어 위키백과입니다." },
      { n: 2, text: "존슨의 결석, 한의 생존, 독일의 션은 F9 위키백과 줄거리와 제작 단락입니다." },
      { n: 3, text: "1967 차저와 1992 머스탱은 같은 문서의 회상 레이스입니다. 레이스 연도를 1989년으로 적지 않습니다." },
    ],
    related: [
      { href: "/lin-era", label: "린의 다섯 편" },
      { href: "/villains/jakob-toretto", label: "악당 · 야코프" },
    ],
  },
  "fast-x": {
    slug: "fast-x",
    runtime: "141분",
    director: "루이 르테리에 (Louis Leterrier)",
    usRelease: "2023년 5월 19일",
    oneLiner: "단테 레예스가 아버지의 죽음과 잃은 재산의 복수를 시작합니다.",
    spoilerWarning: warning,
    plot: [
      "시점은 더 얼티메이트 이후입니다. 에이전시가 로마에서 칩을 훔치라고 하고, 돔과 레티는 아들 리틀 B와 남습니다. 로먼, 테지, 한, 램지가 로마로 갑니다. 다친 사이퍼가 단테를 알립니다.",
      "야코프가 미아와 리틀 B를 에이전시에게서 빼냅니다. 런던에서 팀은 데커드 쇼에게 도움을 청합니다. 지젤은 남극에서 잠수함으로 나타나 레티와 사이퍼를 구합니다. 더 맥시멈 이후 죽은 줄 알았던 인물입니다.",
      "중간 크레딧에서 루크 홉스가 단테의 전화를 받습니다. 단테는 아버지를 죽인 다음 표적이 홉스라고 말합니다. 상영 시간 141분, 미국 개봉 2023년 5월 19일, 흥행 7억 1,440만 달러입니다. 순제작비는 3억 7,880만 달러로 적혀 있습니다.",
    ],
    cast: [
      { slug: "dominic-toretto", kind: "crew", nameKo: "도미닉 토레토", nameEn: "Dominic Toretto", role: "패밀리" },
      { slug: "letty-ortiz", kind: "woman", nameKo: "레티 오티즈", nameEn: "Letty Ortiz", role: "패밀리" },
      { slug: "mia-toretto", kind: "woman", nameKo: "미아 토레토", nameEn: "Mia Toretto", role: "패밀리" },
      { slug: "roman-pearce", kind: "crew", nameKo: "로먼 피어스", nameEn: "Roman Pearce", role: "패밀리" },
      { slug: "tej-parker", kind: "crew", nameKo: "테지 파커", nameEn: "Tej Parker", role: "기술" },
      { slug: "han-lue", kind: "crew", nameKo: "한 루", nameEn: "Han Lue", role: "패밀리" },
      { slug: "ramsey", kind: "woman", nameKo: "램지", nameEn: "Ramsey", role: "해커" },
      { slug: "gisele-yashar", kind: "woman", nameKo: "지젤 야샤", nameEn: "Gisele Yashar", role: "엔딩" },
      { slug: "deckard-shaw", kind: "crew", nameKo: "데커드 쇼", nameEn: "Deckard Shaw", role: "협력" },
      { slug: "luke-hobbs", kind: "crew", nameKo: "루크 홉스", nameEn: "Luke Hobbs", role: "중간 크레딧" },
      { slug: "dante-reyes", kind: "villain", nameKo: "단테 레예스", nameEn: "Dante Reyes", role: "적대", note: "제이슨 모모아." },
      { slug: "jakob-toretto", kind: "villain", nameKo: "야코프 토레토", nameEn: "Jakob Toretto", role: "협력", note: "이 편에서는 미아 쪽에 섭니다. 패밀리 고정 명단에는 넣지 않습니다." },
      { slug: "cipher", kind: "villain", nameKo: "사이퍼", nameEn: "Cipher", role: "적대에서 이동" },
    ],
    cars: cars(
      "람보르기니 가야르도",
      "제작 단락이 출연 차량으로 적은 Lamborghini Gallardo만 상세로 올립니다. 운전자와 장면은 그 목록에 없습니다.",
      ["gallardo"],
    ),
    gadgets: thinGear("로마의 컴퓨터 칩은 줄거리의 목표입니다. 사양 문서가 없어 장비 상세로 만들지 않습니다."),
    quotes: [],
    trailerYoutubeId: "",
    sources: [WIKI_X, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "141분, 2023년 5월 19일 미국 개봉, 흥행 7억 1,440만 달러, 순제작비 3억 7,880만 달러는 Fast X 위키백과 정보 상자입니다." },
      { n: 2, text: "지젤의 생존과 홉스의 중간 크레딧은 같은 문서의 줄거리입니다." },
      { n: 3, text: "가야르도는 Fast X 위키백과 제작 단락의 출연 목록입니다. 같은 목록의 다른 차명은 상세로 올리지 않았습니다." },
    ],
    related: [{ href: "/villains/dante-reyes", label: "악당 · 단테" }],
  },
};
