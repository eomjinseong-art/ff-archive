import type { Metadata } from "next";
import { GadgetExplorer } from "@/components/GadgetExplorer";

export const metadata: Metadata = { title: "가젯" };

export default function GadgetsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">가젯</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        자동 파괴 메시지, 가면, 스턴트 장비. 추격 차량은 영화 속 차량 칸에 있습니다.
      </p>
      <div className="mt-8">
        <GadgetExplorer />
      </div>
    </div>
  );
}
