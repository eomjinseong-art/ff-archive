"use client";

import { useMemo, useState } from "react";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { PosterCard } from "@/components/PosterCard";
import { personImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { women } from "@/data/women";
import { personLookQuery } from "@/lib/googleImages";

const FILTERS = ["전체", "요원", "협력", "조연"] as const;

export function WomenHub() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("전체");
  const visible = useMemo(
    () => women.filter((person) => filter === "전체" || person.roleKind === filter),
    [filter],
  );

  return (
    <div>
      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full border px-3 py-1 text-xs ${
              filter === item
                ? "border-gold bg-gold/10 text-gold"
                : "border-line text-muted hover:text-paper"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">{visible.length}명</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((person) => {
          const image = personImage(person.slug);
          return (
            <div key={person.slug}>
              <PosterCard
                title={`${person.nameKo} (${person.nameEn})`}
                meta={`${person.roleKind} · ${person.performerKo} · ${person.years}`}
                tone={person.posterTone}
                image={portraitOrAtmosphere(image)}
                overlayOnImage={!image}
                href={`/women/${person.slug}`}
              />
              {!image ? (
                <div className="px-1">
                  <ImageSearchLink query={personLookQuery(person)} label="초상 검색" />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
