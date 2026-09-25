import type { Metadata } from "next";
import { GadgetExplorer } from "@/components/GadgetExplorer";

export const metadata: Metadata = { title: "장비" };

export default function GadgetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">장비</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        니트로스 사출 좌석, 금고, 나이트셰이드, 갓스 아이. 추격 차량은 영화 속 차량 칸에 있습니다.
      </p>
      <div className="mt-8">
        <GadgetExplorer />
      </div>
    </div>
  );
}
