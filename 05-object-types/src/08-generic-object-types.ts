// 泛型对象类型

// interface Box {
//   contents: any;
// }
// // 没有任何意义的类型定义
// const box: Box = {
//   contents: "hello",
// };

// // 在使用unknown类型时
// interface Box {
//   contents: unknown;
// }
// const x: Box = {
//   contents: "hello world",
// };
// // console.log(x.contents.toLocaleLowerCase());//error 对象的类型为 "unknown"
// // 类型守卫解决unknown类型
// if (typeof x.contents === "string") {
//   console.log(x.contents.toLocaleLowerCase());
// }
// // 断言的方式解决unknown类型
// console.log((x.contents as string).toLocaleLowerCase());
// // 但这些都比较鸡肋

// // 使用重载和实现签名来定义setContent函数
// interface NumberBox {
//   contents: number;
// }
// interface StringBox {
//   contents: string;
// }
// interface BooleanBox {
//   contents: boolean;
// }
// function setContent(box: StringBox, newContents: string): void;
// function setContent(box: NumberBox, newContents: number): void;
// function setContent(box: BooleanBox, newContents: boolean): void;
// function setContent(
//   box: { contents: string | number | boolean },
//   newContents: string | number | boolean
// ) {
//   box.contents = newContents;
// }
// // 这里虽然是安全合理的，但书写起来代码量特别大

// interface Box<T> {
//   contents: T;
// }
// interface Apple {
//   name: string;
// }
// const aa: Apple = {
//   name: "felix",
// };
// type AppleBox = Box<Apple>;
// const ab: AppleBox = {
//   contents: aa,
// };

// 类型别名的泛型定义
type Box<T> = {
  contents: T;
};
// 泛型的联合类型定义
type OrNull<T> = T | null;
type OneOrMany<T> = T | T[];
type OneOrManyOrNull<T> = OneOrMany<OrNull<T>>;
type OneOrManyOrNullString = OneOrManyOrNull<string>;
// function setContent(box<T>: Box, newContents: boolean) {
//   box.contents;
// }
