"use client";

import Image from "next/image";
import { useState } from "react";

export function SafeImage({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex items-end bg-black/25 p-3">
        <p className="text-[11px] leading-4 text-paper/90">사진을 불러오지 못했습니다.</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      {...(priority ? { priority: true } : { loading: "lazy" as const })}
      onError={() => setFailed(true)}
      style={objectPosition ? { objectPosition } : undefined}
    />
  );
}
