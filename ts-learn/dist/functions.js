"use strict";
// 定义function函数
function printArrays(arr) {
    if (arr) {
        // 内部声明了一个匿名函数
        arr.forEach((a) => {
            console.log(a);
        });
    }
}
// 调用函数
printArrays([1, 2, 3, 4, 5, 67]);
// 定义函数参数为对象
function printCoord(cd) {
    console.log(`(x: ${cd.x}, y: ${cd.y})`);
}
// 调用函数
printCoord({ x: 123, y: 122 });
// 可选参数
function printPerson(p) {
    var _a;
    if (p.last) {
        console.log(`first: ${p.first}, last: ${p.last}`);
    }
    else {
        console.log(`first: ${p.first}`);
    }
    // 当last是可选的时候，可以通过?进行方法的调用
    console.log((_a = p.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printPerson({ first: "xiang" });
printPerson({ first: "xiang", last: "lujun" });
