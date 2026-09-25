import type { LicensedImage } from "./types";

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

export const filmImages: Record<string, LicensedImage> = {};

export const directorImages: Record<string, LicensedImage> = {};

export const personImages: Record<string, LicensedImage> = {};

export const carImages: Record<string, LicensedImage> = {};

export function otherVehicleImage(vehicle: { carSlug?: string }): LicensedImage | undefined {
  if (vehicle.carSlug) return carImages[vehicle.carSlug];
  return undefined;
}

export const gadgetImages: Record<string, LicensedImage> = {};

export function personImage(slug: string) {
  return personImages[slug];
}
