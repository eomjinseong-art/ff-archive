import type { Metadata } from "next";
import Link from "next/link";
import { PosterCard } from "@/components/PosterCard";
import { directors } from "@/data/directors";
import { portraitOrAtmosphere } from "@/data/licensedImages";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 감독",
  description:
    "분노의 질주 감독. 롭 코헨, 존 싱글턴, 저스틴 린, 제임스 완, F. 게리 그레이, 데이비드 리치, 루이 르테리에.",
  path: "/directors",
});

export default function DirectorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">감독</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        본편과 스핀오프의 감독 일곱 사람. 본편을 두 편 이상 맡은 사람은 저스틴 린뿐입니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {directors.map((director) => (
          <PosterCard
            key={director.slug}
            title={`${director.nameKo} (${director.nameEn})`}
            meta={`${director.nationalityKo} · ${director.years} · ${director.filmCount}편`}
            tone={director.posterTone}
            href={`/directors/${director.slug}`}
            image={portraitOrAtmosphere(director.image)}
          />
        ))}
      </div>
      <p className="mt-8 text-sm">
        <Link href="/films" className="text-gold">
          영화 타임라인
        </Link>
      </p>
    </div>
  );
}
