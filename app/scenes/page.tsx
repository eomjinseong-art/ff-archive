import type { Metadata } from "next";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { fanClips, officialScenes } from "@/data/scenes";

export const metadata: Metadata = {
  title: "명장면",
};

export default function ScenesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">명장면</h1>
      <p className="mt-2 text-sm text-muted">
        공식 예고편을 개봉 연도 순으로 모았습니다.
      </p>
      <p className="mt-2 text-xs text-muted">
        공식 예고 {officialScenes.length}편 · 팬 링크 {fanClips.length}건
      </p>

      <div className="mt-8 space-y-10">
        {officialScenes.map((scene) => (
          <section key={scene.filmSlug}>
            <h2 className="font-serif text-xl text-gold">{scene.titleKo}</h2>
            <p className="mt-1 text-xs text-muted">{scene.filmTitleKo}</p>
            <p className="mt-2 text-sm text-paper">{scene.note}</p>
            <div className="mt-3">
              <YouTubeEmbed id={scene.youtubeId} title={scene.titleKo} />
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 border-t border-line pt-8">
        <h2 className="font-serif text-xl text-gold">팬 클립 링크</h2>
        <p className="mt-2 text-xs text-muted">외부 · 비공식</p>
        <ul className="mt-4 space-y-3">
          {fanClips.map((clip) => (
            <li key={clip.href} className="rounded-lg border border-line p-4">
              <a
                href={clip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold underline"
              >
                {clip.titleKo} ↗
              </a>
              <p className="mt-1 text-xs text-muted">{clip.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
