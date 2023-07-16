// 使用谓语动词
type FishType = {
  name: string;
  swim: () => void;
};

type BirdType = {
  name: string;
  fly: () => void;
};

function isFish(p: FishType | BirdType): p is FishType {
  return (p as FishType).swim !== undefined;
}

// 获取宠物信息
function getSmallPet(): FishType | BirdType {
  let fish: FishType = {
    name: "fish",
    swim: () => {
      console.log(`${fish.name}在游泳`);
    },
  };

  let bird: BirdType = {
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
} else {
  pet.fly();
}

// 定义数组
let fishes: (FishType | BirdType)[] = [
  getSmallPet(),
  getSmallPet(),
  getSmallPet(),
  getSmallPet(),
];
// 过滤出在书中由的生物
let underWater1: FishType[] = fishes.filter(isFish);
let underWater2: FishType[] = fishes.filter(isFish) as FishType[];
let underWater3: FishType[] = fishes.filter((pet): pet is FishType => {
  if (pet.name === "frog") {
    return false;
  }

  return isFish(pet);
});
console.log(underWater3);
