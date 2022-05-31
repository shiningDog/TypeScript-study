"use strict";
// 泛型类型-编写优秀通用函数的准则
// 1.可能的情况下，使用类型参数本身，而不是对其进行约束
// 推荐写法,ts可以直接推断出返回的类型为T
function firstElement1(arr) {
    return arr[0];
}
// 不推荐写法，因为只有当firstElement2执行时，才能推断出该函数的返回值类型
function firstElement2(arr) {
    return arr[0];
}
// 2.总是尽可能少的使用类型参数
// 推荐写法
function filter1(arr, func) {
    return arr.filter(func);
}
// 推荐写法,这里单独为func参数定义了一个类型
// 下面发泛型F被无缘无故的创建出来,这里不仅更难阅读，也更不好让ts进行推理
function filter2(arr, func) {
    return arr.filter(func);
}
// 3.如果一个类型的参数只出现在一个地方，请重新考虑你是否真的需要它
// 推荐写法，简单明了
function greet1(s) {
    console.log("hello" + s);
}
greet1("world");
// 不推荐，类型参数只在一处地方用到过，使用greet1的写法更好让ts进行推断
function greet2(s) {
    console.log("hello" + s);
}
greet2("world");
