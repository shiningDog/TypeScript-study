// infer关键字,在条件类型内进行推理
// infer R : 个人理解,一个抽象的返回值类型,取决于使用该类型传入的参数类型
type GetReturnType<T> = T extends () => infer R ? R : never;
// type Num = number
type Num = GetReturnType<() => number>;
const num: Num = 100;
// type Num = string
type Str = GetReturnType<() => string>;
const str: Str = "felix";
// type Boole = boolean[]
type Boole = GetReturnType<() => boolean[]>;
const boole: Boole = [true, false];
// type Never = never
type Never = GetReturnType<string>;
const ne: Never = "felix" as never;

function stringOrNum(): number;
function stringOrNum(): string;
function stringOrNum(): string | number;
function stringOrNum(): string | number {
  return Math.random() > 0.5 ? "hello" : 0.3;
}
// type T1 = string | number
// 这里的typeof stringOrNum使用的是签名函数 不是实现函数
type T1 = GetReturnType<typeof stringOrNum>;
