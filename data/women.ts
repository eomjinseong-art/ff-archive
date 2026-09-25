import type { ArchivePerson } from "./crew";
import { getCrew } from "./crew";
import { WIKI_2F2F, WIKI_SERIES, wikiKo } from "./sources";

function fromCrew(slug: string, roleKind: string, oneLiner: string): ArchivePerson {
  const person = getCrew(slug);
  if (!person) throw new Error(slug);
  return { ...person, roleKind, oneLiner, featuredOnHome: true };
}

export const women: ArchivePerson[] = [
  fromCrew("letty-ortiz", "패밀리", "돔의 연인 레티. 죽음으로 처리됐다가 기억 없이 돌아옵니다."),
  fromCrew("mia-toretto", "패밀리", "돔의 동생. 더 익스트림 줄거리에는 없고, 더 얼티메이트와 라이드 오어 다이에 있습니다."),
  fromCrew("gisele-yashar", "패밀리", "지젤. 더 맥시멈에서 죽은 듯 보이고 라이드 오어 다이에서 살아 있습니다."),
  fromCrew("ramsey", "해커", "메건 램지. 더 세븐에서 갓스 아이를 만든 뒤, 더 익스트림과 이후 본편에도 있습니다."),
  fromCrew("elena-neves", "협력", "리우 경찰. 더 익스트림에서 사이퍼가 엘레나와 돔의 아들을 인질로 잡습니다."),
  {
    slug: "hattie-shaw",
    nameKo: "해티 쇼",
    nameEn: "Hattie Shaw",
    performerKo: "버네사 커비",
    performerEn: "Vanessa Kirby",
    nationalityKo: "영국",
    nationalityEn: "United Kingdom",
    affiliation: "쇼",
    years: "2019",
    filmCount: 1,
    filmSlugs: ["hobbs-and-shaw"],
    roleKind: "협력",
    featuredOnHome: true,
    oneLiner: "데커드의 동생. 스핀오프에서 홉스·데커드와 브릭스턴에 맞섭니다.",
    posterTone: "linear-gradient(165deg,#2a2418 0%,#0B0D10 50%,#C6A75E33 100%)",
    bio: [
      "해티 쇼는 홉스&쇼의 버네사 커비입니다. 한국어 위키백과 출연표는 헤티 쇼로 적습니다. 시리즈 문서는 홉스와 데커드가 데커드의 동생 해티와 함께 브릭스턴 로어에 맞선다고 요약합니다.",
    ],
    notes: ["본편 패밀리 명단에는 넣지 않습니다. 스핀오프의 인물입니다."],
    filmNotes: [{ slug: "hobbs-and-shaw", text: "어머니 막달레나 쇼는 헬렌 미렌이라고 한국어 위키백과 출연표가 적습니다. 별도 문서는 두지 않습니다." }],
    sources: [
      WIKI_SERIES,
      wikiKo("%EB%B6%84%EB%85%B8%EC%9D%98_%EC%A7%88%EC%A3%BC:_%ED%99%89%EC%8A%A4%26%EC%87%BC", "분노의 질주: 홉스&쇼"),
    ],
    footnotes: [{ n: 1, text: "출연은 한국어 위키백과, 줄거리 위치는 영어 시리즈 문서입니다." }],
  },
  {
    slug: "suki",
    nameKo: "수키",
    nameEn: "Suki",
    performerKo: "데번 아오키",
    performerEn: "Devon Aoki",
    nationalityKo: "미국",
    nationalityEn: "United States",
    affiliation: "마이애미",
    years: "2003",
    filmCount: 1,
    filmSlugs: ["2-fast-2-furious"],
    roleKind: "레이서",
    featuredOnHome: false,
    oneLiner: "2편에서 이름이 있는 유일한 여성 레이서. 분홍 2001 Honda S2000을 탑니다.",
    posterTone: "linear-gradient(165deg,#3a2018 0%,#0B0D10 50%,#c65e3222 100%)",
    bio: [
      "수키는 2편의 데번 아오키입니다. 브라이언, 테지, 지미의 친구이고, 팀이 여성으로만 이뤄진 레이서입니다. 평소에 핫핑크 2001 Honda S2000 AP1을 몬다고 위키백과가 적습니다.",
      "촬영 때 면허가 없었고 현장에서 운전을 배웠다고 같은 제작 단락이 적습니다. 인물 설명은 그 일화보다 화면의 위치에 둡니다.",
    ],
    notes: ["패밀리 고정 명단에는 넣지 않습니다. 2편의 레이서입니다."],
    filmNotes: [{ slug: "2-fast-2-furious", text: "오프닝 레이스에 있고, 나중에 GPS가 붙은 미쓰비시를 몰며 경찰을 끌어냅니다." }],
    sources: [WIKI_2F2F],
    footnotes: [{ n: 1, text: "차종과 면허 일화는 2편 위키백과 출연·제작 단락입니다." }],
  },
];

export function getWoman(slug: string) {
  return women.find((person) => person.slug === slug);
}

export function womanRoleKind(person: ArchivePerson) {
  return person.roleKind;
}
