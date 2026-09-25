import type { Source } from "./types";
import { wiki } from "./sources";

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

export const landmarks: Landmark[] = [
  {
    slug: "prague",
    placeKo: "프라하",
    placeEn: "Prague",
    city: "프라하",
    country: "체코",
    filmSlug: "mission-impossible",
    sceneNote: "1996년 오프닝의 도시로 기억되는 곳입니다. 대사관 작전은 화면의 프라하입니다.",
    whyPopular: "시리즈가 극장으로 나온 도시의 입구입니다.",
    mapsQuery: "Prague Czech Republic",
    sources: [wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
  },
  {
    slug: "sydney-opera",
    placeKo: "시드니 오페라 하우스",
    placeEn: "Sydney Opera House",
    city: "시드니",
    country: "오스트레일리아",
    filmSlug: "mission-impossible-2",
    sceneNote: "파라마운트 시놉시스가 2편의 무대로 오스트레일리아를 적습니다. 오페라 하우스 사진은 도시의 이정표이며 영화 스틸이 아닙니다.",
    whyPopular: "2편을 시드니와 연결해 기억하는 관객이 많습니다.",
    mapsQuery: "Sydney Opera House",
    sources: [wiki("Mission:_Impossible_2", "Mission: Impossible 2")],
  },
  {
    slug: "vatican",
    placeKo: "바티칸",
    placeEn: "Vatican City",
    city: "로마",
    country: "이탈리아",
    filmSlug: "mission-impossible-3",
    sceneNote: "3편의 침투 장소로 바티칸이 나옵니다.",
    whyPopular: "3편과, 이후 데드 레코닝의 로마 추격이 같은 도시 권에 있습니다.",
    mapsQuery: "Vatican City",
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III")],
  },
  {
    slug: "burj-khalifa",
    placeKo: "부르즈 할리파",
    placeEn: "Burj Khalifa",
    city: "두바이",
    country: "아랍에미리트",
    filmSlug: "ghost-protocol",
    sceneNote: "외벽 등반과 위장 회의. 케이블은 후반 작업에서 지웠습니다.",
    whyPopular: "시리즈 스턴트 가운데 건물이 특정되는 장면입니다.",
    mapsQuery: "Burj Khalifa Dubai",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
  },
  {
    slug: "kremlin",
    placeKo: "크렘린",
    placeEn: "Moscow Kremlin",
    city: "모스크바",
    country: "러시아",
    filmSlug: "ghost-protocol",
    sceneNote: "폭파의 누명이 시작되는 장소입니다. 위키백과는 촬영지에 모스크바를 포함합니다.",
    whyPopular: "고스트 프로토콜이라는 제목의 이유입니다.",
    mapsQuery: "Moscow Kremlin",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
  },
  {
    slug: "mumbai",
    placeKo: "뭄바이",
    placeEn: "Mumbai",
    city: "뭄바이",
    country: "인도",
    filmSlug: "ghost-protocol",
    sceneNote: "촬영지에 뭄바이가 있습니다. 결말 쪽의 인도가 이 도시와 연결됩니다.",
    whyPopular: "두바이 다음의 촬영 도시입니다.",
    mapsQuery: "Mumbai India",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
  },
  {
    slug: "vienna-opera",
    placeKo: "빈 국립오페라",
    placeEn: "Vienna State Opera",
    city: "빈",
    country: "오스트리아",
    filmSlug: "rogue-nation",
    sceneNote: "오페라 암살 시도의 배경입니다. 시사회도 여기서 열렸다고 위키백과는 적습니다.",
    whyPopular: "로그네이션의 실내 스릴러가 이 건물과 묶입니다.",
    mapsQuery: "Vienna State Opera",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation")],
  },
  {
    slug: "raf-wittering",
    placeKo: "RAF 위터링",
    placeEn: "RAF Wittering",
    city: "스탬퍼드",
    country: "영국",
    filmSlug: "rogue-nation",
    sceneNote: "A400M 시퀀스 촬영지입니다.",
    whyPopular: "등록기호 F-WWMZ와 함께 기록 페이지에 있습니다.",
    mapsQuery: "RAF Wittering",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation")],
  },
  {
    slug: "paris",
    placeKo: "파리",
    placeEn: "Paris",
    city: "파리",
    country: "프랑스",
    filmSlug: "fallout",
    sceneNote: "HALO의 착지와 클럽, 화장실 난투의 도시입니다. 촬영이 파리에서 시작되었다고 위키백과는 적습니다.",
    whyPopular: "폴아웃의 전반이 이 도시에 있습니다.",
    mapsQuery: "Paris France",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout")],
  },
  {
    slug: "london",
    placeKo: "런던",
    placeEn: "London",
    city: "런던",
    country: "영국",
    filmSlug: "fallout",
    sceneNote: "촬영지에 런던이 포함됩니다. 발목 부상이 이 제작과 함께 언급됩니다.",
    whyPopular: "로그네이션의 후반과 폴아웃이 런던을 공유합니다.",
    mapsQuery: "London",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout")],
  },
  {
    slug: "venice",
    placeKo: "베네치아",
    placeEn: "Venice",
    city: "베네치아",
    country: "이탈리아",
    filmSlug: "dead-reckoning",
    sceneNote: "데드 레코닝의 운하 구간입니다. 결말의 인물 운명은 스포일러입니다.",
    whyPopular: "로마 추격 다음의 이탈리아입니다.",
    mapsQuery: "Venice Italy",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One")],
  },
  {
    slug: "norway-rail",
    placeKo: "노르웨이 열차 촬영지",
    placeEn: "Stranda and Rauma",
    city: "스트란다",
    country: "노르웨이",
    filmSlug: "dead-reckoning",
    sceneNote: "오토바이 점프가 포함된 열차 장면을 스트란다와 라우마에서 찍었습니다.",
    whyPopular: "절벽 점프가 특정되는 장소입니다.",
    mapsQuery: "Stranda Norway",
    sources: [wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One")],
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
