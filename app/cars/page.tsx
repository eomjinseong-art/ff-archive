import type { Metadata } from "next";
import { CarExplorer } from "@/components/CarExplorer";
import { SisterCta } from "@/components/SisterCta";
import { cars } from "@/data/cars";
import { MI_CAR_CTA_LABEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "영화 속 차량",
  description:
    "미션 임파서블 극장판에서 문서가 확인된 추격 차량. 사진은 같은 모델의 위키미디어 공용 사진입니다.",
};

export default function CarsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">영화 속 차량</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        보도자료나 IMCDb로 역할이 확인된 차와 바이크 {cars.length}대입니다. 세대가
        갈리거나 배경으로만 스친 차는 빼 두었습니다. 주요 차량은 아이콘·브랜드·시대로
        볼 수 있습니다. 사진은 촬영 차량이 아닙니다.
      </p>
      <div className="mt-5">
        <SisterCta label={MI_CAR_CTA_LABEL} />
      </div>
      <div className="mt-8">
        <CarExplorer />
      </div>
    </div>
  );
}
