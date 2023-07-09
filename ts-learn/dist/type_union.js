"use strict";
// 联合类型, 两个或者多个其他类型组成的类型
function printId(p) {
    console.log(`Your ID is: ${p}`);
    // 类型判断
    if (typeof p === "string") {
        console.log(`${p.toUpperCase()}`);
    }
    else {
        console.log(`${p + 200}`);
    }
}
printId("abc");
printId(1000);
// 数组
function welcomePeople(people) {
    if (Array.isArray(people)) {
        console.log("Welcome here traveler " + people.join(" and "));
    }
    else {
        console.log(`Welcome here traveler ${people}`);
    }
}
welcomePeople("xiang");
welcomePeople(["a", "b", "c"]);
// 取前三个
function getFirstThree(data) {
    return data.slice(0, 3);
}
console.log(getFirstThree("abcdefg"));
console.log(getFirstThree(["a", "b", "c", "d", "e", "f", "g"]));
