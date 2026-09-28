import type { Metadata } from "next";
import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { cars } from "@/data/cars";
import { crew } from "@/data/crew";
import { directors } from "@/data/directors";
import { displayFilmTitle, films } from "@/data/films";
import { gadgets } from "@/data/gadgets";
import {
  directorImage,
  filmImages,
  gadgetImages,
  otherVehicleImage,
  personImage,
} from "@/data/licensedImages";
import { allOtherVehicles } from "@/data/otherVehicles";
import { villains } from "@/data/villains";
import { women } from "@/data/women";
import { pageMetadata } from "@/lib/seo";
import { FAN_SITE_DISCLAIMER } from "@/lib/site";
import type { LicensedImage } from "@/data/types";

export const metadata: Metadata = pageMetadata({
  title: "사진 출처",
  description:
    "분노의 질주 아카이브 차량·인물 사진의 저작자, 라이선스, 위키미디어 공용 출처.",
  path: "/credits",
});

function CreditCard({
  href,
  title,
  image,
  tone,
}: {
  href: string;
  title: string;
  image: LicensedImage;
  tone: string;
}) {
  return (
    <li className="rounded-lg border border-line bg-card p-3">
      <CreditedMedia
        image={image}
        tone={tone}
        alt={image.alt}
        aspectClass="aspect-video"
        sizes="(max-width: 640px) 100vw, 50vw"
        compactCredit={false}
        href={href}
      />
      <Link href={href} className="mt-2 block font-serif text-sm text-paper hover:text-gold">
        {title}
      </Link>
    </li>
  );
}

const stillMissing = [
  {
    href: "/gadgets/nitrous",
    name: "니트로스",
    why: "위키미디어 공용에서 자동차용 니트로스 보틀의 CC BY, CC BY-SA, CC0, 퍼블릭 도메인 사진을 찾지 못했습니다. 검색 결과는 의료용 아산화질소 자료라 영화 장비와 다른 물건입니다.",
  },
  {
    href: "/gadgets/vault",
    name: "증거 금고",
    why: "영화 소품 사진은 저작물입니다. 은행 금고 문은 다른 물건이라 참고 사진으로 쓰지 않았습니다.",
  },
  {
    href: "/gadgets/nightshade",
    name: "나이트셰이드",
    why: "영화 속 가공의 무기라, 같은 양산 모델의 자유 이용 사진이 없습니다.",
  },
  {
    href: "/gadgets/gods-eye",
    name: "갓스 아이",
    why: "추적 프로그램이라 찍을 수 있는 양산 제품이 없습니다. 화면 캡처는 쓰지 않습니다.",
  },
  {
    href: "/origin",
    name: "Racer X",
    why: "1998년 바이브 기사와 표지 사진은 저작물입니다. 포스터와 기사 사진은 쓰지 않습니다.",
  },
];

