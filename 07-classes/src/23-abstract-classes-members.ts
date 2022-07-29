// 抽象类和成员

abstract class Base {
  abstract getName(): string;
  printName() {
    console.log(this.getName());
  }
}
// const b = new Base()//error 无法创建抽象类的实例。(抽象类无法被实例化)
class Derived extends Base {
  getName(): string {
    return "world";
  }
}
const d = new Derived();
console.log(d.getName());
d.printName();
// ctor可以使用new ()=>Base 的方式去在函数体内进行实例化
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName()
}
greet(Derived)
