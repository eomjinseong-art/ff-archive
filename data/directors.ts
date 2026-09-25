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

const tone = "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)";

export const directors: Director[] = [
  {
    slug: "rob-cohen",
    nameKo: "롭 코헨",
    nameEn: "Rob Cohen",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2001",
    filmCount: 1,
    filmSlugs: ["the-fast-and-the-furious"],
    oneLiner: "2001년 첫 극장판. 켄 리의 기사에서 로스앤젤레스 잠입 이야기로 옮긴 감독.",
    posterTone: tone,
  },
  {
    slug: "john-singleton",
    nameKo: "존 싱글턴",
    nameEn: "John Singleton",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2003",
    filmCount: 1,
    filmSlugs: ["2-fast-2-furious"],
    oneLiner: "빈 디젤과 롭 코헨이 빠진 2편을 마이애미에서 연출.",
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
  },
  {
    slug: "justin-lin",
    nameKo: "저스틴 린",
    nameEn: "Justin Lin",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2006–2021",
    filmCount: 5,
    filmSlugs: ["tokyo-drift", "fast-and-furious", "fast-five", "fast-and-furious-6", "f9"],
    oneLiner: "본편 감독 가운데 편수가 가장 많습니다. 도쿄 드리프트부터 더 맥시멈, 그리고 더 얼티메이트.",
    posterTone: "linear-gradient(165deg,#3a3418 0%,#0B0D10 46%,#C6A75E44 100%)",
  },
  {
    slug: "james-wan",
    nameKo: "제임스 완",
    nameEn: "James Wan",
    nationalityKo: "오스트레일리아",
    nationalityEn: "Australia",
    years: "2015",
    filmCount: 1,
    filmSlugs: ["furious-7"],
    oneLiner: "더 세븐. 폴 워커의 마지막 브라이언이 이 편에 있습니다.",
    posterTone: "linear-gradient(165deg,#2a1410 0%,#0B0D10 50%,#c65e3233 100%)",
  },
  {
    slug: "f-gary-gray",
    nameKo: "F. 게리 그레이",
    nameEn: "F. Gary Gray",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2017",
    filmCount: 1,
    filmSlugs: ["fate-of-the-furious"],
    oneLiner: "더 익스트림. 사이퍼가 돔을 팀 밖으로 끌어내는 편.",
    posterTone: "linear-gradient(165deg,#142028 0%,#0B0D10 50%,#9aa3ad33 100%)",
  },
  {
    slug: "david-leitch",
    nameKo: "데이비드 리치",
    nameEn: "David Leitch",
    nationalityKo: "미국",
    nationalityEn: "United States",
    years: "2019",
    filmCount: 1,
    filmSlugs: ["hobbs-and-shaw"],
    oneLiner: "스핀오프 홉스&쇼. 본편 감독 명단과 나눠 둡니다.",
    posterTone: "linear-gradient(165deg,#201810 0%,#0B0D10 48%,#C6A75E55 100%)",
  },
  {
    slug: "louis-leterrier",
    nameKo: "루이 르테리에",
    nameEn: "Louis Leterrier",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    years: "2023",
    filmCount: 1,
    filmSlugs: ["fast-x"],
    oneLiner: "라이드 오어 다이. 단테 레예스의 복수가 시작되는 편.",
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
  },
];

export function getDirector(slug: string) {
  return directors.find((director) => director.slug === slug);
}

export function getDirectorByFilmSlug(filmSlug: string) {
  return directors.find((director) => director.filmSlugs.includes(filmSlug));
}
