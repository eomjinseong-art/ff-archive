import type { Metadata } from "next";
import { PosterCard } from "@/components/PosterCard";
import { atmospherePlaceholder } from "@/data/licensedImages";
import { villains } from "@/data/villains";

export const metadata: Metadata = { title: "악당" };

export default function VillainsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">악당</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        편마다의 상대입니다. 데커드는 패밀리 칸에도 있고, 악당 칸에는 더 세븐의 적대 역할만 둡니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {villains.map((person) => (
          <PosterCard
            key={person.slug}
            title={`${person.nameKo} (${person.nameEn})`}
            meta={`${person.roleKind} · ${person.performerKo} · ${person.years}`}
            tone={person.posterTone}
            image={atmospherePlaceholder}
            overlayOnImage
            href={`/villains/${person.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
