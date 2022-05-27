"use strict";
// 泛型函数
// 不友好的使用，不能明确返回值类型
// function firstElement(arr: any[]) {
//   // return arr[0];// 这里没有问题
//   //这里依然没有问题，但我传入的实际上是一个字符串数组，可返回的是数字
//   // 这里其实是没有做到对应的返回值类型，虽然代码没错，但不能避免类型冲突
//   return 100;
// }
// firstElement(["a", "b", "c"]);
// 友好操作
// function firstElement<T>(arr: T[]): T | undefined {
//   return arr[0];
// }
// // firstElement(["a", "b", "c"]);
// // firstElement([1, 2, 3]);
// firstElement<number>([1, 2, 3]);
// const sArr: string[] = ["1", "2", "3"];
// // firstElement<string>([1, 2, 3]);//error
// // firstElement<number>(sArr); //error
// firstElement<string>(sArr);
// firstElement([null]);
// firstElement([]);
// 多泛型
function stringTransNumber(arr, func) {
    return arr.map(func);
}
stringTransNumber(["1", "2", "3"], (arg) => {
    return parseInt(arg);
});
