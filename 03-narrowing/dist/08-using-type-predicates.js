"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: "鲨鱼",
        swim: () => { },
    };
    let bird = {
        name: "麻雀",
        fly: () => { },
    };
    return Math.random() > 0.5 ? bird : fish;
}
FileSystem;
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
const zoo = [getSmallPet(), getSmallPet()];
const underWater = zoo.filter(isFish);
const underWater2 = zoo.filter(isFish);
const underWater3 = zoo.filter((pet) => {
    if (pet.name === "frog") {
        return false;
    }
    return isFish(pet);
});
