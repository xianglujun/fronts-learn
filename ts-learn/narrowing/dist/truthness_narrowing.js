"use strict";
// 真值缩小
function printAll(s) {
    // 可以通过if条件过滤掉为false的值
    if (s) {
        if (typeof s === "object") {
            for (const e of s) {
                console.log(e);
            }
        }
        else if (typeof s === "string") {
            console.log(s.toUpperCase());
        }
        else {
            console.log("other");
        }
    }
}
function multiplyAll(values, factor) {
    if (!values) {
        return values;
    }
    return values.map((v) => {
        return v * factor;
    });
}
console.log(multiplyAll([2, 3], 5));
console.log(multiplyAll(undefined, 5));
