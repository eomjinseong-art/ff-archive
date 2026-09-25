"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SearchBox } from "@/components/SearchBox";
import { VisitorCounter } from "@/components/VisitorCounter";
import {
  AUTOPIX_LABEL,
  BOND_ARCHIVE_LABEL,
  NAV,
  SITE_NAME,
  autopixUrl,
  bondArchiveUrl,
} from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span
            className="inline-block h-7 w-7 rounded-full border border-gold bg-[radial-gradient(circle_at_30%_30%,#C6A75E,transparent_55%),radial-gradient(circle_at_70%_70%,#8a7340,transparent_50%)]"
            aria-hidden
          />
          <span className="font-serif text-base tracking-wide text-gold sm:text-lg">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] xl:gap-4 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm ${active ? "text-gold" : "text-muted hover:text-paper"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:block">
            <SearchBox />
          </div>
          <VisitorCounter />
          <a
            href={autopixUrl("header")}
            className="hidden text-xs text-muted underline decoration-line underline-offset-4 hover:text-gold sm:inline"
          >
            {AUTOPIX_LABEL}
          </a>
          <a
            href={bondArchiveUrl("header")}
            className="hidden text-xs text-muted underline decoration-line underline-offset-4 hover:text-gold sm:inline"
          >
            {BOND_ARCHIVE_LABEL}
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-line text-paper lg:hidden"
            aria-expanded={open}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <div className="border-t border-line px-4 py-2 sm:hidden">
        <SearchBox />
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-4 py-3 lg:hidden">
          <nav className="grid grid-cols-2 gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm text-paper hover:bg-gold/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={autopixUrl("header")}
            className="mt-3 inline-block text-sm text-muted underline"
          >
            {AUTOPIX_LABEL}
          </a>
          <a
            href={bondArchiveUrl("header")}
            className="mt-3 ml-4 inline-block text-sm text-muted underline"
          >
            {BOND_ARCHIVE_LABEL}
          </a>
        </div>
      )}
    </header>
  );
}
