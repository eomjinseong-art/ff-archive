import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { Fn } from "@/components/Sources";
import { getGadget } from "@/data/gadgets";
import type { GadgetL1 } from "@/data/filmDetails";
import { gadgetImages, portraitOrAtmosphere } from "@/data/licensedImages";

export function FilmGadgetsBlock({
  gadgets,
  filmTitleKo,
}: {
  gadgets?: GadgetL1;
  filmTitleKo?: string;
}) {
  if (!gadgets) return null;
  const rows = gadgets.gadgetSlugs
    .map((slug) => {
      const gadget = getGadget(slug);
      return gadget ? { gadget, slug } : null;
    })
    .filter((row): row is { gadget: NonNullable<ReturnType<typeof getGadget>>; slug: string } =>
      Boolean(row),
    );

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">이 영화의 가젯</h2>
      <p className="mt-2 text-xs text-muted">
        {filmTitleKo ? `${filmTitleKo}의 장비와 스턴트.` : "장비와 스턴트."} 차량은 영화 속 차량 칸에 있습니다.
      </p>
      <div className="mt-4 rounded-lg border border-line bg-card p-4">
        <p className="text-[11px] uppercase tracking-wide text-gold">{gadgets.density}</p>
        <h3 className="mt-1 font-serif text-lg text-paper">{gadgets.title}</h3>
        <p className="mt-3 text-sm leading-7 text-paper">
          {gadgets.body}
          <Fn n={2} />
        </p>
      </div>
      {rows.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {rows.map(({ gadget, slug }) => (
            <article key={slug} className="rounded-lg border border-line p-3">
              <CreditedMedia
                image={portraitOrAtmosphere(gadgetImages[slug])}
                tone={gadget.posterTone}
                alt={gadgetImages[slug]?.alt ?? `${gadget.nameKo} (${gadget.nameEn})`}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 100vw, 50vw"
                href={gadget.hasL2 ? `/gadgets/${slug}` : undefined}
                overlay={
                  gadgetImages[slug]
                    ? undefined
                    : { title: gadget.nameKo, meta: gadget.filmTitleKo }
                }
              />
              <p className="mt-2 text-[11px] text-gold">{gadget.badges.join(" · ")}</p>
              <Link
                href={`/gadgets/${slug}`}
                className="mt-1 block font-serif text-sm text-paper hover:text-gold"
              >
                {gadget.nameKo} ({gadget.nameEn})
              </Link>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}
