import type { Source } from "./types";

export function wiki(path: string, label: string): Source {
  return { label: `Wikipedia — ${label}`, href: `https://en.wikipedia.org/wiki/${path}` };
}

export const WIKI_SERIES = wiki(
  "Mission:_Impossible_(film_series)",
  "Mission: Impossible (film series)",
);

export const WIKI_TV = wiki(
  "Mission:_Impossible_(1966_TV_series)",
  "Mission: Impossible (1966 TV series)",
);

export const BMW_ROGUE = {
  label: "BMW Group — Rogue Nation partnership",
  href: "https://www.press.bmwgroup.com/global/article/detail/T0209809EN/high-speed-high-tech-high-excitement?language=en",
};

export const BMW_GHOST_PREMIERE = {
  label: "BMW Group — Ghost Protocol U.S. premiere",
  href: "https://www.press.bmwgroup.com/usa/article/detail/T0124066EN_US/bmw-stars-at-the-u-s-premiere-of-mission:-impossible-%E2%80%93-ghost-protocol-in-new-york-city?language=en_US",
};

export const BMW_GHOST_PARTNER = {
  label: "BMW Group — Ghost Protocol automotive partner",
  href: "https://www.press.bmwgroup.com/usa/article/detail/T0116838EN_US/bmw-is-back-in-hollywood-with-mission:-impossible-%E2%80%93-ghost-protocol?language=en_US",
};

export const BMW_FALLOUT = {
  label: "BMW Group — Fallout partnership",
  href: "https://www.press.bmwgroup.com/global/article/detail/T0281846EN/mission:-impossible-%E2%80%93-fallout?language=en",
};

export const BMW_WELT_FALLOUT = {
  label: "BMW Welt — Fallout exhibition",
  href: "https://www.press.bmwgroup.com/global/article/detail/T0284083EN/bmw-welt-and-%E2%80%9Cmission:-impossible-%E2%80%93-fallout%E2%80%9D?language=en",
};

export function imcdb(path: string, label: string): Source {
  return { label: `IMCDb — ${label}`, href: `https://www.imcdb.org/${path}.html` };
}
