## Utility Functions

```typescript
'changes the given value by the given amount in the given time with the given interval.'
changeValueOverTime(timeSpan: number, amount: number, initialVaule: number, intervalTime?: number): Observable<[number, boolean, number]>;
changeValueOverTimeHelper(subscipton: Subscription, returnValues: [number, boolean, number]): number;
@example
let valueToChange = 10;
const sub = changeValueOverTime( 1000, 10, valueToChange).subscribe(retrunValues => {
  valueToChange = changeValueOverTimeHelper(sub, retrunValues);
});
// valueToChange should = 20 after 1s

'resizes a and b based on the newA value while maintaining the aspect Ratio.'
resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput?: { a: string; b: string;}): { [x: string]: number;};
@example
const _1080p = { height: 1080, width: 1920 }
const _1440p = resizeAndMaintainAspectRatio(1440, _1080p.height, _1080p.width, {a: 'height', b: 'width'})
// _1440p should = { height: 1440 ,width: 2560}

'Gets a random string with the given length, if length is undefiend the length will be 7.'
getRandomString(length?: number): string;
@example
const randomString = getRandomstring(10);

'Gets a random integer within the given Range, if max is undefiend the max will be 7.'
getRandomInt(max?: number): number;
@example
const randomInt = getRandomInt(10);

```
