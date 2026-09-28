"use client";

import { useState } from "react";
import Link from "next/link";
import { ImageCredit } from "@/components/ImageCredit";
import { SafeImage } from "@/components/SafeImage";
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
  priority = false,
}: {
  image?: LicensedImage;
  tone: string;
  alt: string;
  aspectClass?: string;
  sizes?: string;
  compactCredit?: boolean;
  overlay?: { title: string; meta?: string };
  href?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const creditImage =
    image && (failed || image.isSiteDefault)
      ? { ...image, isSiteDefault: true, isPlaceholder: false }
      : image;
  const showOverlay = Boolean(overlay) && (!image || image.isPlaceholder) && !failed;

  const frame = (
    <div className={`relative overflow-hidden rounded-md ${aspectClass}`}>
      <div className="absolute inset-0" style={{ background: tone }} />
      {image ? (
        <SafeImage
          src={image.src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          objectPosition={image.objectPosition}
          onFallback={() => setFailed(true)}
        />
      ) : null}
      {showOverlay ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute inset-x-3 bottom-3">
            <p className="font-serif text-base leading-snug text-paper">
              {overlay?.title}
            </p>
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
      {creditImage ? <ImageCredit image={creditImage} compact={compactCredit} /> : null}
    </figure>
  );
}
