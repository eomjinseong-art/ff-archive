import { guides } from "@/data/guides";

const release = guides.find((guide) => guide.slug === "release");
const chronology = guides.find((guide) => guide.slug === "chronology");

function titled(steps: { year: number; titleKo: string }[]) {
  return steps.map((step) => `${step.year}년 ${step.titleKo}`).join(", ");
}

export const watchOrderFaqs = [
  {
    question: "분노의 질주 개봉 순서는 어떻게 되나요?",
    answer: release
      ? `개봉 순은 ${titled(release.steps)}입니다. 홉스&쇼는 본편 열 편 밖의 스핀오프입니다.`
      : "",
  },
  {
    question: "분노의 질주 이야기 순서는 개봉 순과 같나요?",
    answer: chronology
      ? `같지 않습니다. 시리즈 문서가 적은 이야기 순은 ${chronology.steps.map((step) => step.titleKo).join(" → ")}입니다. 도쿄 드리프트는 2006년에 개봉했지만, 시점은 더 맥시멈과 더 세븐 사이입니다.`
      : "",
  },
  {
    question: "홉스&쇼는 분노의 질주 몇 편인가요?",
    answer:
      "홉스&쇼는 2019년 스핀오프입니다. 본편 열 편에 넣지 않습니다. 시점은 더 익스트림 이후라고만 확인되고, 더 얼티메이트와의 앞뒤는 단정하지 않습니다.",
  },
  {
    question: "분노의 질주 보는 법은 무엇을 고르면 되나요?",
    answer:
      "개봉된 해대로 보려면 개봉 순을, 이야기 속 시간대로 보려면 이야기 순을 고릅니다. 두 목록을 하나의 순서로 합치지 않습니다.",
  },
].filter((item) => item.answer);
