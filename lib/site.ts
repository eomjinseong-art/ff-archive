export const SITE_NAME = "미션 임파서블 아카이브";
export const SITE_TAGLINE =
  "1996년 《미션 임파서블》부터 2025년 《파이널 레코닝》까지";
export const SITE_SUB =
  "극장판 8편과 IMF 요원, 여성 캐릭터, 악당, 영화 속 차량, 가젯, 감독, 스턴트를 모았습니다.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mi-archive.vercel.app";

export const BOND_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_BOND_ARCHIVE_URL ??
  "https://bond-archive-two.vercel.app";

export const SISTER_SITE_URL =
  process.env.NEXT_PUBLIC_SISTER_SITE_URL ?? "https://car-parts-cpang.vercel.app";

export const BOND_ARCHIVE_LABEL = "본드 필름 아카이브";
export const AUTOPIX_LABEL = "오토픽스";
export const MI_CAR_CTA_LABEL = "이 차량 용품 보러 가기 · 오토픽스";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/films", label: "영화" },
  { href: "/records", label: "기록" },
  { href: "/origin", label: "원작" },
  { href: "/directors", label: "감독" },
  { href: "/agents", label: "요원" },
  { href: "/mcquarrie-era", label: "맥쿼리" },
  { href: "/women", label: "여성" },
  { href: "/villains", label: "악당" },
  { href: "/cars", label: "차량" },
  { href: "/gadgets", label: "가젯" },
  { href: "/scenes", label: "명장면" },
  { href: "/videos", label: "영상" },
  { href: "/locations", label: "명소" },
  { href: "/trips", label: "여행" },
  { href: "/map", label: "지도" },
  { href: "/quotes", label: "명대사" },
  { href: "/issues", label: "이슈" },
  { href: "/guide", label: "가이드" },
] as const;

function withUtm(
  base: string,
  path = "/",
  opts?: { medium?: string; campaign?: string },
) {
  const url = new URL(path, base);
  url.searchParams.set("utm_source", "mi-archive");
  url.searchParams.set("utm_medium", opts?.medium ?? "header");
  url.searchParams.set("utm_campaign", opts?.campaign ?? "sister-site");
  return url.toString();
}

export function bondArchiveUrl(medium: "header" | "footer" | "home" = "header") {
  return withUtm(BOND_ARCHIVE_URL, "/", {
    medium,
    campaign: "bond-archive",
  });
}

export function sisterUrl(
  path = "/",
  opts?: { medium?: string; campaign?: string },
) {
  return withUtm(SISTER_SITE_URL, path, opts);
}

export function autopixUrl(medium: "header" | "footer" | "home" = "header") {
  return sisterUrl("/", { medium, campaign: "mi-car" });
}

export function miCarCta(path = "/") {
  return sisterUrl(path, { medium: "cta", campaign: "mi-car" });
}

export function displayTitle(titleKo: string, titleEn: string) {
  return `${titleKo} (${titleEn})`;
}
