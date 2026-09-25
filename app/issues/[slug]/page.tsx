import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GossipBoard } from "@/components/GossipBoard";
import { Sources } from "@/components/Sources";
import { getIssue, issues } from "@/data/issues";

export function generateStaticParams() {
  return issues.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) return { title: "이슈" };
  return { title: `이슈 · ${issue.title}` };
}

export default async function IssueDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const issue = getIssue(slug);
  if (!issue) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="text-xs text-gold">
        <Link href="/issues">이슈</Link>
      </p>
      <span className="mt-3 inline-block rounded-full border border-gold/50 px-2 py-0.5 text-[11px] text-gold">
        {issue.status}
      </span>
      <h1 className="mt-3 font-serif text-3xl text-paper">{issue.title}</h1>
      <p className="mt-4 text-sm leading-7 text-muted">{issue.excerpt}</p>
      {issue.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="font-serif text-xl text-gold">{section.heading}</h2>
          <div className="mt-3 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-sm leading-7 text-paper">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}
      {issue.gossip && issue.gossip.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">라벨</h2>
          <p className="mt-2 text-xs text-muted">
            확인됨 · 제작진 인터뷰 · 팬 설 · 미확인
          </p>
          <div className="mt-3">
            <GossipBoard items={issue.gossip} />
          </div>
        </section>
      )}
      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {issue.related.map((item) => (
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
      <Sources sources={issue.sources} />
    </article>
  );
}
