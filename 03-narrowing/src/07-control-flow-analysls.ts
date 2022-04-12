// 控制流分析
// function example() {
//   let x: string | number | boolean;
//   x = Math.random() < 0.5;
//   // boolean
//   console.log(x);
//   if (Math.random() < 0.5) {
//     // string
//     x = "hello";
//   } else {
//     // number
//     x = 100;
//   }

//   console.log(x);
//   return x;
// }
// let x = example();
// console.log();
// x = "string";
// x = 100;
// // 函数example只会返回number | string 类型
// x = true; //error 不能将类型“boolean”分配给类型“string | number”
