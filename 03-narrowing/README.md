### typescript study

## 笔记

# 类型守卫

```ts
function printAll(strs: string | string[] | null) {
  // 使用分支进行类型守卫，保证类型的确定性
  if (typeof strs === "object") {
    for (const s of strs) {
      //error：, 当strs=null时，typeof strs === ''object
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // ...
  }
}
```

# 真值缩小

```ts
 // 使用分支和boolean值的类型守卫，来保证类型的确定性
function printAll(strs: string | string[] | null) {
  //使用 真值（boolean）缩小，strs && ...
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // ...
  }
}
function multuplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => {
      return x * factor;
    });
  }
```

# 等值缩小

```ts
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x.toUpperCase() + y.toUpperCase());
  } else {
    console.log(x, y);
  }
}
example("a", "a");

interface Container {
  value: number | null;
}

function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value);
    container.value *= factor;
  }
}

multiplyValue({ value: 5 }, 6);
multiplyValue({ value: null }, 6);
```

# in 操作符缩小

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    return (animal as Fish).swim();
  }
  return (animal as Bird).fly();
}
```

# instanceof 操作符缩小

```ts
function logValue(x: Date | string) {
  // 判断 是Date类型
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    // 否则是字符串类型
    console.log(x.toUpperCase());
  }
}
logValue(new Date());
logValue("hello ts");
```

# 分配缩小

```ts
let x = Math.random() < 0.5 ? 10 : "hello ts";
x = 1;
console.log(x);

x = "goodbyel";
console.log(x);
x = true; //error 不能将类型“boolean”分配给类型“string | number”。
```

# 控制流分析

```ts
function example() {
  let x: string | number | boolean;
  x = Math.random() < 0.5;
  // boolean
  console.log(x);
  if (Math.random() < 0.5) {
    x = "hello"; // string
  } else {
    x = 100; // number
  }
  return x;
}
let x = example();
console.log(x);
x = "string";
x = 100;
// 函数example只会返回number | string 类型
x = true; //error 不能将类型“boolean”分配给类型“string | number”
```

# 使用类型谓词

```ts
// 个人理解：当你想去判断对象类型或接口时，你应该使用类型谓词 paramsName(参数名称) is type(类型)
type Fish = {
  name: string;
  swim: () => void;
};

type Bird = {
  name: string;
  fly: () => void;
};
// pet is Fish 说明：当isFish返回true时候
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish | Bird {
  return Math.random() > 0.5
    ? ({
        fly: () => {
          console.log("麻雀");
        },
      } as Bird)
    : ({
        swim: () => {
          console.log("鲨鱼");
        },
      } as Fish);
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
// 更多使用
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet()];
const underWater: Fish[] = zoo.filter(isFish);
const underWater2: Fish[] = zoo.filter((pet) => {
  (pet as Fish).swim !== undefined;
}) as Fish[];
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "frog") {
    return false;
  }
  return isFish(pet);
});


```

# 受歧视的 unions（联合类型）

```ts
interface Circle {
  kind: "circle";
  redius: number;
}

interface Square {
  kind: "square";
  sideLenght: number;
}

type Shape = Circle | Square;

function handleShape(shape: Shape) {
  if (shape.kind === "square") {
    console.log("给你个正方形");
  }
}

// 使用常用的分支类型缩小来判断该类型;
// function getArea(shape: Shape) {
//   // 方案二
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.redius ** 2;
//     case "square":
//       return shape.sideLenght ** 2;
//   }
// }

// 使用类型谓词来进行判断;
function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}
function getArea(shape: Shape) {
  if (isCircle(shape)) {
    return Math.PI * shape.redius ** 2;
  } else {
    return 4 * shape.sideLenght;
  }
}

```

# never 类型与穷尽性检查

```ts
// never (不应该存在的状态，如永远是空的值，或永远都抛出一个错误时候)，便于检查
// // never 是所有类型的子类型,所以never可以分配给每个类型，但没有任何类型可以分配给never，除本身以外,便于进行与穷尽性检查
interface Circle {
  kind: "circle";
  redius: number;
}

interface Square {
  kind: "square";
  sideLenght: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square | Triangle;
// 使用分支类型缩小判断该类型
function getArea(shape: Shape) {
  // 方案二
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.redius ** 2;
    case "square":
      return shape.sideLenght ** 2;
    default:
      //error，还可能存在triangle类型没做分支判断，这里使用never就可以进行穷尽性检查，
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// // 抛出错误的函数分配给never
const fn: () => never = () => {
  throw new Error("error");
};
// never 分配给 never
const neverVal1: never = "never" as never;
// 其他类型分配给never
const neverVal2: never = "never"; //error


```
