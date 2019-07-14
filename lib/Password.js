"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Password;
(function (Password) {
    /**
     * Validates a password or other strings with checks that have to be provided in the checks array,
     * if the **`passed`** key of the returned object is true
     * then all checks have been passed successfully.
     *
     * @param password password or other string to be checked.
     * @param checks array of checks that will be performed.
     * @param options min and max length and other stuff.
     */
    function Validate(password, checks, options) {
        if (options === void 0) { options = { maxLength: 100, minLength: 0, passData: false }; }
        var errors = [];
        var data = [];
        var passed = true;
        for (var i = 0; i < checks.length; i++) {
            if (password.length > options.maxLength || password.length < options.minLength) {
                errors.push("Password is to " + (password.length > options.maxLength ? 'long' : 'short'));
                passed = false;
                break;
            }
            var check = _validateCheck(checks[i], password);
            data.push(check.data);
            if (check.err) {
                errors.push(check.err);
            }
            if (check.passed === false) {
                passed = false;
            }
        }
        if (options.passData) {
            return { passed: passed, errors: errors, validationData: data };
        }
        else {
            return { passed: passed, errors: errors };
        }
    }
    Password.Validate = Validate;
    /**
     * The password has to contain an uppercase letter, number and cannot contain any spaces.
     * @param password password or string to check.
     */
    function ValidateSimple(password) {
        return Password.Validate(password, [{ type: 'uppercase' }, { type: 'numbers' }, { type: 'spaces', negative: true }]).passed;
    }
    Password.ValidateSimple = ValidateSimple;
    function _validateCheck(check, password) {
        var err = undefined;
        var passed = true;
        var handled;
        var data = { negative: check.negative, errType: undefined };
        switch (check.type) {
            case 'custom':
                if (check.customFunc) {
                    passed = check.customFunc(password);
                    err = passed ? undefined : check.customError;
                }
                else {
                    err = 'customFunc has to be defined';
                }
                data.errType = 'custom';
                break;
            case 'customRegex':
                if (check.customRegex) {
                    passed = check.customRegex.test(password);
                    if (check.negative) {
                        passed = !passed;
                    }
                    err = passed ? undefined : check.customError;
                }
                else {
                    err = 'customRegex has to be defined';
                }
                data.errType = 'customRegex';
                break;
            case 'numbers':
                handled = _validateHandleRegex(password.match(/\d/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one number', 'password cannot contain numbers', "password has to contain " + check.times + " or more numbers", "password cannot contain more than " + check.times + " numbers");
                }
                break;
            case 'letters':
                handled = _validateHandleRegex(password.match(/[a-z][A-Z]/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one letter', 'password cannot contain letters', "password has to contain " + check.times + " or more letters", "password cannot contain more than " + check.times + " letters");
                }
                break;
            case 'lowercase':
                handled = _validateHandleRegex(password.match(/[a-z]/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one lowercase letter', 'password cannot contain lowercase letters', "password has to contain " + check.times + " or more lowercase letters", "password cannot contain more than " + check.times + " lowercase letters");
                }
                break;
            case 'uppercase':
                handled = _validateHandleRegex(password.match(/[A-Z]/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one uppercase letter', 'password cannot contain uppercase letters', "password has to contain " + check.times + " or more uppercase letters", "password cannot contain more than " + check.times + " uppercase letters");
                }
                break;
            case 'spaces':
                handled = _validateHandleRegex(password.match(/\s/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one space', 'password cannot contain spaces', "password has to contain " + check.times + " or more spaces", "password cannot contain more than " + check.times + " spaces");
                }
                break;
            case 'symbols':
                handled = _validateHandleRegex(password.match(/[`~\!@#\$%\^\&\*\(\)\-_\=\+\[\{\}\]\\\|;:'",<.>\/\?€£¥₹]/g), check.negative, check.times);
                data.errType = handled.errType;
                passed = handled.passed;
                if (check.customError && passed !== true) {
                    err = check.customError;
                }
                else if (!passed) {
                    err = _validateHandleErr(handled, check.negative, 'password has to contain at least one symbol', 'password cannot contain symbols', "password has to contain " + check.times + " or more symbols", "password cannot contain more than " + check.times + " symbols");
                }
                break;
            default:
                err = 'checking type not valid';
                break;
        }
        return { err: err, passed: passed, data: data };
    }
    function _validateHandleRegex(match, negative, times) {
        if (match === null) {
            return { errType: times ? 'times' : 'normal', passed: negative ? true : false };
        }
        if (times) {
            return { errType: 'times', passed: negative ? match.length <= times : match.length >= times };
        }
        return { errType: 'normal', passed: negative ? match.length < 1 : match.length > 0 };
    }
    function _validateHandleErr(handled, negative, errPos, errNeg, errTimesPos, errTimesNeg) {
        if (!handled.passed) {
            if (handled.errType === 'normal') {
                return negative ? errNeg : errPos;
            }
            else {
                return negative ? errTimesNeg : errTimesPos;
            }
        }
        return undefined;
    }
})(Password = exports.Password || (exports.Password = {}));
