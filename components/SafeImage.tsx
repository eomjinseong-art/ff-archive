"use client";

import Image from "next/image";
import { useState } from "react";

export const SITE_DEFAULT_SRC = "/images/default-car.webp";

export function SafeImage({
  src,
  alt,
  sizes,
  priority = false,
  objectPosition,
  onFallback,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  objectPosition?: string;
  onFallback?: () => void;
}) {
  const [useDefault, setUseDefault] = useState(false);
  const showingDefault = useDefault && src !== SITE_DEFAULT_SRC;

  return (
    <Image
      key={showingDefault ? SITE_DEFAULT_SRC : src}
      src={showingDefault ? SITE_DEFAULT_SRC : src}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      {...(priority && !showingDefault ? { priority: true } : { loading: "lazy" as const })}
      onError={() => {
        if (!useDefault && src !== SITE_DEFAULT_SRC) {
          setUseDefault(true);
          onFallback?.();
        }
      }}
      style={
        showingDefault
          ? { objectPosition: "center" }
          : objectPosition
            ? { objectPosition }
            : undefined
      }
    />
  );
}
