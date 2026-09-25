import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CreditedMedia } from "@/components/CreditedMedia";
import { GossipBoard } from "@/components/GossipBoard";
import { Fn, Sources } from "@/components/Sources";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { gadgetDetails, getGadget } from "@/data/gadgets";
import { atmospherePlaceholder, gadgetImages } from "@/data/licensedImages";

export function generateStaticParams() {
  return Object.keys(gadgetDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gadget = getGadget(slug);
  if (!gadget) return { title: "가젯" };
  return { title: `${gadget.nameKo} (${gadget.nameEn})` };
}

export default async function GadgetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const gadget = getGadget(slug);
  const detail = gadgetDetails[slug];
  if (!gadget || !detail) notFound();
  const image = gadgetImages[slug] ?? atmospherePlaceholder;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <CreditedMedia
        image={image}
        tone={gadget.posterTone}
        alt={image.alt}
        aspectClass="aspect-[2/3] sm:aspect-[16/9]"
        sizes="(max-width: 768px) 100vw, 768px"
        compactCredit={false}
        overlay={image.isPlaceholder ? { title: gadget.nameKo, meta: gadget.nameEn } : undefined}
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {gadget.badges.map((badge) => (
          <span key={badge} className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold">
            {badge}
          </span>
        ))}
      </div>
      <h1 className="mt-3 font-serif text-3xl text-paper">
        {gadget.nameKo} ({gadget.nameEn})
      </h1>
      <p className="mt-2 text-sm text-muted">
        {gadget.brandKo} · {gadget.era} · {gadget.filmTitleKo}
      </p>
      <p className="mt-4 text-base leading-relaxed text-paper">
        {gadget.oneLiner}
        <Fn n={1} />
      </p>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">개요</h2>
        <div className="mt-3 space-y-4">
          {detail.overview.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="text-sm leading-7 text-paper">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">타임라인</h2>
        <ol className="mt-3 space-y-3">
          {detail.timeline.map((row) => (
            <li key={row.year + row.text.slice(0, 12)} className="rounded-lg border border-line p-4">
              <p className="text-xs text-gold">{row.year}</p>
              <p className="mt-1 text-sm leading-6 text-paper">{row.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">화면에서</h2>
        <div className="mt-3 space-y-4">
          {detail.onScreen.map((paragraph) => (
            <p key={paragraph.slice(0, 16)} className="text-sm leading-7 text-paper">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-serif text-xl text-gold">제작</h2>
        <div className="mt-3 space-y-4">
          {detail.production.map((paragraph) => (
            <p key={paragraph.slice(0, 16)} className="text-sm leading-7 text-paper">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {detail.gossip.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-serif text-xl text-gold">메모</h2>
          <div className="mt-3">
            <GossipBoard items={detail.gossip} />
          </div>
        </section>
      ) : null}

      {detail.videos.map((video) => (
        <div key={video.id} className="mt-8">
          <YouTubeEmbed id={video.id} title={video.title} />
        </div>
      ))}

      <div className="mt-6 flex flex-wrap gap-2">
        {detail.related.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold">
            {item.label}
          </Link>
        ))}
      </div>

      <Sources sources={detail.sources} footnotes={detail.footnotes} />
    </article>
  );
}
