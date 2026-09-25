import { Fn } from "@/components/Sources";

export function NationalityLine({
  ko,
  en,
  footnote,
}: {
  ko: string;
  en?: string;
  footnote?: number;
}) {
  return (
    <p className="mt-2 text-sm text-gold">
      {ko}
      {en ? <span className="ml-2 text-xs font-normal text-muted">{en}</span> : null}
      {footnote ? <Fn n={footnote} /> : null}
    </p>
  );
}
