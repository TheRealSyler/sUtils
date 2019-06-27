import { Subscription, Observable } from 'rxjs';
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
export declare function changeValueOverTime(timeSpan: number, amount: number, initialVaule: number, intervalTime?: number): Observable<[number, boolean, number]>;
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialVaule, interval).subscribe(retrunValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, retrunValues);
 * });
 * @param subscipton Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
export declare function changeValueOverTimeHelper(subscipton: Subscription, returnValues: [number, boolean, number]): number;
/**
 * resizes a and b based on the newA value while maintaining the aspect Ratio.
 * @param newA  resizes b while maintaining the aspect ratio.
 * @param a can be height, width, x, y or any other value.
 * @param b should be the height if a is the width.
 */
export declare function resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput?: {
    a: string;
    b: string;
}): {
    [x: string]: number;
};
/**
 * Gets a random string with the given length, if length is undefiend the length will be 7.
 * @param length maximun posible Number.
 */
export declare function getRandomString(length?: number): string;
/**
 * Gets a random integer within the given Range, if max is undefiend max will be 7.
 * @param max maximun posible Number.
 */
export declare function getRandomInt(max?: number): number;
