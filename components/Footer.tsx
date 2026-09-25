import { AUTOPIX_LABEL, BOND_ARCHIVE_LABEL, SITE_NAME, autopixUrl, bondArchiveUrl } from "@/lib/site";

const OFFICIAL_CHANNEL = "https://www.youtube.com/@MissionImpossible";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm leading-6 text-muted">
        <h2 className="font-serif text-xs tracking-[0.22em] text-gold">
          비공식 팬 아카이브
        </h2>
        <div className="mt-3 max-w-3xl space-y-3">
          <p>
            「{SITE_NAME}」는 비공식 팬 아카이브이며, 파라마운트, 스카이댄스,
            배우와 사진의 권리자를 포함한 저작권·상표권자와 무관합니다. 상업적
            공식 사이트가 아닙니다.
          </p>
          <p>
            본문은 바깥 자료를 참고한 재서술입니다. 출처는 각 페이지 하단에
            있습니다. 포스터와 영화 스틸은 쓰지 않습니다.
          </p>
          <p>권리자의 요청이 있으면 해당 내용을 삭제하거나 고칩니다.</p>
        </div>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          <a
            href={OFFICIAL_CHANNEL}
            className="underline decoration-line underline-offset-4 hover:text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            공식 채널 · YouTube @MissionImpossible
          </a>
          <a
            href={autopixUrl("footer")}
            className="underline decoration-line underline-offset-4 hover:text-gold"
          >
            자동차 용품 · {AUTOPIX_LABEL}
          </a>
          <a
            href={bondArchiveUrl("footer")}
            className="underline decoration-line underline-offset-4 hover:text-gold"
          >
            자매 사이트 · {BOND_ARCHIVE_LABEL}
          </a>
        </p>
      </div>
    </footer>
  );
}
