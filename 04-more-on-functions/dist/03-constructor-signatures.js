"use strict";
// 构造签名
// class Ctor {
//   s: string;
//   constructor(s: string) {
//     this.s = s;
//   }
// }
// type SomeConstructor = {
//   new (s: string): Ctor; //new (函数入参):构造器
// };
// function fun(fn: SomeConstructor, s: string) {
//   return new fn(s); //上面定义了new 构造函数，这里也需要new
// }
// const f = fun(Ctor, "hello");
// console.log(f.s);
// // 怎么使用联合签名
// interface CallOrConstructor {
//   new (s: string): Date; // 构造签名
//   (n?: number): number; // 调用签名
// }
// function fn(data: CallOrConstructor) {
//   let d = new data("2022-05-27");
//   let n = data(100);
// }
