import type { Source } from "./types";
import { BMW_FALLOUT, imcdb } from "./sources";

export type OtherVehicle = {
  nameKo: string;
  nameEn: string;
  note: string;
  popularity: string;
  carSlug?: string;
  sources?: Source[];
};

const GHOST_MOVIE = imcdb(
  "m1229238",
  "Ghost Protocol vehicle list",
);

const FALLOUT_MOVIE = imcdb("m4912910", "Fallout vehicle list");

/**
 * Vehicles that are documented, but not promoted to a detail page.
 * Background cars and disputed generations stay out.
 */
const other: Record<string, OtherVehicle[]> = {
  "ghost-protocol": [
    {
      nameKo: "BMW 118i (F20)",
      nameEn: "BMW 118i (F20)",
      note: "IMCDb가 고스트 프로토콜의 BMW 118i F20을 짧은 등장으로 분류합니다. 헌트의 추격은 비전 이피션트다이내믹스와 6시리즈 컨버터블입니다. 배경으로만 잡힌 E90 3시리즈와 E39 5시리즈는 적지 않습니다.",
      popularity: "파트너 차량 옆의 짧은 등장입니다. 허브 상세 페이지는 없습니다.",
      sources: [GHOST_MOVIE],
    },
  ],
  fallout: [
    {
      nameKo: "BMW 7시리즈 세단",
      nameEn: "BMW 7 Series sedan",
      note: "파트너십 보도자료는 BMW 7시리즈 세단을 다른 BMW와 함께 적습니다. IMCDb 목록의 표기는 2017년 740Le [G12]입니다. 두 문장을 한 트림으로 합치지 않고, M5·R nineT·E28 상세와 분리합니다.",
      popularity: "보도자료에 이름이 있으나, 파리 추격의 주인공 차로는 적지 않습니다.",
      sources: [BMW_FALLOUT, FALLOUT_MOVIE],
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
