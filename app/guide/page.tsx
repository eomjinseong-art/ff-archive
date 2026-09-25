import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "가이드",
};

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">가이드</h1>
      <p className="mt-2 text-sm text-muted">
        세 갈래. 처음 · 정통 · 액션. 각 경로 세 편입니다.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guide/${guide.slug}`}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold"
          >
            <h2 className="font-serif text-2xl text-gold">
              {guide.titleKo}
              <span className="ml-2 text-base text-muted">({guide.titleEn})</span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-paper">{guide.summary}</p>
            <p className="mt-3 text-xs text-muted">
              {guide.steps.map((s) => s.titleKo).join(" → ")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
