"use strict";
// 参数展开运算符-实参展开
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1); // [1,2,3,4,5,6]
arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1); // [1,2,3,4,5,6]
// const args = [8, 5];
// atan2需要2个参数,可ts不确定args展开后的数量
// const angle = Math.atan2(...args);// error 扩张参数必须具有元组类型或传递给 rest 参数
const args = [8, 5]; // 断言args为常量就可以确定args的数量了
const angle = Math.atan2(...args);
