import Link from "next/link";
import { ArchiveProse } from "@/components/ArchiveProse";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { CreditedMedia } from "@/components/CreditedMedia";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { NationalityLine } from "@/components/NationalityLine";
import { Fn, Sources } from "@/components/Sources";
import type { ArchivePerson } from "@/data/crew";
import { displayFilmTitle, films } from "@/data/films";
import { personImage, portraitOrAtmosphere } from "@/data/licensedImages";
import { personLookQuery } from "@/lib/googleImages";
import { breadcrumbLd, jsonLd, placeholderAlt } from "@/lib/seo";

export function PersonDetailView({
  person,
  basePath,
  kindLabel,
}: {
  person: ArchivePerson;
  basePath: string;
  kindLabel: string;
}) {
  const image = personImage(person.slug);
  const hubLabel =
    basePath === "/villains" ? "악당" : basePath === "/women" ? "여성" : "등장인물";
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: hubLabel, path: basePath },
            { name: person.nameKo, path: `${basePath}/${person.slug}` },
          ]),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: basePath, label: hubLabel },
          { label: person.nameKo },
        ]}
      />
      <CreditedMedia
        image={portraitOrAtmosphere(image)}
        tone={person.posterTone}
        alt={image?.alt ?? placeholderAlt(`${person.nameKo} (${person.nameEn})`)}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        priority
        compactCredit={false}
        overlay={image ? undefined : { title: person.nameKo, meta: person.performerKo }}
      />
      <p className="mt-4 text-xs text-gold">{kindLabel}</p>
      <h1 className="mt-1 font-serif text-3xl text-paper sm:text-4xl">
        {person.nameKo} ({person.nameEn})
      </h1>
      {person.nationalityKo !== "—" ? (
        <NationalityLine ko={person.nationalityKo} en={person.nationalityEn} />
      ) : null}
      <p className="mt-1 text-xs text-muted">
        {person.performerKo !== "—" ? `${person.performerKo} (${person.performerEn}) · ` : ""}
        {person.affiliation} · {person.years} · {person.filmCount}편
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {person.oneLiner}
        <Fn n={1} />
      </p>
      {!image ? (
        <ImageSearchLink query={personLookQuery(person)} label="초상 검색" />
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">소개</h2>
        <ArchiveProse paragraphs={person.bio} />
      </section>

      {person.notes.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">메모</h2>
          <ArchiveProse paragraphs={person.notes} />
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">작품</h2>
        <ul className="mt-3 space-y-3">
          {person.filmNotes.map((note) => {
            const film = films.find((item) => item.slug === note.slug);
            if (!film) return null;
            return (
              <li key={note.slug} className="rounded-lg border border-line p-4">
                <Link href={`/films/${film.slug}`} className="text-sm text-gold hover:underline">
                  {displayFilmTitle(film)} · {film.year}
                </Link>
                <p className="mt-2 text-sm leading-7 text-paper">{note.text}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="mt-8 text-sm">
        <Link href={basePath} className="text-gold">
          목록으로
        </Link>
      </p>
      <Sources sources={person.sources} footnotes={person.footnotes} />
    </article>
  );
}
