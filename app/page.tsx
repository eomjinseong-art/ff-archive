import Link from "next/link";
import { AutopixBanner } from "@/components/AutopixBanner";
import { JsonLd } from "@/components/JsonLd";
import { CreditedMedia } from "@/components/CreditedMedia";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { PosterCard } from "@/components/PosterCard";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { crew } from "@/data/crew";
import { directors } from "@/data/directors";
import { cars } from "@/data/cars";
import { displayFilmTitle, featuredFilmSlugs, films } from "@/data/films";
import { gadgets } from "@/data/gadgets";
import { guides } from "@/data/guides";
import { issues } from "@/data/issues";
import {
  atmospherePlaceholder,
  filmImages,
  gadgetImages,
  personImage,
  portraitOrAtmosphere,
} from "@/data/licensedImages";
import { origin, ORIGIN_HREF } from "@/data/origin";
import {
  OFFICIAL_CHANNEL,
  officialCategoryLinks,
  officialChannelTabs,
} from "@/data/officialVideos";
import { quoteGroups } from "@/data/quotes";
import { homeRecordTeasers } from "@/data/records";
import { officialScenes } from "@/data/scenes";
import { SERIES_FRAMING, SERIES_FRAMING_NOTE, SERIES_TOTAL } from "@/data/series";
import { villains } from "@/data/villains";
import { women } from "@/data/women";
import { personLookQuery } from "@/lib/googleImages";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import {
  BOND_ARCHIVE_LABEL,
  MI_ARCHIVE_LABEL,
  SITE_NAME,
  SITE_SUB,
  SITE_TAGLINE,
  bondArchiveUrl,
  miArchiveUrl,
} from "@/lib/site";

const homeDescription =
  "분노의 질주 시리즈 순서, 차 종류, 등장인물과 악당을 모은 비공식 아카이브. 2001년 분노의 질주부터 2023년 라이드 오어 다이까지.";

export const metadata = pageMetadata({
  title: "분노의 질주 아카이브",
  description: homeDescription,
  path: "/",
});

const homeCrew = crew.filter((person) => person.featuredOnHome);
const homeWomen = women.filter((person) => person.featuredOnHome);
const homeVillains = villains.filter((person) => person.featuredOnHome);

const stats = [
  { n: SERIES_TOTAL, label: "본편" },
  { n: directors.length, label: "감독" },
  { n: crew.length, label: "패밀리" },
  { n: women.length, label: "여성" },
  { n: cars.length, label: "차량" },
  { n: gadgets.length, label: "장비" },
];

