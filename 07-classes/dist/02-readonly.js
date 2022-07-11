"use strict";
// readonly
class Greeter {
    constructor(hello) {
        this.name = "world";
        if (hello !== undefined) {
            this.name = hello;
        }
    }
}
const gt = new Greeter("hello");
// gt.name = "a"; //error 无法分配到 "name" ，因为它是只读属性。
console.log(gt.name);
