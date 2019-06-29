"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * resizes a and b based on the newA value while maintaining the aspect Ratio.
 * @param newA  resizes b while maintaining the aspect ratio.
 * @param a can be height, width, x, y or any other value.
 * @param b should be the height if a is the width.
 */
function resizeAndMaintainAspectRatio(newA, a, b, renameOutput) {
    var _a;
    if (renameOutput === void 0) { renameOutput = { a: 'a', b: 'b' }; }
    return _a = {}, _a[renameOutput.a] = newA, _a[renameOutput.b] = (newA * b) / a, _a;
}
exports.resizeAndMaintainAspectRatio = resizeAndMaintainAspectRatio;
