"use strict";
// 索引签名
class MyClass {
    constructor() {
        // x: number = 100;//error 类型“number”的属性“x”不能赋给“string”索引类型“boolean | ((s: string) => boolean)”。
        this.x = true;
    }
    check(s) {
        return this[s];
    }
}
