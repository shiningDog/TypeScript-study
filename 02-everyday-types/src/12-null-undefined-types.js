"use strict";
// null 与 undefined
// let x = undefined;
// let y: undefined = undefined;
// let z: null = null;
// // let s: string = undefined;//如果关闭配置strictNullChecks的校验，那么这行代码将会变正常起来
// function doSomething(x: string | null) {
//   if (x === null) {
//     // 做一些事情
//   } else {
//     // 做字符串的事情
//     console.log(`hello ${x.toUpperCase()}`);
//   }
// }
// function liveDangerously(x?: number | null) {
//   console.log(x!.toFixed()); //仅当你知道这个值不可能是null或者undefined时去使用，并使其正常编译，但会出现意想不到的问题
//   console.log(x?.toFixed()); //等价于三元表达式，使其正常编译，正常运行
// }
// liveDangerously(123);
// liveDangerously();
