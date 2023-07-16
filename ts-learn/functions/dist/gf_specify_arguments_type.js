"use strict";
function combine(a, b) {
    return a.concat(b);
}
// 通过调用方式的时候指定类型，使传参正确，一般不这么做
console.log(combine([1, 2, 3], ["hello"]));
