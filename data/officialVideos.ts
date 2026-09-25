import { officialScenes } from "./scenes";

const CHANNEL = "https://www.youtube.com/channel/UCJCx8aQrdx_ueXPmxTD2odQ";

export const OFFICIAL_CHANNEL = {
  handle: "The Fast Saga",
  nameKo: "The Fast Saga",
  href: CHANNEL,
};

export const officialChannelTabs = [
  {
    id: "home",
    labelKo: "홈",
    labelEn: "Home",
    href: CHANNEL,
    note: "공식 채널 첫 화면.",
  },
  {
    id: "videos",
    labelKo: "동영상",
    labelEn: "Videos",
    href: `${CHANNEL}/videos`,
    note: "채널에 올라온 공식 영상.",
  },
  {
    id: "shorts",
    labelKo: "Shorts",
    labelEn: "Shorts",
    href: `${CHANNEL}/shorts`,
    note: "공식 숏폼.",
  },
  {
    id: "live",
    labelKo: "실시간",
    labelEn: "Live",
    href: `${CHANNEL}/streams`,
    note: "라이브·지난 스트림.",
  },
  {
    id: "playlists",
    labelKo: "재생목록",
    labelEn: "Playlists",
    href: `${CHANNEL}/playlists`,
    note: "공식 재생목록.",
  },
  {
    id: "posts",
    labelKo: "게시물",
    labelEn: "Posts",
    href: `${CHANNEL}/posts`,
    note: "커뮤니티 게시물.",
  },
] as const;

export const officialCategoryLinks = [
  {
    id: "trailers",
    labelKo: "공식 예고편",
    query: "Official Trailer",
    href: `${CHANNEL}/search?query=Official%20Trailer`,
    note: "채널 안 예고편 검색.",
  },
  {
    id: "behind",
    labelKo: "비하인드",
    query: "Behind the Scenes",
    href: `${CHANNEL}/search?query=Behind%20the%20Scenes`,
    note: "제작기 검색.",
  },
  {
    id: "cars",
    labelKo: "차량",
    query: "Car",
    href: `${CHANNEL}/search?query=Car`,
    note: "차량 관련 공식 검색.",
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
  lede: "유니버설의 공식 YouTube The Fast Saga 채널에서 확인한 영상입니다. 예고편 ID를 만들지 않습니다.",
};
