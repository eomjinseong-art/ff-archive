import type { ArchivePerson } from "./agents";
import { getAgent } from "./agents";
import { wiki } from "./sources";

function fromAgent(slug: string, roleKind: string, oneLiner: string): ArchivePerson {
  const agent = getAgent(slug);
  if (!agent) throw new Error(slug);
  return { ...agent, roleKind, oneLiner, featuredOnHome: true };
}

export const women: ArchivePerson[] = [
  fromAgent(
    "ilsa-faust",
    "요원",
    "MI6의 일사 파우스트. 로그네이션부터 데드 레코닝까지.",
  ),
  {
    slug: "white-widow",
    nameKo: "화이트 위도우",
    nameEn: "Alanna Mitsopolis",
    performerKo: "바네사 커비",
    performerEn: "Vanessa Kirby",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    affiliation: "중개인",
    years: "2018–2023",
    filmCount: 2,
    filmSlugs: ["fallout", "dead-reckoning"],
    roleKind: "협력",
    featuredOnHome: true,
    oneLiner: "알라나 미트소폴리스. 무기 중개인이며, 화이트 위도우로 불립니다.",
    posterTone: "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: [
      "폴아웃에서 헌트 팀이 플루토늄을 쫓다 만나는 중개인입니다. 바네사 커비가 맡았습니다. 파이널 레코닝 위키백과는 1996년의 맥스를 맥스 미트소폴리스로 적고, 알라나를 그 계열의 인물로 아카이브 영상에 올립니다.",
    ],
    notes: ["IMF 요원이 아닙니다. 거래의 상대입니다."],
    filmNotes: [
      { slug: "fallout", text: "파리의 클럽에서 코어 거래를 엽니다." },
      { slug: "dead-reckoning", text: "열쇠를 둘러싼 파티와 추격에 다시 나옵니다." },
    ],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Fallout", "Mission: Impossible – Fallout")],
    footnotes: [
      { n: 1, text: "이름 알라나 미트소폴리스와 화이트 위도우는 폴아웃 위키백과 줄거리의 표기입니다." },
    ],
  },
  fromAgent("grace", "협력", "도둑 그레이스. 데드 레코닝과 파이널 레코닝."),
  {
    slug: "paris",
    nameKo: "패리스",
    nameEn: "Paris",
    performerKo: "폼 클레멘티에프",
    performerEn: "Pom Klementieff",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    affiliation: "암살자",
    years: "2023–2025",
    filmCount: 2,
    filmSlugs: ["dead-reckoning", "final-reckoning"],
    roleKind: "협력",
    featuredOnHome: true,
    oneLiner: "가브리엘 쪽 암살자로 나왔다가, 이후 편에서 팀과 움직입니다.",
    posterTone: "linear-gradient(165deg,#201820 0%,#0B0D10 50%,#8a303022 100%)",
    bio: [
      "패리스는 데드 레코닝의 폼 클레멘티에프입니다. 파이널 레코닝 출연표에도 있습니다. 성씨는 크레딧에 없습니다.",
    ],
    notes: ["악당으로 시작했다가 자리가 바뀌므로, 여성 칸에 두고 가브리엘 문서와 잇습니다."],
    filmNotes: [
      { slug: "dead-reckoning", text: "로마 추격에서 헌트 쪽을 쫓습니다." },
      { slug: "final-reckoning", text: "위키백과 줄거리는 그레이스, 벤지, 패리스, 드가가 함께 움직인다고 적습니다." },
    ],
    sources: [
      wiki("Mission:_Impossible_%E2%80%93_Dead_Reckoning_Part_One", "Mission: Impossible – Dead Reckoning Part One"),
      wiki("Mission:_Impossible_%E2%80%93_The_Final_Reckoning", "Mission: Impossible – The Final Reckoning"),
    ],
    footnotes: [{ n: 1, text: "배우는 두 작품 위키백과 출연표의 폼 클레멘티에프입니다." }],
  },
  {
    slug: "nyah-nordoff-hall",
    nameKo: "니아 노도프-홀",
    nameEn: "Nyah Nordoff-Hall",
    performerKo: "탠디 뉴턴",
    performerEn: "Thandie Newton",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    affiliation: "도둑",
    years: "2000",
    filmCount: 1,
    filmSlugs: ["mission-impossible-2"],
    roleKind: "협력",
    featuredOnHome: true,
    oneLiner: "2편의 도둑. 당시 크레딧은 탠디 뉴턴입니다.",
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
    bio: [
      "니아 노도프-홀은 미션 임파서블 2의 인물입니다. 파라마운트 예고 소개는 헌트가 니아 홀과 손잡고 숀 앰브로스를 막는다 고 적습니다. 당시 화면 크레딧의 배우 이름은 탠디 뉴턴입니다.",
    ],
    notes: ["이후 배우가 이름을 탠디웨 뉴턴으로 표기한 일과, 2000년 크레딧을 구분합니다."],
    filmNotes: [
      { slug: "mission-impossible-2", text: "앰브로스의 옛 연인이자, 키메라 바이러스 작전에 끌려 들어갑니다." },
    ],
    sources: [
      wiki("Mission:_Impossible_2", "Mission: Impossible 2"),
      {
        label: "Paramount Movies — Mission: Impossible II trailer",
        href: "https://www.youtube.com/watch?v=vIpqpRuGrq4",
      },
    ],
    footnotes: [
      { n: 1, text: "예고 설명의 표기는 Nyah Hall입니다. 위키백과 출연표의 전체 이름은 Nyah Nordoff-Hall, 배우는 Thandie Newton입니다." },
    ],
  },
  {
    slug: "julia-meade",
    nameKo: "줄리아 미드",
    nameEn: "Julia Meade",
    performerKo: "미셸 모나한",
    performerEn: "Michelle Monaghan",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "민간인",
    years: "2006–2018",
    filmCount: 3,
    filmSlugs: ["mission-impossible-3", "ghost-protocol", "fallout"],
    roleKind: "조연",
    featuredOnHome: true,
    oneLiner: "헌트의 아내. 간호사로 3편에 들어오고, 폴아웃에서 다시 만납니다.",
    posterTone: "linear-gradient(165deg,#1a2830 0%,#0B0D10 50%,#c6a75e22 100%)",
    bio: [
      "줄리아 미드는 미션 임파서블 3의 미셸 모나한입니다. 헌트와 결혼한 민간인이고, 데이비언의 협박이 이 편을 개인사로 당깁니다.",
      "폴아웃 줄거리는 카슈미르의 의료팀에서 다시 만난다고 적습니다. 파이널 레코닝은 아카이브 영상으로만 이름을 올립니다.",
    ],
    notes: ["요원이 아닙니다."],
    filmNotes: [
      { slug: "mission-impossible-3", text: "결혼식과 납치가 이 편의 감정선입니다." },
      { slug: "fallout", text: "폭탄 해체 장면에서 루터와 함께 있습니다. 스포일러입니다." },
    ],
    sources: [wiki("Mission:_Impossible_III", "Mission: Impossible III")],
    footnotes: [{ n: 1, text: "폴아웃 귀환은 그 작품 위키백과 줄거리를 따릅니다." }],
  },
  {
    slug: "claire-phelps",
    nameKo: "클레어 펠프스",
    nameEn: "Claire Phelps",
    performerKo: "에마뉘엘 베아르",
    performerEn: "Emmanuelle Béart",
    nationalityKo: "프랑스",
    nationalityEn: "France",
    affiliation: "IMF",
    years: "1996",
    filmCount: 1,
    filmSlugs: ["mission-impossible"],
    roleKind: "조연",
    featuredOnHome: true,
    oneLiner: "1996년 팀의 클레어. 짐 펠프스의 아내입니다.",
    posterTone: "linear-gradient(165deg,#241820 0%,#0B0D10 50%,#8a6ac622 100%)",
    bio: [
      "클레어 펠프스는 1996년 작품의 에마뉘엘 베아르입니다. 프라하 작전에서 죽은 것으로 보였다가 헌트 앞에 다시 나타납니다. 결말의 위치는 스포일러입니다.",
    ],
    notes: ["파이널 레코닝 위키백과는 아카이브 영상 명단에 클레어를 올립니다."],
    filmNotes: [
      { slug: "mission-impossible", text: "팀 전멸 이후 헌트와 재회합니다. 펠프스와의 관계는 결말과 묶입니다." },
    ],
    sources: [wiki("Mission:_Impossible_(film)", "Mission: Impossible (1996 film)")],
    footnotes: [{ n: 1, text: "출연은 1996년 작품 위키백과 정보 상자의 에마뉘엘 베아르입니다." }],
  },
  {
    slug: "jane-carter",
    nameKo: "제인 카터",
    nameEn: "Jane Carter",
    performerKo: "폴라 패튼",
    performerEn: "Paula Patton",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "IMF",
    years: "2011",
    filmCount: 1,
    filmSlugs: ["ghost-protocol"],
    roleKind: "요원",
    featuredOnHome: true,
    oneLiner: "고스트 프로토콜의 IMF 현장 요원.",
    posterTone: "linear-gradient(165deg,#3a3418 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: [
      "제인 카터는 고스트 프로토콜의 폴라 패튼입니다. 크렘린 이후 부인된 팀에서 헌트, 벤지, 브랜트와 움직입니다. 위키백과는 두바이에서 스턴트 대역 없이 싸웠다고 제작 단락에 적습니다.",
    ],
    notes: ["이 편만 출연합니다."],
    filmNotes: [
      { slug: "ghost-protocol", text: "부르즈 할리파의 위장 회의에서 모로 역을 맡습니다." },
    ],
    sources: [wiki("Mission:_Impossible_%E2%80%93_Ghost_Protocol", "Mission: Impossible – Ghost Protocol")],
    footnotes: [
      { n: 1, text: "대역을 쓰지 않았다는 문장은 고스트 프로토콜 위키백과 제작 단락입니다. 레아 세이두와 함께 적혀 있습니다." },
    ],
  },
];

export function getWoman(slug: string) {
  return women.find((person) => person.slug === slug);
}

export function womanRoleKind(person: ArchivePerson) {
  return person.roleKind;
}
