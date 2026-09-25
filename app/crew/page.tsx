import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PosterCard } from "@/components/PosterCard";
import { crew } from "@/data/crew";
import { personImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 등장인물",
  description:
    "분노의 질주 등장인물. 도미닉 토레토, 브라이언 오코너, 레티, 한, 홉스. 배역을 적고 배우를 홍보하지 않습니다.",
  path: "/crew",
});

export default function CrewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "분노의 질주 등장인물",
            "/crew",
            crew.map((person) => ({
              name: person.nameKo,
              path: `/crew/${person.slug}`,
            })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">분노의 질주 등장인물</h1>
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
