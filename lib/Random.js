"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Random;
(function (Random) {
    /**
     * Gets a random string with the given length, if length is undefined the length will be 7.
     * @param length maximum possible Number.
     */
    function String(length) {
        if (length === void 0) { length = 7; }
        var temp = '';
        for (var i = 0; i < length / 8; i++) {
            temp = temp.concat(((Math.random() + 3 * Number.MIN_VALUE) / Math.PI).toString(36).slice(i + 1 <= length / 8 ? -8 : -(length % 8)));
        }
        return temp;
    }
    Random.String = String;
    /**
     * Gets a random integer within the given Range, if max is undefined max will be 10000.
     * @param max maximum possible Number.
     */
    function IntNumber(max) {
        if (max === void 0) { max = 10000; }
        return Math.floor(Math.random() * Math.floor(max));
    }
    Random.IntNumber = IntNumber;
    /**
     * Generate a random object.
     * @param keyNum number of items in the object.
     * @param itemContent an array that defines the content of each item.
     * @param itemType the type of the item.
     */
    function Object(keyNum, itemType, customItem, itemContent, options) {
        if (keyNum === void 0) { keyNum = 10; }
        if (itemType === void 0) { itemType = 'string'; }
        if (itemContent === void 0) { itemContent = [['ascending'], ['literal', ' - String Data: '], ['randomString'], ['randomNumber']]; }
        if (options === void 0) { options = { keyLength: 6, useIndexAsKey: false, randomStringLength: 10, randomNumberLength: 100000 }; }
        var tempObj = {};
        for (var i = 0; i < keyNum; i++) {
            var keyName = void 0;
            if (options.useIndexAsKey) {
                keyName = i;
            }
            else {
                keyName = Random.String(options.keyLength);
                while (tempObj[keyName]) {
                    keyName = Random.String(options.keyLength);
                }
            }
            switch (itemType) {
                case 'custom':
                    tempObj[keyName] = customItem;
                    break;
                case 'customArray':
                    tempObj[keyName] = customItem[i];
                    break;
                default:
                    var baseItem = getBaseItem(itemType);
                    for (var _i = 0, itemContent_1 = itemContent; _i < itemContent_1.length; _i++) {
                        var item = itemContent_1[_i];
                        tempObj[keyName] = generateItemContent(tempObj[keyName] || baseItem, Number(item[1]) || options.randomNumberLength, Number(item[1]) || options.randomStringLength, item, itemType, i);
                    }
                    break;
            }
        }
        return tempObj;
    }
    Random.Object = Object;
    /**
     * Generate a random array.
     * @param arrayLength length of the generated array.
     * @param itemContent an array that defines the content of each item.
     * @param itemType the type of the item.
     */
    function Array(arrayLength, itemType, customItem, itemContent, options) {
        if (arrayLength === void 0) { arrayLength = 10; }
        if (itemType === void 0) { itemType = 'number'; }
        if (itemContent === void 0) { itemContent = [['ascending'], ['literal', '2'], ['randomNumber']]; }
        if (options === void 0) { options = { keyLength: 6, randomStringLength: 10, randomNumberLength: 100000 }; }
        var tempArr = [];
        for (var i = 0; i < arrayLength; i++) {
            switch (itemType) {
                case 'custom':
                    tempArr[i] = customItem;
                    break;
                case 'customArray':
                    tempArr[i] = customItem[i];
                    break;
                default:
                    var baseItem = getBaseItem(itemType);
                    for (var _i = 0, itemContent_2 = itemContent; _i < itemContent_2.length; _i++) {
                        var item = itemContent_2[_i];
                        tempArr[i] = generateItemContent(tempArr[i] || baseItem, Number(item[1]) || options.randomNumberLength, Number(item[1]) || options.randomStringLength, item, itemType, i);
                    }
                    break;
            }
        }
        return tempArr;
    }
    Random.Array = Array;
})(Random = exports.Random || (exports.Random = {}));
function getBaseItem(type) {
    switch (type) {
        case 'string':
            return '';
        case 'number':
            return 0;
        case 'array':
            return [];
        default:
            return undefined;
    }
}
function generateItemContent(baseItem, randomNumberLength, randomStringLength, item, itemType, index) {
    switch (item[0]) {
        case 'randomNumber':
            return addBasedOnType(baseItem, Random.IntNumber(randomNumberLength), itemType);
        case 'randomString':
            return addBasedOnType(baseItem, Random.String(randomStringLength), itemType);
        case 'literal':
            return addBasedOnType(baseItem, item[1], itemType);
        case 'ascending':
            return addBasedOnType(baseItem, index + 1, itemType);
        default:
            return baseItem;
    }
}
function addBasedOnType(a, b, type) {
    // Note if the itemType is = 'number' the items will be added and not concatenated.
    switch (type) {
        case 'string':
            return a + b;
        case 'array':
            a.push(b);
            return a;
        case 'number':
            if (Number(b)) {
                return a + Number(b);
            }
            return a;
    }
}
