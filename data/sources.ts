import type { Source } from "./types";

export function wiki(path: string, label: string): Source {
  return { label: `Wikipedia — ${label}`, href: `https://en.wikipedia.org/wiki/${path}` };
}

export function wikiKo(path: string, label: string): Source {
  return { label: `한국어 위키백과 — ${label}`, href: `https://ko.wikipedia.org/wiki/${path}` };
}

export const WIKI_SERIES = wiki(
  "Fast_%26_Furious",
  "Fast & Furious (franchise)",
);

export const WIKI_2001 = wiki(
  "The_Fast_and_the_Furious_(2001_film)",
  "The Fast and the Furious (2001 film)",
);

export const WIKI_2F2F = wiki("2_Fast_2_Furious", "2 Fast 2 Furious");

export const WIKI_TOKYO = wiki(
  "The_Fast_and_the_Furious:_Tokyo_Drift",
  "The Fast and the Furious: Tokyo Drift",
);

export const WIKI_FIVE = wiki("Fast_Five", "Fast Five");

export const WIKI_SIX = wiki("Fast_%26_Furious_6", "Fast & Furious 6");

export const WIKI_FATE = wiki("The_Fate_of_the_Furious", "The Fate of the Furious");

export const WIKI_F9 = wiki("F9_(film)", "F9 (film)");

export const WIKI_X = wiki("Fast_X", "Fast X");

export const WIKI_2009 = wiki(
  "Fast_%26_Furious_(2009_film)",
  "Fast & Furious (2009 film)",
);

export const WIKI_HOBBS = wiki("Hobbs_%26_Shaw", "Hobbs & Shaw");

export function imcdb(path: string, label: string): Source {
  return { label: `IMCDb — ${label}`, href: `https://www.imcdb.org/${path}` };
}
