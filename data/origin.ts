import type { Footnote, Source } from "./types";
import { WIKI_SERIES, wiki } from "./sources";

export const ORIGIN_HREF = "/origin";

export const origin = {
  nameKo: "Racer X",
  nameEn: "Ken Li, Vibe 1998",
  years: "1998",
  oneLiner: "1998년 5월 바이브 기사. 첫 극장판이 로스앤젤레스 잠입 이야기로 옮긴 바탕입니다.",
  posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
};

export const originDetail = {
  bio: [
    "시리즈 위키백과는 첫 작품의 바탕으로 켄 리(Kenneth Li)가 1998년 5월 바이브에 쓴 「Racer X」를 적습니다. 뉴욕의 지하 스트리트 레이스를 다룬 기사입니다.",
    "롭 코헨과 닐 H. 모리츠는 폴 워커에게 이 기사를 가져왔고, 로스앤젤레스의 지하 레이스에 잠입하는 경찰 이야기로 옮겼다고 제작 단락이 적습니다. 워커는 바로 수락합니다.",
  ],
  series: [
    "가제는 Racer X, Redline, Race Wars, Street Wars 사이에서 흔들렸습니다. 모리츠는 아메리칸 인터내셔널 픽처스의 1954년 영화 《The Fast and the Furious》를 다룬 다큐멘터리를 보고 제목을 빌리기로 합니다.",
    "로저 코먼에게 일부 스톡 푸티지 사용권을 주고, 그 제목의 라이선스를 받았다고 같은 단락이 적습니다. 극본 쪽 이름은 게리 스콧 톰슨입니다. 시리즈 표는 이야기를 톰슨, 각본을 데이비드 에이어·에릭 버그퀴스트·톰슨으로 적습니다.",
  ],
  revival: [
    "본편 앞뒤를 잇는 단편이 둘 있습니다. 《The Turbo Charged Prelude for 2 Fast 2 Furious》(2003, 6분, 필립 G. 앳웰)는 브라이언이 로스앤젤레스를 떠나 마이애미에 닿기까지입니다. 《Los Bandoleros》(2009, 20분, 빈 디젤 연출)는 2001년과 2009년 사이, 도미니카 공화국에 숨은 돔의 이야기입니다.",
    "드림웍스 애니메이션의 《Fast & Furious Spy Racers》(2019–2021, 넷플릭스, 6시즌)는 돔의 사촌 토니 토레토가 나오는 애니메이션입니다. 극장 본편 합계에 넣지 않습니다. 빈 디젤이 돔으로 짧게 목소리를 다시 맡는다고 시리즈 문서가 적습니다.",
  ],
  footnotes: [
    { n: 1, text: "기사 월과 제목 라이선스는 시리즈 위키백과 Production 단락입니다." },
    { n: 2, text: "각본 크레딧은 같은 문서의 작품 표입니다." },
    { n: 3, text: "단편 길이와 애니메이션 시즌은 시리즈 문서의 Short films·Television 표입니다." },
  ] as Footnote[],
  sources: [
    WIKI_SERIES,
    wiki("The_Fast_and_the_Furious_(2001_film)", "The Fast and the Furious (2001 film)"),
  ] as Source[],
};
