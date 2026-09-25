import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilmDetailView } from "@/components/FilmDetailView";
import { filmDetails } from "@/data/filmDetails";
import { getFilm } from "@/data/films";
import { filmSeoDescription, filmSeoTitle, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(filmDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilm(slug);
  const detail = filmDetails[slug];
  if (!film || !detail) return { title: "영화" };
  return pageMetadata({
    title: filmSeoTitle(film),
    description: filmSeoDescription(film, detail),
    path: `/films/${film.slug}`,
  });
}

export default async function FilmDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const official = filmDetails[slug];
  if (!official) notFound();
  return <FilmDetailView detail={official} />;
}
