import type { LicensedImage } from "./types";
import { carPhotos } from "./carPhotos";
import { filmPhotos } from "./filmPhotos";
import { directorPortraits, personPortraits } from "./portraits";

/** Abstract stand-in. Not a film still. */
export const atmospherePlaceholder: LicensedImage = {
  src: "/images/placeholders/archive-atmosphere.png",
  width: 1600,
  height: 900,
  alt: "어두운 바탕에 금색 호만 있는 아카이브 플레이스홀더",
  author: "아카이브 플레이스홀더",
  license: "사이트 제작 이미지",
  licenseUrl: "",
  sourceUrl: "",
  sourceLabel: "",
  isPlaceholder: true,
  objectPosition: "70% center",
};

export function portraitOrAtmosphere(image?: LicensedImage): LicensedImage {
  return image ?? atmospherePlaceholder;
}

export const placeImages: Record<string, LicensedImage> = {};

export const filmImages: Record<string, LicensedImage> = filmPhotos;

export const directorImages: Record<string, LicensedImage> = directorPortraits;

export const personImages: Record<string, LicensedImage> = personPortraits;

export function directorImage(slug: string) {
  return directorImages[slug];
}

export const carImages: Record<string, LicensedImage> = carPhotos;

export function otherVehicleImage(vehicle: {
  carSlug?: string;
  photoSlug?: string;
}): LicensedImage | undefined {
  if (vehicle.photoSlug && carImages[vehicle.photoSlug]) return carImages[vehicle.photoSlug];
  if (vehicle.carSlug) return carImages[vehicle.carSlug];
  return undefined;
}

export const gadgetImages: Record<string, LicensedImage> = {};

export function personImage(slug: string) {
  return personImages[slug];
}
