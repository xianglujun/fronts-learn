interface Triggle {
  kind: "triggle";
  side1: number;
  side2: number;
  side3: number;
}

type Shape3 = Shape | Triggle;
function adjustShape(shape: Shape3) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radus ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "triggle":
      return 2;
    default:
      // 当我们加入了一个新的interface时，这个时候就因为没有穷举，而报错
      let _checks: never = shape;
      return _checks;
  }
}
