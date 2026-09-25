import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 보는 법",
  description:
    "분노의 질주 보는 법. 개봉 순, 이야기 순, 처음 보는 길을 나누고 시리즈 순서는 별도 페이지에 둡니다.",
  path: "/guide",
});

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">분노의 질주 보는 법</h1>
      <p className="mt-2 text-sm leading-7 text-muted">
        개봉 순, 이야기 순, 처음 보는 길입니다.{" "}
        <Link href="/guide/order" className="text-gold hover:underline">
          분노의 질주 순서
        </Link>
        에서 두 순서를 나란히 봅니다.
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
