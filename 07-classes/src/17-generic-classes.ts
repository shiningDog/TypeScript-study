// 泛型类

// class Box<T> {
//   contents: T;
//   constructor(value: T) {
//     this.contents = value;
//   }
//   // static defaultValue:T//error 静态成员不能使用泛型类型
// }

// const b = new Box<string>("hello"); //手动告知ts为string类型
// // const b = new Box("hello"); //ts自动推算为string类型
// b.contents += "world";
