"use strict";
function printPoint(pt) {
    console.log(pt.x + " ----  " + pt.y);
}
printPoint({
    x: 100,
    y: 200,
});
// interface 可以通过 exteds 继承 start
// interface Animal {
//   name: string;
// }
// interface Bear extends Animal {
//   honey: boolean;
// }
// const bear: Bear = {
//   name: "winie",
//   honey: true,
// };
// console.log(bear.name);
// console.log(bear.honey);
// interface 可以通过 exteds 继承 end
// type 可以通过 & 符号继承  ---start
// type Animal = {
//   name: string;
// };
// type Bear = {
//   honey: boolean;
// } & Animal;
// const bear: Bear = {
//   name: "winie",
//   honey: true,
// };
// console.log(bear.name);
// console.log(bear.honey);
// type 可以通过 & 符号继承  ---end
// 如何向现有的类型添加字段
// interface 可以通过 再次定义interface同名的类型去扩展 扩展 start
// interface MyWindow {
//   count: number;
// }
// interface MyWindow {
//   title: string;
// }
// const w: MyWindow = {
//   title: "标题",
//   count: 100,
// };
// interface 可以通过 再次定义interface同名的类型去扩展 扩展 start
//error 通过type创建后的类型是不能声明重复的名字的 --start
// type MyWindow = {
//   count: number;
// };
// type MyWindow = {
//   title: string;
// };
//error 通过type创建后的类型是不能声明重复的名字的 --end
