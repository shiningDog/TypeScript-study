"use strict";
// 泛型函数-限制条件
// <T extends { length: number }>强制T拥有length属性，否则函数体内分支报错
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest("felix", "lu");
// const notOk = longest(10, 100);//error 由于限制T必须得有length属性，所有报错
