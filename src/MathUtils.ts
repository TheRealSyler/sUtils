export namespace MathUtils {
  /**
   * Returns the clamped value.
   * @param value value to clamp
   * @param min minimum
   * @param max maximum
   */
  export function Clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
}
