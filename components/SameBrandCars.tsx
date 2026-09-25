import { sisterCarsForBrand } from "@/data/sisterCars";

export function SameBrandCars({ brand, brandKo }: { brand: string; brandKo: string }) {
  const links = sisterCarsForBrand(brand);
  if (links.length === 0) return null;

  return (
    <section className="mt-8">
      <h2 className="font-serif text-xl text-gold">다른 영화 속 같은 브랜드</h2>
      <p className="mt-2 text-xs leading-6 text-muted">
        {brandKo} 차가 있는 자매 아카이브만 연결합니다. 주소는 각 사이트의 차량 페이지가 열리는 것을 확인한 것입니다.
      </p>
      <ul className="mt-3 space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block rounded-lg border border-line px-4 py-3 hover:border-gold/60"
            >
              <span className="text-[11px] text-gold">{item.siteLabel}</span>
              <span className="mt-1 block text-sm text-paper">
                {item.nameKo} ({item.nameEn})
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
