### typescript study

## 笔记

# 类型守卫

```js
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

```js
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

```js
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

```js
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

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```

# 拟标题

```js

```
