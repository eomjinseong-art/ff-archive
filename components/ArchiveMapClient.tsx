"use client";

import dynamic from "next/dynamic";

export const ArchiveMap = dynamic(
  () => import("@/components/ArchiveMap").then((mod) => mod.ArchiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-lg border border-line lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.9fr)] lg:gap-4 lg:overflow-visible lg:border-0">
        <div className="flex h-[52vh] min-h-[320px] items-center justify-center bg-card text-sm text-muted sm:h-[560px] lg:rounded-lg lg:border lg:border-line">
          지도를 불러오는 중…
        </div>
        <aside className="max-h-[42vh] border-t border-line bg-card p-4 lg:max-h-none lg:min-h-[560px] lg:rounded-lg lg:border lg:border-line">
          <p className="text-sm text-muted">핀을 눌러 장소를 엽니다.</p>
        </aside>
      </div>
    ),
  },
);
