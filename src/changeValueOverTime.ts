import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export function changeValueOverTime(
  timeSpan: number,
  amount: number,
  initialValue: number,
  intervalTime?: number
): Observable<[number, boolean, number]> {
  intervalTime = intervalTime || 5;
  const change = (amount / timeSpan) * intervalTime;
  const initialDate = new Date();
  return interval(amount / timeSpan).pipe(
    map(() => [
      // @ts-ignore
      initialValue + (change * (new Date().getTime() - initialDate.getTime())) / intervalTime,
      new Date().getTime() - initialDate.getTime() >= timeSpan ? true : false,
      // @ts-ignore
      initialValue + (change * timeSpan) / intervalTime
    ])
  );
}
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialValue, interval).subscribe(returnValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, returnValues);
 * });
 * @param subscription Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
export function changeValueOverTimeHelper(subscription: Subscription, returnValues: [number, boolean, number]): number {
  if (returnValues[1] === true) {
    subscription.unsubscribe();
    return returnValues[2];
  } else {
    return returnValues[0];
  }
}
