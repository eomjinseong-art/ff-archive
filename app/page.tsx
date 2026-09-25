import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { PosterCard } from "@/components/PosterCard";
import { SisterCta } from "@/components/SisterCta";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { agents } from "@/data/agents";
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
import { SERIES_FRAMING, SERIES_FRAMING_NOTE } from "@/data/series";
import { villains } from "@/data/villains";
import { women } from "@/data/women";
import { personLookQuery } from "@/lib/googleImages";
import { AUTOPIX_LABEL, BOND_ARCHIVE_LABEL, MI_CAR_CTA_LABEL, SITE_NAME, bondArchiveUrl } from "@/lib/site";

const homeAgents = agents.filter((person) => person.featuredOnHome);
const homeWomen = women.filter((person) => person.featuredOnHome);
const homeVillains = villains.filter((person) => person.featuredOnHome);

const stats = [
  { n: films.length, label: "극장판" },
  { n: directors.length, label: "감독" },
  { n: agents.length, label: "요원" },
  { n: women.length, label: "여성" },
  { n: cars.length, label: "차량" },
  { n: gadgets.length, label: "가젯" },
];

export default function HomePage() {
  const featured = featuredFilmSlugs
    .map((slug) => films.find((film) => film.slug === slug))
    .filter((film): film is (typeof films)[number] => Boolean(film));
  const teaserQuotes = quoteGroups[0]?.items ?? [];
  const sceneTeasers = officialScenes.filter((scene) =>
    ["ghost-protocol", "rogue-nation", "fallout"].includes(scene.filmSlug),
  );

  return (
    <div>
      <section className="border-b border-line bg-[radial-gradient(circle_at_top,_#C6A75E22,_transparent_55%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Mission Archive</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-5xl">
            「{SITE_NAME}」
          </h1>
          <div className="mt-6 max-w-3xl space-y-5">
            <p className="text-base leading-7 text-paper sm:text-lg sm:leading-8">
              1996년 《미션 임파서블》부터
              <br className="sm:hidden" /> 2025년 《파이널 레코닝》까지.
              <br />
              극장판 8편과 에단 헌트의 팀.
              <br />
              요원, 악당, 차량, 가젯, 스턴트를 모았습니다.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
              1966년 텔레비전은 원작 칸에 따로 있습니다.
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
          </p>
        </div>
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
            <p className="text-[11px] uppercase tracking-wide text-gold">극장판 8</p>
            <h2 className="mt-2 font-serif text-xl text-paper">1996년부터 2025년까지</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              감독은 다섯입니다. 크리스토퍼 맥쿼리만 네 편을 연달아 맡습니다.
            </p>
            <p className="mt-3 text-sm text-gold">감독별 목록 →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="font-serif text-xl text-gold">극장판 8</h2>
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
          <Link href="/mcquarrie-era" className="text-sm text-muted hover:text-gold">
            맥쿼리 시대
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
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0">
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
          <h2 className="font-serif text-xl text-gold">요원 {homeAgents.length}</h2>
          <Link href="/agents" className="text-sm text-muted hover:text-gold">
            전체 {agents.length}
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeAgents.map((person) => {
            const image = personImage(person.slug);
            return (
              <article key={person.slug} className="rounded-xl border border-line bg-card p-4 hover:border-gold/60">
                <CreditedMedia
                  image={portraitOrAtmosphere(image)}
                  tone={person.posterTone}
                  alt={image?.alt ?? person.nameKo}
                  href={`/agents/${person.slug}`}
                  overlay={image ? undefined : { title: person.nameKo, meta: person.performerKo }}
                />
                <Link href={`/agents/${person.slug}`} className="mt-3 block">
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
          <h2 className="font-serif text-xl text-gold">가젯 {gadgets.length}</h2>
          <Link href="/gadgets" className="text-sm text-muted hover:text-gold">
            가젯 허브
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
          <Link href="/gadgets/self-destruct" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">형식</p>
            <h3 className="mt-2 font-serif text-xl text-paper">수락하신다면</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              1966년 테이프의 문장이 극장판의 브리핑으로 남습니다. 수신인과 매체는 바뀌고, 부인 조항은 남습니다.
            </p>
            <p className="mt-3 text-sm text-gold">자동 파괴 메시지 →</p>
          </Link>
          <Link href="/guide/first" className="rounded-xl border border-line bg-card p-5 hover:border-gold/60">
            <p className="text-[11px] uppercase tracking-wide text-gold">처음이라면</p>
            <h3 className="mt-2 font-serif text-xl text-paper">고스트 프로토콜부터</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              팀이 보이고, 조직이 부인됩니다. 그다음 로그네이션에서 맥쿼리의 줄이 시작되고, 1996년으로 돌아가면 헌트의 출발이 보입니다.
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
            <h2 className="mt-2 font-serif text-xl text-paper">프라하 · 두바이 · 빈 · 파리</h2>
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
        <div className="rounded-xl border border-line bg-card p-5 sm:p-8">
          <p className="text-[11px] uppercase tracking-wide text-gold">{AUTOPIX_LABEL}</p>
          <h2 className="mt-2 font-serif text-2xl text-paper">영화 속 차량 다음, 자동차 용품</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
            차량 목록과 각 상세 페이지의 버튼은 {AUTOPIX_LABEL}로 갑니다. 촬영 차량을 판매하지 않습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/cars" className="rounded-full border border-line px-4 py-2 text-sm text-paper hover:border-gold">
              영화 속 차량
            </Link>
            <SisterCta label={MI_CAR_CTA_LABEL} />
            <a href={bondArchiveUrl("home")} className="rounded-full border border-line px-4 py-2 text-sm text-muted hover:text-gold">
              {BOND_ARCHIVE_LABEL}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
