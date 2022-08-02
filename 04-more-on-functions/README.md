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

# todo

```ts

```

# todo

```ts

```

# todo

```ts

```

# todo

```ts

```

# todo

```ts

```

# todo

```ts

```
