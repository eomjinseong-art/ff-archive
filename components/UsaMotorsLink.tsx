import { usaMotorsForCar } from "@/data/usaMotors";

export function UsaMotorsLink({ slug }: { slug: string }) {
  const link = usaMotorsForCar(slug);
  if (!link) return null;

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">미국차 컬렉션</h2>
      <p className="mt-2 text-xs leading-6 text-muted">
        같은 네임플레이트가 있는 자매 카탈로그만 연결합니다. 주소는 모델 페이지가 열리는 것을 확인한 것입니다.
      </p>
      <ul className="mt-3 space-y-2">
        <li>
          <a
            href={link.href}
            className="block rounded-lg border border-line px-4 py-3 hover:border-gold/60"
          >
            <span className="text-[11px] text-gold">{link.siteLabel}</span>
            <span className="mt-1 block text-sm text-paper">
              {link.nameKo} ({link.nameEn})
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
