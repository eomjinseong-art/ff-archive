import { Fn } from "@/components/Sources";

export function ArchiveProse({
  paragraphs,
  footnote,
}: {
  paragraphs: string[];
  footnote?: { index: number; n: number };
}) {
  return (
    <div className="mt-3 space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p
          key={`${index}-${paragraph.slice(0, 20)}`}
          className="text-sm leading-7 text-paper"
        >
          {paragraph}
          {footnote && footnote.index === index ? <Fn n={footnote.n} /> : null}
        </p>
      ))}
    </div>
  );
}
