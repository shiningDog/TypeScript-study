### typescript study

## 笔记



# 01-函数类型表达式

```ts
type greeterFun = (a: string) => void;

function greeter(fn: greeterFun) {
  fn("hello world");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

# 02-调用函数签名（对象声明函数）

```ts
type DescribableFunction = {
  description: string; // 函数属性
  (someArgentina: number): boolean; // 参数类型:返回值的类型
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function fun1(n: number) {
  console.log(n);
  return true;
}
// fun1必须拥有类型DescribableFunction所具备的属性
// fun1可以选择是否添加参数
fun1.description = "hello";
doSomething(fun1);
```

# 03-构造签名

```ts
class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s;
  }
}
type SomeConstructor = {
  new (s: string): Ctor; //new (函数入参):构造器
};
function fun(fn: SomeConstructor, s: string) {
  return new fn(s); //上面定义了new 构造函数，这里也需要new
}
const f = fun(Ctor, "hello");
console.log(f.s);
// 怎么使用联合签名
interface CallOrConstructor {
  new (s: string): Date; // 构造签名
  (n?: number): number; // 调用签名
}
function fn(data: CallOrConstructor) {
  let d = new data("2022-05-27");
  let n = data(100);
}
```

# 04-泛型函数

```ts
// // 不友好的使用，不能明确返回值类型
// function firstElement(arr: any[]) {
//   // return arr[0];// 这里没有问题
//   //这里依然没有问题，但我传入的实际上是一个字符串数组，可返回的是数字
//   // 这里其实是没有做到对应的返回值类型，虽然代码没错，但不能避免类型冲突
//   return 100;
// }
// firstElement(["a", "b", "c"]);

// 友好操作
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
// firstElement(["a", "b", "c"]);
// firstElement([1, 2, 3]);
firstElement<number>([1, 2, 3]);
const sArr: string[] = ["1", "2", "3"];
// firstElement<string>([1, 2, 3]);//error
// firstElement<number>(sArr); //error
firstElement<string>(sArr);
firstElement([null]);
firstElement([]);

// 多泛型
function stringTransNumber<T, O>(arr: T[], func: (arg: T) => O): O[] {
  return arr.map(func);
}
stringTransNumber(["1", "2", "3"], (arg) => {
  return parseInt(arg);
});
```

# 05-泛型函数-限制条件

```ts
// <T extends { length: number }>强制T拥有length属性，否则函数体内分支报错
function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}
const longerArray = longest([1, 2], [2, 3, 4]);
const longerString = longest("felix", "lu");
// const notOk = longest(10, 100);//error 由于限制T必须得有length属性，所有报错
```

# 06-泛型函数-使用受限值

```ts
function minimumLength<T extends { length: number }>(
  obj: T,
  minimum: number
): T {
  if (obj.length > minimum) {
    return obj;
  } else {
    //error 举例:执行下方该函数时，推断泛型应该是数组，且拥有slice属性，而这里的没有返回
    return { length: minimum };
  }
}

const arr = minimumLength([1, 2, 3], 6);
console.log(arr.slice(0));
```

# 07-泛型函数 - 制定类型参数

```ts
function combine<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2);
}
combine([1, 2, 3], [2, 3, 4]);
// combine([1, 2, 3], ["2", "3", "4"]);//error ts推断此时泛型应该为number,而arr2参数却为string
combine<number | string>([1, 2, 3], ["2", "3", "4"]); //不推荐强制转换，但这里可以指定泛型类型

```

# 08-泛型类型-编写优秀通用函数的准则

```ts
// 1.可能的情况下，使用类型参数本身，而不是对其进行约束
// 推荐写法,ts可以直接推断出返回的类型为T
function firstElement1<T>(arr: T[]) {
  return arr[0];
}
// 不推荐写法，因为只有当firstElement2执行时，才能推断出该函数的返回值类型
function firstElement2<T extends any[]>(arr: T) {
  return arr[0];
}

// 2.总是尽可能少的使用类型参数
// 推荐写法
function filter1<T>(arr: T[], func: (arg: T) => boolean) {
  return arr.filter(func);
}
// 推荐写法,这里单独为func参数定义了一个类型
// 下面发泛型F被无缘无故的创建出来,这里不仅更难阅读，也更不好让ts进行推理
function filter2<T, F extends (arg: T) => boolean>(arr: T[], func: F) {
  return arr.filter(func);
}

// 3.如果一个类型的参数只出现在一个地方，请重新考虑你是否真的需要它
// 推荐写法，简单明了
function greet1(s: string) {
  console.log("hello" + s);
}
greet1("world");
// 不推荐，类型参数只在一处地方用到过，使用greet1的写法更好让ts进行推断
function greet2<Str extends string>(s: Str) {
  console.log("hello" + s);
}
greet2("world");
```

# 09-函数的可选参数

```ts
function f(n: number = 100) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}
f(123.45);
f();
```

# 10-回调中的可选参数

```ts
// 当你为回调写一个函数类型时，永远不要写一个可选参数，除非你打算在不传递该参数的情况下调用函数
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    // callback(arr[i], i);
    callback(arr[i]);
  }
}

