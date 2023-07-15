"use strict";
// synmbol是代表了一个全局唯一的引用
// bigint则代表了更大的整数
// bigint是在es2020之后才引入的，需要切换到2020之后，才没有问题
let b1 = BigInt(100);
let b2 = 100n;
// 创建两个symbol
const s1 = Symbol("hello");
const s2 = Symbol("hello");
// 这代表了两个不同的对象，他们没有重叠
console.log(typeof s1, typeof s2);
// if (s1 === s2) {
//   console.log("ok");
// }
