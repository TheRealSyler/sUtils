"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * copies a string to the clipboard.
 */
function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-99999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
exports.copyStringToClipboard = copyStringToClipboard;
