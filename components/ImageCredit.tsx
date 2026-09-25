import type { LicensedImage } from "@/data/types";

function CreditText({
  href,
  children,
  linkClass,
}: {
  href?: string;
  children: string;
  linkClass: string;
}) {
  if (!href) {
    return <>{children}</>;
  }
  return (
    <a
      href={href}
      className={linkClass}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function ImageCredit({
  image,
  compact = false,
}: {
  image: LicensedImage;
  compact?: boolean;
}) {
  const linkClass =
    "underline decoration-line underline-offset-2 hover:text-gold";

  if (image.isPlaceholder) {
    return (
      <figcaption
        className={
          compact
            ? "mt-1.5 text-[10px] leading-4 text-muted"
            : "mt-2 text-xs leading-5 text-muted"
        }
      >
        「아카이브 플레이스홀더 · 사용자 제공 이미지」
      </figcaption>
    );
  }

  const sourceLabel = image.sourceLabel || "위키미디어 공용";

  return (
    <figcaption
      className={
        compact
          ? "mt-1.5 break-words text-[10px] leading-4 text-muted"
          : "mt-2 break-words text-xs leading-5 text-muted"
      }
    >
      사진: <span className="text-paper/80">{image.author}</span>
      {" / "}
      <CreditText href={image.licenseUrl || undefined} linkClass={linkClass}>
        {image.license}
      </CreditText>
      {" / 출처: "}
      <CreditText href={image.sourceUrl || undefined} linkClass={linkClass}>
        {sourceLabel}
      </CreditText>
      {image.referenceNote ? ` / ${image.referenceNote}` : null}
    </figcaption>
  );
}
