"use strict";
// 泛型函数的实现
function firstElemet(s) {
    // 通过这种方式定义的时候，我们可以返回任何类型，而且都是合法的
    // return 100;
    return s[0];
}
let fr = firstElemet([1, 2, 3, 4, 5]);
console.log(fr);
// 定义泛型函数
function genericFirstElement(arr) {
    //  这里则是根据入参确定类型，并返回跟入参类型一致的类型
    // 当返回其他值时，将报错
    // Type 'number' is not assignable to type 'Type'.
    //'Type' could be instantiated with an arbitrary type which could be unrelated to 'number'.
    //   return 100;
    return arr[0];
}
console.log(genericFirstElement([12, 23, 54]));
console.log(genericFirstElement(["a", "b", "c"]));
// 定义多个泛型
function genericMap(input, fn) {
    return input.map(fn);
}
console.log(genericMap(["1", "2", "3"], (n) => parseInt(n)));
