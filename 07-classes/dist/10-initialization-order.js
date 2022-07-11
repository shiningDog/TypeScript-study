"use strict";
// 初始化顺序
// 基类属性=>基类构造=>派生类属性=>派生类构造
class Base {
    constructor() {
        this.name = "base";
        console.log("My name is " + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super();
        this.name = "derived";
        console.log(this.name);
    }
}
const d = new Derived();
