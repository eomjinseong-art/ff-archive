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

const CHANNEL = "https://www.youtube.com/channel/UCJCx8aQrdx_ueXPmxTD2odQ";

/** 공식 채널에서 확인한 영상만. 예고편 ID를 만들지 않습니다. */
export const officialScenes: OfficialScene[] = [
  {
    filmSlug: "2-fast-2-furious",
    titleKo: "스카이라인 R34",
    filmTitleKo: "패스트 & 퓨리어스 2",
    youtubeId: "LiIdGRkz6G0",
    note: "The Fast Saga 채널의 R34 영상입니다. 설명란의 상점 링크가 다른 편을 가리켜도, 차는 2편의 스카이라인으로 둡니다.",
  },
  {
    filmSlug: "fate-of-the-furious",
    titleKo: "더 익스트림 공식 영상",
    filmTitleKo: "분노의 질주: 더 익스트림",
    youtubeId: "kToFKqsCVLQ",
    note: "공식 채널 영상입니다. 설명에 사이퍼와 샬리즈 테론이 있습니다. 영화 스틸은 올리지 않습니다.",
  },
  {
    filmSlug: "f9",
    titleKo: "더 얼티메이트 공식 영상",
    filmTitleKo: "분노의 질주: 더 얼티메이트",
    youtubeId: "x6m43M92HPI",
    note: "공식 채널 영상입니다. 확인하지 못한 예고편 ID는 넣지 않습니다.",
  },
];

export const fanClips: FanClip[] = [
  {
    titleKo: "공식 채널에서 영상 보기",
    href: CHANNEL,
    note: "비공식 재업로드 대신 The Fast Saga 채널로 보냅니다.",
  },
];
