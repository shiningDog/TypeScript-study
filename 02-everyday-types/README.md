### typescript study

## 笔记

# 定义数据类型

```ts
let str: string = "hello typescript";
let num: number = 100;
let bool: boolean = true;
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let obj: any = { x: 0 };
let myName = "Filixlu"; //隐式类型定义 为strubf
function greet(name: string): string {
  return `hello ${name.toUpperCase()} `;
}
```

# 联合类型

```ts
function printId(id: string | number) {};
function welcomePeople(x: string[] | string) {};
function getFirshThree(x: number[] | string) {}；
```

# 类型别名（自定义类型）

```ts
type Point = {
  x: number,
  y: number,
};

function printPoint(pt: Point) {
  console.log(`x = ${pt.x} , y= ${pt.y}`);
}

printPoint({
  x: 100,
  y: 101,
});
```

# 接口

```ts
interface Pointy {
  y: number;
}
// interface 可以通过 exteds 继承 start
interface Point extends Pointy {
  x: number;
}
// interface 还可以这样扩展
interface Point {
  z: number;
}
function printPoint(pt: Point) {
  console.log(pt.x + " ----  " + pt.y + " -----" + pt.z);
}
const pt: Point = {
  x: 100,
  y: 200,
  z: 300,
};
printPoint(pt);
```

# 类型

```ts
// type 可以通过 & 符号继承  ---end
type Animal = {
  name: string,
};

type Bear = {
  honey: boolean,
} & Animal;

const bear: Bear = {
  name: "winie",
  honey: true,
};
```

# 断言

```ts
// 建议使用 as
// const myCanvas2 = <HTMLCanvasElement> document.getElementById("main_canvas");
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// let x = (<any>"hello") as number;
let x = "hello" as any as number;
// let y = (<unknown>"hello") as number;
// 总结：
// 断言是为了保证未知数据格式的一种校验方式
// 使用场景：
// 1.当你确定未知数据是某一种格式时
// 2.当你大概知道未知数据格式时

```

# 文字类型

```ts
function hanlderRequest(url: string, method: "GET" | "POST" | "GUSS") {}
const req = {
  url: "https://example.com",
  method: "GET",
} as const;
hanlderRequest(req.url, req.method);

const req = {
  url: "https://example.com",
  method: "GET" as 'GET'// 指定method的值为'GET'类型
hanlderRequest(req.url, req.method);

const req = {
  url: "https://example.com",
  method: "GET",
};
hanlderRequest(req.url, req.method as "GET");

const req = {
  url: "https://example.com",
  method: "GET",
};
hanlderRequest(req.url, req.method); //error req.method 是string类型，不是指定的'GET' | 'POST' | 'GUSS'
```

# null undefined

```ts
function liveDangerously(x?: number | null | undefined) {
  console.log(x!.toFixed()); //仅当你知道这个值不可能是null或者undefined时去使用，并使其正常编译，但会出现意想不到的问题
  console.log(x?.toFixed()); //等价于三元表达式，使其正常编译，正常运行
}
liveDangerously(123);
liveDangerously();
```

# 枚举

```ts
enum Direction {
  Up = 1, //不设置的话，默认对应的标识为0
  Down,
  Left,
  Right,
}
// {
//   '1': 'Up',
//   '2': 'Down',
//   '3': 'Left',
//   '4': 'Right',
//   Up: 1,
//   Down: 2,
//   Left: 3,
//   Right: 4
// }
console.log(Direction.Up);//1
```

# bigint（比较大的数字）

```ts
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n; //注意：这里需要将配置文件中的target设置为es2020，不然兼容不了bugint

```


# Symbol（唯一值）

```ts
const firstName = Symbol("name");
const secondName = Symbol("name");
if (firstName === secondName) {
  //error 由于Symbol的唯一性，他们始终不可能相等
  console.log("ok");
}
```
