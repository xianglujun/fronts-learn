"use strict";
function doSignatureSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function fn1(n) {
    console.log(n);
    return n < 12;
}
fn1.description = "hello";
doSignatureSomething(fn1);
