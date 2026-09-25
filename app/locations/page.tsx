import type { Metadata } from "next";
import Link from "next/link";
import { LandmarkList } from "@/components/PlaceLists";
import { films, displayFilmTitle, getFilm } from "@/data/films";
import { landmarksByCountry, landmarksForFilm } from "@/data/landmarks";

export const metadata: Metadata = {
  title: "명소",
};

export default function LocationsPage() {
  const byCountry = landmarksByCountry();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">영화 속 명소</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        극장판 8편의 촬영지와 화면의 랜드마크입니다.{" "}
        <Link href="/map" className="text-gold hover:underline">
          세계 지도
        </Link>
        {" · "}
        <Link href="/trips" className="text-gold hover:underline">
          촬영지 여행 코스
        </Link>
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">작품별</h2>
        <div className="mt-4 space-y-10">
          {films.map((film) => {
            const items = landmarksForFilm(film.slug);
            if (items.length === 0) return null;
            return (
              <div key={film.slug} id={film.slug} className="scroll-mt-24">
                <h3 className="font-serif text-lg text-paper">
                  <Link href={`/films/${film.slug}`} className="hover:text-gold">
                    {displayFilmTitle(film)}
                  </Link>
                </h3>
                <LandmarkList items={items} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-gold">도시·국가</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {byCountry.map(([country, items]) => {
            const filmSlugs = [...new Set(items.map((place) => place.filmSlug))];
            return (
              <article key={country} className="rounded-lg border border-line p-4">
                <h3 className="font-serif text-paper">{country}</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted">
                  {items.slice(0, 8).map((place) => (
                    <li key={place.slug}>
                      <Link
                        href={`/films/${place.filmSlug}`}
                        className="hover:text-gold"
                      >
                        {place.placeKo}
                      </Link>
                      {" · "}
                      {place.city}
                    </li>
                  ))}
                  {items.length > 8 ? (
                    <li className="text-xs">외 {items.length - 8}곳</li>
                  ) : null}
                </ul>
                <p className="mt-3 flex flex-wrap gap-2">
                  {filmSlugs.map((slug) => {
                    const film = getFilm(slug);
                    if (!film) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/films/${slug}`}
                        className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold hover:border-gold"
                      >
                        {film.titleKo}
                      </Link>
                    );
                  })}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
