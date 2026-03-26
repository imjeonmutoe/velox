import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import FormData from 'form-data';

/**
 * remove.bg API v1.0으로 배경 제거
 * @param inputPath 입력 이미지 절대 경로
 * @param outputDir 출력 디렉토리 (없으면 입력과 동일 디렉토리)
 * @returns 출력 파일 경로
 */
export async function removeBg(inputPath: string, outputDir?: string): Promise<string> {
  const apiKey = process.env.REMOVE_BG_API_KEY;
  if (!apiKey) throw new Error('REMOVE_BG_API_KEY 환경변수가 설정되지 않았습니다');

  const form = new FormData();
  form.append('image_file', fs.createReadStream(inputPath));
  form.append('size', 'auto');

  const response = await axios.post('https://api.remove.bg/v1.0/removebg', form, {
    headers: { ...form.getHeaders(), 'X-Api-Key': apiKey },
    responseType: 'arraybuffer',
  });

  const baseName = path.basename(inputPath, path.extname(inputPath));
  const dir = outputDir ?? path.dirname(inputPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const outputPath = path.join(dir, `${baseName}_nobg.png`);
  fs.writeFileSync(outputPath, response.data);
  return outputPath;
}