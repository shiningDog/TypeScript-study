// 使用类型谓词
// 个人理解：当你想去判断对象类型或接口时，你应该使用类型谓词 paramsName is type
type Fish = {
  name?: string;
  swim: () => void;
};

type Bird = {
  name?: string;
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5
    ? ({
        fly: () => {
          console.log("麻雀");
        },
      } as Bird)
    : ({
        swim: () => {
          console.log("鲨鱼");
        },
      } as Fish);
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet()];
const underWater: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter((pet) => {
  (pet as Fish).swim !== undefined;
}) as Fish[];
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "frog") {
    return false;
  }
  return isFish(pet);
});
