"use strict";
// 受歧视的unions（联合类型）
// function handleShape(shape:Shape){
//   if(shape.kind === 'square'){
//   }
// }
// 使用分支类型缩小判断该类型
// function getArea(shape: Shape) {
//   // 方案一
//   //   if (shape.kind === "circle") {
//   //     return Math.PI * shape.redius ** 2;
//   //   } else {
//   //     return 4 * shape.sideLenght;
//   //   }
//   // 方案二
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.redius ** 2;
//     case "square":
//       return shape.sideLenght ** 2;
//   }
// }
// 使用类型谓词来进行判断
function isCircle(shape) {
    return shape.kind === "circle";
}
function getArea(shape) {
    if (isCircle(shape)) {
        return Math.PI * shape.redius ** 2;
    }
    else {
        return 4 * shape.sideLenght;
    }
}
