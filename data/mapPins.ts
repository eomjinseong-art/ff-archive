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
  로스앤젤레스: [34.052, -118.244],
  마이애미: [25.761, -80.191],
  도쿄: [35.682, 139.759],
  리우데자네이루: [-22.906, -43.173],
  산후안: [18.466, -66.105],
  런던: [51.507, -0.128],
  아부다비: [24.459, 54.322],
  아바나: [23.136, -82.359],
  로마: [41.89, 12.492],
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
