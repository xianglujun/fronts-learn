"use strict";
function isNumber(str) {
    return typeEquals(str, "number");
}
function isString(s) {
    return typeEquals(s, "string");
}
function isBoolean(s) {
    return typeEquals(s, "boolean");
}
function isObject(s) {
    return typeEquals(s, "object");
}
function isSymbol(s) {
    return typeEquals(s, "symbol");
}
function typeEquals(s, type) {
    return typeof s === type;
}
