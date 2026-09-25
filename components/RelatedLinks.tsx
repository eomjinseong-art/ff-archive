import Link from "next/link";
import type { RelatedLink } from "@/lib/relatedLinks";

export function RelatedLinks({ items }: { items: RelatedLink[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-10 border-t border-line/60 pt-6">
      <h2 className="text-[11px] uppercase tracking-wide text-muted">관련</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-muted hover:text-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
