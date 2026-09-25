import { officialScenes } from "./scenes";

export const OFFICIAL_CHANNEL = {
  handle: "@MissionImpossible",
  nameKo: "Mission: Impossible",
  href: "https://www.youtube.com/@MissionImpossible",
};

export const officialChannelTabs = [
  {
    id: "home",
    labelKo: "홈",
    labelEn: "Home",
    href: "https://www.youtube.com/@MissionImpossible",
    note: "공식 채널 첫 화면.",
  },
  {
    id: "videos",
    labelKo: "동영상",
    labelEn: "Videos",
    href: "https://www.youtube.com/@MissionImpossible/videos",
    note: "채널에 올라온 공식 영상.",
  },
  {
    id: "shorts",
    labelKo: "Shorts",
    labelEn: "Shorts",
    href: "https://www.youtube.com/@MissionImpossible/shorts",
    note: "공식 숏폼.",
  },
  {
    id: "live",
    labelKo: "실시간",
    labelEn: "Live",
    href: "https://www.youtube.com/@MissionImpossible/streams",
    note: "라이브·지난 스트림.",
  },
  {
    id: "playlists",
    labelKo: "재생목록",
    labelEn: "Playlists",
    href: "https://www.youtube.com/@MissionImpossible/playlists",
    note: "공식 재생목록.",
  },
  {
    id: "posts",
    labelKo: "게시물",
    labelEn: "Posts",
    href: "https://www.youtube.com/@MissionImpossible/posts",
    note: "커뮤니티 게시물.",
  },
] as const;

export const officialCategoryLinks = [
  {
    id: "trailers",
    labelKo: "공식 예고편",
    query: "Official Trailer",
    href: "https://www.youtube.com/@MissionImpossible/search?query=Official%20Trailer",
    note: "채널 안 예고편 검색.",
  },
  {
    id: "behind",
    labelKo: "비하인드",
    query: "Behind the Scenes",
    href: "https://www.youtube.com/@MissionImpossible/search?query=Behind%20the%20Scenes",
    note: "제작기 검색.",
  },
  {
    id: "stunts",
    labelKo: "스턴트",
    query: "Stunt",
    href: "https://www.youtube.com/@MissionImpossible/search?query=Stunt",
    note: "스턴트 관련 공식 검색.",
  },
] as const;

export const officialTrailerEmbeds = officialScenes.map((scene) => ({
  filmSlug: scene.filmSlug,
  titleKo: scene.titleKo,
  filmTitleKo: scene.filmTitleKo,
  youtubeId: scene.youtubeId,
  note: scene.note,
}));

export const videosIntro = {
  title: "영상",
  lede: "공식 YouTube @MissionImpossible 채널의 예고편과 제작기입니다.",
};
