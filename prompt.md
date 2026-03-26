# Velox — 상세페이지 컴포넌트 라이브러리 프로젝트 초기 세팅

당신은 시니어 프론트엔드 아키텍트입니다.
아래 스펙을 **완전히** 구현해주세요. 중간에 멈추지 말고
모든 파일을 실제로 생성해주세요.

---

## 프로젝트 개요

- 이름: velox
- 목적: 전자상거래 상세페이지 컴포넌트 라이브러리 + 카테고리별 템플릿
- 수익 모델: 크몽 외주 납품 / 템플릿 판매 / 추후 SaaS 확장
- 핵심 차별점: Storybook을 클라이언트 쇼룸으로 활용

---

## 기술 스택 (정확히 이 버전으로)

- Node.js 20+
- pnpm 9+ (워크스페이스)
- Turborepo (모노레포 태스크 오케스트레이션)
- React 18 + TypeScript 5
- Vite 5
- Styled-components v6
- Storybook 8
- Framer Motion 11 (스크롤 애니메이션)
- sharp (이미지 처리, Node.js 전용)
- axios
- dotenv

---

## 모노레포 구조 (정확히 이대로 생성)

velox/
├── package.json                  # 루트 (pnpm workspace)
├── pnpm-workspace.yaml
├── turbo.json
├── .env.example
├── .gitignore
│
├── packages/
│   ├── ui/                       # 메인 컴포넌트 라이브러리
│   │   ├── package.json          # name: "@velox/ui"
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts          # 전체 export
│   │       ├── tokens/
│   │       │   ├── colors.ts
│   │       │   ├── typography.ts
│   │       │   └── spacing.ts
│   │       ├── sections/
│   │       │   ├── HeroSection/
│   │       │   │   ├── index.tsx
│   │       │   │   ├── HeroSection.stories.tsx
│   │       │   │   └── types.ts
│   │       │   ├── ProblemSection/
│   │       │   │   ├── index.tsx
│   │       │   │   ├── ProblemSection.stories.tsx
│   │       │   │   └── types.ts
│   │       │   ├── FeatureSection/
│   │       │   ├── TrustSection/
│   │       │   ├── ReviewSection/
│   │       │   ├── BeforeAfterSection/
│   │       │   └── CTASection/
│   │       └── templates/
│   │           ├── FoodTemplate/
│   │           │   ├── index.tsx
│   │           │   ├── FoodTemplate.stories.tsx
│   │           │   └── types.ts
│   │           ├── FashionTemplate/
│   │           └── ElectronicsTemplate/
│   │
│   ├── core/                     # 공유 유틸리티
│   │   ├── package.json          # name: "@velox/core"
│   │   └── src/
│   │       ├── index.ts
│   │       └── utils/
│   │           ├── formatPrice.ts
│   │           └── cn.ts         # classnames 헬퍼
│   │
│   └── tsconfig/                 # 공유 TypeScript 설정
│       ├── base.json
│       └── react.json
│
├── apps/
│   ├── storybook/                # Storybook 앱
│   │   ├── package.json
│   │   ├── .storybook/
│   │   │   ├── main.ts
│   │   │   ├── preview.tsx
│   │   │   └── velox-theme.ts    # 커스텀 Storybook 테마
│   │   └── src/
│   │       └── showroom/
│   │           └── Showroom.stories.tsx   # 클라이언트 쇼룸 스토리
│   │
│   └── docs/                     # (선택) 문서 사이트 자리
│       └── package.json
│
└── tools/
└── image-pipeline/           # 이미지 자동화 스크립트
├── package.json          # name: "@velox/image-pipeline"
├── src/
│   ├── index.ts          # CLI 진입점
│   ├── removeBg.ts       # remove.bg API
│   ├── generateBg.ts     # DALL-E API
│   └── composite.ts      # sharp 합성
└── tsconfig.json

---

## 구현 명세

### 1. 루트 설정 파일들

