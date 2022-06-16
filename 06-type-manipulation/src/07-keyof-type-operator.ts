// 泛型 keypof类型操作符

// type Point = {
//   x: number;
//   y: number;
// };
// type P = keyof Point;
// const p1: P = "x";
// const p2: P = "y";
// // const p3: P = "z";//error 不能将类型“"z"”分配给类型“keyof Point”

type Arrayish = {
  [n: number]: unknown;
};
type A = keyof Arrayish;
const a1: A = 0;
const a2: A = 1;
// const a3: A = "0"; //error 不能将类型“string”分配给类型“number”。

type Mapish = {
  [n: string]: string;
};
type M = keyof Mapish;
const m1: M = 0;
const m2: M = "100";
// const m3: M = true; //error 不能将类型“boolean”分配给类型“string | number”。
