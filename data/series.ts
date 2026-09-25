import { films } from "./films";

export const SERIES_FRAMING =
  "개봉 순서의 본편은 2001년부터 2023년까지 10편입니다. 배급은 유니버설 픽처스입니다. 2019년 《홉스&쇼》는 스핀오프라 본편 합계에 넣지 않습니다.";

export const SERIES_FRAMING_NOTE =
  "단편 《터보차지드 프렐류드》(2003), 《로스 반돌레로스》(2009)와 애니메이션 《스파이 레이서》(2019–2021)도 본편 합계 밖입니다. 도쿄 드리프트는 개봉은 세 번째이고, 이야기 시점은 더 맥시멈과 더 세븐 사이입니다.";

export const SERIES_TOTAL = films.filter((film) => !film.spinOff).length;

export const SERIES_WITH_SPINOFF = films.length;
