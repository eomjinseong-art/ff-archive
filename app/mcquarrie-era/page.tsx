import type { Metadata } from "next";
import Link from "next/link";
import { Sources } from "@/components/Sources";
import { displayFilmTitle, getFilm } from "@/data/films";
import { directorImages, portraitOrAtmosphere } from "@/data/licensedImages";
import { CreditedMedia } from "@/components/CreditedMedia";
import {
  mcquarrieEra,
  mcquarrieFilmSlugs,
  mcquarrieSections,
  mcquarrieSources,
} from "@/data/mcquarrie";

export const metadata: Metadata = { title: mcquarrieEra.titleKo };

export default function McQuarrieEraPage() {
  const image = directorImages["christopher-mcquarrie"];

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-[11px] uppercase tracking-wide text-gold">{mcquarrieEra.years}</p>
      <CreditedMedia
        image={portraitOrAtmosphere(image)}
        tone="linear-gradient(165deg,#1a2030 0%,#0B0D10 48%,#8a734033 100%)"
        alt={image?.alt ?? "크리스토퍼 맥쿼리"}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
      />
      <h1 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">
        {mcquarrieEra.titleKo} ({mcquarrieEra.titleEn})
      </h1>
      <p className="mt-4 text-base leading-relaxed text-paper">{mcquarrieEra.oneLiner}</p>
      <p className="mt-3 text-sm">
        <Link href="/directors/christopher-mcquarrie" className="text-gold">
          감독 상세
        </Link>
      </p>

      {mcquarrieSections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="font-serif text-xl text-gold">{section.heading}</h2>
          <div className="mt-3 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-sm leading-7 text-paper">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">5편부터 8편</h2>
        <ul className="mt-3 space-y-3">
          {mcquarrieFilmSlugs.map((slug) => {
            const film = getFilm(slug);
            if (!film) return null;
            return (
              <li key={slug} className="rounded-lg border border-line p-4">
                <Link href={`/films/${film.slug}`} className="text-sm text-gold hover:underline">
                  {displayFilmTitle(film)} · {film.year}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <Sources sources={mcquarrieSources} />
    </article>
  );
}
