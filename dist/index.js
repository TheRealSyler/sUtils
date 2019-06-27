"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * `Note: has to be implemented like the example.`
 *
 * changes the given value by the given amount in the given time with the given interval.
 * @example
 * const sub = changeValueOverTime( timeSpan, amount, initialVaule, interval).subscribe(retrunValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, retrunValues);
 * });
 * @param timeSpan Time to finish in Milliseconds
 * @param amount amount that gets added or subtracted from the `initialValue`
 * @param initialVaule Initial Value.
 * @param intervalTime Rate of Change in Milliseconds, 5ms by default.
 */
function changeValueOverTime(timeSpan, amount, initialVaule, intervalTime) {
    intervalTime = intervalTime || 5;
    var change = (amount / timeSpan) * intervalTime;
    var initialDate = new Date();
    return rxjs_1.interval(amount / timeSpan).pipe(operators_1.map(function () { return [
        // @ts-ignore
        initialVaule + (change * (new Date().getTime() - initialDate.getTime())) / intervalTime,
        new Date().getTime() - initialDate.getTime() >= timeSpan ? true : false,
        // @ts-ignore
        initialVaule + (change * timeSpan) / intervalTime
    ]; }));
}
exports.changeValueOverTime = changeValueOverTime;
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialVaule, interval).subscribe(retrunValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, retrunValues);
 * });
 * @param subscipton Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
function changeValueOverTimeHelper(subscipton, returnValues) {
    if (returnValues[1] === true) {
        subscipton.unsubscribe();
        return returnValues[2];
    }
    else {
        return returnValues[0];
    }
}
exports.changeValueOverTimeHelper = changeValueOverTimeHelper;
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
/**
 * Gets a random string with the given length, if length is undefiend the length will be 7.
 * @param length maximun posible Number.
 */
function getRandomString(length) {
    length = length || 7;
    return Math.random()
        .toString(35)
        .substr(2, length);
}
exports.getRandomString = getRandomString;
/**
 * Gets a random integer within the given Range, if max is undefiend max will be 7.
 * @param max maximun posible Number.
 */
function getRandomInt(max) {
    max = max || 7;
    return Math.floor(Math.random() * Math.floor(max));
}
exports.getRandomInt = getRandomInt;
