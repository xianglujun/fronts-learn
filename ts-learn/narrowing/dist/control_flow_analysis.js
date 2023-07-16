"use strict";
// 关于控制流分析
function controlFlow() {
    let x;
    x = Math.random() < 0.5;
    if (Math.random() < 0.5) {
        x = "hellow";
        // 此时x的类型为string类型
    }
    else {
        x = 100;
        // 此时x的类型为number类型
    }
    return x;
}
// 我们对方法发起调用
let x = controlFlow();
x = "world";
x = 200;
// 这里就告知我们呢，针对x而言，被推断成为了number和string类型的联合体
// x = false;
