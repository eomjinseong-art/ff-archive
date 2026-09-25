import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { villains } from "@/data/villains";
import { pageMetadata, personSeoDescription } from "@/lib/seo";

export function generateStaticParams() {
  return villains.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = villains.find((item) => item.slug === slug);
  if (!person) return { title: "악당" };
  return pageMetadata({
    title: `분노의 질주 악당 ${person.nameKo}`,
    description: personSeoDescription("악당", person.nameKo, person.nameEn, person.oneLiner),
    path: `/villains/${person.slug}`,
  });
}

export default async function VillainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = villains.find((item) => item.slug === slug);
  if (!person) notFound();
  return <PersonDetailView person={person} basePath="/villains" kindLabel="악당" />;
}