**package.json (루트)**
```json
{
  "name": "velox",
  "private": true,
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "storybook": "turbo storybook",
    "lint": "turbo lint",
    "image": "pnpm --filter @velox/image-pipeline start"
  }
}
```

**turbo.json**
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": { "dependsOn": ["^build"], "outputs": ["dist/**"] },
    "dev": { "cache": false, "persistent": true },
    "storybook": { "cache": false, "persistent": true },
    "lint": {}
  }
}
```

**pnpm-workspace.yaml**
```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tools/*'
```

---

### 2. 디자인 토큰 (@velox/ui/src/tokens/)

**colors.ts** — 카테고리별 브랜드 컬러 팔레트
```ts
export const categoryColors = {
  food: {
    primary: '#2D6A4F',
    secondary: '#74C69D',
    accent: '#FFB703',
    background: '#F8F9FA',
  },
  fashion: {
    primary: '#1A1A2E',
    secondary: '#E94560',
    accent: '#F5A623',
    background: '#FAFAFA',
  },
  electronics: {
    primary: '#0F3460',
    secondary: '#533483',
    accent: '#E94560',
    background: '#F0F4F8',
  },
} as const

export type Category = keyof typeof categoryColors
```

**typography.ts** — 폰트 스케일
```ts
export const fontSizes = {
  hero: { mobile: '28px', desktop: '48px' },
  h2: { mobile: '22px', desktop: '36px' },
  h3: { mobile: '18px', desktop: '24px' },
  body: '16px',
  small: '14px',
  badge: '12px',
} as const
```

**spacing.ts** — 간격 시스템 (8px 베이스)
```ts
export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '40px',
  xl: '64px',
  xxl: '96px',
} as const
```

---

### 3. HeroSection 컴포넌트 (완전 구현)

**types.ts**
```ts
export interface HeroSectionProps {
  productImage: string
  headline: string
  headlineHighlight?: string   // 강조할 단어 (브랜드 컬러로 표시)
  subheadline: string
  badgeText?: string
  badgeIcon?: string           // 이모지 또는 아이콘
  backgroundColor?: string
  textColor?: string
  ctaText?: string
  ctaSubText?: string          // CTA 하단 보조 문구 (예: "무료 반품 보장")
  onCTAClick?: () => void
  category?: 'food' | 'fashion' | 'electronics'
}
```

**index.tsx** 요구사항:
- Framer Motion으로 이미지 fade-in + slide-up 애니메이션
- 헤드라인 내 `headlineHighlight` 단어는 category 컬러로 강조
- badgeText가 있으면 펄스 애니메이션 뱃지 표시
- 우측 하단 스크롤 유도 bounce 화살표
- 모바일: 이미지 상단, 텍스트 하단 / 데스크톱: 좌우 50/50 레이아웃
- CTA 버튼은 hover 시 0.98 scale + 그림자 강화

**HeroSection.stories.tsx** — 아래 스토리 전부 구현:
```ts
// 스토리 목록
export const FoodDefault    // 식품: 초록 계열, "하루 한 잔, 10년을 바꿉니다"
export const FashionDark    // 패션: 다크 배경, "당신이 입는 것이 당신입니다"
export const Electronics    // 가전: 블루 계열, 기술 스펙 강조
export const WithBadge      // 뱃지 포함 ("누적 판매 3만개 ✓")
export const NoImage        // 이미지 없는 텍스트 온리 버전
export const MobileView     // viewport: 375px 강제
```

---

### 4. FoodTemplate (완전 구현)

섹션 구성 순서:
1. HeroSection
2. ProblemSection — "이런 분들께 추천합니다" (아이콘 그리드 3열)
3. IngredientSection — 원산지 지도 또는 성분 카드
4. ProcessSection — 생산과정 타임라인 (수평 스크롤, 모바일 대응)
5. TrustSection — 인증서 + 수상이력 + 언론보도 로고
6. ReviewSection — 별점 집계 + 사진후기 카드 그리드
7. CTASection — 최종 구매 유도 (가격 + 혜택 + 버튼)

**FoodTemplate types.ts 인터페이스 전체 정의 후 구현**

**FoodTemplate.stories.tsx:**
```ts
export const JejuGreenTea  // 제주 유기농 녹차 제품 예시 (실제 데이터처럼)
export const OrganicHoney  // 유기농 꿀 예시
// Controls 패널에서 themeColor 실시간 변경 가능
// 각 섹션 show/hide 토글 argType 추가
```

---

### 5. Storybook 설정 (.storybook/)

**main.ts** — 아래 애드온 전부 포함:
```ts
addons: [
  '@storybook/addon-essentials',   // controls, actions, docs
  '@storybook/addon-a11y',         // 접근성 검사
  '@storybook/addon-viewport',     // 반응형 뷰포트
]
```

**커스텀 뷰포트 프리셋** (preview.tsx에 추가):
```ts
const customViewports = {
  smartstore: { name: '스마트스토어', styles: { width: '1200px', height: '900px' } },
  coupang:    { name: '쿠팡',        styles: { width: '1280px', height: '900px' } },
  mobile:     { name: '모바일',      styles: { width: '375px',  height: '812px' } },
  tablet:     { name: '태블릿',      styles: { width: '768px',  height: '1024px' } },
}
```

**velox-theme.ts** — Storybook 브랜드 테마:
- 로고 텍스트: "⚡ Velox"
- 메인 컬러: #6366F1 (인디고)
- 폰트: 'Pretendard', sans-serif

---

### 6. Showroom 스토리 (클라이언트 납품용)

`apps/storybook/src/showroom/Showroom.stories.tsx`

기능:
- 카테고리 탭 (식품 / 패션 / 가전)
- 탭 선택 시 해당 템플릿 전체 미리보기
- 우측 패널: 실시간 컬러 / 텍스트 Controls
- "HTML로 내보내기" 버튼 → document.documentElement.outerHTML을 blob으로 다운로드
- "링크 복사" 버튼 → 현재 storybook URL을 클립보드에 복사

---

### 7. 이미지 파이프라인 (tools/image-pipeline/)

**CLI 사용법:**
```bash
# 배경 제거만
pnpm image remove --input ./product.jpg --output ./out/

# 배경 제거 + AI 배경 생성 + 합성
pnpm image composite \
  --input ./product.jpg \
  --prompt "clean white studio, soft shadows, professional product photo" \
  --size 800x800 \
  --output ./out/final.jpg

# 폴더 일괄 처리
pnpm image batch --dir ./products/ --prompt "..." --output ./out/
```

**removeBg.ts** — remove.bg API v1.0 사용
**generateBg.ts** — OpenAI DALL-E 3, 1024x1024, quality: "hd"
**composite.ts** — sharp로 배경 + 전경 레이어 합성, 그림자 추가

---

### 8. README.md (루트)

아래 섹션 포함:
- Velox 소개 + 슬로건 "Build fast. Sell faster."
- 빠른 시작 (pnpm install / pnpm storybook)
- 패키지 구조 설명
- 이미지 파이프라인 사용법
- 크몽 납품 워크플로우 (Step by step)
- 환경변수 설정 방법

---

## 실행 순서

1. 위 폴더 구조를 정확히 생성
2. 각 package.json 의존성 설치 명령어 실행
3. 모든 TypeScript 파일 구현 (타입 에러 없어야 함)
4. `pnpm storybook` 실행 시 브라우저에서 바로 확인 가능한 상태로 완성
5. 마지막에 `pnpm build` 성공 여부 확인

코드 품질 기준:
- TypeScript strict 모드 (any 금지)
- 모든 Props에 JSDoc 주석
- 모바일 퍼스트 반응형 (375px 기준)
- 콘솔 에러 없는 상태로 납품

지금 바로 시작해주세요.