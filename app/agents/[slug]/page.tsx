import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PersonDetailView } from "@/components/PersonDetailView";
import { agents } from "@/data/agents";

export function generateStaticParams() {
  return agents.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = agents.find((item) => item.slug === slug);
  if (!person) return { title: "요원" };
  return { title: `${person.nameKo} (${person.nameEn})` };
}

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = agents.find((item) => item.slug === slug);
  if (!person) notFound();
  return <PersonDetailView person={person} basePath="/agents" kindLabel="요원" />;
}
