// 重写方法
// class Base {
//   greet() {
//     console.log("hello world");
//   }
// }
// class Derived extends Base {
//   // greet(name: string) {//error 不能将类型“(name: string) => void”分配给类型“() => void”
//   greet(name?: string) {
//     if (name === undefined) {
//       super.greet();
//     } else {
//       console.log(name.toUpperCase());
//     }
//   }
// }

// const d = new Derived();
// d.greet();
// d.greet("redader");

// const b: Base = new Derived();
// b.greet();
