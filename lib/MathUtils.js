"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils;
(function (MathUtils) {
    /**
     * Returns the clamped value.
     * @param value value to clamp
     * @param min minimum
     * @param max maximum
     */
    function Clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    MathUtils.Clamp = Clamp;
})(MathUtils = exports.MathUtils || (exports.MathUtils = {}));
