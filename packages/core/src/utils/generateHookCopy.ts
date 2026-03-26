import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

export async function generateHookCopy(
  productName: string,
  category: 'food' | 'fashion' | 'electronics',
): Promise<string[]> {
  const categoryLabel =
    category === 'food' ? '식품' : category === 'fashion' ? '패션' : '가전';

  const message = await client.messages.create({
    model: 'claude-opus-4-6',
    max_tokens: 300,
    messages: [
      {
        role: 'user',
        content: `스마트스토어 상세페이지용 훅 카피 3가지를 JSON 배열로만 응답해줘. 다른 텍스트 없이 JSON만.
제품명: ${productName}
카테고리: ${categoryLabel}
규칙: 각 20자 이내, [불편함/욕망 자극] + [해결/동경] 패턴, 한국어
예시: "마신 뒤에야 안다, 제대로 된 녹차를"
형식: ["카피1", "카피2", "카피3"]`,
      },
    ],
  });

  const text =
    message.content[0].type === 'text' ? message.content[0].text.trim() : '[]';
  return JSON.parse(text) as string[];
}