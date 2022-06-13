"use strict";
// 泛型 泛型类
class GenericNumber {
}
let myGeneric = new GenericNumber();
myGeneric.zeroValue = "0";
myGeneric.add = function (x, y) {
    return x + y;
};
console.log(myGeneric);
