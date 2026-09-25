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
        배신한 요원, 조직, 그리고 얼굴이 없는 엔티티. 펠프스와 크리거는 한 카드입니다.
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
