Velox Storybook Showroom을 아래 구조로 완전히 재구축해줘.

## 🎯 핵심 변경사항
1. 앱 런처 홈을 벤토 그리드로 재구성
2. 스마트스토어/와디즈 듀얼 모드 완전 제거
3. 식품/패션/가전 각각 완전히 다른 디자인으로 고도화

---

## 📱 SCREEN 1: 홈 (벤토 그리드)

### 전체 배경
- #0f0f0f 다크

### 상단 헤더
- 좌측: ⚡ Velox (보라 #6366f1, 24px bold)
- 우측: 프로필 원형 아이콘

### 벤토 그리드 레이아웃
CSS Grid로 구현. 6개 카드, 불규칙 크기.

[식품 - 2열 1행] [패션 - 1열 1행]
[가전 - 1열 1행] [홈리빙 - 1열 2행]
[뷰티 - 1열 1행] [+ 새템플릿 - 1열 1행]


각 카드 스타일:
- 배경: 카테고리별 그라디언트
  - 식품: linear-gradient(135deg, #134e4a, #065f46)
  - 패션: linear-gradient(135deg, #1e1b4b, #312e81)
  - 가전: linear-gradient(135deg, #0c1445, #1e3a5f)
  - 홈리빙: linear-gradient(135deg, #3b1f0a, #7c3f1a)
  - 뷰티: linear-gradient(135deg, #4a0d2e, #831843)
  - 새템플릿: #1a1a1a (점선 보더)
- 보더 라운드: 24px
- 이모지: 48px
- 카테고리명: 14px #ffffff99
- 호버: 보더 2px solid #6366f1 + scale(1.02)
- 클릭: 해당 카테고리 상세 진입

### 하단 통계 바
- 배경: #111111
- 3개 항목:
  🎨 6 / 템플릿
  👥 0 / 클라이언트  
  📄 0 / 납품
- 숫자: 24px bold 흰색
- 라벨: 12px #666

---

## 📄 SCREEN 2: 카테고리 상세

### 상단 네비게이션
- 배경: #0f0f0f
- 뒤로가기: 흰색 원형 버튼 36px
  - 안에 ← 화살표
  - 호버: 배경 #6366f1 (transition 0.2s)
- 중앙: 카테고리명 16px 흰색
- 우측: 빈 공간

### 미리보기 영역
- 배경: #f5f5f5
- 해당 카테고리 템플릿 렌더링

### 하단 액션 바
- 배경: #0f0f0f
- "🎨 커스터마이즈" → #1a1a1a
- "HTML 내보내기" → #6366f1

### 트랜지션
홈 → 상세: fadeIn + translateY(20px→0)
상세 → 홈: slideDown

---

## 🍵 식품 템플릿 디자인 (SmartStore 최적화)

### 컨셉
따뜻하고 신뢰감 있는 "원산지 직송" 느낌

### 색상
- 배경: #ffffff
- 포인트: #2d6a4f (딥 그린)
- 서브: #f0fdf4
- 텍스트: #1a1a1a

### 섹션 구성
1. CheckPointSection
  - 제목: "CHECK POINT" 영문 대문자, 딥그린
  - 3개 카드: 체크 아이콘 + 15자 이내 텍스트
  - 배경: #f0fdf4

2. HeroImageSection
  - 훅 카피: 48px bold, 중앙 정렬
  - 예시: "마신 뒤에야 안다, 제대로 된 녹차를"
  - 서브: 20px #666
  - 풀와이드 이미지

3. TodayDeliverySection
  - "오늘출발" 72px bold 딥그린 (초대형 타이포)
  - 배송 정보 뱃지 3개

4. FeatureSection (Point 1,2,3)
  - 번호: 64px bold #f0fdf4 (배경처럼 연하게)
  - 제목: 28px bold
  - 이미지 좌우 교차 배치

5. CertSection
  - 인증서/수상 이미지 그리드
  - "믿고 마시는 이유" 타이틀

6. ReviewSection
  - 후기 3개, 별점 포함
  - 심플 카드 스타일

7. FinalCTASection
  - "지금 바로 구매하세요" 텍스트
  - 버튼 없음 (스마트스토어 자동 제공)

---

## 👗 패션 템플릿 디자인

### 컨셉
흑백 미니멀 룩북. 여백이 곧 럭셔리.

### 색상
- 배경: #ffffff
- 포인트: #000000
- 서브텍스트: #888888
- 액센트: #f5f5f5

### 섹션 구성
1. LookbookHeroSection
  - 풀블리드 이미지 (4:5 비율)
  - 좌하단에 브랜드명 + 시즌 텍스트
  - 배경 오버레이 없음, 이미지 자체로 승부

2. StylePointSection
  - 좌: 전신 착용 이미지
  - 우: 포인트 텍스트 3줄
  - 폰트: 40px bold 블랙

3. FabricDetailSection
  - 소재 클로즈업 이미지 (정사각형)
  - 소재명: 24px bold
  - 소재 설명: 14px #888, 간결하게

4. SizeGuideSection
  - 미니멀 사이즈표
  - 배경: #f5f5f5
  - 핏 가이드 텍스트

5. WearingSection
  - 2열 이미지 그리드
  - 착용 무드샷

6. ReviewSection
  - 후기 3개
  - 별점 + 구매자 사이즈 정보 포함

---

## 📱 가전 템플릿 디자인

### 컨셉
다크 테크 감성. 수치로 설득하는 스펙 쇼케이스.

### 색상
- 배경: #0a0a0a (다크)
- 포인트: #3b82f6 (블루)
- 서브: #1a1a1a
- 텍스트: #ffffff
- 뮤트: #666666

### 섹션 구성
1. TechHeroSection
  - 배경: #0a0a0a
  - 제품 이미지 중앙 배치
  - 제품명: 48px bold 흰색
  - 포인트 수치: 파란색 강조
  - 예시: "48H 배터리" "4K 디스플레이"

2. SpecHighlightSection
  - 3개 수치 카드
  - 숫자: 64px bold 파란색
  - 단위: 20px 흰색
  - 카드 배경: #1a1a1a

3. FeatureSection (Point 1,2,3)
  - 다크 배경
  - 기능 이미지 + 스펙 텍스트
  - 포인트 컬러: #3b82f6

4. CompareSection
  - 경쟁사 비교표
  - 헤더: #1a1a1a
  - Velox 제품 열: #3b82f6 강조
  - ✓ / ✗ 아이콘

5. CertSection
  - 수상/인증 배지
  - 다크 배경에 흰색 텍스트

6. ReviewSection
  - 다크 카드 스타일
  - 별점 파란색

7. CTASection
  - "지금 구매하기" 파란 버튼
  - 배경: #0a0a0a

---

## ✅ 기존 코드 완전 제거
- 스마트스토어/와디즈 탭 토글 → 삭제
- 상단 카테고리 탭바 → 삭제
- 기존 균일 그리드 → 벤토 그리드로 교체
- 기존 섹션 컴포넌트 → 카테고리별 분리된 섹션으로 교체

## 📌 이미지 defaultProps

### 식품 (제주 유기농 녹차)
hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
leaf: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800"
farm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
process: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800"
cert: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800"
review: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800"

### 패션
hero: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
wear: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
fabric: "https://images.unsplash.com/photo-1558171813-0c9cb0e5ca5f?w=800"
lifestyle: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
detail: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"

### 가전
hero: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"
front: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800"
camera: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800"
lifestyle: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=800"

