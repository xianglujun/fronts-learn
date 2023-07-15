"use strict";
function move(animal) {
    if ("swim" in animal) {
        // 此时代表了Fish类型
        // 加入了human之后，此时可能表示Fish | Human
        animal.swim();
        return;
    }
    // 此时可能是Bird | Human
    animal.fly();
}
