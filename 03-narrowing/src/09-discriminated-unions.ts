// // 受歧视的 unions（联合类型）

// interface Circle {
//   kind: "circle";
//   redius: number;
// }

// interface Square {
//   kind: "square";
//   sideLenght: number;
// }

// type Shape = Circle | Square;

// function handleShape(shape: Shape) {
//   if (shape.kind === "square") {
//     console.log("给你个正方形");
//   }
// }

// // 使用常用的分支类型缩小来判断该类型;
// // function getArea(shape: Shape) {
// //   // 方案二
// //   switch (shape.kind) {
// //     case "circle":
// //       return Math.PI * shape.redius ** 2;
// //     case "square":
// //       return shape.sideLenght ** 2;
// //   }
// // }

// // 使用类型谓词来进行判断;
// function isCircle(shape: Shape): shape is Circle {
//   return shape.kind === "circle";
// }
// function getArea(shape: Shape) {
//   if (isCircle(shape)) {
//     return Math.PI * shape.redius ** 2;
//   } else {
//     return 4 * shape.sideLenght;
//   }
// }
