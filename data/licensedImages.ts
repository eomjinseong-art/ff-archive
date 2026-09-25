import type { LicensedImage } from "./types";

const COMMONS = "Wikimedia Commons";

function img(
  file: string,
  width: number,
  height: number,
  alt: string,
  author: string,
  license: string,
  licenseUrl: string,
  sourceUrl: string,
  objectPosition?: string,
): LicensedImage {
  return {
    src: `/images/licensed/${file}`,
    width,
    height,
    alt,
    author,
    license,
    licenseUrl,
    sourceUrl,
    sourceLabel: COMMONS,
    objectPosition,
  };
}

/** Abstract stand-in. Not a film still. */
export const atmospherePlaceholder: LicensedImage = {
  src: "/images/placeholders/archive-atmosphere.png",
  width: 1600,
  height: 900,
  alt: "어두운 바탕에 금색 호만 있는 아카이브 플레이스홀더",
  author: "아카이브 플레이스홀더",
  license: "사이트 제작 이미지",
  licenseUrl: "",
  sourceUrl: "",
  sourceLabel: "",
  isPlaceholder: true,
  objectPosition: "70% center",
};

export function portraitOrAtmosphere(image?: LicensedImage): LicensedImage {
  return image ?? atmospherePlaceholder;
}

const CC_BY_SA_20 = "https://creativecommons.org/licenses/by-sa/2.0";
const CC_BY_20 = "https://creativecommons.org/licenses/by/2.0";
const CC_BY_SA_30 = "https://creativecommons.org/licenses/by-sa/3.0";
const CC_BY_SA_40 = "https://creativecommons.org/licenses/by-sa/4.0";
const CC_BY_40 = "https://creativecommons.org/licenses/by/4.0";
const FAL = "http://artlibre.org/licence/lal/en";

export const placeImages = {
  prague: img(
    "prague.jpg",
    5021,
    3347,
    "페트르진 전망대에서 본 프라하 카를교. 영화 스틸이 아닙니다.",
    "A.Savin",
    "FAL",
    FAL,
    "https://commons.wikimedia.org/wiki/File:Prague_07-2016_View_from_Petrinska_Tower_img2.jpg",
  ),
  sydney: img(
    "sydney-opera.jpg",
    2544,
    1406,
    "시드니 오페라 하우스. 영화 스틸이 아닙니다.",
    "Diliff",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_-_Dec_2008.jpg",
  ),
  burj: img(
    "burj-khalifa.jpg",
    5184,
    3456,
    "두바이 부르즈 할리파. 영화 스틸이 아닙니다.",
    "Laika ac",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Burj_Khalifa_(16260269606).jpg",
    "center 30%",
  ),
  vienna: img(
    "vienna-opera.jpg",
    4984,
    2859,
    "빈 국립오페라 정면. 영화 스틸이 아닙니다.",
    "P e z i",
    "CC BY-SA 3.0 at",
    "https://creativecommons.org/licenses/by-sa/3.0/at/deed.en",
    "https://commons.wikimedia.org/wiki/File:Staatsoper_Wien_DSC_5273w.jpg",
  ),
};

export const filmImages: Record<string, LicensedImage> = {
  "mission-impossible": placeImages.prague,
  "mission-impossible-2": placeImages.sydney,
  "ghost-protocol": placeImages.burj,
  "rogue-nation": placeImages.vienna,
};

export const directorImages: Record<string, LicensedImage> = {
  "brian-de-palma": img(
    "brian-de-palma.jpg",
    2000,
    3008,
    "2008년 과달라하라 영화제 기자회견의 브라이언 드 팔마",
    "Festival Internacional de Cine en Guadalajara",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:Brian_De_Palma_(Guadalajara_2008)_6.jpg",
  ),
  "john-woo": img(
    "john-woo.jpg",
    374,
    410,
    "2005년 칸 영화제의 존 우",
    "Wikimedia Commons 파일 기여자",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:John_Woo_Cannes_2005.jpg",
  ),
  "jj-abrams": img(
    "jj-abrams.jpg",
    1490,
    2151,
    "몬트클레어 영화제의 J. J. 에이브럼스",
    "Neil Grabowsky / Montclair Film Festival",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:J._J._Abrams_(23175170706)_(cropped).jpg",
  ),
  "brad-bird": img(
    "brad-bird.jpg",
    248,
    332,
    "2009년 베네치아 영화제의 브래드 버드",
    "nicolas genin",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Brad_bird_cropped_2009.jpg",
  ),
  "christopher-mcquarrie": img(
    "christopher-mcquarrie.jpg",
    1000,
    1464,
    "시드니 시사회의 크리스토퍼 맥쿼리",
    "Eva Rinaldi",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:Christopher_McQuarrie_(2).jpg",
  ),
};

