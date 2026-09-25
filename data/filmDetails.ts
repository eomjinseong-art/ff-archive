import type { Footnote, GossipItem, QuoteItem, Source } from "./types";
import { BMW_FALLOUT, BMW_GHOST_PREMIERE, BMW_ROGUE, BMW_WELT_FALLOUT, WIKI_SERIES, WIKI_TV, wiki } from "./sources";
import { MI_CAR_CTA_LABEL } from "@/lib/site";

export type CastChip = {
  slug?: string;
  kind?: "agent" | "woman" | "villain";
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

const BRIEFING: QuoteItem = {
  speaker: "임무 테이프",
  textKo: "당신의 임무입니다. 수락하신다면.",
  textEn: "Your mission, should you choose to accept it.",
  spoiler: false,
};

const TAPE: QuoteItem = {
  speaker: "임무 테이프",
  textKo: "이 테이프는 5초 후에 자동으로 파괴됩니다.",
  textEn: "This tape will self-destruct in five seconds.",
  spoiler: false,
};

const warning =
  "아래 줄거리는 결말을 포함합니다. 첫 시청 전이라면 한 줄 소개와 예고편만 보고 넘어가도 됩니다.";

export const filmDetails: Record<string, FilmDetail> = {
  "mission-impossible": {
    slug: "mission-impossible",
    runtime: "110분",
    director: "브라이언 드 팔마 (Brian De Palma)",
    usRelease: "1996년 5월 22일",
    oneLiner: "프라하에서 팀이 죽고, 에단 헌트는 누명을 벗기 위해 랭글리로 갑니다.",
    spoilerWarning: warning,
    plot: [
      "IMF 팀이 프라하에서 NOC 명단을 확보하라는 임무를 받습니다. 작전이 무너지고, 헌트만 남습니다. 본부 요원 키트리지는 헌트를 배신자로 봅니다.",
      "헌트는 무기상 맥스에게 접근하고, 진짜 명단이 랭글리에 있음을 확인합니다. 천장에 매달린 채 온도에 반응하는 바닥 위로 침투합니다. 루터 스티켈이 이 구간의 컴퓨터 쪽에 있습니다.",
      "열차 위에서 진실이 열립니다. 짐 펠프스는 죽지 않았고, 클레어와 크리거가 그 계획에 연결되어 있습니다. 채널 터널의 헬리콥터가 결말의 추격입니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈. 극장판의 첫 헌트입니다." },
      { slug: "jim-phelps", kind: "agent", nameKo: "짐 펠프스", nameEn: "Jim Phelps", role: "팀장", note: "존 보이트. 텔레비전 팀장의 이름을 가져왔습니다. 악당 문서와 함께 보세요." },
      { slug: "claire-phelps", kind: "woman", nameKo: "클레어 펠프스", nameEn: "Claire Phelps", role: "팀", note: "에마뉘엘 베아르." },
      { slug: "jim-phelps", kind: "villain", nameKo: "프란츠 크리거", nameEn: "Franz Krieger", role: "용병", note: "장 레노. 펠프스·크리거 문서에 함께 있습니다." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { nameKo: "유진 키트리지", nameEn: "Eugene Kittridge", role: "IMF", note: "헨리 체르니. 데드 레코닝과 파이널 레코닝에서 같은 배우가 돌아옵니다." },
      { nameKo: "맥스", nameEn: "Max", role: "무기상", note: "버네사 레드그레이브. 파이널 레코닝 문서는 이 인물을 맥스 미트소폴리스로 부릅니다." },
    ],
    gadgets: {
      density: "thick",
      title: "테이프와 가면, 아직 차가 주인공은 아닙니다",
      body: "이 편의 장비는 자동 파괴 메시지와 위장입니다. 상징적인 자동차 추격은 없고, 결말의 이동은 열차와 헬리콥터입니다. 차량 칸을 부풀리지 않습니다.",
      gadgetSlugs: ["self-destruct", "latex-mask"],
    },
    quotes: [BRIEFING, TAPE],
    trailerYoutubeId: "L8Pbjh4EZRk",
    issuesTeaser: "텔레비전 펠프스를 배신자로 바꾼 선택이 이 편의 논쟁입니다.",
    sources: [wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)"), WIKI_TV, WIKI_SERIES],
    footnotes: [
      { n: 1, text: "위키백과 정보 상자의 상영 시간은 110분입니다. 파라마운트 영화 페이지는 111분으로 적습니다." },
      { n: 2, text: "대사 영어는 1966년 시리즈 위키백과가 적은 테이프 공식입니다. 극장판은 수신인과 매체를 바꿉니다. 한국어는 그 공식의 번역입니다." },
    ],
    related: [
      { href: "/origin", label: "원작 · 1966년 시리즈" },
      { href: "/issues/tv-phelps", label: "이슈 · 펠프스" },
      { href: "/villains/jim-phelps", label: "악당 · 펠프스와 크리거" },
    ],
  },
  "mission-impossible-2": {
    slug: "mission-impossible-2",
    runtime: "124분",
    director: "존 우 (John Woo)",
    usRelease: "2000년 5월 24일",
    oneLiner: "배신한 요원 숀 앰브로스가 키메라 바이러스를 내려 합니다.",
    spoilerWarning: warning,
    plot: [
      "헌트는 도둑 니아 노도프-홀을 작전에 끌어들입니다. 상대는 전 IMF 요원 숀 앰브로스입니다. 파라마운트 소개는 배경으로 오스트레일리아와 스페인을 적습니다.",
      "바이러스는 키메라이고, 치료제가 함께 있습니다. 니아는 앰브로스 쪽에 다시 들어갑니다. 헌트는 루터와 함께 감염과 유포를 막으려 합니다.",
      "결말은 오토바이 추격입니다. 존 우의 슬로모션과 비둘기가 이 편의 화면 문법으로 자주 언급됩니다. 그 문법을 숫자로 세지는 않습니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "nyah-nordoff-hall", kind: "woman", nameKo: "니아 노도프-홀", nameEn: "Nyah Nordoff-Hall", role: "도둑", note: "탠디 뉴턴." },
      { slug: "sean-ambrose", kind: "villain", nameKo: "숀 앰브로스", nameEn: "Sean Ambrose", role: "적대", note: "더그레이 스콧." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { nameKo: "미션 커맨더", nameEn: "Mission Commander", role: "IMF", note: "앤서니 홉킨스. 짧은 브리핑입니다." },
    ],
    cars: {
      title: "TT 로드스터와 트라이엄프 두 대",
      body: "IMCDb는 양산 전 아우디 TT 로드스터 8N과, 헌트의 스피드 트리플, 앰브로스의 데이토나 955i를 캐릭터 또는 추격으로 적습니다. A8과 두카티는 확인하지 못해 넣지 않습니다.",
      carSlugs: ["audi-tt", "triumph-speed-triple", "triumph-daytona"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
    },
    gadgets: {
      density: "thick",
      title: "가면",
      body: "앰브로스와 헌트가 서로의 얼굴을 빌리는 가면이 플롯의 장치입니다. 오토바이는 차량 칸에 있습니다.",
      gadgetSlugs: ["latex-mask"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "hSPtsCQq52k",
    sources: [wiki("Mission:_Impossible_2", "Mission: Impossible 2"), WIKI_SERIES],
    footnotes: [
      { n: 1, text: "상영 시간 124분과 미국 개봉 2000년 5월 24일은 위키백과 정보 상자입니다." },
      { n: 2, text: "오스트레일리아·스페인과 키메라는 파라마운트 예고 설명 및 시놉시스를 따릅니다." },
      { n: 3, text: "TT 8N, 스피드 트리플, 데이토나 955i의 역할은 각 차량 페이지의 IMCDb 항목입니다." },
    ],
    related: [
      { href: "/women/nyah-nordoff-hall", label: "여성 · 니아" },
      { href: "/cars/triumph-speed-triple", label: "차량 · 스피드 트리플" },
    ],
  },
  "mission-impossible-3": {
    slug: "mission-impossible-3",
    runtime: "126분",
    director: "J. J. 에이브럼스 (J. J. Abrams)",
    usRelease: "2006년 5월 5일",
    oneLiner: "무기상 오웬 데이비언이 토끼의 발과 줄리아를 동시에 노립니다.",
    spoilerWarning: warning,
    plot: [
      "헌트는 현장보다 교육에 가깝게 지내다 동료를 구하려 복귀합니다. 상대는 오웬 데이비언입니다. 그가 노리는 물건은 토끼의 발이고, 작품은 그 정체를 설명하지 않습니다.",
      "줄리아 미드와 결혼한 뒤, 데이비언은 그녀를 찾아내겠다고 협박합니다. 바티칸과 상하이, 체서피크 베이 브리지가 이 편의 장소 축입니다.",
      "벤지 던이 처음 나옵니다. 가면 제작 기계가 화면에 자세히 잡힙니다. 헌트는 데이비언의 얼굴로 거래를 가장합니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "julia-meade", kind: "woman", nameKo: "줄리아 미드", nameEn: "Julia Meade", role: "아내", note: "미셸 모나한." },
      { slug: "owen-davian", kind: "villain", nameKo: "오웬 데이비언", nameEn: "Owen Davian", role: "무기상", note: "필립 시모어 호프만." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "기술", note: "사이먼 페그. 첫 등장." },
      { nameKo: "시어도어 브래슬", nameEn: "Theodore Brassel", role: "IMF 국장", note: "로런스 피시번." },
    ],
    cars: {
      title: "2006년 람보르기니 가야르도",
      body: "IMCDb는 2006년 가야르도를 캐릭터 차량으로 적고, 타임코드를 약 00:44:16으로 둡니다. 엔진 없는 파괴용 껍질은 항목 댓글이므로 상세 페이지에서 미확인으로 분리합니다.",
      carSlugs: ["lamborghini-gallardo"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
    },
    gadgets: {
      density: "solid",
      title: "가면 제작이 절차로 보입니다",
      body: "사진을 넣어 얼굴을 뜨고, 음성 조각을 붙이는 과정이 이 편에서 가장 길게 보입니다. 자동 파괴 메시지도 형식을 유지합니다.",
      gadgetSlugs: ["latex-mask", "self-destruct"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "4oVva0muTE8",
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III")],
    footnotes: [
      { n: 1, text: "126분, 2006년 5월 5일 미국 개봉은 위키백과 정보 상자입니다." },
      { n: 2, text: "토끼의 발은 이름을 적되 정체를 만들지 않습니다." },
      { n: 3, text: "가야르도의 연식과 타임코드는 IMCDb v032093입니다." },
    ],
    related: [
      { href: "/gadgets/latex-mask", label: "가젯 · 가면" },
      { href: "/cars/lamborghini-gallardo", label: "차량 · 가야르도" },
    ],
  },
  "ghost-protocol": {
    slug: "ghost-protocol",
    runtime: "133분",
    director: "브래드 버드 (Brad Bird)",
    usRelease: "2011년 12월 16일 IMAX, 12월 21일 일반",
    oneLiner: "크렘린 폭파의 누명을 쓰고, IMF가 부인된 채 두바이로 갑니다.",
    spoilerWarning: warning,
    plot: [
      "IMF는 크렘린 폭파의 범인으로 지목되고, 대통령은 고스트 프로토콜을 발동합니다. 조직은 공식적으로 부인됩니다. 비서와 수행원이 습격으로 죽고, 헌트는 브랜트, 제인, 벤지와 남습니다.",
      "코발트, 곧 커트 헨드릭스는 러시아 발사 코드를 노립니다. 두바이 부르즈 할리파에서 이중 회의를 가장합니다. 위키백과는 크루즈가 케이블에 매인 채 외벽을 올랐고, 케이블은 후반에 지웠다고 적습니다.",
      "모래 폭풍 추격이 뒤를 잇습니다. 촬영지에는 부다페스트, 뭄바이, 모스크바, 두바이, 밴쿠버가 포함됩니다. 루터는 이 편에 없습니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "william-brandt", kind: "agent", nameKo: "윌리엄 브랜트", nameEn: "William Brandt", role: "분석", note: "제레미 레너." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "기술", note: "사이먼 페그." },
      { slug: "jane-carter", kind: "woman", nameKo: "제인 카터", nameEn: "Jane Carter", role: "IMF", note: "폴라 패튼." },
      { slug: "kurt-hendricks", kind: "villain", nameKo: "커트 헨드릭스", nameEn: "Kurt Hendricks", role: "코발트", note: "미카엘 뉘크비스트." },
    ],
    cars: {
      title: "비전 이피션트다이내믹스와 6시리즈",
      body: "BMW 미국 프리미어 보도자료는 비전 이피션트다이내믹스와 6시리즈 컨버터블을 헌트가 타고 주요 액션에 나온다고 적습니다. M5 E60, M3, 주인공급 3시리즈는 확인하지 못해 허브에 없습니다. 118i는 짧은 등장으로만 아래에 둡니다.",
      carSlugs: ["bmw-vision-efficientdynamics", "bmw-6-series"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
    },
    gadgets: {
      density: "solid",
      title: "붙는 장갑과 콘택트렌즈",
      body: "외벽용 장갑과 정보를 띄우는 콘택트렌즈가 이 편의 장비입니다. BMW 차량은 위 칸에 있습니다.",
      gadgetSlugs: ["gecko-gloves", "contact-lens"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "m31C9DofmSo",
    issuesTeaser: "부르즈 할리파 등반은 케이블을 지운 실제 촬영입니다.",
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol"),
      BMW_GHOST_PREMIERE,
    ],
    footnotes: [
      { n: 1, text: "133분. IMAX 2011년 12월 16일, 미국 일반 개봉 12월 21일은 위키백과 본문입니다." },
      { n: 2, text: "케이블 삭제와 촬영지 목록은 같은 문서의 제작 단락입니다." },
      { n: 3, text: "비전 이피션트다이내믹스와 6시리즈 컨버터블은 BMW 미국 프리미어 보도자료입니다." },
    ],
    related: [
      { href: "/records", label: "기록 · 부르즈 할리파" },
      { href: "/trips/dubai", label: "여행 · 두바이" },
      { href: "/cars/bmw-vision-efficientdynamics", label: "차량 · 비전 이피션트다이내믹스" },
    ],
  },
  "rogue-nation": {
    slug: "rogue-nation",
    runtime: "131분",
    director: "크리스토퍼 맥쿼리 (Christopher McQuarrie)",
    usRelease: "2015년 7월 31일",
    oneLiner: "해체 압박을 받는 IMF가 신디케이트와 솔로몬 레인을 쫓습니다.",
    spoilerWarning: warning,
    plot: [
      "CIA 국장 앨런 헌리는 IMF 해체를 밀어붙입니다. 헌트는 승인 없이 신디케이트를 쫓습니다. 일사 파우스트는 MI6 요원으로, 그 조직 안에 있습니다.",
      "오프닝은 이륙하는 에어버스 A400M 바깥에 헌트가 매달리는 장면입니다. 위키백과는 RAF 위터링에서 촬영했고, 크루즈가 대역 없이 5,000피트(1,500미터) 상공에 있었으며, 제한된 48시간 동안 이착륙을 8번 했다고 적습니다.",
      "빈 국립오페라 암살 시도와 모로코 촬영이 뒤를 잇습니다. 런던에서 마무리됩니다. 벤지, 브랜트, 루터가 함께합니다. 루터는 이 편에서 돌아옵니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "ilsa-faust", kind: "woman", nameKo: "일사 파우스트", nameEn: "Ilsa Faust", role: "MI6", note: "레베카 퍼거슨." },
      { slug: "solomon-lane", kind: "villain", nameKo: "솔로몬 레인", nameEn: "Solomon Lane", role: "신디케이트", note: "숀 해리스." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "IMF", note: "사이먼 페그." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { slug: "william-brandt", kind: "agent", nameKo: "윌리엄 브랜트", nameEn: "William Brandt", role: "IMF", note: "제레미 레너." },
      { nameKo: "앨런 헌리", nameEn: "Alan Hunley", role: "CIA", note: "알렉 볼드윈. 폴아웃에서는 IMF 쪽에 있습니다." },
    ],
    cars: {
      title: "5세대 M3와 S 1000 RR",
      body: "BMW 보도자료는 예고편의 정밀 주행에 5세대 M3가 쓰이고, 같은 예고편에 S 1000 RR이 나온다고 적습니다. E92가 아닙니다.",
      carSlugs: ["bmw-m3-f80", "bmw-s1000rr"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
    },
    gadgets: {
      density: "solid",
      title: "A400M과 가면",
      body: "A400M은 팀이 소유한 가젯이 아니라 촬영 스턴트입니다. BMW 차량은 위 칸에 있습니다.",
      gadgetSlugs: ["a400m", "latex-mask"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "gOW_azQbOjw",
    issuesTeaser: "맥쿼리가 연출을 이어 받는 첫 편입니다.",
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation"),
      BMW_ROGUE,
    ],
    footnotes: [
      { n: 1, text: "131분, 2015년 7월 31일 미국 개봉은 위키백과 정보 상자입니다. 시리즈 표의 월드와이드는 6억 8,272만 달러이고, 작품 문서는 다른 집계를 적기도 합니다." },
      { n: 2, text: "A400M의 고도와 이착륙 횟수는 위키백과 제작 단락입니다." },
      { n: 3, text: "5세대 M3와 S 1000 RR은 2015년 3월 24일 BMW 보도자료입니다." },
    ],
    related: [
      { href: "/mcquarrie-era", label: "맥쿼리 시대" },
      { href: "/records", label: "기록 · A400M" },
    ],
  },
  fallout: {
    slug: "fallout",
    runtime: "147분",
    director: "크리스토퍼 맥쿼리 (Christopher McQuarrie)",
    usRelease: "2018년 7월 27일",
    oneLiner: "플루토늄과 존 라크. 사도들이 레인을 다시 꺼냅니다.",
    spoilerWarning: warning,
    plot: [
      "로그네이션 이후, 사도들이 플루토늄 코어를 노립니다. CIA의 에리카 슬론은 어거스트 워커를 헌트 팀에 붙입니다. 파리 상공의 HALO 점프 뒤, 클럽에서 화이트 위도우와 거래가 열립니다.",
      "위키백과 제작 단락은 촬영 중 크루즈가 발목을 다쳐 일정이 밀리고 예산이 늘었다고 적습니다. 장소는 파리, 런던, 뉴질랜드, 노르웨이, 아랍에미리트입니다.",
      "스포일러. 워커가 존 라크입니다. 레인은 호송에서 빠지고, 카슈미르에서 두 개의 핵폭탄이 카운트됩니다. 줄리아가 의료팀에 있습니다. 헌트는 헬리콥터로 워커를 쫓습니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "august-walker", kind: "villain", nameKo: "어거스트 워커", nameEn: "August Walker", role: "CIA", note: "헨리 카빌." },
      { slug: "ilsa-faust", kind: "woman", nameKo: "일사 파우스트", nameEn: "Ilsa Faust", role: "MI6", note: "레베카 퍼거슨." },
      { slug: "white-widow", kind: "woman", nameKo: "화이트 위도우", nameEn: "Alanna Mitsopolis", role: "중개인", note: "바네사 커비." },
      { slug: "solomon-lane", kind: "villain", nameKo: "솔로몬 레인", nameEn: "Solomon Lane", role: "신디케이트", note: "숀 해리스." },
      { slug: "julia-meade", kind: "woman", nameKo: "줄리아 미드", nameEn: "Julia Meade", role: "의료", note: "미셸 모나한." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "IMF", note: "사이먼 페그." },
    ],
    cars: {
      title: "M5, 스크램블러, 1986년 5시리즈",
      body: "파트너십 보도자료는 신형 M5, 1986년 5시리즈 세단, R nineT 스크램블러를 적습니다. 벨트 글은 파리의 구형 세단을 M5 E28이라고 부르고, IMCDb 목록은 1986년 528i E28입니다. E34는 없습니다. 7시리즈는 그 밖의 차량에 둡니다.",
      carSlugs: ["bmw-m5-f90", "bmw-r-ninet", "bmw-5-series-e28"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
      gossipTeasers: [
        { label: "확인됨", text: "신형 M5의 441kW와 M xDrive는 BMW 파트너십 보도자료입니다." },
        { label: "확인됨", text: "파리 추격의 M5 E28과 528i E28은 서로 다른 자료의 표기입니다. 한쪽만 고르지 않습니다." },
      ],
    },
    gadgets: {
      density: "thin",
      title: "HALO와 가면",
      body: "이 편의 공중 스턴트는 HALO입니다. 헬리콥터 추격은 스턴트 기록으로 읽고, 도로 차량은 위 칸에 있습니다.",
      gadgetSlugs: ["halo", "latex-mask"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "wb49-oV0F78",
    issuesTeaser: "발목 부상으로 촬영이 멈춘 기록이 있습니다.",
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout"),
      BMW_FALLOUT,
      BMW_WELT_FALLOUT,
    ],
    footnotes: [
      { n: 1, text: "147분. 파리 시사회 2018년 7월 12일, 미국 개봉 7월 27일은 위키백과입니다." },
      { n: 2, text: "발목 부상과 촬영지, 줄거리의 존 라크 반전은 같은 문서입니다." },
      { n: 3, text: "신형 M5·1986년 5시리즈·스크램블러는 BMW 파트너십 보도자료입니다. M5 E28이라는 파리 문장은 BMW 벨트 글이고, 528i 표기는 IMCDb입니다." },
    ],
    related: [
      { href: "/records", label: "기록 · HALO와 발목" },
      { href: "/cars/bmw-m5-f90", label: "차량 · M5 F90" },
    ],
  },
  "dead-reckoning": {
    slug: "dead-reckoning",
    runtime: "163분",
    director: "크리스토퍼 맥쿼리 (Christopher McQuarrie)",
    usRelease: "2023년 7월 12일",
    oneLiner: "인공지능 엔티티와 두 개의 열쇠. 도둑 그레이스가 팀에 들어옵니다.",
    spoilerWarning: warning,
    plot: [
      "엔티티는 통제를 벗어난 인공지능으로 제시됩니다. 열쇠가 둘로 나뉘어 있고, 여러 세력이 그것을 쫓습니다. 그레이스는 도둑으로 그 추격에 말려듭니다. 키트리지가 1996년 이후 다시 나옵니다.",
      "로마의 도심 추격, 베네치아, 열차가 장소 축입니다. 위키백과는 오토바이 점프가 포함된 열차 장면을 노르웨이에서 찍었다고 적습니다. 촬영 중 영국에서 오토바이 스턴트 장치에 불이 났고, 다친 사람은 없었다고도 적습니다.",
      "스포일러. 베네치아에서 일사가 가브리엘에게 죽습니다. 파이널 레코닝 출연표가 레베카 퍼거슨을 이전 영상으로만 적는 것과 맞습니다. 열차는 절벽으로 떨어집니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "grace", kind: "woman", nameKo: "그레이스", nameEn: "Grace", role: "도둑", note: "헤일리 앳웰." },
      { slug: "gabriel", kind: "villain", nameKo: "가브리엘", nameEn: "Gabriel", role: "적대", note: "에사이 모랄레스." },
      { slug: "the-entity", kind: "villain", nameKo: "엔티티", nameEn: "The Entity", role: "인공지능", note: "얼굴이 없는 적대자." },
      { slug: "paris", kind: "woman", nameKo: "패리스", nameEn: "Paris", role: "암살", note: "폼 클레멘티에프." },
      { slug: "ilsa-faust", kind: "woman", nameKo: "일사 파우스트", nameEn: "Ilsa Faust", role: "MI6", note: "레베카 퍼거슨." },
      { slug: "white-widow", kind: "woman", nameKo: "화이트 위도우", nameEn: "Alanna Mitsopolis", role: "중개인", note: "바네사 커비." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "IMF", note: "사이먼 페그." },
    ],
    cars: {
      title: "촬영용 500과 두 대의 바이크",
      body: "IMCDb는 로마 추격의 피아트 500을 촬영용 커스텀으로, G 310 GS와 CRF 250을 각각 캐릭터 또는 추격으로 적습니다. 시판 500이나 CRF250L로 단정하지 않습니다.",
      carSlugs: ["fiat-500", "bmw-g310gs", "honda-crf250"],
      ctaLabel: MI_CAR_CTA_LABEL,
      ctaPath: "/",
      footnoteN: 3,
    },
    gadgets: {
      density: "thick",
      title: "열쇠와 가면",
      body: "십자가형 열쇠가 이 편의 맥거핀입니다. 가면은 여전하고, 바이크와 피아트는 차량 칸에 있습니다.",
      gadgetSlugs: ["entity-key", "latex-mask"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "avz06PDqDbM",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One")],
    footnotes: [
      { n: 1, text: "163분. 로마 시사회 2023년 6월 19일, 미국 개봉 7월 12일은 위키백과입니다." },
      { n: 2, text: "노르웨이 열차·오토바이와 옥스퍼드셔 화재는 제작 단락입니다. 그 단락은 기종명이 없습니다. 일사의 죽음은 줄거리 칸의 스포일러로만 적습니다." },
      { n: 3, text: "커스텀 500, G 310 GS, CRF 250의 표기는 각 IMCDb 항목입니다." },
    ],
    related: [
      { href: "/villains/the-entity", label: "악당 · 엔티티" },
      { href: "/trips/norway", label: "여행 · 노르웨이" },
      { href: "/cars/fiat-500", label: "차량 · 피아트 500" },
    ],
  },
  "final-reckoning": {
    slug: "final-reckoning",
    runtime: "170분",
    director: "크리스토퍼 맥쿼리 (Christopher McQuarrie)",
    usRelease: "2025년 5월 23일",
    oneLiner: "침몰한 세바스토폴에서 포드코바를 건지고, 엔티티를 드라이브에 가둡니다.",
    spoilerWarning: warning,
    plot: [
      "가브리엘은 헌트에게 잠수함 세바스토폴의 포드코바를 가져오라 합니다. 위키백과는 그것을 토끼의 발에서 발전한 모듈이라고 각주로 적습니다. 엔티티는 핵 통제를 넘봅니다.",
      "루터는 시한폭탄과 함께 남습니다. 위키백과 줄거리는 폭발을 줄이려 그가 희생한다고 적습니다. 헌트는 항공모함과 잠수함을 거쳐 실험 잠수복으로 난파선에 들어갑니다.",
      "베링 해의 세인트 매슈 섬에서 1996년의 윌리엄 돈로가 돌아옵니다. 브리그스는 짐 펠프스의 아들로 밝혀집니다. 결말은 두 대의 복엽기입니다. 제작 단락은 크루즈가 뒤집힌 기체 날개를 잡았고, 조종사는 그린스크린 슈트를 입었다고 전합니다.",
    ],
    cast: [
      { slug: "ethan-hunt", kind: "agent", nameKo: "에단 헌트", nameEn: "Ethan Hunt", role: "IMF", note: "톰 크루즈." },
      { slug: "grace", kind: "agent", nameKo: "그레이스", nameEn: "Grace", role: "팀", note: "헤일리 앳웰." },
      { slug: "gabriel", kind: "villain", nameKo: "가브리엘", nameEn: "Gabriel", role: "적대", note: "에사이 모랄레스." },
      { slug: "the-entity", kind: "villain", nameKo: "엔티티", nameEn: "The Entity", role: "인공지능", note: "핵 통제를 노립니다." },
      { slug: "paris", kind: "woman", nameKo: "패리스", nameEn: "Paris", role: "팀", note: "폼 클레멘티에프." },
      { slug: "luther-stickell", kind: "agent", nameKo: "루터 스티켈", nameEn: "Luther Stickell", role: "IMF", note: "빙 라메스." },
      { slug: "benji-dunn", kind: "agent", nameKo: "벤지 던", nameEn: "Benji Dunn", role: "IMF", note: "사이먼 페그." },
      { nameKo: "에리카 슬론", nameEn: "Erika Sloane", role: "대통령", note: "앤절라 배싯. 폴아웃의 CIA 국장이 이 편에서는 대통령입니다." },
      { nameKo: "윌리엄 돈로", nameEn: "William Donloe", role: "전 CIA", note: "롤프 색슨. 1996년 랭글리의 분석관이 돌아옵니다." },
    ],
    gadgets: {
      density: "thick",
      title: "잠수복과 복엽기",
      body: "팀이 쓰는 새 도로 차량보다, 실험 잠수복과 복엽기가 이 편의 장비입니다. 복엽기는 가젯 카드가 아니라 스턴트 기록으로 둡니다. 촬영기가 그린스크린 조종사를 지운다는 문장만 제작 단락에서 가져옵니다.",
      gadgetSlugs: ["self-destruct", "entity-key"],
    },
    quotes: [BRIEFING],
    trailerYoutubeId: "fsQgc9pCyDU",
    sources: [wiki("Mission:_Impossible_%E2%80%93_The_Final_Reckoning", "Mission: Impossible – The Final Reckoning"), WIKI_SERIES],
    footnotes: [
      { n: 1, text: "170분. 도쿄 시사회 2025년 5월 5일, 미국 개봉 5월 23일은 위키백과입니다. 시리즈 표의 월드와이드는 5억 9,877만 달러입니다." },
      { n: 2, text: "루터의 희생, 돈로, 브리그스, 복엽기 문장은 같은 문서의 줄거리·제작 단락입니다." },
    ],
    related: [
      { href: "/mcquarrie-era", label: "맥쿼리 시대" },
      { href: "/films/mission-impossible", label: "1996년으로 돌아가기" },
    ],
  },
};
