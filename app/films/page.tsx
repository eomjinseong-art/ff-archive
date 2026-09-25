import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PosterCard } from "@/components/PosterCard";
import { ORIGIN_HREF } from "@/data/origin";
import { displayFilmTitle, films, filmsByDirector } from "@/data/films";
import { atmospherePlaceholder, filmImages } from "@/data/licensedImages";
import { SERIES_FRAMING, SERIES_FRAMING_NOTE, SERIES_TOTAL, SERIES_WITH_SPINOFF } from "@/data/series";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 시리즈",
  description:
    "분노의 질주 시리즈 본편 10편과 스핀오프 홉스&쇼. 개봉 연도, 감독, 한국어 제목과 순서 안내.",
  path: "/films",
});

export default function FilmsPage() {
  const byDirector = filmsByDirector();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "분노의 질주 시리즈",
            "/films",
            films.filter((film) => film.hasDetail).map((film) => ({
              name: `${film.titleKo} (${film.year})`,
              path: `/films/${film.slug}`,
            })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">분노의 질주 시리즈</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-paper">{SERIES_FRAMING}</p>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{SERIES_FRAMING_NOTE}</p>
      <p className="mt-3 text-sm text-muted">
        본편 {SERIES_TOTAL}편 · 스핀오프 포함 {SERIES_WITH_SPINOFF}편 ·{" "}
        <Link href={ORIGIN_HREF} className="text-gold hover:underline">
          원작 Racer X
        </Link>
        {" · "}
        <Link href="/guide/order" className="text-gold hover:underline">
          분노의 질주 순서
        </Link>
        {" · "}
        <Link href="/cars" className="text-gold hover:underline">
          차 종류
        </Link>
      </p>

      <div className="mt-10 space-y-10">
        {byDirector.map((group) => (
          <section key={group.directorSlug}>
            <div className="mb-4 flex items-end justify-between gap-3">
              <h2 className="font-serif text-xl text-paper">
                {group.directorKo} ({group.directorEn})
                <span className="ml-2 text-base text-muted">{group.films.length}편</span>
              </h2>
              <Link href={`/directors/${group.directorSlug}`} className="text-sm text-muted hover:text-gold">
                감독 페이지
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.films.map((film) => (
                <PosterCard
                  key={film.slug}
                  title={displayFilmTitle(film)}
                  meta={`${film.year} · ${film.directorKo}`}
                  tone={film.posterTone}
                  href={`/films/${film.slug}`}
                  image={filmImages[film.slug] ?? atmospherePlaceholder}
                  overlayOnImage={!filmImages[film.slug]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
