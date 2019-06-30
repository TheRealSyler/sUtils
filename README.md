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

'resizes a and b based on the newA value while maintaining the aspect Ratio.'
resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput?: { a: string; b: string;}): { [x: string]: number;};
@example
const _1080p = { height: 1080, width: 1920 }
const _1440p = resizeAndMaintainAspectRatio(1440, _1080p.height, _1080p.width, {a: 'height', b: 'width'})

'Gets a random string with the given length, if length is undefiend the length will be 7.'
Random.String(length?: number): string;
@example
const randomString = Random.String(10);

'Gets a random integer within the given Range, if max is undefiend the max will be 7.'
Random.IntNumber(max?: number): number;
@example
const randomInt = Random.IntNumber(10);

'Generate a random object.'
Random.Object(keyNum?: number, itemType?: IType, customItem?: any, itemContent?: IRandomItem[],
options?: { keyLength: number, useIndexAsKey: boolean, randomStringLength: number, randomNumberLength: number});
@example
const RandomObject = Random.Object();
Or
const RandomObject = Random.Object(10, 'string', [['ascending'], ['literal', ' - String Data: '], ['randomString'], ['randomNumber']]);

'Genreate a random array.'
Random.Array(arrayLength?: number, itemType?: IType, customItem?: any, itemContent?: IRandomItem[], 
options?: { keyLength: number, randomStringLength: number, randomNumberLength: number });
@example
const RandomArray = Random.Array()
Or
const RandomArray = Random.Array(10, 'string', [['ascending'], ['literal', '0000'], ['randomNumber']]);


'This function Loops over every entry of the default options obj,'
'if the entry is different in the options object the entry in the default obj will be set to the options entry.'

'Note: if there are entries in the options obj that are not in the default obj the entry will be ignored.'
defualtOptions(options: {}, defualt: {})
@example
const newOptions = {a: 15, b: 400, z: 100};
const default = {a: 100, b: 50, d: 100, c: 50};
const options = defualtOptions(newOptions, default); //? { a: 15, b: 400, d: 100, c: 50 }
```