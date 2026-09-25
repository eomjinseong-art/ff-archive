import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveProse } from "@/components/ArchiveProse";
import { CreditedMedia } from "@/components/CreditedMedia";
import { Fn, Sources } from "@/components/Sources";
import { origin, originDetail } from "@/data/origin";
import { atmospherePlaceholder } from "@/data/licensedImages";

export const metadata: Metadata = {
  title: `${origin.nameKo} (${origin.nameEn})`,
};

export default function OriginPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={atmospherePlaceholder}
        tone={origin.posterTone}
        alt={`${origin.nameKo} (${origin.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={{ title: origin.nameKo, meta: "1998 · Vibe" }}
      />
      <p className="mt-4 text-sm text-gold">원작 · {origin.years}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {origin.nameKo} ({origin.nameEn})
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {origin.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">시리즈</h2>
        <ArchiveProse paragraphs={originDetail.bio} footnote={{ index: 0, n: 1 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">기사와 제목</h2>
        <ArchiveProse paragraphs={originDetail.series} footnote={{ index: 0, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">단편과 애니메이션</h2>
        <ArchiveProse paragraphs={originDetail.revival} footnote={{ index: 0, n: 3 }} />
      </section>

      <p className="mt-8 text-sm">
        <Link href="/films/the-fast-and-the-furious" className="text-gold">
          2001년 극장판
        </Link>
        {" · "}
        <Link href="/issues/title-license" className="text-gold">
          제목 이슈
        </Link>
      </p>

      <Sources sources={originDetail.sources} footnotes={originDetail.footnotes} />
    </article>
  );
}
