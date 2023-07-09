"use strict";
function printCoord2(p) {
    console.log(p);
}
printCoord2({
    x: 123,
    y: 133,
});
function printId2(id) {
    console.log(`id: ${id}`);
}
printId2(100);
printId2("120");
function sanitinzedInput(input) {
    return input.slice(0, 2);
}
let input = sanitinzedInput("hello");
console.log(`input: ${input}`);
input = "hello World";
function printMale(p) {
    console.log(p);
}
printMale({ name: "xianglj", age: 32, bear: true });
