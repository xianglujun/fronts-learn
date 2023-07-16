"use strict";
// 构造函数签名
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn(ctor) {
    return new ctor("hello");
}
let f = fn(Ctor);
console.log(f.s);
function fn2(c) {
    let d = new c("2023-07-16");
    let f = c(100);
    console.log(d, f);
    return d;
}
