import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import type { OtherVehicle } from "@/data/otherVehicles";
import { otherVehicleImage } from "@/data/licensedImages";

export function OtherVehiclesList({ vehicles }: { vehicles: OtherVehicle[] }) {
  if (vehicles.length === 0) return null;
  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">그 밖의 차량</h2>
      <ul className="mt-3 space-y-3">
        {vehicles.map((vehicle) => {
          const image = otherVehicleImage(vehicle);
          return (
          <li
            key={`${vehicle.nameEn}-${vehicle.nameKo}`}
            className="rounded-lg border border-line p-4"
          >
            {image ? (
              <CreditedMedia
                image={image}
                tone="linear-gradient(165deg,#1a1a14 0%,#0B0D10 50%,#C6A75E22 100%)"
                alt={image.alt}
                aspectClass="aspect-video"
                sizes="(max-width: 640px) 100vw, 40rem"
              />
            ) : null}
            <p className="mt-2 text-sm text-paper">
              {vehicle.nameKo} ({vehicle.nameEn})
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">{vehicle.note}</p>
            <p className="mt-2 text-xs text-gold">{vehicle.popularity}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {vehicle.carSlug ? (
                <Link
                  href={`/cars/${vehicle.carSlug}`}
                  className="text-xs text-gold hover:underline"
                >
                  차량 허브
                </Link>
              ) : null}
              {vehicle.sources?.slice(0, 2).map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold hover:underline"
                >
                  {source.label}
                </a>
            ))}
          </div>
        </li>
          );
        })}
      </ul>
    </section>
  );
}
