import type { Metadata } from "next";
import { AutopixBanner } from "@/components/AutopixBanner";
import { CarExplorer } from "@/components/CarExplorer";
import { JsonLd } from "@/components/JsonLd";
import { cars } from "@/data/cars";
import { itemListLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 차 종류",
  description: `분노의 질주 차 종류 ${cars.length}대. 수프라, 도미닉의 1970 차저, 스카이라인처럼 문서에 이름이 있는 차만 모았습니다.`,
  path: "/cars",
});

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd
        data={jsonLd([
          itemListLd(
            "분노의 질주 차 종류",
            "/cars",
            cars.filter((car) => car.hasL2).map((car) => ({
              name: car.nameKo,
              path: `/cars/${car.slug}`,
            })),
          ),
        ])}
      />
      <h1 className="font-serif text-3xl text-paper">분노의 질주 차 종류</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        줄거리, 제작 단락, IMCDb로 역할이 확인된 차 {cars.length}대입니다. 세대가
        갈리거나 배경으로만 스친 차는 빼 두었습니다. 주요 차량은 아이콘·브랜드·시대로
        볼 수 있습니다. 사진은 촬영 차량이 아닙니다.
      </p>
      <div className="mt-6">
        <AutopixBanner />
      </div>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
