import Image from "next/image";
import Link from "next/link";
import { ImageCredit } from "@/components/ImageCredit";
import type { LicensedImage } from "@/data/types";

export function CreditedMedia({
  image,
  tone,
  alt,
  aspectClass = "aspect-video",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  compactCredit = true,
  overlay,
  href,
}: {
  image?: LicensedImage;
  tone: string;
  alt: string;
  aspectClass?: string;
  sizes?: string;
  compactCredit?: boolean;
  overlay?: { title: string; meta?: string };
  href?: string;
}) {
  const showOverlay = Boolean(overlay) && (!image || image.isPlaceholder);

  const frame = (
    <div className={`relative overflow-hidden rounded-md ${aspectClass}`}>
      <div className="absolute inset-0" style={{ background: tone }} />
      {image ? (
        <Image
          src={image.src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          style={
            image.objectPosition
              ? { objectPosition: image.objectPosition }
              : undefined
          }
        />
      ) : null}
      {showOverlay ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-x-3 bottom-3">
            <h2 className="font-serif text-base leading-snug text-paper">
              {overlay?.title}
            </h2>
            {overlay?.meta ? (
              <p className="mt-1 text-xs text-muted">{overlay.meta}</p>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );

  return (
    <figure>
      {href ? (
        <Link href={href} className="block">
          {frame}
        </Link>
      ) : (
        frame
      )}
      {image ? <ImageCredit image={image} compact={compactCredit} /> : null}
    </figure>
  );
}
