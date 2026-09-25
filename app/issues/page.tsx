import type { Metadata } from "next";
import Link from "next/link";
import { issues } from "@/data/issues";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 이슈",
  description: "도쿄 드리프트의 순서, 폴 워커와 더 세븐, 제목 라이선스, 편별 흥행.",
  path: "/issues",
});

export default function IssuesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">이슈</h1>
      <p className="mt-2 text-sm leading-7 text-muted">
        도쿄 드리프트의 순서, 폴 워커와 더 세븐, 제목 라이선스, 편별 흥행.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {issues.map((issue) => (
          <Link
            key={issue.slug}
            href={`/issues/${issue.slug}`}
            className="rounded-lg border border-line bg-card p-5 hover:border-gold/60"
          >
            <span className="inline-block rounded-full border border-gold/50 px-2 py-0.5 text-[11px] text-gold">
              {issue.status}
            </span>
            <h2 className="mt-3 font-serif text-xl text-paper">{issue.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{issue.teaser}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
