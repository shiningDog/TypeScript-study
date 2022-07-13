"use strict";
// 成员的可见性 protected(受保护的,只能在类的内部和子类中访问)
// class Greeter {
//   greet() {
//     console.log(this.getName());
//   }
//   protected getName() {
//     return "hello";
//   }
// }
// class SpecialGreeter extends Greeter {
//   public howdy() {
//     // 派生类可以访问基类的受保护的成员
//     console.log(this.getName());
//   }
// }
// const g = new SpecialGreeter();
// g.greet();
// g.howdy();
// // g.getName() //error 属性“getName”受保护，只能在类“Greeter”及其子类中访问
// class Base {
//   protected m = 10;
// }
// class Derived extends Base{
//   m=15
// }
// const d = new Derived()
// console.log(d.m);
