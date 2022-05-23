"use strict";
// // 等值缩小
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     console.log(x.toUpperCase() + y.toUpperCase());
//   } else {
//     console.log(x, y);
//   }
// }
// example("a", "a");
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
multiplyValue({ value: null }, 6);
