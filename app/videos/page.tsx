import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  OFFICIAL_CHANNEL,
  officialCategoryLinks,
  officialChannelTabs,
  officialTrailerEmbeds,
  videosIntro,
} from "@/data/officialVideos";

export const metadata: Metadata = {
  title: "영상",
};

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">{videosIntro.title}</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        {videosIntro.lede}
      </p>
      <p className="mt-3">
        <a
          href={OFFICIAL_CHANNEL.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold hover:underline"
        >
          YouTube {OFFICIAL_CHANNEL.handle} · {OFFICIAL_CHANNEL.nameKo} ↗
        </a>
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">공식 채널 탭</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {officialChannelTabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-card p-4 hover:border-gold/60"
            >
              <p className="text-[11px] uppercase tracking-wide text-gold">
                {tab.labelEn}
              </p>
              <h3 className="mt-1 font-serif text-lg text-paper">{tab.labelKo}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{tab.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">채널 안 공식 분류</h2>
        <p className="mt-2 text-xs text-muted">
          @MissionImpossible 채널 안 검색 결과입니다.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {officialCategoryLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-card p-4 hover:border-gold/60"
            >
              <h3 className="font-serif text-lg text-paper">{item.labelKo}</h3>
              <p className="mt-1 text-xs text-gold">{item.query}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{item.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">공식 예고편</h2>
          <Link href="/scenes" className="text-sm text-muted hover:text-gold">
            명장면 페이지
          </Link>
        </div>
        <p className="mb-4 text-xs text-muted">
          작품 상세와 같은 공식 채널 예고편입니다.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {officialTrailerEmbeds.map((scene) => (
            <div key={scene.youtubeId} className="rounded-xl border border-line p-4">
              <h3 className="font-serif text-lg text-paper">{scene.titleKo}</h3>
              <p className="mt-1 text-xs text-muted">{scene.filmTitleKo}</p>
              <p className="mt-2 text-sm text-muted">{scene.note}</p>
              <div className="mt-3">
                <YouTubeEmbed id={scene.youtubeId} title={scene.titleKo} />
              </div>
              <Link
                href={`/films/${scene.filmSlug}`}
                className="mt-3 inline-block text-xs text-gold"
              >
                영화 상세
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
