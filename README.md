<span id="DOC_GENERATION_MARKER_0"></span>
# SUF (Browser)

- **[Animate](#animate)**

  - [Animate](#animate)

- **[MathUtils](#mathutils)**

  - [MathUtils](#mathutils)

- **[Password](#password)**

  - [Password](#password)

- **[Random](#random)**

  - [Random](#random)

- **[resizeAndMaintainAspectRatio](#resizeandmaintainaspectratio)**

  - [resizeAndMaintainAspectRatio](#resizeandmaintainaspectratio)

### Animate


##### Animate

```typescript
function Animate(from: number, to: number, time: number, callback: (currentValue: number) => void): void;
```

### MathUtils


##### MathUtils

```typescript
namespace MathUtils {
    /**
     * Returns the clamped value.
     * @param value value to clamp
     * @param min minimum
     * @param max maximum
     */
    function Clamp(value: number, min: number, max: number): number;
}
```

### Password


##### Password

```typescript
namespace Password {
    /**
     * Defines the properties of a Password.Validate Check
     */
    interface ValidateCheck {
        /**
         * Type of the check
         */
        type: 'custom' | 'numbers' | 'letters' | 'lowercase' | 'uppercase' | 'spaces' | 'symbols' | 'customRegex';
        /**
         * if the type is one of  **`'numbers' | 'letters' | 'lowercase' | 'uppercase' | 'spaces' | 'symbols'`** then this
         * property defines the times that the type can occur without failing the check, if negative is true then
         * this property defines how many time this type is allowed.
         */
        times?: number;
        /**
         * if true then the result of **`'numbers' | 'letters' | 'lowercase' | 'uppercase' | 'spaces' | 'symbols' | 'customRegex'`**
         * will be inverted, example if the type is  **`customRegex`** and customRegex =  **`/123/g`** then the password cannot contain  **`123`**.
         */
        negative?: boolean;
        /**
         * if the type is **`custom`** then this function will be executed.
         */
        customFunc?: (password: string) => boolean;
        /**
         * if the type is **`customRegex`** then this regex will be tested.
         */
        customRegex?: RegExp;
        /**
         * if the type is **`custom | customRegex`** then this will be the error the if the check fail's.
         */
        customError?: string;
    }
    /**
     * the Options for the Password.Validate function.
     */
    interface ValidateOptions {
        /**
         * the maximum length of the password, if the password is longer then the other checks will not be performed.
         */
        maxLength?: number;
        /**
         * the minimum length of the password, if the password is shorter then the other checks will not be performed.
         */
        minLength?: number;
        /**
         * if true additional data will be returned.
         */
        passData?: boolean;
    }
    interface ValidateReturn {
        /**
         * array that contains the error messages of all the failed checks.
         */
        errors: string[];
        /**
         * true if all the checks have passed successfully.
         */
        passed: boolean;
        /**
         * array with the additional data about each test.
         */
        validationData?: {
            negative: boolean;
            errType: string;
        }[];
    }
    /**
     * Validates a password or other strings with checks that have to be provided in the checks array,
     * if the **`passed`** key of the returned object is true
     * then all checks have been passed successfully.
     *
     * @param password password or other string to be checked.
     * @param checks array of checks that will be performed.
     * @param options min and max length and other stuff.
     */
    function Validate(password: string, checks: ValidateCheck[], options?: ValidateOptions): ValidateReturn;
    /**
     * The password has to contain an uppercase letter, number and cannot contain any spaces.
     * @param password password or string to check.
     */
    function ValidateSimple(password: string): boolean;
}
```

### Random


##### Random

```typescript
namespace Random {
    /**
     * Gets a random string with the given length, if length is undefined the length will be 7.
     * @param length maximum possible Number.
     */
    function String(length?: number): string;
    /**
     * Gets a random integer within the given Range, if max is undefined max will be 10000.
     * @param max maximum possible Number.
     */
    function IntNumber(max?: number): number;
    /**
     * Generate a random object.
     * @param keyNum number of items in the object.
     * @param itemContent an array that defines the content of each item.
     * @param itemType the type of the item.
     */
    function Object(keyNum?: number, itemType?: IType, customItem?: any, itemContent?: IRandomItem[], options?: {
        keyLength: number;
        useIndexAsKey: boolean;
        randomStringLength: number;
        randomNumberLength: number;
    }): {
        [x: string]: any;
    };
    /**
     * Generate a random array.
     * @param arrayLength length of the generated array.
     * @param itemContent an array that defines the content of each item.
     * @param itemType the type of the item.
     */
    function Array(arrayLength?: number, itemType?: IType, customItem?: any, itemContent?: IRandomItem[], options?: {
        keyLength: number;
        randomStringLength: number;
        randomNumberLength: number;
    }): any[];
}
```

### resizeAndMaintainAspectRatio


##### resizeAndMaintainAspectRatio

```typescript
/**
 * resizes a and b based on the newA value while maintaining the aspect Ratio.
 * @param newA  resizes b while maintaining the aspect ratio.
 * @param a can be height, width, x, y or any other value.
 * @param b should be the height if a is the width.
 */
function resizeAndMaintainAspectRatio(newA: number, a: number, b: number, renameOutput?: {
    a: string;
    b: string;
}
```

*Generated With* **[ts-doc-gen](https://www.npmjs.com/package/ts-doc-gen)**
<span id="DOC_GENERATION_MARKER_1"></span>
