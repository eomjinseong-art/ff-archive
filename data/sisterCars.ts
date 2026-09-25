import {
  BOND_ARCHIVE_LABEL,
  BOND_ARCHIVE_URL,
  MI_ARCHIVE_LABEL,
  MI_ARCHIVE_URL,
  archiveNetworkUrl,
} from "@/lib/site";

export type SisterCarLink = {
  brand: string;
  siteLabel: string;
  nameKo: string;
  nameEn: string;
  href: string;
};

type SisterCar = {
  brand: string;
  base: string;
  siteLabel: string;
  slug: string;
  nameKo: string;
  nameEn: string;
};

/**
 * Slugs taken from the live /cars pages, then each /cars/[slug] was checked
 * for HTTP 200 and a film-archive <title>. bond-archive.vercel.app does not
 * host these pages.
 */
const SISTER_CARS: SisterCar[] = [
  {
    brand: "Honda",
    base: MI_ARCHIVE_URL,
    siteLabel: MI_ARCHIVE_LABEL,
    slug: "honda-crf250",
    nameKo: "혼다 CRF 250",
    nameEn: "Honda CRF 250",
  },
  {
    brand: "Lamborghini",
    base: MI_ARCHIVE_URL,
    siteLabel: MI_ARCHIVE_LABEL,
    slug: "lamborghini-gallardo",
    nameKo: "람보르기니 가야르도",
    nameEn: "Lamborghini Gallardo",
  },
  {
    brand: "Ford",
    base: BOND_ARCHIVE_URL,
    siteLabel: BOND_ARCHIVE_LABEL,
    slug: "ford-mustang-bond",
    nameKo: "포드 머스탱",
    nameEn: "Ford Mustang",
  },
];

export function sisterCarsForBrand(brand: string): SisterCarLink[] {
  return SISTER_CARS.filter((car) => car.brand === brand).map((car) => ({
    brand: car.brand,
    siteLabel: car.siteLabel,
    nameKo: car.nameKo,
    nameEn: car.nameEn,
    href: archiveNetworkUrl(car.base, `/cars/${car.slug}`, "car"),
  }));
}
