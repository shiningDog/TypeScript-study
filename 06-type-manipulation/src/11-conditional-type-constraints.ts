// 条件约束类型

// type MessageOf<T> = T['message']//error 类型“"message"”无法用于索引类型“T”。

// type MessageOf<T extends { message: unknown }> = T["message"];
// interface Email {
//   message: string;
// }
// type EmailMessageContents = MessageOf<Email>;

// type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
// interface Email {
//   message: string;
// }
// interface Dog {
//   bark(): void;
// }
// // type EmailMessageContents = string
// type EmailMessageContents = MessageOf<Email>;
// const emc: EmailMessageContents = "hello";
// // type DogMessageContents = nerve
// type DogMessageContents = MessageOf<Dog>;
// const dmc: DogMessageContents = "f" as never; //注意 不能将类型“string”分配给类型“never”。

// type Flatten<T> = T extends any[] ? T[number] : T;
// // type Str = string
// type Str = Flatten<string>;
// // type Str = number
// type Num = Flatten<number>;
// // type Any = any
// type Any = Flatten<any[]>;
