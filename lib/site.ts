export const SITE_NAME = "분노의 질주 아카이브";
export const SITE_TAGLINE =
  "2001년 《분노의 질주》부터 2023년 《라이드 오어 다이》까지";
export const SITE_SUB =
  "본편 10편과 스핀오프 《홉스&쇼》, 패밀리, 악당, 영화 속 차량, 감독, 스턴트를 모았습니다.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ff-archive.vercel.app";

/** Live 007 film archive. bond-archive.vercel.app is a different photo service. */
export const BOND_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_BOND_ARCHIVE_URL ??
  "https://bond-archive-two.vercel.app";

export const MI_ARCHIVE_URL =
  process.env.NEXT_PUBLIC_MI_ARCHIVE_URL ?? "https://mi-archive.vercel.app";

export const SISTER_SITE_URL =
  process.env.NEXT_PUBLIC_SISTER_SITE_URL ?? "https://car-parts-cpang.vercel.app";

/** American nameplate catalog. Model pages were checked for HTTP 200. */
export const USA_MOTORS_URL =
  process.env.NEXT_PUBLIC_USA_MOTORS_URL ?? "https://usa-motors.vercel.app";

export const BOND_ARCHIVE_LABEL = "007 본드 아카이브";
export const MI_ARCHIVE_LABEL = "미션 임파서블 아카이브";
export const USA_MOTORS_LABEL = "미국차 컬렉션";
export const AUTOPIX_LABEL = "오토픽스";
export const FF_CAR_CTA_LABEL = "이 차량 용품 보러 가기 · 오토픽스";

export const FAN_SITE_DISCLAIMER =
  "분노의 질주 아카이브는 영화를 좋아하는 팬이 만든 비공식 팬사이트입니다. 유니버설 픽처스 및 영화 제작사와 어떤 관계도 없으며, 영화 제목과 상표는 각 권리자의 것입니다. 차량 사진은 위키미디어 공용의 자유 이용 라이선스 사진이며, 각 사진의 출처와 라이선스를 표시합니다.";

export const NAV = [
  { href: "/", label: "홈" },
  { href: "/films", label: "영화" },
  { href: "/records", label: "기록" },
  { href: "/origin", label: "원작" },
  { href: "/directors", label: "감독" },
  { href: "/crew", label: "패밀리" },
  { href: "/lin-era", label: "린" },
  { href: "/women", label: "여성" },
  { href: "/villains", label: "악당" },
  { href: "/cars", label: "차량" },
  { href: "/gadgets", label: "장비" },
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
  url.searchParams.set("utm_source", "ff-archive");
  url.searchParams.set("utm_medium", opts?.medium ?? "header");
  url.searchParams.set("utm_campaign", opts?.campaign ?? "ff-car");
  return url.toString();
}

export function archiveNetworkUrl(
  base: string,
  path = "/",
  medium: "header" | "footer" | "home" | "car" = "header",
) {
  return withUtm(base, path, { medium, campaign: "archive-network" });
}

export function bondArchiveUrl(medium: "header" | "footer" | "home" | "car" = "header") {
  return archiveNetworkUrl(BOND_ARCHIVE_URL, "/", medium);
}

export function miArchiveUrl(medium: "header" | "footer" | "home" | "car" = "header") {
  return archiveNetworkUrl(MI_ARCHIVE_URL, "/", medium);
}

export function usaMotorsCarUrl(path: string) {
  return archiveNetworkUrl(USA_MOTORS_URL, path, "car");
}

export function sisterUrl(
  path = "/",
  opts?: { medium?: string; campaign?: string },
) {
  return withUtm(SISTER_SITE_URL, path, opts);
}

export function autopixUrl(medium: "header" | "footer" | "home" = "header") {
  return sisterUrl("/", { medium, campaign: "ff-car" });
}

export function ffCarCta(path = "/") {
  return sisterUrl(path, { medium: "cta", campaign: "ff-car" });
}

export function displayTitle(titleKo: string, titleEn: string) {
  return `${titleKo} (${titleEn})`;
}
