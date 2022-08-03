// 返回void类型
// 函数类型，返回viod时，往往会被忽略，所以下方代码返回任何数据都是可以被正常编译的
type VoidFunc = () => void;
const f1: VoidFunc = () => {
  return true;
};
const f2: VoidFunc = () => true;
const f3: VoidFunc = function () {
  return true;
};
const v1: void = f1();
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
