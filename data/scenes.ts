import { filmDetails } from "./filmDetails";
import { films } from "./films";

export type OfficialScene = {
  filmSlug: string;
  titleKo: string;
  filmTitleKo: string;
  youtubeId: string;
  note: string;
};

export type FanClip = {
  titleKo: string;
  href: string;
  note: string;
};

export const officialScenes: OfficialScene[] = films.map((film) => {
  const detail = filmDetails[film.slug];
  return {
    filmSlug: film.slug,
    titleKo: `${film.titleKo} 공식 예고편`,
    filmTitleKo: film.titleKo,
    youtubeId: detail.trailerYoutubeId,
    note: "파라마운트 픽처스 또는 파라마운트 무비 채널에 올라온 공식 예고편입니다. 영화 스틸을 따로 올리지 않습니다.",
  };
});

export const fanClips: FanClip[] = [
  {
    titleKo: "공식 채널에서 예고편 검색",
    href: "https://www.youtube.com/@MissionImpossible/search?query=Official%20Trailer",
    note: "비공식 재업로드 대신 채널 검색으로 보냅니다.",
  },
];
