export function generationRandom<T>(arr: T[]): number {
  return Math.floor(Math.random() * arr.length);
}
