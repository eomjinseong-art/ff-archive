import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CreditedMedia } from "@/components/CreditedMedia";
import { JsonLd } from "@/components/JsonLd";
import { GossipBoard } from "@/components/GossipBoard";
import { SameBrandCars } from "@/components/SameBrandCars";
import { UsaMotorsLink } from "@/components/UsaMotorsLink";
import { SisterCta } from "@/components/SisterCta";
import { Fn, Sources } from "@/components/Sources";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { ERA_LABEL, carDetails, getCar } from "@/data/cars";
import { atmospherePlaceholder, carImages } from "@/data/licensedImages";
import { FF_CAR_CTA_LABEL, SITE_URL } from "@/lib/site";
import {
  breadcrumbLd,
  carSeoDescription,
  carSeoTitle,
  carThingLd,
  jsonLd,
  pageMetadata,
  placeholderAlt,
} from "@/lib/seo";

export function generateStaticParams() {
  return Object.keys(carDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "영화 속 차량" };
  const photo = car.image;
  return pageMetadata({
    title: carSeoTitle(car),
    description: carSeoDescription(car),
    path: `/cars/${car.slug}`,
    image: photo
      ? {
          url: `${SITE_URL}${photo.src}`,
          width: photo.width,
          height: photo.height,
          alt: photo.alt,
        }
      : undefined,
  });
}

function Prose({
  paragraphs,
  footnote,
}: {
  paragraphs: string[];
  footnote?: { index: number; n: number };
}) {
  return (
    <div className="mt-3 space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={`${index}-${paragraph.slice(0, 20)}`} className="text-sm leading-7 text-paper">
          {paragraph}
          {footnote && footnote.index === index ? <Fn n={footnote.n} /> : null}
        </p>
      ))}
    </div>
  );
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCar(slug);
  const detail = carDetails[slug];
  if (!car || !detail) notFound();
  const image = car.image ?? carImages[car.slug] ?? atmospherePlaceholder;
  const photoUrl = image.isPlaceholder ? undefined : `${SITE_URL}${image.src}`;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "차 종류", path: "/cars" },
            { name: car.nameKo, path: `/cars/${car.slug}` },
          ]),
          carThingLd(car, photoUrl),
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/cars", label: "분노의 질주 차 종류" },
          { label: car.nameKo },
        ]}
      />
      <CreditedMedia
        image={image}
        tone={car.posterTone}
        alt={image.isPlaceholder ? placeholderAlt(`${car.nameKo} (${car.nameEn})`) : image.alt}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        priority
        compactCredit={false}
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {car.badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold"
          >
            {badge}
          </span>
        ))}
      </div>
      <h1 className="mt-3 font-serif text-3xl text-paper">
        {car.nameKo} ({car.nameEn})
      </h1>
      <p className="mt-2 text-sm text-muted">
        {car.brandKo} · {ERA_LABEL[car.era]} ·{" "}
        <Link href={`/films/${car.filmSlug}`} className="hover:text-gold">
          {car.filmTitleKo}
        </Link>
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {car.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">개요</h2>
        <Prose
          paragraphs={detail.overview}
          footnote={
            detail.footnotes.some((item) => item.n === 2) ? { index: 0, n: 2 } : undefined
          }
        />
      </section>

      {detail.timeline.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">타임라인</h2>
          <ol className="mt-3 space-y-3">
            {detail.timeline.map((row, index) => (
              <li key={`${row.year}-${index}`} className="rounded-lg border border-line p-4">
                <p className="text-xs text-gold">{row.year}</p>
                <p className="mt-1 text-sm leading-6 text-paper">{row.text}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">화면에서</h2>
        <Prose paragraphs={detail.onScreen} />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">제작</h2>
        <Prose
          paragraphs={detail.production}
          footnote={
            detail.footnotes.some((item) => item.n === 3) ? { index: 0, n: 3 } : undefined
          }
        />
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">가십 보드</h2>
        <p className="mt-2 text-xs text-muted">
          라벨: 확인됨 / 제작진 인터뷰 / 팬 설 / 미확인
        </p>
        <div className="mt-4">
          <GossipBoard items={detail.gossip} />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">연속성</h2>
        <Prose paragraphs={detail.continuity} />
      </section>

      {detail.videos.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">영상</h2>
          <div className="mt-3 space-y-6">
            {detail.videos.map((video) => (
              <div key={video.id}>
                <YouTubeEmbed id={video.id} title={video.title} />
                <p className="mt-2 text-xs text-muted">{video.title}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-8 rounded-lg border border-line bg-card p-4">
        <p className="text-sm text-muted">
          촬영 차량을 판매하지 않습니다. 자동차 용품은 오토픽스에서 봅니다.
        </p>
        <div className="mt-4">
          <SisterCta label={FF_CAR_CTA_LABEL} />
        </div>
      </div>

      <SameBrandCars brand={car.brand} brandKo={car.brandKo} />
      <UsaMotorsLink slug={car.slug} />

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">관련</h2>
        <ul className="mt-3 space-y-4">
          {detail.related.map((item) => {
            const relatedSlug = item.href.startsWith("/cars/")
              ? item.href.slice("/cars/".length).split(/[?#]/)[0]
              : "";
            const related = relatedSlug ? getCar(relatedSlug) : undefined;
            const relatedImage = related?.image;
            return (
              <li key={item.href} className="flex items-start gap-3">
                {relatedImage ? (
                  <div className="w-28 shrink-0 sm:w-36">
                    <CreditedMedia
                      image={relatedImage}
                      tone={related?.posterTone ?? car.posterTone}
                      alt={relatedImage.alt}
                      aspectClass="aspect-video"
                      sizes="144px"
                      href={item.href}
                    />
                  </div>
                ) : null}
                <Link href={item.href} className="pt-1 text-sm text-paper hover:text-gold">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <p className="mt-6 text-sm">
        <Link href="/cars" className="text-gold">
          영화 속 차량
        </Link>
      </p>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