export const personImages: Record<string, LicensedImage> = {
  "ethan-hunt": img(
    "tom-cruise.jpg",
    1827,
    2711,
    "2025년 칸 영화제의 톰 크루즈. 배역 스틸이 아닙니다.",
    "Harald Krichel",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Tom_Cruise-2428_(cropped).jpg",
  ),
  "luther-stickell": img(
    "ving-rhames.jpg",
    1236,
    2140,
    "2010년의 빙 라메스. 배역 스틸이 아닙니다.",
    "Chris Yarzab",
    "CC BY 2.0",
    CC_BY_20,
    "https://commons.wikimedia.org/wiki/File:Ving_Rhames_2010_(4710601891).jpg",
  ),
  "benji-dunn": img(
    "simon-pegg.jpg",
    2048,
    2552,
    "2010년 코믹콘의 사이먼 페그. 배역 스틸이 아닙니다.",
    "Gage Skidmore",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Simon_Pegg_by_Gage_Skidmore.jpg",
  ),
  "ilsa-faust": img(
    "rebecca-ferguson.jpg",
    3619,
    5429,
    "2025년 베네치아 영화제의 레베카 퍼거슨. 배역 스틸이 아닙니다.",
    "LucaFazPhoto",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Rebecca_Ferguson_at_82nd_Venice_International_Film_Festival-1.jpg",
  ),
  grace: img(
    "hayley-atwell.jpg",
    3989,
    5319,
    "2025년 칸 영화제의 헤일리 앳웰. 배역 스틸이 아닙니다.",
    "Harald Krichel",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Hayley_Atwell-2771.jpg",
  ),
};

const CC_BY_SA_20_DE = "https://creativecommons.org/licenses/by-sa/2.0/de/";
const CC0 = "https://creativecommons.org/publicdomain/zero/1.0/";
const PD = "https://creativecommons.org/publicdomain/mark/1.0/";

