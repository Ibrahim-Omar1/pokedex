export function extractIdFromUrl(url: string): number {
  const matches = url.match(/\/pokemon\/(\d+)\/?/);
  return matches ? Number.parseInt(matches[1], 10) : 0;
}
