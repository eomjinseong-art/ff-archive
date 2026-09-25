import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { women } from "@/data/women";

export function generateStaticParams() {
  return women.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = women.find((item) => item.slug === slug);
  if (!person) return { title: "여성" };
  return { title: `${person.nameKo} (${person.nameEn})` };
}

export default async function WomanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = women.find((item) => item.slug === slug);
  if (!person) notFound();
  return <PersonDetailView person={person} basePath="/women" kindLabel="여성" />;
}
