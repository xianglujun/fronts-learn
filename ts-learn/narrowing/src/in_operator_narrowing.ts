//in 操作符的范围缩小
type Bird = { fly: () => void };
type Fish = { swim: () => void };
// 当加入一个人类时，此时可能会发生一些变化
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Bird | Fish | Human) {
  if ("swim" in animal) {
    // 此时代表了Fish类型
    // 加入了human之后，此时可能表示Fish | Human
    (animal as Fish).swim();
    return;
  }

  // 此时可能是Bird | Human
  (animal as Bird).fly();
}
