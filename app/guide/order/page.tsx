import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { watchOrderFaqs } from "@/data/watchOrder";
import { breadcrumbLd, faqLd, jsonLd, pageMetadata } from "@/lib/seo";

const title = "분노의 질주 순서";
const description =
  "분노의 질주 시리즈 순서와 보는 법. 개봉 순과 이야기 순을 나누고, 도쿄 드리프트와 홉스&쇼의 위치를 적습니다.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/guide/order",
});

export default function WatchOrderPage() {
  const release = guides.find((guide) => guide.slug === "release");
  const chronology = guides.find((guide) => guide.slug === "chronology");

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "가이드", path: "/guide" },
            { name: title, path: "/guide/order" },
          ]),
          faqLd(watchOrderFaqs),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/guide", label: "가이드" },
          { label: title },
        ]}
      />
      <h1 className="mt-3 font-serif text-3xl text-paper sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm leading-7 text-paper">{description}</p>
      <p className="mt-3 text-sm leading-7 text-muted">
        작품으로 이어지는 목록은{" "}
        <Link href="/guide/release" className="text-gold hover:underline">
          개봉 순
        </Link>
        과{" "}
        <Link href="/guide/chronology" className="text-gold hover:underline">
          이야기 순
        </Link>
        입니다.{" "}
        <Link href="/films" className="text-gold hover:underline">
          영화 허브
        </Link>
        에서 편마다 엽니다.
      </p>

      {release ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">개봉 순</h2>
          <ol className="mt-3 space-y-2">
            {release.steps.map((step, index) => (
              <li key={`${step.filmSlug}-release`} className="text-sm leading-7 text-paper">
                <span className="text-gold">{index + 1}. </span>
                <Link href={`/films/${step.filmSlug}`} className="hover:text-gold">
                  {step.year} {step.titleKo}
                </Link>
                <span className="text-muted"> — {step.why}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {chronology ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">이야기 순</h2>
          <p className="mt-2 text-sm leading-7 text-muted">{chronology.summary}</p>
          <ol className="mt-3 space-y-2">
            {chronology.steps.map((step, index) => (
              <li key={`${step.filmSlug}-story`} className="text-sm leading-7 text-paper">
                <span className="text-gold">{index + 1}. </span>
                <Link href={`/films/${step.filmSlug}`} className="hover:text-gold">
                  {step.titleKo}
                </Link>
                <span className="text-muted"> — {step.why}</span>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">자주 묻는 순서</h2>
        <div className="mt-4 space-y-6">
          {watchOrderFaqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-serif text-lg text-paper">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-paper">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
