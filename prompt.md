현재 Velox 템플릿을 아래 전략에 맞게 전면 리디자인해줘.

## 🎯 핵심 전략: 플랫폼별 듀얼 모드 템플릿

FoodTemplate, FashionTemplate, ElectronicsTemplate 모두
mode: "smartstore" | "wadiz" 두 가지 버전으로 분리.
Storybook Showroom에서 탭으로 전환 가능하게 구현.

---

## 📱 MODE 1: smartstore (스마트스토어 최적화)

### 섹션 순서 (순서 엄수)
1. CheckPointSection   - 체크리스트 카드 3개
2. HeroImageSection    - 강렬한 헤드 카피 + 큰 이미지 1장
3. BenefitSection      - 혜택 배너 3종 (오늘출발/무료배송/사은품)
4. FeatureSection      - Point 1, 2, 3 기능 상세
5. CertSection         - 인증/수상/안전 이미지
6. ReviewSection       - 후기 3개
7. FinalCTASection     - 구매 유도 (버튼 없음, 텍스트만)

### 비주얼 규칙
- 배경: #FFFFFF 고정 (다크 배경 절대 금지)
- 최대 너비: 860px
- 이미지:텍스트 = 7:3 비율
- 폰트: Pretendard CDN 인라인 삽입
  https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css
- 헤드라인: 48~64px bold
- "오늘출발" 같은 핵심 메시지: 초대형 타이포 활용
- 애니메이션: 전부 제거 (스마트스토어 미지원)
- 전체 높이: 2만px 이내

### CheckPointSection 구조
- 제목: "CHECK POINT" (영문 대문자)
- 카드 3개, 각 카드에:
  ✓ 아이콘 + 짧은 텍스트 (15자 이내)
- 배경: #F8F8F8, 라운드 카드

### 카피라이팅 패턴
- 훅 카피: [불편함/욕망 자극] + [해결/동경]
- 예시: "마신 뒤에야 안다, 제대로 된 녹차를"
- 절대 금지: 긴 설명문, 브랜드 자랑

### HTML 내보내기 요구사항
- 모든 스타일 인라인 변환
- 외부 JS 없음
- 이미지 URL 절대경로

---

## 🌐 MODE 2: wadiz (와디즈 / 자사몰용)

### 섹션 순서
1. HookSection         - 풀스크린 비주얼 + 1줄 카피
2. ProductShowSection  - 룩북형 이미지 2~3장
3. FeatureSection      - 아이콘 + 짧은 텍스트 3개
4. LifestyleSection    - 라이프스타일 감성 이미지
5. ReviewSection       - 후기 3개
6. CTASection          - 구매 버튼 포함

### 비주얼 규칙
- 배경: #FFFFFF 기본, 포인트 섹션 #F8F8F8
- 여백: padding 80px 이상
- 이미지 비율: 1:1 또는 4:5 (인스타 감성)
- 헤드라인: 48~64px bold
- 한 섹션 카피: 20자 이내 1줄 + 보조텍스트

### 모션 효과 (Framer Motion)
- 스크롤 진입 시: fadeInUp 애니메이션
- 이미지 호버: scale(1.03) subtle zoom
- CTA 버튼: pulse 효과

### GIF 지원
- 각 섹션 이미지 props에 gifUrl?: string 추가
- gifUrl 있으면 <img> 태그, 없으면 일반 이미지

---

## 🖼️ 이미지 기본값 (defaultProps)

### FoodTemplate (제주 유기농 녹차)
heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
leafImage: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
farmImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
processImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800"
certImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
reviewImage: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800"

### FashionTemplate
heroImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
wearImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
fabricImage: "https://images.unsplash.com/photo-1558171813-0c9cb0e5ca5f?w=800"
lifestyleImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"

### ElectronicsTemplate
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
frontImage: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800"
cameraImage: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800"
lifestyleImage: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=800"

---

## 📚 Storybook Showroom 업데이트

Showroom.stories.tsx에서:
- 각 템플릿 카드에 "스마트스토어" / "와디즈" 탭 추가
- 탭 전환 시 mode prop 변경되어 실시간 미리보기
- HTML 내보내기 버튼: smartstore 모드일 때만 활성화
  (인라인 스타일 변환 + 애니메이션 제거 자동 처리)

---

## ✅ 적용 우선순위
1. FoodTemplate 먼저 완성 (스마트스토어 모드)
2. Storybook에서 확인
3. FashionTemplate, ElectronicsTemplate 동일하게 적용