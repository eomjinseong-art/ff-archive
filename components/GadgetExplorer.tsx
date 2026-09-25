"use client";

import { useMemo, useState } from "react";
import { PosterCard } from "@/components/PosterCard";
import { gadgets, type GadgetBadge } from "@/data/gadgets";
import { gadgetImages } from "@/data/licensedImages";

const FILTERS = ["전체", "장비", "스턴트"] as const;

export function GadgetExplorer() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("전체");
  const visible = useMemo(() => {
    if (filter === "전체") return gadgets;
    return gadgets.filter((item) => item.badges.includes(filter as GadgetBadge));
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
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
      <p className="mt-3 text-xs text-muted">{visible.length}개</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <PosterCard
            key={item.slug}
            title={`${item.nameKo} (${item.nameEn})`}
            meta={`${item.badges.join(" · ")} · ${item.filmTitleKo}`}
            tone={item.posterTone}
            image={gadgetImages[item.slug]}
            aspect="video"
            overlayOnImage={!gadgetImages[item.slug]}
            href={item.hasL2 ? `/gadgets/${item.slug}` : undefined}
          />
        ))}
      </div>
    </div>
  );
}
