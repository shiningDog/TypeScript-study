// 只读属性
type SomeType = {
  readonly prop: string;
};
function doSomething(obj: SomeType) {
  console.log(obj.prop);
  // obj.prop = "hello"; //error 无法分配到 "prop" ，因为它是只读属性
}

type Home = {
  readonly resident: {
    name: string;
    age: number;
  };
};
function visitForBirthday(home: Home) {
  console.log(home.resident.name);
  home.resident.age++;
}

// function evict(home: Home) {
//   // error 无法分配到 "resident" ，因为它是只读属性。
//   home.resident = {
//     name: "Filix",
//     age: 18,
//   };
// }

// 属性可读可写
interface Person {
  name: string;
  age: number;
}
// 属性都只读
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Felix",
  age: 18,
};
// ts 做到了类型属性兼容，所以Person类型的writablePerson可以赋值给 ReadonlyPerson类型
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
