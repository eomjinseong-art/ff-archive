import type { Metadata } from "next";
import Link from "next/link";
import { displayFilmTitle, getFilm } from "@/data/films";
import { landmarks } from "@/data/landmarks";
import { trips } from "@/data/trips";
import { googleMapsSearchUrl } from "@/lib/googleImages";

export const metadata: Metadata = { title: "여행" };

export default function TripsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs text-gold">
        <Link href="/locations">명소</Link>
        {" · "}
        <Link href="/map">지도</Link>
      </p>
      <h1 className="mt-2 font-serif text-3xl text-paper">촬영지 여행 코스</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        화면에 남은 도시를 걷는 짧은 코스입니다. 스턴트 지점에 올라가는 안내가 아닙니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {trips.map((trip) => {
          const stops = trip.stopSlugs
            .map((slug) => landmarks.find((place) => place.slug === slug))
            .filter((place): place is (typeof landmarks)[number] => Boolean(place));
          return (
            <article
              id={trip.slug}
              key={trip.slug}
              className="scroll-mt-24 rounded-lg border border-line bg-card p-5"
            >
              <h2 className="font-serif text-xl text-paper">
                {trip.nameKo} ({trip.nameEn})
              </h2>
              <p className="mt-1 text-xs text-gold">
                {trip.city} · {trip.country}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">{trip.sceneNote}</p>
              <p className="mt-2 text-sm leading-6 text-paper">{trip.fameNote}</p>
              {stops.length > 0 ? (
                <ul className="mt-3 space-y-1 text-xs text-muted">
                  {stops.map((place) => (
                    <li key={place.slug}>
                      {place.placeKo} · {place.city}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {trip.filmSlugs.map((slug) => {
                  const film = getFilm(slug);
                  if (!film) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/films/${slug}`}
                      className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold"
                    >
                      {displayFilmTitle(film)}
                    </Link>
                  );
                })}
              </div>
              <a
                href={googleMapsSearchUrl(trip.mapsQuery)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs text-gold hover:underline"
              >
                지도에서 찾기 ↗
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