// myForEach(["张三", "李四", "王五"], (name) => console.log(name));
myForEach(["张三", "李四", "王五"], (name, index) => {
  console.log(name);
  //error index属性在myForEach的回调中可能为空
  // 所以，永远不要写一个可选参数做为回调函数的参数，除非你打算在使用该参数的情况下调用函数
  // console.log(index.toFixed());
});
```

# 11-函数重载

```ts
// 重载签名
function makeDate(timestamp: number): Date;
// 重载签名
function makeDate(m: number, d: number, y: number): Date;
// 实现签名
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(123456789);
const d2 = makeDate(5, 6, 7);
// const d3 =makeDate(5,6)//error 没有需要 2 参数的重载，但存在需要 1 或 3 参数的重载
```

# 12-函数重载 重载签名 和 实现签名

```ts
// // 写法一
// function fn(x:string):void
// function fn(){}
// // fn()//error应有 1 个参数，但获得 0 个
// fn('hello')

// // 写法二
// function fn(x: boolean): void;
// function fn(x: string): void;
// function fn(x: boolean | string) {}

// 写法三
function fn(x: string): string;
function fn(x: boolean): boolean;
function fn(x: string | boolean): string | boolean {
  return true;
  // return "hello";
}
```

# 13-函数重载-编写好的重载

```ts
// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }
// len("hello");
// len([1, 2, 3]);
// len(Math.random() > 0.5 ? "hello" : [4, 5, 6]);//error 联合类型不能被赋值

// 最好的直接使用
function len(x: any[] | string) {
  return x.length;
}
len(Math.random() > 0.5 ? "hello" : [4, 5, 6]);
```

# 14-函数重载-函数内this的声明

```ts
interface User {
  admin: boolean;
}
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}
const db: DB = {
  filterUsers: (filter: (this: User) => boolean) => {
    let user1 = {
      admin: true,
    };
    let user2 = {
      admin: false,
    };
    return [user1, user2]
  },
};
const admins = db.filterUsers(function (this) {
  return this.admin;
});
console.log("admins", admins);
// error 箭头函数不能包含 "this" 参数
// const admins = db.filterUsers((this)=> {
//   return this.admin;
// });
```
# 15-需要了解的其他类型

```ts
// void:没有返回值的函数的返回值
function noop() {
  return;
} //ts 默认推断返回void

// // unknown:代表任何值，与any类型类似，但更安全，ts不允许对unknown类型进行任何操作
// function f1(a: any) {
//   return a.b();
// }
// function f2(a: unknown) {
//   return a.b(); //error 对象的类型为 "unknown"
// }

// never: 永远不会被观察到值
function f1(a: string | number) {
  if (typeof a === "string") {
    return a.length;
  } else if (typeof a === "number") {
    return a.toFixed(1);
  } else {
    const val: never = a; //永远不会执行到这里，但可以帮你进行分支缩小检查
  }
}

function f2(): never {
  throw new Error("错误信息");
}

function f3(): never {
  while (true) {}
}

// Function:总是可以被调用的类型，但调用的永远返回any
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```
# 16-参数展开运算符-形参展开

```ts
function multuply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
const a = multuply(10, 1, 2, 3, 4);
console.log(a);
```
# 17-参数展开运算符-实参展开

```ts
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);
console.log(arr1); // [1,2,3,4,5,6]

arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1); // [1,2,3,4,5,6]

// const args = [8, 5];
// atan2需要2个参数,可ts不确定args展开后的数量
// const angle = Math.atan2(...args);// error 扩张参数必须具有元组类型或传递给 rest 参数

const args = [8, 5] as const; // 断言args为常量就可以确定args的数量了
const angle = Math.atan2(...args);

```
# 18-参数解构

```ts
type Abc = {
  a: number;
  b: number;
  c: number;
};
function sun({ a, b, c }: Abc) {
  console.log(a + b + c);
}
sun({
  a: 10,
  b: 3,
  c: 9,
});

```
# 19-返回void类型

```ts
// 函数类型，返回viod时，往往会被忽略，所以下方代码返回任何数据都是可以被正常编译的
type VoidFunc = () => void;
const f1: VoidFunc = () => {
  return true;
};
const f2: VoidFunc = () => true;
const f3: VoidFunc = function () {
  return true;
};
const v1: void = f1();
const v2 = f2();
const v3 = f3();

// 字面量函数返回void时(不需要返回任何内容)
// function f4(): void {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// }
// const f5 = function (): void {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// };
// const f6 = (): void => {
//   return true; //error 不能将类型“boolean”分配给类型“void”。
// };

```