import { landmarks, type Landmark } from "./landmarks";
import { trips, type Trip } from "./trips";
import type { Source } from "./types";

export type MapPin = {
  id: string;
  lat: number;
  lng: number;
  placeKo: string;
  placeEn: string;
  city: string;
  country: string;
  filmSlugs: string[];
  sceneNote: string;
  tripSlugs: string[];
  mapsQuery: string;
  whyPopular?: string;
  sources: Source[];
  kind: "landmark" | "trip";
};

const CITY_COORDS: Record<string, [number, number]> = {
  프라하: [50.087, 14.421],
  시드니: [-33.857, 151.215],
  로마: [41.902, 12.453],
  두바이: [25.197, 55.274],
  모스크바: [55.752, 37.618],
  뭄바이: [18.922, 72.833],
  빈: [48.203, 16.369],
  스탬퍼드: [52.613, -0.476],
  파리: [48.857, 2.352],
  런던: [51.507, -0.128],
  베네치아: [45.438, 12.336],
  스트란다: [62.045, 7.0],
};

function tripsNear(place: Landmark) {
  return trips
    .filter((trip) => trip.stopSlugs.includes(place.slug) || trip.city === place.city)
    .map((trip) => trip.slug);
}

export function buildMapPins(): MapPin[] {
  return landmarks.flatMap((place) => {
    const coords = CITY_COORDS[place.city];
    if (!coords) return [];
    return [
      {
        id: place.slug,
        lat: coords[0],
        lng: coords[1],
        placeKo: place.placeKo,
        placeEn: place.placeEn,
        city: place.city,
        country: place.country,
        filmSlugs: [place.filmSlug],
        sceneNote: place.sceneNote,
        tripSlugs: tripsNear(place),
        mapsQuery: place.mapsQuery,
        whyPopular: place.whyPopular,
        sources: place.sources,
        kind: "landmark" as const,
      },
    ];
  });
}

export function pinsForFilm(filmSlug: string, all = buildMapPins()) {
  return all.filter((pin) => pin.filmSlugs.includes(filmSlug));
}

export function tripById(id: string): Trip | undefined {
  return trips.find((trip) => trip.slug === id);
}