export const carImages: Record<string, LicensedImage> = {
  "bmw-vision-efficientdynamics": img(
    "bmw-i8.jpg",
    5184,
    2659,
    "양산 BMW i8의 측면. 고스트 프로토콜의 비전 이피션트다이내믹스 콘셉트가 아니고, 영화 스틸이 아닙니다.",
    "Ermell",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_i8_Seitenansicht_17RM0777.jpg",
  ),
  "bmw-6-series": img(
    "bmw-6-f12.jpg",
    6633,
    3631,
    "BMW 6시리즈 컨버터블 F12. 고스트 프로토콜 촬영 차량이 아닙니다.",
    "Dinkun Chen",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_6_SERIES_CONVERTIBLE_(F12)_China.jpg",
  ),
  "bmw-m3-f80": img(
    "bmw-m3-f80.jpg",
    3000,
    2000,
    "5세대 BMW M3 F80. 로그네이션 촬영 차량이 아니고, E92도 아닙니다.",
    "Alexandre Prévot",
    "CC BY-SA 2.0",
    CC_BY_SA_20,
    "https://commons.wikimedia.org/wiki/File:BMW_M3_F80_(38282109285).jpg",
  ),
  "bmw-s1000rr": img(
    "bmw-s1000rr.jpg",
    3888,
    2592,
    "뮌헨 BMW 박물관의 S 1000 RR. 로그네이션 촬영 바이크가 아닙니다.",
    "Jiří Sedláček",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_S1000RR_3asy_Ride_in_BMW-Museum_in_Munich,_Bayern.jpg",
  ),
  "bmw-m5-f90": img(
    "bmw-m5-f90.jpg",
    4836,
    2573,
    "2018년 BMW M5. 폴아웃 촬영 차량이 아닙니다.",
    "Vauxford",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:2018_BMW_M5_Automatic_4.4.jpg",
  ),
  "bmw-r-ninet": img(
    "bmw-r-ninet.jpg",
    5184,
    3456,
    "일반 BMW R nineT. 폴아웃의 R nineT 스크램블러 촬영 바이크가 아닙니다.",
    "Wikisympathisant",
    "CC0",
    CC0,
    "https://commons.wikimedia.org/wiki/File:719-look_BMW_R_NineT.jpg",
  ),
  "bmw-5-series-e28": img(
    "bmw-m5-e28.jpg",
    2693,
    1795,
    "미네르바 블루 BMW M5 E28. 폴아웃의 1986년 5시리즈와 같은 차라고 말하지 않으며, 영화 스틸이 아닙니다.",
    "HLW",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:BMW_M5_E28_Minervablau.jpg",
  ),
  "fiat-500": img(
    "fiat-500.jpg",
    4458,
    2972,
    "2007년형 시판 피아트 500. 데드 레코닝의 촬영용 커스텀 차가 아닙니다.",
    "Lothar Spurzem",
    "CC BY-SA 2.0 de",
    CC_BY_SA_20_DE,
    "https://commons.wikimedia.org/wiki/File:Fiat_500_2007_(2012-07-14).JPG",
  ),
  "audi-tt": img(
    "audi-tt.jpg",
    2633,
    2106,
    "아우디 TT 로드스터 8N. 미션 임파서블 2의 양산 전 프로토타입이 아닙니다.",
    "OWS Photography",
    "CC BY 4.0",
    CC_BY_40,
    "https://commons.wikimedia.org/wiki/File:Audi_TT_Roadster_(8N)_Washington_DC_Metro_Area,_USA.jpg",
  ),
  "triumph-speed-triple": img(
    "triumph-speed-triple.jpg",
    4416,
    2659,
    "2011년 트라이엄프 스피드 트리플 1050. 2000년 2편 촬영 바이크가 아닙니다.",
    "DeFacto",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:Triumph_Speed_Triple_1050_2011.jpg",
  ),
  "triumph-daytona": img(
    "triumph-daytona.jpg",
    1600,
    1200,
    "1999년형 트라이엄프 데이토나 955i. 미션 임파서블 2 촬영 바이크가 아닙니다.",
    "Daytonaman955",
    "Public domain",
    PD,
    "https://commons.wikimedia.org/wiki/File:Triumph_Daytona_955i_model_year_1999.jpg",
  ),
  "lamborghini-gallardo": img(
    "lamborghini-gallardo.jpg",
    1656,
    828,
    "람보르기니 가야르도. 미션 임파서블 3 촬영 차량이 아닙니다.",
    "IFCAR",
    "Public domain",
    PD,
    "https://commons.wikimedia.org/wiki/File:Lamborghini-Gallardo.jpg",
  ),
  "bmw-g310gs": img(
    "bmw-g310gs.jpg",
    5078,
    3381,
    "BMW G 310 GS. 데드 레코닝 촬영 바이크가 아닙니다.",
    "Wikisympathisant",
    "CC BY-SA 4.0",
    CC_BY_SA_40,
    "https://commons.wikimedia.org/wiki/File:BMW_G310_GS_2023-08.jpg",
  ),
  "honda-crf250": img(
    "honda-crf250.jpg",
    1024,
    768,
    "혼다 CRF250L 듀얼스포츠. 데드 레코닝 절벽 점프의 CRF 250과 같은 세부모델이라고 말하지 않습니다.",
    "Takoyaki",
    "CC BY-SA 3.0",
    CC_BY_SA_30,
    "https://commons.wikimedia.org/wiki/File:Honda_CRF250L.jpg",
  ),
};

export function otherVehicleImage(vehicle: {
  nameEn: string;
  carSlug?: string;
}): LicensedImage | undefined {
  if (vehicle.carSlug) return carImages[vehicle.carSlug];
  return undefined;
}

export const gadgetImages: Record<string, LicensedImage> = {
  a400m: img(
    "a400m.jpg",
    5793,
    4345,
    "2025년 에어 타투의 독일 공군 에어버스 A400M. 로그네이션 촬영기는 아닙니다.",
    "Julian Herzog",
    "CC BY 4.0",
    CC_BY_40,
    "https://commons.wikimedia.org/wiki/File:Luftwaffe_Airbus_A400M_54-21_Royal_International_Air_Tattoo_2025_02.jpg",
  ),
};

export function personImage(slug: string) {
  return personImages[slug];
}
