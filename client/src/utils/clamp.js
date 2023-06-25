export function clamp(min, actual, max) {
  return Math.min(Math.max(min, actual), max);
}