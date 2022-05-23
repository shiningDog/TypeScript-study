"use strict";
// 使用分支类型缩小判断该类型
function getArea(shape) {
    // 方案二
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.redius ** 2;
        case "square":
            return shape.sideLenght ** 2;
        // default:
        // const _exhaustiveCheck: never = shape; //error，还可能存在triangle类型没做分支判断，这里使用never就可以进行穷尽性检查，
        // return _exhaustiveCheck;
    }
}
