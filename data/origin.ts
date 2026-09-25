import type { Footnote, Source } from "./types";
import { WIKI_TV, wiki } from "./sources";

export const ORIGIN_HREF = "/origin";

export const origin = {
  nameKo: "브루스 겔러",
  nameEn: "Bruce Geller",
  years: "1930–1978",
  oneLiner: "1966년 《미션 임파서블》 텔레비전 시리즈를 만든 사람.",
  posterTone: "linear-gradient(165deg,#1c2430 0%,#0B0D10 48%,#c6a75e33 100%)",
};

export const originDetail = {
  bio: [
    "브루스 겔러는 1966년 CBS 시리즈 《미션 임파서블》의 창작자입니다. 위키백과는 첫 방송을 1966년 9월 17일, 마지막을 1973년 3월 30일로 적습니다. 시즌 7, 에피소드 171입니다.",
    "제작사는 처음 데실루, 이후 파라마운트 텔레비전입니다. 주제 음악은 랄로 시프린입니다.",
  ],
  series: [
    "1시즌 팀장은 스티븐 힐의 댄 브리그스입니다. 피터 그레이브스의 짐 펠프스는 그 다음의 팀장입니다. 마틴 랜도, 바버라 베인, 그레그 모리스가 초기 팀에 있습니다.",
    "임무는 테이프로 전달되고, 재생 뒤 탑니다. 위키백과가 적은 공식은 ‘수락하신다면’, 발각되면 장관이 부인한다, ‘5초 후에 자동 파괴’입니다. 5초가 10초인 회도 있었다고 같은 글이 적습니다.",
  ],
  revival: [
    "1988년부터 1990년까지 ABC에서 리바이벌이 방송되었습니다. 위키백과 관련 작품 칸이 그 기간을 적습니다. 피터 그레이브스가 펠프스로 돌아옵니다.",
    "1996년 극장판은 이 텔레비전에 기반한다고 작품 문서가 적습니다. 다만 영화의 펠프스는 존 보이트이고, 줄거리 안에서 배신자입니다. 그 차이는 이슈 글에 둡니다.",
  ],
  footnotes: [
    { n: 1, text: "방송 기간, 편수, 제작사, 음악, 출연은 1966년 시리즈 위키백과 정보 상자입니다." },
    { n: 2, text: "테이프 문장은 같은 문서 본문입니다." },
    { n: 3, text: "1988–1990 리바이벌은 같은 문서의 관련 작품 칸입니다." },
  ] as Footnote[],
  sources: [
    WIKI_TV,
    wiki("Mission:_Impossible_(1988_TV_series)", "Mission: Impossible (1988 TV series)"),
    wiki("Bruce_Geller", "Bruce Geller"),
  ] as Source[],
};
