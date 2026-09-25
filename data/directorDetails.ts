import type { Footnote, Source } from "./types";
import { WIKI_SERIES, wiki } from "./sources";

export type DirectorDetail = {
  slug: string;
  bio: string[];
  craft: string[];
  filmNotes: { slug: string; text: string }[];
  continuity: string[];
  related: { href: string; label: string }[];
  sources: Source[];
  footnotes: Footnote[];
};

const series = WIKI_SERIES;

export const directorDetails: Record<string, DirectorDetail> = {
  "rob-cohen": {
    slug: "rob-cohen",
    bio: [
      "2001년 《분노의 질주》의 감독입니다. 폴 워커와 《스컬스》로 일한 뒤, 닐 H. 모리츠의 액션 영화에 워커를 붙였다고 시리즈 위키백과 제작 단락이 적습니다.",
      "워커가 말한 꿈의 영화는 《데이즈 오브 썬더》와 《도니 브라스코》의 섞임이었고, 곧 켄 리의 1998년 바이브 기사 「Racer X」가 로스앤젤레스 잠입 이야기의 바탕이 됩니다.",
    ],
    craft: ["2편은 맡지 않습니다. XXX를 하게 되고, 그 영화의 주연이 빈 디젤입니다."],
    filmNotes: [{ slug: "the-fast-and-the-furious", text: "미국 개봉은 2001년 6월 22일입니다." }],
    continuity: ["제목은 1954년 로저 코먼 영화에서 라이선스했다고 같은 단락이 적습니다. 원작 칸에 있습니다."],
    related: [{ href: "/origin", label: "원작 · Racer X" }],
    sources: [series],
    footnotes: [{ n: 1, text: "개발 경위는 시리즈 위키백과 Production 단락입니다." }],
  },
  "john-singleton": {
    slug: "john-singleton",
    bio: [
      "2편의 감독입니다. 첫 편을 보고 자신이 왜 그 소재를 생각 못 했는지를 말했다고 2편 위키백과가 전합니다. 사우스 센트럴 로스앤젤레스의 거리 레이스를 이유로 듭니다.",
      "빈 디젤과 롭 코헨이 빠지면서 폴 워커 중심의 독립된 속편이 되고, 촬영지는 마이애미로 옮깁니다.",
    ],
    craft: ["타이리스 깁슨은 싱글턴의 《베이비 보이》로 이미 일한 배우입니다."],
    filmNotes: [{ slug: "2-fast-2-furious", text: "미국 개봉 2003년 6월 6일. 상영 시간 107분." }],
    continuity: ["돔이 없는 이유를 잇는 단편 《터보차지드 프렐류드》가 2003년 6월 3일에 나옵니다."],
    related: [{ href: "/films/2-fast-2-furious", label: "패스트 & 퓨리어스 2" }],
    sources: [wiki("2_Fast_2_Furious", "2 Fast 2 Furious"), series],
    footnotes: [{ n: 1, text: "감독 발언의 요지는 2편 위키백과 제작 단락입니다." }],
  },
  "justin-lin": {
    slug: "justin-lin",
    bio: [
      "본편 다섯 편의 감독입니다. 도쿄 드리프트, 2009년 더 오리지널, 언리미티드, 더 맥시멈, 더 얼티메이트입니다. 모리츠가 《베터 럭 투모로우》를 보고 도쿄 드리프트에 그를 앉혔다고 시리즈 문서가 적습니다.",
      "한 루는 그 영화에서 온 인물이고, 린과 성강이 같은 사람이라고 확인해 왔다고 도쿄 드리프트 문서가 적습니다. 시대 페이지에 다섯 편을 모아 둡니다.",
    ],
    craft: ["언리미티드의 금고와 더 맥시멈의 플립 카·수송기 시퀀스는 각 작품 위키백과 제작 단락에 숫자가 있습니다."],
    filmNotes: [
      { slug: "tokyo-drift", text: "프랜차이즈에서 미국 밖 로케이션을 본격적으로 연 편이라고 시리즈 문서가 적습니다." },
      { slug: "fast-five", text: "레이스 영화에서 습격 영화로 무게가 옮겨 간 분기입니다." },
    ],
    continuity: ["도쿄 드리프트의 시점을 뒤로 물린 것은 한이 3편에서 죽기 때문입니다. 이슈 글에 있습니다."],
    related: [{ href: "/lin-era", label: "린의 다섯 편" }],
    sources: [series, wiki("The_Fast_and_the_Furious:_Tokyo_Drift", "Tokyo Drift")],
    footnotes: [{ n: 1, text: "다섯 편의 연출 크레딧은 시리즈 위키백과 작품 표입니다." }],
  },
  "james-wan": {
    slug: "james-wan",
    bio: [
      "더 세븐의 감독입니다. 미국 개봉은 2015년 4월 3일, 시리즈 제작 표의 상영 시간은 137분입니다.",
      "폴 워커가 2013년 11월 교통사고로 숨진 뒤, 브라이언의 결말은 은퇴로 고쳐졌다고 더 맥시멈 위키백과가 다음 편을 설명하며 적습니다. 형제 케일럽과 코디가 대역으로 서고 디지털로 얼굴을 맞췄습니다.",
    ],
    craft: ["그 제작 경위는 이슈 글에 두고, 여기에는 감독 크레딧과 개봉만 겹쳐 적습니다."],
    filmNotes: [{ slug: "furious-7", text: "갓스 아이와 모세 자칸데가 시리즈 요약의 줄거리 축입니다." }],
    continuity: ["도쿄 드리프트 엔딩에 이어지는 편입니다."],
    related: [{ href: "/issues/walker", label: "이슈 · 폴 워커" }],
    sources: [series, wiki("Fast_%26_Furious_6", "Fast & Furious 6")],
    footnotes: [{ n: 1, text: "사망과 대역·CGI는 더 맥시멈 위키백과가 더 세븐을 설명할 때 적은 문장입니다." }],
  },
  "f-gary-gray": {
    slug: "f-gary-gray",
    bio: [
      "더 익스트림의 감독입니다. 미국 개봉 2017년 4월 14일. 시리즈 제작 표의 상영 시간은 136분입니다.",
      "줄거리는 사이퍼가 돔을 자기 편으로 끌어 팀을 적으로 만드는 이야기입니다. 도쿄 드리프트 이후 처음으로 폴 워커의 브라이언과 조더나 브루스터의 미아가 없습니다.",
    ],
    craft: ["편당 차종 목록은 확인한 요약에 없어 차량 페이지를 이 감독 전기로 채우지 않습니다."],
    filmNotes: [{ slug: "fate-of-the-furious", text: "다음 삼부작의 시작으로 더 얼티메이트, 라이드 오어 다이가 이어진다고 더 맥시멈 문서가 적습니다." }],
    continuity: ["브라이언의 부재는 2013년 이후의 제작 현실과 맞물립니다. 추측으로 각본 이유를 덧붙이지 않습니다."],
    related: [{ href: "/villains/cipher", label: "악당 · 사이퍼" }],
    sources: [series],
    footnotes: [{ n: 1, text: "개봉일과 줄거리는 시리즈 위키백과입니다." }],
  },
  "david-leitch": {
    slug: "david-leitch",
    bio: [
      "스핀오프 《분노의 질주: 홉스&쇼》의 감독입니다. 영어 제목은 Fast & Furious Presents: Hobbs & Shaw. 미국 개봉 2019년 8월 2일.",
      "한국어 위키백과는 데이비드 리치 감독, 상영 시간 136분, 대한민국 개봉 2019년 8월 14일로 적습니다. 영어 시리즈 제작 표의 상영 시간은 137분입니다. 두 숫자를 하나로 합치지 않습니다.",
    ],
    craft: ["본편 10편 합계 밖에 둡니다."],
    filmNotes: [{ slug: "hobbs-and-shaw", text: "홉스, 데커드, 해티가 브릭스턴 로어에 맞섭니다." }],
    continuity: ["속편 논의는 시리즈 문서의 향후 계획에 있고, 이 아카이브는 개봉작만 영화 목록에 넣습니다."],
    related: [{ href: "/films/hobbs-and-shaw", label: "홉스&쇼" }],
    sources: [series, wiki("Fast_%26_Furious", "franchise")],
    footnotes: [{ n: 1, text: "136분과 한국 개봉일은 한국어 위키백과 정보 상자, 137분은 영어 시리즈 제작 표입니다." }],
  },
  "louis-leterrier": {
    slug: "louis-leterrier",
    bio: [
      "라이드 오어 다이의 감독입니다. 미국 개봉 2023년 5월 19일. 시리즈 제작 표의 상영 시간은 141분입니다.",
      "단테 레예스가 아버지의 죽음과 재산을 이유로 패밀리를 쫓습니다. 시점은 더 얼티메이트 2년 뒤, 언리미티드 10년 뒤입니다.",
    ],
    craft: ["2023년 4월 19일 시리즈 문서는 그가 속편의 감독으로 발표됐다고 적습니다. 그 다음 편의 개봉 일정은 같은 문서가 여러 번 바뀐 것으로 적으므로, 여기에는 2026년 1월 기준의 제목 Fast Forever와 2028년 3월 17일 예정만 각주로 남깁니다."],
    filmNotes: [{ slug: "fast-x", text: "지젤의 생존과 홉스의 중간 크레딧 복귀가 시리즈 요약에 있습니다." }],
    continuity: ["미개봉 11편은 영화 목록에 넣지 않습니다."],
    related: [{ href: "/villains/dante-reyes", label: "악당 · 단테" }],
    sources: [series],
    footnotes: [{ n: 1, text: "Fast Forever의 제목과 2028년 3월 17일은 시리즈 위키백과 Future 단락입니다. 일정이 다시 바뀔 수 있습니다." }],
  },
};
