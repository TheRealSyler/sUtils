## Utility Functions

```typescript
'changes the given value by the given amount in the given time with the given interval.'
changeValueOverTime(timeSpan: number, amount: number, initialValue: number, intervalTime?: number): Observable<[number, boolean, number]>;
changeValueOverTimeHelper(subscription: Subscription, returnValues: [number, boolean, number]): number;
@example
let valueToChange = 10;
const sub = changeValueOverTime( 1000, 10, valueToChange).subscribe(returnValues => {
  valueToChange = changeValueOverTimeHelper(sub, returnValues);
});

'resizes a and b based on the newA value while maintaining the aspect Ratio.'
resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput?: { a: string; b: string;}): { [x: string]: number;};
@example
const _1080p = { height: 1080, width: 1920 }
const _1440p = resizeAndMaintainAspectRatio(1440, _1080p.height, _1080p.width, {a: 'height', b: 'width'})

'Gets a random string with the given length, if length is undefined the length will be 7.'
Random.String(length?: number): string;
@example
const randomString = Random.String(10);

'Gets a random integer within the given Range, if max is undefined the max will be 7.'
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

'Generate a random array.'
Random.Array(arrayLength?: number, itemType?: IType, customItem?: any, itemContent?: IRandomItem[],
options?: { keyLength: number, randomStringLength: number, randomNumberLength: number });
@example
const RandomArray = Random.Array()
Or
const RandomArray = Random.Array(10, 'string', [['ascending'], ['literal', '0000'], ['randomNumber']]);


'This function Loops over every entry of the default options obj,'
'if the entry is different in the options object the entry in the default obj will be set to the options entry.'

'Note: Note: if the entry is not in the default obj the entry will be ignored.'
defaultOptions(options: {}, default: {})
@example
const newOptions = {a: 15, b: 400, z: 100};
const default = {a: 100, b: 50, d: 100, c: 50};
const options = defaultOptions(newOptions, default); //? { a: 15, b: 400, d: 100, c: 50 }


'Validates a password or other strings with checks that have to be provided in the checks array,'
'if the passed key of the returned object is true'
'then all checks have been passed successfully.'
Password.Validate(password: string, checks: ValidateCheck[], options: ValidateOptions);
@example
const checks: Password.ValidateCheck[] = [
  { type: 'customRegex', customRegex: /123/g, negative: true, customError: 'cannot contain 123' },
  { type: 'uppercase' },
  { type: 'numbers' },
  { type: 'custom', customFunc: password => password !== '123456', customError: 'password cannot be 123456' }
];
Password.Validate('123456', checks)// doesn't pass
Password.Validate('Abcd', checks) // doesn't pass
Password.Validate('Abcd321', checks) // passes


'The password has to contain a uppercase letter, a number, a symbol, and cannot contain any spaces.'
Password.ValidateSimple(password: string);
@example
const password = 'theBestPassword123$'
Password.ValidateSimple(password); // should meet all the requirements and return true.

'Returns the clamped value.'
MathUtils.Clamp(value: number, min: number, max: number)
@example
const a = MathUtils.Clamp(200, 0, 100);//= a = 100
```