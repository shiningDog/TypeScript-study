"use strict";
// 接口
// interface Point {
//   x: number;
//   y: number;
// }
// function printPoint(pt: Point) {
//   console.log(pt.x + " ----  " + pt.y);
// }
const w = {
    title: "标题",
    count: 100,
};
// interface 可以通过 再次定义interface同名的类型去扩展 扩展 end
//error 通过type创建后的类型是不能声明重复的名字的 --start
// type MyWindow = {
//   count: number;
// };
// type MyWindow = {
//   title: string;
// };
//error 通过type创建后的类型是不能声明重复的名字的 --end
// interface propType {
//   [key: string]: string;
// }
// let props: propType;
// type dataType = {
//   title: string;
// };
// const data: dataType = {
//   title: "hello",
// };
// interface dataType1 {
//   title: string;
// }
// const data1: dataType1 = {
//   title: "hello1",
// };
// props = data;
// props = data1; //error 不能将类型“dataType1”分配给类型“propType”。类型“dataType1”中缺少类型“string”的索引签名