export default function CreditsPage() {
  const photographed = cars.flatMap((car) => (car.image ? [{ car, image: car.image }] : []));
  const missing = cars.filter((car) => !car.image);
  const others = allOtherVehicles().flatMap((vehicle) => {
    const image = otherVehicleImage(vehicle);
    return image ? [{ vehicle, image }] : [];
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="max-w-3xl rounded-lg border border-line bg-card p-4 text-sm leading-7 text-muted">
        {FAN_SITE_DISCLAIMER}
      </p>
      <h1 className="mt-8 font-serif text-3xl text-paper">사진 출처</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        차량과 인물 사진은 위키미디어 공용의 퍼블릭 도메인, CC0, CC BY, CC BY-SA
        사진만 씁니다. 영화 포스터, 스틸, 배급사 보도 사진이 아닙니다. 영화
        페이지의 차는 그 편에 나온 양산 모델의 참고 사진이고, 설명에 같은 모델
        참고 사진이라고 적습니다.
      </p>
      <h2 className="mt-8 font-serif text-xl text-gold">주요 차량</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {photographed.map(({ car, image }) => (
          <li key={car.slug} className="rounded-lg border border-line bg-card p-3">
            <CreditedMedia
              image={image}
              tone={car.posterTone}
              alt={image.alt}
              aspectClass="aspect-video"
              sizes="(max-width: 640px) 100vw, 50vw"
              compactCredit={false}
              href={`/cars/${car.slug}`}
            />
            <Link
              href={`/cars/${car.slug}`}
              className="mt-2 block font-serif text-sm text-paper hover:text-gold"
            >
              {car.nameKo} ({car.nameEn})
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-serif text-xl text-gold">그 밖의 차량</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {others.map(({ vehicle, image }) => (
          <li key={vehicle.photoSlug} className="rounded-lg border border-line bg-card p-3">
            <CreditedMedia
              image={image}
              tone="linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)"
              alt={image.alt}
              aspectClass="aspect-video"
              sizes="(max-width: 640px) 100vw, 50vw"
              compactCredit={false}
              href={`/films/${vehicle.filmSlug}`}
            />
            <Link
              href={`/films/${vehicle.filmSlug}`}
              className="mt-2 block font-serif text-sm text-paper hover:text-gold"
            >
              {vehicle.nameKo} ({vehicle.nameEn})
            </Link>
          </li>
        ))}
      </ul>
      <h2 className="mt-12 font-serif text-xl text-gold">영화</h2>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        각 편의 대표 양산 차량입니다. 같은 파일은 차량 칸에도 있습니다.
      </p>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {films.map((film) => {
          const image = filmImages[film.slug];
          if (!image) return null;
          return (
            <CreditCard
              key={film.slug}
              href={`/films/${film.slug}`}
              title={displayFilmTitle(film)}
              image={image}
              tone={film.posterTone}
            />
          );
        })}
      </ul>
      <h2 className="mt-12 font-serif text-xl text-gold">감독</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {directors.flatMap((director) => {
          const image = director.image ?? directorImage(director.slug);
          if (!image) return [];
          return [
            <CreditCard
              key={director.slug}
              href={`/directors/${director.slug}`}
              title={`${director.nameKo} (${director.nameEn})`}
              image={image}
              tone={director.posterTone}
            />,
          ];
        })}
      </ul>
      <h2 className="mt-12 font-serif text-xl text-gold">인물</h2>
      <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[
          ...crew.map((person) => ({ person, href: `/crew/${person.slug}` })),
          ...women
            .filter((person) => !crew.some((member) => member.slug === person.slug))
            .map((person) => ({ person, href: `/women/${person.slug}` })),
          ...villains
            .filter((person) => person.slug !== "deckard-shaw-antagonist")
            .map((person) => ({ person, href: `/villains/${person.slug}` })),
        ].flatMap(({ person, href }) => {
          const image = personImage(person.slug);
          if (!image) return [];
          return [
            <CreditCard
              key={href}
              href={href}
              title={`${person.nameKo} · ${person.performerKo}`}
              image={image}
              tone={person.posterTone}
            />,
          ];
        })}
      </ul>
      <section className="mt-10">
        <h2 className="font-serif text-xl text-gold">아직 사진이 없는 항목</h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
          {stillMissing.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-paper hover:text-gold">
                {item.name}
              </Link>
              {" — "}
              {item.why}
            </li>
          ))}
          {gadgets
            .filter((item) => !gadgetImages[item.slug] && !stillMissing.some((gap) => gap.href.endsWith(item.slug)))
            .map((item) => (
              <li key={item.slug}>
                <Link href={`/gadgets/${item.slug}`} className="text-paper hover:text-gold">
                  {item.nameKo}
                </Link>
                {" — 자유 이용 사진이 없습니다."}
              </li>
            ))}
        </ul>
      </section>
      {missing.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-serif text-xl text-gold">사진이 없는 차</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
            {missing.map((car) => (
              <li key={car.slug}>
                <Link href={`/cars/${car.slug}`} className="text-paper hover:text-gold">
                  {car.nameKo} ({car.nameEn})
                </Link>
                {" — 같은 양산 모델의 자유 라이선스 사진이 없어 플레이스홀더를 둡니다."}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
