// function printId(id: string | number) {
//   // console.log(`your id is ${id}`);
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// printId(101);
// printId("202");
// // printId({});//Error

// function welcomePeople(x: string[] | string) {
//   if (typeof x === "string") {
//     console.log(x.toUpperCase());
//   }
//   if (Array.isArray(x)) {
//     console.log(x.join(","));
//   }
// }
// welcomePeople(["a", "b", "c"]);
// welcomePeople("a");

// function getFirshThree(x: number[] | string) {
//   return x.slice(0, 2);
// }
// console.log(getFirshThree("123"));
// console.log(getFirshThree([1, 2, 3]));
