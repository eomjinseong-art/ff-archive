import type { Source } from "./types";
import { WIKI_FIVE, WIKI_SIX } from "./sources";

export type OtherVehicle = {
  nameKo: string;
  nameEn: string;
  note: string;
  popularity: string;
  carSlug?: string;
  sources?: Source[];
};

const other: Record<string, OtherVehicle[]> = {
  "fast-five": [
    {
      nameKo: "1972 데 토마소 판테라",
      nameEn: "1972 De Tomaso Pantera",
      note: "열차 습격용으로 싸게 복제할 수 있는 차로 골랐다고 제작 단락이 적습니다. 포드 GT40, 2007 콜벳과 한 문장에 있습니다.",
      popularity: "상세 페이지는 GT40에만 둡니다. 판테라는 복제 차로 적힌 이름입니다.",
      sources: [WIKI_FIVE],
    },
    {
      nameKo: "2007 콜벳 GS 로드스터",
      nameEn: "2007 Chevrolet Corvette GS Roadster",
      note: "같은 문장의 열차 습격 복제차입니다. 트림을 더 좁히지 않습니다.",
      popularity: "아이콘 상세로 올리지 않습니다.",
      sources: [WIKI_FIVE],
    },
  ],
  "fast-and-furious-6": [
    {
      nameKo: "닷지 차저",
      nameEn: "Dodge Charger",
      note: "안토노프 기수 쪽으로 공압 대포에 실려 쏘인 차입니다. 위키백과는 연식을 적지 않습니다. 1970 Charger R/T와 같은 차로 보지 않습니다.",
      popularity: "돔 아버지의 차와 분리합니다.",
      sources: [WIKI_SIX],
    },
  ],
};

export function otherVehiclesForFilm(filmSlug: string): OtherVehicle[] {
  return other[filmSlug] ?? [];
}

export type OtherVehicleListing = OtherVehicle & { filmSlug: string };

export function allOtherVehicles(): OtherVehicleListing[] {
  return Object.entries(other).flatMap(([filmSlug, rows]) =>
    rows.map((vehicle) => ({ ...vehicle, filmSlug })),
  );
}
