/**
 * resizes a and b based on the newA value while maintaining the aspect Ratio.
 * @param newA  resizes b while maintaining the aspect ratio.
 * @param a can be height, width, x, y or any other value.
 * @param b should be the height if a is the width.
 */
export function resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput = { a: 'a', b: 'b' }) {
  return { [renameOutput.a]: newA, [renameOutput.b]: (newA * b) / a };
}
