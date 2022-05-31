// 需要了解的其他类型

// void:没有返回值的函数的返回值
function noop() {
  return;
} //ts 默认推断返回void

// unknown:代表任何值，与any类型类似，但更安全，ts不允许对unknown类型进行任何操作
// function f1(a: any) {
//   return a.b();
// }
// function f2(a: unknown) {
//   return a.b(); //error 对象的类型为 "unknown"
// }

// never: 永远不会被观察到值
// function f1(a: string | number) {
//   if (typeof a === "string") {
//     return a.length;
//   } else if (typeof a === "number") {
//     return a.toFixed(1);
//   } else {
//     const val: never = a; //永远不会执行到这里，但可以帮你进行分支缩小检查
//   }
// }

// function f2(): never {
//   throw new Error("错误信息");
// }

// function f3(): never {
//   while (true) {}
// }

// Function:总是可以被调用的类型，但调用的永远返回any
// function doSomething(f: Function) {
//   return f(1, 2, 3);
// }
