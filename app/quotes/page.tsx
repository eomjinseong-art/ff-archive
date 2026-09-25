import type { Metadata } from "next";
import Link from "next/link";
import { quoteGroups } from "@/data/quotes";
import { getFilm } from "@/data/films";

export const metadata: Metadata = {
  title: "명대사",
};

export default function QuotesPage() {
  const itemCount = quoteGroups.reduce((n, group) => n + group.items.length, 0);
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">명대사</h1>
      <p className="mt-2 text-sm text-muted">
        1966년 시리즈 위키백과가 적은 임무 테이프 문장입니다. 극장판의 수신인과
        매체는 작품마다 다릅니다.
      </p>
      <p className="mt-2 text-xs text-muted">
        {quoteGroups.length}개 그룹 · {itemCount}개 인용
      </p>
      <div className="mt-10 space-y-10">
        {quoteGroups.map((group) => {
          const film = getFilm(group.filmSlug);
          return (
            <section key={group.filmSlug}>
              <h2 className="font-serif text-xl text-gold">
                {group.href || film?.hasDetail ? (
                  <Link href={group.href ?? `/films/${group.filmSlug}`}>
                    {group.filmTitleKo} ({group.filmTitleEn})
                  </Link>
                ) : (
                  <span>
                    {group.filmTitleKo} ({group.filmTitleEn})
                  </span>
                )}
                <span className="ml-2 text-sm font-sans text-muted">
                  {group.year}
                </span>
              </h2>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.textEn}
                    className="rounded-lg border border-line p-4"
                  >
                    {item.spoiler && (
                      <span className="mb-2 inline-block text-[11px] text-gold">
                        스포일러
                      </span>
                    )}
                    <p className="font-serif text-paper">“{item.textKo}”</p>
                    <p className="mt-1 text-xs text-muted">{item.textEn}</p>
                    <p className="mt-1 text-xs text-muted">{item.speaker}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
