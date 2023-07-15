"use strict";
// 在js中, null代表的是为未定义，而undefined代表了未初始化
let s = null;
let n = null;
let u = undefined;
// 这里就会报出错误，不能将undefined复制给s1
// let s1: string = undefined;
function doSomething(s) {
    // 可以通过判断的方式判断结果
    if (s === null) {
        // do nothing
    }
    else {
        // string类型
        console.log(`hellow ${s}`);
    }
}
// 但是在ts中有一种语法糖，可以检测值是否为null或者undefined
function doNumberSomething(s) {
    // 当在变量后面使用!时，表示的是排除null或者undefined值的推断
    // 这里主要强调的是number类型的值一定会出现
    console.log(s.toFixed(), n);
}
doNumberSomething(null);
class A {
}
