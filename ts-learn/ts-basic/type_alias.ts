// 类型别名
type Point = {
  x: number;
  y: number;
};

function printCoord2(p: Point) {
  console.log(p);
}
printCoord2({
  x: 123,
  y: 133,
});

// 生命联合类型
type ID = number | string;
function printId2(id: ID) {
  console.log(`id: ${id}`);
}
printId2(100);
printId2("120");

type UserInputSanitizedString = string;
function sanitinzedInput(input: string): UserInputSanitizedString {
  return input.slice(0, 2);
}
let input = sanitinzedInput("hello");
console.log(`input: ${input}`);
input = "hello World";

// 扩展type
type Person = {
  name: string;
  age: number;
};

type Male = Person & {
  bear: boolean;
};

function printMale(p: Male) {
  console.log(p);
}
printMale({ name: "xianglj", age: 32, bear: true });