export default function HomePage() {
  const featured = featuredFilmSlugs
    .map((slug) => films.find((film) => film.slug === slug))
    .filter((film): film is (typeof films)[number] => Boolean(film));
  const teaserQuotes = quoteGroups[0]?.items ?? [];
  const sceneTeasers = officialScenes;

  return (
    <div>
      <JsonLd data={jsonLd([websiteLd(homeDescription)])} />
      <section className="border-b border-line bg-[radial-gradient(circle_at_top,_#C6A75E22,_transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Fast Archive</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-5xl">
            {SITE_NAME}
          </h1>
          <div className="mt-6 max-w-3xl space-y-5">
            <p className="text-base leading-7 text-paper sm:text-lg sm:leading-8">
              {SITE_TAGLINE}.
              <br />
              {SITE_SUB}
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
              1998년 바이브 기사 「Racer X」는 원작 칸에 따로 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-px bg-line sm:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg px-2 py-3 sm:px-4 sm:py-4">
              <p className="font-serif text-xl text-gold sm:text-2xl">{stat.n}</p>
              <p className="mt-1 text-[10px] text-muted sm:text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <p className="text-xs leading-6 text-muted sm:text-sm">
            {SERIES_FRAMING} {SERIES_FRAMING_NOTE}{" "}
            <Link href="/films" className="text-gold hover:underline">
              영화 허브
            </Link>
            {" · "}
            <Link href="/guide/order" className="text-gold hover:underline">
              분노의 질주 순서
            </Link>
            {" · "}
            <Link href="/cars" className="text-gold hover:underline">
              분노의 질주 차 종류
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <AutopixBanner />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href={ORIGIN_HREF} className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">원작</p>
            <h2 className="mt-2 font-serif text-xl text-paper">
              {origin.nameKo} ({origin.nameEn})
            </h2>
            <p className="mt-2 text-xs text-gold">{origin.years}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{origin.oneLiner}</p>
            <p className="mt-3 text-sm text-gold">원작 페이지 →</p>
          </Link>
          <Link href="/films" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">본편 {SERIES_TOTAL}</p>
            <h2 className="mt-2 font-serif text-xl text-paper">2001년부터 2023년까지</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              감독은 일곱입니다. 본편을 두 편 이상 맡은 사람은 저스틴 린뿐입니다.
            </p>
            <p className="mt-3 text-sm text-gold">감독별 목록 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">작품 {films.length}</h2>
          <Link href="/films" className="text-sm text-muted hover:text-gold">
            타임라인
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {films.map((film) => (
            <article key={film.slug} className="rounded-lg border border-line bg-card p-3 hover:border-gold/60">
              <CreditedMedia
                image={filmImages[film.slug] ?? atmospherePlaceholder}
                tone={film.posterTone}
                alt={filmImages[film.slug]?.alt ?? `${film.titleKo}`}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 50vw, 25vw"
                overlay={
                  filmImages[film.slug]
                    ? undefined
                    : { title: film.titleKo, meta: `${film.year} · ${film.directorKo}` }
                }
                href={`/films/${film.slug}`}
              />
              <Link href={`/films/${film.slug}`} className="mt-2 block">
                <p className="font-serif text-sm leading-snug text-paper">{film.titleKo}</p>
                <p className="mt-1 text-[11px] text-muted">
                  {film.year} · {film.directorKo}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">주목할 작품</h2>
          <Link href="/lin-era" className="text-sm text-muted hover:text-gold">
            린의 다섯 편
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {featured.map((film) => (
            <PosterCard
              key={film.slug}
              title={displayFilmTitle(film)}
              meta={`${film.year} · ${film.directorKo}`}
              tone={film.posterTone}
              href={`/films/${film.slug}`}
              image={filmImages[film.slug] ?? atmospherePlaceholder}
              overlayOnImage={!filmImages[film.slug]}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">감독 {directors.length}</h2>
          <Link href="/directors" className="text-sm text-muted hover:text-gold">
            감독 허브
          </Link>
        </div>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:grid-cols-7">
          {directors.map((director) => (
            <article key={director.slug} className="w-[46%] shrink-0 rounded-xl border border-line bg-card p-3 hover:border-gold/60 sm:w-auto">
              <CreditedMedia
                image={portraitOrAtmosphere(director.image)}
                tone={director.posterTone}
                alt={director.image?.alt ?? director.nameKo}
                aspectClass="aspect-[3/4]"
                sizes="(max-width: 640px) 46vw, 18vw"
                href={`/directors/${director.slug}`}
              />
              <Link href={`/directors/${director.slug}`} className="mt-2 block">
                <p className="font-serif text-sm leading-snug text-paper">{director.nameKo}</p>
                <p className="mt-1 text-[11px] text-gold">
                  {director.years} · {director.filmCount}편
                </p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">스턴트</h2>
          <Link href="/records" className="text-sm text-muted hover:text-gold">
            기록
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {homeRecordTeasers.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
              <p className="text-[11px] uppercase tracking-wide text-gold">{item.label}</p>
              <h3 className="mt-2 font-serif text-xl text-paper">{item.value}</h3>
              <p className="mt-2 text-sm text-muted">{item.meta}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">패밀리 {homeCrew.length}</h2>
          <Link href="/crew" className="text-sm text-muted hover:text-gold">
            전체 {crew.length}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeCrew.map((person) => {
            const image = personImage(person.slug);
            return (
              <article key={person.slug} className="rounded-xl border border-line bg-card p-4 hover:border-gold/60">
                <CreditedMedia
                  image={portraitOrAtmosphere(image)}
                  tone={person.posterTone}
                  alt={image?.alt ?? person.nameKo}
                  href={`/crew/${person.slug}`}
                  overlay={image ? undefined : { title: person.nameKo, meta: person.performerKo }}
                />
                <Link href={`/crew/${person.slug}`} className="mt-3 block">
                  <p className="font-serif text-lg text-paper">
                    {person.nameKo} ({person.nameEn})
                  </p>
                  <p className="mt-1 text-xs text-gold">
                    {person.affiliation} · {person.performerKo} · {person.filmCount}편
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{person.oneLiner}</p>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">여성 {homeWomen.length}</h2>
          <Link href="/women" className="text-sm text-muted hover:text-gold">
            여성 허브
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeWomen.map((person) => {
            const image = personImage(person.slug);
            return (
              <article key={person.slug} className="rounded-xl border border-line bg-card p-4 hover:border-gold/60">
                <CreditedMedia
                  image={portraitOrAtmosphere(image)}
                  tone={person.posterTone}
                  alt={image?.alt ?? person.nameKo}
                  href={`/women/${person.slug}`}
                  overlay={image ? undefined : { title: person.nameKo, meta: person.performerKo }}
                />
                <Link href={`/women/${person.slug}`} className="mt-3 block">
                  <p className="font-serif text-lg text-paper">
                    {person.nameKo} ({person.nameEn})
                  </p>
                  <p className="mt-1 text-xs text-gold">
                    {person.roleKind} · {person.performerKo}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{person.oneLiner}</p>
                </Link>
                {!image ? <ImageSearchLink query={personLookQuery(person)} label="초상 검색" /> : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">악당 {homeVillains.length}</h2>
          <Link href="/villains" className="text-sm text-muted hover:text-gold">
            악당 허브
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeVillains.map((person) => (
            <Link key={person.slug} href={`/villains/${person.slug}`} className="rounded-xl border border-line bg-card p-4 hover:border-gold/60">
              <p className="text-[11px] text-gold">{person.roleKind}</p>
              <h3 className="mt-1 font-serif text-lg text-paper">{person.nameKo}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{person.oneLiner}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">장비 {gadgets.length}</h2>
          <Link href="/gadgets" className="text-sm text-muted hover:text-gold">
            장비 허브
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gadgets.slice(0, 6).map((item) => (
            <article key={item.slug} className="rounded-xl border border-line bg-card p-4 hover:border-gold/60">
              <CreditedMedia
                image={gadgetImages[item.slug] ?? atmospherePlaceholder}
                tone={item.posterTone}
                alt={gadgetImages[item.slug]?.alt ?? item.nameKo}
                href={`/gadgets/${item.slug}`}
                overlay={
                  gadgetImages[item.slug]
                    ? undefined
                    : { title: item.nameKo, meta: item.filmTitleKo }
                }
              />
              <Link href={`/gadgets/${item.slug}`} className="mt-3 block">
                <p className="text-[11px] uppercase tracking-wide text-gold">{item.badges.join(" · ")}</p>
                <h3 className="mt-1 font-serif text-xl text-paper">{item.nameKo}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.oneLiner}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="font-serif text-xl text-gold">에디토리얼</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/cars/charger-rt-1970" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">차량</p>
            <h3 className="mt-2 font-serif text-xl text-paper">1970 차저 R/T</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              돔 아버지의 차입니다. 2편 스카이라인, 도쿄의 베일사이드, 더 세븐의 라이칸까지 차량 칸이 이 아카이브의 중심입니다.
            </p>
            <p className="mt-3 text-sm text-gold">차저 상세 →</p>
          </Link>
          <Link href="/guide/first" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">처음이라면</p>
            <h3 className="mt-2 font-serif text-xl text-paper">언리미티드부터</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              시리즈 문서는 언리미티드부터 습격과 첩보로 움직인다고 적습니다. 그다음 더 세븐, 그리고 2001년으로 돌아갑니다.
            </p>
            <p className="mt-3 text-sm text-gold">처음 가이드 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">명대사</h2>
          <Link href="/quotes" className="text-sm text-muted hover:text-gold">
            인용 모음
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {teaserQuotes.map((q) => (
            <blockquote key={q.textEn} className="rounded-xl border border-line bg-card p-4">
              <p className="font-serif text-lg text-paper">“{q.textKo}”</p>
              <p className="mt-2 text-xs text-muted">{q.speaker}</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">공식 영상 · {OFFICIAL_CHANNEL.handle}</h2>
          <Link href="/videos" className="text-sm text-muted hover:text-gold">
            채널 탭
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {officialChannelTabs.map((tab) => (
            <a key={tab.id} href={tab.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line bg-card p-3 hover:border-gold/60">
              <p className="font-serif text-sm text-paper">{tab.labelKo}</p>
              <p className="mt-1 text-[11px] text-gold">{tab.labelEn}</p>
            </a>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {officialCategoryLinks.map((item) => (
            <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10">
              {item.labelKo} ↗
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">명장면</h2>
          <Link href="/scenes" className="text-sm text-muted hover:text-gold">
            공식 예고편
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {sceneTeasers.map((scene) => (
            <div key={scene.youtubeId} className="rounded-xl border border-line p-4">
              <h3 className="font-serif text-lg text-paper">{scene.titleKo}</h3>
              <p className="mt-1 text-xs text-muted">{scene.filmTitleKo}</p>
              <p className="mt-2 text-sm text-muted">{scene.note}</p>
              <div className="mt-3">
                <YouTubeEmbed id={scene.youtubeId} title={scene.titleKo} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">가이드</h2>
          <Link href="/guide" className="text-sm text-muted hover:text-gold">
            세 갈래
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guide/${guide.slug}`} className="rounded-xl border border-line bg-card p-5 hover:border-gold">
              <h3 className="font-serif text-xl text-gold">
                {guide.titleKo}
                <span className="ml-2 text-base text-muted">({guide.titleEn})</span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-paper">{guide.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">이슈</h2>
          <Link href="/issues" className="text-sm text-muted hover:text-gold">
            글 {issues.length}편
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {issues.map((issue) => (
            <Link key={issue.slug} href={`/issues/${issue.slug}`} className="rounded-lg border border-line bg-card p-5 hover:border-gold/60">
              <span className="inline-block rounded-full border border-gold/50 px-2 py-0.5 text-[11px] text-gold">{issue.status}</span>
              <h3 className="mt-3 font-serif text-lg text-paper">{issue.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{issue.teaser}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link href="/locations" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">명소</p>
            <h2 className="mt-2 font-serif text-xl text-paper">로스앤젤레스 · 리우 · 런던 · 아부다비</h2>
            <p className="mt-3 text-sm leading-7 text-muted">촬영지와 화면의 랜드마크입니다.</p>
          </Link>
          <Link href="/trips" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">여행</p>
            <h2 className="mt-2 font-serif text-xl text-paper">촬영지 여행 코스</h2>
            <p className="mt-3 text-sm leading-7 text-muted">도시를 걷되, 추격 장면을 재현하지는 않습니다.</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-4">
        <p className="text-[11px] tracking-[0.22em] text-gold">영화 속 자동차</p>
        <h2 className="mt-2 font-serif text-2xl text-paper sm:text-3xl">세 아카이브</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          이 사이트는 분노의 질주 차량을 모은 허브입니다. 같은 네트워크에 007과 미션 임파서블
          아카이브가 있고, 브랜드가 겹치는 차만 상세 페이지에서 잇습니다.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={bondArchiveUrl("home")}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] text-gold">자매 아카이브</p>
            <h3 className="mt-2 font-serif text-xl text-paper">{BOND_ARCHIVE_LABEL}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              본드 영화의 차량과 장비. 포드처럼 겹치는 브랜드는 차량 상세에서 이어집니다.
            </p>
          </a>
          <a
            href={miArchiveUrl("home")}
            className="rounded-xl border border-line bg-card p-5 hover:border-gold/60"
          >
            <p className="text-[11px] text-gold">자매 아카이브</p>
            <h3 className="mt-2 font-serif text-xl text-paper">{MI_ARCHIVE_LABEL}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              미션 임파서블의 차량. 혼다와 람보르기니처럼 확인된 페이지만 연결합니다.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
