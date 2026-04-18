export function parseDataUrl(
  dataUrl: string,
): { buffer: Buffer; contentType: string } | null {
  const match = /^data:(image\/[a-z]+);base64,(.+)$/i.exec(dataUrl);
  if (!match || match[1] == null || match[2] == null) return null;
  const contentType = match[1];
  const base64 = match[2];
  const buffer = Buffer.from(base64, 'base64');
  return { buffer, contentType };
}
