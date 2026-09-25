import type { GossipItem, Source } from "./types";
import { WIKI_SERIES, WIKI_TV, wiki } from "./sources";

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

export const issues: IssueArticle[] = [
  {
    slug: "tv-phelps",
    title: "영화의 짐 펠프스는 텔레비전의 그 사람인가",
    teaser: "같은 이름, 다른 배우, 그리고 배신. 1996년이 원작 팀장을 어떻게 가져왔는지.",
    status: "게시",
    excerpt: "텔레비전 펠프스는 피터 그레이브스입니다. 극장판은 존 보이트이고, 줄거리 안에서 배신자입니다.",
    sections: [
      {
        heading: "이름만 가져온 경우",
        paragraphs: [
          "1966년 시리즈의 팀장은 처음 댄 브리그스, 이후 짐 펠프스입니다. 펠프스는 피터 그레이브스가 맡았고, 1988년 리바이벌에서도 그 배우가 돌아옵니다.",
          "1996년 영화는 브루스 겔러의 시리즈에 기반한다고 작품 문서가 적습니다. 출연표의 짐 펠프스는 존 보이트입니다. 결말에서 그는 팀의 배신자입니다.",
        ],
      },
      {
        heading: "무엇을 단정하지 않는가",
        paragraphs: [
          "그레이브스가 출연을 거절했다는 일화는 자주 인용됩니다. 이 글은 그 거절의 인터뷰 원문을 확인하지 못한 채로 사실처럼 적지 않습니다.",
          "확인된 차이는 이름과 배우, 그리고 영화 줄거리의 배신입니다. 악당 칸과 요원 칸이 같은 인물을 나눠 둔 이유입니다.",
        ],
      },
    ],
    gossip: [{ label: "미확인", text: "거절 인터뷰의 정확한 문장은 이 페이지에 없습니다." }],
    related: [
      { href: "/origin", label: "원작" },
      { href: "/films/mission-impossible", label: "1996" },
      { href: "/villains/jim-phelps", label: "펠프스 · 크리거" },
    ],
    sources: [WIKI_TV, wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
  },
  {
    slug: "cruise-stunts",
    title: "크루즈가 했다는 말과, 케이블이 있었다는 말",
    teaser: "대역을 쓰지 않았다는 문장과, 안전을 지웠다는 문장을 같이 둡니다.",
    status: "게시",
    excerpt: "부르즈 할리파는 케이블이 있었습니다. A400M은 대역이 없었다고 위키백과가 적습니다.",
    sections: [
      {
        heading: "두 문장은 모순이 아닙니다",
        paragraphs: [
          "고스트 프로토콜 제작 단락은 크루즈가 외벽을 올랐고, 동시에 여러 케이블에 고정되어 있었다고 적습니다. 지운 것은 케이블입니다.",
          "로그네이션은 대역 없이 A400M 바깥에 있었다고 적습니다. 고도와 이착륙 횟수가 있습니다.",
          "폴아웃은 발목 부상으로 촬영이 밀렸다고 적습니다. 어느 샷에서 다쳤는지를 이 글이 새로 단정하지는 않습니다.",
        ],
      },
    ],
    related: [{ href: "/records", label: "스턴트 기록" }],
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol"),
      wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation"),
      wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout"),
    ],
  },
  {
    slug: "mcquarrie-continuity",
    title: "5편부터는 한 이야기인가",
    teaser: "신디케이트, 사도, 엔티티. 감독이 같아서가 아니라 인물이 이어져서.",
    status: "게시",
    excerpt: "맥쿼리의 네 편은 레인에서 엔티티로 이어집니다. 1편부터 4편은 그 줄에 억지로 묶지 않습니다.",
    sections: [
      {
        heading: "이어지는 것",
        paragraphs: [
          "레인은 로그네이션과 폴아웃에 있습니다. 일사도 로그네이션, 폴아웃, 데드 레코닝입니다. 엔티티와 가브리엘, 그레이스는 마지막 두 편입니다.",
          "1996년의 키트리지와 돈로가 후반에 돌아오는 것은 콜백입니다. 여덟 편이 한 편의 초고였다는 뜻은 아닙니다.",
        ],
      },
    ],
    related: [{ href: "/mcquarrie-era", label: "맥쿼리 시대" }],
    sources: [WIKI_SERIES],
  },
  {
    slug: "masks",
    title: "가면은 언제까지 통하는가",
    teaser: "3편이 제작을 보여주고, 이후 편은 검사로 구멍을 냅니다.",
    status: "게시",
    excerpt: "얼굴이 통하던 시대와, 걸음과 생체 정보가 막는 시대를 구분합니다.",
    sections: [
      {
        heading: "장치에서 한계로",
        paragraphs: [
          "3편은 가면을 만드는 기계를 보여 줍니다. 2편은 그 가면으로 신원을 바꿉니다.",
          "로그네이션은 걸음처럼, 얼굴 이외의 검사가 가면을 통과시키지 못하는 상황을 넣습니다. 만능 위장으로 적지 않습니다.",
        ],
      },
    ],
    related: [{ href: "/gadgets/latex-mask", label: "가면" }],
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III"), wiki("Mission:_Impossible_%E2%80%93_Rogue_Nation", "Mission: Impossible – Rogue Nation")],
  },
  {
    slug: "box-office",
    title: "명목 흥행과 예산",
    teaser: "시리즈 표의 월드와이드. 물가 보정은 하지 않습니다.",
    status: "게시",
    excerpt: "폴아웃이 표에서 가장 높고, 뒤의 두 편은 예산 대비 실망으로 서술됩니다.",
    sections: [
      {
        heading: "숫자 하나",
        paragraphs: [
          "위키백과 시리즈 표의 명목 월드와이드에서 가장 높은 편은 폴아웃, 791,657,398달러입니다. 합계는 4,741,543,902달러입니다.",
          "데드 레코닝과 파이널 레코닝 문서는 예산 대비 흥행을 실망으로 서술합니다. 그 평가를 이 아카이브의 문장으로 바꾸지 않고, 출처를 가리킵니다.",
        ],
      },
    ],
    related: [{ href: "/records", label: "기록 표" }],
    sources: [WIKI_SERIES],
  },
];

export function getIssue(slug: string) {
  return issues.find((issue) => issue.slug === slug);
}

export const filmIssueSlug: Record<string, string> = {
  "mission-impossible": "tv-phelps",
  "ghost-protocol": "cruise-stunts",
  "rogue-nation": "mcquarrie-continuity",
  fallout: "cruise-stunts",
  "dead-reckoning": "mcquarrie-continuity",
  "final-reckoning": "box-office",
};

export function liveIssueTeaser(text: string) {
  return text;
}
