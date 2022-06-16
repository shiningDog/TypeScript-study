"use strict";
// 泛型 typeof类型操作符
// console.log(typeof "hello");
// let s = "hello";
// let n: typeof s;
// n = "hello";
// // n = 100;//error 不能将类型“number”分配给类型“string”
// // ReturnType 必须传入一个泛型，且泛型的类型必须是个函数的类型
// type Predicate = (x: unknown) => boolean;
// type K = ReturnType<Predicate>;
// function f() {
//   return {
//     x: 10,
//     y: 3,
//   };
// }
// // ReturnType 返回的是函数的返回类型
// type P = ReturnType<typeof f>;
// const p: P = {
//   x: 1,
//   y: 2,
// };
// 这里演示了 typeof 对函数的返回值操作
function msbox() { }
let shouldContine;
// shouldContine = 100; //error 不能将类型“number”分配给类型“() => void”。
