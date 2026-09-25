import type { MetadataRoute } from "next";
import { agents } from "@/data/agents";
import { cars } from "@/data/cars";
import { directors } from "@/data/directors";
import { films } from "@/data/films";
import { gadgets } from "@/data/gadgets";
import { guides } from "@/data/guides";
import { issues } from "@/data/issues";
import { SITE_URL } from "@/lib/site";
import { villains } from "@/data/villains";
import { women } from "@/data/women";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/films",
    "/records",
    "/origin",
    "/directors",
    "/agents",
    "/mcquarrie-era",
    "/women",
    "/villains",
    "/cars",
    "/gadgets",
    "/scenes",
    "/videos",
    "/locations",
    "/trips",
    "/map",
    "/quotes",
    "/issues",
    "/guide",
    "/series",
  ];

  const dynamicPaths = [
    ...films.map((film) => `/films/${film.slug}`),
    ...directors.map((director) => `/directors/${director.slug}`),
    ...agents.map((person) => `/agents/${person.slug}`),
    ...women.map((person) => `/women/${person.slug}`),
    ...villains.map((person) => `/villains/${person.slug}`),
    ...cars.filter((car) => car.hasL2).map((car) => `/cars/${car.slug}`),
    ...gadgets.filter((item) => item.hasL2).map((item) => `/gadgets/${item.slug}`),
    ...issues.map((issue) => `/issues/${issue.slug}`),
    ...guides.map((guide) => `/guide/${guide.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
