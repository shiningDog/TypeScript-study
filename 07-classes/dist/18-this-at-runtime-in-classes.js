"use strict";
// 类运行时中的this
// class MyClass {
//   name = "myClass";
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass();
// console.log(c.getName()); //myClass
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };
// console.log(obj.getName()); //obj
// class MyClass {
//   name = "myClass";
//   // 使用箭头函数将this指向自身
//   getName = () => {
//     return this.name;
//   };
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//   getName: c.getName,
// };
// console.log(obj.getName()); //myClass
// class MyClass {
//   name = "myClass";
//   getName() {
//     return this.name;
//   }
// }
// const c = new MyClass();
// const obj = {
//   name: "obj",
//     // 使用bind将this指向MyClass
//   getName: c.getName.bind(c),
// };
// console.log(obj.getName()); //myClass
