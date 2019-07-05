export declare namespace Password {
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
        maxLength: number;
        /**
         * the minimum length of the password, if the password is shorter then the other checks will not be performed.
         */
        minLength: number;
        /**
         * if true additional data will be returned.
         */
        passData: boolean;
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
     * @param password password or other string to be checked.
     * @param checks array of checks that will be performed.
     * @param options Extra Options.
     */
    function Validate(password: string, checks: ValidateCheck[], options?: ValidateOptions): ValidateReturn;
    /**
     * The password has to contain a uppercase letter, a number, a symbol, and cannot contain any spaces.
     * @param password password or string to check.
     */
    function ValidateSimple(password: string): boolean;
}
