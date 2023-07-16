// 受歧视的unions
type ShapeType = {
  kind: "circle" | "square";
  radus?: number;
  sideLength?: number;
};

function getAreaType(shape: ShapeType): number {
  // 这里当我们使用!时，会出现undefined的情况，这样会导致异常
  //   return Math.PI * shape.radus! ** 2;

  // 因此在联合类中中，因为不同的类型可能会有不同的取值
  // 因此无法保证必传的参数一定会设置正确，因此，我们可以
  // 通过interface的方式来处理
  if (shape.kind == "circle") {
    return Math.PI * shape.radus! ** 2;
  } else {
    return shape.sideLength! ** 2;
  }
}

interface Circle {
  kind: "circle";
  radus: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind == "circle") {
    return Math.PI * shape.radus ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}

function getSwitchArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radus ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

console.log(getArea({ radus: 12, kind: "circle" }));
