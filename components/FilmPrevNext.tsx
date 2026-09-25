import Link from "next/link";
import type { FilmCardData } from "@/data/films";
import { displayFilmTitle } from "@/data/films";

function EmptyCard({
  side,
  unofficial,
}: {
  side: "prev" | "next";
  unofficial?: boolean;
}) {
  const label = side === "prev" ? "이전" : "다음";
  const align = side === "next" ? " sm:text-right" : "";
  if (unofficial) {
    return (
      <Link
        href="/films"
        className={`rounded-lg border border-line bg-card p-4 hover:border-gold/60${align}`}
      >
        <p className="text-[11px] uppercase tracking-wide text-gold">{label}</p>
        <p className="mt-1 font-serif text-lg text-paper">영화 허브</p>
        <p className="mt-1 text-xs text-muted">극장판 8편</p>
      </Link>
    );
  }
  return (
    <div className={`rounded-lg border border-line/60 p-4${align}`}>
      <p className="text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-sm text-muted">
        {side === "prev" ? "극장판의 첫 편" : "극장판의 마지막"}
      </p>
    </div>
  );
}

export function FilmPrevNext({
  prev,
  next,
  unofficial,
}: {
  prev?: FilmCardData;
  next?: FilmCardData;
  unofficial?: boolean;
}) {
  return (
    <nav aria-label="이전 다음 영화" className="mt-10">
      <h2 className="font-serif text-xl text-gold">이전 · 다음 영화</h2>
      <p className="mt-1 text-xs text-muted">
        극장판 개봉 순서
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/films/${prev.slug}`}
            className="rounded-lg border border-gold/40 bg-card p-4 hover:border-gold"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">이전</p>
            <p className="mt-1 font-serif text-lg text-paper">
              {displayFilmTitle(prev)}
            </p>
            <p className="mt-1 text-xs text-muted">{prev.year}</p>
          </Link>
        ) : (
          <EmptyCard side="prev" unofficial={unofficial} />
        )}
        {next ? (
          <Link
            href={`/films/${next.slug}`}
            className="rounded-lg border border-gold/40 bg-card p-4 hover:border-gold sm:text-right"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">다음</p>
            <p className="mt-1 font-serif text-lg text-paper">
              {displayFilmTitle(next)}
            </p>
            <p className="mt-1 text-xs text-muted">{next.year}</p>
          </Link>
        ) : (
          <EmptyCard side="next" unofficial={unofficial} />
        )}
      </div>
    </nav>
  );
}
