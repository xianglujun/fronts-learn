// 函数泛型的限制条件
function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}

console.log(longest(["1"], [1, 3, 4]));
console.log(longest("aaa", "bbbbb"));

interface DemoLongest {
  length: number;
}

console.log(longest({ length: 12 }, { length: 19 }));
