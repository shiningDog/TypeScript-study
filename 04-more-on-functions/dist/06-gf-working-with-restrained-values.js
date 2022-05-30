"use strict";
// // 泛型函数-使用受限值
// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length > minimum) {
//     return obj;
//   } else {
//     //error 举例:执行下方该函数时，推断泛型应该是数组，且拥有slice属性，而这里的没有返回
//     return { length: minimum };
//   }
// }
// const arr = minimumLength([1, 2, 3], 6);
// console.log(arr.slice(0));
