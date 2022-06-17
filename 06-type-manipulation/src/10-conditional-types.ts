// 条件类型

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
// type Example1 = number
type Example1 = Dog extends Animal ? number : string;
// type Example2 = string
type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}
// function creatLabel(id: IdLabel): IdLabel;
// function creatLabel(name: NameLabel): NameLabel;
// function creatLabel(nameOrId: IdLabel | NameLabel): IdLabel | NameLabel;
// function creatLabel(nameOrId: IdLabel | NameLabel): IdLabel | NameLabel {
//   throw "";
// }

// 条件类型，可以避免函数重载的方法去定义类型
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;
function creatLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "";
}
// type a = NameLabel
let a = creatLabel("typescript");
// type b = IdLabel
let b = creatLabel(2.77);
// type c = NameLabel | IdLabel
let c = creatLabel(Math.random() > 0.5 ? "hello" : 42);
