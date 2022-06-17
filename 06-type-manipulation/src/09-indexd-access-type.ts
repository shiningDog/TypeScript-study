// 索引访问类型

// type Person = {
//   age: number;
//   name: string;
//   alive: boolean;
// };

// type Age = Person["age"];
// let age: Age = 10;
// // age = "10"; //error 不能将类型“string”分配给类型“number”。

interface Person {
  name: string;
  age: number;
  alive: boolean;
}

// type I1 = Person["name"];
// let i1: I1 = "name";
// i1 = 10; //error

type I1 = Person["name" | "age"];
let i1: I1 = "name";
i1 = 10;

type I2 = keyof Person;
let i2: I2 = "name";
i2 = "age";

type I3 = Person[keyof Person];
let i3: I3 = "felix";
i3 = 20;
i3 = true;

type AliveOrName = "alive" | "name";
type I4 = Person[AliveOrName];
let i4: I4 = true;
i4 = "felix";
// i4 = 100;//error

// type I5 = Person["alve"]; //error 类型“Person”上不存在属性“alve”。

const myArray = [
  { name: "felix", age: 13 },
  { name: "bob", age: 25 },
  { name: "eve", age: 39 },
];
// Person1 的类型为一个对象，且有两个属性name和age
type Person1 = typeof myArray[number];
let p: Person1 = {
  name: "xiaoqian",
  age: 11,
  // alive: true,//error 不能将类型“{ name: string; age: number; alive: boolean; }”分配给类型“{ name: string; age: number; }”。
};

type Age = typeof myArray[number]["age"];
let age: Age = 11;
type Age2 = Person1["age"];
let age2: Age2 = 20;

// const key = "age";
type key = "age";
type Age3 = Person[key];

const key = "age";
type Age4 = typeof key;
let age4: Age4 = "age";
// age4 = "a"; //error 不能将类型“"a"”分配给类型“"age"”。
