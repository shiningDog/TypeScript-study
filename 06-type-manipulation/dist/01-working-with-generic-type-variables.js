"use strict";
// 泛型 - 使用通用类型变量
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(["100", 200]);
