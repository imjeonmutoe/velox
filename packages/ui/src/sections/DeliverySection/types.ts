export interface DeliverySectionProps {
  /** 주문 마감 시간 (기본: "오후 2시") */
  cutoffTime?: string;
  /** 도착 예정 (기본: "내일 도착") */
  deliveryTime?: string;
  /** 무료배송/교환/반품 등 혜택 */
  benefits?: string[];
  /** 브랜드 컬러 */
  themeColor?: string;
}