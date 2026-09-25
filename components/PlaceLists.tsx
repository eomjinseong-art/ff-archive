"use client";

import Link from "next/link";
import { googleMapsSearchUrl } from "@/lib/googleImages";
import type { Landmark } from "@/data/landmarks";
import type { Trip } from "@/data/trips";
import type { Source } from "@/data/types";

function SourceLinks({ sources }: { sources: Source[] }) {
  if (sources.length === 0) return null;
  return (
    <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
      {sources.slice(0, 3).map((source) => (
        <a
          key={source.href}
          href={source.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          {source.label}
        </a>
      ))}
    </p>
  );
}

export function LandmarkList({ items }: { items: Landmark[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3 space-y-3">
      {items.map((place) => (
        <li key={place.slug} className="rounded-lg border border-line p-4">
          <p className="font-serif text-paper">
            {place.placeKo} ({place.placeEn})
          </p>
          <p className="mt-1 text-xs text-gold">
            {place.city} · {place.country}
            {place.isSet ? " · 세트·스튜디오" : ""}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{place.sceneNote}</p>
          <p className="mt-2 text-sm leading-6 text-paper">{place.whyPopular}</p>
          <a
            href={googleMapsSearchUrl(place.mapsQuery)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-gold hover:underline"
          >
            지도에서 찾기
          </a>
          <SourceLinks sources={place.sources} />
        </li>
      ))}
    </ul>
  );
}

export function TripList({ items }: { items: Trip[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-3 space-y-3">
      {items.map((trip) => (
        <li key={trip.slug} className="rounded-lg border border-line p-4">
          <p className="font-serif text-paper">
            {trip.nameKo} ({trip.nameEn})
          </p>
          <p className="mt-1 text-xs text-gold">
            {trip.city} · {trip.country}
          </p>
          <p className="mt-2 text-sm leading-6 text-muted">{trip.sceneNote}</p>
          <p className="mt-2 text-sm leading-6 text-paper">{trip.fameNote}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link href={`/trips#${trip.slug}`} className="text-xs text-gold hover:underline">
              여행 코스
            </Link>
            <a
              href={googleMapsSearchUrl(trip.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gold hover:underline"
            >
              지도에서 찾기
            </a>
          </div>
          <SourceLinks sources={trip.sources} />
        </li>
      ))}
    </ul>
  );
}
