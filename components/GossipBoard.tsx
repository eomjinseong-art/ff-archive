import type { GossipItem } from "@/data/types";

const styles: Record<GossipItem["label"], string> = {
  확인됨: "border-gold/60 text-gold",
  "제작진 인터뷰": "border-paper/40 text-paper",
  "팬 설": "border-muted text-muted",
  미확인: "border-muted/60 text-muted",
};

export function GossipBoard({ items }: { items: GossipItem[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.text}
          className="rounded-lg border border-line bg-card p-4"
        >
          <span
            className={`inline-block rounded-full border px-2 py-0.5 text-[11px] ${styles[item.label]}`}
          >
            {item.label}
          </span>
          <p className="mt-2 text-sm leading-relaxed text-paper">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
