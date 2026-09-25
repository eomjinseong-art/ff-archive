export type RelatedLink = { href: string; label: string };

/** Drop chronological neighbors (and leftover 이전/다음 labels) from the quieter related list. */
export function secondaryRelated(
  items: RelatedLink[],
  neighbors: { prev?: { slug: string }; next?: { slug: string } },
  extraDrop: string[] = [],
): RelatedLink[] {
  const neighborHrefs = new Set(
    [neighbors.prev?.slug, neighbors.next?.slug]
      .filter((slug): slug is string => Boolean(slug))
      .map((slug) => `/films/${slug}`),
  );
  for (const href of extraDrop) neighborHrefs.add(href);
  const seen = new Set<string>();
  return items.filter((item) => {
    if (neighborHrefs.has(item.href)) return false;
    if (/^(이전|다음)\s*·/.test(item.label)) return false;
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}
