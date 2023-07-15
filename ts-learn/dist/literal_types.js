"use strict";
// 文字类型
let testString = "hello world";
testString = "修改字符串";
// 定义const
const constString = "我是一个常量";
// 修改常量不允许
// constString = "吸怪";
// 生命字符串类型
let xh = "hello";
// 这个时候提示: Type '"world"' is not assignable to type '"hello"'.
// xh = "world";
// 定义一个方法, 该方法只能传入指定的数值
function printText(s) {
    console.log(s);
}
printText("action");
// 传入不是指定类型的参数时，将会报错
// printText("no");
// 对于数字类型也是一样
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare(1, 2));
console.log(compare("aaab", "aaacb"));
// 对象
function printOptions(o) {
    console.log(o);
}
printOptions({
    width: 20,
});
const varObj = {
    name: "xiang",
    count: 0,
};
if (true) {
    // 修改对象中元素时可以的
    varObj.count = 1;
}
// 对于传参的一些特殊处理
let httpReq = {
    url: "https://www.itcloudy.cn",
    method: "GET",
};
function sendRequest(url, method) { }
// 此时会爆出错误, Argument of type 'string' is not assignable to parameter of type '"GET" | "POST" | "CUSTOM"'.
// sendRequest(httpReq.url, httpReq.method);
// 我们可以有以下的解决方案, 产生这种情况的原因是，在js进行类型推断的时候，推断成为了string类型
sendRequest(httpReq.url, httpReq.method);
// 第二种，在声明的时候，特定的声明
let httpReq1 = {
    url: "https://www.itcloudy.cn",
    method: "GET",
};
sendRequest(httpReq.url, httpReq1.method);
// 第三种，也是通过类型推断的方式
let httpReq2 = {
    url: "https://www.itcloudy.cn",
    method: "GET",
};
sendRequest(httpReq.url, httpReq2.method);
