"use strict";
// 索引签名
const myArray = ["a", "b"];
const secondItem = myArray[0];
const testString = {
    x: 100,
    y: 200,
    // z: "300", //error 不能将类型“string”分配给类型“number”
};
const notOkay = {
    x: 100,
    y: 200,
    length: 10,
    name: "Felix",
};
const myArray2 = ["a", "b"];
// myArray2[0] = "felix"; //error 类型“ReadonlyStringArray”中的索引签名仅允许读取
