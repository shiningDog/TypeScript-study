// // 等值缩小
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     console.log(x.toUpperCase() + y.toUpperCase());
//   } else {
//     console.log(x, y);
//   }
// }
// example("a", "a");

// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         //error：, 当strs=null时，typeof strs === ''object
//         console.log(s);
//       }
//     }
//     if (typeof strs === "string") {
//       console.log(strs);
//     }
//   } else {
//     // ...
//   }
// }

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}

multiplyValue({ value: 5 }, 6);
multiplyValue({ value: undefined }, 6);
multiplyValue({ value: null }, 6);
