"use strict";
function adjustShape(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radus ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triggle":
            return 2;
        default:
            // 当我们加入了一个新的interface时，这个时候就因为没有穷举，而报错
            let _checks = shape;
            return _checks;
    }
}
