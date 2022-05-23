function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    //使用 真 值缩小，strs && typeof strs === "object"
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
// 真值缩小
function multuplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map((x) => {
      return x * factor;
    });
  }
}
console.log(multuplyAll([3, 4], 2));
console.log(multuplyAll(undefined, 2));
