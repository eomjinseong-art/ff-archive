import { agents } from "@/data/agents";
import { cars } from "@/data/cars";
import { directors } from "@/data/directors";
import { displayFilmTitle, films } from "@/data/films";
import { gadgets } from "@/data/gadgets";
import { issues } from "@/data/issues";
import { landmarks } from "@/data/landmarks";
import { origin } from "@/data/origin";
import { trips } from "@/data/trips";
import type { SearchHit } from "@/data/types";
import { villains } from "@/data/villains";
import { women } from "@/data/women";

export function buildSearchIndex(): SearchHit[] {
  const filmHits: SearchHit[] = films.map((film) => ({
    kind: "영화",
    href: `/films/${film.slug}`,
    title: displayFilmTitle(film),
    hint: `${film.year} · ${film.directorKo}`,
    keywords: `${film.titleEn} ${film.actorKo} ${film.actorEn}`,
  }));

  const carHits: SearchHit[] = cars.map((car) => ({
    kind: "차량",
    href: car.hasL2 ? `/cars/${car.slug}` : "/cars",
    title: `${car.nameKo} (${car.nameEn})`,
    hint: `${car.brandKo} · ${car.filmTitleKo}`,
    keywords: `${car.badges.join(" ")} ${car.oneLiner}`,
  }));

  const gadgetHits: SearchHit[] = gadgets.map((item) => ({
    kind: "가젯",
    href: item.hasL2 ? `/gadgets/${item.slug}` : "/gadgets",
    title: `${item.nameKo} (${item.nameEn})`,
    hint: `${item.brandKo} · ${item.filmTitleKo}`,
    keywords: item.badges.join(" "),
  }));

  const agentHits: SearchHit[] = agents.map((person) => ({
    kind: "인물",
    href: `/agents/${person.slug}`,
    title: `${person.nameKo} (${person.nameEn})`,
    hint: `${person.affiliation} · ${person.performerKo}`,
    keywords: `${person.performerEn} 요원 IMF`,
  }));

  const womanHits: SearchHit[] = women.map((person) => ({
    kind: "인물",
    href: `/women/${person.slug}`,
    title: `${person.nameKo} (${person.nameEn})`,
    hint: `${person.roleKind} · ${person.performerKo}`,
    keywords: `${person.performerEn} 여성`,
  }));

  const villainHits: SearchHit[] = villains.map((person) => ({
    kind: "악당",
    href: `/villains/${person.slug}`,
    title: `${person.nameKo} (${person.nameEn})`,
    hint: `${person.roleKind} · ${person.performerKo}`,
    keywords: `${person.performerEn} 악당 엔티티`,
  }));

  const directorHits: SearchHit[] = directors.map((director) => ({
    kind: "감독",
    href: `/directors/${director.slug}`,
    title: `${director.nameKo} (${director.nameEn})`,
    hint: `${director.years} · ${director.filmCount}편`,
    keywords: director.oneLiner,
  }));

  const issueHits: SearchHit[] = issues.map((issue) => ({
    kind: "이슈",
    href: `/issues/${issue.slug}`,
    title: issue.title,
    hint: issue.teaser,
    keywords: issue.excerpt,
  }));

  const landmarkHits: SearchHit[] = landmarks.map((place) => ({
    kind: "명소",
    href: `/films/${place.filmSlug}`,
    title: `${place.placeKo} (${place.placeEn})`,
    hint: `${place.city} · ${place.country}`,
    keywords: place.mapsQuery,
  }));

  const tripHits: SearchHit[] = trips.map((trip) => ({
    kind: "여행",
    href: `/trips#${trip.slug}`,
    title: `${trip.nameKo} (${trip.nameEn})`,
    hint: `${trip.city} · ${trip.country}`,
    keywords: trip.mapsQuery,
  }));

  return [
    ...filmHits,
    ...carHits,
    ...gadgetHits,
    ...agentHits,
    ...womanHits,
    ...villainHits,
    ...directorHits,
    ...issueHits,
    ...landmarkHits,
    ...tripHits,
    {
      kind: "원작",
      href: "/origin",
      title: `${origin.nameKo} (${origin.nameEn})`,
      hint: `1966 · 텔레비전`,
      keywords: "브루스 겔러 Bruce Geller 짐 펠프스 랄로 시프린",
    },
    {
      kind: "기록",
      href: "/records",
      title: "스턴트 기록",
      hint: "부르즈 할리파 · A400M · HALO",
      keywords: "흥행 박스오피스 복엽기 오토바이",
    },
    {
      kind: "인물",
      href: "/mcquarrie-era",
      title: "맥쿼리 시대",
      hint: "5편–8편",
      keywords: "Christopher McQuarrie 로그네이션 폴아웃 엔티티",
    },
    {
      kind: "영상",
      href: "/videos",
      title: "공식 영상",
      hint: "YouTube @MissionImpossible",
      keywords: "예고편 파라마운트",
    },
    {
      kind: "명소",
      href: "/map",
      title: "촬영지 지도",
      hint: "랜드마크 핀",
      keywords: "지도 map",
    },
  ];
}

export function searchArchive(query: string, index = buildSearchIndex()): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  return index
    .filter((item) => {
      const blob = `${item.title} ${item.hint} ${item.kind} ${item.keywords ?? ""}`.toLowerCase();
      return blob.includes(q);
    })
    .slice(0, 12);
}
