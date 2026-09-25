import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { crew } from "@/data/crew";

export function generateStaticParams() {
  return crew.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = crew.find((item) => item.slug === slug);
  if (!person) return { title: "패밀리" };
  return { title: `${person.nameKo} (${person.nameEn})` };
}

export default async function CrewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = crew.find((item) => item.slug === slug);
  if (!person) notFound();
  return <PersonDetailView person={person} basePath="/crew" kindLabel="패밀리" />;
}
