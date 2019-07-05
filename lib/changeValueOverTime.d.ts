import { Subscription, Observable } from 'rxjs';
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
export declare function changeValueOverTime(timeSpan: number, amount: number, initialValue: number, intervalTime?: number): Observable<[number, boolean, number]>;
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialValue, interval).subscribe(returnValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, returnValues);
 * });
 * @param subscription Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
export declare function changeValueOverTimeHelper(subscription: Subscription, returnValues: [number, boolean, number]): number;
