// 成员的可见性 private(私有的,只能在类的内部访问)

// class Base {
//   private x = 0;
//   printX() {
//     console.log(this.x);
//   }
// }
// class Derived extends Base {
//   showX() {
//     // console.log(this.x); //error 属性“x”为私有属性，只能在类“Base”中访问
//   }
// }
// const d = new Derived();
// // console.log(d.x);//属性“x”为私有属性，只能在类“Base”中访问。
// d.printX();

// class A {
//   private x = 10;
//   public sameAs(other: A) {
//     return other.x === this.x;
//   }
// }

// const a = new A();
// console.log(a.sameAs(new A()));
