import { carPhotos } from "./carPhotos";
import type { LicensedImage } from "./types";

/** Production car of the same model. Not a film still or poster. */
function reference(slug: string, alt: string): LicensedImage {
  const photo = carPhotos[slug];
  if (!photo) throw new Error(`missing car photo ${slug}`);
  const referenceNote = photo.referenceNote
    ? `${photo.referenceNote} · 같은 모델 참고 사진`
    : "같은 모델 참고 사진";
  return { ...photo, alt, referenceNote };
}

export const filmPhotos: Record<string, LicensedImage> = {
  "the-fast-and-the-furious": reference(
    "supra-mk4",
    "1994 토요타 수프라 Mk IV 양산 차량. 2001년 분노의 질주와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "2-fast-2-furious": reference(
    "skyline-r34",
    "닛산 스카이라인 GT-R R34 양산 차량. 패스트 & 퓨리어스 2와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "tokyo-drift": reference(
    "rx7-veilside",
    "마쓰다 RX-7 베일사이드 포춘 양산 차량. 도쿄 드리프트와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "fast-and-furious": reference(
    "skyline-r34-2002",
    "닛산 스카이라인 GT-R R34 양산 차량. 분노의 질주: 더 오리지널과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "fast-five": reference(
    "ford-gt40",
    "포드 GT40 양산 차량. 분노의 질주: 언리미티드와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "fast-and-furious-6": reference(
    "charger-daytona-1969",
    "1969 닷지 차저 데이토나 양산 차량. 분노의 질주: 더 맥시멈과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "furious-7": reference(
    "lykan-hypersport",
    "W 모터스 라이칸 하이퍼스포츠 양산 차량. 분노의 질주: 더 세븐과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "fate-of-the-furious": reference(
    "charger-dom-f8",
    "닷지 차저 양산 차량. 분노의 질주: 더 익스트림과 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "hobbs-and-shaw": reference(
    "mclaren-720s",
    "2017 맥라렌 720S 양산 차량. 홉스&쇼와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  f9: reference(
    "fiero-f9",
    "폰티액 피에로 양산 차량. 분노의 질주: 더 얼티메이트와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
  "fast-x": reference(
    "charger-rt-1970-x",
    "1970 닷지 차저 R/T 양산 차량. 분노의 질주: 라이드 오어 다이와 같은 모델의 참고 사진이며 영화 스틸이 아닙니다.",
  ),
};
