# ⚡ Velox

> **Build fast. Sell faster.**

전자상거래 상세페이지 컴포넌트 라이브러리 + 카테고리별 템플릿.
Storybook을 클라이언트 쇼룸으로 활용하는 크몽 납품 최적화 모노레포.

---

## 빠른 시작

```bash
# 의존성 설치
pnpm install

# Storybook 실행 (클라이언트 쇼룸)
pnpm storybook

# 전체 빌드
pnpm build
```

## 패키지 구조

```
velox/
├── packages/
│   ├── ui/          # 컴포넌트 라이브러리 (@velox/ui)
│   ├── core/        # 공유 유틸리티 (@velox/core)
│   └── tsconfig/    # 공유 TypeScript 설정
├── apps/
│   ├── storybook/   # 클라이언트 쇼룸
│   └── docs/        # 문서 사이트 (예정)
└── tools/
    └── image-pipeline/  # 이미지 자동화
```

### 컴포넌트

| 섹션 | 설명 |
|------|------|
| HeroSection | 히어로 배너 (Framer Motion 애니메이션) |
| ProblemSection | 고객 문제 제시 |
| FeatureSection | 제품 특장점 3열 그리드 |
| IngredientSection | 성분/원재료 카드 |
| ProcessSection | 생산 과정 타임라인 (수평 스크롤) |
| TrustSection | 신뢰 지표 (숫자 + 인증) |
| ReviewSection | 별점 + 사진후기 |
| BeforeAfterSection | 사용 전후 비교 |
| CTASection | 최종 구매 유도 |

### 템플릿

| 템플릿 | 타겟 |
|--------|------|
| FoodTemplate | 식품·건강식품 |
| FashionTemplate | 의류·패션 |
| ElectronicsTemplate | 가전·IT기기 |

---

## 이미지 파이프라인

`.env` 파일에 API 키 설정 후 사용:

```bash
cp .env.example .env
# REMOVE_BG_API_KEY, OPENAI_API_KEY 입력
```

```bash
# 배경 제거
pnpm image remove --input ./product.jpg --output ./out/

# 배경 제거 + AI 배경 생성 + 합성
pnpm image composite \
  --input ./product.jpg \
  --prompt "clean white studio, soft shadows, professional product photo" \
  --size 800x800 \
  --output ./out/

# 폴더 일괄 처리
pnpm image batch --dir ./products/ --prompt "..." --output ./out/
```

---

## 크몽 납품 워크플로우

### Step 1. 클라이언트 요구사항 파악
- 판매 카테고리 확인 (식품 / 패션 / 가전)
- 제품 이미지, 카피 수집
- 컬러 브랜드 가이드 확인

### Step 2. 이미지 파이프라인 실행
```bash
pnpm image composite --input ./client-product.jpg --prompt "..."
```

### Step 3. 템플릿 커스터마이징
```tsx
// apps/storybook/src/showroom/Showroom.stories.tsx
<FoodTemplate
  productName="클라이언트 제품명"
  themeColor="#클라이언트 브랜드컬러"
  ...
/>
```

### Step 4. Storybook 쇼룸으로 납품
```bash
pnpm storybook build
# storybook-static/ 폴더를 Netlify/Vercel 배포
```

### Step 5. 링크 전달
- Storybook URL을 클라이언트에게 전달
- 쇼룸에서 실시간 미리보기 가능
- "HTML로 내보내기" 버튼으로 정적 파일 납품

---

## 환경변수

```bash
# .env
REMOVE_BG_API_KEY=  # https://www.remove.bg/api
OPENAI_API_KEY=     # https://platform.openai.com
```

---

## 라이선스

Private — 크몽 외주 및 템플릿 판매 전용# velox
