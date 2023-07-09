// 定义interface
interface Coord {
  x: number;
  y: number;
}

function printCoord3(coord: Coord) {
  console.log(`{x: ${coord.x}, y: ${coord.y}}`);
}
printCoord3({ x: 23, y: 234 });

// 接口的扩展
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

// 扩展属性
interface Animal {
  hair: boolean;
}

const bear: Bear = {
  name: "bear",
  honey: true,
  hair: true,
};

console.log(bear);
