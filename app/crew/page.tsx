import type { Metadata } from "next";
import Link from "next/link";
import { PosterCard } from "@/components/PosterCard";
import { crew } from "@/data/crew";
import { personImage, portraitOrAtmosphere } from "@/data/licensedImages";

export const metadata: Metadata = { title: "패밀리" };

export default function CrewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">패밀리</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        돔의 사람들과, 그 옆에 선 홉스·데커드. 데커드는 악당 칸에도 있습니다. 배우는 배역을 알리는 데만 적습니다.
      </p>
      <p className="mt-4">
        <Link href="/lin-era" className="inline-flex rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10">
          린의 다섯 편
        </Link>
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {crew.map((person) => {
          const image = personImage(person.slug);
          return (
            <PosterCard
              key={person.slug}
              title={`${person.nameKo} (${person.nameEn})`}
              meta={`${person.affiliation} · ${person.performerKo} · ${person.filmCount}편`}
              tone={person.posterTone}
              image={portraitOrAtmosphere(image)}
              overlayOnImage={!image}
              href={`/crew/${person.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
}
