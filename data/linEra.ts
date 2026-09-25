import type { Source } from "./types";
import { WIKI_SERIES, wiki } from "./sources";

export const linEra = {
  titleKo: "린의 다섯 편",
  titleEn: "Justin Lin",
  years: "2006–2021",
  oneLiner: "저스틴 린이 연출한 본편 다섯 편. 도쿄 드리프트에서 금고와 수송기를 거쳐 더 얼티메이트로 돌아옵니다.",
};

export const linSections = [
  {
    heading: "어디서 시작인가",
    paragraphs: [
      "시리즈 감독 가운데 본편을 두 편 이상 맡은 사람은 린뿐입니다. 도쿄 드리프트, 2009년 더 오리지널, 언리미티드, 더 맥시멈, 더 얼티메이트입니다.",
      "도쿄 드리프트는 개봉 순서상 세 번째이지만, 위키백과는 이야기 시점을 더 맥시멈과 더 세븐 사이로 적습니다. 한이 그 편에서 죽기 때문에, 이후 작품이 그 앞 시점으로 돌아갑니다.",
    ],
  },
  {
    heading: "무엇이 바뀌나",
    paragraphs: [
      "시리즈 문서는 처음 네 편이 불법 레이스에 머물다, 언리미티드부터 습격과 첩보 쪽으로 움직인다고 요약합니다. 그 분기점의 감독이 린입니다.",
      "더 세븐과 더 익스트림, 라이드 오어 다이, 스핀오프 홉스&쇼는 다른 감독입니다. 이 페이지의 다섯 편에 넣지 않습니다.",
    ],
  },
];

export const linFilmSlugs = [
  "tokyo-drift",
  "fast-and-furious",
  "fast-five",
  "fast-and-furious-6",
  "f9",
];

export const linSources: Source[] = [
  WIKI_SERIES,
  wiki("The_Fast_and_the_Furious:_Tokyo_Drift", "The Fast and the Furious: Tokyo Drift"),
];
