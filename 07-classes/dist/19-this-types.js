"use strict";
// this 类型
// class Box {
//   content: string = "";
//   set(value: string) {
//     this.content = value;
//     return this;
//   }
// }
// class ClearableBox extends Box {
//   clear() {
//     this.content = "";
//   }
// }
// const a = new ClearableBox();
// const b = a.set("hello");
// b instanceof ClearableBox; // true
// class Box {
//   content: string = "";
//   someAs(other: this) {
//     return other.content === this.content;
//   }
// }
// class DerivedBox extends Box {
//   otherContent: string = "?";
// }
// const base = new Box();
// const derived = new DerivedBox();
// // derived.someAs(base); //error 类型 "Box" 中缺少属性 "otherContent"，但类型 "DerivedBox" 中需要该属性。
