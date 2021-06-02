/**
 * Transforms a duration value in seconds in a 'mm:ss' string
 * @param duration The value in seconds
 * @returns The value as a 'mm:ss' string
 * @example
 * // returns '03:24'
 * getTrackDurationString(204)
 */
export function getTrackDurationString(duration: number): string {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
}
