"use strict";
// 参数展开运算符-形参展开
function multuply(n, ...m) {
    return m.map((x) => n * x);
}
const a = multuply(10, 1, 2, 3, 4);
console.log(a);
