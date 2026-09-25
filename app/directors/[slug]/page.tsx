import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchiveProse } from "@/components/ArchiveProse";
import { CreditedMedia } from "@/components/CreditedMedia";
import { Fn, Sources } from "@/components/Sources";
import { NationalityLine } from "@/components/NationalityLine";
import { directorDetails } from "@/data/directorDetails";
import { directors } from "@/data/directors";
import { displayFilmTitle, films } from "@/data/films";
import { portraitOrAtmosphere } from "@/data/licensedImages";

export function generateStaticParams() {
  return directors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const director = directors.find((d) => d.slug === slug);
  if (!director) return { title: "감독" };
  return { title: `${director.nameKo} (${director.nameEn})` };
}

export default async function DirectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const director = directors.find((d) => d.slug === slug);
  const detail = directorDetails[slug];
  if (!director || !detail) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={portraitOrAtmosphere(director.image)}
        tone={director.posterTone}
        alt={director.image?.alt ?? `${director.nameKo} (${director.nameEn})`}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
      />
      <h1 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">
        {director.nameKo} ({director.nameEn})
      </h1>
      <NationalityLine ko={director.nationalityKo} en={director.nationalityEn} />
      <p className="mt-1 text-xs text-muted">
        {director.years} · 극장판 {director.filmCount}편
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {director.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">시리즈에서의 위치</h2>
        <ArchiveProse paragraphs={detail.bio} footnote={{ index: 0, n: 2 }} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연출 스타일</h2>
        <ArchiveProse paragraphs={detail.craft} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">작품 목록</h2>
        <ul className="mt-3 space-y-3">
          {detail.filmNotes.map((note) => {
            const film = films.find((f) => f.slug === note.slug);
            if (!film) return null;
            const title = `${displayFilmTitle(film)} · ${film.year}`;
            return (
              <li key={note.slug} className="rounded-lg border border-line p-4">
                <p className="text-sm text-gold">
                  <Link
                    href={film.hasDetail ? `/films/${film.slug}` : "/films"}
                    className="hover:underline"
                  >
                    {title}
                  </Link>
                </p>
                <p className="mt-2 text-sm leading-7 text-paper">{note.text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연속성</h2>
        <ArchiveProse paragraphs={detail.continuity} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {detail.related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold"
            >
              {item.label} →
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-6 text-sm">
        <Link href="/directors" className="text-gold">
          감독 허브
        </Link>
      </p>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
