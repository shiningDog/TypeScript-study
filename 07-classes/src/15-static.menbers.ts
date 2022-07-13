// 静态成员 static（只能直接通过类去访问）

// class MyClass {
//   static x = 0;
//   static printX() {
//     console.log(this.x);
//   }
// }
// console.log(MyClass.x);
// MyClass.printX();

// class MyClass {
//   private static x = 0;
//   static printX() {
//     console.log(this.x);
//   }
// }
// // console.log(MyClass.x); //error 属性“x”为私有属性，只能在类“MyClass”中访问
// MyClass.printX();

// class Base {
//   static getGreeting() {
//     return "hello world";
//   }
// }
// class Derived extends Base {
//   //  静态成员的继承
//   static myGreeting = Derived.getGreeting;
// }
// console.log(Derived.myGreeting());

// class S{
//   static name = 's'//关键字使用error,静态属性“name”与构造函数“S”的内置属性函数“name”冲突。
// }

class MyStaticClass {
  static doSamething() {}
}
// 简写(减少静态类的使用)=> function doSamething(){}
// 简写(减少静态类的使用)=> const MyStaticClass={doSamething(){}}
