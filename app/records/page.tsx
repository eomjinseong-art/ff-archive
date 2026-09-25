import type { Metadata } from "next";
import Link from "next/link";
import { Sources } from "@/components/Sources";
import {
  boxOfficeNote,
  homeRecordTeasers,
  recordsIntro,
  recordsSources,
  stuntRecords,
  worldBoxOffice,
} from "@/data/records";

export const metadata: Metadata = { title: "기록" };

const nominalRank = [...worldBoxOffice].sort((a, b) => b.millions - a.millions);

function formatMillions(n: number) {
  return n.toLocaleString("ko-KR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

export default function RecordsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">{recordsIntro.title}</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{recordsIntro.lede}</p>
      <ul className="mt-4 max-w-3xl space-y-2 text-xs leading-6 text-muted">
        {recordsIntro.notes.map((note) => (
          <li key={note}>· {note}</li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {homeRecordTeasers.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-lg border border-line bg-card p-4 hover:border-gold/60"
          >
            <p className="text-[11px] uppercase tracking-wide text-gold">{item.label}</p>
            <p className="mt-2 font-serif text-xl text-paper">{item.value}</p>
            <p className="mt-1 text-xs text-muted">{item.meta}</p>
          </a>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">스턴트</h2>
        <ul className="mt-4 space-y-3">
          {stuntRecords.map((item) => (
            <li key={item.slug} id={item.slug} className="scroll-mt-24 rounded-lg border border-line p-4">
              <p className="text-[11px] uppercase tracking-wide text-gold">{item.year}</p>
              <h3 className="mt-1 font-serif text-lg text-paper">{item.title}</h3>
              <p className="mt-1 text-xs text-muted">
                <Link href={`/films/${item.filmSlug}`} className="text-gold hover:underline">
                  {item.filmTitleKo}
                </Link>
              </p>
              <p className="mt-2 text-sm leading-7 text-muted">{item.text}</p>
              <div className="mt-2 flex flex-wrap gap-3">
                {item.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:underline"
                  >
                    {source.label} ↗
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl text-gold">세계 흥행 · 명목</h2>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{boxOfficeNote}</p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-line">
          <table className="min-w-full text-left text-xs">
            <caption className="border-b border-line px-3 py-2 text-left text-[11px] text-gold">
              위키백과 시리즈 표 · 명목 월드와이드, 백만 달러
            </caption>
            <thead className="bg-card text-muted">
              <tr>
                <th className="px-3 py-2 font-normal">#</th>
                <th className="px-3 py-2 font-normal">작품</th>
                <th className="px-3 py-2 font-normal">연도</th>
                <th className="px-3 py-2 font-normal">백만 $</th>
              </tr>
            </thead>
            <tbody>
              {nominalRank.map((row, index) => (
                <tr key={row.slug} className="border-t border-line">
                  <td className="px-3 py-2 text-muted">{index + 1}</td>
                  <td className="px-3 py-2">
                    <Link href={`/films/${row.slug}`} className="text-paper hover:text-gold">
                      {row.titleKo}
                    </Link>
                  </td>
                  <td className="px-3 py-2 text-muted">{row.year}</td>
                  <td className="px-3 py-2 text-gold">{formatMillions(row.millions)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-10 text-sm">
        <Link href="/films" className="text-gold">
          영화 타임라인
        </Link>
      </p>

      <Sources sources={recordsSources} />
    </div>
  );
}
