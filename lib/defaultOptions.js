"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function Loops over every entry of the default options obj, if the entry is different in the options object the entry in the default obj will be set to the options entry.
 *
 * *`Note: if the entry is not in the default obj the entry will be ignored.`*
 * @param options Option object to check.
 * @param default Default options.
 * @returns The default obj with the entries from the options obj.
 */
function defaultOptions(options, defaultOptions) {
    if (options) {
        for (var _i = 0, _a = Object.entries(defaultOptions); _i < _a.length; _i++) {
            var key = _a[_i][0];
            // @ts-ignore shut up ts
            if (options[key] !== undefined) {
                // @ts-ignore you too
                defaultOptions[key] = options[key];
            }
        }
    }
    return defaultOptions;
}
exports.defaultOptions = defaultOptions;
