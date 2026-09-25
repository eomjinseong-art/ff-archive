import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import type { LicensedImage } from "@/data/types";

export function PosterCard({
  title,
  meta,
  tone,
  href,
  image,
  aspect = "poster",
  overlayOnImage = false,
}: {
  title: string;
  meta: string;
  tone: string;
  href?: string;
  image?: LicensedImage;
  aspect?: "poster" | "video";
  overlayOnImage?: boolean;
}) {
  const aspectClass = aspect === "video" ? "aspect-video" : "aspect-[2/3]";
  const useOverlay = !image || overlayOnImage;
  const titles = (
    <>
      <h2 className="font-serif text-base leading-snug text-paper">{title}</h2>
      <p className="mt-1 text-xs text-muted">{meta}</p>
    </>
  );

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-card transition-colors hover:border-gold/60">
      <CreditedMedia
        image={image}
        tone={tone}
        alt={image?.alt ?? title}
        aspectClass={aspectClass}
        overlay={useOverlay ? { title, meta } : undefined}
        href={href}
      />
      {image && !overlayOnImage ? (
        <div className="px-3 pb-3 pt-1">
          {href ? (
            <Link href={href} className="block">
              {titles}
            </Link>
          ) : (
            titles
          )}
        </div>
      ) : null}
    </article>
  );
}
