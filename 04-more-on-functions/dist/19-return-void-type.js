"use strict";
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
// 字面量函数返回void时(不需要返回任何内容)
// function f4(): void {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// }
// const f5 = function (): void {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// };
// const f6 = (): void => {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// };
