import type { Source } from "./types";
import { wiki } from "./sources";

export const mcquarrieEra = {
  titleKo: "맥쿼리 시대",
  titleEn: "McQuarrie era",
  years: "2015–2025",
  oneLiner: "크리스토퍼 맥쿼리가 연출한 5편부터 8편. 신디케이트에서 엔티티까지 한 줄입니다.",
};

export const mcquarrieSections = [
  {
    heading: "왜 한 시대로 묶는가",
    paragraphs: [
      "극장판 감독 다섯 명 가운데 연출이 두 편 이상인 사람은 맥쿼리뿐입니다. 로그네이션, 폴아웃, 데드 레코닝, 파이널 레코닝입니다.",
      "고스트 프로토콜 위키백과는 애플바움·네멕의 각본을 맥쿼리가 나중에 윤문했다고 적습니다. 그 편의 연출 크레딧은 여전히 브래드 버드입니다. 시대의 시작은 연출을 맡은 2015년으로 둡니다.",
    ],
  },
  {
    heading: "줄거리의 이음",
    paragraphs: [
      "로그네이션의 적대 조직은 신디케이트, 중심은 솔로몬 레인입니다. 일사 파우스트가 여기 들어옵니다.",
      "폴아웃은 사도들과 존 라크, 플루토늄입니다. 레인이 다시 나오고, 화이트 위도우가 거래를 엽니다.",
      "데드 레코닝은 인공지능 엔티티와 열쇠, 가브리엘, 그레이스입니다. 파이널 레코닝은 잠수함 세바스토폴의 포드코바와 복엽기로 그 존재를 가두려 합니다.",
    ],
  },
  {
    heading: "제작",
    paragraphs: [
      "폴아웃 촬영 중 톰 크루즈가 발목을 다쳤다고 위키백과는 적습니다. 데드 레코닝은 시리즈에서 디지털 촬영으로 넘어간 첫 편이라고 같은 계열 문서가 적습니다.",
      "파이널 레코닝의 복엽기 장면에서 크루즈가 뒤집힌 기체에 매달렸다는 문장은 그 작품의 제작 단락입니다.",
    ],
  },
];

export const mcquarrieFilmSlugs = [
  "rogue-nation",
  "fallout",
  "dead-reckoning",
  "final-reckoning",
] as const;

export const mcquarrieSources: Source[] = [
  wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation"),
  wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout"),
  wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One"),
  wiki("Mission:_Impossible_%E2%80%93_The_Final_Reckoning", "Mission: Impossible – The Final Reckoning"),
  wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol"),
];
