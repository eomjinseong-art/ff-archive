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

function CreditLinks({
  image,
  linkClass,
}: {
  image: LicensedImage;
  linkClass: string;
}) {
  const parts: { key: string; href?: string; label: string }[] = [];
  if (image.license) {
    parts.push({
      key: "license",
      href: image.licenseUrl || undefined,
      label: image.license,
    });
  }
  if (image.sourceLabel) {
    parts.push({
      key: "source",
      href: image.sourceUrl || undefined,
      label: image.sourceLabel,
    });
  }

  return (
    <>
      {parts.map((part, index) => (
        <span key={part.key}>
          {index > 0 ? " · " : null}
          <CreditText href={part.href} linkClass={linkClass}>
            {part.label}
          </CreditText>
        </span>
      ))}
    </>
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

  if (compact) {
    return (
      <figcaption className="mt-1.5 break-words text-[10px] leading-4 text-muted">
        <span className="block text-paper/80">{image.author}</span>
        <span className="mt-0.5 block">
          <CreditLinks image={image} linkClass={linkClass} />
        </span>
      </figcaption>
    );
  }

  return (
    <figcaption className="mt-2 text-xs leading-5 text-muted">
      <span className="text-paper/80">{image.author}</span>
      {" · "}
      <CreditLinks image={image} linkClass={linkClass} />
    </figcaption>
  );
}
