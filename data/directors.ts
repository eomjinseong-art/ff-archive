import { directorImages } from "./licensedImages";
import type { LicensedImage } from "./types";

export type Director = {
  slug: string;
  nameKo: string;
  nameEn: string;
  years: string;
  filmCount: number;
  filmSlugs: string[];
  oneLiner: string;
  posterTone: string;
  image?: LicensedImage;
  nationalityKo: string;
  nationalityEn?: string;
};

export const directors: Director[] = [
  {
    slug: "brian-de-palma",
    nameKo: "브라이언 드 팔마",
    nameEn: "Brian De Palma",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "1996",
    filmCount: 1,
    filmSlugs: ["mission-impossible"],
    oneLiner: "텔레비전을 극장 스파이 스릴러로 연 감독. 1편.",
    posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
    image: directorImages["brian-de-palma"],
  },
  {
    slug: "john-woo",
    nameKo: "존 우",
    nameEn: "John Woo",
    nationalityKo: "홍콩",
    nationalityEn: "Hong Kong",
    years: "2000",
    filmCount: 1,
    filmSlugs: ["mission-impossible-2"],
    oneLiner: "슬로모션과 결말의 추격. 2편.",
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
    image: directorImages["john-woo"],
  },
  {
    slug: "jj-abrams",
    nameKo: "J. J. 에이브럼스",
    nameEn: "J. J. Abrams",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2006",
    filmCount: 1,
    filmSlugs: ["mission-impossible-3"],
    oneLiner: "연출은 3편. 이후 편에서는 제작으로 남습니다.",
    posterTone: "linear-gradient(165deg,#14283a 0%,#0B0D10 50%,#3aa0c633 100%)",
    image: directorImages["jj-abrams"],
  },
  {
    slug: "brad-bird",
    nameKo: "브래드 버드",
    nameEn: "Brad Bird",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2011",
    filmCount: 1,
    filmSlugs: ["ghost-protocol"],
    oneLiner: "실사 데뷔작이 고스트 프로토콜입니다.",
    posterTone: "linear-gradient(165deg,#3a3418 0%,#0B0D10 46%,#C6A75E44 100%)",
    image: directorImages["brad-bird"],
  },
  {
    slug: "christopher-mcquarrie",
    nameKo: "크리스토퍼 맥쿼리",
    nameEn: "Christopher McQuarrie",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2015–2025",
    filmCount: 4,
    filmSlugs: ["rogue-nation", "fallout", "dead-reckoning", "final-reckoning"],
    oneLiner: "5편부터 8편까지. 시리즈에서 연출을 반복한 유일한 감독.",
    posterTone: "linear-gradient(165deg,#1a2030 0%,#0B0D10 48%,#8a734033 100%)",
    image: directorImages["christopher-mcquarrie"],
  },
];

export function getDirector(slug: string) {
  return directors.find((director) => director.slug === slug);
}

export function getDirectorByFilmSlug(filmSlug: string) {
  return directors.find((director) => director.filmSlugs.includes(filmSlug));
}
