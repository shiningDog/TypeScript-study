// 分布式条件类型

// type ToArray<T> = T extends any ? T[] : never;
// // type StrArrOrNumArr = string[] | number[]
// type StrArrOrNumArr = ToArray<string | number>;
// const strArr: StrArrOrNumArr = ["1", "2", "3"];
// const numArr: StrArrOrNumArr = [1, 2, 3];

type ToArrayNonDist<T> = [T] extends [any] ? T[] : never;
type StrArrOrNumArr = ToArrayNonDist<string | number>;
const arr: StrArrOrNumArr = ["1", 2];
