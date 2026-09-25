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

function fromLandmark(index: number, fameNote: string): Trip {
  const place = landmarks[index];
  return {
    slug: place.slug,
    nameKo: place.placeKo,
    nameEn: place.placeEn,
    city: place.city,
    country: place.country,
    filmSlugs: [place.filmSlug],
    sceneNote: place.sceneNote,
    fameNote,
    mapsQuery: place.mapsQuery,
    stopSlugs: [place.slug],
    sources: place.sources,
  };
}

export const trips: Trip[] = [
  fromLandmark(0, "도시를 걷습니다. 레이스 워즈나 추격을 재현하지 않습니다."),
  fromLandmark(1, "해안을 걷습니다. 영화 속 속도를 도로에서 따라 하지 않습니다."),
  fromLandmark(2, "화면의 도시입니다. 드리프트 장소를 찾아 달리지 않습니다."),
  fromLandmark(3, "이야기 속 리우입니다. 금고를 끌 듯 운전하지 않습니다."),
  fromLandmark(4, "촬영지입니다. 다리 위의 스턴트는 포기된 계획이었고, 따라 하지 않습니다."),
  fromLandmark(5, "피카딜리 주변을 걷습니다. 드래그 레이스를 재현하지 않습니다."),
  fromLandmark(6, "타워 주변을 봅니다. 건물 사이 주행은 화면의 장면입니다."),
  fromLandmark(7, "구시가지를 걷습니다. 거리 레이스를 재현하지 않습니다."),
  fromLandmark(8, "로마를 걷습니다. 추격 동선을 따라 달리지 않습니다."),
];

export function tripsForFilm(filmSlug: string) {
  return trips.filter((trip) => trip.filmSlugs.includes(filmSlug));
}

export function tripBySlug(slug: string) {
  return trips.find((trip) => trip.slug === slug);
}
