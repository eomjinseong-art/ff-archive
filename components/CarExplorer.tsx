"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { ImageSearchLink } from "@/components/ImageSearchLink";
import { PosterCard } from "@/components/PosterCard";
import { cars, type CarEra } from "@/data/cars";
import { displayFilmTitle, films, getFilm } from "@/data/films";
import {
  atmospherePlaceholder,
  carImages,
  otherVehicleImage,
} from "@/data/licensedImages";
import { allOtherVehicles } from "@/data/otherVehicles";
import { otherVehicleLookQuery } from "@/lib/googleImages";

const hubTabs = [
  { id: "main", label: "주요 차량" },
  { id: "other", label: "그 밖의 차량" },
] as const;

const sortTabs = [
  { id: "icon", label: "아이콘" },
  { id: "brand", label: "브랜드" },
  { id: "era", label: "시대" },
] as const;

type HubId = (typeof hubTabs)[number]["id"];
type SortId = (typeof sortTabs)[number]["id"];

function filmLabel(slug: string) {
  const official = getFilm(slug);
  return official ? displayFilmTitle(official) : slug;
}

function filmHref(slug: string) {
  const official = getFilm(slug);
  if (official) return official.hasDetail ? `/films/${official.slug}` : "/films";
  return "/films";
}

function CarGrid({ items }: { items: typeof cars }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((car) => (
        <PosterCard
          key={car.slug}
          title={`${car.nameKo} (${car.nameEn})`}
          meta={`${car.badges.join(" · ")} · ${car.filmTitleKo}`}
          tone={car.posterTone}
          image={carImages[car.slug]}
          aspect="video"
          href={car.hasL2 ? `/cars/${car.slug}` : undefined}
        />
      ))}
    </div>
  );
}

export function CarExplorer() {
  const [hub, setHub] = useState<HubId>("main");
  const [sort, setSort] = useState<SortId>("icon");

  const byBrand = useMemo(() => {
    const map = new Map<string, typeof cars>();
    for (const car of cars) {
      const list = map.get(car.brandKo) ?? [];
      list.push(car);
      map.set(car.brandKo, list);
    }
    return [...map.entries()];
  }, []);

  const byEra = useMemo(() => {
    const order: CarEra[] = ["1980s", "1990s", "2000s", "2010s", "2020s"];
    return order
      .map((era) => [era, cars.filter((car) => car.era === era)] as const)
      .filter(([, list]) => list.length > 0);
  }, []);

  const othersByFilm = useMemo(() => {
    const map = new Map<string, ReturnType<typeof allOtherVehicles>>();
    for (const vehicle of allOtherVehicles()) {
      const list = map.get(vehicle.filmSlug) ?? [];
      list.push(vehicle);
      map.set(vehicle.filmSlug, list);
    }
    return films
      .map((film) => film.slug)
      .filter((slug) => map.has(slug))
      .map((slug) => [slug, map.get(slug) ?? []] as const);
  }, []);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {hubTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setHub(tab.id)}
            className={`rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
              hub === tab.id ? "bg-gold text-bg" : "border border-line text-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {hub === "main" ? (
        <>
          <div className="flex gap-2 overflow-x-auto pb-4">
            {sortTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSort(tab.id)}
                className={`rounded-full px-4 py-1.5 text-sm whitespace-nowrap ${
                  sort === tab.id
                    ? "border border-gold bg-gold/10 text-gold"
                    : "border border-line text-muted"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {sort === "icon" && <CarGrid items={cars} />}

          {sort === "brand" && (
            <div className="space-y-10">
              {byBrand.map(([brand, list]) => (
                <section key={brand}>
                  <h2 className="mb-4 font-serif text-xl text-gold">{brand}</h2>
                  <CarGrid items={list} />
                </section>
              ))}
            </div>
          )}

          {sort === "era" && (
            <div className="space-y-10">
              {byEra.map(([era, list]) => (
                <section key={era}>
                  <h2 className="mb-4 font-serif text-xl text-gold">{era}</h2>
                  <CarGrid items={list} />
                </section>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-10">
          <p className="text-sm leading-6 text-muted">
            상세 페이지로 올리지 않은 차량을 작품 순으로 모았습니다. 배경으로만
            스친 차는 빼 두었습니다.
          </p>
          {othersByFilm.map(([slug, list]) => {
            const official = getFilm(slug);
            return (
              <section key={slug}>
                <div className="mb-4 flex items-end justify-between gap-3">
                  <h2 className="font-serif text-xl text-gold">{filmLabel(slug)}</h2>
                  <Link href={filmHref(slug)} className="text-xs text-muted hover:text-gold">
                    영화 페이지
                  </Link>
                </div>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {list.map((vehicle) => {
                    const licensed = otherVehicleImage(vehicle);
                    const image = licensed ?? atmospherePlaceholder;
                    return (
                      <li
                        key={`${slug}-${vehicle.nameEn}`}
                        className="rounded-lg border border-line bg-card p-3"
                      >
                        <CreditedMedia
                          image={image}
                          tone="linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)"
                          alt={licensed?.alt || `${vehicle.nameKo} (${vehicle.nameEn})`}
                          aspectClass="aspect-video"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <p className="mt-2 font-serif text-sm text-paper">
                          {vehicle.nameKo} ({vehicle.nameEn})
                        </p>
                        <p className="mt-2 text-xs leading-5 text-muted">{vehicle.note}</p>
                        {!licensed ? (
                          <ImageSearchLink
                            query={otherVehicleLookQuery({
                              nameKo: vehicle.nameKo,
                              nameEn: vehicle.nameEn,
                              filmTitleKo: official?.titleKo,
                              filmTitleEn: official?.titleEn,
                            })}
                            label="구글에서 이미지 보기"
                          />
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
