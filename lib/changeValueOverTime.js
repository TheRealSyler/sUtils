"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
/**
 * `Note: has to be implemented like the example.`
 *
 * changes the given value by the given amount in the given time with the given interval.
 * @example
 * const sub = changeValueOverTime( timeSpan, amount, initialValue, interval).subscribe(returnValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, returnValues);
 * });
 * @param timeSpan Time to finish in Milliseconds
 * @param amount amount that gets added or subtracted from the `initialValue`
 * @param initialValue Initial Value.
 * @param intervalTime Rate of Change in Milliseconds, 5ms by default.
 */
function changeValueOverTime(timeSpan, amount, initialValue, intervalTime) {
    intervalTime = intervalTime || 5;
    var change = (amount / timeSpan) * intervalTime;
    var initialDate = new Date();
    return rxjs_1.interval(amount / timeSpan).pipe(operators_1.map(function () { return [
        // @ts-ignore
        initialValue + (change * (new Date().getTime() - initialDate.getTime())) / intervalTime,
        new Date().getTime() - initialDate.getTime() >= timeSpan ? true : false,
        // @ts-ignore
        initialValue + (change * timeSpan) / intervalTime
    ]; }));
}
exports.changeValueOverTime = changeValueOverTime;
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialValue, interval).subscribe(returnValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, returnValues);
 * });
 * @param subscription Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
function changeValueOverTimeHelper(subscription, returnValues) {
    if (returnValues[1] === true) {
        subscription.unsubscribe();
        return returnValues[2];
    }
    else {
        return returnValues[0];
    }
}
exports.changeValueOverTimeHelper = changeValueOverTimeHelper;
