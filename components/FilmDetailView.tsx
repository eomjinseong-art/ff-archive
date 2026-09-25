import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { FilmGadgetsBlock } from "@/components/FilmGadgetsBlock";
import { FilmVehiclesBlock } from "@/components/FilmVehiclesBlock";
import { FilmPrevNext } from "@/components/FilmPrevNext";
import { RelatedLinks } from "@/components/RelatedLinks";
import { LandmarkList, TripList } from "@/components/PlaceLists";
import { Fn, Sources } from "@/components/Sources";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { getAgent } from "@/data/agents";
import { getDirectorByFilmSlug } from "@/data/directors";
import type { CastChip, FilmDetail } from "@/data/filmDetails";
import { displayFilmTitle, getFilm, officialNeighbors } from "@/data/films";
import { otherVehiclesForFilm } from "@/data/otherVehicles";
import { filmIssueSlug, getIssue, liveIssueTeaser } from "@/data/issues";
import { landmarksForFilm } from "@/data/landmarks";
import { atmospherePlaceholder, filmImages } from "@/data/licensedImages";
import { tripsForFilm } from "@/data/trips";
import { getVillain } from "@/data/villains";
import { getWoman } from "@/data/women";
import { secondaryRelated } from "@/lib/relatedLinks";

function castHref(person: CastChip) {
  if (!person.slug || !person.kind) return undefined;
  if (person.kind === "agent" && getAgent(person.slug)) return `/agents/${person.slug}`;
  if (person.kind === "woman" && getWoman(person.slug)) return `/women/${person.slug}`;
  if (person.kind === "villain" && getVillain(person.slug)) return `/villains/${person.slug}`;
  return undefined;
}

export function FilmDetailView({ detail }: { detail: FilmDetail }) {
  const film = getFilm(detail.slug);
  if (!film) return null;
  const director = getDirectorByFilmSlug(film.slug);
  const { prev, next } = officialNeighbors(film.slug);
  const landmarks = landmarksForFilm(film.slug);
  const filmTrips = tripsForFilm(film.slug);
  const linkedIssue = getIssue(filmIssueSlug[film.slug] ?? "");
  const hero = filmImages[film.slug] ?? atmospherePlaceholder;
  const related = secondaryRelated(
    [
      { href: "/origin", label: "원작 · 1966년 텔레비전" },
      ...(director
        ? [{ href: `/directors/${director.slug}`, label: `감독 · ${director.nameKo}` }]
        : []),
      ...detail.related,
    ],
    { prev, next },
  );

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={hero}
        tone={film.posterTone}
        alt={hero.alt}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={hero.isPlaceholder ? { title: film.titleKo, meta: film.titleEn } : undefined}
      />
      <p className="mt-4 text-sm text-gold">
        {film.year} · 감독{" "}
        {director ? (
          <Link href={`/directors/${director.slug}`} className="hover:underline">
            {detail.director}
          </Link>
        ) : (
          detail.director
        )}{" "}
        · {film.actorKo} ({film.actorEn}) · {detail.runtime}
      </p>
      <p className="mt-1 text-xs text-muted">미국 개봉 {detail.usRelease}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {displayFilmTitle(film)}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {detail.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <div className="rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm text-gold">
          스포일러 주의 — {detail.spoilerWarning}
        </div>
        <h2 className="mt-5 font-serif text-xl text-gold">줄거리</h2>
        <div className="mt-3 space-y-4">
          {detail.plot.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">출연</h2>
        <ul className="mt-3 space-y-3">
          {detail.cast.map((person) => {
            const href = castHref(person);
            return (
              <li key={`${person.nameEn}-${person.role}`} className="rounded-lg border border-line p-4">
                <p>
                  {href ? (
                    <Link href={href} className="text-sm text-paper hover:text-gold">
                      {person.nameKo} ({person.nameEn})
                    </Link>
                  ) : (
                    <span className="text-sm text-paper">
                      {person.nameKo} ({person.nameEn})
                    </span>
                  )}
                  <span className="ml-2 text-xs text-muted">{person.role}</span>
                </p>
                {person.note ? <p className="mt-2 text-sm leading-6 text-muted">{person.note}</p> : null}
              </li>
            );
          })}
        </ul>
      </section>

      <FilmVehiclesBlock
        cars={detail.cars}
        extras={otherVehiclesForFilm(film.slug)}
        filmTitleKo={film.titleKo}
        filmTitleEn={film.titleEn}
      />

      <FilmGadgetsBlock gadgets={detail.gadgets} filmTitleKo={film.titleKo} />

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">명대사</h2>
        <p className="mt-2 text-xs text-muted">
          영어는 1966년 시리즈 위키백과가 적은 공식입니다. 극장판의 수신인과 매체는 작품마다 다릅니다.
        </p>
        <ul className="mt-3 space-y-3">
          {detail.quotes.map((q) => (
            <li key={q.textEn} className="rounded-lg border border-line p-4">
              <p className="font-serif text-paper">“{q.textKo}”</p>
              <p className="mt-1 text-xs text-muted">
                {q.speaker} · {q.textEn}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">공식 예고편</h2>
        <div className="mt-3">
          <YouTubeEmbed id={detail.trailerYoutubeId} title={`${displayFilmTitle(film)} 예고편`} />
        </div>
      </section>

      {landmarks.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">영화 속 명소</h2>
          <LandmarkList items={landmarks} />
          <Link href="/locations" className="mt-3 inline-block text-sm text-gold">
            명소 허브
          </Link>
          <Link href={`/map?film=${film.slug}`} className="mt-3 ml-4 inline-block text-sm text-gold">
            지도에서 보기
          </Link>
        </section>
      ) : null}

      {filmTrips.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">촬영지 여행 코스</h2>
          <TripList items={filmTrips} />
        </section>
      ) : null}

      {detail.issuesTeaser ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">이슈</h2>
          <p className="mt-2 text-sm text-muted">{liveIssueTeaser(detail.issuesTeaser)}</p>
          <Link
            href={linkedIssue ? `/issues/${linkedIssue.slug}` : "/issues"}
            className="mt-2 inline-block text-sm text-gold"
          >
            {linkedIssue ? linkedIssue.title : "이슈 허브"}
          </Link>
        </section>
      ) : null}

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
      <FilmPrevNext prev={prev} next={next} />
      <RelatedLinks items={related} />
    </article>
  );
}
