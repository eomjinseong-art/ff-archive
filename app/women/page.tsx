import type { Metadata } from "next";
import { WomenHub } from "@/components/WomenHub";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "분노의 질주 여성 인물",
  description:
    "분노의 질주 여성 인물. 레티, 미아, 지젤, 램지, 엘레나, 해티, 수키. 패밀리 문서와 겹치면 그 칸에도 있습니다.",
  path: "/women",
});

export default function WomenPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl text-paper">여성</h1>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
        패밀리, 협력, 레이서. 레티와 미아, 지젤, 램지, 엘레나는 패밀리 칸에도 있습니다. 포스터는 쓰지 않습니다.
      </p>
      <WomenHub />
    </div>
  );
}
