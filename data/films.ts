export type FilmCardData = {
  slug: string;
  titleKo: string;
  titleEn: string;
  year: number;
  directorSlug: string;
  directorKo: string;
  directorEn: string;
  actorKo: string;
  actorEn: string;
  hasDetail: boolean;
  posterTone: string;
  spinOff?: boolean;
};

const tone = {
  night: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
  heat: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
  bay: "linear-gradient(165deg,#10283a 0%,#0B0D10 50%,#3aa0c644 100%)",
  neon: "linear-gradient(165deg,#241830 0%,#0B0D10 48%,#c6a75e44 100%)",
  gold: "linear-gradient(165deg,#3a3418 0%,#0B0D10 46%,#C6A75E44 100%)",
  street: "linear-gradient(165deg,#1a2030 0%,#0B0D10 48%,#8a734033 100%)",
  red: "linear-gradient(165deg,#2a1410 0%,#0B0D10 50%,#c65e3233 100%)",
  ice: "linear-gradient(165deg,#142028 0%,#0B0D10 50%,#9aa3ad33 100%)",
  spin: "linear-gradient(165deg,#201810 0%,#0B0D10 48%,#C6A75E55 100%)",
};

export const films: FilmCardData[] = [
  {
    slug: "the-fast-and-the-furious",
    titleKo: "분노의 질주",
    titleEn: "The Fast and the Furious",
    year: 2001,
    directorSlug: "rob-cohen",
    directorKo: "롭 코헨",
    directorEn: "Rob Cohen",
    actorKo: "빈 디젤 · 폴 워커",
    actorEn: "Vin Diesel · Paul Walker",
    hasDetail: true,
    posterTone: tone.night,
  },
  {
    slug: "2-fast-2-furious",
    titleKo: "패스트 & 퓨리어스 2",
    titleEn: "2 Fast 2 Furious",
    year: 2003,
    directorSlug: "john-singleton",
    directorKo: "존 싱글턴",
    directorEn: "John Singleton",
    actorKo: "폴 워커",
    actorEn: "Paul Walker",
    hasDetail: true,
    posterTone: tone.heat,
  },
  {
    slug: "tokyo-drift",
    titleKo: "패스트 & 퓨리어스: 도쿄 드리프트",
    titleEn: "The Fast and the Furious: Tokyo Drift",
    year: 2006,
    directorSlug: "justin-lin",
    directorKo: "저스틴 린",
    directorEn: "Justin Lin",
    actorKo: "루카스 블랙",
    actorEn: "Lucas Black",
    hasDetail: true,
    posterTone: tone.neon,
  },
  {
    slug: "fast-and-furious",
    titleKo: "분노의 질주: 더 오리지널",
    titleEn: "Fast & Furious",
    year: 2009,
    directorSlug: "justin-lin",
    directorKo: "저스틴 린",
    directorEn: "Justin Lin",
    actorKo: "빈 디젤 · 폴 워커",
    actorEn: "Vin Diesel · Paul Walker",
    hasDetail: true,
    posterTone: tone.street,
  },
  {
    slug: "fast-five",
    titleKo: "분노의 질주: 언리미티드",
    titleEn: "Fast Five",
    year: 2011,
    directorSlug: "justin-lin",
    directorKo: "저스틴 린",
    directorEn: "Justin Lin",
    actorKo: "빈 디젤 · 폴 워커",
    actorEn: "Vin Diesel · Paul Walker",
    hasDetail: true,
    posterTone: tone.gold,
  },
  {
    slug: "fast-and-furious-6",
    titleKo: "분노의 질주: 더 맥시멈",
    titleEn: "Fast & Furious 6",
    year: 2013,
    directorSlug: "justin-lin",
    directorKo: "저스틴 린",
    directorEn: "Justin Lin",
    actorKo: "빈 디젤 · 폴 워커",
    actorEn: "Vin Diesel · Paul Walker",
    hasDetail: true,
    posterTone: tone.bay,
  },
  {
    slug: "furious-7",
    titleKo: "분노의 질주: 더 세븐",
    titleEn: "Furious 7",
    year: 2015,
    directorSlug: "james-wan",
    directorKo: "제임스 완",
    directorEn: "James Wan",
    actorKo: "빈 디젤 · 폴 워커",
    actorEn: "Vin Diesel · Paul Walker",
    hasDetail: true,
    posterTone: tone.red,
  },
  {
    slug: "fate-of-the-furious",
    titleKo: "분노의 질주: 더 익스트림",
    titleEn: "The Fate of the Furious",
    year: 2017,
    directorSlug: "f-gary-gray",
    directorKo: "F. 게리 그레이",
    directorEn: "F. Gary Gray",
    actorKo: "빈 디젤",
    actorEn: "Vin Diesel",
    hasDetail: true,
    posterTone: tone.ice,
  },
  {
    slug: "hobbs-and-shaw",
    titleKo: "분노의 질주: 홉스&쇼",
    titleEn: "Fast & Furious Presents: Hobbs & Shaw",
    year: 2019,
    directorSlug: "david-leitch",
    directorKo: "데이비드 리치",
    directorEn: "David Leitch",
    actorKo: "드웨인 존슨 · 제이슨 스테이섬",
    actorEn: "Dwayne Johnson · Jason Statham",
    hasDetail: true,
    posterTone: tone.spin,
    spinOff: true,
  },
  {
    slug: "f9",
    titleKo: "분노의 질주: 더 얼티메이트",
    titleEn: "F9",
    year: 2021,
    directorSlug: "justin-lin",
    directorKo: "저스틴 린",
    directorEn: "Justin Lin",
    actorKo: "빈 디젤",
    actorEn: "Vin Diesel",
    hasDetail: true,
    posterTone: tone.gold,
  },
  {
    slug: "fast-x",
    titleKo: "분노의 질주: 라이드 오어 다이",
    titleEn: "Fast X",
    year: 2023,
    directorSlug: "louis-leterrier",
    directorKo: "루이 르테리에",
    directorEn: "Louis Leterrier",
    actorKo: "빈 디젤",
    actorEn: "Vin Diesel",
    hasDetail: true,
    posterTone: tone.heat,
  },
];

export const featuredFilmSlugs = ["fast-five", "furious-7", "fast-x"] as const;

export const DIRECTOR_ORDER = [
  "rob-cohen",
  "john-singleton",
  "justin-lin",
  "james-wan",
  "f-gary-gray",
  "david-leitch",
  "louis-leterrier",
] as const;

export function filmsByDirector() {
  return DIRECTOR_ORDER.map((directorSlug) => {
    const directorFilms = films.filter((film) => film.directorSlug === directorSlug);
    const first = directorFilms[0];
    return {
      directorSlug,
      directorKo: first?.directorKo ?? "",
      directorEn: first?.directorEn ?? "",
      films: directorFilms,
    };
  }).filter((group) => group.films.length > 0);
}

export function getFilm(slug: string) {
  return films.find((film) => film.slug === slug);
}

export function officialNeighbors(slug: string) {
  const index = films.findIndex((film) => film.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  return {
    prev: index > 0 ? films[index - 1] : undefined,
    next: index < films.length - 1 ? films[index + 1] : undefined,
  };
}

export function displayFilmTitle(film: Pick<FilmCardData, "titleKo" | "titleEn">) {
  return `${film.titleKo} (${film.titleEn})`;
}
