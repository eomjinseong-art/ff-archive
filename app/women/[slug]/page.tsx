import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { crew } from "@/data/crew";
import { women } from "@/data/women";
import { pageMetadata, personSeoDescription, personSeoTitle } from "@/lib/seo";

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
  const alsoCrew = crew.some((item) => item.slug === person.slug);
  return pageMetadata({
    title: alsoCrew ? `분노의 질주 ${person.nameKo} · 여성` : personSeoTitle(person.nameKo),
    description: personSeoDescription("여성 인물", person.nameKo, person.nameEn, person.oneLiner),
    path: `/women/${person.slug}`,
  });
}

export default async function WomanPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = women.find((item) => item.slug === slug);
  if (!person) notFound();
  return <PersonDetailView person={person} basePath="/women" kindLabel="여성" />;
}
