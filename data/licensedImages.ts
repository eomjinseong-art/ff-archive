import type { LicensedImage } from "./types";
import { carPhotos } from "./carPhotos";
import { filmPhotos } from "./filmPhotos";
import { directorPortraits, personPortraits } from "./portraits";

/** Owner photo. Used when no free-license photo exists, and when a photo fails to load. */
export const defaultCarImage: LicensedImage = {
  src: "/images/default-car.webp",
  width: 1672,
  height: 941,
  alt: "밤의 젖은 도로 위 스포츠카 두 대. 사이트 대표 이미지",
  author: "",
  license: "",
  licenseUrl: "",
  sourceUrl: "",
  sourceLabel: "",
  isSiteDefault: true,
  objectPosition: "center",
};

/** @deprecated Use defaultCarImage. Kept so existing fallbacks stay one image. */
export const atmospherePlaceholder: LicensedImage = defaultCarImage;

export function portraitOrAtmosphere(image?: LicensedImage, alt?: string): LicensedImage {
  if (image) return image;
  return alt ? { ...defaultCarImage, alt } : defaultCarImage;
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
