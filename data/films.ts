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
};

export const films: FilmCardData[] = [
  {
    slug: "mission-impossible",
    titleKo: "미션 임파서블",
    titleEn: "Mission: Impossible",
    year: 1996,
    directorSlug: "brian-de-palma",
    directorKo: "브라이언 드 팔마",
    directorEn: "Brian De Palma",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
  },
  {
    slug: "mission-impossible-2",
    titleKo: "미션 임파서블 2",
    titleEn: "Mission: Impossible 2",
    year: 2000,
    directorSlug: "john-woo",
    directorKo: "존 우",
    directorEn: "John Woo",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
  },
  {
    slug: "mission-impossible-3",
    titleKo: "미션 임파서블 3",
    titleEn: "Mission: Impossible III",
    year: 2006,
    directorSlug: "jj-abrams",
    directorKo: "J. J. 에이브럼스",
    directorEn: "J. J. Abrams",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#14283a 0%,#0B0D10 50%,#3aa0c633 100%)",
  },
  {
    slug: "ghost-protocol",
    titleKo: "미션 임파서블: 고스트 프로토콜",
    titleEn: "Mission: Impossible – Ghost Protocol",
    year: 2011,
    directorSlug: "brad-bird",
    directorKo: "브래드 버드",
    directorEn: "Brad Bird",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#3a3418 0%,#0B0D10 46%,#C6A75E44 100%)",
  },
  {
    slug: "rogue-nation",
    titleKo: "미션 임파서블: 로그네이션",
    titleEn: "Mission: Impossible – Rogue Nation",
    year: 2015,
    directorSlug: "christopher-mcquarrie",
    directorKo: "크리스토퍼 맥쿼리",
    directorEn: "Christopher McQuarrie",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#1a2030 0%,#0B0D10 48%,#8a734033 100%)",
  },
  {
    slug: "fallout",
    titleKo: "미션 임파서블: 폴아웃",
    titleEn: "Mission: Impossible – Fallout",
    year: 2018,
    directorSlug: "christopher-mcquarrie",
    directorKo: "크리스토퍼 맥쿼리",
    directorEn: "Christopher McQuarrie",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#241820 0%,#0B0D10 50%,#8a303022 100%)",
  },
  {
    slug: "dead-reckoning",
    titleKo: "미션 임파서블: 데드 레코닝 PART ONE",
    titleEn: "Mission: Impossible – Dead Reckoning Part One",
    year: 2023,
    directorSlug: "christopher-mcquarrie",
    directorKo: "크리스토퍼 맥쿼리",
    directorEn: "Christopher McQuarrie",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#10241c 0%,#0B0D10 48%,#5e8a6a33 100%)",
  },
  {
    slug: "final-reckoning",
    titleKo: "미션 임파서블: 파이널 레코닝",
    titleEn: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    directorSlug: "christopher-mcquarrie",
    directorKo: "크리스토퍼 맥쿼리",
    directorEn: "Christopher McQuarrie",
    actorKo: "톰 크루즈",
    actorEn: "Tom Cruise",
    hasDetail: true,
    posterTone: "linear-gradient(165deg,#101828 0%,#0B0D10 45%,#C6A75E28 100%)",
  },
];

export const featuredFilmSlugs = [
  "ghost-protocol",
  "rogue-nation",
  "fallout",
] as const;

export const DIRECTOR_ORDER = [
  "brian-de-palma",
  "john-woo",
  "jj-abrams",
  "brad-bird",
  "christopher-mcquarrie",
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
