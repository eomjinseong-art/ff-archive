import type { Metadata } from "next";
import Link from "next/link";
import { CreditedMedia } from "@/components/CreditedMedia";
import { cars } from "@/data/cars";
import { pageMetadata } from "@/lib/seo";
import { FAN_SITE_DISCLAIMER } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "사진 출처",
  description:
    "분노의 질주 아카이브 차량 사진의 저작자, 라이선스, 위키미디어 공용 출처.",
  path: "/credits",
});

export default function CreditsPage() {
  const photographed = cars.flatMap((car) => (car.image ? [{ car, image: car.image }] : []));
  const missing = cars.filter((car) => !car.image);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="max-w-3xl rounded-lg border border-line bg-card p-4 text-sm leading-7 text-muted">
        {FAN_SITE_DISCLAIMER}
      </p>
      <h1 className="mt-8 font-serif text-3xl text-paper">사진 출처</h1>
      <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">
        차량 사진은 위키미디어 공용의 퍼블릭 도메인, CC0, CC BY, CC BY-SA 사진만
        씁니다. 영화 스틸이나 배급사 보도 사진이 아닙니다. 같은 차종이 없으면
        가까운 차종을 참고로 쓰고, 그 사실을 사진 설명에 적습니다.
      </p>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
