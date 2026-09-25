import type { Footnote, Source } from "./types";
import { wiki } from "./sources";

export type DirectorDetail = {
  slug: string;
  bio: string[];
  craft: string[];
  filmNotes: { slug: string; text: string }[];
  continuity: string[];
  related: { href: string; label: string }[];
  sources: Source[];
  footnotes: Footnote[];
};

export const directorDetails: Record<string, DirectorDetail> = {
  "brian-de-palma": {
    slug: "brian-de-palma",
    bio: [
      "1996년 첫 극장판의 감독입니다. 각본은 데이비드 코엡과 로버트 타운, 이야기는 코엡과 스티븐 제일리언이라고 위키백과 요약이 적습니다.",
      "텔레비전 팀 영화의 형식을, 누명과 침투가 있는 스릴러로 옮깁니다.",
    ],
    craft: ["랭글리 금고는 대사가 적은 침투입니다. 드 팔마의 다른 작품 목록으로 이 장면을 설명하지는 않습니다."],
    filmNotes: [{ slug: "mission-impossible", text: "프라하, 랭글리, 열차. 한 편의 지리입니다." }],
    continuity: ["이후 감독이 바뀌어도 헌트와 자동 파괴 메시지는 남습니다."],
    related: [{ href: "/origin", label: "1966년 원작" }],
    sources: [wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
    footnotes: [{ n: 1, text: "각본 크레딧은 위키백과 요약문입니다." }],
  },
  "john-woo": {
    slug: "john-woo",
    bio: ["2000년 2편의 감독입니다. 홍콩 액션의 문법으로 자주 불리고, 이 편의 결말은 오토바이 추격입니다."],
    craft: ["슬로모션을 이 감독의 습관으로만 적고, 샷 수를 세지 않습니다."],
    filmNotes: [{ slug: "mission-impossible-2", text: "키메라와 니아, 앰브로스." }],
    continuity: ["3편은 분위기를 다시 스파이 스릴러 쪽으로 돌립니다."],
    related: [{ href: "/cars/triumph-speed-triple", label: "차량 · 스피드 트리플" }],
    sources: [wiki("Mission:_Impossible_2", "Mission: Impossible 2")],
    footnotes: [{ n: 1, text: "감독 크레딧은 위키백과 정보 상자입니다." }],
  },
  "jj-abrams": {
    slug: "jj-abrams",
    bio: [
      "연출작은 2006년 3편입니다. 고스트 프로토콜과 로그네이션, 폴아웃의 제작 크레딧에는 그의 이름이 남습니다.",
      "위키백과는 고스트 프로토콜에서 연출을 버드에게 넘기고 제작으로 남았다고 적습니다.",
    ],
    craft: ["3편은 헌트의 결혼을 플롯 한가운데 둡니다. 개인사가 임무와 같은 무게입니다."],
    filmNotes: [{ slug: "mission-impossible-3", text: "데이비언, 줄리아, 벤지의 입구." }],
    continuity: ["연출은 한 편, 제작은 그 다음입니다. 맥쿼리 시대와 구분합니다."],
    related: [{ href: "/films/ghost-protocol", label: "다음 연출 · 버드" }],
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III")],
    footnotes: [{ n: 1, text: "고스트 프로토콜 제작 유지는 그 작품 위키백과 도입부입니다." }],
  },
  "brad-bird": {
    slug: "brad-bird",
    bio: ["고스트 프로토콜이 실사 장편 데뷔입니다. 위키백과가 그렇게 적습니다. 각본은 조시 애플바움과 안드레 네멕입니다."],
    craft: ["IMAX로 일부 장면을 찍었습니다. 부르즈 할리파와 모래 폭풍이 스케일의 축입니다."],
    filmNotes: [{ slug: "ghost-protocol", text: "조직이 부인된 채 남는 네 사람." }],
    continuity: ["위키백과는 각본이 나중에 맥쿼리의 윤문을 거쳤다고 제작 단락에 적습니다. 연출 크레딧은 버드입니다."],
    related: [{ href: "/records", label: "부르즈 할리파" }],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
    footnotes: [{ n: 1, text: "실사 데뷔와 맥쿼리 윤문은 고스트 프로토콜 위키백과입니다." }],
  },
  "christopher-mcquarrie": {
    slug: "christopher-mcquarrie",
    bio: [
      "로그네이션, 폴아웃, 데드 레코닝, 파이널 레코닝. 연출 네 편입니다. 시리즈에서 연출이 반복된 경우는 여기뿐입니다.",
      "고스트 프로토콜 각본 윤문으로 먼저 손을 댔다는 문장은 그 작품의 위키백과에 있습니다.",
    ],
    craft: ["신디케이트에서 엔티티까지, 네 편이 한 줄거리로 이어집니다. 허브는 맥쿼리 시대 페이지입니다."],
    filmNotes: [
      { slug: "rogue-nation", text: "A400M과 일사, 레인." },
      { slug: "fallout", text: "같은 감독의 속편. 발목 부상으로 촬영이 멈춥니다." },
      { slug: "dead-reckoning", text: "엔티티." },
      { slug: "final-reckoning", text: "잠수함과 복엽기." },
    ],
    continuity: ["네 편을 한 시대 문서로 모읍니다."],
    related: [{ href: "/mcquarrie-era", label: "맥쿼리 시대" }],
    sources: [wiki("Mission:_Impossible_(film_series)", "Mission: Impossible (film series)")],
    footnotes: [{ n: 1, text: "네 편의 감독 칸은 시리즈 위키백과 표입니다." }],
  },
};
