import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

/**
 * OpenAI DALL-E 3으로 배경 이미지 생성
 * @param prompt 배경 프롬프트
 * @param outputDir 출력 디렉토리
 * @returns 생성된 이미지 파일 경로
 */
export async function generateBg(prompt: string, outputDir = 'output'): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error('OPENAI_API_KEY 환경변수가 설정되지 않았습니다');

  const response = await axios.post(
    'https://api.openai.com/v1/images/generations',
    {
      model: 'dall-e-3',
      prompt,
      n: 1,
      size: '1024x1024',
      quality: 'hd',
      response_format: 'url',
    },
    { headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' } }
  );

  const imageUrl: string = response.data.data[0].url;
  const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `bg_${Date.now()}.png`);
  fs.writeFileSync(outputPath, imageResponse.data);
  return outputPath;
}