"use strict";
// 调用函数签名（对象声明函数）
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function fun1(n) {
    console.log(n);
    return true;
}
// fun1必须拥有类型DescribableFunction所具备的属性
// fun1可以选择是否添加参数
fun1.description = "hello";
doSomething(fun1);
