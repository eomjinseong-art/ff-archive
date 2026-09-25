import type { Metadata } from "next";
import { WomenHub } from "@/components/WomenHub";

export const metadata: Metadata = { title: "여성" };

export default function WomenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">여성</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        요원, 협력, 조연. 일사와 그레이스는 요원 칸에도 있습니다. 포스터는 쓰지 않습니다.
      </p>
      <WomenHub />
    </div>
  );
}
