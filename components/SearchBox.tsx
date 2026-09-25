"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { buildSearchIndex, searchArchive } from "@/lib/search";

export function SearchBox() {
  const id = useId();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const index = useMemo(() => buildSearchIndex(), []);
  const results = useMemo(() => searchArchive(q, index), [q, index]);

  return (
    <div className="relative w-full max-w-xs">
      <label className="sr-only" htmlFor={id}>
        검색
      </label>
      <input
        id={id}
        type="search"
        value={q}
        placeholder="영화 · 차량 · 요원 · 악당 · 가젯"
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          window.setTimeout(() => setOpen(false), 180);
        }}
        className="w-full rounded-full border border-line bg-card px-3 py-1.5 text-sm text-paper placeholder:text-muted focus:border-gold focus:outline-none"
      />
      {open && q.trim() && (
        <ul className="absolute z-40 mt-2 max-h-80 w-full overflow-auto rounded-lg border border-line bg-card py-1 shadow-lg">
          {results.length === 0 ? (
            <li className="px-3 py-2 text-sm text-muted">결과 없음</li>
          ) : (
            results.map((hit) => (
              <li key={`${hit.kind}-${hit.href}-${hit.title}`}>
                <Link
                  href={hit.href}
                  className="block px-3 py-2 hover:bg-gold/10"
                >
                  <span className="text-[10px] uppercase tracking-wide text-gold">
                    {hit.kind}
                  </span>
                  <span className="block text-sm text-paper">{hit.title}</span>
                  <span className="block text-xs text-muted">{hit.hint}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
