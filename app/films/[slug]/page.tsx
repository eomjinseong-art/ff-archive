import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilmDetailView } from "@/components/FilmDetailView";
import { filmDetails } from "@/data/filmDetails";
import { displayFilmTitle, getFilm } from "@/data/films";

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
  if (!film) return { title: "영화" };
  return { title: displayFilmTitle(film) };
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
