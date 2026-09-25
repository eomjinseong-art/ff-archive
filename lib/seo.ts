import type { Metadata } from "next";
import type { IconCar } from "@/data/cars";
import type { FilmCardData } from "@/data/films";
import type { FilmDetail } from "@/data/filmDetails";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "분노의 질주 아카이브. 2001년부터 2023년까지.",
} as const;

/** Short titles aimed at Korean queries. Each value is unique. */
const CAR_TITLES: Record<string, string> = {
  "supra-mk4": "분노의 질주 수프라",
  "charger-rt-1970": "분노의 질주 도미닉 차저",
  "eclipse-rs": "분노의 질주 이클립스",
  "rx7-fd": "분노의 질주 RX-7",
  "jetta-mk3": "분노의 질주 제타",
  "s2000-tran": "분노의 질주 트란 S2000",
  "s2000-suki": "분노의 질주 수키 S2000",
  "skyline-r34": "분노의 질주 스카이라인",
  "evo-7": "분노의 질주 에보 7",
  "eclipse-spyder": "분노의 질주 이클립스 스파이더",
  "yenko-camaro": "분노의 질주 옌코 카마로",
  "challenger-rt": "분노의 질주 챌린저",
  "monte-carlo": "분노의 질주 몬테카를로",
  "viper-srt10": "분노의 질주 바이퍼",
  "silvia-s15": "분노의 질주 실비아",
  "fairlady-z": "분노의 질주 페어레이디 Z",
  "evo-8": "분노의 질주 에보 8",
  "rx7-veilside": "분노의 질주 베일사이드 RX-7",
  "mustang-1967": "분노의 질주 1967 머스탱",
  "road-runner": "분노의 질주 로드 러너",
  "ford-gt40": "분노의 질주 GT40",
  "charger-2010": "분노의 질주 2010 차저",
  "gurkha": "분노의 질주 구르카",
  "flip-car": "분노의 질주 플립 카",
  "lykan-hypersport": "분노의 질주 라이칸",
  "koenigsegg-ccxr": "분노의 질주 코닉세그",
  "gtr-r35": "분노의 질주 GT-R",
  "civic-heist": "분노의 질주 시빅",
  "chevelle-ss-1970": "분노의 질주 셰벨",
  "fairlane-1956": "분노의 질주 페어레인",
  "impala-1961": "분노의 질주 임팔라",
  "gtx-1971": "분노의 질주 GTX",
  "charger-1967": "분노의 질주 1967 차저",
  "mustang-foxbody-1992": "분노의 질주 1992 머스탱",
  gallardo: "분노의 질주 가야르도",
};

export function canonicalUrl(path: string) {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(text: string, max = 150) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trim()}…`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const isHome = path === "/" || path === "";
  const documentTitle = isHome ? SITE_NAME : `${title} · ${SITE_NAME}`;
  const url = canonicalUrl(path);
  const text = clip(description);
  return {
    title: isHome ? { absolute: SITE_NAME } : title,
    description: text,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      siteName: SITE_NAME,
      title: documentTitle,
      description: text,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description: text,
      images: [OG_IMAGE.url],
    },
  };
}

export function carSeoTitle(car: Pick<IconCar, "slug" | "nameKo">) {
  return CAR_TITLES[car.slug] ?? `분노의 질주 ${car.nameKo}`;
}

export function carSeoDescription(car: Pick<IconCar, "nameKo" | "nameEn" | "filmTitleKo" | "oneLiner">) {
  return clip(`${car.nameKo} (${car.nameEn}). ${car.filmTitleKo}. ${car.oneLiner}`);
}

export function filmSeoTitle(film: Pick<FilmCardData, "titleKo" | "year">) {
  return `${film.titleKo} (${film.year})`;
}

export function filmSeoDescription(
  film: Pick<FilmCardData, "titleKo" | "year" | "directorKo">,
  detail: Pick<FilmDetail, "oneLiner">,
) {
  return clip(`${film.year}년 ${film.titleKo}. 감독 ${film.directorKo}. ${detail.oneLiner}`);
}

export function personSeoTitle(nameKo: string) {
  return `분노의 질주 ${nameKo}`;
}

export function personSeoDescription(kind: string, nameKo: string, nameEn: string, oneLiner: string) {
  return clip(`${kind} ${nameKo} (${nameEn}). ${oneLiner}`);
}

export function placeholderAlt(subject: string) {
  return `${subject}. 촬영 스틸이 아닌 아카이브 플레이스홀더입니다.`;
}

type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function itemListLd(name: string, path: string, items: { name: string; path: string }[]) {
  return {
    "@type": "ItemList",
    name,
    url: canonicalUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.path),
    })),
  };
}

export function websiteLd(description: string) {
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: canonicalUrl("/"),
    inLanguage: "ko",
    description,
  };
}

export function movieLd(
  film: FilmCardData,
  detail: Pick<FilmDetail, "oneLiner" | "runtime">,
) {
  const minutes = /^(\d+)/.exec(detail.runtime)?.[1];
  return {
    "@type": "Movie",
    name: film.titleKo,
    alternateName: film.titleEn,
    datePublished: String(film.year),
    ...(minutes ? { duration: `PT${minutes}M` } : {}),
    director: { "@type": "Person", name: film.directorKo },
    description: detail.oneLiner,
    url: canonicalUrl(`/films/${film.slug}`),
    inLanguage: "ko",
  };
}

/** Thing, not Product: this archive does not sell the car. */
export function carThingLd(car: IconCar) {
  return {
    "@type": "Thing",
    additionalType: "https://schema.org/Vehicle",
    name: car.nameKo,
    alternateName: car.nameEn,
    description: car.oneLiner,
    url: canonicalUrl(`/cars/${car.slug}`),
    brand: { "@type": "Brand", name: car.brandKo },
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function jsonLd(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
