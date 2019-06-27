import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
export function changeValueOverTime(
  timeSpan: number,
  amount: number,
  initialVaule: number,
  intervalTime?: number
): Observable<[number, boolean, number]> {
  intervalTime = intervalTime || 5;
  const change = (amount / timeSpan) * intervalTime;
  const initialDate = new Date();
  return interval(amount / timeSpan).pipe(
    map(() => [
      // @ts-ignore
      initialVaule + (change * (new Date().getTime() - initialDate.getTime())) / intervalTime,
      new Date().getTime() - initialDate.getTime() >= timeSpan ? true : false,
      // @ts-ignore
      initialVaule + (change * timeSpan) / intervalTime
    ])
  );
}
/**
 * `Note: has to be implemented like the example.`
 * @example
 * const sub = changeValueOverTime(timeSpan, amount, initialVaule, interval).subscribe(retrunValues => {
 *    valueToChange = changeValueOverTimeHelper(sub, retrunValues);
 * });
 * @param subscipton Subscription to unsubscribe from when ``returnValues[1]`` is `true`
 */
export function changeValueOverTimeHelper(subscipton: Subscription, returnValues: [number, boolean, number]): number {
  if (returnValues[1] === true) {
    subscipton.unsubscribe();
    return returnValues[2];
  } else {
    return returnValues[0];
  }
}

/**
 * resizes a and b based on the newA value while maintaining the aspect Ratio.
 * @param newA  resizes b while maintaining the aspect ratio.
 * @param a can be height, width, x, y or any other value.
 * @param b should be the height if a is the width.
 */
export function resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput = { a: 'a', b: 'b' }) {
  return { [renameOutput.a]: newA, [renameOutput.b]: (newA * b) / a };
}
/**
 * Gets a random string with the given length, if length is undefiend the length will be 7.
 * @param length maximun posible Number.
 */
export function getRandomString(length?: number): string {
  length = length || 7;
  return Math.random()
    .toString(35)
    .substr(2, length);
}
/**
 * Gets a random integer within the given Range, if max is undefiend max will be 7.
 * @param max maximun posible Number.
 */
export function getRandomInt(max?: number) {
  max = max || 7;
  return Math.floor(Math.random() * Math.floor(max));
}
