"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    return Math.random() > 0.5
        ? {
            fly: () => {
                console.log("麻雀");
            },
        }
        : {
            swim: () => {
                console.log("鲨鱼");
            },
        };
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isFish);
const underWater2 = zoo.filter((pet) => {
    pet.swim !== undefined;
});
const underWater3 = zoo.filter((pet) => {
    if (pet.name === "frog") {
        return false;
    }
    return isFish(pet);
});
