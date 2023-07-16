"use strict";
function isFish(p) {
    return p.swim !== undefined;
}
// 获取宠物信息
function getSmallPet() {
    let fish = {
        name: "fish",
        swim: () => {
            console.log(`${fish.name}在游泳`);
        },
    };
    let bird = {
        name: "frog",
        fly: () => {
            console.log(`${bird.name}在飞翔`);
        },
    };
    return Math.random() < 0.5 ? fish : bird;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// 定义数组
let fishes = [
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
    getSmallPet(),
];
// 过滤出在书中由的生物
let underWater1 = fishes.filter(isFish);
let underWater2 = fishes.filter(isFish);
let underWater3 = fishes.filter((pet) => {
    if (pet.name === "frog") {
        return false;
    }
    return isFish(pet);
});
console.log(underWater3);
