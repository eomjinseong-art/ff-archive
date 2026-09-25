# 분노의 질주 아카이브

화면 제목은 분노의 질주 아카이브입니다. 패키지 이름은 `ff-archive`입니다.

2001년 《분노의 질주》부터 2023년 《라이드 오어 다이》까지, 본편 10편과 스핀오프
《홉스&쇼》를 정리하는 비공식 팬 아카이브입니다. Next.js App Router + TypeScript + Tailwind.

유니버설 픽처스, 배우, 권리자와 무관합니다. 포스터와 영화 스틸은 쓰지 않습니다.
이미지가 없으면 플레이스홀더를 둡니다.

사이트 주인의 실명은 적지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

공개 URL과 자매 사이트는 환경 변수로 바꿉니다. 예시는 `.env.example`에 있습니다.

```
NEXT_PUBLIC_SITE_URL=https://ff-archive.vercel.app
NEXT_PUBLIC_BOND_ARCHIVE_URL=https://bond-archive-two.vercel.app
NEXT_PUBLIC_MI_ARCHIVE_URL=https://mi-archive.vercel.app
NEXT_PUBLIC_SISTER_SITE_URL=https://car-parts-cpang.vercel.app
```

007 본드 아카이브 링크는 `bond-archive-two`입니다. `bond-archive.vercel.app`은
사진 디지털화 서비스라 차량 페이지가 없습니다.

영화 속 차량의 오토픽스 버튼은
`utm_source=ff-archive&utm_medium=cta&utm_campaign=ff-car`를 붙입니다.
헤더와 푸터의 오토픽스 링크도 캠페인은 `ff-car`입니다.
자매 아카이브 링크는 `utm_source=ff-archive&utm_campaign=archive-network`입니다.

방문자 수는 Abacus `ff-archive` / `visits`입니다. 눈 아이콘과 숫자만 표시합니다.

## 스크립트

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm start` — 빌드 결과 실행
