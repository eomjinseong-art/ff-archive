import type { Source } from "./types";
import { landmarks } from "./landmarks";

export type Trip = {
  slug: string;
  nameKo: string;
  nameEn: string;
  city: string;
  country: string;
  filmSlugs: string[];
  sceneNote: string;
  fameNote: string;
  mapsQuery: string;
  stopSlugs: string[];
  sources: Source[];
};

export const trips: Trip[] = [
  {
    slug: "prague",
    nameKo: "프라하 입구",
    nameEn: "Prague",
    city: "프라하",
    country: "체코",
    filmSlugs: ["mission-impossible"],
    sceneNote: "1996년 오프닝의 도시에서 시작합니다.",
    fameNote: "하루 코스. 구시가와 강을 걷고, 영화 스틸을 찾지는 않습니다.",
    mapsQuery: "Prague Old Town",
    stopSlugs: ["prague"],
    sources: landmarks[0].sources,
  },
  {
    slug: "sydney",
    nameKo: "시드니 항",
    nameEn: "Sydney Harbour",
    city: "시드니",
    country: "오스트레일리아",
    filmSlugs: ["mission-impossible-2"],
    sceneNote: "2편이 오스트레일리아를 무대로 삼습니다.",
    fameNote: "오페라 하우스와 하버 브리지를 잇는 짧은 산책입니다.",
    mapsQuery: "Sydney Opera House",
    stopSlugs: ["sydney-opera"],
    sources: landmarks.find((item) => item.slug === "sydney-opera")!.sources,
  },
  {
    slug: "dubai",
    nameKo: "두바이 외벽",
    nameEn: "Dubai",
    city: "두바이",
    country: "아랍에미리트",
    filmSlugs: ["ghost-protocol"],
    sceneNote: "부르즈 할리파 아래에서 건물의 높이를 확인합니다.",
    fameNote: "등반 장면의 케이블은 화면에 없습니다. 건물은 있습니다.",
    mapsQuery: "Burj Khalifa",
    stopSlugs: ["burj-khalifa"],
    sources: landmarks.find((item) => item.slug === "burj-khalifa")!.sources,
  },
  {
    slug: "vienna",
    nameKo: "빈 오페라",
    nameEn: "Vienna",
    city: "빈",
    country: "오스트리아",
    filmSlugs: ["rogue-nation"],
    sceneNote: "국립오페라 정면을 보고, 로그네이션의 실내와 구분합니다.",
    fameNote: "시사회가 열린 건물입니다.",
    mapsQuery: "Vienna State Opera",
    stopSlugs: ["vienna-opera"],
    sources: landmarks.find((item) => item.slug === "vienna-opera")!.sources,
  },
  {
    slug: "paris",
    nameKo: "파리 야간",
    nameEn: "Paris",
    city: "파리",
    country: "프랑스",
    filmSlugs: ["fallout"],
    sceneNote: "HALO가 내려오는 도시입니다. 착지 좌표를 관광 코스로 단정하지 않습니다.",
    fameNote: "센 강과 야경으로 충분합니다.",
    mapsQuery: "Paris",
    stopSlugs: ["paris"],
    sources: landmarks.find((item) => item.slug === "paris")!.sources,
  },
  {
    slug: "italy",
    nameKo: "로마와 베네치아",
    nameEn: "Rome and Venice",
    city: "로마",
    country: "이탈리아",
    filmSlugs: ["mission-impossible-3", "dead-reckoning"],
    sceneNote: "3편의 바티칸과 데드 레코닝의 로마·베네치아를 한 여행으로 묶습니다.",
    fameNote: "이틀. 자동차 추격의 골목은 촬영 통제와 다릅니다.",
    mapsQuery: "Rome Italy",
    stopSlugs: ["vatican", "venice"],
    sources: landmarks.find((item) => item.slug === "vatican")!.sources,
  },
  {
    slug: "norway",
    nameKo: "노르웨이 협곡",
    nameEn: "Norway",
    city: "스트란다",
    country: "노르웨이",
    filmSlugs: ["dead-reckoning"],
    sceneNote: "열차 장면을 찍은 스트란다·라우마 쪽입니다.",
    fameNote: "절벽 자체에 올라가는 코스가 아닙니다. 풍경을 보는 코스입니다.",
    mapsQuery: "Geiranger Norway",
    stopSlugs: ["norway-rail"],
    sources: landmarks.find((item) => item.slug === "norway-rail")!.sources,
  },
];

export function tripsForFilm(filmSlug: string) {
  return trips.filter((trip) => trip.filmSlugs.includes(filmSlug));
}

export function tripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
