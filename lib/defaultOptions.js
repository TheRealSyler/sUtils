"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function Loops over every entry of the default options obj, if the entry is different in the options object the entry in the default obj will be set to the options entry.
 *
 * *`Note: if there are entries in the options obj that are not in the default obj the entry will be ignored.`*
 * @param options Option object to check.
 * @param defualt Default options.
 * @returns The default obj with the entries from the options obj.
 */
function defualtOptions(options, defualt) {
    if (options) {
        for (var _i = 0, _a = Object.entries(defualt); _i < _a.length; _i++) {
            var key = _a[_i][0];
            // @ts-ignore shut up ts
            if (options[key]) {
                // @ts-ignore you too
                defualt[key] = options[key];
            }
        }
    }
    return defualt;
}
exports.defualtOptions = defualtOptions;
