"use strict";
// 索引访问类型
let i1 = "name";
i1 = 10;
let i2 = "name";
i2 = "age";
let i3 = "felix";
i3 = 20;
i3 = true;
let i4 = true;
i4 = "felix";
// i4 = 100;//error
// type I5 = Person["alve"]; //error 类型“Person”上不存在属性“alve”。
const myArray = [
    { name: "felix", age: 13 },
    { name: "bob", age: 25 },
    { name: "eve", age: 39 },
];
let p = {
    name: "xiaoqian",
    age: 11,
    // alive: true,//error 不能将类型“{ name: string; age: number; alive: boolean; }”分配给类型“{ name: string; age: number; }”。
};
let age = 11;
let age2 = 20;
const key = "age";
let age4 = "age";
// age4 = "a"; //error 不能将类型“"a"”分配给类型“"age"”。
