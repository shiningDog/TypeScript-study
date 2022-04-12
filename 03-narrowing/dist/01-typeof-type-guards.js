"use strict";
// // 类型守卫
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
//       //error：, 当strs=null时，typeof strs === ''object
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // ...
//   }
// }
