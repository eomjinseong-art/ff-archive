import type { Source } from "./types";
import { WIKI_2001, WIKI_2F2F, WIKI_FIVE, WIKI_SIX, WIKI_TOKYO, wiki } from "./sources";

export type Landmark = {
  slug: string;
  placeKo: string;
  placeEn: string;
  city: string;
  country: string;
  filmSlug: string;
  sceneNote: string;
  whyPopular: string;
  isSet?: boolean;
  mapsQuery: string;
  sources: Source[];
};

const WIKI_F7 = wiki("Furious_7", "Furious 7");
const WIKI_FATE = wiki("The_Fate_of_the_Furious", "The Fate of the Furious");
const WIKI_X = wiki("Fast_X", "Fast X");

export const landmarks: Landmark[] = [
  {
    slug: "los-angeles",
    placeKo: "로스앤젤레스",
    placeEn: "Los Angeles",
    city: "로스앤젤레스",
    country: "미국",
    filmSlug: "the-fast-and-the-furious",
    sceneNote: "2001년 작품의 배경이자 촬영지입니다. 다저 스타디움, 앤젤리노 하이츠, 실버 레이크, 에코 파크, 리틀 사이공, 레이스 워즈의 샌버너디노 공항이 문서에 있습니다.",
    whyPopular: "시리즈가 시작된 도시입니다.",
    mapsQuery: "Los Angeles",
    sources: [WIKI_2001],
  },
  {
    slug: "miami",
    placeKo: "마이애미",
    placeEn: "Miami",
    city: "마이애미",
    country: "미국",
    filmSlug: "2-fast-2-furious",
    sceneNote: "2편의 배경입니다. 브라이언과 로먼, 테지의 레이스가 여기 있습니다.",
    whyPopular: "돔이 없는 본편의 도시입니다.",
    mapsQuery: "Miami Florida",
    sources: [WIKI_2F2F],
  },
  {
    slug: "tokyo",
    placeKo: "도쿄",
    placeEn: "Tokyo",
    city: "도쿄",
    country: "일본",
    filmSlug: "tokyo-drift",
    sceneNote: "이야기 속의 도시입니다. 한의 사고와 션의 드리프트가 여기로 기억됩니다. 촬영지 전체를 도쿄로 단정하지는 않습니다.",
    whyPopular: "개봉 순서와 이야기 순서가 어긋나는 편입니다.",
    isSet: true,
    mapsQuery: "Tokyo",
    sources: [WIKI_TOKYO],
  },
  {
    slug: "rio",
    placeKo: "리우데자네이루",
    placeEn: "Rio de Janeiro",
    city: "리우데자네이루",
    country: "브라질",
    filmSlug: "fast-five",
    sceneNote: "언리미티드의 이야기 배경입니다. 촬영의 상당 부분은 산후안과 애틀랜타입니다.",
    whyPopular: "금고 작전의 도시로 기억됩니다.",
    isSet: true,
    mapsQuery: "Rio de Janeiro",
    sources: [WIKI_FIVE],
  },
  {
    slug: "san-juan",
    placeKo: "산후안",
    placeEn: "San Juan",
    city: "산후안",
    country: "푸에르토리코",
    filmSlug: "fast-five",
    sceneNote: "리우를 대신해 찍은 촬영지입니다. 테오도로 모스코소 다리의 스턴트는 포기됐습니다.",
    whyPopular: "화면의 리우와 다른 장소입니다.",
    mapsQuery: "San Juan Puerto Rico",
    sources: [WIKI_FIVE],
  },
  {
    slug: "london",
    placeKo: "런던",
    placeEn: "London",
    city: "런던",
    country: "영국",
    filmSlug: "fast-and-furious-6",
    sceneNote: "더 맥시멈의 배경입니다. 피카딜리 서커스의 드래그 레이스가 문서에 있습니다. 차종은 그 문장이 적지 않습니다.",
    whyPopular: "오언 쇼 편의 도시입니다.",
    mapsQuery: "Piccadilly Circus London",
    sources: [WIKI_SIX],
  },
  {
    slug: "abu-dhabi",
    placeKo: "에티하드 타워",
    placeEn: "Etihad Towers",
    city: "아부다비",
    country: "아랍에미리트",
    filmSlug: "furious-7",
    sceneNote: "더 세븐에서 라이칸 하이퍼스포츠가 타워 사이를 건너는 장면의 배경입니다.",
    whyPopular: "라이칸이 특정되는 장소입니다.",
    mapsQuery: "Etihad Towers Abu Dhabi",
    sources: [WIKI_F7],
  },
  {
    slug: "havana",
    placeKo: "아바나",
    placeEn: "Havana",
    city: "아바나",
    country: "쿠바",
    filmSlug: "fate-of-the-furious",
    sceneNote: "더 익스트림은 돔과 레티의 신혼 여행으로 아바나에서 시작합니다. 촬영지 목록에도 아바나가 있습니다.",
    whyPopular: "사이퍼 편의 입구입니다.",
    mapsQuery: "Havana Cuba",
    sources: [WIKI_FATE],
  },
  {
    slug: "rome",
    placeKo: "로마",
    placeEn: "Rome",
    city: "로마",
    country: "이탈리아",
    filmSlug: "fast-x",
    sceneNote: "라이드 오어 다이에서 칩을 옮기는 작전의 도시입니다. 시사회는 콜로세움에서 열렸습니다.",
    whyPopular: "단테 편의 오프닝 도시입니다.",
    mapsQuery: "Rome Italy",
    sources: [WIKI_X],
  },
];

export function landmarksForFilm(filmSlug: string) {
  return landmarks.filter((place) => place.filmSlug === filmSlug);
}

export function landmarksByCountry() {
  const map = new Map<string, Landmark[]>();
  for (const place of landmarks) {
    const list = map.get(place.country) ?? [];
    list.push(place);
    map.set(place.country, list);
  }
  return [...map.entries()];
}
