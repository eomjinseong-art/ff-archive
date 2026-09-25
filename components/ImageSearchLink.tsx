import { googleImagesUrl } from "@/lib/googleImages";

export function ImageSearchLink({
  query,
  label = "구글에서 이미지 보기",
}: {
  query: string;
  label?: string;
}) {
  return (
    <p className="mt-2">
      <a
        href={googleImagesUrl(query)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full border border-gold/50 px-3 py-1 text-xs text-gold hover:bg-gold/10"
      >
        {label}
      </a>
    </p>
  );
}
