"use strict";
// 断言 建议使用 as
const myCanvas = document.getElementById("main_canvas");
const myCanvas2 = document.getElementById("main_canvas");
// let x = (<any>"hello") as number;
let x = "hello";
let y = "hello";
// 总结：
// 断言是为了保证未知数据格式的一种校验方式
// 使用场景：
// 1.当你确定未知数据是某一种格式时
// 2.当你大概知道未知数据格式时
