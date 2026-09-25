import type { GossipItem, Source } from "./types";
import { WIKI_SERIES, WIKI_SIX, WIKI_TOKYO, wiki } from "./sources";

export type IssueSection = { heading: string; paragraphs: string[] };

export type IssueArticle = {
  slug: string;
  title: string;
  teaser: string;
  status: "게시";
  excerpt: string;
  sections: IssueSection[];
  gossip?: GossipItem[];
  related: { href: string; label: string }[];
  sources: Source[];
};

const WIKI_F7 = wiki("Furious_7", "Furious 7");
const WIKI_2001 = wiki(
  "The_Fast_and_the_Furious_(2001_film)",
  "The Fast and the Furious (2001 film)",
);

export const issues: IssueArticle[] = [
  {
    slug: "tokyo-order",
    title: "도쿄 드리프트는 세 번째가 아닙니다",
    teaser: "2006년에 개봉했지만, 이야기 속에서는 더 맥시멈과 더 세븐 사이입니다.",
    status: "게시",
    excerpt: "한이 도쿄에서 죽기 때문에, 2009년부터 2013년까지의 본편이 그 앞을 보여 줍니다.",
    sections: [
      {
        heading: "개봉과 시점",
        paragraphs: [
          "도쿄 드리프트는 2006년 6월 16일 미국에서 개봉한 세 번째 극장판입니다. 시리즈 위키백과는 이야기 시점을 더 맥시멈(2013)과 더 세븐(2015) 사이로 적습니다.",
          "한 루가 그 편에서 죽습니다. 그래서 뒤에 만든 2009년 작품, 언리미티드, 더 맥시멈이 그 죽음 이전의 한을 보여 줍니다. 더 맥시멈 중간 크레딧이 도쿄의 사고와 만납니다.",
        ],
      },
      {
        heading: "무엇을 단정하지 않는가",
        paragraphs: [
          "홉스&쇼가 본편 시간표의 어디에 끼는지, 위키백과는 ‘더 익스트림 이후’라고만 적습니다. 더 얼티메이트와의 선후를 이 글이 메우지는 않습니다.",
          "《베터 럭 투모로우》가 한의 기원이라는 제작 설명은 도쿄 드리프트 문서에 있습니다. 그 영화는 본편 목록에 넣지 않습니다.",
        ],
      },
    ],
    related: [
      { href: "/films/tokyo-drift", label: "도쿄 드리프트" },
      { href: "/films/fast-and-furious-6", label: "더 맥시멈" },
      { href: "/guide/chronology", label: "연대기 가이드" },
    ],
    sources: [WIKI_TOKYO, WIKI_SIX, WIKI_SERIES],
  },
  {
    slug: "walker",
    title: "폴 워커와 더 세븐의 마무리",
    teaser: "촬영이 11월에 중단된 뒤, 브라이언의 결말은 은퇴로 다시 쓰였습니다.",
    status: "게시",
    excerpt: "형제 케일럽과 코디가 대역으로 섰고, Weta Digital이 모습을 재현했다고 위키백과가 적습니다.",
    sections: [
      {
        heading: "문서에 있는 사실",
        paragraphs: [
          "더 세븐 위키백과는 애틀랜타 촬영이 시작된 뒤 11월, 폴 워커가 교통사고로 사망해 촬영이 중단됐다고 적습니다. 2014년 3월 말 재개되어 7월에 끝났고, 형제 케일럽과 코디가 남은 장면의 대역으로 섰습니다.",
          "같은 제작 단락은 워커의 모습을 재현하기 위해 Weta Digital을 썼다고 적습니다. 줄거리 끝에서 팀은 브라이언이 가족과 함께 은퇴했다고 인정합니다. 사고의 세부, 추모, 유족의 말은 이 페이지에 옮기지 않습니다.",
        ],
      },
      {
        heading: "아카이브가 하지 않는 일",
        paragraphs: [
          "인물 칸은 브라이언 오코너를 설명합니다. 배우의 사생활을 홍보하거나 추측하지 않습니다.",
        ],
      },
    ],
    related: [
      { href: "/films/furious-7", label: "더 세븐" },
      { href: "/crew/brian-oconner", label: "브라이언" },
    ],
    sources: [WIKI_F7, WIKI_SERIES, WIKI_SIX],
  },
  {
    slug: "title-license",
    title: "1954년 영화에서 빌린 제목",
    teaser: "Racer X가 바탕이고, 제목은 로저 코먼에게 라이선스했습니다.",
    status: "게시",
    excerpt: "1998년 바이브 기사가 이야기이고, 1954년 《The Fast and the Furious》가 제목입니다.",
    sections: [
      {
        heading: "두 출처",
        paragraphs: [
          "시리즈 위키백과는 첫 작품의 바탕으로 켄 리가 1998년 5월 바이브에 쓴 「Racer X」를 적습니다. 극본 크레딧의 이야기 쪽은 게리 스콧 톰슨입니다.",
          "제목은 아메리칸 인터내셔널 픽처스의 1954년 영화에서 왔습니다. 닐 H. 모리츠가 로저 코먼에게 스톡 푸티지 사용권을 주고 제목을 라이선스했다고 제작 단락이 적습니다.",
        ],
      },
    ],
    related: [
      { href: "/origin", label: "원작" },
      { href: "/films/the-fast-and-the-furious", label: "2001" },
    ],
    sources: [WIKI_SERIES, WIKI_2001],
  },
  {
    slug: "box-office",
    title: "편마다의 명목 흥행",
    teaser: "시리즈 합계는 ‘70억 달러 이상’입니다. 편별 숫자는 각 정보 상자입니다.",
    status: "게시",
    excerpt: "언리미티드는 도입 6억 3,000만 달러와 본문 6억 2,610만 달러가 같이 있습니다.",
    sections: [
      {
        heading: "합계와 표",
        paragraphs: [
          "시리즈 위키백과 도입은 합산 흥행을 70억 달러 이상으로 적고, 유니버설의 가장 큰 프랜차이즈라고 합니다. 이 아카이브는 그 문장을 다시 더하지 않습니다.",
          "기록 칸의 편별 숫자는 각 작품 정보 상자입니다. 언리미티드만 도입의 6억 3,000만 달러와 박스오피스 단락의 6억 2,610만 달러가 다릅니다. 표에는 정보 상자 값을 두고, 각주를 답니다.",
        ],
      },
    ],
    related: [{ href: "/records", label: "기록 표" }],
    sources: [WIKI_SERIES, wiki("Fast_Five", "Fast Five")],
  },
];

export function getIssue(slug: string) {
  return issues.find((issue) => issue.slug === slug);
}

export const filmIssueSlug: Record<string, string> = {
  "the-fast-and-the-furious": "title-license",
  "tokyo-drift": "tokyo-order",
  "fast-and-furious-6": "tokyo-order",
  "furious-7": "walker",
  "fast-five": "box-office",
};

export function liveIssueTeaser(text: string) {
  return text;
}
